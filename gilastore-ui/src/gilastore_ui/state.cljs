(ns gilastore-ui.state
  (:require [reagent.core :as r]))

(defonce auth-state (r/atom {:email ""
                             :password ""
                             :token (js/localStorage.getItem "jwt_token")
                             :error nil
                             :loading? false}))
(defonce current-user-atom (r/atom {:role (js/localStorage.getItem "user_role")
                                    :username (js/localStorage.getItem "user_username")
                                    :userid (js/localStorage.getItem "userid")}))
