global.MULTI_PROTOCOL_SOCKET_SERVER=MULTI_PROTOCOL_SOCKET_SERVER=CLASS({init:function(_,E,e,o){"use strict";var t,n,d=e.socketServerPort,i=e.webSocketServerPort,R=e.isCreateWebSocketFixRequestManager,a=e.webServer;void 0!==d&&SOCKET_SERVER(d,o),(void 0!==i||void 0!==a)&&WEB_SOCKET_SERVER(void 0!==i?i:a,o),R===!0&&(t=WEB_SOCKET_FIX_REQUEST_MANAGER(o)),E.getWebSocketFixRequest=n=function(){return t.request}}}),global.WEB_SOCKET_FIX_REQUEST_MANAGER=WEB_SOCKET_FIX_REQUEST_MANAGER=CLASS(function(){"use strict";var _=5,E=2;return{init:function(e,o,t){var n,d={},i={},R=0,a={},S={},T={},C={},c=function(_,E,e,o){void 0===d[_]&&(d[_]={}),void 0===d[_][E]?d[_][E]=e:d[_][E]+=e,o===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_REQUEST_MANAGER__ADD_CONTENT",data:{clientId:_,requestKey:E,content:e}})},N=function(_,E,e){void 0!==d[_]&&delete d[_][E],e===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_REQUEST_MANAGER__REMOVE_CONTENT",data:{clientId:_,requestKey:E}})},r=function(_,E){void 0!==a[_]?a[_](E):U(_,E,!0)},v=function(_,E,e,o){var t=i[_][E];void 0!==t&&EACH(t,function(E){E(e,function(E){void 0!==o&&r(_,{methodName:"__CALLBACK_"+o,data:E})})})},I=function(_){void 0!==T[_]&&(T[_].remove(),delete T[_]),delete a[_]},U=function(_,E,e){void 0===S[_]&&(S[_]=[]),S[_].push(E),e===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_REQUEST_MANAGER__SEND",data:{clientId:_,params:E}})},s=function(_,E){REMOVE({data:S[_],key:0}),0===S[_].length&&delete S[_],E===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_REQUEST_MANAGER__REMOVE_FIRST_WATING_PARAMS",data:_})},A=function(_,E){void 0!==C[_]&&(C[_].remove(),delete C[_]),E===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_REQUEST_MANAGER__REMOVE_LIFE_DELAY",data:_})},u=function(_,E){I(_),void 0!==i[_]&&delete i[_],void 0!==S[_]&&delete S[_],A(_),void 0!==d[_]&&delete d[_],E===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_REQUEST_MANAGER__REMOVE_ALL",data:_})};void 0!==CPU_CLUSTERING.on&&(CPU_CLUSTERING.on("__WEB_SOCKET_FIX_REQUEST_MANAGER__RUN_METHODS",function(_){var E=_.clientId;void 0!==i[E]&&v(E,_.methodName,_.data,_.sendKey)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_REQUEST_MANAGER__REMOVE_FIRST_WATING_PARAMS",function(_){void 0!==S[_]&&s(_)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_REQUEST_MANAGER__SEND",function(_){var E=_.clientId,e=_.params;void 0!==a[E]?(a[E](e),void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_REQUEST_MANAGER__REMOVE_FIRST_WATING_PARAMS",data:E})):U(E,e)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_REQUEST_MANAGER__REMOVE_LIFE_DELAY",function(_){A(_)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_REQUEST_MANAGER__REMOVE_ALL",function(_){u(_)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_REQUEST_MANAGER__ADD_CONTENT",function(_){c(_.clientId,_.requestKey,_.content)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_REQUEST_MANAGER__REMOVE_CONTENT",function(_){N(_.clientId,_.requestKey)})),o.request=n=function(e,o){var n,U,O,G=e.params,K=G.clientId,f=INTEGER(G.connectionKey),L=INTEGER(G.requestKey),M=G.content,m="true"===G.isEnd,P=o.response,l=o.onDisconnected,W=function(_,E,e){void 0!==i[K]?v(K,_,E,e):void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_REQUEST_MANAGER__RUN_METHODS",data:{clientId:K,methodName:_,data:E,sendKey:e}}),"__DISCONNECTED"===_&&u(K,!0)};void 0===K?(K=RANDOM_STR(40),n=i[K]={},t({ip:e.ip,headers:e.headers},U=function(_,E){var e=n[_];void 0===e&&(e=n[_]=[]),e.push(E)},O=function(_,E){var e=n[_];void 0!==e&&(void 0!==E?REMOVE({data:e,value:E}):delete n[_])},function(_,E){var e="__CALLBACK_"+R;_.sendKey=R,R+=1,r(K,_),void 0!==E&&U(e,function(_){E(_),O(e)})},function(){W("__DISCONNECTED")}),P({contentType:"text/javascript",content:"CONNECT_TO_WEB_SOCKET_SERVER.response('"+encodeURIComponent(STRINGIFY({clientId:K,connectionKey:f,requestKey:L}))+"')"})):m===!0?(RUN(function(){var e,o=void 0===d[K]?void 0:PARSE_STR(d[K][L]),t=void 0===o?void 0:o.methodName,n=void 0===o?void 0:o.data,i=void 0===o?void 0:o.sendKey;void 0!==t?(W(t,n,i),P({contentType:"text/javascript",content:"CONNECT_TO_WEB_SOCKET_SERVER.removeRequestInfo("+L+")"})):void 0!==a[K]?a[K]():(A(K,!0),e=function(){W("__DISCONNECTED")},a[K]=function(_){P({contentType:"text/javascript",content:"CONNECT_TO_WEB_SOCKET_SERVER.response('"+encodeURIComponent(STRINGIFY({connectionKey:f,clientId:K,params:_,requestKey:L}))+"')"}),I(K),C[K]=DELAY(E,e)},l(e),T[K]=DELAY(_,function(){void 0!==a[K]&&a[K]()}),void 0!==S[K]&&(a[K](S[K][0]),s(K,!0)))}),N(K,L,!0)):(c(K,L,M,!0),P({contentType:"text/javascript",content:"CONNECT_TO_WEB_SOCKET_SERVER.request("+L+")"}))},console.log("[UPPERCASE.IO-WEB_SOCKET_FIX_REQUEST_MANAGER] RUNNING WEB SOCKET FIX REQUEST MANAGER...")}}}),global.WEB_SOCKET_SERVER=WEB_SOCKET_SERVER=METHOD({run:function(_,E){"use strict";var e,o,t,n=require("ws").Server;CHECK_IS_DATA(_)!==!0?e=_:o=_,t=new n({port:e,server:void 0===o?void 0:o.getNativeHTTPServer()}),t.on("connection",function(_){var e,o,t,n,d,i=_.upgradeReq.headers,R={},a=0,S=function(_,E,e){var o=R[_];void 0!==o&&EACH(o,function(_){_(E,function(_){void 0!==e&&d({methodName:"__CALLBACK_"+e,data:_})})})};_.on("message",function(_){var E=PARSE_STR(_);void 0!==E&&S(E.methodName,E.data,E.sendKey)}),_.on("close",function(){o!==!0&&S("__DISCONNECTED"),R=void 0}),_.on("error",function(_){S("__ERROR",_)}),e=i["x-forwarded-for"],void 0===e&&(e=_.upgradeReq.connection.remoteAddress),E({ip:e,headers:i},t=function(_,E){var e=R[_];void 0===e&&(e=R[_]=[]),e.push(E)},n=function(_,E){var e=R[_];void 0!==e&&(void 0!==E?REMOVE({data:e,value:E}):delete R[_])},d=function(E,e){var o="__CALLBACK_"+a;E.sendKey=a,a+=1,_.send(STRINGIFY(E)),void 0!==e&&t(o,function(_){e(_),n(o)})},function(){o=!0,_.close()})}),console.log("[UPPERCASE.IO-WEB_SOCKET_SERVER] RUNNING WEB SOCKET SERVER..."+(void 0===e?"":" (PORT:"+e+")"))}});