(ns gilastore-ui.views.confirm-modal
  (:require [reagent.core :as r]))

(defn confirm-modal [open? title message on-confirm on-close]
  (if-not open?
    [:div]
    [:div.confirm-modal-overlay
     [:div.confirm-modal-card
      [:h3.confirm-modal-title title]
      [:p.confirm-modal-message message]

      [:div.confirm-modal-actions
       [:button.confirm-btn-cancel {:on-click on-close}
        "Cancel"]
       [:button.confirm-btn-delete {:on-click on-confirm}
        "Delete"]]]]))