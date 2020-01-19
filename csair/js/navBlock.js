/*区域跳转JS
插件支持：jquery、mousetrap
功能：为避免与浏览器快捷键冲突默认全部采用3+1组合键（alt+ctrl+shift）+自定义键
	头部跳转		alt+ctrl+shift+T(top)
	底部跳转		alt+ctrl+shift+F(footer)
	主要区域跳转	alt+ctrl+shift+M(main)
	左侧跳转		alt+ctrl+shift+L(left)
	右侧跳转		alt+ctrl+shift+R(right)
	正文跳转		alt+ctrl+shift+C(content)
	区域导航正跳转	alt+ctrl+shift+D(up)
	区域导航逆跳转	alt+ctrl+shift+U(down);

*/
var navBlock={};//定义区域跳转类
navBlock.key={};
navBlock.selector={};
navBlock.sIndex = -1;
navBlock.maxIndex = -1;
navBlock.minIndex = 0;
//快捷键定义区
navBlock.key.top="alt+ctrl+shift+t"//(top)
navBlock.key.nav="alt+ctrl+shift+n"//(top)
navBlock.key.footer="alt+ctrl+shift+f"//(footer)
navBlock.key.main="alt+ctrl+shift+m"//(main)
navBlock.key.left="alt+ctrl+shift+l"//(left)
navBlock.key.right="alt+ctrl+shift+r"//(right)
navBlock.key.content="alt+ctrl+shift+c"//(content)
navBlock.key.down="ctrl+down"//(down)
navBlock.key.up="ctrl+up"//(up);
navBlock.key.downEx="alt+ctrl+shift+down"//(down)
navBlock.key.upEx="alt+ctrl+shift+up"//(up);

//定义跳转 使用jquery选择器语法
navBlock.selector.top="#top";
navBlock.selector.nav="#nav";
navBlock.selector.footer="#footer";
navBlock.selector.main="#main";
navBlock.selector.left="#left";
navBlock.selector.right="#right";
navBlock.selector.content="#content";
navBlock.selector.activate=".navBlock"; //通畅激活的采用class因为会激活多个
//功能变量声明区
navBlock.debug=true;


//嵌入了mousetrap代码，如需升级版本删除下载新版本后单独加载即可
/* mousetrap v1.6.0 craig.is/killing/mice */
(function(r,t,g){function u(a,b,h){a.addEventListener?a.addEventListener(b,h,!1):a.attachEvent("on"+b,h)}function y(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return k[a.which]?k[a.which]:p[a.which]?p[a.which]:String.fromCharCode(a.which).toLowerCase()}function D(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function v(a){return"shift"==a||"ctrl"==a||"alt"==a||
"meta"==a}function z(a,b){var h,c,e,g=[];h=a;"+"===h?h=["+"]:(h=h.replace(/\+{2}/g,"+plus"),h=h.split("+"));for(e=0;e<h.length;++e)c=h[e],A[c]&&(c=A[c]),b&&"keypress"!=b&&B[c]&&(c=B[c],g.push("shift")),v(c)&&g.push(c);h=c;e=b;if(!e){if(!n){n={};for(var l in k)95<l&&112>l||k.hasOwnProperty(l)&&(n[k[l]]=l)}e=n[h]?"keydown":"keypress"}"keypress"==e&&g.length&&(e="keydown");return{key:c,modifiers:g,action:e}}function C(a,b){return null===a||a===t?!1:a===b?!0:C(a.parentNode,b)}function c(a){function b(a){a=
a||{};var b=!1,m;for(m in n)a[m]?b=!0:n[m]=0;b||(w=!1)}function h(a,b,m,f,c,h){var g,e,k=[],l=m.type;if(!d._callbacks[a])return[];"keyup"==l&&v(a)&&(b=[a]);for(g=0;g<d._callbacks[a].length;++g)if(e=d._callbacks[a][g],(f||!e.seq||n[e.seq]==e.level)&&l==e.action){var q;(q="keypress"==l&&!m.metaKey&&!m.ctrlKey)||(q=e.modifiers,q=b.sort().join(",")===q.sort().join(","));q&&(q=f&&e.seq==f&&e.level==h,(!f&&e.combo==c||q)&&d._callbacks[a].splice(g,1),k.push(e))}return k}function g(a,b,m,f){d.stopCallback(b,
b.target||b.srcElement,m,f)||!1!==a(b,m)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function e(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=y(a);b&&("keyup"==a.type&&x===b?x=!1:d.handleKey(b,D(a),a))}function k(a,c,m,f){function e(c){return function(){w=c;++n[a];clearTimeout(r);r=setTimeout(b,1E3)}}function h(c){g(m,c,a);"keyup"!==f&&(x=y(c));setTimeout(b,10)}for(var d=n[a]=0;d<c.length;++d){var p=d+1===c.length?h:e(f||
z(c[d+1]).action);l(c[d],p,f,a,d)}}function l(a,b,c,f,e){d._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var g=a.split(" ");1<g.length?k(a,g,b,c):(c=z(a,c),d._callbacks[c.key]=d._callbacks[c.key]||[],h(c.key,c.modifiers,{type:c.action},f,a,e),d._callbacks[c.key][f?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:f,level:e,combo:a}))}var d=this;a=a||t;if(!(d instanceof c))return new c(a);d.target=a;d._callbacks={};d._directMap={};var n={},r,x=!1,p=!1,w=!1;d._handleKey=function(a,
c,e){var f=h(a,c,e),d;c={};var k=0,l=!1;for(d=0;d<f.length;++d)f[d].seq&&(k=Math.max(k,f[d].level));for(d=0;d<f.length;++d)f[d].seq?f[d].level==k&&(l=!0,c[f[d].seq]=1,g(f[d].callback,e,f[d].combo,f[d].seq)):l||g(f[d].callback,e,f[d].combo);f="keypress"==e.type&&p;e.type!=w||v(a)||f||b(c);p=l&&"keydown"==e.type};d._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)l(a[d],b,c)};u(a,"keypress",e);u(a,"keydown",e);u(a,"keyup",e)}if(r){var k={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},p={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},B={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},A={option:"alt",command:"meta","return":"enter",
escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},n;for(g=1;20>g;++g)k[111+g]="f"+g;for(g=0;9>=g;++g)k[g+96]=g;c.prototype.bind=function(a,b,c){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,c);return this};c.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};c.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};c.prototype.reset=function(){this._callbacks={};this._directMap=
{};return this};c.prototype.stopCallback=function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")||C(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};c.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};c.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(k[b]=a[b]);n=null};c.init=function(){var a=c(t),b;for(b in a)"_"!==b.charAt(0)&&(c[b]=function(b){return function(){return a[b].apply(a,arguments)}}(b))};
c.init();r.Mousetrap=c;"undefined"!==typeof module&&module.exports&&(module.exports=c);"function"===typeof define&&define.amd&&define(function(){return c})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);

//嵌入了mousetrap代码结束
navBlock.init = function(){
	//初始化轮训所有需要跳转的块
	$(navBlock.selector.activate).each(function (index, ehx) {
		navBlock.maxIndex++;
	});
	//前进
	Mousetrap.bind(navBlock.key.down, function() {//down
		if (navBlock.sIndex < navBlock.maxIndex) {
			navBlock.sIndex++;
			navBlock.keyShowSelect(navBlock.sIndex);
		}else{
			sIndex=0;
		}
		return false;
	});
	//前进
	Mousetrap.bind(navBlock.key.downEx, function() {//down
		if (navBlock.sIndex < navBlock.maxIndex) {
			navBlock.sIndex++;
			navBlock.keyShowSelect(navBlock.sIndex);
		}else{
			sIndex=0;
		}
		return false;
	});
	//后退
	Mousetrap.bind(navBlock.key.up, function() {//up
		if (navBlock.sIndex > navBlock.minIndex) {
			navBlock.sIndex--;
			navBlock.keyShowSelect(navBlock.sIndex);
		}else{
			navBlock.sIndex=0;
		}
		return false;
	});
	Mousetrap.bind(navBlock.key.upEx, function() {//up
		if (navBlock.sIndex > navBlock.minIndex) {
			navBlock.sIndex--;
			navBlock.keyShowSelect(navBlock.sIndex);
		}else{
			navBlock.sIndex=0;
		}
		return false;
	});
}
//主要代码区域
$(document).ready(function () {
	if(navBlock.debug==true){
		//如果开启调试模式，添加调试绘制矩形边线
		$("body").append("<div id='show_top' class='lineshow'></div>");
		$("body").append("<div id='show_bottom' class='lineshow'></div>");
		$("body").append("<div id='show_left' class='lineshow'></div>");
		$("body").append("<div id='show_right' class='lineshow'></div>");
		$(".lineshow").css({"display":"none"});
	}
	
	//初始化轮训所有需要跳转的块
	$(navBlock.selector.activate).each(function (index, ehx) {
		navBlock.maxIndex++;
	});

	//前进
	Mousetrap.bind(navBlock.key.down, function() {//down
		if (navBlock.sIndex < navBlock.maxIndex) {
			navBlock.sIndex++;
			navBlock.keyShowSelect(navBlock.sIndex);
		}else{
			sIndex=0;
		}
		return false;
	});
	//后退
	Mousetrap.bind(navBlock.key.up, function() {//up
		if (navBlock.sIndex > navBlock.minIndex) {
			navBlock.sIndex--;
			navBlock.keyShowSelect(navBlock.sIndex);
		}else{
			navBlock.sIndex=0;
		}
		return false;
	});
	
	
	/**
	navBlock.key.top="alt+ctrl+shift+T"//(top)
	navBlock.key.footer="alt+ctrl+shift+F"//(footer)
	navBlock.key.main="alt+ctrl+shift+M"//(main)
	navBlock.key.left="alt+ctrl+shift+L"//(left)
	navBlock.key.right="alt+ctrl+shift+R"//(right)
	navBlock.key.content="alt+ctrl+shift+C"//(content)
	navBlock.key.down="alt+ctrl+shift+D"//(down)
	navBlock.key.up="alt+ctrl+shift+U"//(up);
	
	navBlock.selector.top="#top";
	navBlock.selector.footer="#footer";
	navBlock.selector.main="#main";
	navBlock.selector.left="#left";
	navBlock.selector.right="#right";
	navBlock.selector.content="#content";
	navBlock.selector.activate=".navBlock"; //通畅激活的采用class因为会激活多个
	**/
	
	//快捷键功能区域
	
	
	//跳转到头部
	Mousetrap.bind(navBlock.key.top, function() {
		navBlock.keySelectScroll(navBlock.selector.top);
		return false;
	});
	//跳转到导航
	Mousetrap.bind(navBlock.key.nav, function() {
		navBlock.keySelectScroll(navBlock.selector.nav);
		return false;
	});
	//跳转到底部
	Mousetrap.bind(navBlock.key.footer, function() {
		navBlock.keySelectScroll(navBlock.selector.footer);
		return false;
	});
	//跳转到主要区域
	Mousetrap.bind(navBlock.key.main, function() {
		navBlock.keySelectScroll(navBlock.selector.main);
		return false;
	});
	//跳转到左区域
	Mousetrap.bind(navBlock.key.left, function() {
		navBlock.keySelectScroll(navBlock.selector.left);
		return false;
	});
	//跳转到右区域
	Mousetrap.bind(navBlock.key.right, function() {
		navBlock.keySelectScroll(navBlock.selector.right);
		return false;
	});
	//跳转到正文区域
	Mousetrap.bind(navBlock.key.content, function() {
		navBlock.keySelectScroll(navBlock.selector.content);
		return false;
	});

});

navBlock.debugView=function (e){
	if(navBlock.debug==true){
		var x=$(e).offset();
		//var w=parseInt($(e).css("width"));;
		var w=parseInt($(e).outerWidth(true));;
		//var h=parseInt($(e).css("height"));
		var h=parseInt($(e).outerHeight(true));
		$("#show_top").css({"z-index":"9","border": "red 2px solid","position": "absolute","top":x.top,"left":x.left,"width":w,"height":"0px"});
		$("#show_bottom").css({"z-index":"9","border": "red 2px solid","position": "absolute","top":x.top+h,"left":x.left,"width":w,"height":"0px"});
		$("#show_left").css({"z-index":"9","border": "red 2px solid","position": "absolute","top":x.top,"left":x.left,"width":"0px","height":h});
		$("#show_right").css({"z-index":"9","border": "red 2px solid","position": "absolute","top":x.top,"left":x.left+w,"width":"0px","height":h});
		$("html,body").animate({scrollTop : $("#show_top").offset().top}, 200);
		$(".lineshow").css({"display":"block"});
	}
}

//特定区域跳转
navBlock.keySelectScroll=function(id) {
	navBlock.debugView(id);
	$(id).find("a").each(function (index) {
		if (index == 0) {
			$(this).focus();
		}
	});
}
//导航跳转
navBlock.keyShowSelect=function(i) {
	$(navBlock.selector.activate).each(function (index, el) {
		if (i == index) {
			navBlock.debugView(el);
			$(el).find("a,input,select").each(function (i,e) {
				if (i == 0) {
					$(e).focus();
				}
			});

		}
	});
}
