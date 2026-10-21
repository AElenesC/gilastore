goog.provide('gilastore_ui.views.product_import_modal');
gilastore_ui.views.product_import_modal.product_import_modal = (function gilastore_ui$views$product_import_modal$product_import_modal(open_QMARK_,on_close_fn,on_success_fn){
var selected_file = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var uploading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var error_msg = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var invalid_rows = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
return (function (open_QMARK___$1,on_close_fn__$1,on_success_fn__$1){
if(cljs.core.not(open_QMARK___$1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.import-modal-overlay","div.import-modal-overlay",-2067022831),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.import-modal-card","div.import-modal-card",635084824),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.import-modal-header","div.import-modal-header",1066832076),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.import-modal-title","h3.import-modal-title",538089976),"\uD83D\uDCC1 Import Products (CSV)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.import-modal-close-btn","button.import-modal-close-btn",-360973069),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(selected_file,null);

cljs.core.reset_BANG_(error_msg,null);

cljs.core.reset_BANG_(invalid_rows,cljs.core.PersistentVector.EMPTY);

return (on_close_fn__$1.cljs$core$IFn$_invoke$arity$0 ? on_close_fn__$1.cljs$core$IFn$_invoke$arity$0() : on_close_fn__$1.call(null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(uploading_QMARK_)], null),"\u00D7"], null)], null),(cljs.core.truth_(cljs.core.deref(error_msg))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.import-modal-error","div.import-modal-error",681328240),cljs.core.deref(error_msg)], null):null),((cljs.core.seq(cljs.core.deref(invalid_rows)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.import-modal-warning","div.import-modal-warning",1894752492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.import-modal-warning-title","strong.import-modal-warning-title",-1542411334),"\u26A0\uFE0F Errors were found in the following lines:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.import-modal-error-list","ul.import-modal-error-list",-1703506947),(function (){var iter__5649__auto__ = (function gilastore_ui$views$product_import_modal$product_import_modal_$_iter__17177(s__17178){
return (new cljs.core.LazySeq(null,(function (){
var s__17178__$1 = s__17178;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17178__$1);
if(temp__5823__auto__){
var s__17178__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17178__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17178__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17180 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17179 = (0);
while(true){
if((i__17179 < size__5648__auto__)){
var vec__17181 = cljs.core._nth(c__5647__auto__,i__17179);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17181,(0),null);
var row_err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17181,(1),null);
cljs.core.chunk_append(b__17180,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.import-modal-error-item","li.import-modal-error-item",2041391144),row_err], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__17223 = (i__17179 + (1));
i__17179 = G__17223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17180),gilastore_ui$views$product_import_modal$product_import_modal_$_iter__17177(cljs.core.chunk_rest(s__17178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17180),null);
}
} else {
var vec__17190 = cljs.core.first(s__17178__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17190,(0),null);
var row_err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17190,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.import-modal-error-item","li.import-modal-error-item",2041391144),row_err], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),gilastore_ui$views$product_import_modal$product_import_modal_$_iter__17177(cljs.core.rest(s__17178__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.deref(invalid_rows)));
})()], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

if(cljs.core.not(cljs.core.deref(selected_file))){
return cljs.core.reset_BANG_(error_msg,"Please select a CSV file.");
} else {
cljs.core.reset_BANG_(uploading_QMARK_,true);

cljs.core.reset_BANG_(error_msg,null);

cljs.core.reset_BANG_(invalid_rows,cljs.core.PersistentVector.EMPTY);

var form_data = (new FormData());
var current_user_id = (function (){var or__5162__auto__ = localStorage.getItem("user_id");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "1";
}
})();
form_data.append("file",cljs.core.deref(selected_file));

form_data.append("abortIfErrors","false");

form_data.append("user_id",current_user_id);

return gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic("/products/import",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"body","body",-2049205669),form_data], null)], 0)).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
return res.json().then((function (err_data){
var clj_err = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(err_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var temp__5823__auto___17229 = new cljs.core.Keyword(null,"invalidRows","invalidRows",1704366967).cljs$core$IFn$_invoke$arity$1(clj_err);
if(cljs.core.truth_(temp__5823__auto___17229)){
var rows_17230 = temp__5823__auto___17229;
cljs.core.reset_BANG_(invalid_rows,rows_17230);
} else {
}

throw Error((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(clj_err);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Error importing CSV file.";
}
})());
}));
}
})).then((function (_){
cljs.core.reset_BANG_(uploading_QMARK_,false);

cljs.core.reset_BANG_(selected_file,null);

cljs.core.reset_BANG_(invalid_rows,cljs.core.PersistentVector.EMPTY);

return (on_success_fn__$1.cljs$core$IFn$_invoke$arity$0 ? on_success_fn__$1.cljs$core$IFn$_invoke$arity$0() : on_success_fn__$1.call(null));
})).catch((function (err){
cljs.core.reset_BANG_(uploading_QMARK_,false);

return cljs.core.reset_BANG_(error_msg,err.message);
}));
}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.import-dropzone","div.import-dropzone",-1574221511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.import-file-input","input.import-file-input",990640515),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".csv",new cljs.core.Keyword(null,"id","id",-1388402092),"csv-file-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var file = (e.target.files[(0)]);
cljs.core.reset_BANG_(selected_file,file);

cljs.core.reset_BANG_(error_msg,null);

return cljs.core.reset_BANG_(invalid_rows,cljs.core.PersistentVector.EMPTY);
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.import-file-label","label.import-file-label",1860897141),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"csv-file-input"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.import-file-icon","div.import-file-icon",262214130),"\uD83D\uDCC4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.import-file-text","span.import-file-text",-444159445),"Click to select"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.import-file-subtext","p.import-file-subtext",-2029773612),"Supported formats: .csv"], null)], null),(cljs.core.truth_(cljs.core.deref(selected_file))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.import-selected-file","div.import-selected-file",-2048262612),(""+"Selected file: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_file).name))], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.import-modal-actions","div.import-modal-actions",746807434),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.import-btn-cancel","button.import-btn-cancel",-1655759425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(selected_file,null);

cljs.core.reset_BANG_(error_msg,null);

cljs.core.reset_BANG_(invalid_rows,cljs.core.PersistentVector.EMPTY);

return (on_close_fn__$1.cljs$core$IFn$_invoke$arity$0 ? on_close_fn__$1.cljs$core$IFn$_invoke$arity$0() : on_close_fn__$1.call(null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(uploading_QMARK_)], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.import-btn-submit","button.import-btn-submit",650922049),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5162__auto__ = (cljs.core.deref(selected_file) == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.deref(uploading_QMARK_);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__5162__auto__ = (cljs.core.deref(selected_file) == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.deref(uploading_QMARK_);
}
})())?"disabled":null)], null),(cljs.core.truth_(cljs.core.deref(uploading_QMARK_))?"\u23F3 Processing...":"\uD83D\uDE80 Import CSV")], null)], null)], null)], null)], null);
}
});
});

//# sourceMappingURL=gilastore_ui.views.product_import_modal.js.map
