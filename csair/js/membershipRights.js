$(function(){
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			membershipRightsPage();
		}
	}, 10);
	
	
})


function membershipRightsPage(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'membershipRightsPage?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#membershipRightsPage").addClass("current");
			$("#membershipRightsPage").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}


function tianheEnjoy(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'tianheEnjoy?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#tianheEnjoy").addClass("current");
			$("#tianheEnjoy").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

function init(){
	$("#Content a").attr("href","javascript:void(0);");
	
}