goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13838){
var map__13840 = p__13838;
var map__13840__$1 = cljs.core.__destructure_map(map__13840);
var runtime = map__13840__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13840__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5162__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14121 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14121)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13850 = runtime;
var G__13851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14121);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13850,G__13851) : shadow.remote.runtime.shared.process.call(null,G__13850,G__13851));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13852,res){
var map__13853 = p__13852;
var map__13853__$1 = cljs.core.__destructure_map(map__13853);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13853__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13853__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13854 = res;
var G__13854__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13854,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13854);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13854__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13854__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13859 = arguments.length;
switch (G__13859) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13861,msg,handlers,timeout_after_ms){
var map__13862 = p__13861;
var map__13862__$1 = cljs.core.__destructure_map(map__13862);
var runtime = map__13862__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13862__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___14145 = arguments.length;
var i__5898__auto___14146 = (0);
while(true){
if((i__5898__auto___14146 < len__5897__auto___14145)){
args__5903__auto__.push((arguments[i__5898__auto___14146]));

var G__14154 = (i__5898__auto___14146 + (1));
i__5898__auto___14146 = G__14154;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13892,ev,args){
var map__13893 = p__13892;
var map__13893__$1 = cljs.core.__destructure_map(map__13893);
var runtime = map__13893__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13893__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13894 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13897 = null;
var count__13898 = (0);
var i__13899 = (0);
while(true){
if((i__13899 < count__13898)){
var ext = chunk__13897.cljs$core$IIndexed$_nth$arity$2(null,i__13899);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14158 = seq__13894;
var G__14159 = chunk__13897;
var G__14160 = count__13898;
var G__14161 = (i__13899 + (1));
seq__13894 = G__14158;
chunk__13897 = G__14159;
count__13898 = G__14160;
i__13899 = G__14161;
continue;
} else {
var G__14164 = seq__13894;
var G__14165 = chunk__13897;
var G__14166 = count__13898;
var G__14167 = (i__13899 + (1));
seq__13894 = G__14164;
chunk__13897 = G__14165;
count__13898 = G__14166;
i__13899 = G__14167;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13894);
if(temp__5823__auto__){
var seq__13894__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13894__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__13894__$1);
var G__14168 = cljs.core.chunk_rest(seq__13894__$1);
var G__14169 = c__5694__auto__;
var G__14170 = cljs.core.count(c__5694__auto__);
var G__14171 = (0);
seq__13894 = G__14168;
chunk__13897 = G__14169;
count__13898 = G__14170;
i__13899 = G__14171;
continue;
} else {
var ext = cljs.core.first(seq__13894__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14175 = cljs.core.next(seq__13894__$1);
var G__14176 = null;
var G__14177 = (0);
var G__14178 = (0);
seq__13894 = G__14175;
chunk__13897 = G__14176;
count__13898 = G__14177;
i__13899 = G__14178;
continue;
} else {
var G__14179 = cljs.core.next(seq__13894__$1);
var G__14180 = null;
var G__14181 = (0);
var G__14182 = (0);
seq__13894 = G__14179;
chunk__13897 = G__14180;
count__13898 = G__14181;
i__13899 = G__14182;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13868){
var G__13869 = cljs.core.first(seq13868);
var seq13868__$1 = cljs.core.next(seq13868);
var G__13870 = cljs.core.first(seq13868__$1);
var seq13868__$2 = cljs.core.next(seq13868__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13869,G__13870,seq13868__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13917,p__13918){
var map__13919 = p__13917;
var map__13919__$1 = cljs.core.__destructure_map(map__13919);
var runtime = map__13919__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13919__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13920 = p__13918;
var map__13920__$1 = cljs.core.__destructure_map(map__13920);
var msg = map__13920__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__13921 = cljs.core.deref(state_ref);
var map__13921__$1 = cljs.core.__destructure_map(map__13921);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13921__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13921__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13929,msg){
var map__13930 = p__13929;
var map__13930__$1 = cljs.core.__destructure_map(map__13930);
var runtime = map__13930__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13930__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13933,key,p__13934){
var map__13936 = p__13933;
var map__13936__$1 = cljs.core.__destructure_map(map__13936);
var state = map__13936__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13936__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13937 = p__13934;
var map__13937__$1 = cljs.core.__destructure_map(map__13937);
var spec = map__13937__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13937__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13937__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13945,key,spec){
var map__13949 = p__13945;
var map__13949__$1 = cljs.core.__destructure_map(map__13949);
var runtime = map__13949__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13949__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___14267 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___14267 == null)){
} else {
var on_welcome_14268 = temp__5827__auto___14267;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14268.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14268.cljs$core$IFn$_invoke$arity$0() : on_welcome_14268.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13959_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13959_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13961_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13961_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13962_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13962_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13964_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13964_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13965_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13965_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13974,key){
var map__13975 = p__13974;
var map__13975__$1 = cljs.core.__destructure_map(map__13975);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13975__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14009,msg){
var map__14010 = p__14009;
var map__14010__$1 = cljs.core.__destructure_map(map__14010);
var runtime = map__14010__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14010__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14017,p__14018){
var map__14019 = p__14017;
var map__14019__$1 = cljs.core.__destructure_map(map__14019);
var runtime = map__14019__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14020 = p__14018;
var map__14020__$1 = cljs.core.__destructure_map(map__14020);
var msg = map__14020__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14020__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14020__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14036 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14038 = null;
var count__14039 = (0);
var i__14040 = (0);
while(true){
if((i__14040 < count__14039)){
var map__14094 = chunk__14038.cljs$core$IIndexed$_nth$arity$2(null,i__14040);
var map__14094__$1 = cljs.core.__destructure_map(map__14094);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14094__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14350 = seq__14036;
var G__14351 = chunk__14038;
var G__14352 = count__14039;
var G__14353 = (i__14040 + (1));
seq__14036 = G__14350;
chunk__14038 = G__14351;
count__14039 = G__14352;
i__14040 = G__14353;
continue;
} else {
var G__14355 = seq__14036;
var G__14356 = chunk__14038;
var G__14357 = count__14039;
var G__14358 = (i__14040 + (1));
seq__14036 = G__14355;
chunk__14038 = G__14356;
count__14039 = G__14357;
i__14040 = G__14358;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14036);
if(temp__5823__auto__){
var seq__14036__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14036__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__14036__$1);
var G__14361 = cljs.core.chunk_rest(seq__14036__$1);
var G__14362 = c__5694__auto__;
var G__14363 = cljs.core.count(c__5694__auto__);
var G__14364 = (0);
seq__14036 = G__14361;
chunk__14038 = G__14362;
count__14039 = G__14363;
i__14040 = G__14364;
continue;
} else {
var map__14103 = cljs.core.first(seq__14036__$1);
var map__14103__$1 = cljs.core.__destructure_map(map__14103);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14103__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14370 = cljs.core.next(seq__14036__$1);
var G__14371 = null;
var G__14372 = (0);
var G__14373 = (0);
seq__14036 = G__14370;
chunk__14038 = G__14371;
count__14039 = G__14372;
i__14040 = G__14373;
continue;
} else {
var G__14377 = cljs.core.next(seq__14036__$1);
var G__14378 = null;
var G__14379 = (0);
var G__14380 = (0);
seq__14036 = G__14377;
chunk__14038 = G__14378;
count__14039 = G__14379;
i__14040 = G__14380;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
