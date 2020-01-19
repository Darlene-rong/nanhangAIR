var jq_1_7_1 = $.noConflict(true);
pageLoadSpeak.speak = {};
pageLoadSpeak.speak.urls = {
		localSWF:pageLoadSpeak.filesURL + pageLoadSpeak.speakLoadSWF,
		openCloud:pageLoadSpeak.filesURL + pageLoadSpeak.speakOpenCloud,
		intordus:pageLoadSpeak.filesURL + pageLoadSpeak.speakIntordus
};
pageLoadSpeak.speak.sendText2Cloud = function(){//将朗读的内容发给云
	var arr = new Array();
	arr.push(de);
	jq_1_7_1.ajax({
	    type:'GET',
	    url:pageLoadSpeak.speakBatchUrl,
	    dataType:'jsonp',
	    jsonp:"callback",
	    data:{"b":arr},
	    async: true
	});
};

pageLoadSpeak.speak.init = function(){//soundManager2初始化
	soundManager.setup({
		useFlashBlock: false,
		url: pageLoadSpeak.speak.urls.localSWF, 
		debugMode: false,
		consoleOnly: false
	});
	soundManager.useFastPolling = false;
	soundManager.onready(function() {  //初始化后朗读提示
//		pageLoadSpeak.speak.speakOpenCloud=soundManager.createSound({
//			id:"openCloud",
//			url:pageLoadSpeak.speak.urls.openCloud,
//			onfinish:function(){
//				pageLoadSpeak.speak.speakOpenCloud.destruct();
//			}
//		});
//		pageLoadSpeak.speak.speakOpenCloud.play();
		jq_1_7_1.ajax({
			type:'GET',
			url:pageLoadSpeak.speakAjaxUrl,
			dataType:'jsonp',
			jsonp:"callback",
			data:{"b":de},
			async: false,
			success:function(data){
				pageLoadSpeak.speak.speakOpenCloud=soundManager.createSound({
					id:'speakSentence',
					url:data.u,
					onfinish:function(){
						pageLoadSpeak.speak.speakOpenCloud.destruct();
					}
				});
				pageLoadSpeak.speak.speakOpenCloud.play();
			}
		});
   });
   soundManager.ontimeout(function(){  
   }); 
};

var de =null;
function readNow(str){
	de = base64.e64(str);
	
	
	pageLoadSpeak.speak.sendText2Cloud();
	
	pageLoadSpeak.speak.init();
	
//	pageLoadSpeak.localURL = window.location.hostname;
//	if(pageLoadSpeak.localURL.length > 0){
//		
//		pageLoadSpeak.cloudLocation = "http://" + pageLoadSpeak.cloudLocation;
//	}
//	
//	jq_1_7_1(document).keydown(function(e){//绑定快捷键T打开无障碍云
////		if(e.altKey&&e.shiftKey&&e.keyCode == 81){//绑定快捷键Alt+shift+Q打开无障碍云
//		if(e.keyCode == 84){
////			window.open(pageLoadSpeak.cloudLocation);  //在新页面打开工具条
//			window.location = pageLoadSpeak.cloudLocation; //直接在当前页面打开工具条
//		};
//	});
}