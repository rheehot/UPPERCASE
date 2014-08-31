global.BOOT=BOOT=function(params){"use strict";var path=require("path"),cluster=require("cluster"),version,rootPath=process.cwd(),browserScript="global = window;\n",indexPageContent="",boxNamesInBOXFolder=[],loadJSForNode=function(e){require(e)},loadJSForBrowser=function(e){browserScript+=READ_FILE({path:e,isSync:!0}).toString()+"\n"},loadJSForClient=function(e){loadJSForBrowser(e)},loadJSForCommon=function(e){loadJSForNode(e),loadJSForBrowser(e)},loadCoffeeForNode=function(e){RUN_COFFEE(READ_FILE({path:e,isSync:!0}).toString())},loadCoffeeForBrowser=function(e){browserScript+=COMPILE_COFFEE_TO_JS(READ_FILE({path:e,isSync:!0}).toString())+"\n"},loadCoffeeForClient=function(e){loadCoffeeForBrowser(e)},loadCoffeeForCommon=function(e){loadCoffeeForNode(e),loadCoffeeForBrowser(e)},loadLiterateCoffeeForNode=function(e){RUN_LITCOFFEE(READ_FILE({path:e,isSync:!0}).toString())},loadLiterateCoffeeForBrowser=function(e){browserScript+=COMPILE_LITCOFFEE_TO_JS(READ_FILE({path:e,isSync:!0}).toString())+"\n"},loadLiterateCoffeeForClient=function(e){loadLiterateCoffeeForBrowser(e)},loadLiterateCoffeeForCommon=function(e){loadLiterateCoffeeForNode(e),loadLiterateCoffeeForBrowser(e)},checkIsAllowedFolderName=function(e){return"BOX"!==e&&"node_modules"!==e&&"not_load"!==e&&"deprecated"!==e&&"_"!==e[0]},loadUJS,configuration,initBoxes,clustering,initDatabase,initModelSystem,loadAllScripts,generateIndexPage,run;loadUJS=function(){loadJSForNode(__dirname+"/UPPERCASE.JS-COMMON.js"),loadJSForNode(__dirname+"/UPPERCASE.JS-NODE.js"),loadJSForBrowser(__dirname+"/UPPERCASE.JS-COMMON.js"),loadJSForBrowser(__dirname+"/UPPERCASE.JS-BROWSER.js")},configuration=function(){var _CONFIG,_NODE_CONFIG,_BROWSER_CONFIG,stringifyJSONWithFunction=function(data){return JSON.stringify(data,function(e,o){return"function"==typeof o?"__THIS_IS_FUNCTION_START__"+o.toString()+"__THIS_IS_FUNCTION_END__":o},"	").replace(/("__THIS_IS_FUNCTION_START__(.*)__THIS_IS_FUNCTION_END__")/g,function(match,content){return eval("("+eval('"'+content.substring('"__THIS_IS_FUNCTION_START__'.length,content.length-'__THIS_IS_FUNCTION_END__"'.length)+'"')+")").toString()})};NODE_CONFIG.rootPath=rootPath,void 0!==params&&(_CONFIG=params.CONFIG,_NODE_CONFIG=params.NODE_CONFIG,_BROWSER_CONFIG=params.BROWSER_CONFIG),void 0!==_CONFIG&&(EXTEND({origin:CONFIG,extend:_CONFIG}),browserScript+="EXTEND({ origin : CONFIG, extend : "+stringifyJSONWithFunction(_CONFIG)+" });\n"),CONFIG.isDevMode===!0&&cluster.isMaster===!0&&(version="V"+Date.now(),WRITE_FILE({path:rootPath+"/V",content:version,isSync:!0})),READ_FILE({path:rootPath+"/V",isSync:!0},{notExists:function(){console.log(CONSOLE_RED("[UPPERCASE.IO] NOT EXISTS `V` VERSION FILE!")),version="V__NOT_EXISTS"},success:function(e){version=e.toString()}}),CONFIG.version=version,browserScript+="CONFIG.version = '"+version+"'\n",void 0!==_NODE_CONFIG&&EXTEND({origin:NODE_CONFIG,extend:_NODE_CONFIG}),void 0!==_BROWSER_CONFIG&&(browserScript+="EXTEND({ origin : BROWSER_CONFIG, extend : "+stringifyJSONWithFunction(_BROWSER_CONFIG)+" });\n"),browserScript+="BROWSER_CONFIG.fixScriptsFolderPath = '/UPPERCASE.JS-BROWSER-FIX'\n",browserScript+="BROWSER_CONFIG.fixTransportScriptsFolderPath = '/UPPERCASE.IO-TRANSPORT'\n"},initBoxes=function(){loadJSForCommon(__dirname+"/UPPERCASE.IO-BOX/CORE.js"),FIND_FOLDER_NAMES({path:rootPath,isSync:!0},function(e){EACH(e,function(e){checkIsAllowedFolderName(e)===!0&&(BOX(e),browserScript+="BOX('"+e+"');\n")})}),CHECK_IS_EXISTS_FILE({path:rootPath+"/BOX",isSync:!0})===!0&&FIND_FOLDER_NAMES({path:rootPath+"/BOX",isSync:!0},function(e){EACH(e,function(e){checkIsAllowedFolderName(e)===!0&&(BOX(e),browserScript+="BOX('"+e+"');\n",boxNamesInBOXFolder.push(e))})}),loadJSForBrowser(__dirname+"/UPPERCASE.IO-BOX/BROWSER.js")},clustering=function(e){CPU_CLUSTERING(function(o){void 0!==NODE_CONFIG.serverClusteringHosts&&void 0!==NODE_CONFIG.thisServerHost&&void 0!==NODE_CONFIG.serverClusteringPort?SERVER_CLUSTERING({hosts:NODE_CONFIG.serverClusteringHosts,thisServerHost:NODE_CONFIG.thisServerHost,port:NODE_CONFIG.serverClusteringPort},function(){e(o)}):e(o)})},initDatabase=function(){loadJSForNode(__dirname+"/UPPERCASE.IO-DB/NODE.js"),void 0!==NODE_CONFIG.dbName&&CONNECT_TO_DB_SERVER({name:NODE_CONFIG.dbName,host:NODE_CONFIG.dbHost,port:NODE_CONFIG.dbPort,username:NODE_CONFIG.dbUsername,password:NODE_CONFIG.dbPassword})},initModelSystem=function(){loadJSForNode(__dirname+"/UPPERCASE.IO-TRANSPORT/NODE.js"),loadJSForBrowser(__dirname+"/UPPERCASE.IO-TRANSPORT/BROWSER.js"),loadJSForNode(__dirname+"/UPPERCASE.IO-ROOM/NODE.js"),loadJSForClient(__dirname+"/UPPERCASE.IO-ROOM/CLIENT.js"),loadJSForBrowser(__dirname+"/UPPERCASE.IO-ROOM/BROWSER.js"),loadJSForCommon(__dirname+"/UPPERCASE.IO-MODEL/COMMON.js"),loadJSForNode(__dirname+"/UPPERCASE.IO-MODEL/NODE.js"),loadJSForClient(__dirname+"/UPPERCASE.IO-MODEL/CLIENT.js")},loadAllScripts=function(){var e=function(e,o,t,n){var r=function(e){FIND_FILE_NAMES({path:e,isSync:!0},{error:function(){},success:function(r){EACH(r,function(r){var i=e+"/"+r,a=path.extname(r).toLowerCase();".js"===a?o(i):".coffee"===a?t(i):".litcoffee"===a&&n(i)})}}),FIND_FOLDER_NAMES({path:e,isSync:!0},{error:function(){},success:function(o){EACH(o,function(o){checkIsAllowedFolderName(o)===!0&&r(e+"/"+o)})}})};FOR_BOX(function(i){var a=CHECK_IS_IN({array:boxNamesInBOXFolder,value:i.boxName})===!0?rootPath+"/BOX":rootPath;r(a+"/"+i.boxName+"/"+e),FIND_FILE_NAMES({path:a+"/"+i.boxName,isSync:!0},{error:function(){},success:function(r){EACH(r,function(r){var s=a+"/"+i.boxName+"/"+r,O=path.extname(r).toLowerCase();r===e+O&&(".js"===O?o(s):".coffee"===O?t(s):".litcoffee"===O&&n(s))})}})})};e("COMMON",loadJSForCommon,loadCoffeeForCommon,loadLiterateCoffeeForCommon),e("NODE",loadJSForNode,loadCoffeeForNode,loadLiterateCoffeeForNode),e("BROWSER",loadJSForBrowser,loadCoffeeForBrowser,loadLiterateCoffeeForBrowser),e("CLIENT",loadJSForClient,loadCoffeeForClient,loadLiterateCoffeeForClient)},generateIndexPage=function(){indexPageContent+="<!DOCTYPE html>",indexPageContent+="<html>",indexPageContent+="<head>",indexPageContent+='<meta charset="utf-8">',indexPageContent+='<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'+(CONFIG.isMobileFullScreen===!0?", minimal-ui":"")+'">',indexPageContent+='<meta name="google" value="notranslate">',void 0!==CONFIG.googleSiteVerificationKey&&(indexPageContent+='<meta name="google-site-verification" content="'+CONFIG.googleSiteVerificationKey+'" />'),indexPageContent+='<meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">',void 0!==CONFIG.description&&(indexPageContent+='<meta name="description" content="'+CONFIG.description+'">'),indexPageContent+='<link href="/favicon.ico" rel="shortcut icon">',indexPageContent+="<title>"+CONFIG.defaultTitle+"</title>",indexPageContent+='<link rel="stylesheet" type="text/css" href="/__CSS?'+CONFIG.version+'" />',indexPageContent+="</head>",indexPageContent+="<body>",indexPageContent+="<noscript>",indexPageContent+='<p style="padding:15px;">',indexPageContent+="JavaScript is disabled. Please enable JavaScript in your browser.",indexPageContent+="</p>",indexPageContent+="</noscript>",indexPageContent+='<script type="text/javascript" src="/__SCRIPT?'+CONFIG.version+'"></script>',indexPageContent+="</body>",indexPageContent+="</html>"},run=function(e){var o,t,n=0,r=0,i=0,a=CALENDAR();INIT_OBJECTS(),FOR_BOX(function(o){void 0!==o.MAIN&&o.MAIN(e)}),(void 0!==CONFIG.webServerPort||void 0!==CONFIG.sercuredWebServerPort)&&(loadJSForNode(__dirname+"/UPPERCASE.IO-UPLOAD/NODE.js"),o=RESOURCE_SERVER({port:CONFIG.webServerPort,securedPort:CONFIG.sercuredWebServerPort,securedKeyFilePath:rootPath+"/"+NODE_CONFIG.securedKeyFilePath,securedCertFilePath:rootPath+"/"+NODE_CONFIG.securedCertFilePath,noParsingNativeReqURIs:["__UPLOAD"],rootPath:rootPath,version:version},{requestListener:function(e,o,a,s,O){var d,S,C=e.uri,_=e.headers,c=e.params;if("__SCRIPT"===C)return o(CONFIG.isDevMode!==!0&&_["if-none-match"]===version?{statusCode:304}:CONFIG.isDevMode!==!0&&c.version!==version?{statusCode:302,headers:{Location:"/__SCRIPT?version="+version}}:{contentType:"text/javascript",content:browserScript,version:version}),!1;if("__CSS"===C)s(__dirname),e.uri="INIT_STYLE.css";else{if("__UPLOAD_SERVER_HOST"===C)return void 0===CONFIG.uploadServerHosts?o({content:c.defaultHost}):(o({content:CONFIG.uploadServerHosts[n]}),n+=1,n===CONFIG.uploadServerHosts.length&&(n=0)),!1;if("__UPLOAD"===C)return UPLOAD_REQUEST({requestInfo:e,uploadPath:rootPath+"/__RF/__TEMP"},{overFileSize:function(){o({statusCode:302,headers:{Location:c.callbackURL+"?maxUploadFileMB="+NODE_CONFIG.maxUploadFileMB}})},success:function(e){var t,n=c.boxName,r=BOX.getBoxes()[void 0===n?CONFIG.defaultBoxName:n];void 0!==r&&(t=r.DB("__UPLOAD_FILE"),NEXT(e,[function(e,o){var r=e.path;delete e.path,e.serverId=1,t.create(e,function(e){MOVE_FILE({from:r,to:rootPath+"/__RF/"+n+"/"+e.id},o)})},function(){return function(){o({statusCode:302,headers:{Location:c.callbackURL+"?fileDataSetStr="+encodeURIComponent(STRINGIFY(e))}})}}]))}}),!1;if("__RF/"===C.substring(0,5))return C=C.substring(5),S=C.indexOf("/"),-1!==S&&(d=C.substring(0,S),"UPPERCASE.IO"===d||void 0!==BOX.getBoxes()[d]?C=C.substring(S+1):d=CONFIG.defaultBoxName,BOX.getBoxes()[d].DB("__UPLOAD_FILE").get(-1===C.lastIndexOf("/")?C:C.substring(C.lastIndexOf("/")+1),{error:function(){O({isFinal:!0})},notExists:function(){O({isFinal:!0})},success:function(e){O({contentType:e.type,headers:{"Content-Disposition":'attachment; filename="'+e.name+'"'},isFinal:!0})}})),!1;if("__UPLOAD_CALLBACK"===C)return o(void 0!==c.maxUploadFileMB?{content:"<script>maxUploadFileMB="+c.maxUploadFileMB+"</script>"}:{content:"<script>fileDataSetStr='"+c.fileDataSetStr+"'</script>"}),!1;if("__SOCKET_SERVER_HOST"===C)return void 0===CONFIG.socketServerHosts?o({content:c.defaultHost}):(o({content:CONFIG.socketServerHosts[r]}),r+=1,r===CONFIG.socketServerHosts.length&&(r=0)),!1;if("__WEB_SOCKET_SERVER_HOST"===C)return void 0===CONFIG.webSocketServerHosts?o({content:c.defaultHost}):(o({content:CONFIG.webSocketServerHosts[i]}),i+=1,i===CONFIG.webSocketServerHosts.length&&(i=0)),!1;if("__WEB_SOCKET_FIX"===C)return t(e,{response:o,onDisconnected:a}),!1;S=C.indexOf("/"),-1===S?d=CONFIG.defaultBoxName:(d=C.substring(0,S),void 0!==BOX.getBoxes()[d]||"UPPERCASE.IO-TRANSPORT"===d||"UPPERCASE.JS-BROWSER-FIX"===d?C=C.substring(S+1):d=CONFIG.defaultBoxName),"UPPERCASE.IO-TRANSPORT"===d?(s(__dirname+"/UPPERCASE.IO-TRANSPORT/R"),e.uri=C):"UPPERCASE.JS-BROWSER-FIX"===d?(s(__dirname+"/UPPERCASE.JS-BROWSER-FIX"),e.uri=C):e.uri=CHECK_IS_IN({array:boxNamesInBOXFolder,value:d})===!0?"BOX/"+d+"/R"+(""===C?"":"/"+C):d+"/R"+(""===C?"":"/"+C)}},notExistsResource:function(e,o,t){(o.uri===CONFIG.defaultBoxName+"/R"||o.uri==="BOX/"+CONFIG.defaultBoxName+"/R")&&t({contentType:"text/html",content:indexPageContent})}}),t=LAUNCH_ROOM_SERVER({socketServerPort:CONFIG.socketServerPort,webServer:o,isCreateWebSocketFixRequestManager:!0}).getWebSocketFixRequest()),console.log("[UPPERCASE.IO] <"+a.getYear()+"-"+a.getMonth()+"-"+a.getDate()+" "+a.getHour()+":"+a.getMinute()+":"+a.getSecond()+"> `"+CONFIG.defaultTitle+"` WORKER #"+e.id+" (PID:"+e.pid+") BOOTed!"+(void 0===CONFIG.webServerPort?"":" => http://localhost:"+CONFIG.webServerPort)+(void 0===CONFIG.securedWebServerPort?"":" => https://localhost:"+CONFIG.securedWebServerPort))},loadUJS(),configuration(),initBoxes(),loadJSForCommon(__dirname+"/UPPERCASE.IO-BOOT/COMMON.js"),loadJSForClient(__dirname+"/UPPERCASE.IO-BOOT/BROWSER.js"),loadJSForClient(__dirname+"/UPPERCASE.IO-BOOT/CLIENT.js"),loadJSForNode(__dirname+"/UPPERCASE.IO-UTIL/NODE.js"),clustering(function(e){initDatabase(),initModelSystem(),loadAllScripts(),CONFIG.isDevMode!==!0&&(browserScript=MINIFY_JS(browserScript)),generateIndexPage(),run(e)})};