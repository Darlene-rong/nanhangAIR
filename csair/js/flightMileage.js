$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			nanFangHangKongPage();
		}
	}, 10);	
})

//点击飞行里程南航航空
function nanFangHangKongPage(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'nanFangHangKong?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#flightMileageContent").html(data);
			$("a.mkn-button").remove();
			init();
			$(".syqk").removeClass("current");
			$("#nanfanghangkong").addClass("current");
			$("#nanfanghangkong").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

//点击飞行里程天合联盟
function tianHeLianMengHangKongPage(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'tianHeLianMengHangKongPage?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#flightMileageContent").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#tianhelianmeng").addClass("current");
			$("#tianhelianmeng").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}
//点击飞行里程其他合作伙伴
function othersPage(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'othersPage?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: true,
		success:function(data){
			$("#flightMileageContent").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#others").addClass("current");
			$("#others").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

function init(){
	$("#flightMileageContent a").attr("href","javascript:void(0);");
	
}