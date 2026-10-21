(ns gilastore-ui.views.dashboard
  (:require [gilastore-ui.state :as state]))

(defn dashboard-view []
  [:div {:style {:max-width "600px" :margin "40px auto" :padding "20px" :background "white" :border-radius "8px"}}
   [:h2 "Main Panel"]
   [:p "¡Welcome to GilaStore! Your session is active."]
   [:button {:onClick (fn []
                        (js/localStorage.clear)
                        (reset! state/current-user-atom nil)
                        (reset! state/auth-state {:email "" :password "" :error nil :loading? false})
                        (set! (.-hash js/window.location) "#/login"))
             :style {:padding "10px 20px" :background "#dc3545" :color "white" :border "none" :border-radius "4px"}}
    "Logout"]])