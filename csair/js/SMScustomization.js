$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			SMSfunction();	
		}
	}, 10);
})

//点击短信定制明珠会员尊享短信功能
function SMSfunction(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'SMSfunction?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#SMSfunction").addClass("current");
			$("#SMSfunction").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

//点击短信定制短信值机
function SMSonDuty(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'SMSonDuty?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#SMSonDuty").addClass("current");
			$("#SMSonDuty").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}
//点击短信定制短信入会
function SMSadmission(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'SMSadmission?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: true,
		success:function(data){
			$("#Content").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#SMSadmission").addClass("current");
			$("#SMSadmission").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

function init(){
	$("#Content a").attr("href","javascript:void(0);");
	$("#Content a").each(function(){
		var aText = $(this).text();
		$(this).attr("title",aText);
	})
}