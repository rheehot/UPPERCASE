global.CONNECT_TO_DB_SERVER=CONNECT_TO_DB_SERVER=METHOD(function(t){var o,n,i=[];return t.addInitDBFunc=n=function(t){void 0===o?i.push(t):t(o)},{run:function(t,n){"use strict";var r=t.username,e=t.password,a=void 0===t.host?"127.0.0.1":t.host,c=void 0===t.port?27017:t.port,d=t.name;require("mongodb").MongoClient.connect("mongodb://"+(void 0!==r&&void 0!==e?r+":"+e+"@":"")+a+":"+c+"/"+d,function(t,r){t!==TO_DELETE?console.log(CONSOLE_RED("[UPPERCASE.IO-DB] CONNECT TO DB SERVER FAILED: "+t.toString())):(o=r,EACH(i,function(t){t(o)}),i=void 0,void 0!==n&&n())})}}}),FOR_BOX(function(t){"use strict";var o=require("mongodb").ObjectID,n=function(t){return new o(t)},i=function(t){return void 0!==t._id&&(t.id=t._id.toString()),delete t._id,delete t.__IS_ENABLED,delete t.__RANDOM_KEY,t},r=function(t){EACH(t,function(o,n){o===TO_DELETE?REMOVE({data:t,key:n}):(CHECK_IS_DATA(o)===!0||CHECK_IS_ARRAY(o)===!0)&&r(o)})},e=function(t){var o=function(t){void 0!==t.id&&(CHECK_IS_DATA(t.id)===!0?(EACH(t.id,function(o,i){CHECK_IS_DATA(o)===!0||CHECK_IS_ARRAY(o)===!0?EACH(o,function(t,i){o[i]=n(t)}):t.id[i]=n(o)}),t._id=t.id):t._id=n(id),delete t.id),t.__IS_ENABLED=!0,EACH(t,function(o,n){void 0===o&&delete t[n]})};void 0!==t.$and?EACH(t.$and,function(t){o(t)}):void 0!==t.$or?EACH(t.$or,function(t){o(t)}):o(t)};t.DB=CLASS({init:function(o,a,c){var d,E,s,u,_,f,l,v=[],O=[],D=[],C=[],A=[],m=[],T=[];a.create=d=function(t,o){v.push({data:t,callbackOrHandlers:o})},a.get=E=function(t,o){O.push({idOrParams:t,callbackOrHandlers:o})},a.update=s=function(t,o){D.push({data:t,callbackOrHandlers:o})},a.remove=u=function(t,o){C.push({id:t,callbackOrHandlers:o})},a.find=_=function(t,o){A.push({params:t,callbackOrHandlers:o})},a.count=f=function(t,o){m.push({filter:t,callbackOrHandlers:o})},a.checkIsExists=l=function(t,o){T.push({filter:t,callbackOrHandlers:o})},CONNECT_TO_DB_SERVER.addInitDBFunc(function(o){var g,S=o.collection(t.boxName+"."+c),N=o.collection(t.boxName+"."+c+"__BACKUP"),h=o.collection(t.boxName+"."+c+"__ERROR"),H=function(o){var n=o.method,i=o.data,r=new Date,e={method:n,time:r,data:i};N.save(e,function(){}),NODE_CONFIG.isDBLogMode===!0&&console.log("[UPPERCASE.IO-DB] `"+t.boxName+"."+c+"` DATA SAVED:",e)},I=function(o){o.time=new Date,h.save(o,function(){}),console.log("[UPPERCASE.IO-DB] `"+t.boxName+"."+c+"` ERROR:",o)};a.create=d=function(t,o){var n,e,a;try{t.__IS_ENABLED=!0,t.__RANDOM_KEY=Math.random(),t.createTime=new Date,r(t),void 0!==o&&(CHECK_IS_DATA(o)!==!0?n=o:(n=o.success,e=o.error)),S.save(t,function(o,r){o===TO_DELETE?(H({method:"create",data:r}),i(r),void 0!==n&&n(r)):(a=o.toString(),I({method:"create",data:t,errorMsg:a}),void 0!==e&&e(a))})}catch(c){a=c.toString(),I({method:"create",data:t,errorMsg:a}),void 0!==e&&e(a)}},g=function(t,o){var n,r,a,c,d=t.filter,E=t.sort;try{e(d),CHECK_IS_DATA(o)!==!0?n=o:(n=o.success,r=o.notExists,a=o.error),S.find(d).sort(E).limit(1).toArray(function(o,e){var d;o===TO_DELETE?e!==TO_DELETE&&e.length>0?(d=e[0],i(d),n(d)):r():(c=o.toString(),I({method:"get",params:t,errorMsg:c}),a(c))})}catch(s){c=s.toString(),I({method:"get",params:t,errorMsg:c}),a(c)}},a.get=E=function(t,o){var i,r,e,a,c,d,E,s;void 0===o&&(o=t,t=void 0),CHECK_IS_DATA(o)!==!0?a=o:(a=o.success,c=o.notExists,d=o.error);try{CHECK_IS_DATA(t)===!0?(i=t.filter,r=t.sort,e=t.isRandom):i=void 0!==t?{_id:n(t)}:{},void 0===i&&(i={}),void 0===r&&(r={createTime:-1}),e===!0?(i.__RANDOM_KEY={$gte:E=Math.random()},r.__RANDOM_KEY=1,g({filter:i,sort:r},{error:d,notExists:function(){i.__RANDOM_KEY={$lte:E},g({filter:i,sort:r},o)},success:a})):g({filter:i,sort:r},o)}catch(u){s=u.toString(),I({method:"get",idOrParams:t,errorMsg:s}),d(s)}},a.update=s=function(t,o){var e,a,c,d,E,s=t.id,u=t.$inc;try{e={_id:n(s),__IS_ENABLED:!0},void 0!==o&&(CHECK_IS_DATA(o)!==!0?a=o:(a=o.success,c=o.notExists,d=o.error)),NEXT([function(t){S.findOne(e,t)},function(o){return function(n,i){n===TO_DELETE?i===TO_DELETE?c():(EACH(t,function(t,o){"id"!==o&&"_id"!==o&&"__IS_ENABLED"!==o&&"createTime"!==o&&"$inc"!==o&&(i[o]=t)}),r(i),i.lastUpdateTime=new Date,void 0!==u?S.save(i,function(t){o(i,t)}):S.save(i,function(t){o.next(i,t)})):(E=n.toString(),I({method:"update",data:t,errorMsg:E}),void 0!==d&&d(E))}},function(t){return function(o){S.update(e,{$inc:u},function(n){EACH(u,function(t,n){o[n]+=t}),t(o,n)})}},function(){return function(o,n){n===TO_DELETE?(H({method:"update",data:o}),i(o),void 0!==a&&a(o)):(E=n.toString(),I({method:"update",data:t,errorMsg:E}),void 0!==d&&d(E))}}])}catch(_){E=_.toString(),I({method:"update",data:t,errorMsg:E}),void 0!==d&&d(E)}},a.remove=u=function(t,o){var r,e,a,c,d;try{r={_id:n(t),__IS_ENABLED:!0},void 0!==o&&(CHECK_IS_DATA(o)!==!0?e=o:(e=o.success,a=o.notExists,c=o.error)),S.findOne(r,function(o,n){o===TO_DELETE?n===TO_DELETE?a():(n.__IS_ENABLED=!1,n.removeTime=new Date,S.save(n,function(o){o===TO_DELETE?(H({method:"remove",data:n}),i(n),void 0!==e&&e(n)):(d=o.toString(),I({method:"remove",id:t,errorMsg:d}),void 0!==c&&c(d))})):(d=o.toString(),I({method:"remove",id:t,errorMsg:d}),void 0!==c&&c(d))})}catch(E){d=E.toString(),I({method:"remove",id:t,errorMsg:d}),void 0!==c&&c(d)}},a.find=_=function(t,o){var n,r,a,c,d,E,s,u,_;try{void 0===o&&(o=t,t=void 0),void 0!==t&&(n=t.filter,r=t.sort,a=INTEGER(t.start),c=INTEGER(t.count),d=t.isFindAll),CHECK_IS_DATA(o)!==!0?E=o:(E=o.success,s=o.error),void 0===n&&(n={}),void 0===r&&(r={createTime:-1}),void 0===a&&(a=0),d!==!0&&(void 0===c||c>NODE_CONFIG.maxDataCount||isNaN(c)===!0?c=NODE_CONFIG.maxDataCount:1>c&&(c=1)),e(n),_=function(o,n){o===TO_DELETE?(n!==TO_DELETE&&EACH(n,function(t){i(t)}),E(n)):(u=o.toString(),I({method:"find",params:t,errorMsg:u}),s(u))},d===!0?S.find(n).sort(r).skip(a).toArray(_):S.find(n).sort(r).skip(a).limit(c).toArray(_)}catch(f){u=f.toString(),I({method:"find",params:t,errorMsg:u}),s(u)}},a.count=f=function(t,o){var n,i,r;try{void 0===o&&(o=t,t=void 0),void 0===t&&(t={}),CHECK_IS_DATA(o)!==!0?n=o:(n=o.success,i=o.error),e(t),S.find(t).count(function(o,e){o===TO_DELETE?n(e):(r=o.toString(),I({method:"count",filter:t,errorMsg:r}),i(r))})}catch(a){r=a.toString(),I({method:"count",filter:t,errorMsg:r}),i(r)}},a.checkIsExists=l=function(t,o){var i,r,a;try{void 0===o&&(o=t,t=void 0),void 0===t?t={}:CHECK_IS_DATA(t)!==!0&&(t={_id:n(t)}),CHECK_IS_DATA(o)!==!0?i=o:(i=o.success,r=o.error),e(t),S.find(t).count(function(o,n){o===TO_DELETE?i(void 0!==n&&n>0):(a=o.toString(),I({method:"checkIsExists",filter:t,errorMsg:a}),r(a))})}catch(c){a=c.toString(),I({method:"checkIsExists",filter:t,errorMsg:a}),r(a)}},EACH(v,function(t){d(t.data,t.callbackOrHandlers)}),v=void 0,EACH(O,function(t){E(t.idOrParams,t.callbackOrHandlers)}),O=void 0,EACH(D,function(t){s(t.data,t.callbackOrHandlers)}),D=void 0,EACH(C,function(t){u(t.id,t.callbackOrHandlers)}),C=void 0,EACH(A,function(t){_(t.params,t.callbackOrHandlers)}),A=void 0,EACH(m,function(t){f(t.filter,t.callbackOrHandlers)}),m=void 0,EACH(T,function(t){l(t.filter,t.callbackOrHandlers)}),T=void 0})}})}),FOR_BOX(function(t){"use strict";t.LOG_DB=CLASS({init:function(o,n,i){var r,e=CONNECT_TO_DB_SERVER.getNativeDB(),a=e.collection(t.boxName+"."+i);n.log=r=function(t){t.time=new Date,a.save(t,function(){})}}})}),OVERRIDE(NODE_CONFIG,function(t){global.NODE_CONFIG=NODE_CONFIG=COMBINE([t,{isDBLogMode:!1,maxDataCount:1e3}])});