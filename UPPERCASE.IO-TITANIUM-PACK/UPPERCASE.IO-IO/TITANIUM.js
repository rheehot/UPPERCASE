global.CONNECT_TO_IO_SERVER=CONNECT_TO_IO_SERVER=METHOD({run:function(r,e){"use strict";var o,_,t=r.doorServerHost,E=r.webServerPort,s=r.socketServerPort;CHECK_IS_DATA(e)!==!0?o=e:(o=e.success,_=e.error),GET({host:t,port:E,uri:"mobileweb"===Ti.Platform.name?"__WEB_SOCKET_SERVER_HOST":"__SOCKET_SERVER_HOST",paramStr:"defaultHost="+t},{error:_,success:function(r){CONNECT_TO_ROOM_SERVER({host:r,socketServerPort:s,webSocketServerPort:E},{error:_,success:o})}})}});