global.CONNECT_TO_ROOM_SERVER=CONNECT_TO_ROOM_SERVER=METHOD(function(o){"use strict";var t,e,n,r,E,i,a,c,d=[],u=[],_=[];return o.enterRoom=r=function(o){d.push(o),void 0!==n&&n({methodName:"__ENTER_ROOM",data:o})},o.on=E=function(o,e){void 0===t?u.push({methodName:o,method:e}):t(o,e)},o.off=i=function(o,t){void 0!==u?void 0!==t?REMOVE(u,function(e){return e.methodName===o&&e.method===t}):REMOVE(u,function(t){return t.methodName===o}):e(o,t)},o.send=a=function(o,t){void 0===n?_.push({params:o,callback:t}):n(o,t)},o.exitRoom=c=function(o){void 0!==n&&n({methodName:"__EXIT_ROOM",data:o}),REMOVE({array:d,value:o})},{run:function(o,r){var E,i,a;CHECK_IS_DATA(r)!==!0?E=r:(E=r.success,i=r.error),a=function(o,r,i){t=o,e=r,n=i,EACH(d,function(o){n({methodName:"__ENTER_ROOM",data:o})}),EACH(u,function(o){t(o.methodName,o.method)}),u=void 0,EACH(_,function(o){n(o.params,o.callback)}),_=void 0,void 0!==E&&E(o,r,i),o("__DISCONNECTED",function(){t=void 0,e=void 0,n=void 0,u=[],_=[]})},"mobileweb"===Ti.Platform.name?CONNECT_TO_WEB_SOCKET_SERVER({host:o.host,port:o.webSocketServerPort},{error:i,success:a}):CONNECT_TO_SOCKET_SERVER({host:o.host,port:o.socketServerPort},{error:i,success:a})}}});