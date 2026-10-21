goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15078 = (function (f,blockable,meta15079){
this.f = f;
this.blockable = blockable;
this.meta15079 = meta15079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15080,meta15079__$1){
var self__ = this;
var _15080__$1 = this;
return (new cljs.core.async.t_cljs$core$async15078(self__.f,self__.blockable,meta15079__$1));
}));

(cljs.core.async.t_cljs$core$async15078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15080){
var self__ = this;
var _15080__$1 = this;
return self__.meta15079;
}));

(cljs.core.async.t_cljs$core$async15078.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15078.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15079","meta15079",1162144222,null)], null);
}));

(cljs.core.async.t_cljs$core$async15078.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15078");

(cljs.core.async.t_cljs$core$async15078.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15078");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15078.
 */
cljs.core.async.__GT_t_cljs$core$async15078 = (function cljs$core$async$__GT_t_cljs$core$async15078(f,blockable,meta15079){
return (new cljs.core.async.t_cljs$core$async15078(f,blockable,meta15079));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15075 = arguments.length;
switch (G__15075) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15078(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15097 = arguments.length;
switch (G__15097) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15123 = arguments.length;
switch (G__15123) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15134 = arguments.length;
switch (G__15134) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19259 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19259) : fn1.call(null,val_19259));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19259) : fn1.call(null,val_19259));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15181 = arguments.length;
switch (G__15181) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___19263 = n;
var x_19264 = (0);
while(true){
if((x_19264 < n__5762__auto___19263)){
(a[x_19264] = x_19264);

var G__19265 = (x_19264 + (1));
x_19264 = G__19265;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15202 = (function (flag,meta15203){
this.flag = flag;
this.meta15203 = meta15203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15204,meta15203__$1){
var self__ = this;
var _15204__$1 = this;
return (new cljs.core.async.t_cljs$core$async15202(self__.flag,meta15203__$1));
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15204){
var self__ = this;
var _15204__$1 = this;
return self__.meta15203;
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15203","meta15203",552191098,null)], null);
}));

(cljs.core.async.t_cljs$core$async15202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15202");

(cljs.core.async.t_cljs$core$async15202.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15202.
 */
cljs.core.async.__GT_t_cljs$core$async15202 = (function cljs$core$async$__GT_t_cljs$core$async15202(flag,meta15203){
return (new cljs.core.async.t_cljs$core$async15202(flag,meta15203));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15202(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15217 = (function (flag,cb,meta15218){
this.flag = flag;
this.cb = cb;
this.meta15218 = meta15218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15219,meta15218__$1){
var self__ = this;
var _15219__$1 = this;
return (new cljs.core.async.t_cljs$core$async15217(self__.flag,self__.cb,meta15218__$1));
}));

(cljs.core.async.t_cljs$core$async15217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15219){
var self__ = this;
var _15219__$1 = this;
return self__.meta15218;
}));

(cljs.core.async.t_cljs$core$async15217.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15217.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15217.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15217.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15218","meta15218",1344099804,null)], null);
}));

(cljs.core.async.t_cljs$core$async15217.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15217");

(cljs.core.async.t_cljs$core$async15217.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15217");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15217.
 */
cljs.core.async.__GT_t_cljs$core$async15217 = (function cljs$core$async$__GT_t_cljs$core$async15217(flag,cb,meta15218){
return (new cljs.core.async.t_cljs$core$async15217(flag,cb,meta15218));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15217(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_19276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_19276)){
if((!(((port_19276.cljs$core$IFn$_invoke$arity$1 ? port_19276.cljs$core$IFn$_invoke$arity$1((1)) : port_19276.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__19277 = (i + (1));
i = G__19277;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15233_SHARP_){
var G__15242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15233_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15242) : fret.call(null,G__15242));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15235_SHARP_){
var G__15243 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15235_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15243) : fret.call(null,G__15243));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19279 = (i + (1));
i = G__19279;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___19286 = arguments.length;
var i__5898__auto___19287 = (0);
while(true){
if((i__5898__auto___19287 < len__5897__auto___19286)){
args__5903__auto__.push((arguments[i__5898__auto___19287]));

var G__19292 = (i__5898__auto___19287 + (1));
i__5898__auto___19287 = G__19292;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15301){
var map__15302 = p__15301;
var map__15302__$1 = cljs.core.__destructure_map(map__15302);
var opts = map__15302__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15253){
var G__15254 = cljs.core.first(seq15253);
var seq15253__$1 = cljs.core.next(seq15253);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15254,seq15253__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15333 = arguments.length;
switch (G__15333) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14924__auto___19302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_15580){
var state_val_15582 = (state_15580[(1)]);
if((state_val_15582 === (7))){
var inst_15550 = (state_15580[(2)]);
var state_15580__$1 = state_15580;
var statearr_15644_19306 = state_15580__$1;
(statearr_15644_19306[(2)] = inst_15550);

(statearr_15644_19306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (1))){
var state_15580__$1 = state_15580;
var statearr_15650_19308 = state_15580__$1;
(statearr_15650_19308[(2)] = null);

(statearr_15650_19308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (4))){
var inst_15459 = (state_15580[(7)]);
var inst_15459__$1 = (state_15580[(2)]);
var inst_15511 = (inst_15459__$1 == null);
var state_15580__$1 = (function (){var statearr_15655 = state_15580;
(statearr_15655[(7)] = inst_15459__$1);

return statearr_15655;
})();
if(cljs.core.truth_(inst_15511)){
var statearr_15656_19313 = state_15580__$1;
(statearr_15656_19313[(1)] = (5));

} else {
var statearr_15658_19314 = state_15580__$1;
(statearr_15658_19314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (13))){
var state_15580__$1 = state_15580;
var statearr_15677_19315 = state_15580__$1;
(statearr_15677_19315[(2)] = null);

(statearr_15677_19315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (6))){
var inst_15459 = (state_15580[(7)]);
var state_15580__$1 = state_15580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15580__$1,(11),to,inst_15459);
} else {
if((state_val_15582 === (3))){
var inst_15554 = (state_15580[(2)]);
var state_15580__$1 = state_15580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15580__$1,inst_15554);
} else {
if((state_val_15582 === (12))){
var state_15580__$1 = state_15580;
var statearr_15687_19317 = state_15580__$1;
(statearr_15687_19317[(2)] = null);

(statearr_15687_19317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (2))){
var state_15580__$1 = state_15580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15580__$1,(4),from);
} else {
if((state_val_15582 === (11))){
var inst_15540 = (state_15580[(2)]);
var state_15580__$1 = state_15580;
if(cljs.core.truth_(inst_15540)){
var statearr_15691_19323 = state_15580__$1;
(statearr_15691_19323[(1)] = (12));

} else {
var statearr_15692_19325 = state_15580__$1;
(statearr_15692_19325[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (9))){
var state_15580__$1 = state_15580;
var statearr_15693_19326 = state_15580__$1;
(statearr_15693_19326[(2)] = null);

(statearr_15693_19326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (5))){
var state_15580__$1 = state_15580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15695_19327 = state_15580__$1;
(statearr_15695_19327[(1)] = (8));

} else {
var statearr_15696_19328 = state_15580__$1;
(statearr_15696_19328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (14))){
var inst_15548 = (state_15580[(2)]);
var state_15580__$1 = state_15580;
var statearr_15700_19330 = state_15580__$1;
(statearr_15700_19330[(2)] = inst_15548);

(statearr_15700_19330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (10))){
var inst_15533 = (state_15580[(2)]);
var state_15580__$1 = state_15580;
var statearr_15701_19331 = state_15580__$1;
(statearr_15701_19331[(2)] = inst_15533);

(statearr_15701_19331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15582 === (8))){
var inst_15521 = cljs.core.async.close_BANG_(to);
var state_15580__$1 = state_15580;
var statearr_15704_19334 = state_15580__$1;
(statearr_15704_19334[(2)] = inst_15521);

(statearr_15704_19334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13723__auto__ = null;
var cljs$core$async$state_machine__13723__auto____0 = (function (){
var statearr_15709 = [null,null,null,null,null,null,null,null];
(statearr_15709[(0)] = cljs$core$async$state_machine__13723__auto__);

(statearr_15709[(1)] = (1));

return statearr_15709;
});
var cljs$core$async$state_machine__13723__auto____1 = (function (state_15580){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_15580);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e15711){var ex__13726__auto__ = e15711;
var statearr_15712_19337 = state_15580;
(statearr_15712_19337[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_15580[(4)]))){
var statearr_15713_19338 = state_15580;
(statearr_15713_19338[(1)] = cljs.core.first((state_15580[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19339 = state_15580;
state_15580 = G__19339;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$state_machine__13723__auto__ = function(state_15580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13723__auto____1.call(this,state_15580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13723__auto____0;
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13723__auto____1;
return cljs$core$async$state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_15718 = f__14925__auto__();
(statearr_15718[(6)] = c__14924__auto___19302);

return statearr_15718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15733){
var vec__15734 = p__15733;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15734,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15734,(1),null);
var job = vec__15734;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14924__auto___19340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_15754){
var state_val_15755 = (state_15754[(1)]);
if((state_val_15755 === (1))){
var state_15754__$1 = state_15754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15754__$1,(2),res,v);
} else {
if((state_val_15755 === (2))){
var inst_15750 = (state_15754[(2)]);
var inst_15752 = cljs.core.async.close_BANG_(res);
var state_15754__$1 = (function (){var statearr_15767 = state_15754;
(statearr_15767[(7)] = inst_15750);

return statearr_15767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15754__$1,inst_15752);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0 = (function (){
var statearr_15777 = [null,null,null,null,null,null,null,null];
(statearr_15777[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__);

(statearr_15777[(1)] = (1));

return statearr_15777;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1 = (function (state_15754){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_15754);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e15780){var ex__13726__auto__ = e15780;
var statearr_15781_19344 = state_15754;
(statearr_15781_19344[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_15754[(4)]))){
var statearr_15783_19346 = state_15754;
(statearr_15783_19346[(1)] = cljs.core.first((state_15754[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19348 = state_15754;
state_15754 = G__19348;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__ = function(state_15754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1.call(this,state_15754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_15791 = f__14925__auto__();
(statearr_15791[(6)] = c__14924__auto___19340);

return statearr_15791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15803){
var vec__15805 = p__15803;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15805,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15805,(1),null);
var job = vec__15805;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___19360 = n;
var __19361 = (0);
while(true){
if((__19361 < n__5762__auto___19360)){
var G__15814_19362 = type;
var G__15814_19363__$1 = (((G__15814_19362 instanceof cljs.core.Keyword))?G__15814_19362.fqn:null);
switch (G__15814_19363__$1) {
case "compute":
var c__14924__auto___19365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19361,c__14924__auto___19365,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async){
return (function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = ((function (__19361,c__14924__auto___19365,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async){
return (function (state_15831){
var state_val_15832 = (state_15831[(1)]);
if((state_val_15832 === (1))){
var state_15831__$1 = state_15831;
var statearr_15843_19371 = state_15831__$1;
(statearr_15843_19371[(2)] = null);

(statearr_15843_19371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15832 === (2))){
var state_15831__$1 = state_15831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15831__$1,(4),jobs);
} else {
if((state_val_15832 === (3))){
var inst_15829 = (state_15831[(2)]);
var state_15831__$1 = state_15831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15831__$1,inst_15829);
} else {
if((state_val_15832 === (4))){
var inst_15821 = (state_15831[(2)]);
var inst_15822 = process__$1(inst_15821);
var state_15831__$1 = state_15831;
if(cljs.core.truth_(inst_15822)){
var statearr_15848_19372 = state_15831__$1;
(statearr_15848_19372[(1)] = (5));

} else {
var statearr_15849_19373 = state_15831__$1;
(statearr_15849_19373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15832 === (5))){
var state_15831__$1 = state_15831;
var statearr_15855_19374 = state_15831__$1;
(statearr_15855_19374[(2)] = null);

(statearr_15855_19374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15832 === (6))){
var state_15831__$1 = state_15831;
var statearr_15857_19375 = state_15831__$1;
(statearr_15857_19375[(2)] = null);

(statearr_15857_19375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15832 === (7))){
var inst_15827 = (state_15831[(2)]);
var state_15831__$1 = state_15831;
var statearr_15858_19376 = state_15831__$1;
(statearr_15858_19376[(2)] = inst_15827);

(statearr_15858_19376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19361,c__14924__auto___19365,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async))
;
return ((function (__19361,switch__13722__auto__,c__14924__auto___19365,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0 = (function (){
var statearr_15862 = [null,null,null,null,null,null,null];
(statearr_15862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__);

(statearr_15862[(1)] = (1));

return statearr_15862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1 = (function (state_15831){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_15831);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e15865){var ex__13726__auto__ = e15865;
var statearr_15866_19380 = state_15831;
(statearr_15866_19380[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_15831[(4)]))){
var statearr_15868_19381 = state_15831;
(statearr_15868_19381[(1)] = cljs.core.first((state_15831[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19382 = state_15831;
state_15831 = G__19382;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__ = function(state_15831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1.call(this,state_15831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__;
})()
;})(__19361,switch__13722__auto__,c__14924__auto___19365,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async))
})();
var state__14926__auto__ = (function (){var statearr_15871 = f__14925__auto__();
(statearr_15871[(6)] = c__14924__auto___19365);

return statearr_15871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
});})(__19361,c__14924__auto___19365,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async))
);


break;
case "async":
var c__14924__auto___19385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19361,c__14924__auto___19385,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async){
return (function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = ((function (__19361,c__14924__auto___19385,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async){
return (function (state_15902){
var state_val_15903 = (state_15902[(1)]);
if((state_val_15903 === (1))){
var state_15902__$1 = state_15902;
var statearr_15915_19387 = state_15902__$1;
(statearr_15915_19387[(2)] = null);

(statearr_15915_19387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (2))){
var state_15902__$1 = state_15902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15902__$1,(4),jobs);
} else {
if((state_val_15903 === (3))){
var inst_15900 = (state_15902[(2)]);
var state_15902__$1 = state_15902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15902__$1,inst_15900);
} else {
if((state_val_15903 === (4))){
var inst_15884 = (state_15902[(2)]);
var inst_15889 = async(inst_15884);
var state_15902__$1 = state_15902;
if(cljs.core.truth_(inst_15889)){
var statearr_15924_19390 = state_15902__$1;
(statearr_15924_19390[(1)] = (5));

} else {
var statearr_15925_19391 = state_15902__$1;
(statearr_15925_19391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (5))){
var state_15902__$1 = state_15902;
var statearr_15934_19392 = state_15902__$1;
(statearr_15934_19392[(2)] = null);

(statearr_15934_19392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (6))){
var state_15902__$1 = state_15902;
var statearr_15936_19399 = state_15902__$1;
(statearr_15936_19399[(2)] = null);

(statearr_15936_19399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15903 === (7))){
var inst_15898 = (state_15902[(2)]);
var state_15902__$1 = state_15902;
var statearr_15937_19401 = state_15902__$1;
(statearr_15937_19401[(2)] = inst_15898);

(statearr_15937_19401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19361,c__14924__auto___19385,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async))
;
return ((function (__19361,switch__13722__auto__,c__14924__auto___19385,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0 = (function (){
var statearr_15946 = [null,null,null,null,null,null,null];
(statearr_15946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__);

(statearr_15946[(1)] = (1));

return statearr_15946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1 = (function (state_15902){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_15902);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e15951){var ex__13726__auto__ = e15951;
var statearr_15953_19403 = state_15902;
(statearr_15953_19403[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_15902[(4)]))){
var statearr_15956_19406 = state_15902;
(statearr_15956_19406[(1)] = cljs.core.first((state_15902[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19407 = state_15902;
state_15902 = G__19407;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__ = function(state_15902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1.call(this,state_15902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__;
})()
;})(__19361,switch__13722__auto__,c__14924__auto___19385,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async))
})();
var state__14926__auto__ = (function (){var statearr_15971 = f__14925__auto__();
(statearr_15971[(6)] = c__14924__auto___19385);

return statearr_15971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
});})(__19361,c__14924__auto___19385,G__15814_19362,G__15814_19363__$1,n__5762__auto___19360,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15814_19363__$1))));

}

var G__19408 = (__19361 + (1));
__19361 = G__19408;
continue;
} else {
}
break;
}

var c__14924__auto___19411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_16050){
var state_val_16052 = (state_16050[(1)]);
if((state_val_16052 === (7))){
var inst_16045 = (state_16050[(2)]);
var state_16050__$1 = state_16050;
var statearr_16084_19412 = state_16050__$1;
(statearr_16084_19412[(2)] = inst_16045);

(statearr_16084_19412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16052 === (1))){
var state_16050__$1 = state_16050;
var statearr_16085_19413 = state_16050__$1;
(statearr_16085_19413[(2)] = null);

(statearr_16085_19413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16052 === (4))){
var inst_15998 = (state_16050[(7)]);
var inst_15998__$1 = (state_16050[(2)]);
var inst_16000 = (inst_15998__$1 == null);
var state_16050__$1 = (function (){var statearr_16089 = state_16050;
(statearr_16089[(7)] = inst_15998__$1);

return statearr_16089;
})();
if(cljs.core.truth_(inst_16000)){
var statearr_16090_19417 = state_16050__$1;
(statearr_16090_19417[(1)] = (5));

} else {
var statearr_16092_19418 = state_16050__$1;
(statearr_16092_19418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16052 === (6))){
var inst_15998 = (state_16050[(7)]);
var inst_16004 = (state_16050[(8)]);
var inst_16004__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16027 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16037 = [inst_15998,inst_16004__$1];
var inst_16038 = (new cljs.core.PersistentVector(null,2,(5),inst_16027,inst_16037,null));
var state_16050__$1 = (function (){var statearr_16097 = state_16050;
(statearr_16097[(8)] = inst_16004__$1);

return statearr_16097;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16050__$1,(8),jobs,inst_16038);
} else {
if((state_val_16052 === (3))){
var inst_16047 = (state_16050[(2)]);
var state_16050__$1 = state_16050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16050__$1,inst_16047);
} else {
if((state_val_16052 === (2))){
var state_16050__$1 = state_16050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16050__$1,(4),from);
} else {
if((state_val_16052 === (9))){
var inst_16042 = (state_16050[(2)]);
var state_16050__$1 = (function (){var statearr_16098 = state_16050;
(statearr_16098[(9)] = inst_16042);

return statearr_16098;
})();
var statearr_16100_19422 = state_16050__$1;
(statearr_16100_19422[(2)] = null);

(statearr_16100_19422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16052 === (5))){
var inst_16002 = cljs.core.async.close_BANG_(jobs);
var state_16050__$1 = state_16050;
var statearr_16106_19430 = state_16050__$1;
(statearr_16106_19430[(2)] = inst_16002);

(statearr_16106_19430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16052 === (8))){
var inst_16004 = (state_16050[(8)]);
var inst_16040 = (state_16050[(2)]);
var state_16050__$1 = (function (){var statearr_16107 = state_16050;
(statearr_16107[(10)] = inst_16040);

return statearr_16107;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16050__$1,(9),results,inst_16004);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0 = (function (){
var statearr_16112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__);

(statearr_16112[(1)] = (1));

return statearr_16112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1 = (function (state_16050){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_16050);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e16113){var ex__13726__auto__ = e16113;
var statearr_16114_19447 = state_16050;
(statearr_16114_19447[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_16050[(4)]))){
var statearr_16115_19452 = state_16050;
(statearr_16115_19452[(1)] = cljs.core.first((state_16050[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19457 = state_16050;
state_16050 = G__19457;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__ = function(state_16050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1.call(this,state_16050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_16119 = f__14925__auto__();
(statearr_16119[(6)] = c__14924__auto___19411);

return statearr_16119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


var c__14924__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_16165){
var state_val_16167 = (state_16165[(1)]);
if((state_val_16167 === (7))){
var inst_16158 = (state_16165[(2)]);
var state_16165__$1 = state_16165;
var statearr_16168_19458 = state_16165__$1;
(statearr_16168_19458[(2)] = inst_16158);

(statearr_16168_19458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (20))){
var state_16165__$1 = state_16165;
var statearr_16169_19459 = state_16165__$1;
(statearr_16169_19459[(2)] = null);

(statearr_16169_19459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (1))){
var state_16165__$1 = state_16165;
var statearr_16170_19460 = state_16165__$1;
(statearr_16170_19460[(2)] = null);

(statearr_16170_19460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (4))){
var inst_16123 = (state_16165[(7)]);
var inst_16123__$1 = (state_16165[(2)]);
var inst_16124 = (inst_16123__$1 == null);
var state_16165__$1 = (function (){var statearr_16175 = state_16165;
(statearr_16175[(7)] = inst_16123__$1);

return statearr_16175;
})();
if(cljs.core.truth_(inst_16124)){
var statearr_16176_19461 = state_16165__$1;
(statearr_16176_19461[(1)] = (5));

} else {
var statearr_16181_19462 = state_16165__$1;
(statearr_16181_19462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (15))){
var inst_16140 = (state_16165[(8)]);
var state_16165__$1 = state_16165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16165__$1,(18),to,inst_16140);
} else {
if((state_val_16167 === (21))){
var inst_16153 = (state_16165[(2)]);
var state_16165__$1 = state_16165;
var statearr_16191_19463 = state_16165__$1;
(statearr_16191_19463[(2)] = inst_16153);

(statearr_16191_19463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (13))){
var inst_16155 = (state_16165[(2)]);
var state_16165__$1 = (function (){var statearr_16192 = state_16165;
(statearr_16192[(9)] = inst_16155);

return statearr_16192;
})();
var statearr_16193_19464 = state_16165__$1;
(statearr_16193_19464[(2)] = null);

(statearr_16193_19464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (6))){
var inst_16123 = (state_16165[(7)]);
var state_16165__$1 = state_16165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16165__$1,(11),inst_16123);
} else {
if((state_val_16167 === (17))){
var inst_16148 = (state_16165[(2)]);
var state_16165__$1 = state_16165;
if(cljs.core.truth_(inst_16148)){
var statearr_16197_19465 = state_16165__$1;
(statearr_16197_19465[(1)] = (19));

} else {
var statearr_16198_19466 = state_16165__$1;
(statearr_16198_19466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (3))){
var inst_16160 = (state_16165[(2)]);
var state_16165__$1 = state_16165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16165__$1,inst_16160);
} else {
if((state_val_16167 === (12))){
var inst_16137 = (state_16165[(10)]);
var state_16165__$1 = state_16165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16165__$1,(14),inst_16137);
} else {
if((state_val_16167 === (2))){
var state_16165__$1 = state_16165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16165__$1,(4),results);
} else {
if((state_val_16167 === (19))){
var state_16165__$1 = state_16165;
var statearr_16200_19468 = state_16165__$1;
(statearr_16200_19468[(2)] = null);

(statearr_16200_19468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (11))){
var inst_16137 = (state_16165[(2)]);
var state_16165__$1 = (function (){var statearr_16201 = state_16165;
(statearr_16201[(10)] = inst_16137);

return statearr_16201;
})();
var statearr_16209_19469 = state_16165__$1;
(statearr_16209_19469[(2)] = null);

(statearr_16209_19469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (9))){
var state_16165__$1 = state_16165;
var statearr_16210_19472 = state_16165__$1;
(statearr_16210_19472[(2)] = null);

(statearr_16210_19472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (5))){
var state_16165__$1 = state_16165;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16211_19477 = state_16165__$1;
(statearr_16211_19477[(1)] = (8));

} else {
var statearr_16212_19479 = state_16165__$1;
(statearr_16212_19479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (14))){
var inst_16140 = (state_16165[(8)]);
var inst_16142 = (state_16165[(11)]);
var inst_16140__$1 = (state_16165[(2)]);
var inst_16141 = (inst_16140__$1 == null);
var inst_16142__$1 = cljs.core.not(inst_16141);
var state_16165__$1 = (function (){var statearr_16214 = state_16165;
(statearr_16214[(8)] = inst_16140__$1);

(statearr_16214[(11)] = inst_16142__$1);

return statearr_16214;
})();
if(inst_16142__$1){
var statearr_16215_19484 = state_16165__$1;
(statearr_16215_19484[(1)] = (15));

} else {
var statearr_16216_19485 = state_16165__$1;
(statearr_16216_19485[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (16))){
var inst_16142 = (state_16165[(11)]);
var state_16165__$1 = state_16165;
var statearr_16217_19486 = state_16165__$1;
(statearr_16217_19486[(2)] = inst_16142);

(statearr_16217_19486[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (10))){
var inst_16133 = (state_16165[(2)]);
var state_16165__$1 = state_16165;
var statearr_16220_19488 = state_16165__$1;
(statearr_16220_19488[(2)] = inst_16133);

(statearr_16220_19488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (18))){
var inst_16145 = (state_16165[(2)]);
var state_16165__$1 = state_16165;
var statearr_16222_19489 = state_16165__$1;
(statearr_16222_19489[(2)] = inst_16145);

(statearr_16222_19489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (8))){
var inst_16130 = cljs.core.async.close_BANG_(to);
var state_16165__$1 = state_16165;
var statearr_16223_19490 = state_16165__$1;
(statearr_16223_19490[(2)] = inst_16130);

(statearr_16223_19490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0 = (function (){
var statearr_16224 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__);

(statearr_16224[(1)] = (1));

return statearr_16224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1 = (function (state_16165){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_16165);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e16225){var ex__13726__auto__ = e16225;
var statearr_16226_19496 = state_16165;
(statearr_16226_19496[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_16165[(4)]))){
var statearr_16227_19498 = state_16165;
(statearr_16227_19498[(1)] = cljs.core.first((state_16165[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19499 = state_16165;
state_16165 = G__19499;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__ = function(state_16165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1.call(this,state_16165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_16229 = f__14925__auto__();
(statearr_16229[(6)] = c__14924__auto__);

return statearr_16229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));

return c__14924__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16239 = arguments.length;
switch (G__16239) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16252 = arguments.length;
switch (G__16252) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16269 = arguments.length;
switch (G__16269) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14924__auto___19517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_16302){
var state_val_16303 = (state_16302[(1)]);
if((state_val_16303 === (7))){
var inst_16297 = (state_16302[(2)]);
var state_16302__$1 = state_16302;
var statearr_16305_19518 = state_16302__$1;
(statearr_16305_19518[(2)] = inst_16297);

(statearr_16305_19518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16303 === (1))){
var state_16302__$1 = state_16302;
var statearr_16308_19519 = state_16302__$1;
(statearr_16308_19519[(2)] = null);

(statearr_16308_19519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16303 === (4))){
var inst_16277 = (state_16302[(7)]);
var inst_16277__$1 = (state_16302[(2)]);
var inst_16279 = (inst_16277__$1 == null);
var state_16302__$1 = (function (){var statearr_16309 = state_16302;
(statearr_16309[(7)] = inst_16277__$1);

return statearr_16309;
})();
if(cljs.core.truth_(inst_16279)){
var statearr_16310_19520 = state_16302__$1;
(statearr_16310_19520[(1)] = (5));

} else {
var statearr_16311_19521 = state_16302__$1;
(statearr_16311_19521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16303 === (13))){
var state_16302__$1 = state_16302;
var statearr_16313_19522 = state_16302__$1;
(statearr_16313_19522[(2)] = null);

(statearr_16313_19522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16303 === (6))){
var inst_16277 = (state_16302[(7)]);
var inst_16284 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16277) : p.call(null,inst_16277));
var state_16302__$1 = state_16302;
if(cljs.core.truth_(inst_16284)){
var statearr_16315_19523 = state_16302__$1;
(statearr_16315_19523[(1)] = (9));

} else {
var statearr_16316_19524 = state_16302__$1;
(statearr_16316_19524[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16303 === (3))){
var inst_16299 = (state_16302[(2)]);
var state_16302__$1 = state_16302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16302__$1,inst_16299);
} else {
if((state_val_16303 === (12))){
var state_16302__$1 = state_16302;
var statearr_16322_19525 = state_16302__$1;
(statearr_16322_19525[(2)] = null);

(statearr_16322_19525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16303 === (2))){
var state_16302__$1 = state_16302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16302__$1,(4),ch);
} else {
if((state_val_16303 === (11))){
var inst_16277 = (state_16302[(7)]);
var inst_16288 = (state_16302[(2)]);
var state_16302__$1 = state_16302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16302__$1,(8),inst_16288,inst_16277);
} else {
if((state_val_16303 === (9))){
var state_16302__$1 = state_16302;
var statearr_16323_19526 = state_16302__$1;
(statearr_16323_19526[(2)] = tc);

(statearr_16323_19526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16303 === (5))){
var inst_16281 = cljs.core.async.close_BANG_(tc);
var inst_16282 = cljs.core.async.close_BANG_(fc);
var state_16302__$1 = (function (){var statearr_16325 = state_16302;
(statearr_16325[(8)] = inst_16281);

return statearr_16325;
})();
var statearr_16326_19530 = state_16302__$1;
(statearr_16326_19530[(2)] = inst_16282);

(statearr_16326_19530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16303 === (14))){
var inst_16295 = (state_16302[(2)]);
var state_16302__$1 = state_16302;
var statearr_16327_19531 = state_16302__$1;
(statearr_16327_19531[(2)] = inst_16295);

(statearr_16327_19531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16303 === (10))){
var state_16302__$1 = state_16302;
var statearr_16328_19532 = state_16302__$1;
(statearr_16328_19532[(2)] = fc);

(statearr_16328_19532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16303 === (8))){
var inst_16290 = (state_16302[(2)]);
var state_16302__$1 = state_16302;
if(cljs.core.truth_(inst_16290)){
var statearr_16329_19533 = state_16302__$1;
(statearr_16329_19533[(1)] = (12));

} else {
var statearr_16331_19534 = state_16302__$1;
(statearr_16331_19534[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13723__auto__ = null;
var cljs$core$async$state_machine__13723__auto____0 = (function (){
var statearr_16339 = [null,null,null,null,null,null,null,null,null];
(statearr_16339[(0)] = cljs$core$async$state_machine__13723__auto__);

(statearr_16339[(1)] = (1));

return statearr_16339;
});
var cljs$core$async$state_machine__13723__auto____1 = (function (state_16302){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_16302);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e16340){var ex__13726__auto__ = e16340;
var statearr_16341_19540 = state_16302;
(statearr_16341_19540[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_16302[(4)]))){
var statearr_16346_19541 = state_16302;
(statearr_16346_19541[(1)] = cljs.core.first((state_16302[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19544 = state_16302;
state_16302 = G__19544;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$state_machine__13723__auto__ = function(state_16302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13723__auto____1.call(this,state_16302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13723__auto____0;
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13723__auto____1;
return cljs$core$async$state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_16348 = f__14925__auto__();
(statearr_16348[(6)] = c__14924__auto___19517);

return statearr_16348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14924__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_16376){
var state_val_16377 = (state_16376[(1)]);
if((state_val_16377 === (7))){
var inst_16372 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
var statearr_16387_19554 = state_16376__$1;
(statearr_16387_19554[(2)] = inst_16372);

(statearr_16387_19554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (1))){
var inst_16355 = init;
var inst_16356 = inst_16355;
var state_16376__$1 = (function (){var statearr_16388 = state_16376;
(statearr_16388[(7)] = inst_16356);

return statearr_16388;
})();
var statearr_16389_19557 = state_16376__$1;
(statearr_16389_19557[(2)] = null);

(statearr_16389_19557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (4))){
var inst_16359 = (state_16376[(8)]);
var inst_16359__$1 = (state_16376[(2)]);
var inst_16360 = (inst_16359__$1 == null);
var state_16376__$1 = (function (){var statearr_16390 = state_16376;
(statearr_16390[(8)] = inst_16359__$1);

return statearr_16390;
})();
if(cljs.core.truth_(inst_16360)){
var statearr_16391_19558 = state_16376__$1;
(statearr_16391_19558[(1)] = (5));

} else {
var statearr_16392_19559 = state_16376__$1;
(statearr_16392_19559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (6))){
var inst_16356 = (state_16376[(7)]);
var inst_16359 = (state_16376[(8)]);
var inst_16363 = (state_16376[(9)]);
var inst_16363__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16356,inst_16359) : f.call(null,inst_16356,inst_16359));
var inst_16364 = cljs.core.reduced_QMARK_(inst_16363__$1);
var state_16376__$1 = (function (){var statearr_16393 = state_16376;
(statearr_16393[(9)] = inst_16363__$1);

return statearr_16393;
})();
if(inst_16364){
var statearr_16394_19564 = state_16376__$1;
(statearr_16394_19564[(1)] = (8));

} else {
var statearr_16401_19565 = state_16376__$1;
(statearr_16401_19565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (3))){
var inst_16374 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16376__$1,inst_16374);
} else {
if((state_val_16377 === (2))){
var state_16376__$1 = state_16376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16376__$1,(4),ch);
} else {
if((state_val_16377 === (9))){
var inst_16363 = (state_16376[(9)]);
var inst_16356 = inst_16363;
var state_16376__$1 = (function (){var statearr_16419 = state_16376;
(statearr_16419[(7)] = inst_16356);

return statearr_16419;
})();
var statearr_16422_19571 = state_16376__$1;
(statearr_16422_19571[(2)] = null);

(statearr_16422_19571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (5))){
var inst_16356 = (state_16376[(7)]);
var state_16376__$1 = state_16376;
var statearr_16423_19572 = state_16376__$1;
(statearr_16423_19572[(2)] = inst_16356);

(statearr_16423_19572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (10))){
var inst_16370 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
var statearr_16431_19573 = state_16376__$1;
(statearr_16431_19573[(2)] = inst_16370);

(statearr_16431_19573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (8))){
var inst_16363 = (state_16376[(9)]);
var inst_16366 = cljs.core.deref(inst_16363);
var state_16376__$1 = state_16376;
var statearr_16435_19574 = state_16376__$1;
(statearr_16435_19574[(2)] = inst_16366);

(statearr_16435_19574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13723__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13723__auto____0 = (function (){
var statearr_16436 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16436[(0)] = cljs$core$async$reduce_$_state_machine__13723__auto__);

(statearr_16436[(1)] = (1));

return statearr_16436;
});
var cljs$core$async$reduce_$_state_machine__13723__auto____1 = (function (state_16376){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_16376);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e16437){var ex__13726__auto__ = e16437;
var statearr_16441_19579 = state_16376;
(statearr_16441_19579[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_16376[(4)]))){
var statearr_16442_19580 = state_16376;
(statearr_16442_19580[(1)] = cljs.core.first((state_16376[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19581 = state_16376;
state_16376 = G__19581;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13723__auto__ = function(state_16376){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13723__auto____1.call(this,state_16376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13723__auto____0;
cljs$core$async$reduce_$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13723__auto____1;
return cljs$core$async$reduce_$_state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_16443 = f__14925__auto__();
(statearr_16443[(6)] = c__14924__auto__);

return statearr_16443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));

return c__14924__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14924__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_16449){
var state_val_16450 = (state_16449[(1)]);
if((state_val_16450 === (1))){
var inst_16444 = cljs.core.async.reduce(f__$1,init,ch);
var state_16449__$1 = state_16449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16449__$1,(2),inst_16444);
} else {
if((state_val_16450 === (2))){
var inst_16446 = (state_16449[(2)]);
var inst_16447 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16446) : f__$1.call(null,inst_16446));
var state_16449__$1 = state_16449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16449__$1,inst_16447);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13723__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13723__auto____0 = (function (){
var statearr_16461 = [null,null,null,null,null,null,null];
(statearr_16461[(0)] = cljs$core$async$transduce_$_state_machine__13723__auto__);

(statearr_16461[(1)] = (1));

return statearr_16461;
});
var cljs$core$async$transduce_$_state_machine__13723__auto____1 = (function (state_16449){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_16449);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e16462){var ex__13726__auto__ = e16462;
var statearr_16463_19591 = state_16449;
(statearr_16463_19591[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_16449[(4)]))){
var statearr_16464_19592 = state_16449;
(statearr_16464_19592[(1)] = cljs.core.first((state_16449[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19594 = state_16449;
state_16449 = G__19594;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13723__auto__ = function(state_16449){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13723__auto____1.call(this,state_16449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13723__auto____0;
cljs$core$async$transduce_$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13723__auto____1;
return cljs$core$async$transduce_$_state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_16465 = f__14925__auto__();
(statearr_16465[(6)] = c__14924__auto__);

return statearr_16465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));

return c__14924__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16474 = arguments.length;
switch (G__16474) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14924__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_16506){
var state_val_16507 = (state_16506[(1)]);
if((state_val_16507 === (7))){
var inst_16487 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16509_19599 = state_16506__$1;
(statearr_16509_19599[(2)] = inst_16487);

(statearr_16509_19599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (1))){
var inst_16481 = cljs.core.seq(coll);
var inst_16482 = inst_16481;
var state_16506__$1 = (function (){var statearr_16510 = state_16506;
(statearr_16510[(7)] = inst_16482);

return statearr_16510;
})();
var statearr_16511_19602 = state_16506__$1;
(statearr_16511_19602[(2)] = null);

(statearr_16511_19602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (4))){
var inst_16482 = (state_16506[(7)]);
var inst_16485 = cljs.core.first(inst_16482);
var state_16506__$1 = state_16506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16506__$1,(7),ch,inst_16485);
} else {
if((state_val_16507 === (13))){
var inst_16500 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16514_19604 = state_16506__$1;
(statearr_16514_19604[(2)] = inst_16500);

(statearr_16514_19604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (6))){
var inst_16490 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
if(cljs.core.truth_(inst_16490)){
var statearr_16516_19605 = state_16506__$1;
(statearr_16516_19605[(1)] = (8));

} else {
var statearr_16517_19606 = state_16506__$1;
(statearr_16517_19606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (3))){
var inst_16504 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16506__$1,inst_16504);
} else {
if((state_val_16507 === (12))){
var state_16506__$1 = state_16506;
var statearr_16519_19607 = state_16506__$1;
(statearr_16519_19607[(2)] = null);

(statearr_16519_19607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (2))){
var inst_16482 = (state_16506[(7)]);
var state_16506__$1 = state_16506;
if(cljs.core.truth_(inst_16482)){
var statearr_16523_19608 = state_16506__$1;
(statearr_16523_19608[(1)] = (4));

} else {
var statearr_16525_19611 = state_16506__$1;
(statearr_16525_19611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (11))){
var inst_16497 = cljs.core.async.close_BANG_(ch);
var state_16506__$1 = state_16506;
var statearr_16527_19615 = state_16506__$1;
(statearr_16527_19615[(2)] = inst_16497);

(statearr_16527_19615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (9))){
var state_16506__$1 = state_16506;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16529_19618 = state_16506__$1;
(statearr_16529_19618[(1)] = (11));

} else {
var statearr_16530_19619 = state_16506__$1;
(statearr_16530_19619[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (5))){
var inst_16482 = (state_16506[(7)]);
var state_16506__$1 = state_16506;
var statearr_16532_19621 = state_16506__$1;
(statearr_16532_19621[(2)] = inst_16482);

(statearr_16532_19621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (10))){
var inst_16502 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16533_19625 = state_16506__$1;
(statearr_16533_19625[(2)] = inst_16502);

(statearr_16533_19625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (8))){
var inst_16482 = (state_16506[(7)]);
var inst_16492 = cljs.core.next(inst_16482);
var inst_16482__$1 = inst_16492;
var state_16506__$1 = (function (){var statearr_16536 = state_16506;
(statearr_16536[(7)] = inst_16482__$1);

return statearr_16536;
})();
var statearr_16540_19628 = state_16506__$1;
(statearr_16540_19628[(2)] = null);

(statearr_16540_19628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13723__auto__ = null;
var cljs$core$async$state_machine__13723__auto____0 = (function (){
var statearr_16541 = [null,null,null,null,null,null,null,null];
(statearr_16541[(0)] = cljs$core$async$state_machine__13723__auto__);

(statearr_16541[(1)] = (1));

return statearr_16541;
});
var cljs$core$async$state_machine__13723__auto____1 = (function (state_16506){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_16506);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e16542){var ex__13726__auto__ = e16542;
var statearr_16543_19629 = state_16506;
(statearr_16543_19629[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_16506[(4)]))){
var statearr_16544_19630 = state_16506;
(statearr_16544_19630[(1)] = cljs.core.first((state_16506[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19631 = state_16506;
state_16506 = G__19631;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$state_machine__13723__auto__ = function(state_16506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13723__auto____1.call(this,state_16506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13723__auto____0;
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13723__auto____1;
return cljs$core$async$state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_16549 = f__14925__auto__();
(statearr_16549[(6)] = c__14924__auto__);

return statearr_16549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));

return c__14924__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16577 = arguments.length;
switch (G__16577) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19643 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19643(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19648 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19648(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19652 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19652(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19655 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19655(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16623 = (function (ch,cs,meta16624){
this.ch = ch;
this.cs = cs;
this.meta16624 = meta16624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16625,meta16624__$1){
var self__ = this;
var _16625__$1 = this;
return (new cljs.core.async.t_cljs$core$async16623(self__.ch,self__.cs,meta16624__$1));
}));

(cljs.core.async.t_cljs$core$async16623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16625){
var self__ = this;
var _16625__$1 = this;
return self__.meta16624;
}));

(cljs.core.async.t_cljs$core$async16623.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16623.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16623.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16623.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16623.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16624","meta16624",505563066,null)], null);
}));

(cljs.core.async.t_cljs$core$async16623.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16623");

(cljs.core.async.t_cljs$core$async16623.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16623");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16623.
 */
cljs.core.async.__GT_t_cljs$core$async16623 = (function cljs$core$async$__GT_t_cljs$core$async16623(ch,cs,meta16624){
return (new cljs.core.async.t_cljs$core$async16623(ch,cs,meta16624));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16623(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14924__auto___19686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_16816){
var state_val_16817 = (state_16816[(1)]);
if((state_val_16817 === (7))){
var inst_16810 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16819_19692 = state_16816__$1;
(statearr_16819_19692[(2)] = inst_16810);

(statearr_16819_19692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (20))){
var inst_16689 = (state_16816[(7)]);
var inst_16707 = cljs.core.first(inst_16689);
var inst_16708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16707,(0),null);
var inst_16709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16707,(1),null);
var state_16816__$1 = (function (){var statearr_16822 = state_16816;
(statearr_16822[(8)] = inst_16708);

return statearr_16822;
})();
if(cljs.core.truth_(inst_16709)){
var statearr_16824_19697 = state_16816__$1;
(statearr_16824_19697[(1)] = (22));

} else {
var statearr_16826_19702 = state_16816__$1;
(statearr_16826_19702[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (27))){
var inst_16746 = (state_16816[(9)]);
var inst_16748 = (state_16816[(10)]);
var inst_16753 = (state_16816[(11)]);
var inst_16647 = (state_16816[(12)]);
var inst_16753__$1 = cljs.core._nth(inst_16746,inst_16748);
var inst_16754 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16753__$1,inst_16647,done);
var state_16816__$1 = (function (){var statearr_16827 = state_16816;
(statearr_16827[(11)] = inst_16753__$1);

return statearr_16827;
})();
if(cljs.core.truth_(inst_16754)){
var statearr_16828_19704 = state_16816__$1;
(statearr_16828_19704[(1)] = (30));

} else {
var statearr_16829_19708 = state_16816__$1;
(statearr_16829_19708[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (1))){
var state_16816__$1 = state_16816;
var statearr_16830_19709 = state_16816__$1;
(statearr_16830_19709[(2)] = null);

(statearr_16830_19709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (24))){
var inst_16689 = (state_16816[(7)]);
var inst_16718 = (state_16816[(2)]);
var inst_16719 = cljs.core.next(inst_16689);
var inst_16658 = inst_16719;
var inst_16659 = null;
var inst_16660 = (0);
var inst_16661 = (0);
var state_16816__$1 = (function (){var statearr_16835 = state_16816;
(statearr_16835[(13)] = inst_16718);

(statearr_16835[(14)] = inst_16658);

(statearr_16835[(15)] = inst_16659);

(statearr_16835[(16)] = inst_16660);

(statearr_16835[(17)] = inst_16661);

return statearr_16835;
})();
var statearr_16836_19710 = state_16816__$1;
(statearr_16836_19710[(2)] = null);

(statearr_16836_19710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (39))){
var state_16816__$1 = state_16816;
var statearr_16847_19714 = state_16816__$1;
(statearr_16847_19714[(2)] = null);

(statearr_16847_19714[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (4))){
var inst_16647 = (state_16816[(12)]);
var inst_16647__$1 = (state_16816[(2)]);
var inst_16650 = (inst_16647__$1 == null);
var state_16816__$1 = (function (){var statearr_16851 = state_16816;
(statearr_16851[(12)] = inst_16647__$1);

return statearr_16851;
})();
if(cljs.core.truth_(inst_16650)){
var statearr_16852_19715 = state_16816__$1;
(statearr_16852_19715[(1)] = (5));

} else {
var statearr_16856_19716 = state_16816__$1;
(statearr_16856_19716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (15))){
var inst_16661 = (state_16816[(17)]);
var inst_16658 = (state_16816[(14)]);
var inst_16659 = (state_16816[(15)]);
var inst_16660 = (state_16816[(16)]);
var inst_16680 = (state_16816[(2)]);
var inst_16682 = (inst_16661 + (1));
var tmp16842 = inst_16660;
var tmp16843 = inst_16658;
var tmp16844 = inst_16659;
var inst_16658__$1 = tmp16843;
var inst_16659__$1 = tmp16844;
var inst_16660__$1 = tmp16842;
var inst_16661__$1 = inst_16682;
var state_16816__$1 = (function (){var statearr_16857 = state_16816;
(statearr_16857[(18)] = inst_16680);

(statearr_16857[(14)] = inst_16658__$1);

(statearr_16857[(15)] = inst_16659__$1);

(statearr_16857[(16)] = inst_16660__$1);

(statearr_16857[(17)] = inst_16661__$1);

return statearr_16857;
})();
var statearr_16860_19722 = state_16816__$1;
(statearr_16860_19722[(2)] = null);

(statearr_16860_19722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (21))){
var inst_16722 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16864_19728 = state_16816__$1;
(statearr_16864_19728[(2)] = inst_16722);

(statearr_16864_19728[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (31))){
var inst_16753 = (state_16816[(11)]);
var inst_16757 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16753);
var state_16816__$1 = state_16816;
var statearr_16867_19729 = state_16816__$1;
(statearr_16867_19729[(2)] = inst_16757);

(statearr_16867_19729[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (32))){
var inst_16748 = (state_16816[(10)]);
var inst_16745 = (state_16816[(19)]);
var inst_16746 = (state_16816[(9)]);
var inst_16747 = (state_16816[(20)]);
var inst_16759 = (state_16816[(2)]);
var inst_16760 = (inst_16748 + (1));
var tmp16861 = inst_16746;
var tmp16862 = inst_16745;
var tmp16863 = inst_16747;
var inst_16745__$1 = tmp16862;
var inst_16746__$1 = tmp16861;
var inst_16747__$1 = tmp16863;
var inst_16748__$1 = inst_16760;
var state_16816__$1 = (function (){var statearr_16871 = state_16816;
(statearr_16871[(21)] = inst_16759);

(statearr_16871[(19)] = inst_16745__$1);

(statearr_16871[(9)] = inst_16746__$1);

(statearr_16871[(20)] = inst_16747__$1);

(statearr_16871[(10)] = inst_16748__$1);

return statearr_16871;
})();
var statearr_16872_19746 = state_16816__$1;
(statearr_16872_19746[(2)] = null);

(statearr_16872_19746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (40))){
var inst_16777 = (state_16816[(22)]);
var inst_16782 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16777);
var state_16816__$1 = state_16816;
var statearr_16874_19747 = state_16816__$1;
(statearr_16874_19747[(2)] = inst_16782);

(statearr_16874_19747[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (33))){
var inst_16764 = (state_16816[(23)]);
var inst_16770 = cljs.core.chunked_seq_QMARK_(inst_16764);
var state_16816__$1 = state_16816;
if(inst_16770){
var statearr_16878_19749 = state_16816__$1;
(statearr_16878_19749[(1)] = (36));

} else {
var statearr_16879_19751 = state_16816__$1;
(statearr_16879_19751[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (13))){
var inst_16670 = (state_16816[(24)]);
var inst_16677 = cljs.core.async.close_BANG_(inst_16670);
var state_16816__$1 = state_16816;
var statearr_16881_19752 = state_16816__$1;
(statearr_16881_19752[(2)] = inst_16677);

(statearr_16881_19752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (22))){
var inst_16708 = (state_16816[(8)]);
var inst_16715 = cljs.core.async.close_BANG_(inst_16708);
var state_16816__$1 = state_16816;
var statearr_16886_19755 = state_16816__$1;
(statearr_16886_19755[(2)] = inst_16715);

(statearr_16886_19755[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (36))){
var inst_16764 = (state_16816[(23)]);
var inst_16772 = cljs.core.chunk_first(inst_16764);
var inst_16773 = cljs.core.chunk_rest(inst_16764);
var inst_16774 = cljs.core.count(inst_16772);
var inst_16745 = inst_16773;
var inst_16746 = inst_16772;
var inst_16747 = inst_16774;
var inst_16748 = (0);
var state_16816__$1 = (function (){var statearr_16887 = state_16816;
(statearr_16887[(19)] = inst_16745);

(statearr_16887[(9)] = inst_16746);

(statearr_16887[(20)] = inst_16747);

(statearr_16887[(10)] = inst_16748);

return statearr_16887;
})();
var statearr_16888_19757 = state_16816__$1;
(statearr_16888_19757[(2)] = null);

(statearr_16888_19757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (41))){
var inst_16764 = (state_16816[(23)]);
var inst_16784 = (state_16816[(2)]);
var inst_16786 = cljs.core.next(inst_16764);
var inst_16745 = inst_16786;
var inst_16746 = null;
var inst_16747 = (0);
var inst_16748 = (0);
var state_16816__$1 = (function (){var statearr_16891 = state_16816;
(statearr_16891[(25)] = inst_16784);

(statearr_16891[(19)] = inst_16745);

(statearr_16891[(9)] = inst_16746);

(statearr_16891[(20)] = inst_16747);

(statearr_16891[(10)] = inst_16748);

return statearr_16891;
})();
var statearr_16892_19764 = state_16816__$1;
(statearr_16892_19764[(2)] = null);

(statearr_16892_19764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (43))){
var state_16816__$1 = state_16816;
var statearr_16893_19765 = state_16816__$1;
(statearr_16893_19765[(2)] = null);

(statearr_16893_19765[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (29))){
var inst_16794 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16897_19766 = state_16816__$1;
(statearr_16897_19766[(2)] = inst_16794);

(statearr_16897_19766[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (44))){
var inst_16807 = (state_16816[(2)]);
var state_16816__$1 = (function (){var statearr_16899 = state_16816;
(statearr_16899[(26)] = inst_16807);

return statearr_16899;
})();
var statearr_16900_19767 = state_16816__$1;
(statearr_16900_19767[(2)] = null);

(statearr_16900_19767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (6))){
var inst_16736 = (state_16816[(27)]);
var inst_16735 = cljs.core.deref(cs);
var inst_16736__$1 = cljs.core.keys(inst_16735);
var inst_16738 = cljs.core.count(inst_16736__$1);
var inst_16739 = cljs.core.reset_BANG_(dctr,inst_16738);
var inst_16744 = cljs.core.seq(inst_16736__$1);
var inst_16745 = inst_16744;
var inst_16746 = null;
var inst_16747 = (0);
var inst_16748 = (0);
var state_16816__$1 = (function (){var statearr_16904 = state_16816;
(statearr_16904[(27)] = inst_16736__$1);

(statearr_16904[(28)] = inst_16739);

(statearr_16904[(19)] = inst_16745);

(statearr_16904[(9)] = inst_16746);

(statearr_16904[(20)] = inst_16747);

(statearr_16904[(10)] = inst_16748);

return statearr_16904;
})();
var statearr_16907_19770 = state_16816__$1;
(statearr_16907_19770[(2)] = null);

(statearr_16907_19770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (28))){
var inst_16745 = (state_16816[(19)]);
var inst_16764 = (state_16816[(23)]);
var inst_16764__$1 = cljs.core.seq(inst_16745);
var state_16816__$1 = (function (){var statearr_16910 = state_16816;
(statearr_16910[(23)] = inst_16764__$1);

return statearr_16910;
})();
if(inst_16764__$1){
var statearr_16911_19772 = state_16816__$1;
(statearr_16911_19772[(1)] = (33));

} else {
var statearr_16912_19773 = state_16816__$1;
(statearr_16912_19773[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (25))){
var inst_16748 = (state_16816[(10)]);
var inst_16747 = (state_16816[(20)]);
var inst_16750 = (inst_16748 < inst_16747);
var inst_16751 = inst_16750;
var state_16816__$1 = state_16816;
if(cljs.core.truth_(inst_16751)){
var statearr_16913_19774 = state_16816__$1;
(statearr_16913_19774[(1)] = (27));

} else {
var statearr_16914_19775 = state_16816__$1;
(statearr_16914_19775[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (34))){
var state_16816__$1 = state_16816;
var statearr_16917_19776 = state_16816__$1;
(statearr_16917_19776[(2)] = null);

(statearr_16917_19776[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (17))){
var state_16816__$1 = state_16816;
var statearr_16918_19779 = state_16816__$1;
(statearr_16918_19779[(2)] = null);

(statearr_16918_19779[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (3))){
var inst_16812 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16816__$1,inst_16812);
} else {
if((state_val_16817 === (12))){
var inst_16727 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16927_19782 = state_16816__$1;
(statearr_16927_19782[(2)] = inst_16727);

(statearr_16927_19782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (2))){
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16816__$1,(4),ch);
} else {
if((state_val_16817 === (23))){
var state_16816__$1 = state_16816;
var statearr_16929_19783 = state_16816__$1;
(statearr_16929_19783[(2)] = null);

(statearr_16929_19783[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (35))){
var inst_16792 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16931_19784 = state_16816__$1;
(statearr_16931_19784[(2)] = inst_16792);

(statearr_16931_19784[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (19))){
var inst_16689 = (state_16816[(7)]);
var inst_16697 = cljs.core.chunk_first(inst_16689);
var inst_16698 = cljs.core.chunk_rest(inst_16689);
var inst_16699 = cljs.core.count(inst_16697);
var inst_16658 = inst_16698;
var inst_16659 = inst_16697;
var inst_16660 = inst_16699;
var inst_16661 = (0);
var state_16816__$1 = (function (){var statearr_16932 = state_16816;
(statearr_16932[(14)] = inst_16658);

(statearr_16932[(15)] = inst_16659);

(statearr_16932[(16)] = inst_16660);

(statearr_16932[(17)] = inst_16661);

return statearr_16932;
})();
var statearr_16933_19789 = state_16816__$1;
(statearr_16933_19789[(2)] = null);

(statearr_16933_19789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (11))){
var inst_16658 = (state_16816[(14)]);
var inst_16689 = (state_16816[(7)]);
var inst_16689__$1 = cljs.core.seq(inst_16658);
var state_16816__$1 = (function (){var statearr_16936 = state_16816;
(statearr_16936[(7)] = inst_16689__$1);

return statearr_16936;
})();
if(inst_16689__$1){
var statearr_16938_19795 = state_16816__$1;
(statearr_16938_19795[(1)] = (16));

} else {
var statearr_16940_19796 = state_16816__$1;
(statearr_16940_19796[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (9))){
var inst_16729 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16942_19799 = state_16816__$1;
(statearr_16942_19799[(2)] = inst_16729);

(statearr_16942_19799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (5))){
var inst_16656 = cljs.core.deref(cs);
var inst_16657 = cljs.core.seq(inst_16656);
var inst_16658 = inst_16657;
var inst_16659 = null;
var inst_16660 = (0);
var inst_16661 = (0);
var state_16816__$1 = (function (){var statearr_16948 = state_16816;
(statearr_16948[(14)] = inst_16658);

(statearr_16948[(15)] = inst_16659);

(statearr_16948[(16)] = inst_16660);

(statearr_16948[(17)] = inst_16661);

return statearr_16948;
})();
var statearr_16949_19807 = state_16816__$1;
(statearr_16949_19807[(2)] = null);

(statearr_16949_19807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (14))){
var state_16816__$1 = state_16816;
var statearr_16952_19808 = state_16816__$1;
(statearr_16952_19808[(2)] = null);

(statearr_16952_19808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (45))){
var inst_16804 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16953_19809 = state_16816__$1;
(statearr_16953_19809[(2)] = inst_16804);

(statearr_16953_19809[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (26))){
var inst_16736 = (state_16816[(27)]);
var inst_16796 = (state_16816[(2)]);
var inst_16798 = cljs.core.seq(inst_16736);
var state_16816__$1 = (function (){var statearr_16954 = state_16816;
(statearr_16954[(29)] = inst_16796);

return statearr_16954;
})();
if(inst_16798){
var statearr_16955_19810 = state_16816__$1;
(statearr_16955_19810[(1)] = (42));

} else {
var statearr_16967_19812 = state_16816__$1;
(statearr_16967_19812[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (16))){
var inst_16689 = (state_16816[(7)]);
var inst_16695 = cljs.core.chunked_seq_QMARK_(inst_16689);
var state_16816__$1 = state_16816;
if(inst_16695){
var statearr_16978_19817 = state_16816__$1;
(statearr_16978_19817[(1)] = (19));

} else {
var statearr_16979_19818 = state_16816__$1;
(statearr_16979_19818[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (38))){
var inst_16789 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16980_19819 = state_16816__$1;
(statearr_16980_19819[(2)] = inst_16789);

(statearr_16980_19819[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (30))){
var state_16816__$1 = state_16816;
var statearr_16995_19820 = state_16816__$1;
(statearr_16995_19820[(2)] = null);

(statearr_16995_19820[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (10))){
var inst_16659 = (state_16816[(15)]);
var inst_16661 = (state_16816[(17)]);
var inst_16669 = cljs.core._nth(inst_16659,inst_16661);
var inst_16670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16669,(0),null);
var inst_16671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16669,(1),null);
var state_16816__$1 = (function (){var statearr_17004 = state_16816;
(statearr_17004[(24)] = inst_16670);

return statearr_17004;
})();
if(cljs.core.truth_(inst_16671)){
var statearr_17005_19831 = state_16816__$1;
(statearr_17005_19831[(1)] = (13));

} else {
var statearr_17008_19832 = state_16816__$1;
(statearr_17008_19832[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (18))){
var inst_16725 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_17009_19840 = state_16816__$1;
(statearr_17009_19840[(2)] = inst_16725);

(statearr_17009_19840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (42))){
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16816__$1,(45),dchan);
} else {
if((state_val_16817 === (37))){
var inst_16764 = (state_16816[(23)]);
var inst_16777 = (state_16816[(22)]);
var inst_16647 = (state_16816[(12)]);
var inst_16777__$1 = cljs.core.first(inst_16764);
var inst_16778 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16777__$1,inst_16647,done);
var state_16816__$1 = (function (){var statearr_17012 = state_16816;
(statearr_17012[(22)] = inst_16777__$1);

return statearr_17012;
})();
if(cljs.core.truth_(inst_16778)){
var statearr_17015_19841 = state_16816__$1;
(statearr_17015_19841[(1)] = (39));

} else {
var statearr_17017_19842 = state_16816__$1;
(statearr_17017_19842[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (8))){
var inst_16661 = (state_16816[(17)]);
var inst_16660 = (state_16816[(16)]);
var inst_16663 = (inst_16661 < inst_16660);
var inst_16664 = inst_16663;
var state_16816__$1 = state_16816;
if(cljs.core.truth_(inst_16664)){
var statearr_17018_19843 = state_16816__$1;
(statearr_17018_19843[(1)] = (10));

} else {
var statearr_17019_19844 = state_16816__$1;
(statearr_17019_19844[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13723__auto__ = null;
var cljs$core$async$mult_$_state_machine__13723__auto____0 = (function (){
var statearr_17026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17026[(0)] = cljs$core$async$mult_$_state_machine__13723__auto__);

(statearr_17026[(1)] = (1));

return statearr_17026;
});
var cljs$core$async$mult_$_state_machine__13723__auto____1 = (function (state_16816){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_16816);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e17032){var ex__13726__auto__ = e17032;
var statearr_17033_19846 = state_16816;
(statearr_17033_19846[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_16816[(4)]))){
var statearr_17034_19847 = state_16816;
(statearr_17034_19847[(1)] = cljs.core.first((state_16816[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19849 = state_16816;
state_16816 = G__19849;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13723__auto__ = function(state_16816){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13723__auto____1.call(this,state_16816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13723__auto____0;
cljs$core$async$mult_$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13723__auto____1;
return cljs$core$async$mult_$_state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_17038 = f__14925__auto__();
(statearr_17038[(6)] = c__14924__auto___19686);

return statearr_17038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17040 = arguments.length;
switch (G__17040) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19851 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19851(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19852 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19852(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19866 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19866(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19881 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19881(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19892 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19892(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___19894 = arguments.length;
var i__5898__auto___19895 = (0);
while(true){
if((i__5898__auto___19895 < len__5897__auto___19894)){
args__5903__auto__.push((arguments[i__5898__auto___19895]));

var G__19896 = (i__5898__auto___19895 + (1));
i__5898__auto___19895 = G__19896;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17101){
var map__17102 = p__17101;
var map__17102__$1 = cljs.core.__destructure_map(map__17102);
var opts = map__17102__$1;
var statearr_17104_19898 = state;
(statearr_17104_19898[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17109_19904 = state;
(statearr_17109_19904[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_17114_19905 = state;
(statearr_17114_19905[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17086){
var G__17087 = cljs.core.first(seq17086);
var seq17086__$1 = cljs.core.next(seq17086);
var G__17088 = cljs.core.first(seq17086__$1);
var seq17086__$2 = cljs.core.next(seq17086__$1);
var G__17089 = cljs.core.first(seq17086__$2);
var seq17086__$3 = cljs.core.next(seq17086__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17087,G__17088,G__17089,seq17086__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17124 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17125){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17125 = meta17125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17126,meta17125__$1){
var self__ = this;
var _17126__$1 = this;
return (new cljs.core.async.t_cljs$core$async17124(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17125__$1));
}));

(cljs.core.async.t_cljs$core$async17124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17126){
var self__ = this;
var _17126__$1 = this;
return self__.meta17125;
}));

(cljs.core.async.t_cljs$core$async17124.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17124.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17124.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17124.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17124.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17124.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17124.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17125","meta17125",411634856,null)], null);
}));

(cljs.core.async.t_cljs$core$async17124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17124");

(cljs.core.async.t_cljs$core$async17124.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17124.
 */
cljs.core.async.__GT_t_cljs$core$async17124 = (function cljs$core$async$__GT_t_cljs$core$async17124(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17125){
return (new cljs.core.async.t_cljs$core$async17124(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17125));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17124(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14924__auto___19923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_17233){
var state_val_17234 = (state_17233[(1)]);
if((state_val_17234 === (7))){
var inst_17188 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
if(cljs.core.truth_(inst_17188)){
var statearr_17249_19924 = state_17233__$1;
(statearr_17249_19924[(1)] = (8));

} else {
var statearr_17250_19925 = state_17233__$1;
(statearr_17250_19925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (20))){
var inst_17179 = (state_17233[(7)]);
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17233__$1,(23),out,inst_17179);
} else {
if((state_val_17234 === (1))){
var inst_17152 = calc_state();
var inst_17153 = cljs.core.__destructure_map(inst_17152);
var inst_17154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17153,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17153,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17153,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17157 = inst_17152;
var state_17233__$1 = (function (){var statearr_17252 = state_17233;
(statearr_17252[(8)] = inst_17154);

(statearr_17252[(9)] = inst_17155);

(statearr_17252[(10)] = inst_17156);

(statearr_17252[(11)] = inst_17157);

return statearr_17252;
})();
var statearr_17260_19931 = state_17233__$1;
(statearr_17260_19931[(2)] = null);

(statearr_17260_19931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (24))){
var inst_17166 = (state_17233[(12)]);
var inst_17157 = inst_17166;
var state_17233__$1 = (function (){var statearr_17267 = state_17233;
(statearr_17267[(11)] = inst_17157);

return statearr_17267;
})();
var statearr_17268_19935 = state_17233__$1;
(statearr_17268_19935[(2)] = null);

(statearr_17268_19935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (4))){
var inst_17179 = (state_17233[(7)]);
var inst_17181 = (state_17233[(13)]);
var inst_17178 = (state_17233[(2)]);
var inst_17179__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17178,(0),null);
var inst_17180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17178,(1),null);
var inst_17181__$1 = (inst_17179__$1 == null);
var state_17233__$1 = (function (){var statearr_17269 = state_17233;
(statearr_17269[(7)] = inst_17179__$1);

(statearr_17269[(14)] = inst_17180);

(statearr_17269[(13)] = inst_17181__$1);

return statearr_17269;
})();
if(cljs.core.truth_(inst_17181__$1)){
var statearr_17273_19937 = state_17233__$1;
(statearr_17273_19937[(1)] = (5));

} else {
var statearr_17274_19938 = state_17233__$1;
(statearr_17274_19938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (15))){
var inst_17167 = (state_17233[(15)]);
var inst_17204 = (state_17233[(16)]);
var inst_17204__$1 = cljs.core.empty_QMARK_(inst_17167);
var state_17233__$1 = (function (){var statearr_17282 = state_17233;
(statearr_17282[(16)] = inst_17204__$1);

return statearr_17282;
})();
if(inst_17204__$1){
var statearr_17286_19940 = state_17233__$1;
(statearr_17286_19940[(1)] = (17));

} else {
var statearr_17287_19942 = state_17233__$1;
(statearr_17287_19942[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (21))){
var inst_17166 = (state_17233[(12)]);
var inst_17157 = inst_17166;
var state_17233__$1 = (function (){var statearr_17292 = state_17233;
(statearr_17292[(11)] = inst_17157);

return statearr_17292;
})();
var statearr_17293_19950 = state_17233__$1;
(statearr_17293_19950[(2)] = null);

(statearr_17293_19950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (13))){
var inst_17195 = (state_17233[(2)]);
var inst_17196 = calc_state();
var inst_17157 = inst_17196;
var state_17233__$1 = (function (){var statearr_17295 = state_17233;
(statearr_17295[(17)] = inst_17195);

(statearr_17295[(11)] = inst_17157);

return statearr_17295;
})();
var statearr_17297_19952 = state_17233__$1;
(statearr_17297_19952[(2)] = null);

(statearr_17297_19952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (22))){
var inst_17225 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17300_19957 = state_17233__$1;
(statearr_17300_19957[(2)] = inst_17225);

(statearr_17300_19957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (6))){
var inst_17180 = (state_17233[(14)]);
var inst_17186 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17180,change);
var state_17233__$1 = state_17233;
var statearr_17304_19959 = state_17233__$1;
(statearr_17304_19959[(2)] = inst_17186);

(statearr_17304_19959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (25))){
var state_17233__$1 = state_17233;
var statearr_17305_19960 = state_17233__$1;
(statearr_17305_19960[(2)] = null);

(statearr_17305_19960[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (17))){
var inst_17168 = (state_17233[(18)]);
var inst_17180 = (state_17233[(14)]);
var inst_17206 = (inst_17168.cljs$core$IFn$_invoke$arity$1 ? inst_17168.cljs$core$IFn$_invoke$arity$1(inst_17180) : inst_17168.call(null,inst_17180));
var inst_17207 = cljs.core.not(inst_17206);
var state_17233__$1 = state_17233;
var statearr_17306_19963 = state_17233__$1;
(statearr_17306_19963[(2)] = inst_17207);

(statearr_17306_19963[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (3))){
var inst_17229 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17233__$1,inst_17229);
} else {
if((state_val_17234 === (12))){
var state_17233__$1 = state_17233;
var statearr_17307_19965 = state_17233__$1;
(statearr_17307_19965[(2)] = null);

(statearr_17307_19965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (2))){
var inst_17157 = (state_17233[(11)]);
var inst_17166 = (state_17233[(12)]);
var inst_17166__$1 = cljs.core.__destructure_map(inst_17157);
var inst_17167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17166__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17166__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17166__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17233__$1 = (function (){var statearr_17308 = state_17233;
(statearr_17308[(12)] = inst_17166__$1);

(statearr_17308[(15)] = inst_17167);

(statearr_17308[(18)] = inst_17168);

return statearr_17308;
})();
return cljs.core.async.ioc_alts_BANG_(state_17233__$1,(4),inst_17171);
} else {
if((state_val_17234 === (23))){
var inst_17216 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
if(cljs.core.truth_(inst_17216)){
var statearr_17315_19971 = state_17233__$1;
(statearr_17315_19971[(1)] = (24));

} else {
var statearr_17316_19972 = state_17233__$1;
(statearr_17316_19972[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (19))){
var inst_17211 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17319_19973 = state_17233__$1;
(statearr_17319_19973[(2)] = inst_17211);

(statearr_17319_19973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (11))){
var inst_17180 = (state_17233[(14)]);
var inst_17192 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17180);
var state_17233__$1 = state_17233;
var statearr_17326_19975 = state_17233__$1;
(statearr_17326_19975[(2)] = inst_17192);

(statearr_17326_19975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (9))){
var inst_17167 = (state_17233[(15)]);
var inst_17180 = (state_17233[(14)]);
var inst_17199 = (state_17233[(19)]);
var inst_17199__$1 = (inst_17167.cljs$core$IFn$_invoke$arity$1 ? inst_17167.cljs$core$IFn$_invoke$arity$1(inst_17180) : inst_17167.call(null,inst_17180));
var state_17233__$1 = (function (){var statearr_17330 = state_17233;
(statearr_17330[(19)] = inst_17199__$1);

return statearr_17330;
})();
if(cljs.core.truth_(inst_17199__$1)){
var statearr_17334_19976 = state_17233__$1;
(statearr_17334_19976[(1)] = (14));

} else {
var statearr_17335_19977 = state_17233__$1;
(statearr_17335_19977[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (5))){
var inst_17181 = (state_17233[(13)]);
var state_17233__$1 = state_17233;
var statearr_17338_19978 = state_17233__$1;
(statearr_17338_19978[(2)] = inst_17181);

(statearr_17338_19978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (14))){
var inst_17199 = (state_17233[(19)]);
var state_17233__$1 = state_17233;
var statearr_17341_19979 = state_17233__$1;
(statearr_17341_19979[(2)] = inst_17199);

(statearr_17341_19979[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (26))){
var inst_17221 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17344_19981 = state_17233__$1;
(statearr_17344_19981[(2)] = inst_17221);

(statearr_17344_19981[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (16))){
var inst_17213 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
if(cljs.core.truth_(inst_17213)){
var statearr_17348_19986 = state_17233__$1;
(statearr_17348_19986[(1)] = (20));

} else {
var statearr_17349_19987 = state_17233__$1;
(statearr_17349_19987[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (10))){
var inst_17227 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17350_19988 = state_17233__$1;
(statearr_17350_19988[(2)] = inst_17227);

(statearr_17350_19988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (18))){
var inst_17204 = (state_17233[(16)]);
var state_17233__$1 = state_17233;
var statearr_17351_19989 = state_17233__$1;
(statearr_17351_19989[(2)] = inst_17204);

(statearr_17351_19989[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (8))){
var inst_17179 = (state_17233[(7)]);
var inst_17190 = (inst_17179 == null);
var state_17233__$1 = state_17233;
if(cljs.core.truth_(inst_17190)){
var statearr_17352_19991 = state_17233__$1;
(statearr_17352_19991[(1)] = (11));

} else {
var statearr_17353_19993 = state_17233__$1;
(statearr_17353_19993[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13723__auto__ = null;
var cljs$core$async$mix_$_state_machine__13723__auto____0 = (function (){
var statearr_17356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17356[(0)] = cljs$core$async$mix_$_state_machine__13723__auto__);

(statearr_17356[(1)] = (1));

return statearr_17356;
});
var cljs$core$async$mix_$_state_machine__13723__auto____1 = (function (state_17233){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_17233);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e17357){var ex__13726__auto__ = e17357;
var statearr_17359_19994 = state_17233;
(statearr_17359_19994[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_17233[(4)]))){
var statearr_17370_19995 = state_17233;
(statearr_17370_19995[(1)] = cljs.core.first((state_17233[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19997 = state_17233;
state_17233 = G__19997;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13723__auto__ = function(state_17233){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13723__auto____1.call(this,state_17233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13723__auto____0;
cljs$core$async$mix_$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13723__auto____1;
return cljs$core$async$mix_$_state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_17385 = f__14925__auto__();
(statearr_17385[(6)] = c__14924__auto___19923);

return statearr_17385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20007 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20007(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20008 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20008(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20009 = (function() {
var G__20010 = null;
var G__20010__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20010__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20010 = function(p,v){
switch(arguments.length){
case 1:
return G__20010__1.call(this,p);
case 2:
return G__20010__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20010.cljs$core$IFn$_invoke$arity$1 = G__20010__1;
G__20010.cljs$core$IFn$_invoke$arity$2 = G__20010__2;
return G__20010;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17420 = arguments.length;
switch (G__17420) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20009(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20009(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17450 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17451){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17451 = meta17451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17452,meta17451__$1){
var self__ = this;
var _17452__$1 = this;
return (new cljs.core.async.t_cljs$core$async17450(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17451__$1));
}));

(cljs.core.async.t_cljs$core$async17450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17452){
var self__ = this;
var _17452__$1 = this;
return self__.meta17451;
}));

(cljs.core.async.t_cljs$core$async17450.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17450.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17450.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17450.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17450.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17450.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17451","meta17451",-1409096785,null)], null);
}));

(cljs.core.async.t_cljs$core$async17450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17450");

(cljs.core.async.t_cljs$core$async17450.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17450.
 */
cljs.core.async.__GT_t_cljs$core$async17450 = (function cljs$core$async$__GT_t_cljs$core$async17450(ch,topic_fn,buf_fn,mults,ensure_mult,meta17451){
return (new cljs.core.async.t_cljs$core$async17450(ch,topic_fn,buf_fn,mults,ensure_mult,meta17451));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17440 = arguments.length;
switch (G__17440) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17436_SHARP_){
if(cljs.core.truth_((p1__17436_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17436_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17436_SHARP_.call(null,topic)))){
return p1__17436_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17436_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17450(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14924__auto___20032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_17600){
var state_val_17601 = (state_17600[(1)]);
if((state_val_17601 === (7))){
var inst_17592 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17610_20037 = state_17600__$1;
(statearr_17610_20037[(2)] = inst_17592);

(statearr_17610_20037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (20))){
var state_17600__$1 = state_17600;
var statearr_17611_20039 = state_17600__$1;
(statearr_17611_20039[(2)] = null);

(statearr_17611_20039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (1))){
var state_17600__$1 = state_17600;
var statearr_17613_20042 = state_17600__$1;
(statearr_17613_20042[(2)] = null);

(statearr_17613_20042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (24))){
var inst_17572 = (state_17600[(7)]);
var inst_17584 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17572);
var state_17600__$1 = state_17600;
var statearr_17615_20045 = state_17600__$1;
(statearr_17615_20045[(2)] = inst_17584);

(statearr_17615_20045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (4))){
var inst_17486 = (state_17600[(8)]);
var inst_17486__$1 = (state_17600[(2)]);
var inst_17487 = (inst_17486__$1 == null);
var state_17600__$1 = (function (){var statearr_17617 = state_17600;
(statearr_17617[(8)] = inst_17486__$1);

return statearr_17617;
})();
if(cljs.core.truth_(inst_17487)){
var statearr_17618_20048 = state_17600__$1;
(statearr_17618_20048[(1)] = (5));

} else {
var statearr_17619_20050 = state_17600__$1;
(statearr_17619_20050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (15))){
var inst_17566 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17621_20052 = state_17600__$1;
(statearr_17621_20052[(2)] = inst_17566);

(statearr_17621_20052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (21))){
var inst_17589 = (state_17600[(2)]);
var state_17600__$1 = (function (){var statearr_17624 = state_17600;
(statearr_17624[(9)] = inst_17589);

return statearr_17624;
})();
var statearr_17627_20054 = state_17600__$1;
(statearr_17627_20054[(2)] = null);

(statearr_17627_20054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (13))){
var inst_17513 = (state_17600[(10)]);
var inst_17538 = cljs.core.chunked_seq_QMARK_(inst_17513);
var state_17600__$1 = state_17600;
if(inst_17538){
var statearr_17639_20055 = state_17600__$1;
(statearr_17639_20055[(1)] = (16));

} else {
var statearr_17640_20056 = state_17600__$1;
(statearr_17640_20056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (22))){
var inst_17581 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
if(cljs.core.truth_(inst_17581)){
var statearr_17643_20057 = state_17600__$1;
(statearr_17643_20057[(1)] = (23));

} else {
var statearr_17644_20058 = state_17600__$1;
(statearr_17644_20058[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (6))){
var inst_17486 = (state_17600[(8)]);
var inst_17572 = (state_17600[(7)]);
var inst_17576 = (state_17600[(11)]);
var inst_17572__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17486) : topic_fn.call(null,inst_17486));
var inst_17575 = cljs.core.deref(mults);
var inst_17576__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17575,inst_17572__$1);
var state_17600__$1 = (function (){var statearr_17649 = state_17600;
(statearr_17649[(7)] = inst_17572__$1);

(statearr_17649[(11)] = inst_17576__$1);

return statearr_17649;
})();
if(cljs.core.truth_(inst_17576__$1)){
var statearr_17650_20060 = state_17600__$1;
(statearr_17650_20060[(1)] = (19));

} else {
var statearr_17654_20061 = state_17600__$1;
(statearr_17654_20061[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (25))){
var inst_17586 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17656_20065 = state_17600__$1;
(statearr_17656_20065[(2)] = inst_17586);

(statearr_17656_20065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (17))){
var inst_17513 = (state_17600[(10)]);
var inst_17557 = cljs.core.first(inst_17513);
var inst_17558 = cljs.core.async.muxch_STAR_(inst_17557);
var inst_17559 = cljs.core.async.close_BANG_(inst_17558);
var inst_17560 = cljs.core.next(inst_17513);
var inst_17497 = inst_17560;
var inst_17498 = null;
var inst_17499 = (0);
var inst_17500 = (0);
var state_17600__$1 = (function (){var statearr_17670 = state_17600;
(statearr_17670[(12)] = inst_17559);

(statearr_17670[(13)] = inst_17497);

(statearr_17670[(14)] = inst_17498);

(statearr_17670[(15)] = inst_17499);

(statearr_17670[(16)] = inst_17500);

return statearr_17670;
})();
var statearr_17672_20070 = state_17600__$1;
(statearr_17672_20070[(2)] = null);

(statearr_17672_20070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (3))){
var inst_17594 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17600__$1,inst_17594);
} else {
if((state_val_17601 === (12))){
var inst_17568 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17675_20072 = state_17600__$1;
(statearr_17675_20072[(2)] = inst_17568);

(statearr_17675_20072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (2))){
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17600__$1,(4),ch);
} else {
if((state_val_17601 === (23))){
var state_17600__$1 = state_17600;
var statearr_17678_20073 = state_17600__$1;
(statearr_17678_20073[(2)] = null);

(statearr_17678_20073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (19))){
var inst_17576 = (state_17600[(11)]);
var inst_17486 = (state_17600[(8)]);
var inst_17579 = cljs.core.async.muxch_STAR_(inst_17576);
var state_17600__$1 = state_17600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17600__$1,(22),inst_17579,inst_17486);
} else {
if((state_val_17601 === (11))){
var inst_17497 = (state_17600[(13)]);
var inst_17513 = (state_17600[(10)]);
var inst_17513__$1 = cljs.core.seq(inst_17497);
var state_17600__$1 = (function (){var statearr_17679 = state_17600;
(statearr_17679[(10)] = inst_17513__$1);

return statearr_17679;
})();
if(inst_17513__$1){
var statearr_17680_20074 = state_17600__$1;
(statearr_17680_20074[(1)] = (13));

} else {
var statearr_17681_20076 = state_17600__$1;
(statearr_17681_20076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (9))){
var inst_17570 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17686_20078 = state_17600__$1;
(statearr_17686_20078[(2)] = inst_17570);

(statearr_17686_20078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (5))){
var inst_17494 = cljs.core.deref(mults);
var inst_17495 = cljs.core.vals(inst_17494);
var inst_17496 = cljs.core.seq(inst_17495);
var inst_17497 = inst_17496;
var inst_17498 = null;
var inst_17499 = (0);
var inst_17500 = (0);
var state_17600__$1 = (function (){var statearr_17696 = state_17600;
(statearr_17696[(13)] = inst_17497);

(statearr_17696[(14)] = inst_17498);

(statearr_17696[(15)] = inst_17499);

(statearr_17696[(16)] = inst_17500);

return statearr_17696;
})();
var statearr_17700_20081 = state_17600__$1;
(statearr_17700_20081[(2)] = null);

(statearr_17700_20081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (14))){
var state_17600__$1 = state_17600;
var statearr_17705_20082 = state_17600__$1;
(statearr_17705_20082[(2)] = null);

(statearr_17705_20082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (16))){
var inst_17513 = (state_17600[(10)]);
var inst_17549 = cljs.core.chunk_first(inst_17513);
var inst_17550 = cljs.core.chunk_rest(inst_17513);
var inst_17553 = cljs.core.count(inst_17549);
var inst_17497 = inst_17550;
var inst_17498 = inst_17549;
var inst_17499 = inst_17553;
var inst_17500 = (0);
var state_17600__$1 = (function (){var statearr_17710 = state_17600;
(statearr_17710[(13)] = inst_17497);

(statearr_17710[(14)] = inst_17498);

(statearr_17710[(15)] = inst_17499);

(statearr_17710[(16)] = inst_17500);

return statearr_17710;
})();
var statearr_17711_20083 = state_17600__$1;
(statearr_17711_20083[(2)] = null);

(statearr_17711_20083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (10))){
var inst_17498 = (state_17600[(14)]);
var inst_17500 = (state_17600[(16)]);
var inst_17497 = (state_17600[(13)]);
var inst_17499 = (state_17600[(15)]);
var inst_17507 = cljs.core._nth(inst_17498,inst_17500);
var inst_17508 = cljs.core.async.muxch_STAR_(inst_17507);
var inst_17509 = cljs.core.async.close_BANG_(inst_17508);
var inst_17510 = (inst_17500 + (1));
var tmp17702 = inst_17499;
var tmp17703 = inst_17498;
var tmp17704 = inst_17497;
var inst_17497__$1 = tmp17704;
var inst_17498__$1 = tmp17703;
var inst_17499__$1 = tmp17702;
var inst_17500__$1 = inst_17510;
var state_17600__$1 = (function (){var statearr_17713 = state_17600;
(statearr_17713[(17)] = inst_17509);

(statearr_17713[(13)] = inst_17497__$1);

(statearr_17713[(14)] = inst_17498__$1);

(statearr_17713[(15)] = inst_17499__$1);

(statearr_17713[(16)] = inst_17500__$1);

return statearr_17713;
})();
var statearr_17718_20086 = state_17600__$1;
(statearr_17718_20086[(2)] = null);

(statearr_17718_20086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (18))){
var inst_17563 = (state_17600[(2)]);
var state_17600__$1 = state_17600;
var statearr_17721_20087 = state_17600__$1;
(statearr_17721_20087[(2)] = inst_17563);

(statearr_17721_20087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17601 === (8))){
var inst_17500 = (state_17600[(16)]);
var inst_17499 = (state_17600[(15)]);
var inst_17504 = (inst_17500 < inst_17499);
var inst_17505 = inst_17504;
var state_17600__$1 = state_17600;
if(cljs.core.truth_(inst_17505)){
var statearr_17725_20088 = state_17600__$1;
(statearr_17725_20088[(1)] = (10));

} else {
var statearr_17726_20089 = state_17600__$1;
(statearr_17726_20089[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13723__auto__ = null;
var cljs$core$async$state_machine__13723__auto____0 = (function (){
var statearr_17733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17733[(0)] = cljs$core$async$state_machine__13723__auto__);

(statearr_17733[(1)] = (1));

return statearr_17733;
});
var cljs$core$async$state_machine__13723__auto____1 = (function (state_17600){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_17600);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e17735){var ex__13726__auto__ = e17735;
var statearr_17738_20094 = state_17600;
(statearr_17738_20094[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_17600[(4)]))){
var statearr_17739_20095 = state_17600;
(statearr_17739_20095[(1)] = cljs.core.first((state_17600[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20097 = state_17600;
state_17600 = G__20097;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$state_machine__13723__auto__ = function(state_17600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13723__auto____1.call(this,state_17600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13723__auto____0;
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13723__auto____1;
return cljs$core$async$state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_17740 = f__14925__auto__();
(statearr_17740[(6)] = c__14924__auto___20032);

return statearr_17740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17747 = arguments.length;
switch (G__17747) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17758 = arguments.length;
switch (G__17758) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17772 = arguments.length;
switch (G__17772) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14924__auto___20107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_17840){
var state_val_17841 = (state_17840[(1)]);
if((state_val_17841 === (7))){
var state_17840__$1 = state_17840;
var statearr_17842_20108 = state_17840__$1;
(statearr_17842_20108[(2)] = null);

(statearr_17842_20108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (1))){
var state_17840__$1 = state_17840;
var statearr_17849_20110 = state_17840__$1;
(statearr_17849_20110[(2)] = null);

(statearr_17849_20110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (4))){
var inst_17791 = (state_17840[(7)]);
var inst_17790 = (state_17840[(8)]);
var inst_17796 = (inst_17791 < inst_17790);
var state_17840__$1 = state_17840;
if(cljs.core.truth_(inst_17796)){
var statearr_17850_20116 = state_17840__$1;
(statearr_17850_20116[(1)] = (6));

} else {
var statearr_17851_20117 = state_17840__$1;
(statearr_17851_20117[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (15))){
var inst_17826 = (state_17840[(9)]);
var inst_17831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17826);
var state_17840__$1 = state_17840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17840__$1,(17),out,inst_17831);
} else {
if((state_val_17841 === (13))){
var inst_17826 = (state_17840[(9)]);
var inst_17826__$1 = (state_17840[(2)]);
var inst_17827 = cljs.core.some(cljs.core.nil_QMARK_,inst_17826__$1);
var state_17840__$1 = (function (){var statearr_17854 = state_17840;
(statearr_17854[(9)] = inst_17826__$1);

return statearr_17854;
})();
if(cljs.core.truth_(inst_17827)){
var statearr_17855_20118 = state_17840__$1;
(statearr_17855_20118[(1)] = (14));

} else {
var statearr_17856_20119 = state_17840__$1;
(statearr_17856_20119[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (6))){
var state_17840__$1 = state_17840;
var statearr_17857_20120 = state_17840__$1;
(statearr_17857_20120[(2)] = null);

(statearr_17857_20120[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (17))){
var inst_17833 = (state_17840[(2)]);
var state_17840__$1 = (function (){var statearr_17873 = state_17840;
(statearr_17873[(10)] = inst_17833);

return statearr_17873;
})();
var statearr_17879_20121 = state_17840__$1;
(statearr_17879_20121[(2)] = null);

(statearr_17879_20121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (3))){
var inst_17838 = (state_17840[(2)]);
var state_17840__$1 = state_17840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17840__$1,inst_17838);
} else {
if((state_val_17841 === (12))){
var _ = (function (){var statearr_17881 = state_17840;
(statearr_17881[(4)] = cljs.core.rest((state_17840[(4)])));

return statearr_17881;
})();
var state_17840__$1 = state_17840;
var ex17863 = (state_17840__$1[(2)]);
var statearr_17882_20122 = state_17840__$1;
(statearr_17882_20122[(5)] = ex17863);


if((ex17863 instanceof Object)){
var statearr_17888_20123 = state_17840__$1;
(statearr_17888_20123[(1)] = (11));

(statearr_17888_20123[(5)] = null);

} else {
throw ex17863;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (2))){
var inst_17788 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17790 = cnt;
var inst_17791 = (0);
var state_17840__$1 = (function (){var statearr_17891 = state_17840;
(statearr_17891[(11)] = inst_17788);

(statearr_17891[(8)] = inst_17790);

(statearr_17891[(7)] = inst_17791);

return statearr_17891;
})();
var statearr_17894_20124 = state_17840__$1;
(statearr_17894_20124[(2)] = null);

(statearr_17894_20124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (11))){
var inst_17799 = (state_17840[(2)]);
var inst_17800 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17840__$1 = (function (){var statearr_17900 = state_17840;
(statearr_17900[(12)] = inst_17799);

return statearr_17900;
})();
var statearr_17901_20125 = state_17840__$1;
(statearr_17901_20125[(2)] = inst_17800);

(statearr_17901_20125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (9))){
var inst_17791 = (state_17840[(7)]);
var _ = (function (){var statearr_17907 = state_17840;
(statearr_17907[(4)] = cljs.core.cons((12),(state_17840[(4)])));

return statearr_17907;
})();
var inst_17812 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17791) : chs__$1.call(null,inst_17791));
var inst_17813 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17791) : done.call(null,inst_17791));
var inst_17814 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17812,inst_17813);
var ___$1 = (function (){var statearr_17908 = state_17840;
(statearr_17908[(4)] = cljs.core.rest((state_17840[(4)])));

return statearr_17908;
})();
var state_17840__$1 = state_17840;
var statearr_17909_20126 = state_17840__$1;
(statearr_17909_20126[(2)] = inst_17814);

(statearr_17909_20126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (5))){
var inst_17824 = (state_17840[(2)]);
var state_17840__$1 = (function (){var statearr_17910 = state_17840;
(statearr_17910[(13)] = inst_17824);

return statearr_17910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17840__$1,(13),dchan);
} else {
if((state_val_17841 === (14))){
var inst_17829 = cljs.core.async.close_BANG_(out);
var state_17840__$1 = state_17840;
var statearr_17916_20128 = state_17840__$1;
(statearr_17916_20128[(2)] = inst_17829);

(statearr_17916_20128[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (16))){
var inst_17836 = (state_17840[(2)]);
var state_17840__$1 = state_17840;
var statearr_17917_20129 = state_17840__$1;
(statearr_17917_20129[(2)] = inst_17836);

(statearr_17917_20129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (10))){
var inst_17791 = (state_17840[(7)]);
var inst_17817 = (state_17840[(2)]);
var inst_17818 = (inst_17791 + (1));
var inst_17791__$1 = inst_17818;
var state_17840__$1 = (function (){var statearr_17918 = state_17840;
(statearr_17918[(14)] = inst_17817);

(statearr_17918[(7)] = inst_17791__$1);

return statearr_17918;
})();
var statearr_17920_20131 = state_17840__$1;
(statearr_17920_20131[(2)] = null);

(statearr_17920_20131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (8))){
var inst_17822 = (state_17840[(2)]);
var state_17840__$1 = state_17840;
var statearr_17922_20132 = state_17840__$1;
(statearr_17922_20132[(2)] = inst_17822);

(statearr_17922_20132[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13723__auto__ = null;
var cljs$core$async$state_machine__13723__auto____0 = (function (){
var statearr_17938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17938[(0)] = cljs$core$async$state_machine__13723__auto__);

(statearr_17938[(1)] = (1));

return statearr_17938;
});
var cljs$core$async$state_machine__13723__auto____1 = (function (state_17840){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_17840);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e17939){var ex__13726__auto__ = e17939;
var statearr_17940_20133 = state_17840;
(statearr_17940_20133[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_17840[(4)]))){
var statearr_17942_20134 = state_17840;
(statearr_17942_20134[(1)] = cljs.core.first((state_17840[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20139 = state_17840;
state_17840 = G__20139;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$state_machine__13723__auto__ = function(state_17840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13723__auto____1.call(this,state_17840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13723__auto____0;
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13723__auto____1;
return cljs$core$async$state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_17954 = f__14925__auto__();
(statearr_17954[(6)] = c__14924__auto___20107);

return statearr_17954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17959 = arguments.length;
switch (G__17959) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14924__auto___20144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_17995){
var state_val_17996 = (state_17995[(1)]);
if((state_val_17996 === (7))){
var inst_17973 = (state_17995[(7)]);
var inst_17974 = (state_17995[(8)]);
var inst_17973__$1 = (state_17995[(2)]);
var inst_17974__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17973__$1,(0),null);
var inst_17975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17973__$1,(1),null);
var inst_17976 = (inst_17974__$1 == null);
var state_17995__$1 = (function (){var statearr_17997 = state_17995;
(statearr_17997[(7)] = inst_17973__$1);

(statearr_17997[(8)] = inst_17974__$1);

(statearr_17997[(9)] = inst_17975);

return statearr_17997;
})();
if(cljs.core.truth_(inst_17976)){
var statearr_18002_20146 = state_17995__$1;
(statearr_18002_20146[(1)] = (8));

} else {
var statearr_18004_20147 = state_17995__$1;
(statearr_18004_20147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (1))){
var inst_17963 = cljs.core.vec(chs);
var inst_17964 = inst_17963;
var state_17995__$1 = (function (){var statearr_18007 = state_17995;
(statearr_18007[(10)] = inst_17964);

return statearr_18007;
})();
var statearr_18008_20148 = state_17995__$1;
(statearr_18008_20148[(2)] = null);

(statearr_18008_20148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (4))){
var inst_17964 = (state_17995[(10)]);
var state_17995__$1 = state_17995;
return cljs.core.async.ioc_alts_BANG_(state_17995__$1,(7),inst_17964);
} else {
if((state_val_17996 === (6))){
var inst_17991 = (state_17995[(2)]);
var state_17995__$1 = state_17995;
var statearr_18011_20149 = state_17995__$1;
(statearr_18011_20149[(2)] = inst_17991);

(statearr_18011_20149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (3))){
var inst_17993 = (state_17995[(2)]);
var state_17995__$1 = state_17995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17995__$1,inst_17993);
} else {
if((state_val_17996 === (2))){
var inst_17964 = (state_17995[(10)]);
var inst_17966 = cljs.core.count(inst_17964);
var inst_17967 = (inst_17966 > (0));
var state_17995__$1 = state_17995;
if(cljs.core.truth_(inst_17967)){
var statearr_18021_20151 = state_17995__$1;
(statearr_18021_20151[(1)] = (4));

} else {
var statearr_18022_20152 = state_17995__$1;
(statearr_18022_20152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (11))){
var inst_17964 = (state_17995[(10)]);
var inst_17984 = (state_17995[(2)]);
var tmp18017 = inst_17964;
var inst_17964__$1 = tmp18017;
var state_17995__$1 = (function (){var statearr_18023 = state_17995;
(statearr_18023[(11)] = inst_17984);

(statearr_18023[(10)] = inst_17964__$1);

return statearr_18023;
})();
var statearr_18024_20153 = state_17995__$1;
(statearr_18024_20153[(2)] = null);

(statearr_18024_20153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (9))){
var inst_17974 = (state_17995[(8)]);
var state_17995__$1 = state_17995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17995__$1,(11),out,inst_17974);
} else {
if((state_val_17996 === (5))){
var inst_17989 = cljs.core.async.close_BANG_(out);
var state_17995__$1 = state_17995;
var statearr_18036_20154 = state_17995__$1;
(statearr_18036_20154[(2)] = inst_17989);

(statearr_18036_20154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (10))){
var inst_17987 = (state_17995[(2)]);
var state_17995__$1 = state_17995;
var statearr_18038_20155 = state_17995__$1;
(statearr_18038_20155[(2)] = inst_17987);

(statearr_18038_20155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17996 === (8))){
var inst_17964 = (state_17995[(10)]);
var inst_17973 = (state_17995[(7)]);
var inst_17974 = (state_17995[(8)]);
var inst_17975 = (state_17995[(9)]);
var inst_17979 = (function (){var cs = inst_17964;
var vec__17969 = inst_17973;
var v = inst_17974;
var c = inst_17975;
return (function (p1__17956_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17956_SHARP_);
});
})();
var inst_17980 = cljs.core.filterv(inst_17979,inst_17964);
var inst_17964__$1 = inst_17980;
var state_17995__$1 = (function (){var statearr_18044 = state_17995;
(statearr_18044[(10)] = inst_17964__$1);

return statearr_18044;
})();
var statearr_18045_20156 = state_17995__$1;
(statearr_18045_20156[(2)] = null);

(statearr_18045_20156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13723__auto__ = null;
var cljs$core$async$state_machine__13723__auto____0 = (function (){
var statearr_18052 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18052[(0)] = cljs$core$async$state_machine__13723__auto__);

(statearr_18052[(1)] = (1));

return statearr_18052;
});
var cljs$core$async$state_machine__13723__auto____1 = (function (state_17995){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_17995);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e18055){var ex__13726__auto__ = e18055;
var statearr_18056_20158 = state_17995;
(statearr_18056_20158[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_17995[(4)]))){
var statearr_18058_20160 = state_17995;
(statearr_18058_20160[(1)] = cljs.core.first((state_17995[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20163 = state_17995;
state_17995 = G__20163;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$state_machine__13723__auto__ = function(state_17995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13723__auto____1.call(this,state_17995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13723__auto____0;
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13723__auto____1;
return cljs$core$async$state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_18059 = f__14925__auto__();
(statearr_18059[(6)] = c__14924__auto___20144);

return statearr_18059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18072 = arguments.length;
switch (G__18072) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14924__auto___20168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_18107){
var state_val_18108 = (state_18107[(1)]);
if((state_val_18108 === (7))){
var inst_18089 = (state_18107[(7)]);
var inst_18089__$1 = (state_18107[(2)]);
var inst_18090 = (inst_18089__$1 == null);
var inst_18091 = cljs.core.not(inst_18090);
var state_18107__$1 = (function (){var statearr_18112 = state_18107;
(statearr_18112[(7)] = inst_18089__$1);

return statearr_18112;
})();
if(inst_18091){
var statearr_18115_20179 = state_18107__$1;
(statearr_18115_20179[(1)] = (8));

} else {
var statearr_18117_20180 = state_18107__$1;
(statearr_18117_20180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (1))){
var inst_18084 = (0);
var state_18107__$1 = (function (){var statearr_18118 = state_18107;
(statearr_18118[(8)] = inst_18084);

return statearr_18118;
})();
var statearr_18119_20181 = state_18107__$1;
(statearr_18119_20181[(2)] = null);

(statearr_18119_20181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (4))){
var state_18107__$1 = state_18107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18107__$1,(7),ch);
} else {
if((state_val_18108 === (6))){
var inst_18102 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18127_20182 = state_18107__$1;
(statearr_18127_20182[(2)] = inst_18102);

(statearr_18127_20182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (3))){
var inst_18104 = (state_18107[(2)]);
var inst_18105 = cljs.core.async.close_BANG_(out);
var state_18107__$1 = (function (){var statearr_18134 = state_18107;
(statearr_18134[(9)] = inst_18104);

return statearr_18134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18107__$1,inst_18105);
} else {
if((state_val_18108 === (2))){
var inst_18084 = (state_18107[(8)]);
var inst_18086 = (inst_18084 < n);
var state_18107__$1 = state_18107;
if(cljs.core.truth_(inst_18086)){
var statearr_18139_20186 = state_18107__$1;
(statearr_18139_20186[(1)] = (4));

} else {
var statearr_18140_20187 = state_18107__$1;
(statearr_18140_20187[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (11))){
var inst_18084 = (state_18107[(8)]);
var inst_18094 = (state_18107[(2)]);
var inst_18095 = (inst_18084 + (1));
var inst_18084__$1 = inst_18095;
var state_18107__$1 = (function (){var statearr_18142 = state_18107;
(statearr_18142[(10)] = inst_18094);

(statearr_18142[(8)] = inst_18084__$1);

return statearr_18142;
})();
var statearr_18146_20188 = state_18107__$1;
(statearr_18146_20188[(2)] = null);

(statearr_18146_20188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (9))){
var state_18107__$1 = state_18107;
var statearr_18148_20189 = state_18107__$1;
(statearr_18148_20189[(2)] = null);

(statearr_18148_20189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (5))){
var state_18107__$1 = state_18107;
var statearr_18151_20190 = state_18107__$1;
(statearr_18151_20190[(2)] = null);

(statearr_18151_20190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (10))){
var inst_18099 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18156_20191 = state_18107__$1;
(statearr_18156_20191[(2)] = inst_18099);

(statearr_18156_20191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (8))){
var inst_18089 = (state_18107[(7)]);
var state_18107__$1 = state_18107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18107__$1,(11),out,inst_18089);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13723__auto__ = null;
var cljs$core$async$state_machine__13723__auto____0 = (function (){
var statearr_18161 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18161[(0)] = cljs$core$async$state_machine__13723__auto__);

(statearr_18161[(1)] = (1));

return statearr_18161;
});
var cljs$core$async$state_machine__13723__auto____1 = (function (state_18107){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_18107);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e18165){var ex__13726__auto__ = e18165;
var statearr_18166_20192 = state_18107;
(statearr_18166_20192[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_18107[(4)]))){
var statearr_18167_20193 = state_18107;
(statearr_18167_20193[(1)] = cljs.core.first((state_18107[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20194 = state_18107;
state_18107 = G__20194;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$state_machine__13723__auto__ = function(state_18107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13723__auto____1.call(this,state_18107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13723__auto____0;
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13723__auto____1;
return cljs$core$async$state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_18168 = f__14925__auto__();
(statearr_18168[(6)] = c__14924__auto___20168);

return statearr_18168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18183 = (function (f,ch,meta18172,_,fn1,meta18184){
this.f = f;
this.ch = ch;
this.meta18172 = meta18172;
this._ = _;
this.fn1 = fn1;
this.meta18184 = meta18184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18185,meta18184__$1){
var self__ = this;
var _18185__$1 = this;
return (new cljs.core.async.t_cljs$core$async18183(self__.f,self__.ch,self__.meta18172,self__._,self__.fn1,meta18184__$1));
}));

(cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18185){
var self__ = this;
var _18185__$1 = this;
return self__.meta18184;
}));

(cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18170_SHARP_){
var G__18195 = (((p1__18170_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18170_SHARP_) : self__.f.call(null,p1__18170_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18195) : f1.call(null,G__18195));
});
}));

(cljs.core.async.t_cljs$core$async18183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18172","meta18172",-1954329518,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18171","cljs.core.async/t_cljs$core$async18171",-1215912021,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18184","meta18184",1108319762,null)], null);
}));

(cljs.core.async.t_cljs$core$async18183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18183");

(cljs.core.async.t_cljs$core$async18183.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18183.
 */
cljs.core.async.__GT_t_cljs$core$async18183 = (function cljs$core$async$__GT_t_cljs$core$async18183(f,ch,meta18172,_,fn1,meta18184){
return (new cljs.core.async.t_cljs$core$async18183(f,ch,meta18172,_,fn1,meta18184));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18171 = (function (f,ch,meta18172){
this.f = f;
this.ch = ch;
this.meta18172 = meta18172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18173,meta18172__$1){
var self__ = this;
var _18173__$1 = this;
return (new cljs.core.async.t_cljs$core$async18171(self__.f,self__.ch,meta18172__$1));
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18173){
var self__ = this;
var _18173__$1 = this;
return self__.meta18172;
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18183(self__.f,self__.ch,self__.meta18172,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18211 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18211) : self__.f.call(null,G__18211));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18172","meta18172",-1954329518,null)], null);
}));

(cljs.core.async.t_cljs$core$async18171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18171");

(cljs.core.async.t_cljs$core$async18171.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18171.
 */
cljs.core.async.__GT_t_cljs$core$async18171 = (function cljs$core$async$__GT_t_cljs$core$async18171(f,ch,meta18172){
return (new cljs.core.async.t_cljs$core$async18171(f,ch,meta18172));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18171(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18226 = (function (f,ch,meta18227){
this.f = f;
this.ch = ch;
this.meta18227 = meta18227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18228,meta18227__$1){
var self__ = this;
var _18228__$1 = this;
return (new cljs.core.async.t_cljs$core$async18226(self__.f,self__.ch,meta18227__$1));
}));

(cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18228){
var self__ = this;
var _18228__$1 = this;
return self__.meta18227;
}));

(cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18227","meta18227",-101448717,null)], null);
}));

(cljs.core.async.t_cljs$core$async18226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18226");

(cljs.core.async.t_cljs$core$async18226.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18226.
 */
cljs.core.async.__GT_t_cljs$core$async18226 = (function cljs$core$async$__GT_t_cljs$core$async18226(f,ch,meta18227){
return (new cljs.core.async.t_cljs$core$async18226(f,ch,meta18227));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18226(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18290 = (function (p,ch,meta18291){
this.p = p;
this.ch = ch;
this.meta18291 = meta18291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18292,meta18291__$1){
var self__ = this;
var _18292__$1 = this;
return (new cljs.core.async.t_cljs$core$async18290(self__.p,self__.ch,meta18291__$1));
}));

(cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18292){
var self__ = this;
var _18292__$1 = this;
return self__.meta18291;
}));

(cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18291","meta18291",1434107500,null)], null);
}));

(cljs.core.async.t_cljs$core$async18290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18290");

(cljs.core.async.t_cljs$core$async18290.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18290.
 */
cljs.core.async.__GT_t_cljs$core$async18290 = (function cljs$core$async$__GT_t_cljs$core$async18290(p,ch,meta18291){
return (new cljs.core.async.t_cljs$core$async18290(p,ch,meta18291));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18290(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18315 = arguments.length;
switch (G__18315) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14924__auto___20216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_18340){
var state_val_18341 = (state_18340[(1)]);
if((state_val_18341 === (7))){
var inst_18334 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
var statearr_18342_20217 = state_18340__$1;
(statearr_18342_20217[(2)] = inst_18334);

(statearr_18342_20217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (1))){
var state_18340__$1 = state_18340;
var statearr_18343_20219 = state_18340__$1;
(statearr_18343_20219[(2)] = null);

(statearr_18343_20219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (4))){
var inst_18320 = (state_18340[(7)]);
var inst_18320__$1 = (state_18340[(2)]);
var inst_18321 = (inst_18320__$1 == null);
var state_18340__$1 = (function (){var statearr_18344 = state_18340;
(statearr_18344[(7)] = inst_18320__$1);

return statearr_18344;
})();
if(cljs.core.truth_(inst_18321)){
var statearr_18346_20220 = state_18340__$1;
(statearr_18346_20220[(1)] = (5));

} else {
var statearr_18347_20221 = state_18340__$1;
(statearr_18347_20221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (6))){
var inst_18320 = (state_18340[(7)]);
var inst_18325 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18320) : p.call(null,inst_18320));
var state_18340__$1 = state_18340;
if(cljs.core.truth_(inst_18325)){
var statearr_18348_20223 = state_18340__$1;
(statearr_18348_20223[(1)] = (8));

} else {
var statearr_18349_20224 = state_18340__$1;
(statearr_18349_20224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (3))){
var inst_18336 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18340__$1,inst_18336);
} else {
if((state_val_18341 === (2))){
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18340__$1,(4),ch);
} else {
if((state_val_18341 === (11))){
var inst_18328 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
var statearr_18350_20225 = state_18340__$1;
(statearr_18350_20225[(2)] = inst_18328);

(statearr_18350_20225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (9))){
var state_18340__$1 = state_18340;
var statearr_18351_20226 = state_18340__$1;
(statearr_18351_20226[(2)] = null);

(statearr_18351_20226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (5))){
var inst_18323 = cljs.core.async.close_BANG_(out);
var state_18340__$1 = state_18340;
var statearr_18352_20227 = state_18340__$1;
(statearr_18352_20227[(2)] = inst_18323);

(statearr_18352_20227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (10))){
var inst_18331 = (state_18340[(2)]);
var state_18340__$1 = (function (){var statearr_18353 = state_18340;
(statearr_18353[(8)] = inst_18331);

return statearr_18353;
})();
var statearr_18354_20228 = state_18340__$1;
(statearr_18354_20228[(2)] = null);

(statearr_18354_20228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (8))){
var inst_18320 = (state_18340[(7)]);
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18340__$1,(11),out,inst_18320);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13723__auto__ = null;
var cljs$core$async$state_machine__13723__auto____0 = (function (){
var statearr_18358 = [null,null,null,null,null,null,null,null,null];
(statearr_18358[(0)] = cljs$core$async$state_machine__13723__auto__);

(statearr_18358[(1)] = (1));

return statearr_18358;
});
var cljs$core$async$state_machine__13723__auto____1 = (function (state_18340){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_18340);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e18359){var ex__13726__auto__ = e18359;
var statearr_18360_20230 = state_18340;
(statearr_18360_20230[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_18340[(4)]))){
var statearr_18366_20232 = state_18340;
(statearr_18366_20232[(1)] = cljs.core.first((state_18340[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20233 = state_18340;
state_18340 = G__20233;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$state_machine__13723__auto__ = function(state_18340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13723__auto____1.call(this,state_18340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13723__auto____0;
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13723__auto____1;
return cljs$core$async$state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_18367 = f__14925__auto__();
(statearr_18367[(6)] = c__14924__auto___20216);

return statearr_18367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18369 = arguments.length;
switch (G__18369) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14924__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_18441){
var state_val_18442 = (state_18441[(1)]);
if((state_val_18442 === (7))){
var inst_18435 = (state_18441[(2)]);
var state_18441__$1 = state_18441;
var statearr_18446_20239 = state_18441__$1;
(statearr_18446_20239[(2)] = inst_18435);

(statearr_18446_20239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (20))){
var inst_18397 = (state_18441[(7)]);
var inst_18414 = (state_18441[(2)]);
var inst_18415 = cljs.core.next(inst_18397);
var inst_18383 = inst_18415;
var inst_18384 = null;
var inst_18385 = (0);
var inst_18386 = (0);
var state_18441__$1 = (function (){var statearr_18447 = state_18441;
(statearr_18447[(8)] = inst_18414);

(statearr_18447[(9)] = inst_18383);

(statearr_18447[(10)] = inst_18384);

(statearr_18447[(11)] = inst_18385);

(statearr_18447[(12)] = inst_18386);

return statearr_18447;
})();
var statearr_18448_20242 = state_18441__$1;
(statearr_18448_20242[(2)] = null);

(statearr_18448_20242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (1))){
var state_18441__$1 = state_18441;
var statearr_18449_20243 = state_18441__$1;
(statearr_18449_20243[(2)] = null);

(statearr_18449_20243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (4))){
var inst_18372 = (state_18441[(13)]);
var inst_18372__$1 = (state_18441[(2)]);
var inst_18373 = (inst_18372__$1 == null);
var state_18441__$1 = (function (){var statearr_18453 = state_18441;
(statearr_18453[(13)] = inst_18372__$1);

return statearr_18453;
})();
if(cljs.core.truth_(inst_18373)){
var statearr_18460_20246 = state_18441__$1;
(statearr_18460_20246[(1)] = (5));

} else {
var statearr_18461_20247 = state_18441__$1;
(statearr_18461_20247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (15))){
var state_18441__$1 = state_18441;
var statearr_18465_20250 = state_18441__$1;
(statearr_18465_20250[(2)] = null);

(statearr_18465_20250[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (21))){
var state_18441__$1 = state_18441;
var statearr_18467_20252 = state_18441__$1;
(statearr_18467_20252[(2)] = null);

(statearr_18467_20252[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (13))){
var inst_18386 = (state_18441[(12)]);
var inst_18383 = (state_18441[(9)]);
var inst_18384 = (state_18441[(10)]);
var inst_18385 = (state_18441[(11)]);
var inst_18393 = (state_18441[(2)]);
var inst_18394 = (inst_18386 + (1));
var tmp18462 = inst_18383;
var tmp18463 = inst_18385;
var tmp18464 = inst_18384;
var inst_18383__$1 = tmp18462;
var inst_18384__$1 = tmp18464;
var inst_18385__$1 = tmp18463;
var inst_18386__$1 = inst_18394;
var state_18441__$1 = (function (){var statearr_18470 = state_18441;
(statearr_18470[(14)] = inst_18393);

(statearr_18470[(9)] = inst_18383__$1);

(statearr_18470[(10)] = inst_18384__$1);

(statearr_18470[(11)] = inst_18385__$1);

(statearr_18470[(12)] = inst_18386__$1);

return statearr_18470;
})();
var statearr_18471_20253 = state_18441__$1;
(statearr_18471_20253[(2)] = null);

(statearr_18471_20253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (22))){
var state_18441__$1 = state_18441;
var statearr_18472_20256 = state_18441__$1;
(statearr_18472_20256[(2)] = null);

(statearr_18472_20256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (6))){
var inst_18372 = (state_18441[(13)]);
var inst_18381 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18372) : f.call(null,inst_18372));
var inst_18382 = cljs.core.seq(inst_18381);
var inst_18383 = inst_18382;
var inst_18384 = null;
var inst_18385 = (0);
var inst_18386 = (0);
var state_18441__$1 = (function (){var statearr_18474 = state_18441;
(statearr_18474[(9)] = inst_18383);

(statearr_18474[(10)] = inst_18384);

(statearr_18474[(11)] = inst_18385);

(statearr_18474[(12)] = inst_18386);

return statearr_18474;
})();
var statearr_18476_20264 = state_18441__$1;
(statearr_18476_20264[(2)] = null);

(statearr_18476_20264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (17))){
var inst_18397 = (state_18441[(7)]);
var inst_18407 = cljs.core.chunk_first(inst_18397);
var inst_18408 = cljs.core.chunk_rest(inst_18397);
var inst_18409 = cljs.core.count(inst_18407);
var inst_18383 = inst_18408;
var inst_18384 = inst_18407;
var inst_18385 = inst_18409;
var inst_18386 = (0);
var state_18441__$1 = (function (){var statearr_18477 = state_18441;
(statearr_18477[(9)] = inst_18383);

(statearr_18477[(10)] = inst_18384);

(statearr_18477[(11)] = inst_18385);

(statearr_18477[(12)] = inst_18386);

return statearr_18477;
})();
var statearr_18478_20272 = state_18441__$1;
(statearr_18478_20272[(2)] = null);

(statearr_18478_20272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (3))){
var inst_18437 = (state_18441[(2)]);
var state_18441__$1 = state_18441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18441__$1,inst_18437);
} else {
if((state_val_18442 === (12))){
var inst_18423 = (state_18441[(2)]);
var state_18441__$1 = state_18441;
var statearr_18484_20273 = state_18441__$1;
(statearr_18484_20273[(2)] = inst_18423);

(statearr_18484_20273[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (2))){
var state_18441__$1 = state_18441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18441__$1,(4),in$);
} else {
if((state_val_18442 === (23))){
var inst_18433 = (state_18441[(2)]);
var state_18441__$1 = state_18441;
var statearr_18486_20274 = state_18441__$1;
(statearr_18486_20274[(2)] = inst_18433);

(statearr_18486_20274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (19))){
var inst_18418 = (state_18441[(2)]);
var state_18441__$1 = state_18441;
var statearr_18488_20278 = state_18441__$1;
(statearr_18488_20278[(2)] = inst_18418);

(statearr_18488_20278[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (11))){
var inst_18383 = (state_18441[(9)]);
var inst_18397 = (state_18441[(7)]);
var inst_18397__$1 = cljs.core.seq(inst_18383);
var state_18441__$1 = (function (){var statearr_18489 = state_18441;
(statearr_18489[(7)] = inst_18397__$1);

return statearr_18489;
})();
if(inst_18397__$1){
var statearr_18490_20286 = state_18441__$1;
(statearr_18490_20286[(1)] = (14));

} else {
var statearr_18491_20287 = state_18441__$1;
(statearr_18491_20287[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (9))){
var inst_18425 = (state_18441[(2)]);
var inst_18427 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18441__$1 = (function (){var statearr_18492 = state_18441;
(statearr_18492[(15)] = inst_18425);

return statearr_18492;
})();
if(cljs.core.truth_(inst_18427)){
var statearr_18493_20290 = state_18441__$1;
(statearr_18493_20290[(1)] = (21));

} else {
var statearr_18494_20291 = state_18441__$1;
(statearr_18494_20291[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (5))){
var inst_18375 = cljs.core.async.close_BANG_(out);
var state_18441__$1 = state_18441;
var statearr_18495_20292 = state_18441__$1;
(statearr_18495_20292[(2)] = inst_18375);

(statearr_18495_20292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (14))){
var inst_18397 = (state_18441[(7)]);
var inst_18404 = cljs.core.chunked_seq_QMARK_(inst_18397);
var state_18441__$1 = state_18441;
if(inst_18404){
var statearr_18502_20293 = state_18441__$1;
(statearr_18502_20293[(1)] = (17));

} else {
var statearr_18503_20294 = state_18441__$1;
(statearr_18503_20294[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (16))){
var inst_18421 = (state_18441[(2)]);
var state_18441__$1 = state_18441;
var statearr_18507_20295 = state_18441__$1;
(statearr_18507_20295[(2)] = inst_18421);

(statearr_18507_20295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18442 === (10))){
var inst_18384 = (state_18441[(10)]);
var inst_18386 = (state_18441[(12)]);
var inst_18391 = cljs.core._nth(inst_18384,inst_18386);
var state_18441__$1 = state_18441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18441__$1,(13),out,inst_18391);
} else {
if((state_val_18442 === (18))){
var inst_18397 = (state_18441[(7)]);
var inst_18412 = cljs.core.first(inst_18397);
var state_18441__$1 = state_18441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18441__$1,(20),out,inst_18412);
} else {
if((state_val_18442 === (8))){
var inst_18386 = (state_18441[(12)]);
var inst_18385 = (state_18441[(11)]);
var inst_18388 = (inst_18386 < inst_18385);
var inst_18389 = inst_18388;
var state_18441__$1 = state_18441;
if(cljs.core.truth_(inst_18389)){
var statearr_18512_20296 = state_18441__$1;
(statearr_18512_20296[(1)] = (10));

} else {
var statearr_18513_20297 = state_18441__$1;
(statearr_18513_20297[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13723__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13723__auto____0 = (function (){
var statearr_18516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18516[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13723__auto__);

(statearr_18516[(1)] = (1));

return statearr_18516;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13723__auto____1 = (function (state_18441){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_18441);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e18519){var ex__13726__auto__ = e18519;
var statearr_18520_20315 = state_18441;
(statearr_18520_20315[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_18441[(4)]))){
var statearr_18523_20316 = state_18441;
(statearr_18523_20316[(1)] = cljs.core.first((state_18441[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20318 = state_18441;
state_18441 = G__20318;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13723__auto__ = function(state_18441){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13723__auto____1.call(this,state_18441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13723__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13723__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_18534 = f__14925__auto__();
(statearr_18534[(6)] = c__14924__auto__);

return statearr_18534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));

return c__14924__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18537 = arguments.length;
switch (G__18537) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18550 = arguments.length;
switch (G__18550) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18557 = arguments.length;
switch (G__18557) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14924__auto___20347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_18635){
var state_val_18637 = (state_18635[(1)]);
if((state_val_18637 === (7))){
var inst_18625 = (state_18635[(2)]);
var state_18635__$1 = state_18635;
var statearr_18653_20348 = state_18635__$1;
(statearr_18653_20348[(2)] = inst_18625);

(statearr_18653_20348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (1))){
var inst_18598 = null;
var state_18635__$1 = (function (){var statearr_18654 = state_18635;
(statearr_18654[(7)] = inst_18598);

return statearr_18654;
})();
var statearr_18656_20349 = state_18635__$1;
(statearr_18656_20349[(2)] = null);

(statearr_18656_20349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (4))){
var inst_18605 = (state_18635[(8)]);
var inst_18605__$1 = (state_18635[(2)]);
var inst_18606 = (inst_18605__$1 == null);
var inst_18607 = cljs.core.not(inst_18606);
var state_18635__$1 = (function (){var statearr_18669 = state_18635;
(statearr_18669[(8)] = inst_18605__$1);

return statearr_18669;
})();
if(inst_18607){
var statearr_18670_20351 = state_18635__$1;
(statearr_18670_20351[(1)] = (5));

} else {
var statearr_18671_20353 = state_18635__$1;
(statearr_18671_20353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (6))){
var state_18635__$1 = state_18635;
var statearr_18678_20354 = state_18635__$1;
(statearr_18678_20354[(2)] = null);

(statearr_18678_20354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (3))){
var inst_18627 = (state_18635[(2)]);
var inst_18629 = cljs.core.async.close_BANG_(out);
var state_18635__$1 = (function (){var statearr_18683 = state_18635;
(statearr_18683[(9)] = inst_18627);

return statearr_18683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18635__$1,inst_18629);
} else {
if((state_val_18637 === (2))){
var state_18635__$1 = state_18635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18635__$1,(4),ch);
} else {
if((state_val_18637 === (11))){
var inst_18605 = (state_18635[(8)]);
var inst_18619 = (state_18635[(2)]);
var inst_18598 = inst_18605;
var state_18635__$1 = (function (){var statearr_18686 = state_18635;
(statearr_18686[(10)] = inst_18619);

(statearr_18686[(7)] = inst_18598);

return statearr_18686;
})();
var statearr_18691_20355 = state_18635__$1;
(statearr_18691_20355[(2)] = null);

(statearr_18691_20355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (9))){
var inst_18605 = (state_18635[(8)]);
var state_18635__$1 = state_18635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18635__$1,(11),out,inst_18605);
} else {
if((state_val_18637 === (5))){
var inst_18605 = (state_18635[(8)]);
var inst_18598 = (state_18635[(7)]);
var inst_18609 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18605,inst_18598);
var state_18635__$1 = state_18635;
if(inst_18609){
var statearr_18700_20358 = state_18635__$1;
(statearr_18700_20358[(1)] = (8));

} else {
var statearr_18701_20359 = state_18635__$1;
(statearr_18701_20359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (10))){
var inst_18622 = (state_18635[(2)]);
var state_18635__$1 = state_18635;
var statearr_18704_20360 = state_18635__$1;
(statearr_18704_20360[(2)] = inst_18622);

(statearr_18704_20360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18637 === (8))){
var inst_18598 = (state_18635[(7)]);
var tmp18693 = inst_18598;
var inst_18598__$1 = tmp18693;
var state_18635__$1 = (function (){var statearr_18706 = state_18635;
(statearr_18706[(7)] = inst_18598__$1);

return statearr_18706;
})();
var statearr_18713_20361 = state_18635__$1;
(statearr_18713_20361[(2)] = null);

(statearr_18713_20361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13723__auto__ = null;
var cljs$core$async$state_machine__13723__auto____0 = (function (){
var statearr_18717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18717[(0)] = cljs$core$async$state_machine__13723__auto__);

(statearr_18717[(1)] = (1));

return statearr_18717;
});
var cljs$core$async$state_machine__13723__auto____1 = (function (state_18635){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_18635);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e18721){var ex__13726__auto__ = e18721;
var statearr_18722_20362 = state_18635;
(statearr_18722_20362[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_18635[(4)]))){
var statearr_18723_20363 = state_18635;
(statearr_18723_20363[(1)] = cljs.core.first((state_18635[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20364 = state_18635;
state_18635 = G__20364;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$state_machine__13723__auto__ = function(state_18635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13723__auto____1.call(this,state_18635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13723__auto____0;
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13723__auto____1;
return cljs$core$async$state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_18726 = f__14925__auto__();
(statearr_18726[(6)] = c__14924__auto___20347);

return statearr_18726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18730 = arguments.length;
switch (G__18730) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14924__auto___20368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_18794){
var state_val_18795 = (state_18794[(1)]);
if((state_val_18795 === (7))){
var inst_18789 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
var statearr_18800_20369 = state_18794__$1;
(statearr_18800_20369[(2)] = inst_18789);

(statearr_18800_20369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (1))){
var inst_18751 = (new Array(n));
var inst_18752 = inst_18751;
var inst_18753 = (0);
var state_18794__$1 = (function (){var statearr_18806 = state_18794;
(statearr_18806[(7)] = inst_18752);

(statearr_18806[(8)] = inst_18753);

return statearr_18806;
})();
var statearr_18808_20375 = state_18794__$1;
(statearr_18808_20375[(2)] = null);

(statearr_18808_20375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (4))){
var inst_18756 = (state_18794[(9)]);
var inst_18756__$1 = (state_18794[(2)]);
var inst_18758 = (inst_18756__$1 == null);
var inst_18759 = cljs.core.not(inst_18758);
var state_18794__$1 = (function (){var statearr_18823 = state_18794;
(statearr_18823[(9)] = inst_18756__$1);

return statearr_18823;
})();
if(inst_18759){
var statearr_18824_20376 = state_18794__$1;
(statearr_18824_20376[(1)] = (5));

} else {
var statearr_18825_20377 = state_18794__$1;
(statearr_18825_20377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (15))){
var inst_18782 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
var statearr_18839_20379 = state_18794__$1;
(statearr_18839_20379[(2)] = inst_18782);

(statearr_18839_20379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (13))){
var state_18794__$1 = state_18794;
var statearr_18842_20384 = state_18794__$1;
(statearr_18842_20384[(2)] = null);

(statearr_18842_20384[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (6))){
var inst_18753 = (state_18794[(8)]);
var inst_18778 = (inst_18753 > (0));
var state_18794__$1 = state_18794;
if(cljs.core.truth_(inst_18778)){
var statearr_18860_20388 = state_18794__$1;
(statearr_18860_20388[(1)] = (12));

} else {
var statearr_18862_20389 = state_18794__$1;
(statearr_18862_20389[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (3))){
var inst_18791 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18794__$1,inst_18791);
} else {
if((state_val_18795 === (12))){
var inst_18752 = (state_18794[(7)]);
var inst_18780 = cljs.core.vec(inst_18752);
var state_18794__$1 = state_18794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18794__$1,(15),out,inst_18780);
} else {
if((state_val_18795 === (2))){
var state_18794__$1 = state_18794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18794__$1,(4),ch);
} else {
if((state_val_18795 === (11))){
var inst_18769 = (state_18794[(2)]);
var inst_18770 = (new Array(n));
var inst_18752 = inst_18770;
var inst_18753 = (0);
var state_18794__$1 = (function (){var statearr_18907 = state_18794;
(statearr_18907[(10)] = inst_18769);

(statearr_18907[(7)] = inst_18752);

(statearr_18907[(8)] = inst_18753);

return statearr_18907;
})();
var statearr_18918_20394 = state_18794__$1;
(statearr_18918_20394[(2)] = null);

(statearr_18918_20394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (9))){
var inst_18752 = (state_18794[(7)]);
var inst_18767 = cljs.core.vec(inst_18752);
var state_18794__$1 = state_18794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18794__$1,(11),out,inst_18767);
} else {
if((state_val_18795 === (5))){
var inst_18752 = (state_18794[(7)]);
var inst_18753 = (state_18794[(8)]);
var inst_18756 = (state_18794[(9)]);
var inst_18762 = (state_18794[(11)]);
var inst_18761 = (inst_18752[inst_18753] = inst_18756);
var inst_18762__$1 = (inst_18753 + (1));
var inst_18763 = (inst_18762__$1 < n);
var state_18794__$1 = (function (){var statearr_18931 = state_18794;
(statearr_18931[(12)] = inst_18761);

(statearr_18931[(11)] = inst_18762__$1);

return statearr_18931;
})();
if(cljs.core.truth_(inst_18763)){
var statearr_18936_20405 = state_18794__$1;
(statearr_18936_20405[(1)] = (8));

} else {
var statearr_18937_20406 = state_18794__$1;
(statearr_18937_20406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (14))){
var inst_18786 = (state_18794[(2)]);
var inst_18787 = cljs.core.async.close_BANG_(out);
var state_18794__$1 = (function (){var statearr_18946 = state_18794;
(statearr_18946[(13)] = inst_18786);

return statearr_18946;
})();
var statearr_18951_20407 = state_18794__$1;
(statearr_18951_20407[(2)] = inst_18787);

(statearr_18951_20407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (10))){
var inst_18773 = (state_18794[(2)]);
var state_18794__$1 = state_18794;
var statearr_18952_20409 = state_18794__$1;
(statearr_18952_20409[(2)] = inst_18773);

(statearr_18952_20409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18795 === (8))){
var inst_18752 = (state_18794[(7)]);
var inst_18762 = (state_18794[(11)]);
var tmp18939 = inst_18752;
var inst_18752__$1 = tmp18939;
var inst_18753 = inst_18762;
var state_18794__$1 = (function (){var statearr_18954 = state_18794;
(statearr_18954[(7)] = inst_18752__$1);

(statearr_18954[(8)] = inst_18753);

return statearr_18954;
})();
var statearr_18958_20413 = state_18794__$1;
(statearr_18958_20413[(2)] = null);

(statearr_18958_20413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13723__auto__ = null;
var cljs$core$async$state_machine__13723__auto____0 = (function (){
var statearr_18967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18967[(0)] = cljs$core$async$state_machine__13723__auto__);

(statearr_18967[(1)] = (1));

return statearr_18967;
});
var cljs$core$async$state_machine__13723__auto____1 = (function (state_18794){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_18794);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e18977){var ex__13726__auto__ = e18977;
var statearr_18978_20420 = state_18794;
(statearr_18978_20420[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_18794[(4)]))){
var statearr_18979_20422 = state_18794;
(statearr_18979_20422[(1)] = cljs.core.first((state_18794[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20426 = state_18794;
state_18794 = G__20426;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$state_machine__13723__auto__ = function(state_18794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13723__auto____1.call(this,state_18794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13723__auto____0;
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13723__auto____1;
return cljs$core$async$state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_18982 = f__14925__auto__();
(statearr_18982[(6)] = c__14924__auto___20368);

return statearr_18982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19005 = arguments.length;
switch (G__19005) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14924__auto___20434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14925__auto__ = (function (){var switch__13722__auto__ = (function (state_19065){
var state_val_19066 = (state_19065[(1)]);
if((state_val_19066 === (7))){
var inst_19061 = (state_19065[(2)]);
var state_19065__$1 = state_19065;
var statearr_19075_20435 = state_19065__$1;
(statearr_19075_20435[(2)] = inst_19061);

(statearr_19075_20435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (1))){
var inst_19016 = [];
var inst_19017 = inst_19016;
var inst_19018 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19065__$1 = (function (){var statearr_19085 = state_19065;
(statearr_19085[(7)] = inst_19017);

(statearr_19085[(8)] = inst_19018);

return statearr_19085;
})();
var statearr_19091_20437 = state_19065__$1;
(statearr_19091_20437[(2)] = null);

(statearr_19091_20437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (4))){
var inst_19022 = (state_19065[(9)]);
var inst_19022__$1 = (state_19065[(2)]);
var inst_19024 = (inst_19022__$1 == null);
var inst_19026 = cljs.core.not(inst_19024);
var state_19065__$1 = (function (){var statearr_19097 = state_19065;
(statearr_19097[(9)] = inst_19022__$1);

return statearr_19097;
})();
if(inst_19026){
var statearr_19106_20439 = state_19065__$1;
(statearr_19106_20439[(1)] = (5));

} else {
var statearr_19107_20440 = state_19065__$1;
(statearr_19107_20440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (15))){
var inst_19017 = (state_19065[(7)]);
var inst_19053 = cljs.core.vec(inst_19017);
var state_19065__$1 = state_19065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19065__$1,(18),out,inst_19053);
} else {
if((state_val_19066 === (13))){
var inst_19048 = (state_19065[(2)]);
var state_19065__$1 = state_19065;
var statearr_19119_20444 = state_19065__$1;
(statearr_19119_20444[(2)] = inst_19048);

(statearr_19119_20444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (6))){
var inst_19017 = (state_19065[(7)]);
var inst_19050 = inst_19017.length;
var inst_19051 = (inst_19050 > (0));
var state_19065__$1 = state_19065;
if(cljs.core.truth_(inst_19051)){
var statearr_19120_20449 = state_19065__$1;
(statearr_19120_20449[(1)] = (15));

} else {
var statearr_19125_20451 = state_19065__$1;
(statearr_19125_20451[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (17))){
var inst_19058 = (state_19065[(2)]);
var inst_19059 = cljs.core.async.close_BANG_(out);
var state_19065__$1 = (function (){var statearr_19130 = state_19065;
(statearr_19130[(10)] = inst_19058);

return statearr_19130;
})();
var statearr_19135_20454 = state_19065__$1;
(statearr_19135_20454[(2)] = inst_19059);

(statearr_19135_20454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (3))){
var inst_19063 = (state_19065[(2)]);
var state_19065__$1 = state_19065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19065__$1,inst_19063);
} else {
if((state_val_19066 === (12))){
var inst_19017 = (state_19065[(7)]);
var inst_19039 = cljs.core.vec(inst_19017);
var state_19065__$1 = state_19065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19065__$1,(14),out,inst_19039);
} else {
if((state_val_19066 === (2))){
var state_19065__$1 = state_19065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19065__$1,(4),ch);
} else {
if((state_val_19066 === (11))){
var inst_19017 = (state_19065[(7)]);
var inst_19022 = (state_19065[(9)]);
var inst_19028 = (state_19065[(11)]);
var inst_19036 = inst_19017.push(inst_19022);
var tmp19147 = inst_19017;
var inst_19017__$1 = tmp19147;
var inst_19018 = inst_19028;
var state_19065__$1 = (function (){var statearr_19165 = state_19065;
(statearr_19165[(12)] = inst_19036);

(statearr_19165[(7)] = inst_19017__$1);

(statearr_19165[(8)] = inst_19018);

return statearr_19165;
})();
var statearr_19167_20462 = state_19065__$1;
(statearr_19167_20462[(2)] = null);

(statearr_19167_20462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (9))){
var inst_19018 = (state_19065[(8)]);
var inst_19032 = cljs.core.keyword_identical_QMARK_(inst_19018,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19065__$1 = state_19065;
var statearr_19179_20463 = state_19065__$1;
(statearr_19179_20463[(2)] = inst_19032);

(statearr_19179_20463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (5))){
var inst_19022 = (state_19065[(9)]);
var inst_19028 = (state_19065[(11)]);
var inst_19018 = (state_19065[(8)]);
var inst_19029 = (state_19065[(13)]);
var inst_19028__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19022) : f.call(null,inst_19022));
var inst_19029__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19028__$1,inst_19018);
var state_19065__$1 = (function (){var statearr_19183 = state_19065;
(statearr_19183[(11)] = inst_19028__$1);

(statearr_19183[(13)] = inst_19029__$1);

return statearr_19183;
})();
if(inst_19029__$1){
var statearr_19185_20464 = state_19065__$1;
(statearr_19185_20464[(1)] = (8));

} else {
var statearr_19188_20465 = state_19065__$1;
(statearr_19188_20465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (14))){
var inst_19022 = (state_19065[(9)]);
var inst_19028 = (state_19065[(11)]);
var inst_19041 = (state_19065[(2)]);
var inst_19042 = [];
var inst_19043 = inst_19042.push(inst_19022);
var inst_19017 = inst_19042;
var inst_19018 = inst_19028;
var state_19065__$1 = (function (){var statearr_19189 = state_19065;
(statearr_19189[(14)] = inst_19041);

(statearr_19189[(15)] = inst_19043);

(statearr_19189[(7)] = inst_19017);

(statearr_19189[(8)] = inst_19018);

return statearr_19189;
})();
var statearr_19190_20466 = state_19065__$1;
(statearr_19190_20466[(2)] = null);

(statearr_19190_20466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (16))){
var state_19065__$1 = state_19065;
var statearr_19191_20469 = state_19065__$1;
(statearr_19191_20469[(2)] = null);

(statearr_19191_20469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (10))){
var inst_19034 = (state_19065[(2)]);
var state_19065__$1 = state_19065;
if(cljs.core.truth_(inst_19034)){
var statearr_19192_20472 = state_19065__$1;
(statearr_19192_20472[(1)] = (11));

} else {
var statearr_19193_20473 = state_19065__$1;
(statearr_19193_20473[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (18))){
var inst_19055 = (state_19065[(2)]);
var state_19065__$1 = state_19065;
var statearr_19198_20474 = state_19065__$1;
(statearr_19198_20474[(2)] = inst_19055);

(statearr_19198_20474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19066 === (8))){
var inst_19029 = (state_19065[(13)]);
var state_19065__$1 = state_19065;
var statearr_19199_20475 = state_19065__$1;
(statearr_19199_20475[(2)] = inst_19029);

(statearr_19199_20475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13723__auto__ = null;
var cljs$core$async$state_machine__13723__auto____0 = (function (){
var statearr_19204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19204[(0)] = cljs$core$async$state_machine__13723__auto__);

(statearr_19204[(1)] = (1));

return statearr_19204;
});
var cljs$core$async$state_machine__13723__auto____1 = (function (state_19065){
while(true){
var ret_value__13724__auto__ = (function (){try{while(true){
var result__13725__auto__ = switch__13722__auto__(state_19065);
if(cljs.core.keyword_identical_QMARK_(result__13725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13725__auto__;
}
break;
}
}catch (e19206){var ex__13726__auto__ = e19206;
var statearr_19207_20484 = state_19065;
(statearr_19207_20484[(2)] = ex__13726__auto__);


if(cljs.core.seq((state_19065[(4)]))){
var statearr_19208_20490 = state_19065;
(statearr_19208_20490[(1)] = cljs.core.first((state_19065[(4)])));

} else {
throw ex__13726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20491 = state_19065;
state_19065 = G__20491;
continue;
} else {
return ret_value__13724__auto__;
}
break;
}
});
cljs$core$async$state_machine__13723__auto__ = function(state_19065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13723__auto____1.call(this,state_19065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13723__auto____0;
cljs$core$async$state_machine__13723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13723__auto____1;
return cljs$core$async$state_machine__13723__auto__;
})()
})();
var state__14926__auto__ = (function (){var statearr_19209 = f__14925__auto__();
(statearr_19209[(6)] = c__14924__auto___20434);

return statearr_19209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14926__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
