goog.provide('gilastore_ui.views.profile');
if((typeof gilastore_ui !== 'undefined') && (typeof gilastore_ui.views !== 'undefined') && (typeof gilastore_ui.views.profile !== 'undefined') && (typeof gilastore_ui.views.profile.profile_state !== 'undefined')){
} else {
gilastore_ui.views.profile.profile_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null));
}
gilastore_ui.views.profile.fetch_user_profile = (function gilastore_ui$views$profile$fetch_user_profile(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.profile.profile_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

return gilastore_ui.api.api_fetch("/auth/myprofile").then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw Error("Error loading user profile");
}
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var user_info = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return clj_data;
}
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.profile.profile_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),user_info,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
})).catch((function (err){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gilastore_ui.views.profile.profile_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),err.message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
});
gilastore_ui.views.profile.profile_view = (function gilastore_ui$views$profile$profile_view(){
var state = cljs.core.deref(gilastore_ui.views.profile.profile_state);
var map__17185 = state;
var map__17185__$1 = cljs.core.__destructure_map(map__17185);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17185__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17185__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17185__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if((((user == null)) && (((cljs.core.not(loading_QMARK_)) && ((error == null)))))){
gilastore_ui.views.profile.fetch_user_profile();
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-container","div.profile-container",583780471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.profile-title","h2.profile-title",326978209),"\uD83D\uDC64 My Profile"], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.profile-loading","p.profile-loading",363521288),"Loading profile..."], null):null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-error","div.profile-error",-363087850),error], null):null),(cljs.core.truth_(loading_QMARK_)?null:((cljs.core.not(user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-empty","div.profile-empty",711247455),"No profile data available."], null):(function (){var name = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(user);
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
var avatar = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"Avatar_Url","Avatar_Url",2051431164).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword(null,"avatar_url","avatar_url",1520721439).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return null;
}
}
})();
var first_letter = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(username,(0),(1)))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-card","div.profile-card",2109983026),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-header-section","div.profile-header-section",1007256017),(cljs.core.truth_(avatar)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.profile-avatar-img","img.profile-avatar-img",-420310052),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),avatar,new cljs.core.Keyword(null,"alt","alt",-3214426),"Avatar"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-avatar-placeholder","div.profile-avatar-placeholder",1389725878),first_letter], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-user-titles","div.profile-user-titles",1065415093),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.profile-name","h3.profile-name",475555677),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.profile-role","span.profile-role",1427952657),role], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-details-grid","div.profile-details-grid",827945164),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-field","div.profile-field",-1464660043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.profile-label","span.profile-label",-1477329552),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.profile-value","span.profile-value",-2114012560),username], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-field","div.profile-field",-1464660043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.profile-label","span.profile-label",-1477329552),"Email Address"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.profile-value","span.profile-value",-2114012560),email], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-field","div.profile-field",-1464660043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.profile-label","span.profile-label",-1477329552),"Member Since"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.profile-value","span.profile-value",-2114012560),(((cljs.core.count(created_at) >= (10)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(created_at,(0),(10)):created_at)], null)], null)], null)], null);
})()))], null);
});

//# sourceMappingURL=gilastore_ui.views.profile.js.map
