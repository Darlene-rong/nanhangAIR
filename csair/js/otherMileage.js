$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			zuChe();
		}
	}, 10);	
})

//点击其他合作伙伴里程租车
function zuChe(){
	var timestamp = new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'zuChe?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#otherMileageContent").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#zuChe").addClass("current");
			$("#zuChe").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

//点击其他合作伙伴里程商旅
function shangLv(){
	var timestamp = new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'shangLv?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#otherMileageContent").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#shangLv").addClass("current");
			$("#shangLv").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}
//点击其他合作伙伴里程餐饮
function canYin(){
	var timestamp = new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'canYin?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#otherMileageContent").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#canYin").addClass("current");
			$("#canYin").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}
//点击其他合作伙伴里程其他
function qiTa(){
	var timestamp = new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'qiTa?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#otherMileageContent").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#qiTa").addClass("current");
			$("#qiTa").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

function init(){
	$("#cardMileageContent a").attr("href","javascript:void(0);");
	$(".center a").remove();
}