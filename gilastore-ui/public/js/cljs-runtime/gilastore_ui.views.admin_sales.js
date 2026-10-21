goog.provide('gilastore_ui.views.admin_sales');
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.admin_sales !== 'undefined') && (typeof gilastore_ui.views.admin_sales.admin_sales_state !== 'undefined')){
} else {
gilastore_ui.views.admin_sales.admin_sales_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orders","orders",-1032870176),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null));
}
gilastore_ui.views.admin_sales.valid_statuses = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PROCESSING","COMPLETED","SHIPPED","DELIVERED","CANCELLED"], null);
gilastore_ui.views.admin_sales.fetch_all_orders = (function gilastore_ui$views$admin_sales$fetch_all_orders(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.admin_sales.admin_sales_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

return gilastore_ui.api.api_fetch("/sales/order/allorders").then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error loading all orders");
}
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var orders_list = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = clj_data;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.admin_sales.admin_sales_state,cljs.core.assoc,new cljs.core.Keyword(null,"orders","orders",-1032870176),orders_list,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
})).catch((function (err){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.admin_sales.admin_sales_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),err.message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
});
gilastore_ui.views.admin_sales.update_order_status = (function gilastore_ui$views$admin_sales$update_order_status(order_number,new_status){
var payload = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Status","Status",-1212030049),new_status], null)));
return gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic((""+"/sales/order/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(order_number)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"PATCH",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),payload], null)], 0)).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error updating order status");
}
})).then((function (_){
return gilastore_ui.views.admin_sales.fetch_all_orders();
})).catch((function (err){
return alert((""+"Error: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(err.message)));
}));
});
gilastore_ui.views.admin_sales.admin_sales_view = (function gilastore_ui$views$admin_sales$admin_sales_view(){
var state = cljs.core.deref(gilastore_ui.views.admin_sales.admin_sales_state);
var map__17289 = state;
var map__17289__$1 = cljs.core.__destructure_map(map__17289);
var orders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17289__$1,new cljs.core.Keyword(null,"orders","orders",-1032870176));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17289__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17289__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(((cljs.core.empty_QMARK_(orders)) && (((cljs.core.not(loading_QMARK_)) && ((error == null)))))){
gilastore_ui.views.admin_sales.fetch_all_orders();
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-sales-container","div.admin-sales-container",816599443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-sales-header-bar","div.admin-sales-header-bar",-1779390791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.admin-sales-title","h2.admin-sales-title",314281906),"\uD83D\uDCC8 Sales Management"], null)], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.admin-sales-loading","p.admin-sales-loading",2094360126),"Loading sales orders..."], null):null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-sales-error","div.admin-sales-error",1125716266),error], null):null),(cljs.core.truth_(loading_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-sales-table-wrapper","div.admin-sales-table-wrapper",304422401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.admin-sales-table","table.admin-sales-table",1498259567),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.admin-sales-tr-header","tr.admin-sales-tr-header",-240897811),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-sales-th","th.admin-sales-th",-1035249100),"Order #"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-sales-th","th.admin-sales-th",-1035249100),"User ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-sales-th","th.admin-sales-th",-1035249100),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-sales-th","th.admin-sales-th",-1035249100),"Total"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-sales-th","th.admin-sales-th",-1035249100),"Payment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-sales-th","th.admin-sales-th",-1035249100),"Status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-sales-th-center","th.admin-sales-th-center",-810841921),"Actions"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),((cljs.core.empty_QMARK_(orders))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-empty-cell","td.admin-sales-empty-cell",-1615234670),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),"7"], null),"No orders found."], null)], null):(function (){var iter__5649__auto__ = (function gilastore_ui$views$admin_sales$admin_sales_view_$_iter__17290(s__17291){
return (new cljs.core.LazySeq(null,(function (){
var s__17291__$1 = s__17291;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17291__$1);
if(temp__5823__auto__){
var s__17291__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17291__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17291__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17293 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17292 = (0);
while(true){
if((i__17292 < size__5648__auto__)){
var order = cljs.core._nth(c__5647__auto__,i__17292);
cljs.core.chunk_append(b__17293,(function (){var order_number = new cljs.core.Keyword(null,"OrderNumber","OrderNumber",471056942).cljs$core$IFn$_invoke$arity$1(order);
var user_id = new cljs.core.Keyword(null,"UserId","UserId",1260469425).cljs$core$IFn$_invoke$arity$1(order);
var total = new cljs.core.Keyword(null,"TotalAmount","TotalAmount",-1192606810).cljs$core$IFn$_invoke$arity$1(order);
var payment = new cljs.core.Keyword(null,"PaymentMethod","PaymentMethod",-1723361015).cljs$core$IFn$_invoke$arity$1(order);
var current_status = new cljs.core.Keyword(null,"Status","Status",-1212030049).cljs$core$IFn$_invoke$arity$1(order);
var created_at = new cljs.core.Keyword(null,"CreatedAt","CreatedAt",1659720385).cljs$core$IFn$_invoke$arity$1(order);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.admin-sales-tr","tr.admin-sales-tr",-1000975212),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td-bold","td.admin-sales-td-bold",1898895535),order_number], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td","td.admin-sales-td",1288721558),user_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td","td.admin-sales-td",1288721558),(((cljs.core.count(created_at) >= (10)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(created_at,(0),(10)):created_at)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td-price","td.admin-sales-td-price",1985122667),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td","td.admin-sales-td",1288721558),payment], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td","td.admin-sales-td",1288721558),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.admin-sales-status-badge","span.admin-sales-status-badge",-1286678390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"status-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(current_status)))], null),current_status], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td-center","td.admin-sales-td-center",-1686143461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.admin-sales-status-select","select.admin-sales-status-select",-677665394),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),current_status,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__17292,order_number,user_id,total,payment,current_status,created_at,order,c__5647__auto__,size__5648__auto__,b__17293,s__17291__$2,temp__5823__auto__,state,map__17289,map__17289__$1,orders,loading_QMARK_,error){
return (function (p1__17288_SHARP_){
return gilastore_ui.views.admin_sales.update_order_status(order_number,p1__17288_SHARP_.target.value);
});})(i__17292,order_number,user_id,total,payment,current_status,created_at,order,c__5647__auto__,size__5648__auto__,b__17293,s__17291__$2,temp__5823__auto__,state,map__17289,map__17289__$1,orders,loading_QMARK_,error))
], null),(function (){var iter__5649__auto__ = ((function (i__17292,order_number,user_id,total,payment,current_status,created_at,order,c__5647__auto__,size__5648__auto__,b__17293,s__17291__$2,temp__5823__auto__,state,map__17289,map__17289__$1,orders,loading_QMARK_,error){
return (function gilastore_ui$views$admin_sales$admin_sales_view_$_iter__17290_$_iter__17294(s__17295){
return (new cljs.core.LazySeq(null,((function (i__17292,order_number,user_id,total,payment,current_status,created_at,order,c__5647__auto__,size__5648__auto__,b__17293,s__17291__$2,temp__5823__auto__,state,map__17289,map__17289__$1,orders,loading_QMARK_,error){
return (function (){
var s__17295__$1 = s__17295;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__17295__$1);
if(temp__5823__auto____$1){
var s__17295__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17295__$2)){
var c__5647__auto____$1 = cljs.core.chunk_first(s__17295__$2);
var size__5648__auto____$1 = cljs.core.count(c__5647__auto____$1);
var b__17297 = cljs.core.chunk_buffer(size__5648__auto____$1);
if((function (){var i__17296 = (0);
while(true){
if((i__17296 < size__5648__auto____$1)){
var status = cljs.core._nth(c__5647__auto____$1,i__17296);
cljs.core.chunk_append(b__17297,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),status], null),status], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),status], null)));

var G__17302 = (i__17296 + (1));
i__17296 = G__17302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17297),gilastore_ui$views$admin_sales$admin_sales_view_$_iter__17290_$_iter__17294(cljs.core.chunk_rest(s__17295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17297),null);
}
} else {
var status = cljs.core.first(s__17295__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),status], null),status], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),status], null)),gilastore_ui$views$admin_sales$admin_sales_view_$_iter__17290_$_iter__17294(cljs.core.rest(s__17295__$2)));
}
} else {
return null;
}
break;
}
});})(i__17292,order_number,user_id,total,payment,current_status,created_at,order,c__5647__auto__,size__5648__auto__,b__17293,s__17291__$2,temp__5823__auto__,state,map__17289,map__17289__$1,orders,loading_QMARK_,error))
,null,null));
});})(i__17292,order_number,user_id,total,payment,current_status,created_at,order,c__5647__auto__,size__5648__auto__,b__17293,s__17291__$2,temp__5823__auto__,state,map__17289,map__17289__$1,orders,loading_QMARK_,error))
;
return iter__5649__auto__(gilastore_ui.views.admin_sales.valid_statuses);
})()], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),order_number], null));
})());

var G__17303 = (i__17292 + (1));
i__17292 = G__17303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17293),gilastore_ui$views$admin_sales$admin_sales_view_$_iter__17290(cljs.core.chunk_rest(s__17291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17293),null);
}
} else {
var order = cljs.core.first(s__17291__$2);
return cljs.core.cons((function (){var order_number = new cljs.core.Keyword(null,"OrderNumber","OrderNumber",471056942).cljs$core$IFn$_invoke$arity$1(order);
var user_id = new cljs.core.Keyword(null,"UserId","UserId",1260469425).cljs$core$IFn$_invoke$arity$1(order);
var total = new cljs.core.Keyword(null,"TotalAmount","TotalAmount",-1192606810).cljs$core$IFn$_invoke$arity$1(order);
var payment = new cljs.core.Keyword(null,"PaymentMethod","PaymentMethod",-1723361015).cljs$core$IFn$_invoke$arity$1(order);
var current_status = new cljs.core.Keyword(null,"Status","Status",-1212030049).cljs$core$IFn$_invoke$arity$1(order);
var created_at = new cljs.core.Keyword(null,"CreatedAt","CreatedAt",1659720385).cljs$core$IFn$_invoke$arity$1(order);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.admin-sales-tr","tr.admin-sales-tr",-1000975212),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td-bold","td.admin-sales-td-bold",1898895535),order_number], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td","td.admin-sales-td",1288721558),user_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td","td.admin-sales-td",1288721558),(((cljs.core.count(created_at) >= (10)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(created_at,(0),(10)):created_at)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td-price","td.admin-sales-td-price",1985122667),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td","td.admin-sales-td",1288721558),payment], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td","td.admin-sales-td",1288721558),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.admin-sales-status-badge","span.admin-sales-status-badge",-1286678390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"status-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(current_status)))], null),current_status], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-sales-td-center","td.admin-sales-td-center",-1686143461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.admin-sales-status-select","select.admin-sales-status-select",-677665394),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),current_status,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (order_number,user_id,total,payment,current_status,created_at,order,s__17291__$2,temp__5823__auto__,state,map__17289,map__17289__$1,orders,loading_QMARK_,error){
return (function (p1__17288_SHARP_){
return gilastore_ui.views.admin_sales.update_order_status(order_number,p1__17288_SHARP_.target.value);
});})(order_number,user_id,total,payment,current_status,created_at,order,s__17291__$2,temp__5823__auto__,state,map__17289,map__17289__$1,orders,loading_QMARK_,error))
], null),(function (){var iter__5649__auto__ = ((function (order_number,user_id,total,payment,current_status,created_at,order,s__17291__$2,temp__5823__auto__,state,map__17289,map__17289__$1,orders,loading_QMARK_,error){
return (function gilastore_ui$views$admin_sales$admin_sales_view_$_iter__17290_$_iter__17298(s__17299){
return (new cljs.core.LazySeq(null,(function (){
var s__17299__$1 = s__17299;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__17299__$1);
if(temp__5823__auto____$1){
var s__17299__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17299__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17299__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17301 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17300 = (0);
while(true){
if((i__17300 < size__5648__auto__)){
var status = cljs.core._nth(c__5647__auto__,i__17300);
cljs.core.chunk_append(b__17301,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),status], null),status], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),status], null)));

var G__17304 = (i__17300 + (1));
i__17300 = G__17304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17301),gilastore_ui$views$admin_sales$admin_sales_view_$_iter__17290_$_iter__17298(cljs.core.chunk_rest(s__17299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17301),null);
}
} else {
var status = cljs.core.first(s__17299__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),status], null),status], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),status], null)),gilastore_ui$views$admin_sales$admin_sales_view_$_iter__17290_$_iter__17298(cljs.core.rest(s__17299__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(order_number,user_id,total,payment,current_status,created_at,order,s__17291__$2,temp__5823__auto__,state,map__17289,map__17289__$1,orders,loading_QMARK_,error))
;
return iter__5649__auto__(gilastore_ui.views.admin_sales.valid_statuses);
})()], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),order_number], null));
})(),gilastore_ui$views$admin_sales$admin_sales_view_$_iter__17290(cljs.core.rest(s__17291__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(orders);
})())], null)], null)], null))], null);
});

//# sourceMappingURL=gilastore_ui.views.admin_sales.js.map
