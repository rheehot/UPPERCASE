FOR_BOX(function(o){"use strict";o.MODEL=CLASS({init:function(e,t,i){var n,d,r,a,c,v,E,s,u,O,A,f,l,R,m,N,C,g,D,I,M,h,x,P,S,T,U,H,L,b,_=i.name,p=i.initData,V=i.methodConfig,k=i.isNotUsingObjectId,K=o.ROOM(_),y={},X={},w=[],W=[],j={};void 0!==V&&(n=V.create,d=V.get,r=V.update,a=V.remove,c=V.find,v=V.count,E=V.checkIsExists,void 0!==n&&(s=n.valid),void 0!==r&&(u=r.valid)),t.getName=f=function(){return _},e.getInitData=l=function(){return p},e.getCreateValid=R=function(){return s},e.getUpdateValid=m=function(){return u},t.getRoom=N=function(){return K},n!==!1&&(t.create=C=function(e,t){var i,n,d,r,a;void 0!==t&&(CHECK_IS_DATA(t)!==!0?i=t:(i=t.success,n=t.notValid,d=t.notAuthed,r=t.error)),void 0!==s&&(a=s.check(e)),void 0!==a&&a.checkHasError()===!0?void 0!==n?n(a.getErrors()):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/create` NOT VALID!: ",a.getErrors()):(void 0!==p&&EACH(p,function(o,t){e[t]=o}),K.send({methodName:"create",data:e},function(e){var t,a,c,v;void 0!==e?(t=e.errorMsg,a=e.validErrors,c=e.isNotAuthed,v=e.savedData,void 0!==t?void 0!==r?r(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/create` ERROR: "+t):void 0!==a?void 0!==n?n(a):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/create` NOT VALID!: ",a):c===!0?void 0!==d?d():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/create` NOT AUTHED!"):void 0!==i&&i(v)):void 0!==i&&i()}))}),d!==!1&&(t.get=g=function(e,t){var i,n,d,r;CHECK_IS_DATA(t)!==!0?i=t:(i=t.success,n=t.notExists,d=t.notAuthed,r=t.error),K.send({methodName:"get",data:e},function(e){var t,a,c;void 0!==e&&(t=e.errorMsg,a=e.isNotAuthed,c=e.savedData),void 0!==t?void 0!==r?r(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/get` ERROR: "+t):a===!0?void 0!==d?d():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/get` NOT AUTHED!"):void 0===c?void 0!==n?n():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/get` NOT EXISTS!"):void 0!==i&&i(c)})},t.getWatching=D=function(e,i){var n,d,r,a;CHECK_IS_DATA(i)!==!0?n=i:(n=i.success,d=i.notExists,r=i.notAuthed,a=i.error),t.get(e,{success:function(e){var t,i;void 0!==n&&(w.push(t=o.ROOM(_+"/"+e.id)),n(e,function(o){t.on("update",o)},function(o){t.on("remove",function(e){o(e),i()})},i=function(){REMOVE({array:w,value:t}),t.exit()}))},notExists:d,notAuthed:r,error:a})}),r!==!1&&(t.update=I=function(e,t){var i,n,d,r,a,c,v=e.id;void 0!==t&&(CHECK_IS_DATA(t)!==!0?i=t:(i=t.success,n=t.notValid,d=t.notExists,r=t.notAuthed,a=t.error)),void 0!==u&&(c=u.checkExceptUndefined(e)),e.id=v,void 0!==u&&c.checkHasError()===!0?void 0!==n?n(c.getErrors()):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/update` NOT VALID!: ",c.getErrors()):K.send({methodName:"update",data:e},function(e){var t,c,v,E;void 0!==e&&(t=e.errorMsg,c=e.validErrors,v=e.isNotAuthed,E=e.savedData),void 0!==t?void 0!==a?a(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/update` ERROR: "+t):void 0!==c?void 0!==n?n(c):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/update` NOT VALID!: ",c):v===!0?void 0!==r?r():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/update` NOT AUTHED!"):void 0===E?void 0!==d?d():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/update` NOT EXISTS!"):void 0!==i&&i(E)})}),a!==!1&&k!==!0&&(t.remove=M=function(e,t){var i,n,d,r;void 0!==t&&(CHECK_IS_DATA(t)!==!0?i=t:(i=t.success,n=t.notExists,d=t.notAuthed,r=t.error)),K.send({methodName:"remove",data:e},function(e){var t,a,c;void 0!==e&&(t=e.errorMsg,a=e.isNotAuthed,c=e.savedData),void 0!==t?void 0!==r?r(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/remove` ERROR: "+t):a===!0?void 0!==d?d():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/remove` NOT AUTHED!"):void 0===c?void 0!==n?n():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/remove` NOT EXISTS!"):void 0!==i&&i(c)})}),c!==!1&&(t.find=h=function(e,t){var i,n,d;void 0===t&&(t=e,e=void 0),CHECK_IS_DATA(t)!==!0?i=t:(i=t.success,n=t.notAuthed,d=t.error),K.send({methodName:"find",data:e},function(e){var t=e.errorMsg,r=e.isNotAuthed,a=e.savedDataSet;void 0!==t?void 0!==d?d(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/find` ERROR: "+t):r===!0?void 0!==n?n():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/find` NOT AUTHED!"):void 0!==i&&i(a)})},t.findWatching=x=function(e,i){var n,d,r;void 0===i&&(i=e,e=void 0),CHECK_IS_DATA(i)!==!0?n=i:(n=i.success,d=i.notAuthed,r=i.error),t.find(e,{success:function(e){var t,i={};void 0!==n&&(EACH(e,function(e){var t=e.id;w.push(i[t]=o.ROOM(_+"/"+t))}),n(e,function(o,e){i[o].on("update",e)},function(o,e){i[o].on("remove",function(i){e(i),t(o)})},t=function(o){void 0!==i[o]&&(REMOVE({array:w,value:i[o]}),i[o].exit(),delete i[o])}))},notAuthed:d,error:r})}),v!==!1&&(t.count=P=function(e,t){var i,n,d;void 0===t&&(t=e,e=void 0),CHECK_IS_DATA(t)!==!0?i=t:(i=t.success,n=t.notAuthed,d=t.error),K.send({methodName:"count",data:e},function(e){var t=e.errorMsg,r=e.isNotAuthed,a=e.count;void 0!==t?void 0!==d?d(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/count` ERROR: "+t):r===!0?void 0!==n?n():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/count` NOT AUTHED!"):void 0!==i&&i(a)})}),E!==!1&&(t.checkIsExists=S=function(e,t){var i,n,d;void 0===t&&(t=e,e=void 0),CHECK_IS_DATA(t)!==!0?i=t:(i=t.success,n=t.notAuthed,d=t.error),K.send({methodName:"checkIsExists",data:e},function(e){var t=e.errorMsg,r=e.isNotAuthed,a=e.isExists;void 0!==t?void 0!==d?d(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/checkIsExists` ERROR: "+t):r===!0?void 0!==n?n():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+_+"/checkIsExists` NOT AUTHED!"):void 0!==i&&i(a)})}),t.onNew=T=function(e,t){void 0===t?(t=e,void 0===O&&(O=o.ROOM(_+"/create")),O.on("create",t)):EACH(e,function(e,i){var n=y[i+"/"+e];void 0===n&&(n=y[i+"/"+e]=o.ROOM(_+"/"+i+"/"+e+"/create")),n.on("create",t)})},t.onNewWatching=U=function(e,t){var i=function(e,i){var n,d,r=e.id;w.push(n=o.ROOM(_+"/"+r)),i.push(n),t(e,function(o){n.on("update",o)},function(o){n.on("remove",function(e){o(e),d()})},d=function(){n.exit(),REMOVE({array:w,value:n})})};void 0===t?(t=e,void 0===O&&(O=o.ROOM(_+"/create")),O.on("create",function(o){i(o,W)})):EACH(e,function(e,t){var n=y[t+"/"+e],d=j[t+"/"+e];void 0===n&&(n=y[t+"/"+e]=o.ROOM(_+"/"+t+"/"+e+"/create")),void 0===d&&(d=j[t+"/"+e]=[]),n.on("create",function(o){i(o,d)})})},t.closeOnNew=H=function(o){void 0===o?(void 0!==O&&(O.exit(),O=void 0),EACH(W,function(o){o.exit(),REMOVE({array:w,value:o})}),W=[]):EACH(o,function(o,e){void 0!==y[e+"/"+o]&&(y[e+"/"+o].exit(),delete y[e+"/"+o]),EACH(j[e+"/"+o],function(o){o.exit(),REMOVE({array:w,value:o})}),delete j[e+"/"+o]})},t.onRemove=L=function(e,t){var i=function(o){o.id;t(o)};void 0===t?(t=e,void 0===A&&(A=o.ROOM(_+"/remove")),A.on("remove",i)):EACH(e,function(e,t){var n=X[t+"/"+e];void 0===n&&(n=X[t+"/"+e]=o.ROOM(_+"/"+t+"/"+e+"/remove")),n.on("remove",i)})},t.closeOnRemove=b=function(o){void 0===o?void 0!==A&&(A.exit(),A=void 0):EACH(o,function(o,e){void 0!==X[e+"/"+o]&&(X[e+"/"+o].exit(),delete X[e+"/"+o])})}}})});