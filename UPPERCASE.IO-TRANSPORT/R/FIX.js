RUN(function(){"use strict";var t,e,n,c;e=document.currentScript,void 0===e&&(n=document.getElementsByTagName("script"),e=n[n.length-1]),t=e.getAttribute("src"),t=t.substring(0,t.indexOf("/FIX.js")),c=function(e){LOAD(t+"/"+e+".js")},void 0===global.WebSocket&&c("CONNECT/CONNECT_TO_WEB_SOCKET_SERVER")});