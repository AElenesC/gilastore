(ns gilastore-ui.components.layout
  (:require [gilastore-ui.state :as state]))

;; Función para cerrar sesión
(defn- handle-logout []
  ;; Limpiamos el localStorage
  (js/localStorage.removeItem "userid")
  (js/localStorage.removeItem "user_role")
  (js/localStorage.removeItem "user_username")

  ;; Reseteamos los átomos de estado
  (reset! state/current-user-atom nil)
  (when (some? state/auth-state)
    (reset! state/auth-state {:token nil :user nil}))

  ;; Redirigimos al inicio / login
  (set! (.-hash js/window.location) "#/login"))

(defn- navbar []
  (let [current-user @state/current-user-atom
        role (cond
               (:role current-user) (:role current-user)
               (string? current-user) current-user
               :else (or (js/localStorage.getItem "user_role") ""))]

    (when-not (empty? role)
      [:nav.nav-bar
       [:div.nav-container-flex
        ;; Menú de navegación principal (izquierda)
        [:ul.nav-list
         (if (= role "admin")
           [:<> {:key "admin-menu"}
            [:li [:a {:href "#/admin/products"} "📦 Inventory"]]
            [:li [:a {:href "#/admin/orders"} "📈 Sales Management"]]
            [:li [:a {:href "#/admin/users"} "👥 Users"]]
            [:li [:a {:href "#/myprofile"} "👤 Profile"]]]
           

           [:<> {:key "user-menu"}
            [:li [:a {:href "#/catalog"} "🛍️ Catalog"]]
            [:li [:a {:href "#/cart"} "🛒 My Cart"]]
            [:li [:a {:href "#/myorders"} "📦 My Orders"]]
            [:li [:a {:href "#/myprofile"} "👤 Profile"]]])]

        ;; Botón de Logout a la extrema derecha
        [:div.nav-logout-wrapper
         [:button.nav-logout-btn {:on-click handle-logout}
          "🚪 Logout"]]]])))

(defn main-layout [content-component]
  (let [current-user @state/current-user-atom
        role (cond
               (:role current-user) (:role current-user)
               (string? current-user) current-user
               :else (or (js/localStorage.getItem "user_role") ""))
        username (or (when (map? current-user) (:username current-user))
                     (js/localStorage.getItem "user_username")
                     "Guest")
        first-letter (if (seq username) (subs username 0 1) "G")]

    [:div.app-container
     [:header.header {:class "header"}
      [:h1 "Gila Store"]
      (when-not (empty? role)
        [:div.user-profile-badge
         [:div.user-avatar (.toUpperCase first-letter)]
         [:span.username username]])]

     [navbar]

     [:main.main-content
      content-component]

     [:footer.footer
      "GilaStore - By Adrian E. Elenes C."]]))