(ns gilastore-ui.views.product-import-modal
  (:require [reagent.core :as r]
            [gilastore-ui.api :as api]))

(defn product-import-modal [open? on-close-fn on-success-fn]
  (let [selected-file  (r/atom nil)
        uploading?     (r/atom false)
        error-msg      (r/atom nil)
        invalid-rows   (r/atom [])]
    (fn [open? on-close-fn on-success-fn]
      (if-not open?
        [:div]
        [:div.import-modal-overlay
         [:div.import-modal-card
          [:div.import-modal-header
           [:h3.import-modal-title "📁 Import Products (CSV)"]
           [:button.import-modal-close-btn {:on-click (fn []
                                                        (reset! selected-file nil)
                                                        (reset! error-msg nil)
                                                        (reset! invalid-rows [])
                                                        (on-close-fn))
                                            :disabled @uploading?}
            "×"]]

          (when @error-msg
            [:div.import-modal-error @error-msg])

          (when (seq @invalid-rows)
            [:div.import-modal-warning
             [:strong.import-modal-warning-title "⚠️ Errors were found in the following lines:"]
             [:ul.import-modal-error-list
              (for [[idx row-err] (map-indexed vector @invalid-rows)]
                ^{:key idx}
                [:li.import-modal-error-item row-err])]])

          [:form {:on-submit (fn [e]
                               (.preventDefault e)
                               (if-not @selected-file
                                 (reset! error-msg "Please select a CSV file.")
                                 (do
                                   (reset! uploading? true)
                                   (reset! error-msg nil)
                                   (reset! invalid-rows [])
                                   (let [form-data (js/FormData.)
                                         current-user-id (or (js/localStorage.getItem "user_id") "1")]

                                     (.append form-data "file" @selected-file)
                                     (.append form-data "abortIfErrors" "false")
                                     (.append form-data "user_id" current-user-id)

                                     (-> (api/api-fetch "/products/import"
                                                        {:method "POST"
                                                         :body form-data})
                                         (.then (fn [res]
                                                  (if (.-ok res)
                                                    (.json res)
                                                    (-> (.json res)
                                                        (.then (fn [err-data]
                                                                 (let [clj-err (js->clj err-data :keywordize-keys true)]
                                                                   (when-let [rows (:invalidRows clj-err)]
                                                                     (reset! invalid-rows rows))

                                                                   (throw (js/Error (or (:message clj-err) "Error importing CSV file."))))))))))
                                         (.then (fn [_]
                                                  (reset! uploading? false)
                                                  (reset! selected-file nil)
                                                  (reset! invalid-rows [])
                                                  (on-success-fn)))
                                         (.catch (fn [err]
                                                   (reset! uploading? false)
                                                   (reset! error-msg (.-message err)))))))))}

           [:div.import-dropzone
            [:input.import-file-input {:type "file"
                                       :accept ".csv"
                                       :id "csv-file-input"
                                       :on-change (fn [e]
                                                    (let [file (-> e .-target .-files (aget 0))]
                                                      (reset! selected-file file)
                                                      (reset! error-msg nil)
                                                      (reset! invalid-rows [])))}]

            [:label.import-file-label {:for "csv-file-input"}
             [:div.import-file-icon "📄"]
             [:span.import-file-text "Click to select"]
             [:p.import-file-subtext "Supported formats: .csv"]]

            (when @selected-file
              [:div.import-selected-file
               (str "Selected file: " (.-name @selected-file))])]

           [:div.import-modal-actions
            [:button.import-btn-cancel {:type "button"
                                        :on-click (fn []
                                                    (reset! selected-file nil)
                                                    (reset! error-msg nil)
                                                    (reset! invalid-rows [])
                                                    (on-close-fn))
                                        :disabled @uploading?}
             "Cancel"]
            [:button.import-btn-submit {:type "submit"
                                        :disabled (or (nil? @selected-file) @uploading?)
                                        :class (when (or (nil? @selected-file) @uploading?) "disabled")}
             (if @uploading? "⏳ Processing..." "🚀 Import CSV")]]]]]))))