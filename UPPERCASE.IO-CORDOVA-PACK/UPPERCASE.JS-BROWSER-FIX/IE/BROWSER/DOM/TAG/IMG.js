OVERRIDE(IMG,function(t){"use strict";global.IMG=IMG=CLASS({preset:function(){return t},init:function(t,e){var i;IE.version<=8&&(void 0===e.getStyle("width")&&void 0!==e.getStyle("height")&&e.addStyle({width:"auto"}),void 0!==e.getStyle("width")&&void 0===e.getStyle("height")&&e.addStyle({height:"auto"})),IE.version<=10&&(OVERRIDE(e.setSrc,function(t){e.setSrc=i=function(e){t(e+(-1===e.indexOf("?")?"?"+Date.now():"&"+Date.now()))}}),void 0!==e.getSrc()&&i(e.getSrc())),IE.version<=6&&void 0!==e.getSrc()&&-1===e.getSrc().indexOf(".gif")&&ADD_STYLE({node:e,style:{behavior:"url("+BROWSER_CONFIG.fixScriptsFolderPath+"/IE/BROWSER/LIB/iepngfix/iepngfix.htc?"+(void 0!==CONFIG.version?CONFIG.version:Date.now())+");"}})}})});