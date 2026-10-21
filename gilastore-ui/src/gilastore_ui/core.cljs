(ns gilastore-ui.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [clojure.string :as str]
            [gilastore-ui.state :as state]
            [gilastore-ui.components.layout :as layout]
            [gilastore-ui.views.login :as login]
            [gilastore-ui.views.products :as products]
            [gilastore-ui.views.catalog :as catalog]
            [gilastore-ui.views.cart :as cart]
            [gilastore-ui.views.my-orders :as myorders]
            [gilastore-ui.views.profile :as myprofile]
            [gilastore-ui.views.admin-users :as adminusers]
            [gilastore-ui.views.admin-sales :as adminsales]))

(defn- get-clean-hash []
  (let [h (.-hash js/window.location)]
    (cond
      (str/starts-with? h "?#") (subs h 1)
      (empty? h) "#/admin/myprofile"
      :else h)))

(defonce current-route (r/atom (get-clean-hash)))

(set! (.-onhashchange js/window)
      (fn []
        (reset! current-route (get-clean-hash))))

(defn current-page []
  (let [route @current-route]
    (cond
      (= route "#/admin/products") [products/products-view]
      (= route "#/catalog") [catalog/catalog-view]
      (= route "#/cart") [cart/cart-view]
      (= route "#/myorders") [myorders/my-orders-view]
      (= route "#/myprofile") [myprofile/profile-view]
      (= route "#/admin/users") [adminusers/admin-users-view]
      (= route "#/admin/orders") [adminsales/admin-sales-view]
      :else [login/login-view])))

(defn app []
  (let [{:keys [token]} @state/auth-state]
    (if token
      [layout/main-layout [current-page]]
      [layout/main-layout [login/login-view]])))

(defn init []
  (rdom/render [app] (.getElementById js/document "app")))