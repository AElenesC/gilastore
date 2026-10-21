(ns gilastore-ui.views.admin-sales
  (:require [reagent.core :as r]
            [gilastore-ui.api :as api]
            [clojure.string :as str]))

(defonce admin-sales-state (r/atom {:orders []
                                    :loading? false
                                    :error nil}))

(def valid-statuses ["PROCESSING" "COMPLETED" "SHIPPED" "DELIVERED" "CANCELLED"])

(defn fetch-all-orders []
  (swap! admin-sales-state assoc :loading? true :error nil)
  (-> (api/api-fetch "/sales/order/allorders")
      (.then (fn [res]
               (if (.-ok res)
                 (.json res)
                 (throw (js/Error "Error loading all orders")))))
      (.then (fn [data]
               (let [clj-data (js->clj data :keywordize-keys true)
                     orders-list (or (:data clj-data) clj-data [])]
                 (swap! admin-sales-state assoc
                        :orders orders-list
                        :loading? false))))
      (.catch (fn [err]
                (swap! admin-sales-state assoc :error (.-message err) :loading? false)))))

(defn update-order-status [order-number new-status]
  (let [payload (js/JSON.stringify (clj->js {:Status new-status}))]
    (-> (api/api-fetch (str "/sales/order/" order-number)
                       {:method "PATCH"
                        :headers {"Content-Type" "application/json"}
                        :body payload})
        (.then (fn [res]
                 (if (.-ok res)
                   (.json res)
                   (throw (js/Error "Error updating order status")))))
        (.then (fn [_]
                 (fetch-all-orders)))
        (.catch (fn [err]
                  (js/alert (str "Error: " (.-message err))))))))

(defn admin-sales-view []
  (let [state @admin-sales-state
        {:keys [orders loading? error]} state]

    (when (and (empty? orders) (not loading?) (nil? error))
      (fetch-all-orders))

    [:div.admin-sales-container
     [:div.admin-sales-header-bar
      [:h2.admin-sales-title "📈 Sales Management"]]

     (when loading?
       [:p.admin-sales-loading "Loading sales orders..."])

     (when error
       [:div.admin-sales-error error])

     (when-not loading?
       [:div.admin-sales-table-wrapper
        [:table.admin-sales-table
         [:thead
          [:tr.admin-sales-tr-header
           [:th.admin-sales-th "Order #"]
           [:th.admin-sales-th "User ID"]
           [:th.admin-sales-th "Date"]
           [:th.admin-sales-th "Total"]
           [:th.admin-sales-th "Payment"]
           [:th.admin-sales-th "Status"]
           [:th.admin-sales-th-center "Actions"]]]
         [:tbody
          (if (empty? orders)
            [:tr
             [:td.admin-sales-empty-cell {:col-span "7"}
              "No orders found."]]

            (for [order orders]
              (let [order-number (:OrderNumber order)
                    user-id (:UserId order)
                    total (:TotalAmount order)
                    payment (:PaymentMethod order)
                    current-status (:Status order)
                    created-at (:CreatedAt order)]
                ^{:key order-number}
                [:tr.admin-sales-tr
                 [:td.admin-sales-td-bold order-number]
                 [:td.admin-sales-td user-id]
                 [:td.admin-sales-td (if (>= (count created-at) 10) (subs created-at 0 10) created-at)]
                 [:td.admin-sales-td-price (str "$" total)]
                 [:td.admin-sales-td payment]
                 [:td.admin-sales-td
                  [:span.admin-sales-status-badge {:class (str "status-" (str/lower-case current-status))} current-status]]
                 [:td.admin-sales-td-center
                  [:select.admin-sales-status-select {:value current-status
                                                      :on-change #(update-order-status order-number (-> % .-target .-value))}
                   (for [status valid-statuses]
                     ^{:key status}
                     [:option {:value status} status])]]])))]]])]))