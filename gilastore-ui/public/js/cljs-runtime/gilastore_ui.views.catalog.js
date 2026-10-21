goog.provide('gilastore_ui.views.catalog');
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.catalog !== 'undefined') && (typeof gilastore_ui.views.catalog.catalog_state !== 'undefined')){
} else {
gilastore_ui.views.catalog.catalog_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cart","cart",-119094748),new cljs.core.Keyword(null,"quantities","quantities",1986214024),new cljs.core.Keyword(null,"search-term","search-term",356193544),new cljs.core.Keyword(null,"products","products",1876973544),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"last-page","last-page",-1966154825),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"links","links",-654507394)],[cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"",cljs.core.PersistentVector.EMPTY,false,(1),null,(1),cljs.core.PersistentVector.EMPTY]));
}
gilastore_ui.views.catalog.fetch_catalog_products = (function gilastore_ui$views$catalog$fetch_catalog_products(page_num){
var map__17171 = cljs.core.deref(gilastore_ui.views.catalog.catalog_state);
var map__17171__$1 = cljs.core.__destructure_map(map__17171);
var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17171__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.catalog.catalog_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

var query_url = ((cljs.core.seq(search_term))?(""+"/products?page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_num)+"&search="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(search_term))):(""+"/products?page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_num)));
return gilastore_ui.api.api_fetch(query_url).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error loading product catalog");
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.catalog.catalog_state,cljs.core.assoc,new cljs.core.Keyword(null,"products","products",1876973544),items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-page","current-page",-101294180),current_page,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),last_page,new cljs.core.Keyword(null,"links","links",-654507394),links,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
})).catch((function (err){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.catalog.catalog_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),err.message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
});
gilastore_ui.views.catalog.search_catalog = (function gilastore_ui$views$catalog$search_catalog(query_str){
if(clojure.string.blank_QMARK_(query_str)){
return gilastore_ui.views.catalog.fetch_catalog_products((1));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.catalog.catalog_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

var url = (""+"/products/search/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(query_str)));
return gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null)], 0)).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error performing search");
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.catalog.catalog_state,cljs.core.assoc,new cljs.core.Keyword(null,"products","products",1876973544),results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-page","current-page",-101294180),current_page,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),last_page,new cljs.core.Keyword(null,"links","links",-654507394),links,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
})).catch((function (err){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.catalog.catalog_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),err.message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
}
});
gilastore_ui.views.catalog.set_product_quantity = (function gilastore_ui$views$catalog$set_product_quantity(product_id,qty){
var parsed_qty = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),parseInt(((cljs.core.empty_QMARK_(qty))?(1):qty),(10)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.catalog.catalog_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantities","quantities",1986214024),product_id], null),parsed_qty);
});
gilastore_ui.views.catalog.add_to_cart = (function gilastore_ui$views$catalog$add_to_cart(product){
var product_id = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"ProductId","ProductId",1375276495).cljs$core$IFn$_invoke$arity$1(product);
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
var quantities = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(gilastore_ui.views.catalog.catalog_state),new cljs.core.Keyword(null,"quantities","quantities",1986214024),cljs.core.PersistentArrayMap.EMPTY);
var qty = cljs.core.get.cljs$core$IFn$_invoke$arity$3(quantities,product_id,(1));
var current_user = cljs.core.deref(gilastore_ui.state.current_user_atom);
var userid = (cljs.core.truth_(new cljs.core.Keyword(null,"userid","userid",1974246085).cljs$core$IFn$_invoke$arity$1(current_user))?new cljs.core.Keyword(null,"userid","userid",1974246085).cljs$core$IFn$_invoke$arity$1(current_user):((typeof current_user === 'string')?current_user:(function (){var or__5162__auto__ = localStorage.getItem("userid");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()
));
var payload = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"UserId","UserId",1260469425),userid,new cljs.core.Keyword(null,"ProductId","ProductId",1375276495),product_id,new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty))], null)));
return gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic("/salescart/additem",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),payload], null)], 0)).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error adding item to cart");
}
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(clj_data),"success")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.catalog.catalog_state,cljs.core.update,new cljs.core.Keyword(null,"cart","cart",-119094748),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(clj_data))], 0));

return alert((""+"Successfully added "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty)+" unit(s) of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(product);
}
})())+" to the cart!"));
} else {
return alert((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Could not add item to cart.";
}
})());
}
})).catch((function (err){
console.error("Cart error:",err);

return alert("Connection error while adding item to cart.");
}));
});
gilastore_ui.views.catalog.catalog_view = (function gilastore_ui$views$catalog$catalog_view(){
var state = cljs.core.deref(gilastore_ui.views.catalog.catalog_state);
var map__17228 = state;
var map__17228__$1 = cljs.core.__destructure_map(map__17228);
var products = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17228__$1,new cljs.core.Keyword(null,"products","products",1876973544));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17228__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17228__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var cart = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17228__$1,new cljs.core.Keyword(null,"cart","cart",-119094748));
var quantities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17228__$1,new cljs.core.Keyword(null,"quantities","quantities",1986214024));
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17228__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var last_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17228__$1,new cljs.core.Keyword(null,"last-page","last-page",-1966154825));
var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17228__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));
if(((cljs.core.empty_QMARK_(products)) && (((cljs.core.not(loading_QMARK_)) && ((((error == null)) && (cljs.core.empty_QMARK_(search_term)))))))){
gilastore_ui.views.catalog.fetch_catalog_products((1));
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.catalog-container","div.catalog-container",1371145493),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.catalog-header-bar","div.catalog-header-bar",1636743660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.catalog-title","h2.catalog-title",-2131164721),"\uD83D\uDED2 Product Catalog"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.catalog-search-wrapper","div.catalog-search-wrapper",-2097958187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.catalog-search-input","input.catalog-search-input",-1653956380),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search by name or SKU...",new cljs.core.Keyword(null,"value","value",305978217),search_term,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.catalog.catalog_state,cljs.core.assoc,new cljs.core.Keyword(null,"search-term","search-term",356193544),e.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.catalog-btn-search","button.catalog-btn-search",130673233),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return gilastore_ui.views.catalog.search_catalog(search_term);
})], null),"Search"], null),((cljs.core.seq(search_term))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.catalog-btn-reset","button.catalog-btn-reset",210732976),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.catalog.catalog_state,cljs.core.assoc,new cljs.core.Keyword(null,"search-term","search-term",356193544),"");

return gilastore_ui.views.catalog.fetch_catalog_products((1));
})], null),"Reset"], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.catalog-cart-badge","div.catalog-cart-badge",-1741690134),(""+"Items in cart: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cart)))], null)], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.catalog-loading","p.catalog-loading",-1509057683),"Loading catalog..."], null):null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.catalog-error","div.catalog-error",1023602117),error], null):null),(cljs.core.truth_(loading_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.catalog-grid","div.catalog-grid",1820064156),((cljs.core.empty_QMARK_(products))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.catalog-empty","div.catalog-empty",609443453),"No products available at the moment."], null):(function (){var iter__5649__auto__ = (function gilastore_ui$views$catalog$catalog_view_$_iter__17242(s__17243){
return (new cljs.core.LazySeq(null,(function (){
var s__17243__$1 = s__17243;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17243__$1);
if(temp__5823__auto__){
var s__17243__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17243__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17243__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17245 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17244 = (0);
while(true){
if((i__17244 < size__5648__auto__)){
var product = cljs.core._nth(c__5647__auto__,i__17244);
cljs.core.chunk_append(b__17245,(function (){var id = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"ProductId","ProductId",1375276495).cljs$core$IFn$_invoke$arity$1(product);
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
var name = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(product);
}
})();
var description = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Description","Description",-679315496).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(product);
}
})();
var price = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Price","Price",287530481).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(product);
}
})();
var sku = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"SKU","SKU",-640864428).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"sku","sku",-1508141232).cljs$core$IFn$_invoke$arity$1(product);
}
})();
var current_qty = cljs.core.get.cljs$core$IFn$_invoke$arity$3(quantities,id,(1));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.product-card","div.product-card",1970814029),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.product-card-top","div.product-card-top",1325125392),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.product-name","h4.product-name",-1984559686),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.product-sku","span.product-sku",367135962),sku], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.product-description","p.product-description",-124091863),((clojure.string.blank_QMARK_(description))?"No description available.":description)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.product-card-footer","div.product-card-footer",655506149),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.product-price-qty-row","div.product-price-qty-row",224782471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.product-price","span.product-price",1498708893),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(price))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.product-qty-wrapper","div.product-qty-wrapper",-169738583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.product-qty-label","label.product-qty-label",1685813855),"Qty:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.product-qty-input","input.product-qty-input",-2142028141),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"value","value",305978217),current_qty,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__17244,id,name,description,price,sku,current_qty,product,c__5647__auto__,size__5648__auto__,b__17245,s__17243__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term){
return (function (e){
return gilastore_ui.views.catalog.set_product_quantity(id,e.target.value);
});})(i__17244,id,name,description,price,sku,current_qty,product,c__5647__auto__,size__5648__auto__,b__17245,s__17243__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.product-btn-add","button.product-btn-add",-272377569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17244,id,name,description,price,sku,current_qty,product,c__5647__auto__,size__5648__auto__,b__17245,s__17243__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term){
return (function (){
return gilastore_ui.views.catalog.add_to_cart(product);
});})(i__17244,id,name,description,price,sku,current_qty,product,c__5647__auto__,size__5648__auto__,b__17245,s__17243__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term))
], null),"Add to Cart \uD83D\uDECD\uFE0F"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__17270 = (i__17244 + (1));
i__17244 = G__17270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17245),gilastore_ui$views$catalog$catalog_view_$_iter__17242(cljs.core.chunk_rest(s__17243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17245),null);
}
} else {
var product = cljs.core.first(s__17243__$2);
return cljs.core.cons((function (){var id = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"ProductId","ProductId",1375276495).cljs$core$IFn$_invoke$arity$1(product);
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
var name = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(product);
}
})();
var description = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Description","Description",-679315496).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(product);
}
})();
var price = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Price","Price",287530481).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(product);
}
})();
var sku = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"SKU","SKU",-640864428).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"sku","sku",-1508141232).cljs$core$IFn$_invoke$arity$1(product);
}
})();
var current_qty = cljs.core.get.cljs$core$IFn$_invoke$arity$3(quantities,id,(1));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.product-card","div.product-card",1970814029),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.product-card-top","div.product-card-top",1325125392),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.product-name","h4.product-name",-1984559686),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.product-sku","span.product-sku",367135962),sku], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.product-description","p.product-description",-124091863),((clojure.string.blank_QMARK_(description))?"No description available.":description)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.product-card-footer","div.product-card-footer",655506149),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.product-price-qty-row","div.product-price-qty-row",224782471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.product-price","span.product-price",1498708893),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(price))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.product-qty-wrapper","div.product-qty-wrapper",-169738583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.product-qty-label","label.product-qty-label",1685813855),"Qty:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.product-qty-input","input.product-qty-input",-2142028141),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"value","value",305978217),current_qty,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,name,description,price,sku,current_qty,product,s__17243__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term){
return (function (e){
return gilastore_ui.views.catalog.set_product_quantity(id,e.target.value);
});})(id,name,description,price,sku,current_qty,product,s__17243__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.product-btn-add","button.product-btn-add",-272377569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,name,description,price,sku,current_qty,product,s__17243__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term){
return (function (){
return gilastore_ui.views.catalog.add_to_cart(product);
});})(id,name,description,price,sku,current_qty,product,s__17243__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term))
], null),"Add to Cart \uD83D\uDECD\uFE0F"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),gilastore_ui$views$catalog$catalog_view_$_iter__17242(cljs.core.rest(s__17243__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(products);
})())], null),((((cljs.core.seq(links)) && ((last_page > (1)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pagination-container","div.pagination-container",-1515215326),(function (){var iter__5649__auto__ = (function gilastore_ui$views$catalog$catalog_view_$_iter__17254(s__17255){
return (new cljs.core.LazySeq(null,(function (){
var s__17255__$1 = s__17255;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17255__$1);
if(temp__5823__auto__){
var s__17255__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17255__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17255__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17257 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17256 = (0);
while(true){
if((i__17256 < size__5648__auto__)){
var link = cljs.core._nth(c__5647__auto__,i__17256);
cljs.core.chunk_append(b__17257,(function (){var page_num = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(link);
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(link);
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(link);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pagination-btn","button.pagination-btn",-1818001516),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(page_num == null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(active_QMARK_)?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17256,page_num,label,active_QMARK_,link,c__5647__auto__,size__5648__auto__,b__17257,s__17255__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term){
return (function (){
if(cljs.core.truth_(page_num)){
return gilastore_ui.views.catalog.fetch_catalog_products(page_num);
} else {
return null;
}
});})(i__17256,page_num,label,active_QMARK_,link,c__5647__auto__,size__5648__auto__,b__17257,s__17255__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term))
], null),((clojure.string.includes_QMARK_(label,"Previous"))?"\u00AB Prev":((clojure.string.includes_QMARK_(label,"Next"))?"Next \u00BB":label
))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null));
})());

var G__17275 = (i__17256 + (1));
i__17256 = G__17275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17257),gilastore_ui$views$catalog$catalog_view_$_iter__17254(cljs.core.chunk_rest(s__17255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17257),null);
}
} else {
var link = cljs.core.first(s__17255__$2);
return cljs.core.cons((function (){var page_num = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(link);
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(link);
var active_QMARK_ = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(link);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pagination-btn","button.pagination-btn",-1818001516),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(page_num == null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(active_QMARK_)?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page_num,label,active_QMARK_,link,s__17255__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term){
return (function (){
if(cljs.core.truth_(page_num)){
return gilastore_ui.views.catalog.fetch_catalog_products(page_num);
} else {
return null;
}
});})(page_num,label,active_QMARK_,link,s__17255__$2,temp__5823__auto__,state,map__17228,map__17228__$1,products,loading_QMARK_,error,cart,quantities,links,last_page,search_term))
], null),((clojure.string.includes_QMARK_(label,"Previous"))?"\u00AB Prev":((clojure.string.includes_QMARK_(label,"Next"))?"Next \u00BB":label
))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null));
})(),gilastore_ui$views$catalog$catalog_view_$_iter__17254(cljs.core.rest(s__17255__$2)));
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

//# sourceMappingURL=gilastore_ui.views.catalog.js.map
