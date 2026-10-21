goog.provide('gilastore_ui.views.dashboard');
gilastore_ui.views.dashboard.dashboard_view = (function gilastore_ui$views$dashboard$dashboard_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"600px",new cljs.core.Keyword(null,"margin","margin",-995903681),"40px auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Panel Principal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u00A1Bienvenido a GilaStore! Tu sesi\u00F3n est\u00E1 activa."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
localStorage.clear();

cljs.core.reset_BANG_(gilastore_ui.state.current_user_atom,null);

cljs.core.reset_BANG_(gilastore_ui.state.auth_state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null));

return (window.location.hash = "#/login");
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"background","background",-863952629),"#dc3545",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px"], null)], null),"Logout"], null)], null);
});

//# sourceMappingURL=gilastore_ui.views.dashboard.js.map
