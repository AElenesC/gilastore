(ns gilastore-ui.views.my-orders
  (:require [reagent.core :as r]
            [gilastore-ui.api :as api]))

(defonce orders-state (r/atom {:orders []
                               :loading? false
                               :error nil}))

(defn fetch-user-orders []
  (let [userid (or (js/localStorage.getItem "userid") "2")
        url (str "/sales/order/byuser/" userid)]
    (js/console.log "Sale orders URL:" url)
    (swap! orders-state assoc :loading? true :error nil)
    (-> (api/api-fetch url)
        (.then (fn [res]
                 (if (.-ok res)
                   (.json res)
                   (throw (js/Error "Error loading user orders")))))
        (.then (fn [data]
                 (let [clj-data (js->clj data :keywordize-keys true)
                       orders (or (:data clj-data) (:orders clj-data) clj-data [])]
                   (swap! orders-state assoc
                          :orders orders
                          :loading? false))))
        (.catch (fn [err]
                  (swap! orders-state assoc :error (.-message err) :loading? false))))))

(defn my-orders-view []
  (let [state @orders-state
        {:keys [orders loading? error]} state]

    (when (and (empty? orders) (not loading?) (nil? error))
      (fetch-user-orders))

    [:div.orders-container
     [:h2.orders-title "📦 My Orders"]

     ;; Mensajes de estado
     (when loading?
       [:p.orders-loading "Loading orders..."])

     (when error
       [:div.orders-error error])

     (when-not loading?
       (if (empty? orders)
         [:div.orders-empty
          [:p.orders-empty-text "You haven't placed any orders yet."]
          [:a.orders-btn-catalog {:href "#/catalog"} "Start Shopping 🛍️"]]

         [:div.orders-list
          (for [order orders]
            (let [sale-id (:SaleId order)
                  order-number (or (:OrderNumber order) (str "Order #" sale-id))
                  total (:TotalAmount order)
                  subtotal (:SubTotal order)
                  tax (:TaxAmount order)
                  shipping (:ShippingCost order)
                  address (:ShippingAddress order)
                  payment (:PaymentMethod order)
                  status (:Status order)
                  created-at (:CreatedAt order)
                  details (:details order)]
              ^{:key sale-id}
              [:div.order-card
               [:div.order-header
                [:span.order-id order-number]
                [:span.order-status {:class (str "status-" (clojure.string/lower-case (or status "pending")))} status]]

               [:div.order-details-grid
                [:div.order-detail-item [:strong "Date: "] (if (and created-at (>= (count created-at) 10)) (subs created-at 0 10) created-at)]
                [:div.order-detail-item [:strong "Payment: "] payment]
                [:div.order-detail-item [:strong "Address: "] address]]

               (when (seq details)
                 [:div.order-items-section
                  [:h4.order-items-title "Items in this order:"]
                  [:table.order-items-table
                   [:thead
                    [:tr
                     [:th "Product"]
                     [:th "Qty"]
                     [:th "Unit Price"]
                     [:th "Total"]]]
                   [:tbody
                    (for [detail details]
                      (let [detail-id (:SaleDetailId detail)
                            product (:product detail)
                            prod-name (or (:Name product) "Product")
                            qty (:Quantity detail)
                            unit-price (:UnitPrice detail)
                            total-price (:TotalPrice detail)]
                        ^{:key detail-id}
                        [:tr
                         [:td.item-name prod-name]
                         [:td qty]
                         [:td (str "$" unit-price)]
                         [:td.item-total (str "$" total-price)]]))]]])

               ;; Totales de la orden
               [:div.order-footer-summary
                [:div.order-summary-line [:span "Subtotal:"] [:span (str "$" subtotal)]]
                [:div.order-summary-line [:span "Tax:"] [:span (str "$" tax)]]
                [:div.order-summary-line [:span "Shipping:"] [:span (str "$" shipping)]]
                [:div.order-summary-total [:span "Total Amount:"] [:span.order-total-val (str "$" total)]]]]))]))]))