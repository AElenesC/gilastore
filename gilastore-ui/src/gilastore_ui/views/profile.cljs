(ns gilastore-ui.views.profile
  (:require [reagent.core :as r]
            [gilastore-ui.api :as api]))

(defonce profile-state (r/atom {:user nil
                                :loading? false
                                :error nil}))

(defn fetch-user-profile []
  (swap! profile-state assoc :loading? true :error nil)
  (-> (api/api-fetch "/auth/myprofile")
      (.then (fn [res]
               (if (.-ok res)
                 (.json res)
                 (throw (js/Error "Error loading user profile")))))
      (.then (fn [data]
               (let [clj-data (js->clj data :keywordize-keys true)
                     user-info (or (:user clj-data) clj-data)]
                 (swap! profile-state assoc
                        :user user-info
                        :loading? false))))
      (.catch (fn [err]
                (swap! profile-state assoc :error (.-message err) :loading? false)))))

(defn profile-view []
  (let [state @profile-state
        {:keys [user loading? error]} state]

    (when (and (nil? user) (not loading?) (nil? error))
      (fetch-user-profile))

    [:div.profile-container
     [:h2.profile-title "👤 My Profile"]

     (when loading?
       [:p.profile-loading "Loading profile..."])

     (when error
       [:div.profile-error error])

     (when-not loading?
       (if-not user
         [:div.profile-empty "No profile data available."]
         (let [name (or (:Name user) (:name user) "N/A")
               username (or (:username user) (:UserName user) "N/A")
               email (or (:Email user) (:email user) "N/A")
               role (or (:Role user) (:role user) "User")
               created-at (or (:CreatedAt user) (:created_at user) "N/A")
               avatar (or (:Avatar_Url user) (:avatar_url user) nil)
               first-letter (str (clojure.string/upper-case (subs username 0 1)))]

           [:div.profile-card
            [:div.profile-header-section
             (if avatar
               [:img.profile-avatar-img {:src avatar :alt "Avatar"}]
               [:div.profile-avatar-placeholder first-letter])
             [:div.profile-user-titles
              [:h3.profile-name name]
              [:span.profile-role role]]]

            [:div.profile-details-grid
             [:div.profile-field
              [:span.profile-label "Username"]
              [:span.profile-value username]]

             [:div.profile-field
              [:span.profile-label "Email Address"]
              [:span.profile-value email]]

             [:div.profile-field
              [:span.profile-label "Member Since"]
              [:span.profile-value (if (>= (count created-at) 10) (subs created-at 0 10) created-at)]]]])))]))