Yogurt.Alert=CLASS({preset:function(){"use strict";return UUI.MODAL},params:function(){"use strict";return{style:{backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:function(t){return t>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20,fontSize:20}}},init:function(t,o,e){"use strict";o.append(e),UANI.FADE_IN({node:o.getNode()})}}),Yogurt.BottomBar=CLASS(function(){"use strict";return{preset:function(){return NODE},init:function(t,o,e){var n,r,i,u=e.buttons,d=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.bottomBarColor?"#666":BROWSER_CONFIG.Yogurt.bottomBarColor,l=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.bottomBarTextColor?"#fff":BROWSER_CONFIG.Yogurt.bottomBarTextColor,f=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.bottomBarHeight?70:BROWSER_CONFIG.Yogurt.bottomBarHeight,s=e.contentStyle;n=DIV({style:{height:f},c:r=DIV({style:{position:"fixed",left:0,bottom:0,backgroundColor:d,width:"100%"},c:DIV({style:{width:Yogurt.BottomButton.getWidth()*u.length,margin:"auto",padding:"12px 0",color:l},c:RUN(function(){var t=[];return EACH(u,function(o){t.push(o)}),t.push(CLEAR_BOTH()),t})})})}),t.setWrapperDom(n),t.setContentDom(r),o.addContentStyle=i=function(t){r.addStyle(t)},void 0!==s&&i(s)}}}),Yogurt.BottomButton=CLASS(function(t){"use strict";var o,e=60,n=24;return t.getWidth=o=function(){return e},{preset:function(){return NODE},init:function(t,o,r){var i,u,d,l,f,s=r.img,c=r.title,a=r.href,g=r.target;i=A({style:{flt:"left",display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none",fontSize:12,width:e},href:a,target:g}),void 0!==c&&i.prepend(u=DIV({c:void 0===c?"":c})),void 0!==s&&(i.prepend(DIV({style:{marginBottom:void 0!==c?5:0},c:s})),s.addStyle({height:n})),t.setDom(i),o.setTitle=d=function(t){u.empty(),u.append(t)},o.getImg=l=function(){return s},o.tap=f=function(){EVENT.fireAll({node:o,name:"tap"})}}}}),Yogurt.Button=CLASS({preset:function(){"use strict";return UUI.BUTTON},params:function(){"use strict";var t=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.buttonColor?"#333":BROWSER_CONFIG.Yogurt.buttonColor;return{style:{padding:"20px 0",color:t,fontSize:24,border:"1px solid "+t,borderRadius:5,backgroundColor:"#fff"},spacing:5,on:{mouseover:function(o,e){e.addStyle({color:"#fff",backgroundColor:t})},mouseout:function(o,e){e.addStyle({color:t,backgroundColor:"#fff"})}}}}}),Yogurt.Checkbox=CLASS({preset:function(){"use strict";return UUI.FULL_CHECKBOX},params:function(){"use strict";return{style:{padding:5}}}}),Yogurt.Confirm=CLASS({preset:function(){"use strict";return Yogurt.Alert},init:function(t,o,e,n){"use strict";o.append(DIV({style:{marginTop:20},c:[Yogurt.Button({style:{width:"47%",flt:"left"},c:"Yes",on:{tap:function(){n(),o.remove()}}}),Yogurt.Button({style:{width:"47%",flt:"right"},c:"No",on:{tap:function(){o.close()}}}),CLEAR_BOTH()]}))}}),Yogurt.Input=CLASS({preset:function(){"use strict";return UUI.FULL_INPUT},params:function(){"use strict";return{style:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666"}}}}),Yogurt.MenuLayout=CLASS(function(t){"use strict";var o,e,n=200,r=800;return t.getMenuWidth=o=function(){return n},t.getHideMenuWinWidth=e=function(){return r},{preset:function(){return NODE},init:function(t,o,e){var i,u,d,l,f,s,c,a,g,p,m,E,h,S,v,C,I,R,y=e.toolbar,A=e.leftMenu,N=e.rightMenu,O=e.bottomBar,Y=!0,D=!0,L=0;void 0!==BROWSER_CONFIG.Yogurt.menuLayoutMenuWidth&&(n=BROWSER_CONFIG.Yogurt.menuLayoutMenuWidth),void 0!==BROWSER_CONFIG.Yogurt.menuLayoutHideMenuWinWidth&&(r=BROWSER_CONFIG.Yogurt.menuLayoutHideMenuWinWidth),void 0!==A&&(L+=1),void 0!==N&&(L+=1),d=DIV({c:[void 0!==A?l=DIV({style:{position:"fixed",top:0,backgroundColor:"#222",width:n,height:"100%",overflowY:"scroll",zIndex:999999,onDisplayResize:function(t){return t>r?{left:0}:{left:-n}}},c:A}):"",void 0!==N?f=DIV({style:{position:"fixed",top:0,backgroundColor:"#222",width:n,height:"100%",overflowY:"scroll",zIndex:999999,onDisplayResize:function(t){return t>r?{right:0}:{right:-n}}},c:N}):"",y,s=DIV({style:{onDisplayResize:function(t){return t>r?{marginLeft:n,width:BODY.getWidth()-n*L}:{marginLeft:0,width:"100%"}}}})]}),y.addContentStyle({onDisplayResize:function(t){return t>r?{left:n,width:BODY.getWidth()-(void 0===A?0:n)-(void 0===N?0:n)}:{left:0,width:"100%"}}}),t.setWrapperDom(d),t.setContentDom(s),o.setBottomBar=m=function(t){O=t,O.addContentStyle({onDisplayResize:function(t){return t>r?{left:n,width:BODY.getWidth()-2*n}:{left:0,width:"100%"}}}),d.append(O)},void 0!==O&&m(O),o.removeBottomBar=E=function(){O.remove(),O=void 0},o.showLeftMenu=h=function(){WIN_WIDTH()>r||Y===!0&&i!==!0&&(void 0!==c&&c.remove(),s.append(c=DIV({style:{position:"absolute",left:n,top:0,width:"100%",height:"100%",zIndex:999999},on:{tap:function(){S()}}})),ANIMATE({node:s,keyframes:KEYFRAMES({from:{marginLeft:0},to:{marginLeft:n}})},function(){i=!0}),ANIMATE({node:y.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:n}})}),ANIMATE({node:l,keyframes:KEYFRAMES({from:{left:-n},to:{left:0}})}),void 0!==O&&ANIMATE({node:O.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:n}})}),Y=!1,a=EVENT({node:y,name:"touchstart"},function(){v()}),g=EVENT({node:s,name:"touchstart"},function(){v()}),void 0!==O&&(p=EVENT({node:O,name:"touchstart"},function(){v()})))},o.hideLeftMenu=S=function(){WIN_WIDTH()>r?void 0!==c&&(c.remove(),c=void 0):Y!==!0&&i===!0&&(void 0!==c&&(c.remove(),c=void 0),ANIMATE({node:s,keyframes:KEYFRAMES({from:{marginLeft:n},to:{marginLeft:0}})},function(){Y=!0}),ANIMATE({node:y.getContentDom(),keyframes:KEYFRAMES({from:{left:n},to:{left:0}})}),ANIMATE({node:l,keyframes:KEYFRAMES({from:{left:0},to:{left:-n}})}),void 0!==O&&ANIMATE({node:O.getContentDom(),keyframes:KEYFRAMES({from:{left:n},to:{left:0}})}),i=!1,a.remove(),g.remove(),void 0!==p&&p.remove())},o.toggleLeftMenu=v=function(){WIN_WIDTH()>r||(Y===!0&&i!==!0&&h(),Y!==!0&&i===!0&&S())},o.showRightMenu=C=function(){WIN_WIDTH()>r||D===!0&&u!==!0&&(void 0!==c&&c.remove(),s.append(c=DIV({style:{position:"absolute",left:-n,top:0,width:"100%",height:"100%",zIndex:999999},on:{tap:function(){I()}}})),ANIMATE({node:s,keyframes:KEYFRAMES({from:{marginLeft:0},to:{marginLeft:-n}})},function(){u=!0}),ANIMATE({node:y.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:-n}})}),ANIMATE({node:f,keyframes:KEYFRAMES({from:{right:-n},to:{right:0}})}),void 0!==O&&ANIMATE({node:O.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:-n}})}),D=!1,a=EVENT({node:y,name:"touchstart"},function(){R()}),g=EVENT({node:s,name:"touchstart"},function(){R()}),void 0!==O&&(p=EVENT({node:O,name:"touchstart"},function(){R()})))},o.hideRightMenu=I=function(){WIN_WIDTH()>r?void 0!==c&&(c.remove(),c=void 0):D!==!0&&u===!0&&(void 0!==c&&(c.remove(),c=void 0),ANIMATE({node:s,keyframes:KEYFRAMES({from:{marginLeft:-n},to:{marginLeft:0}})},function(){D=!0}),ANIMATE({node:y.getContentDom(),keyframes:KEYFRAMES({from:{left:-n},to:{left:0}})}),ANIMATE({node:f,keyframes:KEYFRAMES({from:{right:0},to:{right:-n}})}),void 0!==O&&ANIMATE({node:O.getContentDom(),keyframes:KEYFRAMES({from:{left:-n},to:{left:0}})}),u=!1,a.remove(),g.remove(),void 0!==p&&p.remove())},o.toggleRightMenu=R=function(){WIN_WIDTH()>r||(D===!0&&u!==!0&&C(),D!==!0&&u===!0&&I())}}}}),Yogurt.Prompt=CLASS({preset:function(){"use strict";return Yogurt.Alert},init:function(t,o,e,n){"use strict";var r;o.append(FORM({c:[r=Yogurt.Input({style:{marginTop:10}}),Yogurt.Submit({style:{marginTop:20}})],on:{submit:function(){n(r.getValue()),o.remove()}}}))}}),Yogurt.Select=CLASS({preset:function(){"use strict";return UUI.FULL_SELECT},params:function(){"use strict";return{style:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666",borderLeft:"5px solid #666"}}}}),Yogurt.Slide=CLASS({preset:function(){"use strict";return UUI.PANEL}}),Yogurt.Slider=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,d,l,f,s,c,a,g=e.slides,p=e.contentStyle,m=e.isNotUsingDots,E=[],h=0;n=DIV({c:[DIV({style:{position:"relative"},c:[r=DIV({style:{overflowX:"hidden"},c:d=DIV({c:RUN(function(){var t=[];return EACH(g,function(o){t.push(o)}),t.push(CLEAR_BOTH()),t})})}),i=DIV({style:{position:"absolute",left:0,top:0,width:20,height:"100%",textAlign:"center",cursor:"pointer"},c:UUI.V_CENTER({style:{height:"100%"},c:IMG({src:Yogurt.R("left.png")})}),on:{tap:function(){s(h-1)}}}),u=DIV({style:{position:"absolute",right:0,top:0,width:20,height:"100%",textAlign:"center",cursor:"pointer"},c:UUI.V_CENTER({style:{height:"100%"},c:IMG({src:Yogurt.R("right.png")})}),on:{tap:function(){s(h+1)}}})]}),m===!0?"":UUI.V_CENTER({style:{height:20},c:DIV({style:{width:12*g.length,margin:"auto"},c:RUN(function(){var t=[];return REPEAT(g.length,function(o){var e;t.push(e=UUI.PANEL({style:{flt:"left",padding:"0 2px"},contentStyle:{backgroundColor:0===o?"#000":RGBA([128,128,128,.3]),width:8,height:8,borderRadius:4}})),E.push(e)}),t.push(CLEAR_BOTH()),t})})})]}),t.setWrapperDom(n),t.setContentDom(d),o.on("show",function(){l=o.getWidth(),o.addContentStyle({width:l*g.length}),EACH(g,function(t){t.addStyle({flt:"left",width:l})})}),i.hide(),o.scrollTo=s=function(t){0===t?i.hide():i.show(),t===g.length-1?u.hide():u.show(),t>=0&&t<g.length&&(m!==!0&&E[h].addContentStyle({backgroundColor:RGBA([128,128,128,.3])}),void 0!==f&&(f.remove(),f=void 0),t>h?(h=t,f=INTERVAL(function(){return r.getEl().scrollLeft>=h*l?(r.getEl().scrollLeft=h*l,!1):void(r.getEl().scrollLeft+=l/50)})):h>t&&(h=t,f=INTERVAL(function(){return r.getEl().scrollLeft<=h*l?(r.getEl().scrollLeft=h*l,!1):void(r.getEl().scrollLeft-=l/50)})),m!==!0&&E[h].addContentStyle({backgroundColor:"#000"}),EVENT.fireAll({node:o,name:"scroll"}))},o.on("touchstart",function(t){var e,n,i=r.getEl().scrollLeft,u=t.getLeft();o.on("touchmove",e=function(t){t.stop(),r.getEl().scrollLeft=i+u-t.getLeft()}),o.on("touchend",n=function(t){r.getEl().scrollLeft;u-t.getLeft()<0?s(h-1):u-t.getLeft()>0&&s(h+1),t.stop(),o.off("touchmove",e),o.off("touchend",n),o.off("mouseout",n)}),o.on("mouseout",n),t.stop()}),o.addContentStyle=c=function(t){d.addStyle(t)},void 0!==p&&c(p),o.getPage=a=function(){return h}}}),Yogurt.Submit=CLASS({preset:function(){"use strict";return UUI.FULL_SUBMIT},params:function(){"use strict";var t=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.buttonColor?"#333":BROWSER_CONFIG.Yogurt.buttonColor;return{style:{display:"block",textAlign:"center",paddingTop:20,paddingBottom:20,cursor:"pointer",textDecoration:"none",color:t,fontSize:24,border:"1px solid "+t,borderRadius:5,touchCallout:"none",userSelect:"none",backgroundColor:"#fff",width:"100%"},on:{mouseover:function(o,e){e.addStyle({color:"#fff",backgroundColor:t})},mouseout:function(o,e){e.addStyle({color:t,backgroundColor:"#fff"})}}}}}),Yogurt.Textarea=CLASS({preset:function(){"use strict";return UUI.FULL_TEXTAREA},params:function(){"use strict";return{style:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666"}}}}),Yogurt.Toolbar=CLASS(function(){"use strict";var t=999,o=50;return{preset:function(){return NODE},init:function(e,n,r){var i,u,d,l,f,s=void 0===r?void 0:r.left,c=void 0===r?void 0:r.title,a=void 0===r?void 0:r.right,g=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.toolbarColor?"#333":BROWSER_CONFIG.Yogurt.toolbarColor,p=void 0===BROWSER_CONFIG.Yogurt?void 0:BROWSER_CONFIG.Yogurt.toolbarBackgroundImage,m=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.toolbarTextColor?"#fff":BROWSER_CONFIG.Yogurt.toolbarTextColor,E=void 0===r?void 0:r.contentStyle;i=DIV({style:{backgroundColor:"#333",height:o},c:d=DIV({style:{position:"fixed",top:0,backgroundColor:g,backgroundImage:p,height:o,width:"100%",zIndex:t,color:m},c:[void 0===s?"":DIV({style:{position:"absolute",top:0,left:0},c:s}),u=H1({style:{paddingTop:13,fontSize:20,textAlign:"center",fontWeight:"bold"},c:void 0===c?"":c}),void 0===a?"":DIV({style:{position:"absolute",top:0,right:0},c:a})]})}),e.setWrapperDom(i),e.setContentDom(d),n.addContentStyle=l=function(t){d.addStyle(t)},void 0!==E&&l(E),n.setTitle=f=function(t){u.empty(),u.append(t)}}}}),Yogurt.ToolbarButton=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,d,l,f,s=e.img,c=e.title,a=e.href,g=e.target;n=A({style:{display:"block",padding:"16px 10px",cursor:"pointer",fontSize:16},href:a,target:g,c:[r=DIV({style:{flt:"left"},c:i=SPAN({c:void 0===c?"":c})}),CLEAR_BOTH()]}),void 0!==s&&(s.addStyle({flt:"left"}),void 0===s.getStyle("margin")&&void 0===s.getStyle("marginRight")&&s.addStyle({marginRight:5}),n.prepend(s),u=EVENT({node:s,name:"load"},function(){r.addStyle({marginTop:(s.getHeight()-r.getHeight())/2}),u.remove()})),t.setDom(n),o.setTitle=d=function(t){i.empty(),i.append(t)},o.getImg=l=function(){return s},o.tap=f=function(){EVENT.fireAll({node:o,name:"tap"})}}}),Yogurt.Wrapper=CLASS({preset:function(){"use strict";return NODE},init:function(t){"use strict";t.setDom(DIV({style:COMBINE([{backgroundColor:"#fff",color:"#000",fontSize:16},void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.wrapperStyle?{}:BROWSER_CONFIG.Yogurt.wrapperStyle])}))}});