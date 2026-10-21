goog.provide('gilastore_ui.views.my_orders');
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.my_orders !== 'undefined') && (typeof gilastore_ui.views.my_orders.orders_state !== 'undefined')){
} else {
gilastore_ui.views.my_orders.orders_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orders","orders",-1032870176),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null));
}
gilastore_ui.views.my_orders.fetch_user_orders = (function gilastore_ui$views$my_orders$fetch_user_orders(){
var userid = (function (){var or__5162__auto__ = localStorage.getItem("userid");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "2";
}
})();
var url = (""+"/sales/order/byuser/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(userid));
console.log("Sale orders URL:",url);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.my_orders.orders_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

return gilastore_ui.api.api_fetch(url).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error loading user orders");
}
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var orders = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"orders","orders",-1032870176).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = clj_data;
if(cljs.core.truth_(or__5162__auto____$2)){
return or__5162__auto____$2;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
}
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.my_orders.orders_state,cljs.core.assoc,new cljs.core.Keyword(null,"orders","orders",-1032870176),orders,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
})).catch((function (err){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.my_orders.orders_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),err.message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
});
gilastore_ui.views.my_orders.my_orders_view = (function gilastore_ui$views$my_orders$my_orders_view(){
var state = cljs.core.deref(gilastore_ui.views.my_orders.orders_state);
var map__17193 = state;
var map__17193__$1 = cljs.core.__destructure_map(map__17193);
var orders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17193__$1,new cljs.core.Keyword(null,"orders","orders",-1032870176));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17193__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17193__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(((cljs.core.empty_QMARK_(orders)) && (((cljs.core.not(loading_QMARK_)) && ((error == null)))))){
gilastore_ui.views.my_orders.fetch_user_orders();
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.orders-container","div.orders-container",-765238707),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.orders-title","h2.orders-title",-421387248),"\uD83D\uDCE6 My Orders"], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.orders-loading","p.orders-loading",1659645246),"Loading orders..."], null):null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.orders-error","div.orders-error",-516225017),error], null):null),(cljs.core.truth_(loading_QMARK_)?null:((cljs.core.empty_QMARK_(orders))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.orders-empty","div.orders-empty",290552397),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.orders-empty-text","p.orders-empty-text",1486895832),"You haven't placed any orders yet."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.orders-btn-catalog","a.orders-btn-catalog",2118742419),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/catalog"], null),"Start Shopping \uD83D\uDECD\uFE0F"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.orders-list","div.orders-list",-1255801468),(function (){var iter__5649__auto__ = (function gilastore_ui$views$my_orders$my_orders_view_$_iter__17199(s__17200){
return (new cljs.core.LazySeq(null,(function (){
var s__17200__$1 = s__17200;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17200__$1);
if(temp__5823__auto__){
var s__17200__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17200__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17200__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17202 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17201 = (0);
while(true){
if((i__17201 < size__5648__auto__)){
var order = cljs.core._nth(c__5647__auto__,i__17201);
cljs.core.chunk_append(b__17202,(function (){var sale_id = new cljs.core.Keyword(null,"SaleId","SaleId",-1769941206).cljs$core$IFn$_invoke$arity$1(order);
var order_number = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"OrderNumber","OrderNumber",471056942).cljs$core$IFn$_invoke$arity$1(order);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+"Order #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sale_id));
}
})();
var total = new cljs.core.Keyword(null,"TotalAmount","TotalAmount",-1192606810).cljs$core$IFn$_invoke$arity$1(order);
var subtotal = new cljs.core.Keyword(null,"SubTotal","SubTotal",376512312).cljs$core$IFn$_invoke$arity$1(order);
var tax = new cljs.core.Keyword(null,"TaxAmount","TaxAmount",-897823796).cljs$core$IFn$_invoke$arity$1(order);
var shipping = new cljs.core.Keyword(null,"ShippingCost","ShippingCost",280411861).cljs$core$IFn$_invoke$arity$1(order);
var address = new cljs.core.Keyword(null,"ShippingAddress","ShippingAddress",620683014).cljs$core$IFn$_invoke$arity$1(order);
var payment = new cljs.core.Keyword(null,"PaymentMethod","PaymentMethod",-1723361015).cljs$core$IFn$_invoke$arity$1(order);
var status = new cljs.core.Keyword(null,"Status","Status",-1212030049).cljs$core$IFn$_invoke$arity$1(order);
var created_at = new cljs.core.Keyword(null,"CreatedAt","CreatedAt",1659720385).cljs$core$IFn$_invoke$arity$1(order);
var details = new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(order);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-card","div.order-card",-800945601),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-header","div.order-header",-146624373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.order-id","span.order-id",-475908388),order_number], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.order-status","span.order-status",-822891764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"status-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case((function (){var or__5162__auto__ = status;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "pending";
}
})())))], null),status], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-details-grid","div.order-details-grid",-1732930179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-detail-item","div.order-detail-item",-1952904118),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Date: "], null),(cljs.core.truth_((function (){var and__5160__auto__ = created_at;
if(cljs.core.truth_(and__5160__auto__)){
return (cljs.core.count(created_at) >= (10));
} else {
return and__5160__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(created_at,(0),(10)):created_at)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-detail-item","div.order-detail-item",-1952904118),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Payment: "], null),payment], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-detail-item","div.order-detail-item",-1952904118),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Address: "], null),address], null)], null),((cljs.core.seq(details))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-items-section","div.order-items-section",967767421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.order-items-title","h4.order-items-title",357415293),"Items in this order:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.order-items-table","table.order-items-table",1098671215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Product"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Qty"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Unit Price"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Total"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5649__auto__ = ((function (i__17201,sale_id,order_number,total,subtotal,tax,shipping,address,payment,status,created_at,details,order,c__5647__auto__,size__5648__auto__,b__17202,s__17200__$2,temp__5823__auto__,state,map__17193,map__17193__$1,orders,loading_QMARK_,error){
return (function gilastore_ui$views$my_orders$my_orders_view_$_iter__17199_$_iter__17215(s__17216){
return (new cljs.core.LazySeq(null,((function (i__17201,sale_id,order_number,total,subtotal,tax,shipping,address,payment,status,created_at,details,order,c__5647__auto__,size__5648__auto__,b__17202,s__17200__$2,temp__5823__auto__,state,map__17193,map__17193__$1,orders,loading_QMARK_,error){
return (function (){
var s__17216__$1 = s__17216;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__17216__$1);
if(temp__5823__auto____$1){
var s__17216__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17216__$2)){
var c__5647__auto____$1 = cljs.core.chunk_first(s__17216__$2);
var size__5648__auto____$1 = cljs.core.count(c__5647__auto____$1);
var b__17218 = cljs.core.chunk_buffer(size__5648__auto____$1);
if((function (){var i__17217 = (0);
while(true){
if((i__17217 < size__5648__auto____$1)){
var detail = cljs.core._nth(c__5647__auto____$1,i__17217);
cljs.core.chunk_append(b__17218,(function (){var detail_id = new cljs.core.Keyword(null,"SaleDetailId","SaleDetailId",1187267143).cljs$core$IFn$_invoke$arity$1(detail);
var product = new cljs.core.Keyword(null,"product","product",1363474257).cljs$core$IFn$_invoke$arity$1(detail);
var prod_name = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Product";
}
})();
var qty = new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397).cljs$core$IFn$_invoke$arity$1(detail);
var unit_price = new cljs.core.Keyword(null,"UnitPrice","UnitPrice",-1524576287).cljs$core$IFn$_invoke$arity$1(detail);
var total_price = new cljs.core.Keyword(null,"TotalPrice","TotalPrice",575958995).cljs$core$IFn$_invoke$arity$1(detail);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.item-name","td.item-name",690700788),prod_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),qty], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit_price))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.item-total","td.item-total",1361497982),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_price))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail_id], null));
})());

var G__17260 = (i__17217 + (1));
i__17217 = G__17260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17218),gilastore_ui$views$my_orders$my_orders_view_$_iter__17199_$_iter__17215(cljs.core.chunk_rest(s__17216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17218),null);
}
} else {
var detail = cljs.core.first(s__17216__$2);
return cljs.core.cons((function (){var detail_id = new cljs.core.Keyword(null,"SaleDetailId","SaleDetailId",1187267143).cljs$core$IFn$_invoke$arity$1(detail);
var product = new cljs.core.Keyword(null,"product","product",1363474257).cljs$core$IFn$_invoke$arity$1(detail);
var prod_name = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Product";
}
})();
var qty = new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397).cljs$core$IFn$_invoke$arity$1(detail);
var unit_price = new cljs.core.Keyword(null,"UnitPrice","UnitPrice",-1524576287).cljs$core$IFn$_invoke$arity$1(detail);
var total_price = new cljs.core.Keyword(null,"TotalPrice","TotalPrice",575958995).cljs$core$IFn$_invoke$arity$1(detail);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.item-name","td.item-name",690700788),prod_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),qty], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit_price))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.item-total","td.item-total",1361497982),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_price))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail_id], null));
})(),gilastore_ui$views$my_orders$my_orders_view_$_iter__17199_$_iter__17215(cljs.core.rest(s__17216__$2)));
}
} else {
return null;
}
break;
}
});})(i__17201,sale_id,order_number,total,subtotal,tax,shipping,address,payment,status,created_at,details,order,c__5647__auto__,size__5648__auto__,b__17202,s__17200__$2,temp__5823__auto__,state,map__17193,map__17193__$1,orders,loading_QMARK_,error))
,null,null));
});})(i__17201,sale_id,order_number,total,subtotal,tax,shipping,address,payment,status,created_at,details,order,c__5647__auto__,size__5648__auto__,b__17202,s__17200__$2,temp__5823__auto__,state,map__17193,map__17193__$1,orders,loading_QMARK_,error))
;
return iter__5649__auto__(details);
})()], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-footer-summary","div.order-footer-summary",-1248752689),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-summary-line","div.order-summary-line",-1320983875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Subtotal:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(subtotal))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-summary-line","div.order-summary-line",-1320983875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Tax:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tax))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-summary-line","div.order-summary-line",-1320983875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Shipping:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(shipping))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-summary-total","div.order-summary-total",-727867505),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Total Amount:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.order-total-val","span.order-total-val",-456716235),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),sale_id], null));
})());

var G__17261 = (i__17201 + (1));
i__17201 = G__17261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17202),gilastore_ui$views$my_orders$my_orders_view_$_iter__17199(cljs.core.chunk_rest(s__17200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17202),null);
}
} else {
var order = cljs.core.first(s__17200__$2);
return cljs.core.cons((function (){var sale_id = new cljs.core.Keyword(null,"SaleId","SaleId",-1769941206).cljs$core$IFn$_invoke$arity$1(order);
var order_number = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"OrderNumber","OrderNumber",471056942).cljs$core$IFn$_invoke$arity$1(order);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+"Order #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sale_id));
}
})();
var total = new cljs.core.Keyword(null,"TotalAmount","TotalAmount",-1192606810).cljs$core$IFn$_invoke$arity$1(order);
var subtotal = new cljs.core.Keyword(null,"SubTotal","SubTotal",376512312).cljs$core$IFn$_invoke$arity$1(order);
var tax = new cljs.core.Keyword(null,"TaxAmount","TaxAmount",-897823796).cljs$core$IFn$_invoke$arity$1(order);
var shipping = new cljs.core.Keyword(null,"ShippingCost","ShippingCost",280411861).cljs$core$IFn$_invoke$arity$1(order);
var address = new cljs.core.Keyword(null,"ShippingAddress","ShippingAddress",620683014).cljs$core$IFn$_invoke$arity$1(order);
var payment = new cljs.core.Keyword(null,"PaymentMethod","PaymentMethod",-1723361015).cljs$core$IFn$_invoke$arity$1(order);
var status = new cljs.core.Keyword(null,"Status","Status",-1212030049).cljs$core$IFn$_invoke$arity$1(order);
var created_at = new cljs.core.Keyword(null,"CreatedAt","CreatedAt",1659720385).cljs$core$IFn$_invoke$arity$1(order);
var details = new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(order);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-card","div.order-card",-800945601),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-header","div.order-header",-146624373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.order-id","span.order-id",-475908388),order_number], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.order-status","span.order-status",-822891764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"status-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case((function (){var or__5162__auto__ = status;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "pending";
}
})())))], null),status], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-details-grid","div.order-details-grid",-1732930179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-detail-item","div.order-detail-item",-1952904118),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Date: "], null),(cljs.core.truth_((function (){var and__5160__auto__ = created_at;
if(cljs.core.truth_(and__5160__auto__)){
return (cljs.core.count(created_at) >= (10));
} else {
return and__5160__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(created_at,(0),(10)):created_at)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-detail-item","div.order-detail-item",-1952904118),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Payment: "], null),payment], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-detail-item","div.order-detail-item",-1952904118),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Address: "], null),address], null)], null),((cljs.core.seq(details))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-items-section","div.order-items-section",967767421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.order-items-title","h4.order-items-title",357415293),"Items in this order:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.order-items-table","table.order-items-table",1098671215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Product"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Qty"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Unit Price"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Total"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5649__auto__ = ((function (sale_id,order_number,total,subtotal,tax,shipping,address,payment,status,created_at,details,order,s__17200__$2,temp__5823__auto__,state,map__17193,map__17193__$1,orders,loading_QMARK_,error){
return (function gilastore_ui$views$my_orders$my_orders_view_$_iter__17199_$_iter__17235(s__17236){
return (new cljs.core.LazySeq(null,(function (){
var s__17236__$1 = s__17236;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__17236__$1);
if(temp__5823__auto____$1){
var s__17236__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17236__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17236__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17238 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17237 = (0);
while(true){
if((i__17237 < size__5648__auto__)){
var detail = cljs.core._nth(c__5647__auto__,i__17237);
cljs.core.chunk_append(b__17238,(function (){var detail_id = new cljs.core.Keyword(null,"SaleDetailId","SaleDetailId",1187267143).cljs$core$IFn$_invoke$arity$1(detail);
var product = new cljs.core.Keyword(null,"product","product",1363474257).cljs$core$IFn$_invoke$arity$1(detail);
var prod_name = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Product";
}
})();
var qty = new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397).cljs$core$IFn$_invoke$arity$1(detail);
var unit_price = new cljs.core.Keyword(null,"UnitPrice","UnitPrice",-1524576287).cljs$core$IFn$_invoke$arity$1(detail);
var total_price = new cljs.core.Keyword(null,"TotalPrice","TotalPrice",575958995).cljs$core$IFn$_invoke$arity$1(detail);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.item-name","td.item-name",690700788),prod_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),qty], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit_price))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.item-total","td.item-total",1361497982),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_price))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail_id], null));
})());

var G__17264 = (i__17237 + (1));
i__17237 = G__17264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17238),gilastore_ui$views$my_orders$my_orders_view_$_iter__17199_$_iter__17235(cljs.core.chunk_rest(s__17236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17238),null);
}
} else {
var detail = cljs.core.first(s__17236__$2);
return cljs.core.cons((function (){var detail_id = new cljs.core.Keyword(null,"SaleDetailId","SaleDetailId",1187267143).cljs$core$IFn$_invoke$arity$1(detail);
var product = new cljs.core.Keyword(null,"product","product",1363474257).cljs$core$IFn$_invoke$arity$1(detail);
var prod_name = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Product";
}
})();
var qty = new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397).cljs$core$IFn$_invoke$arity$1(detail);
var unit_price = new cljs.core.Keyword(null,"UnitPrice","UnitPrice",-1524576287).cljs$core$IFn$_invoke$arity$1(detail);
var total_price = new cljs.core.Keyword(null,"TotalPrice","TotalPrice",575958995).cljs$core$IFn$_invoke$arity$1(detail);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.item-name","td.item-name",690700788),prod_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),qty], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit_price))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.item-total","td.item-total",1361497982),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_price))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail_id], null));
})(),gilastore_ui$views$my_orders$my_orders_view_$_iter__17199_$_iter__17235(cljs.core.rest(s__17236__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(sale_id,order_number,total,subtotal,tax,shipping,address,payment,status,created_at,details,order,s__17200__$2,temp__5823__auto__,state,map__17193,map__17193__$1,orders,loading_QMARK_,error))
;
return iter__5649__auto__(details);
})()], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-footer-summary","div.order-footer-summary",-1248752689),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-summary-line","div.order-summary-line",-1320983875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Subtotal:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(subtotal))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-summary-line","div.order-summary-line",-1320983875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Tax:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tax))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-summary-line","div.order-summary-line",-1320983875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Shipping:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(shipping))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-summary-total","div.order-summary-total",-727867505),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Total Amount:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.order-total-val","span.order-total-val",-456716235),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),sale_id], null));
})(),gilastore_ui$views$my_orders$my_orders_view_$_iter__17199(cljs.core.rest(s__17200__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(orders);
})()], null)))], null);
});

//# sourceMappingURL=gilastore_ui.views.my_orders.js.map
