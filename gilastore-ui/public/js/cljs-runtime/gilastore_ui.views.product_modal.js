goog.provide('gilastore_ui.views.product_modal');
gilastore_ui.views.product_modal.initial_form_data = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Name","Name",-131211369),"",new cljs.core.Keyword(null,"SKU","SKU",-640864428),"",new cljs.core.Keyword(null,"Description","Description",-679315496),"",new cljs.core.Keyword(null,"Weight_KG","Weight_KG",1072313048),"",new cljs.core.Keyword(null,"Price","Price",287530481),"",new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431),(1),new cljs.core.Keyword(null,"Created_by","Created_by",1211827395),(1),new cljs.core.Keyword(null,"initial_stock","initial_stock",-232073505),""], null);
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.product_modal !== 'undefined') && (typeof gilastore_ui.views.product_modal.global_categories !== 'undefined')){
} else {
gilastore_ui.views.product_modal.global_categories = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.product_modal !== 'undefined') && (typeof gilastore_ui.views.product_modal.categories_loading_QMARK_ !== 'undefined')){
} else {
gilastore_ui.views.product_modal.categories_loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
gilastore_ui.views.product_modal.fetch_categories_once_BANG_ = (function gilastore_ui$views$product_modal$fetch_categories_once_BANG_(){
if(((cljs.core.empty_QMARK_(cljs.core.deref(gilastore_ui.views.product_modal.global_categories))) && (cljs.core.not(cljs.core.deref(gilastore_ui.views.product_modal.categories_loading_QMARK_))))){
cljs.core.reset_BANG_(gilastore_ui.views.product_modal.categories_loading_QMARK_,true);

return gilastore_ui.api.api_fetch("/products/categories").then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error al cargar las categor\u00EDas");
}
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var cats = ((cljs.core.vector_QMARK_(clj_data))?clj_data:(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
cljs.core.reset_BANG_(gilastore_ui.views.product_modal.global_categories,cats);

return cljs.core.reset_BANG_(gilastore_ui.views.product_modal.categories_loading_QMARK_,false);
})).catch((function (_){
return cljs.core.reset_BANG_(gilastore_ui.views.product_modal.categories_loading_QMARK_,false);
}));
} else {
return null;
}
});
gilastore_ui.views.product_modal.product_form = (function gilastore_ui$views$product_modal$product_form(product_to_edit,on_close_fn,on_success_fn){
var is_editing_QMARK_ = (!((product_to_edit == null)));
var initial_data = ((is_editing_QMARK_)?new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(product_to_edit),new cljs.core.Keyword(null,"SKU","SKU",-640864428),new cljs.core.Keyword(null,"SKU","SKU",-640864428).cljs$core$IFn$_invoke$arity$1(product_to_edit),new cljs.core.Keyword(null,"Description","Description",-679315496),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Description","Description",-679315496).cljs$core$IFn$_invoke$arity$1(product_to_edit);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"Weight_KG","Weight_KG",1072313048),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Weight_KG","Weight_KG",1072313048).cljs$core$IFn$_invoke$arity$1(product_to_edit))),new cljs.core.Keyword(null,"Price","Price",287530481),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Price","Price",287530481).cljs$core$IFn$_invoke$arity$1(product_to_edit))),new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431),new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431).cljs$core$IFn$_invoke$arity$1(product_to_edit),new cljs.core.Keyword(null,"Created_by","Created_by",1211827395),new cljs.core.Keyword(null,"Created_by","Created_by",1211827395).cljs$core$IFn$_invoke$arity$2(product_to_edit,(1)),new cljs.core.Keyword(null,"initial_stock","initial_stock",-232073505),""], null):gilastore_ui.views.product_modal.initial_form_data);
var form_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_data);
var saving_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var error_msg = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
gilastore_ui.views.product_modal.fetch_categories_once_BANG_();

var temp__5823__auto___17259 = cljs.core.first(cljs.core.deref(gilastore_ui.views.product_modal.global_categories));
if(cljs.core.truth_(temp__5823__auto___17259)){
var first_cat_17262 = temp__5823__auto___17259;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_state,cljs.core.assoc,new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431),new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431).cljs$core$IFn$_invoke$arity$1(first_cat_17262));
} else {
}
} else {
}

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(error_msg))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-error","div.pmodal-error",308476163),cljs.core.deref(error_msg)], null):null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

cljs.core.reset_BANG_(saving_QMARK_,true);

cljs.core.reset_BANG_(error_msg,null);

var raw_payload = ((is_editing_QMARK_)?new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"SKU","SKU",-640864428),new cljs.core.Keyword(null,"SKU","SKU",-640864428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"Description","Description",-679315496),new cljs.core.Keyword(null,"Description","Description",-679315496).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"Weight_KG","Weight_KG",1072313048),parseFloat(new cljs.core.Keyword(null,"Weight_KG","Weight_KG",1072313048).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),new cljs.core.Keyword(null,"Price","Price",287530481),parseFloat(new cljs.core.Keyword(null,"Price","Price",287530481).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431),parseInt(new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),new cljs.core.Keyword(null,"Updated_by","Updated_by",1593023751),(1)], null):new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"sku","sku",-1508141232),new cljs.core.Keyword(null,"SKU","SKU",-640864428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"Description","Description",-679315496).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"weight_kg","weight_kg",1367541201),parseFloat(new cljs.core.Keyword(null,"Weight_KG","Weight_KG",1072313048).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),new cljs.core.Keyword(null,"price","price",22129180),parseFloat(new cljs.core.Keyword(null,"Price","Price",287530481).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431),parseInt(new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),new cljs.core.Keyword(null,"Created_by","Created_by",1211827395),(1),new cljs.core.Keyword(null,"initial_stock","initial_stock",-232073505),parseInt(new cljs.core.Keyword(null,"initial_stock","initial_stock",-232073505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)))], null));
var method = ((is_editing_QMARK_)?"PATCH":"POST");
var url = ((is_editing_QMARK_)?(""+"/products/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ProductId","ProductId",1375276495).cljs$core$IFn$_invoke$arity$1(product_to_edit))):"/products");
var payload = JSON.stringify(cljs.core.clj__GT_js(raw_payload));
return gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"body","body",-2049205669),payload], null)], 0)).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
return res.json().then((function (err_json){
var err_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(err_json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var msg = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(err_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Error de validaci\u00F3n";
}
})();
var errors = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17224){
var vec__17225 = p__17224;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17225,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17225,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(v)));
}),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(err_data)));
throw Error(((cljs.core.seq(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(err_data)))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)+")"):msg));
}));
}
})).then((function (_){
cljs.core.reset_BANG_(saving_QMARK_,false);

return (on_success_fn.cljs$core$IFn$_invoke$arity$0 ? on_success_fn.cljs$core$IFn$_invoke$arity$0() : on_success_fn.call(null));
})).catch((function (err){
cljs.core.reset_BANG_(saving_QMARK_,false);

return cljs.core.reset_BANG_(error_msg,err.message);
}));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-field","div.pmodal-field",1213122682),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pmodal-label","label.pmodal-label",373167699),"Product Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pmodal-input","input.pmodal-input",-1251872465),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Ej. Cafetera Express Pro",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17204_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_state,cljs.core.assoc,new cljs.core.Keyword(null,"Name","Name",-131211369),p1__17204_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-row","div.pmodal-row",-1577820574),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-col","div.pmodal-col",419702116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pmodal-label","label.pmodal-label",373167699),"SKU:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pmodal-input","input.pmodal-input",-1251872465),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"CAF-EXP-001",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"SKU","SKU",-640864428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17205_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_state,cljs.core.assoc,new cljs.core.Keyword(null,"SKU","SKU",-640864428),p1__17205_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-col","div.pmodal-col",419702116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pmodal-label","label.pmodal-label",373167699),"Category:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.pmodal-select","select.pmodal-select",174271798),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17206_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_state,cljs.core.assoc,new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431),parseInt(p1__17206_SHARP_.target.value));
})], null),((cljs.core.empty_QMARK_(cljs.core.deref(gilastore_ui.views.product_modal.global_categories)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Cargando categor\u00EDas..."], null):(function (){var iter__5649__auto__ = (function gilastore_ui$views$product_modal$product_form_$_iter__17231(s__17232){
return (new cljs.core.LazySeq(null,(function (){
var s__17232__$1 = s__17232;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17232__$1);
if(temp__5823__auto__){
var s__17232__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17232__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17232__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17234 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17233 = (0);
while(true){
if((i__17233 < size__5648__auto__)){
var cat = cljs.core._nth(c__5647__auto__,i__17233);
cljs.core.chunk_append(b__17234,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431).cljs$core$IFn$_invoke$arity$1(cat)], null),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cat)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431).cljs$core$IFn$_invoke$arity$1(cat)], null)));

var G__17265 = (i__17233 + (1));
i__17233 = G__17265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17234),gilastore_ui$views$product_modal$product_form_$_iter__17231(cljs.core.chunk_rest(s__17232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17234),null);
}
} else {
var cat = cljs.core.first(s__17232__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431).cljs$core$IFn$_invoke$arity$1(cat)], null),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cat)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"CategoryId","CategoryId",827310431).cljs$core$IFn$_invoke$arity$1(cat)], null)),gilastore_ui$views$product_modal$product_form_$_iter__17231(cljs.core.rest(s__17232__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.deref(gilastore_ui.views.product_modal.global_categories));
})())], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-field","div.pmodal-field",1213122682),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pmodal-label","label.pmodal-label",373167699),"Description:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.pmodal-textarea","textarea.pmodal-textarea",915150138),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(2),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Descripci\u00F3n breve...",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"Description","Description",-679315496).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17207_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_state,cljs.core.assoc,new cljs.core.Keyword(null,"Description","Description",-679315496),p1__17207_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-row","div.pmodal-row",-1577820574),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-col","div.pmodal-col",419702116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pmodal-label","label.pmodal-label",373167699),"Price ($):"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pmodal-input","input.pmodal-input",-1251872465),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.01",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"2499.99",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"Price","Price",287530481).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17208_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_state,cljs.core.assoc,new cljs.core.Keyword(null,"Price","Price",287530481),p1__17208_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-col","div.pmodal-col",419702116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pmodal-label","label.pmodal-label",373167699),"Weight (KG):"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pmodal-input","input.pmodal-input",-1251872465),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.001",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"4.500",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"Weight_KG","Weight_KG",1072313048).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17209_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_state,cljs.core.assoc,new cljs.core.Keyword(null,"Weight_KG","Weight_KG",1072313048),p1__17209_SHARP_.target.value);
})], null)], null)], null)], null),((is_editing_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-field","div.pmodal-field",1213122682),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pmodal-label","label.pmodal-label",373167699),"Initial Stock:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pmodal-input","input.pmodal-input",-1251872465),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"25",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"initial_stock","initial_stock",-232073505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17210_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_state,cljs.core.assoc,new cljs.core.Keyword(null,"initial_stock","initial_stock",-232073505),p1__17210_SHARP_.target.value);
})], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-actions","div.pmodal-actions",-1945387823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pmodal-btn-cancel","button.pmodal-btn-cancel",1159849641),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close_fn,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(saving_QMARK_)], null),"\u274C Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pmodal-btn-submit","button.pmodal-btn-submit",-1088086904),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(saving_QMARK_)], null),(cljs.core.truth_(cljs.core.deref(saving_QMARK_))?"\u23F3 Saving...":((is_editing_QMARK_)?"\uD83D\uDCBE Update Product":"\uD83D\uDCBE Save Product"))], null)], null)], null)], null);
});
});
gilastore_ui.views.product_modal.product_modal = (function gilastore_ui$views$product_modal$product_modal(open_QMARK_,product_to_edit,on_close_fn,on_success_fn){
if(cljs.core.not(open_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-overlay","div.pmodal-overlay",-1764622934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-card","div.pmodal-card",-1934643239),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pmodal-header","div.pmodal-header",260655860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.pmodal-title","h3.pmodal-title",615850191),(cljs.core.truth_(product_to_edit)?"\u270F\uFE0F Edit Product":"\u2795 Add New Product")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pmodal-close","button.pmodal-close",1995969951),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close_fn], null),"\u00D7"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gilastore_ui.views.product_modal.product_form,product_to_edit,on_close_fn,on_success_fn], null)], null)], null);
}
});

//# sourceMappingURL=gilastore_ui.views.product_modal.js.map
