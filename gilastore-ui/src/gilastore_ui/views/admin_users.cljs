(ns gilastore-ui.views.admin-users
  (:require [reagent.core :as r]
            [gilastore-ui.api :as api]
            [clojure.string :as str]))

(defonce admin-users-state (r/atom {:users []
                                    :loading? false
                                    :error nil}))

(defonce show-modal? (r/atom false))
(defonce new-user-form (r/atom {:name ""
                                :username ""
                                :email ""
                                :password ""
                                :role "User"}))

(defn fetch-all-users []
  (swap! admin-users-state assoc :loading? true :error nil)
  (-> (api/api-fetch "/auth/")
      (.then (fn [res]
               (if (.-ok res)
                 (.json res)
                 (throw (js/Error "Error loading users list")))))
      (.then (fn [data]
               (let [clj-data (js->clj data :keywordize-keys true)
                     users-list (or (:data clj-data) clj-data [])]
                 (swap! admin-users-state assoc
                        :users users-list
                        :loading? false))))
      (.catch (fn [err]
                (swap! admin-users-state assoc :error (.-message err) :loading? false)))))

(defn create-user [e]
  (.preventDefault e)
  (let [{:keys [name username email password role]} @new-user-form
        payload (js/JSON.stringify (clj->js {:Name name
                                            :username username
                                            :Email email
                                            :password password
                                            :Role role}))]
    (-> (api/api-fetch "/auth/register"
                       {:method "POST"
                        :headers {"Content-Type" "application/json"}
                        :body payload})
        (.then (fn [res]
                 (if (.-ok res)
                   (.json res)
                   (throw (js/Error "Error creating user")))))
        (.then (fn [_]
                 (reset! new-user-form {:name "" :username "" :email "" :password "" :role "User"})
                 (reset! show-modal? false)
                 (fetch-all-users)))
        (.catch (fn [err]
                  (js/alert (str "Error: " (.-message err))))))))

(defn admin-users-view []
  (let [state @admin-users-state
        {:keys [users loading? error]} state
        is-modal-open? @show-modal?
        form-data @new-user-form]

    ;; Load users upon mounting the view if empty
    (when (and (empty? users) (not loading?) (nil? error))
      (fetch-all-users))

    [:div.admin-users-container
     [:div.admin-users-header-bar
      [:h2.admin-users-title "👥 Users Management"]
      [:button.admin-users-btn-add {:on-click #(reset! show-modal? true)}
       "➕ Add User"]]

     (when is-modal-open?
       [:div.admin-modal-overlay
        [:div.admin-modal-card
         [:h3.admin-modal-title "Create New User"]
         [:form.admin-modal-form {:on-submit create-user}
          [:div.admin-form-group
           [:label.admin-form-label "Full Name:"]
           [:input.admin-form-input {:type "text"
                                     :required true
                                     :value (:name form-data)
                                     :on-change #(swap! new-user-form assoc :name (-> % .-target .-value))}]]

          [:div.admin-form-group
           [:label.admin-form-label "Username:"]
           [:input.admin-form-input {:type "text"
                                     :required true
                                     :value (:username form-data)
                                     :on-change #(swap! new-user-form assoc :username (-> % .-target .-value))}]]

          [:div.admin-form-group
           [:label.admin-form-label "Email:"]
           [:input.admin-form-input {:type "email"
                                     :required true
                                     :value (:email form-data)
                                     :on-change #(swap! new-user-form assoc :email (-> % .-target .-value))}]]

          [:div.admin-form-group
           [:label.admin-form-label "Password:"]
           [:input.admin-form-input {:type "password"
                                     :required true
                                     :value (:password form-data)
                                     :on-change #(swap! new-user-form assoc :password (-> % .-target .-value))}]]

          [:div.admin-form-group
           [:label.admin-form-label "Role:"]
           [:select.admin-form-select {:value (:role form-data)
                                       :on-change #(swap! new-user-form assoc :role (-> % .-target .-value))}
            [:option {:value "User"} "User"]
            [:option {:value "admin"} "Admin"]]]

          [:div.admin-modal-actions
           [:button.admin-btn-cancel {:type "button"
                                      :on-click #(reset! show-modal? false)}
            "Cancel"]
           [:button.admin-btn-submit {:type "submit"}
            "Save User"]]]]])

     (when loading?
       [:p.admin-users-loading "Loading users..."])

     (when error
       [:div.admin-users-error error])

     ;; Users Table
     (when-not loading?
       [:div.admin-users-table-wrapper
        [:table.admin-users-table
         [:thead
          [:tr.admin-users-tr-header
           [:th.admin-users-th "ID"]
           [:th.admin-users-th "Name"]
           [:th.admin-users-th "Username"]
           [:th.admin-users-th "Email"]
           [:th.admin-users-th "Role"]
           [:th.admin-users-th "Created At"]]]
         [:tbody
          (if (empty? users)
            [:tr
             [:td.admin-users-empty-cell {:col-span "6"}
              "No users found."]]

            (for [user users]
              (let [user-id (or (:UserId user) (:id user))
                    name (or (:Name user) (:name user) "N/A")
                    username (or (:username user) (:UserName user) "N/A")
                    email (or (:Email user) (:email user) "N/A")
                    role (or (:Role user) (:role user) "User")
                    created-at (or (:CreatedAt user) (:created_at user) "N/A")]
                ^{:key user-id}
                [:tr.admin-users-tr
                 [:td.admin-users-td user-id]
                 [:td.admin-users-td-bold name]
                 [:td.admin-users-td username]
                 [:td.admin-users-td email]
                 [:td.admin-users-td
                  [:span.admin-users-role-badge {:class (str "role-" (str/lower-case role))} role]]
                 [:td.admin-users-td (if (>= (count created-at) 10) (subs created-at 0 10) created-at)]])))]]])]))