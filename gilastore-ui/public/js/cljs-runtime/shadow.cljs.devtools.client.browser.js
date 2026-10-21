goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___21958 = arguments.length;
var i__5898__auto___21959 = (0);
while(true){
if((i__5898__auto___21959 < len__5897__auto___21958)){
args__5903__auto__.push((arguments[i__5898__auto___21959]));

var G__21960 = (i__5898__auto___21959 + (1));
i__5898__auto___21959 = G__21960;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21594){
var G__21595 = cljs.core.first(seq21594);
var seq21594__$1 = cljs.core.next(seq21594);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21595,seq21594__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21618 = cljs.core.seq(sources);
var chunk__21619 = null;
var count__21620 = (0);
var i__21621 = (0);
while(true){
if((i__21621 < count__21620)){
var map__21655 = chunk__21619.cljs$core$IIndexed$_nth$arity$2(null,i__21621);
var map__21655__$1 = cljs.core.__destructure_map(map__21655);
var src = map__21655__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21655__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21655__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21655__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21655__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21658){var e_21961 = e21658;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21961);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21961.message))));
}

var G__21962 = seq__21618;
var G__21963 = chunk__21619;
var G__21964 = count__21620;
var G__21965 = (i__21621 + (1));
seq__21618 = G__21962;
chunk__21619 = G__21963;
count__21620 = G__21964;
i__21621 = G__21965;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21618);
if(temp__5823__auto__){
var seq__21618__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21618__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21618__$1);
var G__21966 = cljs.core.chunk_rest(seq__21618__$1);
var G__21967 = c__5694__auto__;
var G__21968 = cljs.core.count(c__5694__auto__);
var G__21969 = (0);
seq__21618 = G__21966;
chunk__21619 = G__21967;
count__21620 = G__21968;
i__21621 = G__21969;
continue;
} else {
var map__21671 = cljs.core.first(seq__21618__$1);
var map__21671__$1 = cljs.core.__destructure_map(map__21671);
var src = map__21671__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21672){var e_21970 = e21672;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21970);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21970.message))));
}

var G__21971 = cljs.core.next(seq__21618__$1);
var G__21972 = null;
var G__21973 = (0);
var G__21974 = (0);
seq__21618 = G__21971;
chunk__21619 = G__21972;
count__21620 = G__21973;
i__21621 = G__21974;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21674 = cljs.core.seq(js_requires);
var chunk__21675 = null;
var count__21676 = (0);
var i__21677 = (0);
while(true){
if((i__21677 < count__21676)){
var js_ns = chunk__21675.cljs$core$IIndexed$_nth$arity$2(null,i__21677);
var require_str_21975 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21975);


var G__21976 = seq__21674;
var G__21977 = chunk__21675;
var G__21978 = count__21676;
var G__21979 = (i__21677 + (1));
seq__21674 = G__21976;
chunk__21675 = G__21977;
count__21676 = G__21978;
i__21677 = G__21979;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21674);
if(temp__5823__auto__){
var seq__21674__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21674__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21674__$1);
var G__21980 = cljs.core.chunk_rest(seq__21674__$1);
var G__21981 = c__5694__auto__;
var G__21982 = cljs.core.count(c__5694__auto__);
var G__21983 = (0);
seq__21674 = G__21980;
chunk__21675 = G__21981;
count__21676 = G__21982;
i__21677 = G__21983;
continue;
} else {
var js_ns = cljs.core.first(seq__21674__$1);
var require_str_21984 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21984);


var G__21985 = cljs.core.next(seq__21674__$1);
var G__21986 = null;
var G__21987 = (0);
var G__21988 = (0);
seq__21674 = G__21985;
chunk__21675 = G__21986;
count__21676 = G__21987;
i__21677 = G__21988;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21694){
var map__21695 = p__21694;
var map__21695__$1 = cljs.core.__destructure_map(map__21695);
var msg = map__21695__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21695__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21695__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21696(s__21697){
return (new cljs.core.LazySeq(null,(function (){
var s__21697__$1 = s__21697;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21697__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21702 = cljs.core.first(xs__6383__auto__);
var map__21702__$1 = cljs.core.__destructure_map(map__21702);
var src = map__21702__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__21697__$1,map__21702,map__21702__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21695,map__21695__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21696_$_iter__21698(s__21699){
return (new cljs.core.LazySeq(null,((function (s__21697__$1,map__21702,map__21702__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21695,map__21695__$1,msg,info,reload_info){
return (function (){
var s__21699__$1 = s__21699;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21699__$1);
if(temp__5823__auto____$1){
var s__21699__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21699__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__21699__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__21701 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__21700 = (0);
while(true){
if((i__21700 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__21700);
cljs.core.chunk_append(b__21701,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21989 = (i__21700 + (1));
i__21700 = G__21989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21701),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21696_$_iter__21698(cljs.core.chunk_rest(s__21699__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21701),null);
}
} else {
var warning = cljs.core.first(s__21699__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21696_$_iter__21698(cljs.core.rest(s__21699__$2)));
}
} else {
return null;
}
break;
}
});})(s__21697__$1,map__21702,map__21702__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21695,map__21695__$1,msg,info,reload_info))
,null,null));
});})(s__21697__$1,map__21702,map__21702__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21695,map__21695__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21696(cljs.core.rest(s__21697__$1)));
} else {
var G__21990 = cljs.core.rest(s__21697__$1);
s__21697__$1 = G__21990;
continue;
}
} else {
var G__21991 = cljs.core.rest(s__21697__$1);
s__21697__$1 = G__21991;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21703_21992 = cljs.core.seq(warnings);
var chunk__21704_21993 = null;
var count__21705_21994 = (0);
var i__21706_21995 = (0);
while(true){
if((i__21706_21995 < count__21705_21994)){
var map__21709_21996 = chunk__21704_21993.cljs$core$IIndexed$_nth$arity$2(null,i__21706_21995);
var map__21709_21997__$1 = cljs.core.__destructure_map(map__21709_21996);
var w_21998 = map__21709_21997__$1;
var msg_21999__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709_21997__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709_21997__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709_21997__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709_21997__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22002)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22000)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22001)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21999__$1)));


var G__22003 = seq__21703_21992;
var G__22004 = chunk__21704_21993;
var G__22005 = count__21705_21994;
var G__22006 = (i__21706_21995 + (1));
seq__21703_21992 = G__22003;
chunk__21704_21993 = G__22004;
count__21705_21994 = G__22005;
i__21706_21995 = G__22006;
continue;
} else {
var temp__5823__auto___22007 = cljs.core.seq(seq__21703_21992);
if(temp__5823__auto___22007){
var seq__21703_22008__$1 = temp__5823__auto___22007;
if(cljs.core.chunked_seq_QMARK_(seq__21703_22008__$1)){
var c__5694__auto___22009 = cljs.core.chunk_first(seq__21703_22008__$1);
var G__22010 = cljs.core.chunk_rest(seq__21703_22008__$1);
var G__22011 = c__5694__auto___22009;
var G__22012 = cljs.core.count(c__5694__auto___22009);
var G__22013 = (0);
seq__21703_21992 = G__22010;
chunk__21704_21993 = G__22011;
count__21705_21994 = G__22012;
i__21706_21995 = G__22013;
continue;
} else {
var map__21710_22014 = cljs.core.first(seq__21703_22008__$1);
var map__21710_22015__$1 = cljs.core.__destructure_map(map__21710_22014);
var w_22016 = map__21710_22015__$1;
var msg_22017__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710_22015__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710_22015__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710_22015__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710_22015__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22020)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22018)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22019)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22017__$1)));


var G__22021 = cljs.core.next(seq__21703_22008__$1);
var G__22022 = null;
var G__22023 = (0);
var G__22024 = (0);
seq__21703_21992 = G__22021;
chunk__21704_21993 = G__22022;
count__21705_21994 = G__22023;
i__21706_21995 = G__22024;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21693_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21693_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21711 = node_uri;
G__21711.setQuery(null);

G__21711.setPath(new$);

return G__21711;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21712){
var map__21713 = p__21712;
var map__21713__$1 = cljs.core.__destructure_map(map__21713);
var msg = map__21713__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21713__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21713__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21714 = cljs.core.seq(updates);
var chunk__21716 = null;
var count__21717 = (0);
var i__21718 = (0);
while(true){
if((i__21718 < count__21717)){
var path = chunk__21716.cljs$core$IIndexed$_nth$arity$2(null,i__21718);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21828_22025 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21832_22026 = null;
var count__21833_22027 = (0);
var i__21834_22028 = (0);
while(true){
if((i__21834_22028 < count__21833_22027)){
var node_22029 = chunk__21832_22026.cljs$core$IIndexed$_nth$arity$2(null,i__21834_22028);
if(cljs.core.not(node_22029.shadow$old)){
var path_match_22030 = shadow.cljs.devtools.client.browser.match_paths(node_22029.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22030)){
var new_link_22031 = (function (){var G__21860 = node_22029.cloneNode(true);
G__21860.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22030)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21860;
})();
(node_22029.shadow$old = true);

(new_link_22031.onload = ((function (seq__21828_22025,chunk__21832_22026,count__21833_22027,i__21834_22028,seq__21714,chunk__21716,count__21717,i__21718,new_link_22031,path_match_22030,node_22029,path,map__21713,map__21713__$1,msg,updates,reload_info){
return (function (e){
var seq__21861_22032 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21863_22033 = null;
var count__21864_22034 = (0);
var i__21865_22035 = (0);
while(true){
if((i__21865_22035 < count__21864_22034)){
var map__21869_22036 = chunk__21863_22033.cljs$core$IIndexed$_nth$arity$2(null,i__21865_22035);
var map__21869_22037__$1 = cljs.core.__destructure_map(map__21869_22036);
var task_22038 = map__21869_22037__$1;
var fn_str_22039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21869_22037__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21869_22037__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22041 = goog.getObjectByName(fn_str_22039,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22040)));

(fn_obj_22041.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22041.cljs$core$IFn$_invoke$arity$2(path,new_link_22031) : fn_obj_22041.call(null,path,new_link_22031));


var G__22042 = seq__21861_22032;
var G__22043 = chunk__21863_22033;
var G__22044 = count__21864_22034;
var G__22045 = (i__21865_22035 + (1));
seq__21861_22032 = G__22042;
chunk__21863_22033 = G__22043;
count__21864_22034 = G__22044;
i__21865_22035 = G__22045;
continue;
} else {
var temp__5823__auto___22046 = cljs.core.seq(seq__21861_22032);
if(temp__5823__auto___22046){
var seq__21861_22047__$1 = temp__5823__auto___22046;
if(cljs.core.chunked_seq_QMARK_(seq__21861_22047__$1)){
var c__5694__auto___22048 = cljs.core.chunk_first(seq__21861_22047__$1);
var G__22049 = cljs.core.chunk_rest(seq__21861_22047__$1);
var G__22050 = c__5694__auto___22048;
var G__22051 = cljs.core.count(c__5694__auto___22048);
var G__22052 = (0);
seq__21861_22032 = G__22049;
chunk__21863_22033 = G__22050;
count__21864_22034 = G__22051;
i__21865_22035 = G__22052;
continue;
} else {
var map__21870_22053 = cljs.core.first(seq__21861_22047__$1);
var map__21870_22054__$1 = cljs.core.__destructure_map(map__21870_22053);
var task_22055 = map__21870_22054__$1;
var fn_str_22056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21870_22054__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21870_22054__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22058 = goog.getObjectByName(fn_str_22056,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22057)));

(fn_obj_22058.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22058.cljs$core$IFn$_invoke$arity$2(path,new_link_22031) : fn_obj_22058.call(null,path,new_link_22031));


var G__22059 = cljs.core.next(seq__21861_22047__$1);
var G__22060 = null;
var G__22061 = (0);
var G__22062 = (0);
seq__21861_22032 = G__22059;
chunk__21863_22033 = G__22060;
count__21864_22034 = G__22061;
i__21865_22035 = G__22062;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22029);
});})(seq__21828_22025,chunk__21832_22026,count__21833_22027,i__21834_22028,seq__21714,chunk__21716,count__21717,i__21718,new_link_22031,path_match_22030,node_22029,path,map__21713,map__21713__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22030], 0));

goog.dom.insertSiblingAfter(new_link_22031,node_22029);


var G__22063 = seq__21828_22025;
var G__22064 = chunk__21832_22026;
var G__22065 = count__21833_22027;
var G__22066 = (i__21834_22028 + (1));
seq__21828_22025 = G__22063;
chunk__21832_22026 = G__22064;
count__21833_22027 = G__22065;
i__21834_22028 = G__22066;
continue;
} else {
var G__22067 = seq__21828_22025;
var G__22068 = chunk__21832_22026;
var G__22069 = count__21833_22027;
var G__22070 = (i__21834_22028 + (1));
seq__21828_22025 = G__22067;
chunk__21832_22026 = G__22068;
count__21833_22027 = G__22069;
i__21834_22028 = G__22070;
continue;
}
} else {
var G__22071 = seq__21828_22025;
var G__22072 = chunk__21832_22026;
var G__22073 = count__21833_22027;
var G__22074 = (i__21834_22028 + (1));
seq__21828_22025 = G__22071;
chunk__21832_22026 = G__22072;
count__21833_22027 = G__22073;
i__21834_22028 = G__22074;
continue;
}
} else {
var temp__5823__auto___22075 = cljs.core.seq(seq__21828_22025);
if(temp__5823__auto___22075){
var seq__21828_22076__$1 = temp__5823__auto___22075;
if(cljs.core.chunked_seq_QMARK_(seq__21828_22076__$1)){
var c__5694__auto___22077 = cljs.core.chunk_first(seq__21828_22076__$1);
var G__22078 = cljs.core.chunk_rest(seq__21828_22076__$1);
var G__22079 = c__5694__auto___22077;
var G__22080 = cljs.core.count(c__5694__auto___22077);
var G__22081 = (0);
seq__21828_22025 = G__22078;
chunk__21832_22026 = G__22079;
count__21833_22027 = G__22080;
i__21834_22028 = G__22081;
continue;
} else {
var node_22082 = cljs.core.first(seq__21828_22076__$1);
if(cljs.core.not(node_22082.shadow$old)){
var path_match_22083 = shadow.cljs.devtools.client.browser.match_paths(node_22082.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22083)){
var new_link_22084 = (function (){var G__21871 = node_22082.cloneNode(true);
G__21871.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22083)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21871;
})();
(node_22082.shadow$old = true);

(new_link_22084.onload = ((function (seq__21828_22025,chunk__21832_22026,count__21833_22027,i__21834_22028,seq__21714,chunk__21716,count__21717,i__21718,new_link_22084,path_match_22083,node_22082,seq__21828_22076__$1,temp__5823__auto___22075,path,map__21713,map__21713__$1,msg,updates,reload_info){
return (function (e){
var seq__21872_22085 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21874_22086 = null;
var count__21875_22087 = (0);
var i__21876_22088 = (0);
while(true){
if((i__21876_22088 < count__21875_22087)){
var map__21880_22089 = chunk__21874_22086.cljs$core$IIndexed$_nth$arity$2(null,i__21876_22088);
var map__21880_22090__$1 = cljs.core.__destructure_map(map__21880_22089);
var task_22091 = map__21880_22090__$1;
var fn_str_22092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21880_22090__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21880_22090__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22094 = goog.getObjectByName(fn_str_22092,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22093)));

(fn_obj_22094.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22094.cljs$core$IFn$_invoke$arity$2(path,new_link_22084) : fn_obj_22094.call(null,path,new_link_22084));


var G__22095 = seq__21872_22085;
var G__22096 = chunk__21874_22086;
var G__22097 = count__21875_22087;
var G__22098 = (i__21876_22088 + (1));
seq__21872_22085 = G__22095;
chunk__21874_22086 = G__22096;
count__21875_22087 = G__22097;
i__21876_22088 = G__22098;
continue;
} else {
var temp__5823__auto___22099__$1 = cljs.core.seq(seq__21872_22085);
if(temp__5823__auto___22099__$1){
var seq__21872_22100__$1 = temp__5823__auto___22099__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21872_22100__$1)){
var c__5694__auto___22101 = cljs.core.chunk_first(seq__21872_22100__$1);
var G__22102 = cljs.core.chunk_rest(seq__21872_22100__$1);
var G__22103 = c__5694__auto___22101;
var G__22104 = cljs.core.count(c__5694__auto___22101);
var G__22105 = (0);
seq__21872_22085 = G__22102;
chunk__21874_22086 = G__22103;
count__21875_22087 = G__22104;
i__21876_22088 = G__22105;
continue;
} else {
var map__21881_22106 = cljs.core.first(seq__21872_22100__$1);
var map__21881_22107__$1 = cljs.core.__destructure_map(map__21881_22106);
var task_22108 = map__21881_22107__$1;
var fn_str_22109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21881_22107__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21881_22107__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22111 = goog.getObjectByName(fn_str_22109,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22110)));

(fn_obj_22111.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22111.cljs$core$IFn$_invoke$arity$2(path,new_link_22084) : fn_obj_22111.call(null,path,new_link_22084));


var G__22112 = cljs.core.next(seq__21872_22100__$1);
var G__22113 = null;
var G__22114 = (0);
var G__22115 = (0);
seq__21872_22085 = G__22112;
chunk__21874_22086 = G__22113;
count__21875_22087 = G__22114;
i__21876_22088 = G__22115;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22082);
});})(seq__21828_22025,chunk__21832_22026,count__21833_22027,i__21834_22028,seq__21714,chunk__21716,count__21717,i__21718,new_link_22084,path_match_22083,node_22082,seq__21828_22076__$1,temp__5823__auto___22075,path,map__21713,map__21713__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22083], 0));

goog.dom.insertSiblingAfter(new_link_22084,node_22082);


var G__22116 = cljs.core.next(seq__21828_22076__$1);
var G__22117 = null;
var G__22118 = (0);
var G__22119 = (0);
seq__21828_22025 = G__22116;
chunk__21832_22026 = G__22117;
count__21833_22027 = G__22118;
i__21834_22028 = G__22119;
continue;
} else {
var G__22120 = cljs.core.next(seq__21828_22076__$1);
var G__22121 = null;
var G__22122 = (0);
var G__22123 = (0);
seq__21828_22025 = G__22120;
chunk__21832_22026 = G__22121;
count__21833_22027 = G__22122;
i__21834_22028 = G__22123;
continue;
}
} else {
var G__22124 = cljs.core.next(seq__21828_22076__$1);
var G__22125 = null;
var G__22126 = (0);
var G__22127 = (0);
seq__21828_22025 = G__22124;
chunk__21832_22026 = G__22125;
count__21833_22027 = G__22126;
i__21834_22028 = G__22127;
continue;
}
}
} else {
}
}
break;
}


var G__22128 = seq__21714;
var G__22129 = chunk__21716;
var G__22130 = count__21717;
var G__22131 = (i__21718 + (1));
seq__21714 = G__22128;
chunk__21716 = G__22129;
count__21717 = G__22130;
i__21718 = G__22131;
continue;
} else {
var G__22132 = seq__21714;
var G__22133 = chunk__21716;
var G__22134 = count__21717;
var G__22135 = (i__21718 + (1));
seq__21714 = G__22132;
chunk__21716 = G__22133;
count__21717 = G__22134;
i__21718 = G__22135;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21714);
if(temp__5823__auto__){
var seq__21714__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21714__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21714__$1);
var G__22136 = cljs.core.chunk_rest(seq__21714__$1);
var G__22137 = c__5694__auto__;
var G__22138 = cljs.core.count(c__5694__auto__);
var G__22139 = (0);
seq__21714 = G__22136;
chunk__21716 = G__22137;
count__21717 = G__22138;
i__21718 = G__22139;
continue;
} else {
var path = cljs.core.first(seq__21714__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21882_22140 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21886_22141 = null;
var count__21887_22142 = (0);
var i__21888_22143 = (0);
while(true){
if((i__21888_22143 < count__21887_22142)){
var node_22144 = chunk__21886_22141.cljs$core$IIndexed$_nth$arity$2(null,i__21888_22143);
if(cljs.core.not(node_22144.shadow$old)){
var path_match_22145 = shadow.cljs.devtools.client.browser.match_paths(node_22144.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22145)){
var new_link_22146 = (function (){var G__21914 = node_22144.cloneNode(true);
G__21914.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22145)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21914;
})();
(node_22144.shadow$old = true);

(new_link_22146.onload = ((function (seq__21882_22140,chunk__21886_22141,count__21887_22142,i__21888_22143,seq__21714,chunk__21716,count__21717,i__21718,new_link_22146,path_match_22145,node_22144,path,seq__21714__$1,temp__5823__auto__,map__21713,map__21713__$1,msg,updates,reload_info){
return (function (e){
var seq__21915_22147 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21917_22148 = null;
var count__21918_22149 = (0);
var i__21919_22150 = (0);
while(true){
if((i__21919_22150 < count__21918_22149)){
var map__21923_22151 = chunk__21917_22148.cljs$core$IIndexed$_nth$arity$2(null,i__21919_22150);
var map__21923_22152__$1 = cljs.core.__destructure_map(map__21923_22151);
var task_22153 = map__21923_22152__$1;
var fn_str_22154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21923_22152__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21923_22152__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22156 = goog.getObjectByName(fn_str_22154,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22155)));

(fn_obj_22156.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22156.cljs$core$IFn$_invoke$arity$2(path,new_link_22146) : fn_obj_22156.call(null,path,new_link_22146));


var G__22157 = seq__21915_22147;
var G__22158 = chunk__21917_22148;
var G__22159 = count__21918_22149;
var G__22160 = (i__21919_22150 + (1));
seq__21915_22147 = G__22157;
chunk__21917_22148 = G__22158;
count__21918_22149 = G__22159;
i__21919_22150 = G__22160;
continue;
} else {
var temp__5823__auto___22161__$1 = cljs.core.seq(seq__21915_22147);
if(temp__5823__auto___22161__$1){
var seq__21915_22162__$1 = temp__5823__auto___22161__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21915_22162__$1)){
var c__5694__auto___22163 = cljs.core.chunk_first(seq__21915_22162__$1);
var G__22164 = cljs.core.chunk_rest(seq__21915_22162__$1);
var G__22165 = c__5694__auto___22163;
var G__22166 = cljs.core.count(c__5694__auto___22163);
var G__22167 = (0);
seq__21915_22147 = G__22164;
chunk__21917_22148 = G__22165;
count__21918_22149 = G__22166;
i__21919_22150 = G__22167;
continue;
} else {
var map__21924_22168 = cljs.core.first(seq__21915_22162__$1);
var map__21924_22169__$1 = cljs.core.__destructure_map(map__21924_22168);
var task_22170 = map__21924_22169__$1;
var fn_str_22171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21924_22169__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21924_22169__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22173 = goog.getObjectByName(fn_str_22171,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22172)));

(fn_obj_22173.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22173.cljs$core$IFn$_invoke$arity$2(path,new_link_22146) : fn_obj_22173.call(null,path,new_link_22146));


var G__22174 = cljs.core.next(seq__21915_22162__$1);
var G__22175 = null;
var G__22176 = (0);
var G__22177 = (0);
seq__21915_22147 = G__22174;
chunk__21917_22148 = G__22175;
count__21918_22149 = G__22176;
i__21919_22150 = G__22177;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22144);
});})(seq__21882_22140,chunk__21886_22141,count__21887_22142,i__21888_22143,seq__21714,chunk__21716,count__21717,i__21718,new_link_22146,path_match_22145,node_22144,path,seq__21714__$1,temp__5823__auto__,map__21713,map__21713__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22145], 0));

goog.dom.insertSiblingAfter(new_link_22146,node_22144);


var G__22178 = seq__21882_22140;
var G__22179 = chunk__21886_22141;
var G__22180 = count__21887_22142;
var G__22181 = (i__21888_22143 + (1));
seq__21882_22140 = G__22178;
chunk__21886_22141 = G__22179;
count__21887_22142 = G__22180;
i__21888_22143 = G__22181;
continue;
} else {
var G__22182 = seq__21882_22140;
var G__22183 = chunk__21886_22141;
var G__22184 = count__21887_22142;
var G__22185 = (i__21888_22143 + (1));
seq__21882_22140 = G__22182;
chunk__21886_22141 = G__22183;
count__21887_22142 = G__22184;
i__21888_22143 = G__22185;
continue;
}
} else {
var G__22186 = seq__21882_22140;
var G__22187 = chunk__21886_22141;
var G__22188 = count__21887_22142;
var G__22189 = (i__21888_22143 + (1));
seq__21882_22140 = G__22186;
chunk__21886_22141 = G__22187;
count__21887_22142 = G__22188;
i__21888_22143 = G__22189;
continue;
}
} else {
var temp__5823__auto___22190__$1 = cljs.core.seq(seq__21882_22140);
if(temp__5823__auto___22190__$1){
var seq__21882_22191__$1 = temp__5823__auto___22190__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21882_22191__$1)){
var c__5694__auto___22192 = cljs.core.chunk_first(seq__21882_22191__$1);
var G__22193 = cljs.core.chunk_rest(seq__21882_22191__$1);
var G__22194 = c__5694__auto___22192;
var G__22195 = cljs.core.count(c__5694__auto___22192);
var G__22196 = (0);
seq__21882_22140 = G__22193;
chunk__21886_22141 = G__22194;
count__21887_22142 = G__22195;
i__21888_22143 = G__22196;
continue;
} else {
var node_22197 = cljs.core.first(seq__21882_22191__$1);
if(cljs.core.not(node_22197.shadow$old)){
var path_match_22198 = shadow.cljs.devtools.client.browser.match_paths(node_22197.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22198)){
var new_link_22199 = (function (){var G__21925 = node_22197.cloneNode(true);
G__21925.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22198)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21925;
})();
(node_22197.shadow$old = true);

(new_link_22199.onload = ((function (seq__21882_22140,chunk__21886_22141,count__21887_22142,i__21888_22143,seq__21714,chunk__21716,count__21717,i__21718,new_link_22199,path_match_22198,node_22197,seq__21882_22191__$1,temp__5823__auto___22190__$1,path,seq__21714__$1,temp__5823__auto__,map__21713,map__21713__$1,msg,updates,reload_info){
return (function (e){
var seq__21926_22200 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21928_22201 = null;
var count__21929_22202 = (0);
var i__21930_22203 = (0);
while(true){
if((i__21930_22203 < count__21929_22202)){
var map__21934_22204 = chunk__21928_22201.cljs$core$IIndexed$_nth$arity$2(null,i__21930_22203);
var map__21934_22205__$1 = cljs.core.__destructure_map(map__21934_22204);
var task_22206 = map__21934_22205__$1;
var fn_str_22207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21934_22205__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21934_22205__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22209 = goog.getObjectByName(fn_str_22207,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22208)));

(fn_obj_22209.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22209.cljs$core$IFn$_invoke$arity$2(path,new_link_22199) : fn_obj_22209.call(null,path,new_link_22199));


var G__22210 = seq__21926_22200;
var G__22211 = chunk__21928_22201;
var G__22212 = count__21929_22202;
var G__22213 = (i__21930_22203 + (1));
seq__21926_22200 = G__22210;
chunk__21928_22201 = G__22211;
count__21929_22202 = G__22212;
i__21930_22203 = G__22213;
continue;
} else {
var temp__5823__auto___22214__$2 = cljs.core.seq(seq__21926_22200);
if(temp__5823__auto___22214__$2){
var seq__21926_22215__$1 = temp__5823__auto___22214__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21926_22215__$1)){
var c__5694__auto___22216 = cljs.core.chunk_first(seq__21926_22215__$1);
var G__22217 = cljs.core.chunk_rest(seq__21926_22215__$1);
var G__22218 = c__5694__auto___22216;
var G__22219 = cljs.core.count(c__5694__auto___22216);
var G__22220 = (0);
seq__21926_22200 = G__22217;
chunk__21928_22201 = G__22218;
count__21929_22202 = G__22219;
i__21930_22203 = G__22220;
continue;
} else {
var map__21935_22221 = cljs.core.first(seq__21926_22215__$1);
var map__21935_22222__$1 = cljs.core.__destructure_map(map__21935_22221);
var task_22223 = map__21935_22222__$1;
var fn_str_22224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21935_22222__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21935_22222__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22226 = goog.getObjectByName(fn_str_22224,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22225)));

(fn_obj_22226.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22226.cljs$core$IFn$_invoke$arity$2(path,new_link_22199) : fn_obj_22226.call(null,path,new_link_22199));


var G__22227 = cljs.core.next(seq__21926_22215__$1);
var G__22228 = null;
var G__22229 = (0);
var G__22230 = (0);
seq__21926_22200 = G__22227;
chunk__21928_22201 = G__22228;
count__21929_22202 = G__22229;
i__21930_22203 = G__22230;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22197);
});})(seq__21882_22140,chunk__21886_22141,count__21887_22142,i__21888_22143,seq__21714,chunk__21716,count__21717,i__21718,new_link_22199,path_match_22198,node_22197,seq__21882_22191__$1,temp__5823__auto___22190__$1,path,seq__21714__$1,temp__5823__auto__,map__21713,map__21713__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22198], 0));

goog.dom.insertSiblingAfter(new_link_22199,node_22197);


var G__22231 = cljs.core.next(seq__21882_22191__$1);
var G__22232 = null;
var G__22233 = (0);
var G__22234 = (0);
seq__21882_22140 = G__22231;
chunk__21886_22141 = G__22232;
count__21887_22142 = G__22233;
i__21888_22143 = G__22234;
continue;
} else {
var G__22235 = cljs.core.next(seq__21882_22191__$1);
var G__22236 = null;
var G__22237 = (0);
var G__22238 = (0);
seq__21882_22140 = G__22235;
chunk__21886_22141 = G__22236;
count__21887_22142 = G__22237;
i__21888_22143 = G__22238;
continue;
}
} else {
var G__22239 = cljs.core.next(seq__21882_22191__$1);
var G__22240 = null;
var G__22241 = (0);
var G__22242 = (0);
seq__21882_22140 = G__22239;
chunk__21886_22141 = G__22240;
count__21887_22142 = G__22241;
i__21888_22143 = G__22242;
continue;
}
}
} else {
}
}
break;
}


var G__22243 = cljs.core.next(seq__21714__$1);
var G__22244 = null;
var G__22245 = (0);
var G__22246 = (0);
seq__21714 = G__22243;
chunk__21716 = G__22244;
count__21717 = G__22245;
i__21718 = G__22246;
continue;
} else {
var G__22247 = cljs.core.next(seq__21714__$1);
var G__22248 = null;
var G__22249 = (0);
var G__22250 = (0);
seq__21714 = G__22247;
chunk__21716 = G__22248;
count__21717 = G__22249;
i__21718 = G__22250;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),navigator.userAgent,new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21937 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21937) : success.call(null,G__21937));
}catch (e21936){var e = e21936;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21938,success,fail){
var map__21939 = p__21938;
var map__21939__$1 = cljs.core.__destructure_map(map__21939);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21939__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21941 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21941) : success.call(null,G__21941));
}catch (e21940){var e = e21940;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21942,done,error){
var map__21943 = p__21942;
var map__21943__$1 = cljs.core.__destructure_map(map__21943);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21943__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21944,done,error){
var map__21945 = p__21944;
var map__21945__$1 = cljs.core.__destructure_map(map__21945);
var msg = map__21945__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21945__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21945__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21945__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21946){
var map__21947 = p__21946;
var map__21947__$1 = cljs.core.__destructure_map(map__21947);
var src = map__21947__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21947__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21948 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21948) : done.call(null,G__21948));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21949){
var map__21950 = p__21949;
var map__21950__$1 = cljs.core.__destructure_map(map__21950);
var msg__$1 = map__21950__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21950__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21951){var ex = e21951;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21952){
var map__21953 = p__21952;
var map__21953__$1 = cljs.core.__destructure_map(map__21953);
var env = map__21953__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21953__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21954){
var map__21955 = p__21954;
var map__21955__$1 = cljs.core.__destructure_map(map__21955);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21955__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21955__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21956){
var map__21957 = p__21956;
var map__21957__$1 = cljs.core.__destructure_map(map__21957);
var svc = map__21957__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21957__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
