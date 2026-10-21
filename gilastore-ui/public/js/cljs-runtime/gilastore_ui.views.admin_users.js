goog.provide('gilastore_ui.views.admin_users');
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.admin_users !== 'undefined') && (typeof gilastore_ui.views.admin_users.admin_users_state !== 'undefined')){
} else {
gilastore_ui.views.admin_users.admin_users_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null));
}
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.admin_users !== 'undefined') && (typeof gilastore_ui.views.admin_users.show_modal_QMARK_ !== 'undefined')){
} else {
gilastore_ui.views.admin_users.show_modal_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.admin_users !== 'undefined') && (typeof gilastore_ui.views.admin_users.new_user_form !== 'undefined')){
} else {
gilastore_ui.views.admin_users.new_user_form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"role","role",-736691072),"User"], null));
}
gilastore_ui.views.admin_users.fetch_all_users = (function gilastore_ui$views$admin_users$fetch_all_users(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.admin_users.admin_users_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

return gilastore_ui.api.api_fetch("/auth/").then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error loading users list");
}
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var users_list = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(clj_data);
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.admin_users.admin_users_state,cljs.core.assoc,new cljs.core.Keyword(null,"users","users",-713552705),users_list,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
})).catch((function (err){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.admin_users.admin_users_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),err.message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
});
gilastore_ui.views.admin_users.create_user = (function gilastore_ui$views$admin_users$create_user(e){
e.preventDefault();

var map__17184 = cljs.core.deref(gilastore_ui.views.admin_users.new_user_form);
var map__17184__$1 = cljs.core.__destructure_map(map__17184);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17184__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17184__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17184__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17184__$1,new cljs.core.Keyword(null,"password","password",417022471));
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17184__$1,new cljs.core.Keyword(null,"role","role",-736691072));
var payload = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Name","Name",-131211369),name,new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"Email","Email",-1481714678),email,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"Role","Role",-308795462),role], null)));
return gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic("/auth/register",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),payload], null)], 0)).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error creating user");
}
})).then((function (_){
cljs.core.reset_BANG_(gilastore_ui.views.admin_users.new_user_form,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"role","role",-736691072),"User"], null));

cljs.core.reset_BANG_(gilastore_ui.views.admin_users.show_modal_QMARK_,false);

return gilastore_ui.views.admin_users.fetch_all_users();
})).catch((function (err){
return alert((""+"Error: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(err.message)));
}));
});
gilastore_ui.views.admin_users.admin_users_view = (function gilastore_ui$views$admin_users$admin_users_view(){
var state = cljs.core.deref(gilastore_ui.views.admin_users.admin_users_state);
var map__17203 = state;
var map__17203__$1 = cljs.core.__destructure_map(map__17203);
var users = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17203__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17203__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17203__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var is_modal_open_QMARK_ = cljs.core.deref(gilastore_ui.views.admin_users.show_modal_QMARK_);
var form_data = cljs.core.deref(gilastore_ui.views.admin_users.new_user_form);
if(((cljs.core.empty_QMARK_(users)) && (((cljs.core.not(loading_QMARK_)) && ((error == null)))))){
gilastore_ui.views.admin_users.fetch_all_users();
} else {
}

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-users-container","div.admin-users-container",-1348393730),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-users-header-bar","div.admin-users-header-bar",82793173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.admin-users-title","h2.admin-users-title",-1217194140),"\uD83D\uDC65 Users Management"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.admin-users-btn-add","button.admin-users-btn-add",2073835164),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(gilastore_ui.views.admin_users.show_modal_QMARK_,true);
})], null),"\u2795 Add User"], null)], null),(cljs.core.truth_(is_modal_open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-modal-overlay","div.admin-modal-overlay",1987812584),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-modal-card","div.admin-modal-card",-975590074),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.admin-modal-title","h3.admin-modal-title",597629559),"Create New User"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.admin-modal-form","form.admin-modal-form",862564855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),gilastore_ui.views.admin_users.create_user], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-form-group","div.admin-form-group",710429151),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.admin-form-label","label.admin-form-label",-977643802),"Full Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.admin-form-input","input.admin-form-input",-1930522803),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form_data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17194_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.admin_users.new_user_form,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__17194_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-form-group","div.admin-form-group",710429151),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.admin-form-label","label.admin-form-label",-977643802),"Username:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.admin-form-input","input.admin-form-input",-1930522803),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(form_data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17195_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.admin_users.new_user_form,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__17195_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-form-group","div.admin-form-group",710429151),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.admin-form-label","label.admin-form-label",-977643802),"Email:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.admin-form-input","input.admin-form-input",-1930522803),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(form_data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17196_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.admin_users.new_user_form,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),p1__17196_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-form-group","div.admin-form-group",710429151),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.admin-form-label","label.admin-form-label",-977643802),"Password:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.admin-form-input","input.admin-form-input",-1930522803),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(form_data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17197_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.admin_users.new_user_form,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__17197_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-form-group","div.admin-form-group",710429151),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.admin-form-label","label.admin-form-label",-977643802),"Role:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.admin-form-select","select.admin-form-select",333913650),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(form_data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17198_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gilastore_ui.views.admin_users.new_user_form,cljs.core.assoc,new cljs.core.Keyword(null,"role","role",-736691072),p1__17198_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"User"], null),"User"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"admin"], null),"Admin"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-modal-actions","div.admin-modal-actions",-1213162177),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.admin-btn-cancel","button.admin-btn-cancel",-1530691976),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(gilastore_ui.views.admin_users.show_modal_QMARK_,false);
})], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.admin-btn-submit","button.admin-btn-submit",1959200865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Save User"], null)], null)], null)], null)], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.admin-users-loading","p.admin-users-loading",-1829007408),"Loading users..."], null):null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-users-error","div.admin-users-error",-1137261736),error], null):null),(cljs.core.truth_(loading_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.admin-users-table-wrapper","div.admin-users-table-wrapper",-1072490230),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.admin-users-table","table.admin-users-table",523943606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.admin-users-tr-header","tr.admin-users-tr-header",618174885),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-users-th","th.admin-users-th",-523398993),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-users-th","th.admin-users-th",-523398993),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-users-th","th.admin-users-th",-523398993),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-users-th","th.admin-users-th",-523398993),"Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-users-th","th.admin-users-th",-523398993),"Role"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.admin-users-th","th.admin-users-th",-523398993),"Created At"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),((cljs.core.empty_QMARK_(users))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-empty-cell","td.admin-users-empty-cell",358556506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),"6"], null),"No users found."], null)], null):(function (){var iter__5649__auto__ = (function gilastore_ui$views$admin_users$admin_users_view_$_iter__17219(s__17220){
return (new cljs.core.LazySeq(null,(function (){
var s__17220__$1 = s__17220;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17220__$1);
if(temp__5823__auto__){
var s__17220__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17220__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__17220__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__17222 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__17221 = (0);
while(true){
if((i__17221 < size__5648__auto__)){
var user = cljs.core._nth(c__5647__auto__,i__17221);
cljs.core.chunk_append(b__17222,(function (){var user_id = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"UserId","UserId",1260469425).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(user);
}
})();
var name = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "N/A";
}
}
})();
var username = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"UserName","UserName",1490596016).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "N/A";
}
}
})();
var email = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Email","Email",-1481714678).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "N/A";
}
}
})();
var role = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Role","Role",-308795462).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "User";
}
}
})();
var created_at = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"CreatedAt","CreatedAt",1659720385).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "N/A";
}
}
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.admin-users-tr","tr.admin-users-tr",-1898311048),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td","td.admin-users-td",74670058),user_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td-bold","td.admin-users-td-bold",-2141015728),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td","td.admin-users-td",74670058),username], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td","td.admin-users-td",74670058),email], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td","td.admin-users-td",74670058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.admin-users-role-badge","span.admin-users-role-badge",-567664350),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"role-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(role)))], null),role], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td","td.admin-users-td",74670058),(((cljs.core.count(created_at) >= (10)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(created_at,(0),(10)):created_at)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),user_id], null));
})());

var G__17258 = (i__17221 + (1));
i__17221 = G__17258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17222),gilastore_ui$views$admin_users$admin_users_view_$_iter__17219(cljs.core.chunk_rest(s__17220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17222),null);
}
} else {
var user = cljs.core.first(s__17220__$2);
return cljs.core.cons((function (){var user_id = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"UserId","UserId",1260469425).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(user);
}
})();
var name = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "N/A";
}
}
})();
var username = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"UserName","UserName",1490596016).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "N/A";
}
}
})();
var email = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Email","Email",-1481714678).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "N/A";
}
}
})();
var role = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Role","Role",-308795462).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "User";
}
}
})();
var created_at = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"CreatedAt","CreatedAt",1659720385).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "N/A";
}
}
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.admin-users-tr","tr.admin-users-tr",-1898311048),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td","td.admin-users-td",74670058),user_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td-bold","td.admin-users-td-bold",-2141015728),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td","td.admin-users-td",74670058),username], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td","td.admin-users-td",74670058),email], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td","td.admin-users-td",74670058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.admin-users-role-badge","span.admin-users-role-badge",-567664350),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"role-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(role)))], null),role], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.admin-users-td","td.admin-users-td",74670058),(((cljs.core.count(created_at) >= (10)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(created_at,(0),(10)):created_at)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),user_id], null));
})(),gilastore_ui$views$admin_users$admin_users_view_$_iter__17219(cljs.core.rest(s__17220__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(users);
})())], null)], null)], null))], null);
});

//# sourceMappingURL=gilastore_ui.views.admin_users.js.map
