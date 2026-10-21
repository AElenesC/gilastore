goog.provide('gilastore_ui.state');
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.state !== 'undefined') && (typeof gilastore_ui.state.auth_state !== 'undefined')){
} else {
gilastore_ui.state.auth_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"token","token",-1211463215),localStorage.getItem("jwt_token"),new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null));
}
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.state !== 'undefined') && (typeof gilastore_ui.state.current_user_atom !== 'undefined')){
} else {
gilastore_ui.state.current_user_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),localStorage.getItem("user_role"),new cljs.core.Keyword(null,"username","username",1605666410),localStorage.getItem("user_username"),new cljs.core.Keyword(null,"userid","userid",1974246085),localStorage.getItem("userid")], null));
}

//# sourceMappingURL=gilastore_ui.state.js.map
