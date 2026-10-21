goog.provide('gilastore_ui.views.products');
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.products !== 'undefined') && (typeof gilastore_ui.views.products.products_state !== 'undefined')){
} else {
gilastore_ui.views.products.products_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1),new cljs.core.Keyword(null,"last-page","last-page",-1966154825),(1),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search-term","search-term",356193544),"",new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null));
}
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.products !== 'undefined') && (typeof gilastore_ui.views.products.show_modal_QMARK_ !== 'undefined')){
} else {
gilastore_ui.views.products.show_modal_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.products !== 'undefined') && (typeof gilastore_ui.views.products.editing_product !== 'undefined')){
} else {
gilastore_ui.views.products.editing_product = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.products !== 'undefined') && (typeof gilastore_ui.views.products.show_delete_modal_QMARK_ !== 'undefined')){
} else {
gilastore_ui.views.products.show_delete_modal_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.products !== 'undefined') && (typeof gilastore_ui.views.products.product_to_delete !== 'undefined')){
} else {
gilastore_ui.views.products.product_to_delete = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.products !== 'undefined') && (typeof gilastore_ui.views.products.show_import_modal_QMARK_ !== 'undefined')){
} else {
gilastore_ui.views.products.show_import_modal_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.products !== 'undefined') && (typeof gilastore_ui.views.products.show_details_modal_QMARK_ !== 'undefined')){
} else {
gilastore_ui.views.products.show_details_modal_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.products !== 'undefined') && (typeof gilastore_ui.views.products.viewing_product !== 'undefined')){
} else {
gilastore_ui.views.products.viewing_product = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
gilastore_ui.views.products.show_msg_BANG_ = (function gilastore_ui$views$products$show_msg_BANG_(title,message,type){
return alert((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)));
});
gilastore_ui.views.products.fetch_products = (function gilastore_ui$views$products$fetch_products(page_num){
var map__17263 = cljs.core.deref(gilastore_ui.views.products.products_state);
var map__17263__$1 = cljs.core.__destructure_map(map__17263);
var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17263__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.products.products_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

var query_url = ((cljs.core.seq(search_term))?(""+"/products?page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_num)+"&search="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(search_term))):(""+"/products?page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_num)));
return gilastore_ui.api.api_fetch(query_url).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("There was an error when loading products");
}
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var items = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var current_page = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"current_page","current_page",-2006507743).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})();
var last_page = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"last_page","last_page",-1307003985).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})();
var links = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.products.products_state,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-page","current-page",-101294180),current_page,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),last_page,new cljs.core.Keyword(null,"links","links",-654507394),links,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
})).catch((function (err){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.products.products_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),err.message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
});
gilastore_ui.views.products.search_products = (function gilastore_ui$views$products$search_products(query_str){
if(clojure.string.blank_QMARK_(query_str)){
return gilastore_ui.views.products.fetch_products((1));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.products.products_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

var url = (""+"/products/search/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(query_str)));
return gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null)], 0)).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error al realizar la b\u00FAsqueda");
}
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var paginated_data = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return clj_data;
}
})();
var results = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(paginated_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var current_page = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"current_page","current_page",-2006507743).cljs$core$IFn$_invoke$arity$1(paginated_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})();
var last_page = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"last_page","last_page",-1307003985).cljs$core$IFn$_invoke$arity$1(paginated_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})();
var links = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(paginated_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.products.products_state,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-page","current-page",-101294180),current_page,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),last_page,new cljs.core.Keyword(null,"links","links",-654507394),links,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
})).catch((function (err){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.products.products_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),err.message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
}
});
gilastore_ui.views.products.products_view = (function gilastore_ui$views$products$products_view(){
var state = cljs.core.deref(gilastore_ui.views.products.products_state);
var map__17268 = state;
var map__17268__$1 = cljs.core.__destructure_map(map__17268);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17268__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17268__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17268__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var last_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17268__$1,new cljs.core.Keyword(null,"last-page","last-page",-1966154825));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17268__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17268__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var is_modal_open_QMARK_ = cljs.core.deref(gilastore_ui.views.products.show_modal_QMARK_);
var product_edit = cljs.core.deref(gilastore_ui.views.products.editing_product);
var is_delete_open_QMARK_ = cljs.core.deref(gilastore_ui.views.products.show_delete_modal_QMARK_);
var del_product = cljs.core.deref(gilastore_ui.views.products.product_to_delete);
var product_is_import_open_QMARK_ = cljs.core.deref(gilastore_ui.views.products.show_import_modal_QMARK_);
var is_details_open_QMARK_ = cljs.core.deref(gilastore_ui.views.products.show_details_modal_QMARK_);
var prod_details = cljs.core.deref(gilastore_ui.views.products.viewing_product);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.products-container","div.products-container",1721144668),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.product_modal.product_modal,is_modal_open_QMARK_,product_edit,(function (){
return cljs.core.reset_BANG_(gilastore_ui.views.products.show_modal_QMARK_,false);
}),(function (){
cljs.core.reset_BANG_(gilastore_ui.views.products.show_modal_QMARK_,false);

return gilastore_ui.views.products.fetch_products(current_page);
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.confirm_modal.confirm_modal,is_delete_open_QMARK_,"Delete Confirmation",(""+"Are you sure you want to delete the product \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(del_product))+"\"? This action cannot be undone."),(function (){
if(cljs.core.truth_(del_product)){
return gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic((""+"/products/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ProductId","ProductId",1375276495).cljs$core$IFn$_invoke$arity$1(del_product))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"DELETE"], null)], 0)).then((function (res){
if(cljs.core.truth_(res.ok)){
cljs.core.reset_BANG_(gilastore_ui.views.products.show_delete_modal_QMARK_,false);

cljs.core.reset_BANG_(gilastore_ui.views.products.product_to_delete,null);

return gilastore_ui.views.products.fetch_products(current_page);
} else {
return alert("Error deleting product");
}
})).catch((function (err){
return alert(err.message);
}));
} else {
return null;
}
}),(function (){
cljs.core.reset_BANG_(gilastore_ui.views.products.show_delete_modal_QMARK_,false);

return cljs.core.reset_BANG_(gilastore_ui.views.products.product_to_delete,null);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.product_import_modal.product_import_modal,product_is_import_open_QMARK_,(function (){
return cljs.core.reset_BANG_(gilastore_ui.views.products.show_import_modal_QMARK_,false);
}),(function (){
cljs.core.reset_BANG_(gilastore_ui.views.products.show_import_modal_QMARK_,false);

gilastore_ui.views.products.show_msg_BANG_("Successful Import","The products from the CSV file have been processed successfully.",new cljs.core.Keyword(null,"success","success",1890645906));

return gilastore_ui.views.products.fetch_products(current_page);
})], null),(cljs.core.truth_((function (){var and__5160__auto__ = is_details_open_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return prod_details;
} else {
return and__5160__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-modal-overlay","div.admin-modal-overlay",1987812584),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-modal-card","div.admin-modal-card",-975590074),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.admin-modal-title","h3.admin-modal-title",597629559),"\uD83D\uDCE6 Product Details"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.product-details-content","div.product-details-content",-570919426),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"ID: "], null),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"ProductId","ProductId",1375276495).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"product_id","product_id",692708615).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(prod_details);
}
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Name: "], null),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prod_details);
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"SKU: "], null),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"SKU","SKU",-640864428).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"sku","sku",-1508141232).cljs$core$IFn$_invoke$arity$1(prod_details);
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Category: "], null),(function (){var or__5162__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(prod_details,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"Name","Name",-131211369)], null));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(prod_details,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto____$2)){
return or__5162__auto____$2;
} else {
return "N/A";
}
}
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Price: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.product-price-highlight","span.product-price-highlight",1048360411),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Price","Price",287530481).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(prod_details);
}
})()))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Weight (KG): "], null),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Weight_KG","Weight_KG",1072313048).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"weight_kg","weight_kg",1367541201).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "0.00";
}
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Description: "], null),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Description","Description",-679315496).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "No description available.";
}
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Created At: "], null),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Created_at","Created_at",137124484).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"CreatedAt","CreatedAt",1659720385).cljs$core$IFn$_invoke$arity$1(prod_details);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "N/A";
}
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-modal-actions","div.admin-modal-actions",-1213162177),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.admin-btn-cancel","button.admin-btn-cancel",-1530691976),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(gilastore_ui.views.products.show_details_modal_QMARK_,false);

return cljs.core.reset_BANG_(gilastore_ui.views.products.viewing_product,null);
})], null),"Close"], null)], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.products-header-bar","div.products-header-bar",1508431955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.products-title","h2.products-title",-339482252),"\uD83D\uDCE6 Product Inventory"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.products-actions-wrapper","div.products-actions-wrapper",764852344),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.products-search-input","input.products-search-input",-613616403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search by name or SKU...",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.products.products_state,cljs.core.assoc,new cljs.core.Keyword(null,"search-term","search-term",356193544),e.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.products-btn-search","button.products-btn-search",-213961999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return gilastore_ui.views.products.search_products(new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gilastore_ui.views.products.products_state)));
})], null),"Search"], null),((cljs.core.seq(new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.products-btn-reset","button.products-btn-reset",-1587402690),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.products.products_state,cljs.core.assoc,new cljs.core.Keyword(null,"search-term","search-term",356193544),"");

return gilastore_ui.views.products.fetch_products((1));
})], null),"Reset"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.products-modal-buttons","div.products-modal-buttons",1953882254),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.products-btn-import","button.products-btn-import",-1572982283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(gilastore_ui.views.products.show_import_modal_QMARK_,true);
})], null),"\uD83D\uDCC1 Import CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.products-btn-add","button.products-btn-add",1398488772),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(gilastore_ui.views.products.editing_product,null);

return cljs.core.reset_BANG_(gilastore_ui.views.products.show_modal_QMARK_,true);
})], null),"\u2795 Add"], null)], null)], null)], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.products-loading","p.products-loading",-738432106),"Loading product list..."], null):null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.products-error","div.products-error",26937127),error], null):null),(cljs.core.truth_(loading_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.products-table-wrapper","div.products-table-wrapper",-1587704996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.products-table","table.products-table",-554616964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.products-tr-header","tr.products-tr-header",-109533815),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.products-th","th.products-th",-1361927999),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.products-th","th.products-th",-1361927999),"Product Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.products-th","th.products-th",-1361927999),"Category"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.products-th","th.products-th",-1361927999),"Price"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.products-th","th.products-th",-1361927999),"SKU"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.products-th-center","th.products-th-center",859692312),"Actions"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),((cljs.core.empty_QMARK_(items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-empty-cell","td.products-empty-cell",-330455257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),"6"], null),"No products found."], null)], null):(function (){var iter__5649__auto__ = (function gilastore_ui$views$products$products_view_$_iter__17271(s__17272){
return (new cljs.core.LazySeq(null,(function (){
var s__17272__$1 = s__17272;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17272__$1);
if(temp__5823__auto__){
var s__17272__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17272__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17272__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17274 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17273 = (0);
while(true){
if((i__17273 < size__5648__auto__)){
var vec__17276 = cljs.core._nth(c__5647__auto__,i__17273);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17276,(0),null);
var product = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17276,(1),null);
cljs.core.chunk_append(b__17274,(function (){var product_id = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"ProductId","ProductId",1375276495).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"product_id","product_id",692708615).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(product);
}
}
})();
var product_sku = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"SKU","SKU",-640864428).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"sku","sku",-1508141232).cljs$core$IFn$_invoke$arity$1(product);
}
})();
var row_key = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = product_id;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "item";
}
})())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = product_sku;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "sku";
}
})())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.products-tr","tr.products-tr",-482460238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td","td.products-td",1444084509),product_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td-bold","td.products-td-bold",1975178272),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(product);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td","td.products-td",1444084509),(function (){var or__5162__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(product,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"Name","Name",-131211369)], null));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(product,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(product);
}
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td","td.products-td",1444084509),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Price","Price",287530481).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(product);
}
})()))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td","td.products-td",1444084509),product_sku], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td-center","td.products-td-center",-1660510120),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.products-btn-details","button.products-btn-details",-1706450624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17273,product_id,product_sku,row_key,vec__17276,idx,product,c__5647__auto__,size__5648__auto__,b__17274,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details){
return (function (){
cljs.core.reset_BANG_(gilastore_ui.views.products.viewing_product,product);

return cljs.core.reset_BANG_(gilastore_ui.views.products.show_details_modal_QMARK_,true);
});})(i__17273,product_id,product_sku,row_key,vec__17276,idx,product,c__5647__auto__,size__5648__auto__,b__17274,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details))
], null),"\uD83D\uDC41\uFE0F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.products-btn-edit","button.products-btn-edit",390585925),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17273,product_id,product_sku,row_key,vec__17276,idx,product,c__5647__auto__,size__5648__auto__,b__17274,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details){
return (function (){
cljs.core.reset_BANG_(gilastore_ui.views.products.editing_product,product);

return cljs.core.reset_BANG_(gilastore_ui.views.products.show_modal_QMARK_,true);
});})(i__17273,product_id,product_sku,row_key,vec__17276,idx,product,c__5647__auto__,size__5648__auto__,b__17274,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details))
], null),"\u270F\uFE0F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.products-btn-delete","button.products-btn-delete",852879222),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17273,product_id,product_sku,row_key,vec__17276,idx,product,c__5647__auto__,size__5648__auto__,b__17274,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details){
return (function (){
cljs.core.reset_BANG_(gilastore_ui.views.products.product_to_delete,product);

return cljs.core.reset_BANG_(gilastore_ui.views.products.show_delete_modal_QMARK_,true);
});})(i__17273,product_id,product_sku,row_key,vec__17276,idx,product,c__5647__auto__,size__5648__auto__,b__17274,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details))
], null),"\uD83D\uDDD1\uFE0F"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_key], null));
})());

var G__17286 = (i__17273 + (1));
i__17273 = G__17286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17274),gilastore_ui$views$products$products_view_$_iter__17271(cljs.core.chunk_rest(s__17272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17274),null);
}
} else {
var vec__17279 = cljs.core.first(s__17272__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17279,(0),null);
var product = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17279,(1),null);
return cljs.core.cons((function (){var product_id = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"ProductId","ProductId",1375276495).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"product_id","product_id",692708615).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(product);
}
}
})();
var product_sku = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"SKU","SKU",-640864428).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"sku","sku",-1508141232).cljs$core$IFn$_invoke$arity$1(product);
}
})();
var row_key = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = product_id;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "item";
}
})())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = product_sku;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "sku";
}
})())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.products-tr","tr.products-tr",-482460238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td","td.products-td",1444084509),product_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td-bold","td.products-td-bold",1975178272),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(product);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td","td.products-td",1444084509),(function (){var or__5162__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(product,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"Name","Name",-131211369)], null));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(product,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(product);
}
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td","td.products-td",1444084509),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Price","Price",287530481).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(product);
}
})()))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td","td.products-td",1444084509),product_sku], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.products-td-center","td.products-td-center",-1660510120),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.products-btn-details","button.products-btn-details",-1706450624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (product_id,product_sku,row_key,vec__17279,idx,product,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details){
return (function (){
cljs.core.reset_BANG_(gilastore_ui.views.products.viewing_product,product);

return cljs.core.reset_BANG_(gilastore_ui.views.products.show_details_modal_QMARK_,true);
});})(product_id,product_sku,row_key,vec__17279,idx,product,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details))
], null),"\uD83D\uDC41\uFE0F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.products-btn-edit","button.products-btn-edit",390585925),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (product_id,product_sku,row_key,vec__17279,idx,product,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details){
return (function (){
cljs.core.reset_BANG_(gilastore_ui.views.products.editing_product,product);

return cljs.core.reset_BANG_(gilastore_ui.views.products.show_modal_QMARK_,true);
});})(product_id,product_sku,row_key,vec__17279,idx,product,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details))
], null),"\u270F\uFE0F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.products-btn-delete","button.products-btn-delete",852879222),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (product_id,product_sku,row_key,vec__17279,idx,product,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details){
return (function (){
cljs.core.reset_BANG_(gilastore_ui.views.products.product_to_delete,product);

return cljs.core.reset_BANG_(gilastore_ui.views.products.show_delete_modal_QMARK_,true);
});})(product_id,product_sku,row_key,vec__17279,idx,product,s__17272__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details))
], null),"\uD83D\uDDD1\uFE0F"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_key], null));
})(),gilastore_ui$views$products$products_view_$_iter__17271(cljs.core.rest(s__17272__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,items));
})())], null)], null)], null),((((cljs.core.seq(links)) && ((last_page > (1)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pagination-container","div.pagination-container",-1515215326),(function (){var iter__5649__auto__ = (function gilastore_ui$views$products$products_view_$_iter__17282(s__17283){
return (new cljs.core.LazySeq(null,(function (){
var s__17283__$1 = s__17283;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17283__$1);
if(temp__5823__auto__){
var s__17283__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17283__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17283__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17285 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17284 = (0);
while(true){
if((i__17284 < size__5648__auto__)){
var link = cljs.core._nth(c__5647__auto__,i__17284);
cljs.core.chunk_append(b__17285,(function (){var page_num = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(link);
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(link);
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(link);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pagination-btn","button.pagination-btn",-1818001516),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(page_num == null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(active_QMARK_)?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17284,page_num,label,active_QMARK_,link,c__5647__auto__,size__5648__auto__,b__17285,s__17283__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details){
return (function (){
if(cljs.core.truth_(page_num)){
return gilastore_ui.views.products.fetch_products(page_num);
} else {
return null;
}
});})(i__17284,page_num,label,active_QMARK_,link,c__5647__auto__,size__5648__auto__,b__17285,s__17283__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details))
], null),((clojure.string.includes_QMARK_(label,"Previous"))?"\u00AB Prev":((clojure.string.includes_QMARK_(label,"Next"))?"Next \u00BB":label
))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null));
})());

var G__17287 = (i__17284 + (1));
i__17284 = G__17287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17285),gilastore_ui$views$products$products_view_$_iter__17282(cljs.core.chunk_rest(s__17283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17285),null);
}
} else {
var link = cljs.core.first(s__17283__$2);
return cljs.core.cons((function (){var page_num = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(link);
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(link);
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(link);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pagination-btn","button.pagination-btn",-1818001516),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(page_num == null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(active_QMARK_)?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page_num,label,active_QMARK_,link,s__17283__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details){
return (function (){
if(cljs.core.truth_(page_num)){
return gilastore_ui.views.products.fetch_products(page_num);
} else {
return null;
}
});})(page_num,label,active_QMARK_,link,s__17283__$2,temp__5823__auto__,state,map__17268,map__17268__$1,items,links,current_page,last_page,loading_QMARK_,error,is_modal_open_QMARK_,product_edit,is_delete_open_QMARK_,del_product,product_is_import_open_QMARK_,is_details_open_QMARK_,prod_details))
], null),((clojure.string.includes_QMARK_(label,"Previous"))?"\u00AB Prev":((clojure.string.includes_QMARK_(label,"Next"))?"Next \u00BB":label
))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null));
})(),gilastore_ui$views$products$products_view_$_iter__17282(cljs.core.rest(s__17283__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(links);
})()], null):null)], null))], null);
});
gilastore_ui.views.products.fetch_products((1));

//# sourceMappingURL=gilastore_ui.views.products.js.map
