goog.provide('gilastore_ui.core');
gilastore_ui.core.get_clean_hash = (function gilastore_ui$core$get_clean_hash(){
var h = window.location.hash;
if(clojure.string.starts_with_QMARK_(h,"?#")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(h,(1));
} else {
if(cljs.core.empty_QMARK_(h)){
return "#/admin/myprofile";
} else {
return h;

}
}
});
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.core !== 'undefined') && (typeof gilastore_ui.core.current_route !== 'undefined')){
} else {
gilastore_ui.core.current_route = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(gilastore_ui.core.get_clean_hash());
}
(window.onhashchange = (function (){
return cljs.core.reset_BANG_(gilastore_ui.core.current_route,gilastore_ui.core.get_clean_hash());
}));
gilastore_ui.core.current_page = (function gilastore_ui$core$current_page(){
var route = cljs.core.deref(gilastore_ui.core.current_route);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"#/admin/products")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.products.products_view], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"#/catalog")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.catalog.catalog_view], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"#/cart")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.cart.cart_view], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"#/myorders")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.my_orders.my_orders_view], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"#/myprofile")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.profile.profile_view], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"#/admin/users")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.admin_users.admin_users_view], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"#/admin/orders")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.admin_sales.admin_sales_view], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.login.login_view], null);

}
}
}
}
}
}
}
});
gilastore_ui.core.app = (function gilastore_ui$core$app(){
var map__17306 = cljs.core.deref(gilastore_ui.state.auth_state);
var map__17306__$1 = cljs.core.__destructure_map(map__17306);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17306__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
if(cljs.core.truth_(token)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.components.layout.main_layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.core.current_page], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.components.layout.main_layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.login.login_view], null)], null);
}
});
gilastore_ui.core.init = (function gilastore_ui$core$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.core.app], null),document.getElementById("app"));
});

//# sourceMappingURL=gilastore_ui.core.js.map
