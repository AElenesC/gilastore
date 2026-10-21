(ns gilastore-ui.views.catalog
  (:require [reagent.core :as r]
            [gilastore-ui.api :as api]
            [clojure.string :as str]
            [gilastore-ui.state :as state]))

(defonce catalog-state (r/atom {:products []
                                :current-page 1
                                :last-page 1
                                :links []
                                :search-term ""
                                :loading? false
                                :error nil
                                :cart []
                                :quantities {}}))

(defn fetch-catalog-products [page-num]
  (let [{:keys [search-term]} @catalog-state]
    (swap! catalog-state assoc :loading? true :error nil)
    (let [query-url (if (seq search-term)
                      (str "/products?page=" page-num "&search=" (js/encodeURIComponent search-term))
                      (str "/products?page=" page-num))]
      (-> (api/api-fetch query-url)
          (.then (fn [res]
                   (if (.-ok res)
                     (.json res)
                     (throw (js/Error "Error loading product catalog")))))
          (.then (fn [data]
                   (let [clj-data (js->clj data :keywordize-keys true)
                         items (or (:data clj-data) [])
                         current-page (or (:current_page clj-data) 1)
                         last-page (or (:last_page clj-data) 1)
                         links (or (:links clj-data) [])]
                     (swap! catalog-state assoc
                            :products items
                            :current-page current-page
                            :last-page last-page
                            :links links
                            :loading? false))))
          (.catch (fn [err]
                    (swap! catalog-state assoc :error (.-message err) :loading? false)))))))

(defn search-catalog [query-str]
  (if (str/blank? query-str)
    (fetch-catalog-products 1)
    (do
      (swap! catalog-state assoc :loading? true :error nil)
      (let [url (str "/products/search/" (js/encodeURIComponent query-str))]
        (-> (api/api-fetch url {:method "GET"})
            (.then (fn [res]
                     (if (.-ok res)
                       (.json res)
                       (throw (js/Error "Error performing search")))))
            (.then (fn [data]
                     (let [clj-data (js->clj data :keywordize-keys true)
                           paginated-data (or (:data clj-data) clj-data)
                           results (or (:data paginated-data) [])
                           current-page (or (:current_page paginated-data) 1)
                           last-page (or (:last_page paginated-data) 1)
                           links (or (:links paginated-data) [])]
                       (swap! catalog-state assoc
                              :products results
                              :current-page current-page
                              :last-page last-page
                              :links links
                              :loading? false))))
            (.catch (fn [err]
                      (swap! catalog-state assoc :error (.-message err) :loading? false))))))))

(defn set-product-quantity [product-id qty]
  (let [parsed-qty (max 1 (js/parseInt (if (empty? qty) 1 qty) 10))]
    (swap! catalog-state assoc-in [:quantities product-id] parsed-qty)))

(defn add-to-cart [product]
  (let [product-id (or (:ProductId product) (:product_id product) (:id product))
        quantities (get @catalog-state :quantities {})
        qty (get quantities product-id 1)
        current-user @state/current-user-atom
        userid (cond
                 (:userid current-user) (:userid current-user)
                 (string? current-user) current-user
                 :else (or (js/localStorage.getItem "userid") ""))

        payload (js/JSON.stringify (clj->js {:UserId userid
                                             :ProductId product-id
                                             :Quantity (str qty)}))]

    (-> (api/api-fetch "/salescart/additem"
                       {:method "POST"
                        :headers {"Content-Type" "application/json"}
                        :body payload})
        (.then (fn [res]
                 (if (.-ok res)
                   (.json res)
                   (throw (js/Error "Error adding item to cart")))))
        (.then (fn [data]
                 (let [clj-data (js->clj data :keywordize-keys true)]
                   (if (= (:status clj-data) "success")
                     (do
                       (swap! catalog-state update :cart conj (first (:data clj-data)))
                       (js/alert (str "Successfully added " qty " unit(s) of " (or (:Name product) (:name product)) " to the cart!")))
                     (js/alert (or (:message clj-data) "Could not add item to cart."))))))
        (.catch (fn [err]
                  (js/console.error "Cart error:" err)
                  (js/alert "Connection error while adding item to cart."))))))

(defn catalog-view []
  (let [state @catalog-state
        {:keys [products loading? error cart quantities links last-page search-term]} state]

    (when (and (empty? products) (not loading?) (nil? error) (empty? search-term))
      (fetch-catalog-products 1))

    [:div.catalog-container

     [:div.catalog-header-bar
      [:h2.catalog-title "🛒 Product Catalog"]

      [:div.catalog-search-wrapper
       [:input.catalog-search-input {:type "text"
                                     :placeholder "Search by name or SKU..."
                                     :value search-term
                                     :on-change (fn [e]
                                                  (swap! catalog-state assoc :search-term (-> e .-target .-value)))}]

       [:button.catalog-btn-search {:on-click #(search-catalog search-term)}
        "Search"]

       (when (seq search-term)
         [:button.catalog-btn-reset {:on-click (fn []
                                                 (swap! catalog-state assoc :search-term "")
                                                 (fetch-catalog-products 1))}
          "Reset"])]

      [:div.catalog-cart-badge
       (str "Items in cart: " (count cart))]]

     (when loading?
       [:p.catalog-loading "Loading catalog..."])

     (when error
       [:div.catalog-error error])

     (when-not loading?
       [:<>
        [:div.catalog-grid
         (if (empty? products)
           [:div.catalog-empty "No products available at the moment."]

           (for [product products]
             (let [id (or (:ProductId product) (:product_id product) (:id product))
                   name (or (:Name product) (:name product))
                   description (or (:Description product) (:description product))
                   price (or (:Price product) (:price product))
                   sku (or (:SKU product) (:sku product))
                   current-qty (get quantities id 1)]
               ^{:key id}
               [:div.product-card
                [:div
                 [:div.product-card-top
                  [:h4.product-name name]
                  [:span.product-sku sku]]
                 [:p.product-description
                  (if (str/blank? description) "No description available." description)]]

                [:div.product-card-footer
                 [:div.product-price-qty-row
                  [:span.product-price (str "$" price)]
                  [:div.product-qty-wrapper
                   [:label.product-qty-label "Qty:"]
                   [:input.product-qty-input {:type "number"
                                              :min "1"
                                              :value current-qty
                                              :on-change (fn [e] (set-product-quantity id (-> e .-target .-value)))}]]]
                 [:button.product-btn-add {:on-click #(add-to-cart product)}
                  "Add to Cart 🛍️"]]])))]

        (when (and (seq links) (> last-page 1))
          [:div.pagination-container
           (for [link links]
             (let [page-num (:page link)
                   label (:label link)
                   active? (:active link)]
               ^{:key label}
               [:button.pagination-btn {:disabled (nil? page-num)
                                        :class (when active? "active")
                                        :on-click #(when page-num (fetch-catalog-products page-num))}
                (cond
                  (str/includes? label "Previous") "« Prev"
                  (str/includes? label "Next") "Next »"
                  :else label)]))])])]))