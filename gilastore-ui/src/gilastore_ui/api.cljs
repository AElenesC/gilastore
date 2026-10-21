(ns gilastore-ui.api
  (:require [gilastore-ui.config :as config]
            [gilastore-ui.state :as state]))

(defn login-user [e state-atom]
  (.preventDefault e)
  (swap! state-atom assoc :loading? true :error nil)

  (let [{:keys [email password]} @state-atom]
    (-> (js/fetch (str config/api-url "/auth/login")
                  #js {:method "POST"
                       :headers #js {"Content-Type" "application/json"
                                     "Accept" "application/json"
                                     "x-api-key" config/api-key}
                       :body (js/JSON.stringify #js {:Email email
                                                     :password password})})

        (.then (fn [response]
                 (if (.-ok response)
                   (.json response)
                   (throw (js/Error "Credentials are wrong")))))
        (.then (fn [data]
                 (let [auth (aget data "authorization")
                       token (if auth (aget auth "token") nil)
                       user-obj (aget data "user")
                       role (if user-obj (or (aget user-obj "Role") (aget user-obj "role")) "customer")
                       username (if user-obj (or (aget user-obj "username") (aget user-obj "username")) "Guest")
                       userid (if user-obj (or (aget user-obj "UserId") (aget user-obj "userid")) "0")
                       ]

                   (js/localStorage.setItem "jwt_token" token)
                   (js/localStorage.setItem "user_role" role)
                   (js/localStorage.setItem "user_username" username)
                   (js/localStorage.setItem "userid", userid)

                   (swap! state-atom assoc
                          :token token
                          :current-user {:role role :username username}
                          :loading? false
                          :password "")

                   (reset! state/current-user-atom {:role role :username username})

                   (set! (.-hash js/window.location) "#/myprofile"))))

        (.catch (fn [err]
                  (swap! state-atom assoc
                         :error (.-message err)
                         :loading? false))))))

(defn api-fetch [endpoint & [options]]
  (let [token (js/localStorage.getItem "jwt_token")
        opts (cond
               (nil? options) {}
               (map? options) options
               :else (js->clj options :keywordize-keys true))

        body (get opts :body)
        is-form-data? (instance? js/FormData body)

        default-headers (cond-> {"Accept" "application/json"
                                 "x-api-key" config/api-key}
                          (not is-form-data?) (assoc "Content-Type" "application/json"))

        headers (if token
                  (assoc default-headers "Authorization" (str "Bearer " token))
                  default-headers)

        fetch-options (merge {:method "GET"}
                             opts
                             {:headers (clj->js headers)})]

    (-> (js/fetch (str config/api-url endpoint) (clj->js fetch-options))
        (.then (fn [response]
                 (when (= (.-status response) 401)
                   (js/localStorage.removeItem "jwt_token")
                   (js/localStorage.removeItem "user_role")
                   (js/localStorage.removeItem "user_username")
                   (js/localStorage.removeItem "userid")

                   (reset! state/current-user-atom nil)

                   (set! (.-hash js/window.location) "#/login")

                   (throw (js/Error "Session expired. Please log in again.")))

                 response)))))