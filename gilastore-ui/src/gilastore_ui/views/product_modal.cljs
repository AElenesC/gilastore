(ns gilastore-ui.views.product-modal
  (:require [reagent.core :as r]
            [gilastore-ui.api :as api]
            [clojure.string :as s]))

(def initial-form-data
  {:Name ""
   :SKU ""
   :Description ""
   :Weight_KG ""
   :Price ""
   :CategoryId 1
   :Created_by 1
   :initial_stock ""})

(defonce global-categories (r/atom []))
(defonce categories-loading? (r/atom false))

(defn- fetch-categories-once! []
  (when (and (empty? @global-categories) (not @categories-loading?))
    (reset! categories-loading? true)
    (-> (api/api-fetch "/products/categories")
        (.then (fn [res]
                 (if (.-ok res)
                   (.json res)
                   (throw (js/Error "Error al cargar las categorías")))))
        (.then (fn [data]
                 (let [clj-data (js->clj data :keywordize-keys true)
                       cats (if (vector? clj-data) clj-data (or (:data clj-data) []))]
                   (reset! global-categories cats)
                   (reset! categories-loading? false))))
        (.catch (fn [_]
                  (reset! categories-loading? false))))))

(defn- product-form [product-to-edit on-close-fn on-success-fn]
  (let [is-editing? (some? product-to-edit)
        initial-data (if is-editing?
                       {:Name (:Name product-to-edit)
                        :SKU (:SKU product-to-edit)
                        :Description (or (:Description product-to-edit) "")
                        :Weight_KG (str (:Weight_KG product-to-edit))
                        :Price (str (:Price product-to-edit))
                        :CategoryId (:CategoryId product-to-edit)
                        :Created_by (:Created_by product-to-edit 1)
                        :initial_stock ""}
                       initial-form-data)

        form-state (r/atom initial-data)
        saving?    (r/atom false)
        error-msg  (r/atom nil)]

    (fetch-categories-once!)

    (when-let [first-cat (first @global-categories)]
      (when (= (:CategoryId @form-state) 1)
        (swap! form-state assoc :CategoryId (:CategoryId first-cat))))

    (fn []
      [:div
       (when @error-msg
         [:div.pmodal-error @error-msg])

       [:form {:on-submit (fn [e]
                            (.preventDefault e)
                            (reset! saving? true)
                            (reset! error-msg nil)
                            (let [raw-payload (if is-editing?
                                                {:Name (:Name @form-state)
                                                 :SKU (:SKU @form-state)
                                                 :Description (:Description @form-state)
                                                 :Weight_KG (js/parseFloat (:Weight_KG @form-state))
                                                 :Price (js/parseFloat (:Price @form-state))
                                                 :CategoryId (js/parseInt (:CategoryId @form-state))
                                                 :Updated_by 1}
                                                {:name (:Name @form-state)
                                                 :sku (:SKU @form-state)
                                                 :description (:Description @form-state)
                                                 :weight_kg (js/parseFloat (:Weight_KG @form-state))
                                                 :price (js/parseFloat (:Price @form-state))
                                                 :CategoryId (js/parseInt (:CategoryId @form-state))
                                                 :Created_by 1
                                                 :initial_stock (js/parseInt (:initial_stock @form-state))})

                                  method (if is-editing? "PATCH" "POST")
                                  url (if is-editing?
                                        (str "/products/" (:ProductId product-to-edit))
                                        "/products")

                                  payload (js/JSON.stringify (clj->js raw-payload))]

                              (-> (api/api-fetch url
                                                 {:method method
                                                  :body payload})
                                  (.then (fn [res]
                                           (if (.-ok res)
                                             (.json res)
                                             (-> (.json res)
                                                 (.then (fn [err-json]
                                                          (let [err-data (js->clj err-json :keywordize-keys true)
                                                                msg (or (:message err-data) "Error de validación")
                                                                errors (s/join ", " (map (fn [[k v]] (str (name k) ": " (first v))) (:errors err-data)))]
                                                            (throw (js/Error (if (seq (:errors err-data)) (str msg " (" errors ")") msg))))))))))
                                  (.then (fn [_]
                                           (reset! saving? false)
                                           (on-success-fn)))
                                  (.catch (fn [err]
                                            (reset! saving? false)
                                            (reset! error-msg (.-message err)))))))}

        [:div.pmodal-field
         [:label.pmodal-label "Product Name:"]
         [:input.pmodal-input {:type "text" :required true
                               :placeholder "Ej. Cafetera Express Pro"
                               :value (:Name @form-state)
                               :on-change #(swap! form-state assoc :Name (-> % .-target .-value))}]]

        [:div.pmodal-row
         [:div.pmodal-col
          [:label.pmodal-label "SKU:"]
          [:input.pmodal-input {:type "text" :required true
                                :placeholder "CAF-EXP-001"
                                :value (:SKU @form-state)
                                :on-change #(swap! form-state assoc :SKU (-> % .-target .-value))}]]

         [:div.pmodal-col
          [:label.pmodal-label "Category:"]
          [:select.pmodal-select {:value (:CategoryId @form-state)
                                  :on-change #(swap! form-state assoc :CategoryId (js/parseInt (-> % .-target .-value)))}
           (if (empty? @global-categories)
             [:option {:value ""} "Cargando categorías..."]
             (for [cat @global-categories]
               ^{:key (:CategoryId cat)}
               [:option {:value (:CategoryId cat)} (:Name cat)]))]]]

        [:div.pmodal-field
         [:label.pmodal-label "Description:"]
         [:textarea.pmodal-textarea {:rows 2
                                     :placeholder "Descripción breve..."
                                     :value (:Description @form-state)
                                     :on-change #(swap! form-state assoc :Description (-> % .-target .-value))}]]

        [:div.pmodal-row
         [:div.pmodal-col
          [:label.pmodal-label "Price ($):"]
          [:input.pmodal-input {:type "number" :step "0.01" :required true
                                :placeholder "2499.99"
                                :value (:Price @form-state)
                                :on-change #(swap! form-state assoc :Price (-> % .-target .-value))}]]
         [:div.pmodal-col
          [:label.pmodal-label "Weight (KG):"]
          [:input.pmodal-input {:type "number" :step "0.001" :required true
                                :placeholder "4.500"
                                :value (:Weight_KG @form-state)
                                :on-change #(swap! form-state assoc :Weight_KG (-> % .-target .-value))}]]]

        (when-not is-editing?
          [:div.pmodal-field
           [:label.pmodal-label "Initial Stock:"]
           [:input.pmodal-input {:type "number" :required true :min "0"
                                 :placeholder "25"
                                 :value (:initial_stock @form-state)
                                 :on-change #(swap! form-state assoc :initial_stock (-> % .-target .-value))}]])

        [:div.pmodal-actions
         [:button.pmodal-btn-cancel {:type "button"
                                     :on-click on-close-fn
                                     :disabled @saving?}
          "❌ Cancel"]
         [:button.pmodal-btn-submit {:type "submit"
                                     :disabled @saving?}
          (if @saving? "⏳ Saving..." (if is-editing? "💾 Update Product" "💾 Save Product"))]]]])))

(defn product-modal [open? product-to-edit on-close-fn on-success-fn]
  (if-not open?
    [:div]
    [:div.pmodal-overlay
     [:div.pmodal-card
      [:div.pmodal-header
       [:h3.pmodal-title
        (if product-to-edit "✏️ Edit Product" "➕ Add New Product")]
       [:button.pmodal-close {:on-click on-close-fn}
        "×"]]

      [product-form product-to-edit on-close-fn on-success-fn]]]))