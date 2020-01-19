var reader = {};
reader.voicePrompt={};
reader.dada=null;
reader.open=null;
reader.voicePromptObject = null;//播放语音提示对象
reader.ready=null;
reader.soundManagerIsready = false;
reader.filesURL = "";
reader.url = {
	speakLoadSWF:"/iac/csair/js/soundmanager2.swf"
};

$(function(){
	reader.init();
	
});
reader.init = function(){//soundManager2初始化
	soundManager.setup({
		useFlashBlock: false,
		url: reader.url.speakLoadSWF, 
		debugMode: false,
		consoleOnly: false
	});
	soundManager.useFastPolling = false;
	soundManager.onready(function() {
		reader.soundManagerIsready = true;
		if(reader.ready!=null){
			reader.ready();
		}else{
			reader.voicePrompt.playOpen();
		}
	});
	soundManager.ontimeout(function(){  
	}); 
};


reader.voicePrompt.play = function(voiceUrl){
	var voiceId = "voiceId";
	if(reader.voicePromptObject != null && reader.voicePromptObject != false){
		reader.voicePromptObject.destruct();
	}
//	setTimeout(function(){
		reader.voicePromptObject=soundManager.createSound({
			id:voiceId,
			url:voiceUrl,
			onfinish:function(){
				//reader.voicePromptObject.destruct();
				reader.voicePrompt.playDa();
			}
		});

		if(reader.voicePromptObject == false){
			reader.voicePrompt.play(voiceUrl);
		}else{
			reader.voicePromptObject.play();
		}
//	},500);
};

reader.voicePrompt.playDa = function(){
	var voiceId = "dada";
	reader.dada=soundManager.createSound({
		id:voiceId,
		url:"/iac/csair/mp3/da",
		onfinish:function(){
			reader.dada.play();
		}
	});
	reader.dada.play();
};

reader.stopAll=function(){
	soundManager.stopAll();
	reader.voicePrompt.playOpen();
}

reader.voicePrompt.playOpen = function(){
	var voiceId = "open";
	reader.open=soundManager.createSound({
		id:voiceId,
		url:"/iac/csair/mp3/open",
		onfinish:function(){
			//reader.dada.play();
		}
	});
	
	if(reader.open == false){
		reader.voicePrompt.playOpen();
	}else{
		reader.open.play();
	}
};
