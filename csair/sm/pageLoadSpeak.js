/*
 * 页面加载后朗读网站名称及进入无障碍云快捷键
 * */

var pageLoadSpeak = {};
pageLoadSpeak.filesURL = "";//加载插件的路径  下方代码中自动获取
pageLoadSpeak.speakLoadSWF = "swf/soundmanager2.swf";//soundManager2Flash路径
//pageLoadSpeak.speakIntordus = "";//介绍网站名称的MP3路径
//pageLoadSpeak.cloudLocation = "localhost:18080/toolbarmini/wca.html";//无障碍云地址
//pageLoadSpeak.speakOpenCloud = "mp3/openCloud.mp3";//提示按快捷键进入云平台
pageLoadSpeak.speakBatchUrl = "http://voice.yunmd.net/ws/batch";//无障碍云批量转换路径
pageLoadSpeak.speakAjaxUrl = "http://voice.yunmd.net/ws/t2s";//无障碍云转换MP3路径
pageLoadSpeak.localURL = "";
//pageLoadSpeak.stateTitle = "广州数字图书馆门户网站";//document.getElementsByTagName("title")[0].text;//网站title
pageLoadSpeak.speakSentence = "";

pageLoadSpeak.loadfiles = function(){//加载插件
	var fileUrl = document.getElementById("pageLoadSpeak").getAttribute("src");
	if(fileUrl.indexOf("/")!=-1){
		pageLoadSpeak.filesURL = fileUrl.substring(0,fileUrl.lastIndexOf("/")+1);
	}else{
		pageLoadSpeak.filesURL = "";
	}
	document.writeln("<script type=\"text/javascript\" src=\""+pageLoadSpeak.filesURL+"jquery.js\" charset=\"utf-8\"></script>");
	document.writeln("<script type=\"text/javascript\" src=\""+pageLoadSpeak.filesURL+"base64.js\" charset=\"utf-8\"></script>");
	document.writeln("<script type=\"text/javascript\" src=\""+pageLoadSpeak.filesURL+"soundmanager2.js\" charset=\"utf-8\"></script>");
	document.writeln("<script type=\"text/javascript\" src=\""+pageLoadSpeak.filesURL+"init.js\" charset=\"utf-8\"></script>");
};
pageLoadSpeak.speakSentence = "欢迎光临"+pageLoadSpeak.stateTitle+",按t键进入无障碍云服务";
pageLoadSpeak.loadfiles();