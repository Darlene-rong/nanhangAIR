$(function(){
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			membershipLevelPage();
		}
	}, 10);
	
	
})

//点击飞行里程南航航空
function membershipLevelPage(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'membershipLevelPage?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			init();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}



function init(){
	$("#Content a").attr("href","javascript:void(0);");
	
}