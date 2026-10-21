goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15252 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15252(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15257 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15257(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13786 = coll;
var G__13787 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13786,G__13787) : shadow.dom.lazy_native_coll_seq.call(null,G__13786,G__13787));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13810 = arguments.length;
switch (G__13810) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13816 = arguments.length;
switch (G__13816) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13822 = arguments.length;
switch (G__13822) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13832 = arguments.length;
switch (G__13832) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13841 = arguments.length;
switch (G__13841) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13875 = arguments.length;
switch (G__13875) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13890){if((e13890 instanceof Object)){
var e = e13890;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13890;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13912 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13913 = null;
var count__13914 = (0);
var i__13915 = (0);
while(true){
if((i__13915 < count__13914)){
var el = chunk__13913.cljs$core$IIndexed$_nth$arity$2(null,i__13915);
var handler_15300__$1 = ((function (seq__13912,chunk__13913,count__13914,i__13915,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13912,chunk__13913,count__13914,i__13915,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15300__$1);


var G__15304 = seq__13912;
var G__15305 = chunk__13913;
var G__15306 = count__13914;
var G__15307 = (i__13915 + (1));
seq__13912 = G__15304;
chunk__13913 = G__15305;
count__13914 = G__15306;
i__13915 = G__15307;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13912);
if(temp__5823__auto__){
var seq__13912__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13912__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__13912__$1);
var G__15308 = cljs.core.chunk_rest(seq__13912__$1);
var G__15309 = c__5694__auto__;
var G__15310 = cljs.core.count(c__5694__auto__);
var G__15311 = (0);
seq__13912 = G__15308;
chunk__13913 = G__15309;
count__13914 = G__15310;
i__13915 = G__15311;
continue;
} else {
var el = cljs.core.first(seq__13912__$1);
var handler_15312__$1 = ((function (seq__13912,chunk__13913,count__13914,i__13915,el,seq__13912__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13912,chunk__13913,count__13914,i__13915,el,seq__13912__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15312__$1);


var G__15314 = cljs.core.next(seq__13912__$1);
var G__15315 = null;
var G__15316 = (0);
var G__15317 = (0);
seq__13912 = G__15314;
chunk__13913 = G__15315;
count__13914 = G__15316;
i__13915 = G__15317;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13931 = arguments.length;
switch (G__13931) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13941 = cljs.core.seq(events);
var chunk__13942 = null;
var count__13943 = (0);
var i__13944 = (0);
while(true){
if((i__13944 < count__13943)){
var vec__13970 = chunk__13942.cljs$core$IIndexed$_nth$arity$2(null,i__13944);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13970,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15328 = seq__13941;
var G__15329 = chunk__13942;
var G__15330 = count__13943;
var G__15331 = (i__13944 + (1));
seq__13941 = G__15328;
chunk__13942 = G__15329;
count__13943 = G__15330;
i__13944 = G__15331;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13941);
if(temp__5823__auto__){
var seq__13941__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13941__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__13941__$1);
var G__15334 = cljs.core.chunk_rest(seq__13941__$1);
var G__15335 = c__5694__auto__;
var G__15336 = cljs.core.count(c__5694__auto__);
var G__15337 = (0);
seq__13941 = G__15334;
chunk__13942 = G__15335;
count__13943 = G__15336;
i__13944 = G__15337;
continue;
} else {
var vec__13976 = cljs.core.first(seq__13941__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13976,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13976,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15342 = cljs.core.next(seq__13941__$1);
var G__15343 = null;
var G__15344 = (0);
var G__15345 = (0);
seq__13941 = G__15342;
chunk__13942 = G__15343;
count__13943 = G__15344;
i__13944 = G__15345;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13990 = cljs.core.seq(styles);
var chunk__13992 = null;
var count__13993 = (0);
var i__13994 = (0);
while(true){
if((i__13994 < count__13993)){
var vec__14006 = chunk__13992.cljs$core$IIndexed$_nth$arity$2(null,i__13994);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14006,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14006,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15348 = seq__13990;
var G__15349 = chunk__13992;
var G__15350 = count__13993;
var G__15351 = (i__13994 + (1));
seq__13990 = G__15348;
chunk__13992 = G__15349;
count__13993 = G__15350;
i__13994 = G__15351;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13990);
if(temp__5823__auto__){
var seq__13990__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13990__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__13990__$1);
var G__15353 = cljs.core.chunk_rest(seq__13990__$1);
var G__15354 = c__5694__auto__;
var G__15355 = cljs.core.count(c__5694__auto__);
var G__15356 = (0);
seq__13990 = G__15353;
chunk__13992 = G__15354;
count__13993 = G__15355;
i__13994 = G__15356;
continue;
} else {
var vec__14011 = cljs.core.first(seq__13990__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14011,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15358 = cljs.core.next(seq__13990__$1);
var G__15359 = null;
var G__15360 = (0);
var G__15361 = (0);
seq__13990 = G__15358;
chunk__13992 = G__15359;
count__13993 = G__15360;
i__13994 = G__15361;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14021_15362 = key;
var G__14021_15363__$1 = (((G__14021_15362 instanceof cljs.core.Keyword))?G__14021_15362.fqn:null);
switch (G__14021_15363__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15370 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_15370,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_15370,"aria-");
}
})())){
el.setAttribute(ks_15370,value);
} else {
(el[ks_15370] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14068){
var map__14069 = p__14068;
var map__14069__$1 = cljs.core.__destructure_map(map__14069);
var props = map__14069__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14069__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14070 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14070,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14070,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14070,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14076 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14076,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14076;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14085 = arguments.length;
switch (G__14085) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14105){
var vec__14108 = p__14105;
var seq__14109 = cljs.core.seq(vec__14108);
var first__14110 = cljs.core.first(seq__14109);
var seq__14109__$1 = cljs.core.next(seq__14109);
var nn = first__14110;
var first__14110__$1 = cljs.core.first(seq__14109__$1);
var seq__14109__$2 = cljs.core.next(seq__14109__$1);
var np = first__14110__$1;
var nc = seq__14109__$2;
var node = vec__14108;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14119 = nn;
var G__14120 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14119,G__14120) : create_fn.call(null,G__14119,G__14120));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14123 = nn;
var G__14124 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14123,G__14124) : create_fn.call(null,G__14123,G__14124));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14127 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14127,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14127,(1),null);
var seq__14139_15399 = cljs.core.seq(node_children);
var chunk__14141_15400 = null;
var count__14142_15401 = (0);
var i__14143_15402 = (0);
while(true){
if((i__14143_15402 < count__14142_15401)){
var child_struct_15403 = chunk__14141_15400.cljs$core$IIndexed$_nth$arity$2(null,i__14143_15402);
var children_15404 = shadow.dom.dom_node(child_struct_15403);
if(cljs.core.seq_QMARK_(children_15404)){
var seq__14298_15405 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15404));
var chunk__14300_15406 = null;
var count__14301_15407 = (0);
var i__14302_15408 = (0);
while(true){
if((i__14302_15408 < count__14301_15407)){
var child_15412 = chunk__14300_15406.cljs$core$IIndexed$_nth$arity$2(null,i__14302_15408);
if(cljs.core.truth_(child_15412)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15412);


var G__15413 = seq__14298_15405;
var G__15414 = chunk__14300_15406;
var G__15415 = count__14301_15407;
var G__15416 = (i__14302_15408 + (1));
seq__14298_15405 = G__15413;
chunk__14300_15406 = G__15414;
count__14301_15407 = G__15415;
i__14302_15408 = G__15416;
continue;
} else {
var G__15417 = seq__14298_15405;
var G__15418 = chunk__14300_15406;
var G__15419 = count__14301_15407;
var G__15420 = (i__14302_15408 + (1));
seq__14298_15405 = G__15417;
chunk__14300_15406 = G__15418;
count__14301_15407 = G__15419;
i__14302_15408 = G__15420;
continue;
}
} else {
var temp__5823__auto___15421 = cljs.core.seq(seq__14298_15405);
if(temp__5823__auto___15421){
var seq__14298_15422__$1 = temp__5823__auto___15421;
if(cljs.core.chunked_seq_QMARK_(seq__14298_15422__$1)){
var c__5694__auto___15423 = cljs.core.chunk_first(seq__14298_15422__$1);
var G__15424 = cljs.core.chunk_rest(seq__14298_15422__$1);
var G__15425 = c__5694__auto___15423;
var G__15426 = cljs.core.count(c__5694__auto___15423);
var G__15427 = (0);
seq__14298_15405 = G__15424;
chunk__14300_15406 = G__15425;
count__14301_15407 = G__15426;
i__14302_15408 = G__15427;
continue;
} else {
var child_15428 = cljs.core.first(seq__14298_15422__$1);
if(cljs.core.truth_(child_15428)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15428);


var G__15433 = cljs.core.next(seq__14298_15422__$1);
var G__15434 = null;
var G__15435 = (0);
var G__15436 = (0);
seq__14298_15405 = G__15433;
chunk__14300_15406 = G__15434;
count__14301_15407 = G__15435;
i__14302_15408 = G__15436;
continue;
} else {
var G__15437 = cljs.core.next(seq__14298_15422__$1);
var G__15438 = null;
var G__15439 = (0);
var G__15440 = (0);
seq__14298_15405 = G__15437;
chunk__14300_15406 = G__15438;
count__14301_15407 = G__15439;
i__14302_15408 = G__15440;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15404);
}


var G__15441 = seq__14139_15399;
var G__15442 = chunk__14141_15400;
var G__15443 = count__14142_15401;
var G__15444 = (i__14143_15402 + (1));
seq__14139_15399 = G__15441;
chunk__14141_15400 = G__15442;
count__14142_15401 = G__15443;
i__14143_15402 = G__15444;
continue;
} else {
var temp__5823__auto___15445 = cljs.core.seq(seq__14139_15399);
if(temp__5823__auto___15445){
var seq__14139_15446__$1 = temp__5823__auto___15445;
if(cljs.core.chunked_seq_QMARK_(seq__14139_15446__$1)){
var c__5694__auto___15450 = cljs.core.chunk_first(seq__14139_15446__$1);
var G__15451 = cljs.core.chunk_rest(seq__14139_15446__$1);
var G__15452 = c__5694__auto___15450;
var G__15453 = cljs.core.count(c__5694__auto___15450);
var G__15454 = (0);
seq__14139_15399 = G__15451;
chunk__14141_15400 = G__15452;
count__14142_15401 = G__15453;
i__14143_15402 = G__15454;
continue;
} else {
var child_struct_15456 = cljs.core.first(seq__14139_15446__$1);
var children_15457 = shadow.dom.dom_node(child_struct_15456);
if(cljs.core.seq_QMARK_(children_15457)){
var seq__14391_15460 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15457));
var chunk__14393_15461 = null;
var count__14394_15462 = (0);
var i__14395_15463 = (0);
while(true){
if((i__14395_15463 < count__14394_15462)){
var child_15465 = chunk__14393_15461.cljs$core$IIndexed$_nth$arity$2(null,i__14395_15463);
if(cljs.core.truth_(child_15465)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15465);


var G__15466 = seq__14391_15460;
var G__15467 = chunk__14393_15461;
var G__15468 = count__14394_15462;
var G__15469 = (i__14395_15463 + (1));
seq__14391_15460 = G__15466;
chunk__14393_15461 = G__15467;
count__14394_15462 = G__15468;
i__14395_15463 = G__15469;
continue;
} else {
var G__15470 = seq__14391_15460;
var G__15471 = chunk__14393_15461;
var G__15472 = count__14394_15462;
var G__15473 = (i__14395_15463 + (1));
seq__14391_15460 = G__15470;
chunk__14393_15461 = G__15471;
count__14394_15462 = G__15472;
i__14395_15463 = G__15473;
continue;
}
} else {
var temp__5823__auto___15474__$1 = cljs.core.seq(seq__14391_15460);
if(temp__5823__auto___15474__$1){
var seq__14391_15481__$1 = temp__5823__auto___15474__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14391_15481__$1)){
var c__5694__auto___15483 = cljs.core.chunk_first(seq__14391_15481__$1);
var G__15484 = cljs.core.chunk_rest(seq__14391_15481__$1);
var G__15485 = c__5694__auto___15483;
var G__15486 = cljs.core.count(c__5694__auto___15483);
var G__15487 = (0);
seq__14391_15460 = G__15484;
chunk__14393_15461 = G__15485;
count__14394_15462 = G__15486;
i__14395_15463 = G__15487;
continue;
} else {
var child_15488 = cljs.core.first(seq__14391_15481__$1);
if(cljs.core.truth_(child_15488)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15488);


var G__15489 = cljs.core.next(seq__14391_15481__$1);
var G__15490 = null;
var G__15491 = (0);
var G__15492 = (0);
seq__14391_15460 = G__15489;
chunk__14393_15461 = G__15490;
count__14394_15462 = G__15491;
i__14395_15463 = G__15492;
continue;
} else {
var G__15494 = cljs.core.next(seq__14391_15481__$1);
var G__15495 = null;
var G__15496 = (0);
var G__15497 = (0);
seq__14391_15460 = G__15494;
chunk__14393_15461 = G__15495;
count__14394_15462 = G__15496;
i__14395_15463 = G__15497;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15457);
}


var G__15498 = cljs.core.next(seq__14139_15446__$1);
var G__15499 = null;
var G__15500 = (0);
var G__15501 = (0);
seq__14139_15399 = G__15498;
chunk__14141_15400 = G__15499;
count__14142_15401 = G__15500;
i__14143_15402 = G__15501;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14451 = cljs.core.seq(node);
var chunk__14452 = null;
var count__14453 = (0);
var i__14454 = (0);
while(true){
if((i__14454 < count__14453)){
var n = chunk__14452.cljs$core$IIndexed$_nth$arity$2(null,i__14454);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15516 = seq__14451;
var G__15517 = chunk__14452;
var G__15518 = count__14453;
var G__15519 = (i__14454 + (1));
seq__14451 = G__15516;
chunk__14452 = G__15517;
count__14453 = G__15518;
i__14454 = G__15519;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14451);
if(temp__5823__auto__){
var seq__14451__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14451__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__14451__$1);
var G__15522 = cljs.core.chunk_rest(seq__14451__$1);
var G__15523 = c__5694__auto__;
var G__15524 = cljs.core.count(c__5694__auto__);
var G__15525 = (0);
seq__14451 = G__15522;
chunk__14452 = G__15523;
count__14453 = G__15524;
i__14454 = G__15525;
continue;
} else {
var n = cljs.core.first(seq__14451__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15527 = cljs.core.next(seq__14451__$1);
var G__15528 = null;
var G__15529 = (0);
var G__15530 = (0);
seq__14451 = G__15527;
chunk__14452 = G__15528;
count__14453 = G__15529;
i__14454 = G__15530;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14476 = arguments.length;
switch (G__14476) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14520 = arguments.length;
switch (G__14520) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14544 = arguments.length;
switch (G__14544) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___15577 = arguments.length;
var i__5898__auto___15578 = (0);
while(true){
if((i__5898__auto___15578 < len__5897__auto___15577)){
args__5903__auto__.push((arguments[i__5898__auto___15578]));

var G__15581 = (i__5898__auto___15578 + (1));
i__5898__auto___15578 = G__15581;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14637_15584 = cljs.core.seq(nodes);
var chunk__14638_15585 = null;
var count__14639_15586 = (0);
var i__14640_15587 = (0);
while(true){
if((i__14640_15587 < count__14639_15586)){
var node_15589 = chunk__14638_15585.cljs$core$IIndexed$_nth$arity$2(null,i__14640_15587);
fragment.appendChild(shadow.dom._to_dom(node_15589));


var G__15591 = seq__14637_15584;
var G__15592 = chunk__14638_15585;
var G__15593 = count__14639_15586;
var G__15594 = (i__14640_15587 + (1));
seq__14637_15584 = G__15591;
chunk__14638_15585 = G__15592;
count__14639_15586 = G__15593;
i__14640_15587 = G__15594;
continue;
} else {
var temp__5823__auto___15595 = cljs.core.seq(seq__14637_15584);
if(temp__5823__auto___15595){
var seq__14637_15596__$1 = temp__5823__auto___15595;
if(cljs.core.chunked_seq_QMARK_(seq__14637_15596__$1)){
var c__5694__auto___15597 = cljs.core.chunk_first(seq__14637_15596__$1);
var G__15598 = cljs.core.chunk_rest(seq__14637_15596__$1);
var G__15599 = c__5694__auto___15597;
var G__15600 = cljs.core.count(c__5694__auto___15597);
var G__15601 = (0);
seq__14637_15584 = G__15598;
chunk__14638_15585 = G__15599;
count__14639_15586 = G__15600;
i__14640_15587 = G__15601;
continue;
} else {
var node_15603 = cljs.core.first(seq__14637_15596__$1);
fragment.appendChild(shadow.dom._to_dom(node_15603));


var G__15605 = cljs.core.next(seq__14637_15596__$1);
var G__15606 = null;
var G__15607 = (0);
var G__15608 = (0);
seq__14637_15584 = G__15605;
chunk__14638_15585 = G__15606;
count__14639_15586 = G__15607;
i__14640_15587 = G__15608;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14614){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14614));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14681_15612 = cljs.core.seq(scripts);
var chunk__14682_15613 = null;
var count__14683_15614 = (0);
var i__14684_15615 = (0);
while(true){
if((i__14684_15615 < count__14683_15614)){
var vec__14699_15616 = chunk__14682_15613.cljs$core$IIndexed$_nth$arity$2(null,i__14684_15615);
var script_tag_15617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14699_15616,(0),null);
var script_body_15618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14699_15616,(1),null);
eval(script_body_15618);


var G__15619 = seq__14681_15612;
var G__15620 = chunk__14682_15613;
var G__15621 = count__14683_15614;
var G__15622 = (i__14684_15615 + (1));
seq__14681_15612 = G__15619;
chunk__14682_15613 = G__15620;
count__14683_15614 = G__15621;
i__14684_15615 = G__15622;
continue;
} else {
var temp__5823__auto___15624 = cljs.core.seq(seq__14681_15612);
if(temp__5823__auto___15624){
var seq__14681_15625__$1 = temp__5823__auto___15624;
if(cljs.core.chunked_seq_QMARK_(seq__14681_15625__$1)){
var c__5694__auto___15626 = cljs.core.chunk_first(seq__14681_15625__$1);
var G__15627 = cljs.core.chunk_rest(seq__14681_15625__$1);
var G__15628 = c__5694__auto___15626;
var G__15629 = cljs.core.count(c__5694__auto___15626);
var G__15630 = (0);
seq__14681_15612 = G__15627;
chunk__14682_15613 = G__15628;
count__14683_15614 = G__15629;
i__14684_15615 = G__15630;
continue;
} else {
var vec__14708_15631 = cljs.core.first(seq__14681_15625__$1);
var script_tag_15632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14708_15631,(0),null);
var script_body_15633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14708_15631,(1),null);
eval(script_body_15633);


var G__15636 = cljs.core.next(seq__14681_15625__$1);
var G__15637 = null;
var G__15638 = (0);
var G__15639 = (0);
seq__14681_15612 = G__15636;
chunk__14682_15613 = G__15637;
count__14683_15614 = G__15638;
i__14684_15615 = G__15639;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14718){
var vec__14719 = p__14718;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14719,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14719,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14735 = arguments.length;
switch (G__14735) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14769 = cljs.core.seq(style_keys);
var chunk__14770 = null;
var count__14771 = (0);
var i__14772 = (0);
while(true){
if((i__14772 < count__14771)){
var it = chunk__14770.cljs$core$IIndexed$_nth$arity$2(null,i__14772);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15659 = seq__14769;
var G__15660 = chunk__14770;
var G__15661 = count__14771;
var G__15662 = (i__14772 + (1));
seq__14769 = G__15659;
chunk__14770 = G__15660;
count__14771 = G__15661;
i__14772 = G__15662;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14769);
if(temp__5823__auto__){
var seq__14769__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14769__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__14769__$1);
var G__15664 = cljs.core.chunk_rest(seq__14769__$1);
var G__15665 = c__5694__auto__;
var G__15666 = cljs.core.count(c__5694__auto__);
var G__15667 = (0);
seq__14769 = G__15664;
chunk__14770 = G__15665;
count__14771 = G__15666;
i__14772 = G__15667;
continue;
} else {
var it = cljs.core.first(seq__14769__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15671 = cljs.core.next(seq__14769__$1);
var G__15672 = null;
var G__15673 = (0);
var G__15674 = (0);
seq__14769 = G__15671;
chunk__14770 = G__15672;
count__14771 = G__15673;
i__14772 = G__15674;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k14804,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__14864 = k14804;
var G__14864__$1 = (((G__14864 instanceof cljs.core.Keyword))?G__14864.fqn:null);
switch (G__14864__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14804,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__14868){
var vec__14869 = p__14868;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14869,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14869,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14803){
var self__ = this;
var G__14803__$1 = this;
return (new cljs.core.RecordIter((0),G__14803__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14805,other14806){
var self__ = this;
var this14805__$1 = this;
return (((!((other14806 == null)))) && ((((this14805__$1.constructor === other14806.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14805__$1.x,other14806.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14805__$1.y,other14806.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14805__$1.__extmap,other14806.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k14804){
var self__ = this;
var this__5476__auto____$1 = this;
var G__14919 = k14804;
var G__14919__$1 = (((G__14919 instanceof cljs.core.Keyword))?G__14919.fqn:null);
switch (G__14919__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14804);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__14803){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__14928 = cljs.core.keyword_identical_QMARK_;
var expr__14929 = k__5478__auto__;
if(cljs.core.truth_((pred__14928.cljs$core$IFn$_invoke$arity$2 ? pred__14928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14929) : pred__14928.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14929)))){
return (new shadow.dom.Coordinate(G__14803,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14928.cljs$core$IFn$_invoke$arity$2 ? pred__14928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14929) : pred__14928.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14929)))){
return (new shadow.dom.Coordinate(self__.x,G__14803,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__14803),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__14803){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14803,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14855){
var extmap__5511__auto__ = (function (){var G__14948 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14855,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14855)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14948);
} else {
return G__14948;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14855),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14855),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k14982,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__14997 = k14982;
var G__14997__$1 = (((G__14997 instanceof cljs.core.Keyword))?G__14997.fqn:null);
switch (G__14997__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14982,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__15000){
var vec__15001 = p__15000;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14981){
var self__ = this;
var G__14981__$1 = this;
return (new cljs.core.RecordIter((0),G__14981__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14984,other14985){
var self__ = this;
var this14984__$1 = this;
return (((!((other14985 == null)))) && ((((this14984__$1.constructor === other14985.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14984__$1.w,other14985.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14984__$1.h,other14985.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14984__$1.__extmap,other14985.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k14982){
var self__ = this;
var this__5476__auto____$1 = this;
var G__15024 = k14982;
var G__15024__$1 = (((G__15024 instanceof cljs.core.Keyword))?G__15024.fqn:null);
switch (G__15024__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14982);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__14981){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__15028 = cljs.core.keyword_identical_QMARK_;
var expr__15029 = k__5478__auto__;
if(cljs.core.truth_((pred__15028.cljs$core$IFn$_invoke$arity$2 ? pred__15028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15029) : pred__15028.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15029)))){
return (new shadow.dom.Size(G__14981,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15028.cljs$core$IFn$_invoke$arity$2 ? pred__15028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15029) : pred__15028.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15029)))){
return (new shadow.dom.Size(self__.w,G__14981,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__14981),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__14981){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14981,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14994){
var extmap__5511__auto__ = (function (){var G__15046 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14994,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14994)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15046);
} else {
return G__15046;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14994),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14994),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__15833 = (i + (1));
var G__15834 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15833;
ret = G__15834;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15063){
var vec__15064 = p__15063;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15064,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15064,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15074 = arguments.length;
switch (G__15074) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15863 = ps;
var G__15864 = (i + (1));
el__$1 = G__15863;
i = G__15864;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15099 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15099,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15099,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15099,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15103_15885 = cljs.core.seq(props);
var chunk__15104_15886 = null;
var count__15105_15887 = (0);
var i__15106_15888 = (0);
while(true){
if((i__15106_15888 < count__15105_15887)){
var vec__15118_15894 = chunk__15104_15886.cljs$core$IIndexed$_nth$arity$2(null,i__15106_15888);
var k_15895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15118_15894,(0),null);
var v_15896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15118_15894,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_15895);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15895),v_15896);


var G__15904 = seq__15103_15885;
var G__15905 = chunk__15104_15886;
var G__15906 = count__15105_15887;
var G__15907 = (i__15106_15888 + (1));
seq__15103_15885 = G__15904;
chunk__15104_15886 = G__15905;
count__15105_15887 = G__15906;
i__15106_15888 = G__15907;
continue;
} else {
var temp__5823__auto___15908 = cljs.core.seq(seq__15103_15885);
if(temp__5823__auto___15908){
var seq__15103_15909__$1 = temp__5823__auto___15908;
if(cljs.core.chunked_seq_QMARK_(seq__15103_15909__$1)){
var c__5694__auto___15910 = cljs.core.chunk_first(seq__15103_15909__$1);
var G__15911 = cljs.core.chunk_rest(seq__15103_15909__$1);
var G__15912 = c__5694__auto___15910;
var G__15913 = cljs.core.count(c__5694__auto___15910);
var G__15914 = (0);
seq__15103_15885 = G__15911;
chunk__15104_15886 = G__15912;
count__15105_15887 = G__15913;
i__15106_15888 = G__15914;
continue;
} else {
var vec__15128_15916 = cljs.core.first(seq__15103_15909__$1);
var k_15917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15128_15916,(0),null);
var v_15918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15128_15916,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_15917);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15917),v_15918);


var G__15930 = cljs.core.next(seq__15103_15909__$1);
var G__15931 = null;
var G__15932 = (0);
var G__15933 = (0);
seq__15103_15885 = G__15930;
chunk__15104_15886 = G__15931;
count__15105_15887 = G__15932;
i__15106_15888 = G__15933;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15142 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15142,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15142,(1),null);
var seq__15145_15942 = cljs.core.seq(node_children);
var chunk__15147_15943 = null;
var count__15148_15944 = (0);
var i__15149_15945 = (0);
while(true){
if((i__15149_15945 < count__15148_15944)){
var child_struct_15950 = chunk__15147_15943.cljs$core$IIndexed$_nth$arity$2(null,i__15149_15945);
if((!((child_struct_15950 == null)))){
if(typeof child_struct_15950 === 'string'){
var text_15954 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15954)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_15950)));
} else {
var children_15955 = shadow.dom.svg_node(child_struct_15950);
if(cljs.core.seq_QMARK_(children_15955)){
var seq__15196_15957 = cljs.core.seq(children_15955);
var chunk__15198_15958 = null;
var count__15199_15959 = (0);
var i__15200_15960 = (0);
while(true){
if((i__15200_15960 < count__15199_15959)){
var child_15961 = chunk__15198_15958.cljs$core$IIndexed$_nth$arity$2(null,i__15200_15960);
if(cljs.core.truth_(child_15961)){
node.appendChild(child_15961);


var G__15962 = seq__15196_15957;
var G__15963 = chunk__15198_15958;
var G__15964 = count__15199_15959;
var G__15965 = (i__15200_15960 + (1));
seq__15196_15957 = G__15962;
chunk__15198_15958 = G__15963;
count__15199_15959 = G__15964;
i__15200_15960 = G__15965;
continue;
} else {
var G__15966 = seq__15196_15957;
var G__15967 = chunk__15198_15958;
var G__15968 = count__15199_15959;
var G__15969 = (i__15200_15960 + (1));
seq__15196_15957 = G__15966;
chunk__15198_15958 = G__15967;
count__15199_15959 = G__15968;
i__15200_15960 = G__15969;
continue;
}
} else {
var temp__5823__auto___15970 = cljs.core.seq(seq__15196_15957);
if(temp__5823__auto___15970){
var seq__15196_15973__$1 = temp__5823__auto___15970;
if(cljs.core.chunked_seq_QMARK_(seq__15196_15973__$1)){
var c__5694__auto___15974 = cljs.core.chunk_first(seq__15196_15973__$1);
var G__15975 = cljs.core.chunk_rest(seq__15196_15973__$1);
var G__15976 = c__5694__auto___15974;
var G__15977 = cljs.core.count(c__5694__auto___15974);
var G__15978 = (0);
seq__15196_15957 = G__15975;
chunk__15198_15958 = G__15976;
count__15199_15959 = G__15977;
i__15200_15960 = G__15978;
continue;
} else {
var child_15979 = cljs.core.first(seq__15196_15973__$1);
if(cljs.core.truth_(child_15979)){
node.appendChild(child_15979);


var G__15980 = cljs.core.next(seq__15196_15973__$1);
var G__15981 = null;
var G__15982 = (0);
var G__15983 = (0);
seq__15196_15957 = G__15980;
chunk__15198_15958 = G__15981;
count__15199_15959 = G__15982;
i__15200_15960 = G__15983;
continue;
} else {
var G__15984 = cljs.core.next(seq__15196_15973__$1);
var G__15985 = null;
var G__15986 = (0);
var G__15987 = (0);
seq__15196_15957 = G__15984;
chunk__15198_15958 = G__15985;
count__15199_15959 = G__15986;
i__15200_15960 = G__15987;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15955);
}
}


var G__15988 = seq__15145_15942;
var G__15989 = chunk__15147_15943;
var G__15990 = count__15148_15944;
var G__15991 = (i__15149_15945 + (1));
seq__15145_15942 = G__15988;
chunk__15147_15943 = G__15989;
count__15148_15944 = G__15990;
i__15149_15945 = G__15991;
continue;
} else {
var G__15993 = seq__15145_15942;
var G__15994 = chunk__15147_15943;
var G__15995 = count__15148_15944;
var G__15996 = (i__15149_15945 + (1));
seq__15145_15942 = G__15993;
chunk__15147_15943 = G__15994;
count__15148_15944 = G__15995;
i__15149_15945 = G__15996;
continue;
}
} else {
var temp__5823__auto___15999 = cljs.core.seq(seq__15145_15942);
if(temp__5823__auto___15999){
var seq__15145_16005__$1 = temp__5823__auto___15999;
if(cljs.core.chunked_seq_QMARK_(seq__15145_16005__$1)){
var c__5694__auto___16006 = cljs.core.chunk_first(seq__15145_16005__$1);
var G__16007 = cljs.core.chunk_rest(seq__15145_16005__$1);
var G__16008 = c__5694__auto___16006;
var G__16009 = cljs.core.count(c__5694__auto___16006);
var G__16010 = (0);
seq__15145_15942 = G__16007;
chunk__15147_15943 = G__16008;
count__15148_15944 = G__16009;
i__15149_15945 = G__16010;
continue;
} else {
var child_struct_16012 = cljs.core.first(seq__15145_16005__$1);
if((!((child_struct_16012 == null)))){
if(typeof child_struct_16012 === 'string'){
var text_16016 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16016)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16012)));
} else {
var children_16017 = shadow.dom.svg_node(child_struct_16012);
if(cljs.core.seq_QMARK_(children_16017)){
var seq__15211_16021 = cljs.core.seq(children_16017);
var chunk__15213_16022 = null;
var count__15214_16023 = (0);
var i__15215_16024 = (0);
while(true){
if((i__15215_16024 < count__15214_16023)){
var child_16026 = chunk__15213_16022.cljs$core$IIndexed$_nth$arity$2(null,i__15215_16024);
if(cljs.core.truth_(child_16026)){
node.appendChild(child_16026);


var G__16029 = seq__15211_16021;
var G__16030 = chunk__15213_16022;
var G__16031 = count__15214_16023;
var G__16032 = (i__15215_16024 + (1));
seq__15211_16021 = G__16029;
chunk__15213_16022 = G__16030;
count__15214_16023 = G__16031;
i__15215_16024 = G__16032;
continue;
} else {
var G__16033 = seq__15211_16021;
var G__16034 = chunk__15213_16022;
var G__16035 = count__15214_16023;
var G__16036 = (i__15215_16024 + (1));
seq__15211_16021 = G__16033;
chunk__15213_16022 = G__16034;
count__15214_16023 = G__16035;
i__15215_16024 = G__16036;
continue;
}
} else {
var temp__5823__auto___16049__$1 = cljs.core.seq(seq__15211_16021);
if(temp__5823__auto___16049__$1){
var seq__15211_16051__$1 = temp__5823__auto___16049__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15211_16051__$1)){
var c__5694__auto___16053 = cljs.core.chunk_first(seq__15211_16051__$1);
var G__16054 = cljs.core.chunk_rest(seq__15211_16051__$1);
var G__16055 = c__5694__auto___16053;
var G__16056 = cljs.core.count(c__5694__auto___16053);
var G__16057 = (0);
seq__15211_16021 = G__16054;
chunk__15213_16022 = G__16055;
count__15214_16023 = G__16056;
i__15215_16024 = G__16057;
continue;
} else {
var child_16058 = cljs.core.first(seq__15211_16051__$1);
if(cljs.core.truth_(child_16058)){
node.appendChild(child_16058);


var G__16059 = cljs.core.next(seq__15211_16051__$1);
var G__16060 = null;
var G__16061 = (0);
var G__16062 = (0);
seq__15211_16021 = G__16059;
chunk__15213_16022 = G__16060;
count__15214_16023 = G__16061;
i__15215_16024 = G__16062;
continue;
} else {
var G__16063 = cljs.core.next(seq__15211_16051__$1);
var G__16064 = null;
var G__16065 = (0);
var G__16066 = (0);
seq__15211_16021 = G__16063;
chunk__15213_16022 = G__16064;
count__15214_16023 = G__16065;
i__15215_16024 = G__16066;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16017);
}
}


var G__16067 = cljs.core.next(seq__15145_16005__$1);
var G__16068 = null;
var G__16069 = (0);
var G__16070 = (0);
seq__15145_15942 = G__16067;
chunk__15147_15943 = G__16068;
count__15148_15944 = G__16069;
i__15149_15945 = G__16070;
continue;
} else {
var G__16074 = cljs.core.next(seq__15145_16005__$1);
var G__16075 = null;
var G__16076 = (0);
var G__16077 = (0);
seq__15145_15942 = G__16074;
chunk__15147_15943 = G__16075;
count__15148_15944 = G__16076;
i__15149_15945 = G__16077;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___16093 = arguments.length;
var i__5898__auto___16094 = (0);
while(true){
if((i__5898__auto___16094 < len__5897__auto___16093)){
args__5903__auto__.push((arguments[i__5898__auto___16094]));

var G__16095 = (i__5898__auto___16094 + (1));
i__5898__auto___16094 = G__16095;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15237){
var G__15238 = cljs.core.first(seq15237);
var seq15237__$1 = cljs.core.next(seq15237);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15238,seq15237__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
