goog.provide('gilastore_ui.views.message_modal');
gilastore_ui.views.message_modal.message_modal = (function gilastore_ui$views$message_modal$message_modal(open_QMARK_,title,message,type,on_close){
if(cljs.core.not(open_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
} else {
var header_color = (function (){var G__13434 = type;
var G__13434__$1 = (((G__13434 instanceof cljs.core.Keyword))?G__13434.fqn:null);
switch (G__13434__$1) {
case "success":
return "#2e7d32";

break;
case "error":
return "#c62828";

break;
case "info":
return "#0288d1";

break;
default:
return "#334155";

}
})();
var icon = (function (){var G__13435 = type;
var G__13435__$1 = (((G__13435 instanceof cljs.core.Keyword))?G__13435.fqn:null);
switch (G__13435__$1) {
case "success":
return "\u2705 ";

break;
case "error":
return "\u274C ";

break;
case "info":
return "\u2139\uFE0F ";

break;
default:
return "";

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center","0","100%","rgba(0, 0, 0, 0.5)",(1100),"center","flex","fixed","100%","0"])], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"padding","padding",1660304693),"25px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"90%",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 15px rgba(0,0,0,0.2)",new cljs.core.Keyword(null,"border-top","border-top",-158897573),(""+"5px solid "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(header_color))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"color","color",1011675173),header_color,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"8px"], null)], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#475569",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.95rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.5"], null)], null),message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 16px",new cljs.core.Keyword(null,"background","background",-863952629),header_color,new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),"Aceptar"], null)], null)], null)], null);
}
});

//# sourceMappingURL=gilastore_ui.views.message_modal.js.map
