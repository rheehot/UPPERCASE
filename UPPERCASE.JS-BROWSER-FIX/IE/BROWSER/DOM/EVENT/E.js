OVERRIDE(E,function(t){"use strict";global.E=E=CLASS({preset:function(){return t},init:function(t,e,o){{var n,c,r,d,a,l=o.e;o.el}void 0===l&&(l=event),void 0===l.preventDefault?e.stopDefault=n=function(){l.returnValue=!1}:n=e.stopDefault,navigator.msPointerEnabled===!0&&(e.stopDefault=function(){l.target.style["-ms-touch-action"]="none",n()}),void 0===l.stopPropagation?e.stopBubbling=c=function(){l.cancelBubble=!0}:c=e.stopBubbling,e.stop=r=function(){n(),c()},void 0===l.pageX&&(e.getLeft=d=function(){var t;return(void 0===l.target||l.target===TO_DELETE)&&(l.target=l.srcElement||document),3===l.target.nodeType&&(l.target=l.target.parentNode),t=l.target.ownerDocument||document,doc=t.documentElement,body=t.body,l.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0)}),void 0===l.pageY&&(e.getTop=a=function(){var t;return(void 0===l.target||l.target===TO_DELETE)&&(l.target=l.srcElement||document),3===l.target.nodeType&&(l.target=l.target.parentNode),t=l.target.ownerDocument||document,doc=t.documentElement,body=t.body,l.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)})}})});