(ns gilastore-ui.views.products
  (:require [reagent.core :as r]
            [gilastore-ui.api :as api]
            [gilastore-ui.views.product-modal :refer [product-modal]]
            [gilastore-ui.views.confirm-modal :refer [confirm-modal]]
            [gilastore-ui.views.product-import-modal :refer [product-import-modal]]
            [clojure.string :as str]))

(defonce products-state (r/atom {:items []
                                 :current-page 1
                                 :last-page 1
                                 :links []
                                 :search-term ""
                                 :loading? false
                                 :error nil}))

(defonce show-modal? (r/atom false))
(defonce editing-product (r/atom nil))
(defonce show-delete-modal? (r/atom false))
(defonce product-to-delete (r/atom nil))
(defonce show-import-modal? (r/atom false))
(defonce show-details-modal? (r/atom false))
(defonce viewing-product (r/atom nil))

(defn show-msg! [title message type]
  (js/alert (str title ": " message)))

(defn fetch-products [page-num]
  (let [{:keys [search-term]} @products-state]
    (swap! products-state assoc :loading? true :error nil)
    (let [query-url (if (seq search-term)
                      (str "/products?page=" page-num "&search=" (js/encodeURIComponent search-term))
                      (str "/products?page=" page-num))]
      (-> (api/api-fetch query-url)
          (.then (fn [res]
                   (if (.-ok res)
                     (.json res)
                     (throw (js/Error "There was an error when loading products")))))
          (.then (fn [data]
                   (let [clj-data (js->clj data :keywordize-keys true)
                         items (or (:data clj-data) [])
                         current-page (or (:current_page clj-data) 1)
                         last-page (or (:last_page clj-data) 1)
                         links (or (:links clj-data) [])]
                     (swap! products-state assoc
                            :items items
                            :current-page current-page
                            :last-page last-page
                            :links links
                            :loading? false))))
          (.catch (fn [err]
                    (swap! products-state assoc :error (.-message err) :loading? false)))))))

(defn search-products [query-str]
  (if (str/blank? query-str)
    (fetch-products 1)
    (do
      (swap! products-state assoc :loading? true :error nil)
      (let [url (str "/products/search/" (js/encodeURIComponent query-str))]
        (-> (api/api-fetch url {:method "GET"})
            (.then (fn [res]
                     (if (.-ok res)
                       (.json res)
                       (throw (js/Error "Error al realizar la búsqueda")))))
            (.then (fn [data]
                     (let [clj-data (js->clj data :keywordize-keys true)
                           paginated-data (or (:data clj-data) clj-data)
                           results (or (:data paginated-data) [])
                           current-page (or (:current_page paginated-data) 1)
                           last-page (or (:last_page paginated-data) 1)
                           links (or (:links paginated-data) [])]
                       (swap! products-state assoc
                              :items results
                              :current-page current-page
                              :last-page last-page
                              :links links
                              :loading? false))))
            (.catch (fn [err]
                      (swap! products-state assoc :error (.-message err) :loading? false))))))))

(defn products-view []
  (let [state @products-state
        {:keys [items links current-page last-page loading? error]} state
        is-modal-open? @show-modal?
        product-edit @editing-product
        is-delete-open? @show-delete-modal?
        del-product @product-to-delete
        product-is-import-open? @show-import-modal?
        is-details-open? @show-details-modal?
        prod-details @viewing-product]

    [:div.products-container

     [product-modal
      is-modal-open?
      product-edit
      (fn [] (reset! show-modal? false))
      (fn []
        (reset! show-modal? false)
        (fetch-products current-page))]

     [confirm-modal
      is-delete-open?
      "Delete Confirmation"
      (str "Are you sure you want to delete the product \"" (:Name del-product) "\"? This action cannot be undone.")
      (fn []
        (when del-product
          (-> (api/api-fetch (str "/products/" (:ProductId del-product))
                             {:method "DELETE"})
              (.then (fn [res]
                       (if (.-ok res)
                         (do
                           (reset! show-delete-modal? false)
                           (reset! product-to-delete nil)
                           (fetch-products current-page))
                         (js/alert "Error deleting product"))))
              (.catch (fn [err] (js/alert (.-message err)))))))
      (fn []
        (reset! show-delete-modal? false)
        (reset! product-to-delete nil))]

     [product-import-modal
      product-is-import-open?
      (fn [] (reset! show-import-modal? false))
      (fn []
        (reset! show-import-modal? false)
        (show-msg! "Successful Import" "The products from the CSV file have been processed successfully." :success)
        (fetch-products current-page))]

     ;; Modal para Ver Detalles del Producto
     (when (and is-details-open? prod-details)
       [:div.admin-modal-overlay
        [:div.admin-modal-card
         [:h3.admin-modal-title "📦 Product Details"]
         [:div.product-details-content
          [:p [:strong "ID: "] (or (:ProductId prod-details) (:product_id prod-details) (:id prod-details))]
          [:p [:strong "Name: "] (or (:Name prod-details) (:name prod-details))]
          [:p [:strong "SKU: "] (or (:SKU prod-details) (:sku prod-details))]
          [:p [:strong "Category: "] (or (get-in prod-details [:category :Name]) (get-in prod-details [:category :name]) (:category prod-details) "N/A")]
          [:p [:strong "Price: "] [:span.product-price-highlight (str "$" (or (:Price prod-details) (:price prod-details)))]]
          [:p [:strong "Weight (KG): "] (or (:Weight_KG prod-details) (:weight_kg prod-details) "0.00")]
          [:p [:strong "Description: "] (or (:Description prod-details) (:description prod-details) "No description available.")]
          [:p [:strong "Created At: "] (or (:Created_at prod-details) (:CreatedAt prod-details) "N/A")]]
         [:div.admin-modal-actions
          [:button.admin-btn-cancel {:on-click (fn []
                                                 (reset! show-details-modal? false)
                                                 (reset! viewing-product nil))}
           "Close"]]]])

     [:div.products-header-bar
      [:h2.products-title "📦 Product Inventory"]

      [:div.products-actions-wrapper
       [:input.products-search-input {:type "text"
                                      :placeholder "Search by name or SKU..."
                                      :value (:search-term state)
                                      :on-change (fn [e]
                                                   (swap! products-state assoc :search-term (-> e .-target .-value)))}]

       [:button.products-btn-search {:on-click #(search-products (:search-term @products-state))}
        "Search"]

       (when (seq (:search-term state))
         [:button.products-btn-reset {:on-click (fn []
                                                  (swap! products-state assoc :search-term "")
                                                  (fetch-products 1))}
          "Reset"])

       [:div.products-modal-buttons
        [:button.products-btn-import {:on-click (fn [] (reset! show-import-modal? true))}
         "📁 Import CSV"]

        [:button.products-btn-add {:on-click (fn []
                                               (reset! editing-product nil)
                                               (reset! show-modal? true))}
         "➕ Add"]]]]

     (when loading?
       [:p.products-loading "Loading product list..."])

     (when error
       [:div.products-error error])

     (when-not loading?
       [:<>
        [:div.products-table-wrapper
         [:table.products-table
          [:thead
           [:tr.products-tr-header
            [:th.products-th "ID"]
            [:th.products-th "Product Name"]
            [:th.products-th "Category"]
            [:th.products-th "Price"]
            [:th.products-th "SKU"]
            [:th.products-th-center "Actions"]]]
          [:tbody
           (if (empty? items)
             [:tr
              [:td.products-empty-cell {:col-span "6"}
               "No products found."]]

             (for [[idx product] (map-indexed vector items)]
               (let [product-id (or (:ProductId product) (:product_id product) (:id product))
                     product-sku (or (:SKU product) (:sku product))
                     row-key (str (or product-id "item") "-" (or product-sku "sku") "-" idx)]
                 ^{:key row-key}
                 [:tr.products-tr
                  [:td.products-td product-id]
                  [:td.products-td-bold (or (:Name product) (:name product))]
                  [:td.products-td (or (get-in product [:category :Name]) (get-in product [:category :name]) (:category product))]
                  [:td.products-td (str "$" (or (:Price product) (:price product)))]
                  [:td.products-td product-sku]
                  [:td.products-td-center
                   [:button.products-btn-details {:on-click (fn []
                                                              (reset! viewing-product product)
                                                              (reset! show-details-modal? true))}
                    "👁️"]
                   [:button.products-btn-edit {:on-click (fn []
                                                           (reset! editing-product product)
                                                           (reset! show-modal? true))}
                    "✏️"]
                   [:button.products-btn-delete {:on-click (fn []
                                                             (reset! product-to-delete product)
                                                             (reset! show-delete-modal? true))}
                    "🗑️"]]])))]]]

        (when (and (seq links) (> last-page 1))
          [:div.pagination-container
           (for [link links]
             (let [page-num (:page link)
                   label (:label link)
                   active? (:active link)]
               ^{:key label}
               [:button.pagination-btn {:disabled (nil? page-num)
                                        :class (when active? "active")
                                        :on-click #(when page-num (fetch-products page-num))}
                (cond
                  (str/includes? label "Previous") "« Prev"
                  (str/includes? label "Next") "Next »"
                  :else label)]))])])]))

(fetch-products 1)