goog.provide('gilastore_ui.views.cart');
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.cart !== 'undefined') && (typeof gilastore_ui.views.cart.cart_state !== 'undefined')){
} else {
gilastore_ui.views.cart.cart_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"submitting?","submitting?",1281507942),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"payment-method","payment-method",-1959350900),new cljs.core.Keyword(null,"shipping-cost","shipping-cost",1322839118),new cljs.core.Keyword(null,"shipping-address","shipping-address",-644870352),new cljs.core.Keyword(null,"total-weight","total-weight",-1997465421),new cljs.core.Keyword(null,"total-cart","total-cart",-1744813324),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"tax-amount","tax-amount",-996231432),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"show-checkout?","show-checkout?",-1490207714)],[false,false,"CREDIT_CARD",(0),"",(0),(0),null,(0),cljs.core.PersistentVector.EMPTY,false]));
}
gilastore_ui.views.cart.generate_idempotency_key = (function gilastore_ui$views$cart$generate_idempotency_key(){
if(cljs.core.truth_((function (){var and__5160__auto__ = window.crypto;
if(cljs.core.truth_(and__5160__auto__)){
return window.crypto.randomUUID;
} else {
return and__5160__auto__;
}
})())){
return window.crypto.randomUUID();
} else {
return Math.random().toString((36)).substring((2));
}
});
gilastore_ui.views.cart.fetch_cart_items = (function gilastore_ui$views$cart$fetch_cart_items(){
var userid = (function (){var or__5162__auto__ = localStorage.getItem("userid");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})();
var url = (""+"/salescart/view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(userid));
console.log("Cart URL",url);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.cart.cart_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

return gilastore_ui.api.api_fetch(url).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error loading cart items");
}
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var items = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var total_cart = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"total_cart","total_cart",36367707).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})();
var total_weight = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"total_weight","total_weight",-374796697).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})();
var tax_amount = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"tax_amount","tax_amount",-858056378).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})();
var shipping_cost = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"shippingCost","shippingCost",-644815439).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"shipping_cost","shipping_cost",1530875719).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return (0);
}
}
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.cart.cart_state,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"total-cart","total-cart",-1744813324),total_cart,new cljs.core.Keyword(null,"total-weight","total-weight",-1997465421),total_weight,new cljs.core.Keyword(null,"tax-amount","tax-amount",-996231432),tax_amount,new cljs.core.Keyword(null,"shipping-cost","shipping-cost",1322839118),shipping_cost,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
})).catch((function (err){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.cart.cart_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),err.message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
});
gilastore_ui.views.cart.remove_cart_item = (function gilastore_ui$views$cart$remove_cart_item(product_id){
var userid = (function (){var or__5162__auto__ = localStorage.getItem("userid");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})();
var url = "/salescart/removeitem";
var payload = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"UserId","UserId",1260469425),userid,new cljs.core.Keyword(null,"ProductId","ProductId",1375276495),product_id], null)));
console.log("Cart URL",url," UserId: ",userid,", ProductId: ",product_id);

return gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"DELETE",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),payload], null)], 0)).then((function (res){
if(cljs.core.truth_(res.ok)){
return gilastore_ui.views.cart.fetch_cart_items();
} else {
throw Error("Error removing item from cart");
}
})).catch((function (err){
return alert(err.message);
}));
});
gilastore_ui.views.cart.submit_checkout = (function gilastore_ui$views$cart$submit_checkout(){
var state = cljs.core.deref(gilastore_ui.views.cart.cart_state);
var userid = parseInt((function (){var or__5162__auto__ = localStorage.getItem("userid");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "2";
}
})(),(10));
var shipping_address = new cljs.core.Keyword(null,"shipping-address","shipping-address",-644870352).cljs$core$IFn$_invoke$arity$1(state);
var payment_method = new cljs.core.Keyword(null,"payment-method","payment-method",-1959350900).cljs$core$IFn$_invoke$arity$1(state);
var idempotency_key = gilastore_ui.views.cart.generate_idempotency_key();
if(cljs.core.empty_QMARK_(shipping_address)){
return alert("Please enter a shipping address.");
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.cart.cart_state,cljs.core.assoc,new cljs.core.Keyword(null,"submitting?","submitting?",1281507942),true);

var payload = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"UserId","UserId",1260469425),userid,new cljs.core.Keyword(null,"IdempotencyKey","IdempotencyKey",-501993349),idempotency_key,new cljs.core.Keyword(null,"ShippingAddress","ShippingAddress",620683014),shipping_address,new cljs.core.Keyword(null,"PaymentMethod","PaymentMethod",-1723361015),payment_method], null)));
return gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic("/sales/order/checkout",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),payload], null)], 0)).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error processing checkout");
}
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.cart.cart_state,cljs.core.assoc,new cljs.core.Keyword(null,"submitting?","submitting?",1281507942),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-checkout?","show-checkout?",-1490207714),false], 0));

alert((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Order placed successfully! \uD83C\uDF89";
}
})());

return gilastore_ui.views.cart.fetch_cart_items();
})).catch((function (err){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.cart.cart_state,cljs.core.assoc,new cljs.core.Keyword(null,"submitting?","submitting?",1281507942),false);

return alert((""+"Checkout error: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(err.message)));
}));
}
});
gilastore_ui.views.cart.cart_view = (function gilastore_ui$views$cart$cart_view(){
var with_let17239 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let17239","with-let17239",632494046));
var temp__5827__auto___17266 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5827__auto___17266 == null)){
} else {
var c__11910__auto___17267 = temp__5827__auto___17266;
if((with_let17239.generation === c__11910__auto___17267.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error((""+"Warning: The same with-let is being used more "+"than once in the same reactive context."));
} else {
}
} else {
}

(with_let17239.generation = c__11910__auto___17267.ratomGeneration);
}

var init17240 = (with_let17239.length === (0));
var _ = ((((init17240) || (cljs.core.not(with_let17239.hasOwnProperty((0))))))?(with_let17239[(0)] = gilastore_ui.views.cart.fetch_cart_items()):(with_let17239[(0)]));
var res17241 = (function (){var state = cljs.core.deref(gilastore_ui.views.cart.cart_state);
var map__17248 = state;
var map__17248__$1 = cljs.core.__destructure_map(map__17248);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var show_checkout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"show-checkout?","show-checkout?",-1490207714));
var submitting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"submitting?","submitting?",1281507942));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var payment_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"payment-method","payment-method",-1959350900));
var shipping_cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"shipping-cost","shipping-cost",1322839118));
var shipping_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"shipping-address","shipping-address",-644870352));
var total_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"total-weight","total-weight",-1997465421));
var total_cart = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"total-cart","total-cart",-1744813324));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var tax_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"tax-amount","tax-amount",-996231432));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cart-container","div.cart-container",213107757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.cart-title","h2.cart-title",1823368435),"\uD83D\uDED2 My Shopping Cart"], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.cart-loading","p.cart-loading",-783394476),"Loading cart..."], null):null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cart-error","div.cart-error",-1860180914),error], null):null),(cljs.core.truth_(loading_QMARK_)?null:((cljs.core.empty_QMARK_(items))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cart-empty","div.cart-empty",-1724713392),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.cart-empty-text","p.cart-empty-text",-462392871),"Your cart is currently empty."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.cart-btn-catalog","a.cart-btn-catalog",-1278880032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/catalog"], null),"Browse Catalog \uD83D\uDECD\uFE0F"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cart-table-wrapper","div.cart-table-wrapper",1407580612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.cart-table","table.cart-table",1303814305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.cart-tr-header","tr.cart-tr-header",-171944414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cart-th","th.cart-th",210079746),"Product"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cart-th","th.cart-th",210079746),"Quantity"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cart-th","th.cart-th",210079746),"Unit Price"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cart-th","th.cart-th",210079746),"Subtotal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cart-th-center","th.cart-th-center",-785631953),"Actions"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5649__auto__ = (function gilastore_ui$views$cart$cart_view_$_iter__17250(s__17251){
return (new cljs.core.LazySeq(null,(function (){
var s__17251__$1 = s__17251;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17251__$1);
if(temp__5823__auto__){
var s__17251__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17251__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17251__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17253 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17252 = (0);
while(true){
if((i__17252 < size__5648__auto__)){
var item = cljs.core._nth(c__5647__auto__,i__17252);
cljs.core.chunk_append(b__17253,(function (){var id = new cljs.core.Keyword(null,"CartItemId","CartItemId",1437062622).cljs$core$IFn$_invoke$arity$1(item);
var product = new cljs.core.Keyword(null,"product","product",1363474257).cljs$core$IFn$_invoke$arity$1(item);
var productId = new cljs.core.Keyword(null,"ProductId","ProductId",1375276495).cljs$core$IFn$_invoke$arity$1(product);
var product_name = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "Unknown Product";
}
}
})();
var qty = new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397).cljs$core$IFn$_invoke$arity$1(item);
var unit_price = new cljs.core.Keyword(null,"unitPrice","unitPrice",309520797).cljs$core$IFn$_invoke$arity$1(item);
var subtotal = new cljs.core.Keyword(null,"subtotal","subtotal",-190530292).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.cart-tr","tr.cart-tr",-1587029277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cart-td-product","td.cart-td-product",-2010062098),product_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cart-td","td.cart-td",-2147413949),qty], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cart-td-price","td.cart-td-price",1479550544),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit_price))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cart-td-subtotal","td.cart-td-subtotal",-1938065600),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(subtotal))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cart-td-center","td.cart-td-center",1453710072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.cart-btn-remove","button.cart-btn-remove",239980112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17252,id,product,productId,product_name,qty,unit_price,subtotal,item,c__5647__auto__,size__5648__auto__,b__17253,s__17251__$2,temp__5823__auto__,state,map__17248,map__17248__$1,items,show_checkout_QMARK_,submitting_QMARK_,loading_QMARK_,payment_method,shipping_cost,shipping_address,total_weight,total_cart,error,tax_amount,init17240,_,with_let17239){
return (function (){
return gilastore_ui.views.cart.remove_cart_item(productId);
});})(i__17252,id,product,productId,product_name,qty,unit_price,subtotal,item,c__5647__auto__,size__5648__auto__,b__17253,s__17251__$2,temp__5823__auto__,state,map__17248,map__17248__$1,items,show_checkout_QMARK_,submitting_QMARK_,loading_QMARK_,payment_method,shipping_cost,shipping_address,total_weight,total_cart,error,tax_amount,init17240,_,with_let17239))
], null),"Remove \uD83D\uDDD1\uFE0F"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__17269 = (i__17252 + (1));
i__17252 = G__17269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17253),gilastore_ui$views$cart$cart_view_$_iter__17250(cljs.core.chunk_rest(s__17251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17253),null);
}
} else {
var item = cljs.core.first(s__17251__$2);
return cljs.core.cons((function (){var id = new cljs.core.Keyword(null,"CartItemId","CartItemId",1437062622).cljs$core$IFn$_invoke$arity$1(item);
var product = new cljs.core.Keyword(null,"product","product",1363474257).cljs$core$IFn$_invoke$arity$1(item);
var productId = new cljs.core.Keyword(null,"ProductId","ProductId",1375276495).cljs$core$IFn$_invoke$arity$1(product);
var product_name = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(product);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "Unknown Product";
}
}
})();
var qty = new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397).cljs$core$IFn$_invoke$arity$1(item);
var unit_price = new cljs.core.Keyword(null,"unitPrice","unitPrice",309520797).cljs$core$IFn$_invoke$arity$1(item);
var subtotal = new cljs.core.Keyword(null,"subtotal","subtotal",-190530292).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.cart-tr","tr.cart-tr",-1587029277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cart-td-product","td.cart-td-product",-2010062098),product_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cart-td","td.cart-td",-2147413949),qty], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cart-td-price","td.cart-td-price",1479550544),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit_price))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cart-td-subtotal","td.cart-td-subtotal",-1938065600),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(subtotal))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cart-td-center","td.cart-td-center",1453710072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.cart-btn-remove","button.cart-btn-remove",239980112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,product,productId,product_name,qty,unit_price,subtotal,item,s__17251__$2,temp__5823__auto__,state,map__17248,map__17248__$1,items,show_checkout_QMARK_,submitting_QMARK_,loading_QMARK_,payment_method,shipping_cost,shipping_address,total_weight,total_cart,error,tax_amount,init17240,_,with_let17239){
return (function (){
return gilastore_ui.views.cart.remove_cart_item(productId);
});})(id,product,productId,product_name,qty,unit_price,subtotal,item,s__17251__$2,temp__5823__auto__,state,map__17248,map__17248__$1,items,show_checkout_QMARK_,submitting_QMARK_,loading_QMARK_,payment_method,shipping_cost,shipping_address,total_weight,total_cart,error,tax_amount,init17240,_,with_let17239))
], null),"Remove \uD83D\uDDD1\uFE0F"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),gilastore_ui$views$cart$cart_view_$_iter__17250(cljs.core.rest(s__17251__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(items);
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cart-summary-container","div.cart-summary-container",1477246616),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cart-summary-card","div.cart-summary-card",-1446469277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.cart-summary-title","h3.cart-summary-title",1859941578),"Cart Summary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cart-summary-row","div.cart-summary-row",2088087110),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Total Weight:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cart-summary-value","span.cart-summary-value",1592802956),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_weight)+" kg")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cart-summary-row","div.cart-summary-row",2088087110),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Tax Amount:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cart-summary-value","span.cart-summary-value",1592802956),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseFloat(tax_amount).toFixed((2))))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cart-summary-row","div.cart-summary-row",2088087110),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Shipping Cost:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cart-summary-value","span.cart-summary-value",1592802956),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseFloat(shipping_cost).toFixed((2))))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cart-summary-total","div.cart-summary-total",-1064308710),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cart-summary-total-label","span.cart-summary-total-label",1358859444),"Total Cart:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cart-summary-total-value","span.cart-summary-total-value",681588911),(""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_cart))], null)], null),(cljs.core.truth_(show_checkout_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.cart-btn-checkout","button.cart-btn-checkout",-786019720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.cart.cart_state,cljs.core.assoc,new cljs.core.Keyword(null,"show-checkout?","show-checkout?",-1490207714),true);
})], null),"Proceed to Checkout \uD83D\uDE80"], null)),(cljs.core.truth_(show_checkout_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checkout-panel","div.checkout-panel",284488918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.checkout-panel-title","h4.checkout-panel-title",846085816),"Shipping & Payment"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checkout-field","div.checkout-field",-1704439161),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkout-label","label.checkout-label",-2144272154),"Shipping Address:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.checkout-textarea","textarea.checkout-textarea",861151737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),shipping_address,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter street, colony, city...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.cart.cart_state,cljs.core.assoc,new cljs.core.Keyword(null,"shipping-address","shipping-address",-644870352),e.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checkout-field","div.checkout-field",-1704439161),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkout-label","label.checkout-label",-2144272154),"Payment Method:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.checkout-select","select.checkout-select",-88202160),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),payment_method,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.cart.cart_state,cljs.core.assoc,new cljs.core.Keyword(null,"payment-method","payment-method",-1959350900),e.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"CREDIT_CARD"], null),"Credit Card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"PAYPAL"], null),"PayPal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"STRIPE"], null),"Stripe"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.checkout-btn-confirm","button.checkout-btn-confirm",-1166250825),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),submitting_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),gilastore_ui.views.cart.submit_checkout], null),(cljs.core.truth_(submitting_QMARK_)?"Processing Order...":"Confirm Purchase \u2705")], null)], null):null)], null)], null)], null)))], null);
})();
return res17241;
});

//# sourceMappingURL=gilastore_ui.views.cart.js.map
