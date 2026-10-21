goog.provide('gilastore_ui.api');
gilastore_ui.api.login_user = (function gilastore_ui$api$login_user(e,state_atom){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

var map__17155 = cljs.core.deref(state_atom);
var map__17155__$1 = cljs.core.__destructure_map(map__17155);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17155__$1,new cljs.core.Keyword(null,"password","password",417022471));
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gilastore_ui.config.api_url)+"/auth/login"),({"method": "POST", "headers": ({"Content-Type": "application/json", "Accept": "application/json", "x-api-key": gilastore_ui.config.api_key}), "body": JSON.stringify(({"Email": email, "password": password}))})).then((function (response){
if(cljs.core.truth_(response.ok)){
return response.json();
} else {
throw Error("Credentials are wrong");
}
})).then((function (data){
var auth = (data["authorization"]);
var token = (cljs.core.truth_(auth)?(auth["token"]):null);
var user_obj = (data["user"]);
var role = (cljs.core.truth_(user_obj)?(function (){var or__5162__auto__ = (user_obj["Role"]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (user_obj["role"]);
}
})():"customer");
var username = (cljs.core.truth_(user_obj)?(function (){var or__5162__auto__ = (user_obj["username"]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (user_obj["username"]);
}
})():"Guest");
var userid = (cljs.core.truth_(user_obj)?(function (){var or__5162__auto__ = (user_obj["UserId"]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (user_obj["userid"]);
}
})():"0");
localStorage.setItem("jwt_token",token);

localStorage.setItem("user_role",role);

localStorage.setItem("user_username",username);

localStorage.setItem("userid",userid);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"token","token",-1211463215),token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),role,new cljs.core.Keyword(null,"username","username",1605666410),username], null),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"password","password",417022471),""], 0));

cljs.core.reset_BANG_(gilastore_ui.state.current_user_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),role,new cljs.core.Keyword(null,"username","username",1605666410),username], null));

return (window.location.hash = "#/myprofile");
})).catch((function (err){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),err.message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
});
gilastore_ui.api.api_fetch = (function gilastore_ui$api$api_fetch(var_args){
var args__5903__auto__ = [];
var len__5897__auto___17163 = arguments.length;
var i__5898__auto___17164 = (0);
while(true){
if((i__5898__auto___17164 < len__5897__auto___17163)){
args__5903__auto__.push((arguments[i__5898__auto___17164]));

var G__17165 = (i__5898__auto___17164 + (1));
i__5898__auto___17164 = G__17165;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(gilastore_ui.api.api_fetch.cljs$core$IFn$_invoke$arity$variadic = (function (endpoint,p__17158){
var vec__17159 = p__17158;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17159,(0),null);
var token = localStorage.getItem("jwt_token");
var opts = (((options == null))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core.map_QMARK_(options))?options:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))
));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"body","body",-2049205669));
var is_form_data_QMARK_ = (body instanceof FormData);
var default_headers = (function (){var G__17162 = new cljs.core.PersistentArrayMap(null, 2, ["Accept","application/json","x-api-key",gilastore_ui.config.api_key], null);
if((!(is_form_data_QMARK_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17162,"Content-Type","application/json");
} else {
return G__17162;
}
})();
var headers = (cljs.core.truth_(token)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(default_headers,"Authorization",(""+"Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token))):default_headers);
var fetch_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null),opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.clj__GT_js(headers)], null)], 0));
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(gilastore_ui.config.api_url)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint)),cljs.core.clj__GT_js(fetch_options)).then((function (response){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(response.status,(401))){
localStorage.removeItem("jwt_token");

localStorage.removeItem("user_role");

localStorage.removeItem("user_username");

localStorage.removeItem("userid");

cljs.core.reset_BANG_(gilastore_ui.state.current_user_atom,null);

(window.location.hash = "#/login");

throw Error("Session expired. Please log in again.");
} else {
}

return response;
}));
}));

(gilastore_ui.api.api_fetch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(gilastore_ui.api.api_fetch.cljs$lang$applyTo = (function (seq17156){
var G__17157 = cljs.core.first(seq17156);
var seq17156__$1 = cljs.core.next(seq17156);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17157,seq17156__$1);
}));


//# sourceMappingURL=gilastore_ui.api.js.map
