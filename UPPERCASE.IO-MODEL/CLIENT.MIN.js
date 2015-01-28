FOR_BOX(function(o){"use strict";o.MODEL=CLASS({init:function(e,t,n){var i,r,d,c,a,v,u,E,s,O,A,f,C,R,m,l,N,g,D,x,I,P,M,h,S,T,U=n.name,H=n.initData,L=n.methodConfig,b=o.ROOM(U);void 0!==L&&(i=L.create,r=L.get,d=L.update,c=L.remove,a=L.find,v=L.count,u=L.checkIsExists,void 0!==i&&(E=i.valid),void 0!==d&&(s=d.valid)),t.getName=O=function(){return U},e.getInitData=A=function(){return H},e.getCreateValid=f=function(){return E},e.getUpdateValid=C=function(){return s},t.getRoom=R=function(){return b},i!==!1&&(t.create=m=function(e,t){var n,i,r,d,c;void 0!==t&&(CHECK_IS_DATA(t)!==!0?n=t:(n=t.success,i=t.notValid,r=t.notAuthed,d=t.error)),void 0!==H&&EACH(H,function(o,t){e[t]=o}),void 0!==E&&(c=E.check(e)),void 0!==c&&c.checkHasError()===!0?void 0!==i?i(c.getErrors()):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/create` NOT VALID!: ",c.getErrors()):b.send({methodName:"create",data:e},function(e){var t,c,a,v;void 0!==e?(t=e.errorMsg,c=e.validErrors,a=e.isNotAuthed,v=e.savedData,void 0!==t?void 0!==d?d(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/create` ERROR: "+t):void 0!==c?void 0!==i?i(c):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/create` NOT VALID!: ",c):a===!0?void 0!==r?r():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/create` NOT AUTHED!"):void 0!==n&&n(v)):void 0!==n&&n()})}),r!==!1&&(t.get=l=function(e,t){var n,i,r,d;CHECK_IS_DATA(t)!==!0?n=t:(n=t.success,i=t.notExists,r=t.notAuthed,d=t.error),b.send({methodName:"get",data:e},function(e){var t,c,a;void 0!==e&&(t=e.errorMsg,c=e.isNotAuthed,a=e.savedData),void 0!==t?void 0!==d?d(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/get` ERROR: "+t):c===!0?void 0!==r?r():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/get` NOT AUTHED!"):void 0===a?void 0!==i?i():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/get` NOT EXISTS!"):void 0!==n&&n(a)})},t.getWatching=N=function(e,n){var i,r,d,c,a,v;return CHECK_IS_DATA(n)!==!0?i=n:(i=n.success,r=n.notExists,d=n.notAuthed,c=n.error),t.get(e,{success:function(e){var t;a!==!0&&void 0!==i&&(v=o.ROOM(U+"/"+e.id),i(e,function(o){v.on("update",o)},function(o){v.on("remove",function(e){o(e),t()})},t=function(){void 0!==v&&(v.exit(),v=void 0)}))},notExists:r,notAuthed:d,error:c}),OBJECT({init:function(o,e){var t;e.exit=t=function(){void 0!==v&&v.exit(),a=!0}}})}),d!==!1&&(t.update=g=function(e,t){var n,i,r,d,c,a,v=e.id;void 0!==t&&(CHECK_IS_DATA(t)!==!0?n=t:(n=t.success,i=t.notValid,r=t.notExists,d=t.notAuthed,c=t.error)),void 0!==s&&(a=s.checkExceptUndefined(e)),e.id=v,void 0!==s&&a.checkHasError()===!0?void 0!==i?i(a.getErrors()):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/update` NOT VALID!: ",a.getErrors()):b.send({methodName:"update",data:e},function(e){var t,a,v,u;void 0!==e&&(t=e.errorMsg,a=e.validErrors,v=e.isNotAuthed,u=e.savedData),void 0!==t?void 0!==c?c(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/update` ERROR: "+t):void 0!==a?void 0!==i?i(a):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/update` NOT VALID!: ",a):v===!0?void 0!==d?d():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/update` NOT AUTHED!"):void 0===u?void 0!==r?r():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/update` NOT EXISTS!"):void 0!==n&&n(u)})}),c!==!1&&(t.remove=D=function(e,t){var n,i,r,d;void 0!==t&&(CHECK_IS_DATA(t)!==!0?n=t:(n=t.success,i=t.notExists,r=t.notAuthed,d=t.error)),b.send({methodName:"remove",data:e},function(e){var t,c,a;void 0!==e&&(t=e.errorMsg,c=e.isNotAuthed,a=e.savedData),void 0!==t?void 0!==d?d(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/remove` ERROR: "+t):c===!0?void 0!==r?r():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/remove` NOT AUTHED!"):void 0===a?void 0!==i?i():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/remove` NOT EXISTS!"):void 0!==n&&n(a)})}),a!==!1&&(t.find=x=function(e,t){var n,i,r;void 0===t&&(t=e,e=void 0),CHECK_IS_DATA(t)!==!0?n=t:(n=t.success,i=t.notAuthed,r=t.error),b.send({methodName:"find",data:e},function(e){var t=e.errorMsg,d=e.isNotAuthed,c=e.savedDataSet;void 0!==t?void 0!==r?r(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/find` ERROR: "+t):d===!0?void 0!==i?i():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/find` NOT AUTHED!"):void 0!==n&&n(c)})},t.findWatching=I=function(e,n){var i,r,d,c,a={};return void 0===n&&(n=e,e=void 0),CHECK_IS_DATA(n)!==!0?i=n:(i=n.success,r=n.notAuthed,d=n.error),t.find(e,{success:function(e){var t;c!==!0&&void 0!==i&&(EACH(e,function(e){var t=e.id;a[t]=o.ROOM(U+"/"+t)}),i(e,function(o,e){a[o].on("update",e)},function(o,e){a[o].on("remove",function(n){e(n),t(o)})},t=function(o){void 0!==a[o]&&(a[o].exit(),delete a[o])}))},notAuthed:r,error:d}),OBJECT({init:function(o,e){var t;e.exit=t=function(){EACH(a,function(o){o.exit()}),c=!0}}})}),v!==!1&&(t.count=P=function(e,t){var n,i,r;void 0===t&&(t=e,e=void 0),CHECK_IS_DATA(t)!==!0?n=t:(n=t.success,i=t.notAuthed,r=t.error),b.send({methodName:"count",data:e},function(e){var t=e.errorMsg,d=e.isNotAuthed,c=e.count;void 0!==t?void 0!==r?r(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/count` ERROR: "+t):d===!0?void 0!==i?i():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/count` NOT AUTHED!"):void 0!==n&&n(c)})}),u!==!1&&(t.checkIsExists=M=function(e,t){var n,i,r;void 0===t&&(t=e,e=void 0),CHECK_IS_DATA(t)!==!0?n=t:(n=t.success,i=t.notAuthed,r=t.error),b.send({methodName:"checkIsExists",data:e},function(e){var t=e.errorMsg,d=e.isNotAuthed,c=e.isExists;void 0!==t?void 0!==r?r(t):console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/checkIsExists` ERROR: "+t):d===!0?void 0!==i?i():console.log("[UPPERCASE.IO-MODEL] `"+o.boxName+"."+U+"/checkIsExists` NOT AUTHED!"):void 0!==n&&n(c)})}),t.onNew=h=function(e,t){var n;return void 0===t?(t=e,(n=o.ROOM(U+"/create")).on("create",t)):EACH(e,function(i,r){return(n=o.ROOM(U+"/"+r+"/"+i+"/create")).on("create",function(o){EACH(e,function(e,t){return o[t]!==e?!1:void 0})===!0&&t(o)}),!1}),OBJECT({init:function(o,e){var t;e.exit=t=function(){void 0!==n&&n.exit()}}})},t.onNewWatching=S=function(e,t){var n,i=[],r=function(e){var n,r,d=e.id;i.push(n=o.ROOM(U+"/"+d)),t(e,function(o){n.on("update",o)},function(o){n.on("remove",function(e){o(e),r()})},r=function(){n.exit(),REMOVE({array:i,value:n})})};return void 0===t?(t=e,(n=o.ROOM(U+"/create")).on("create",function(o){r(o)})):EACH(e,function(t,i){return(n=o.ROOM(U+"/"+i+"/"+t+"/create")).on("create",function(o){EACH(e,function(e,t){return o[t]!==e?!1:void 0})===!0&&r(o)}),!1}),OBJECT({init:function(o,e){var t;e.exit=t=function(){void 0!==n&&n.exit(),EACH(i,function(o){o.exit()})}}})},t.onRemove=T=function(e,t){var n;return void 0===t?(t=e,(n=o.ROOM(U+"/remove")).on("remove",t)):EACH(e,function(i,r){return(n=o.ROOM(U+"/"+r+"/"+i+"/remove")).on("remove",function(o){EACH(e,function(e,t){return o[t]!==e?!1:void 0})===!0&&t(o)}),!1}),OBJECT({init:function(o,e){var t;e.exit=t=function(){void 0!==n&&n.exit()}}})}}})});