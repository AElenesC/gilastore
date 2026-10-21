(ns gilastore-ui.views.login
  (:require [gilastore-ui.state :as state]
            [gilastore-ui.api :as api]))

(defn login-view []
  (let [{:keys [email password error loading?]} @state/auth-state]
    [:div.login-container
     [:div.login-card
      [:h2.login-title "Welcome to GilaStore"]
      [:h4.login-subtitle "Please type your credentials"]
      [:form.login-form {:on-submit #(api/login-user % state/auth-state)}
       [:div.login-form-group
        [:label.login-label "Email:"]
        [:input.login-input {:type "email"
                             :value email
                             :on-change #(swap! state/auth-state assoc :email (-> % .-target .-value))}]]

       [:div.login-form-group
        [:label.login-label "Password"]
        [:input.login-input {:type "password"
                             :value password
                             :on-change #(swap! state/auth-state assoc :password (-> % .-target .-value))}]]

       (when error
         [:div.login-error error])

       [:button.login-btn-submit {:type "submit"
                                  :disabled loading?}
        (if loading? "Validating..." "Login")]]]]))