(ns gilastore-ui.views.message-modal)

(defn message-modal [open? title message type on-close]
  (if-not open?
    [:div]
    (let [
          header-color (case type
                         :success "#2e7d32"
                         :error   "#c62828"
                         :info    "#0288d1"
                         "#334155")
          icon (case type
                 :success "✅ "
                 :error   "❌ "
                 :info    "ℹ️ "
                 "")]
      [:div {:style {:position "fixed" :top "0" :left "0" :width "100%" :height "100%"
                     :background "rgba(0, 0, 0, 0.5)" :display "flex"
                     :justify-content "center" :align-items "center" :z-index 1100}}

       [:div {:style {:background "white" :padding "25px" :border-radius "8px"
                      :width "400px" :max-width "90%" :box-shadow "0 4px 15px rgba(0,0,0,0.2)"
                      :border-top (str "5px solid " header-color)}}

        [:h3 {:style {:margin-top 0 :color header-color :display "flex" :align-items "center" :gap "8px"}}
         (str icon title)]

        [:p {:style {:color "#475569" :font-size "0.95rem" :line-height "1.5"}} message]

        [:div {:style {:display "flex" :justify-content "flex-end" :margin-top "20px"}}
         [:button {:on-click on-close
                   :style {:padding "8px 16px" :background header-color :color "white"
                           :border "none" :border-radius "4px" :cursor "pointer" :font-weight "bold"}}
          "Accept"]]]])))