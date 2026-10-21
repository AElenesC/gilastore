(ns gilastore-ui.views.cart
  (:require [reagent.core :as r]
            [gilastore-ui.api :as api]))

(defonce cart-state (r/atom {:items []
                             :total-cart 0
                             :total-weight 0
                             :tax-amount 0
                             :shipping-cost 0
                             :loading? false
                             :error nil
                             :show-checkout? false
                             :shipping-address ""
                             :payment-method "CREDIT_CARD"
                             :submitting? false}))

(defn generate-idempotency-key []
  (if (and (.-crypto js/window) (.-randomUUID js/window.crypto))
    (.randomUUID (.-crypto js/window))
    (-> (Math/random) (.toString 36) (.substring 2))))

(defn fetch-cart-items []
  (let [userid (or (js/localStorage.getItem "userid") "")
        url (str "/salescart/view/" userid)]
    (js/console.log "Cart URL" url)
    (swap! cart-state assoc :loading? true :error nil)
    (-> (api/api-fetch url)
        (.then (fn [res]
                 (if (.-ok res)
                   (.json res)
                   (throw (js/Error "Error loading cart items")))))
        (.then (fn [data]
                 (let [clj-data (js->clj data :keywordize-keys true)
                       items (or (:items clj-data) [])
                       total-cart (or (:total_cart clj-data) 0)
                       total-weight (or (:total_weight clj-data) 0)
                       tax-amount (or (:tax_amount clj-data) 0)
                       shipping-cost (or (:shippingCost clj-data) (:shipping_cost clj-data) 0)]
                   (swap! cart-state assoc
                          :items items
                          :total-cart total-cart
                          :total-weight total-weight
                          :tax-amount tax-amount
                          :shipping-cost shipping-cost
                          :loading? false))))
        (.catch (fn [err]
                  (swap! cart-state assoc :error (.-message err) :loading? false))))))

(defn remove-cart-item [product-id]
  (let [userid (or (js/localStorage.getItem "userid") "")
        url "/salescart/removeitem"
        payload (js/JSON.stringify (clj->js {:UserId userid
                                             :ProductId product-id}))]
    (js/console.log "Cart URL" url " UserId: " userid ", ProductId: " product-id)
    (-> (api/api-fetch url {:method "DELETE"
                            :headers {"Content-Type" "application/json"}
                            :body payload})
        (.then (fn [res]
                 (if (.-ok res)
                   (fetch-cart-items)
                   (throw (js/Error "Error removing item from cart")))))
        (.catch (fn [err]
                  (js/alert (.-message err)))))))

(defn submit-checkout []
  (let [state @cart-state
        userid (js/parseInt (or (js/localStorage.getItem "userid") "2") 10)
        shipping-address (:shipping-address state)
        payment-method (:payment-method state)
        idempotency-key (generate-idempotency-key)]

    (if (empty? shipping-address)
      (js/alert "Please enter a shipping address.")
      (do
        (swap! cart-state assoc :submitting? true)
        (let [payload (js/JSON.stringify (clj->js {:UserId userid
                                                   :IdempotencyKey idempotency-key
                                                   :ShippingAddress shipping-address
                                                   :PaymentMethod payment-method}))]
          (-> (api/api-fetch "/sales/order/checkout"
                             {:method "POST"
                              :headers {"Content-Type" "application/json"}
                              :body payload})
              (.then (fn [res]
                       (if (.-ok res)
                         (.json res)
                         (throw (js/Error "Error processing checkout")))))
              (.then (fn [data]
                       (let [clj-data (js->clj data :keywordize-keys true)]
                         (swap! cart-state assoc :submitting? false :show-checkout? false)
                         (js/alert (or (:message clj-data) "Order placed successfully! 🎉"))
                         (fetch-cart-items))))
              (.catch (fn [err]
                        (swap! cart-state assoc :submitting? false)
                        (js/alert (str "Checkout error: " (.-message err)))))))))))

(defn cart-view []
  (r/with-let [_ (fetch-cart-items)]
    (let [state @cart-state
          {:keys [items total-cart total-weight tax-amount shipping-cost loading? error show-checkout? shipping-address payment-method submitting?]} state]

      [:div.cart-container
       [:h2.cart-title "🛒 My Shopping Cart"]

       (when loading?
         [:p.cart-loading "Loading cart..."])

       (when error
         [:div.cart-error error])

       (when-not loading?
         (if (empty? items)
           [:div.cart-empty
            [:p.cart-empty-text "Your cart is currently empty."]
            [:a.cart-btn-catalog {:href "#/catalog"} "Browse Catalog 🛍️"]]

           [:div
            [:div.cart-table-wrapper
             [:table.cart-table
              [:thead
               [:tr.cart-tr-header
                [:th.cart-th "Product"]
                [:th.cart-th "Quantity"]
                [:th.cart-th "Unit Price"]
                [:th.cart-th "Subtotal"]
                [:th.cart-th-center "Actions"]]]
              [:tbody
               (for [item items]
                 (let [id (:CartItemId item)
                       product (:product item)
                       productId (:ProductId product)
                       product-name (or (:Name product) (:name product) "Unknown Product")
                       qty (:Quantity item)
                       unit-price (:unitPrice item)
                       subtotal (:subtotal item)]
                   ^{:key id}
                   [:tr.cart-tr
                    [:td.cart-td-product product-name]
                    [:td.cart-td qty]
                    [:td.cart-td-price (str "$" unit-price)]
                    [:td.cart-td-subtotal (str "$" subtotal)]
                    [:td.cart-td-center
                     [:button.cart-btn-remove {:on-click #(remove-cart-item productId)}
                      "Remove 🗑️"]]]))]]]

            [:div.cart-summary-container
             [:div.cart-summary-card
              [:h3.cart-summary-title "Cart Summary"]

              [:div.cart-summary-row
               [:span "Total Weight:"]
               [:span.cart-summary-value (str total-weight " kg")]]

              [:div.cart-summary-row
               [:span "Tax Amount:"]
               [:span.cart-summary-value (str "$" (.toFixed (js/parseFloat tax-amount) 2))]]

              [:div.cart-summary-row
               [:span "Shipping Cost:"]
               [:span.cart-summary-value (str "$" (.toFixed (js/parseFloat shipping-cost) 2))]]

              [:div.cart-summary-total
               [:span.cart-summary-total-label "Total Cart:"]
               [:span.cart-summary-total-value (str "$" total-cart)]]

              (when-not show-checkout?
                [:button.cart-btn-checkout {:on-click #(swap! cart-state assoc :show-checkout? true)}
                 "Proceed to Checkout 🚀"])

              (when show-checkout?
                [:div.checkout-panel
                 [:h4.checkout-panel-title "Shipping & Payment"]

                 [:div.checkout-field
                  [:label.checkout-label "Shipping Address:"]
                  [:textarea.checkout-textarea {:value shipping-address
                                                :placeholder "Enter street, colony, city..."
                                                :on-change (fn [e] (swap! cart-state assoc :shipping-address (-> e .-target .-value)))}]]

                 [:div.checkout-field
                  [:label.checkout-label "Payment Method:"]
                  [:select.checkout-select {:value payment-method
                                            :on-change (fn [e] (swap! cart-state assoc :payment-method (-> e .-target .-value)))}
                   [:option {:value "CREDIT_CARD"} "Credit Card"]
                   [:option {:value "PAYPAL"} "PayPal"]
                   [:option {:value "STRIPE"} "Stripe"]]]

                 [:button.checkout-btn-confirm {:disabled submitting?
                                                :on-click submit-checkout}
                  (if submitting? "Processing Order..." "Confirm Purchase ✅")]])]]]))])))