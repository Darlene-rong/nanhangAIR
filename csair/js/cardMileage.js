$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			lianMingXinYongKa();
		}
	}, 10);	
})

//点击刷卡里程联名信用卡
function lianMingXinYongKa(){
	var timestamp = new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'lianMingXinYongKa?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#cardMileageContent").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#lianMingXinYongKa").addClass("current");
			$("#lianMingXinYongKa").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

//点击刷卡里程银行卡积分兑换
function yinHangJiFenDuiHuan(){
	var timestamp = new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'yinHangJiFenDuiHuan?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#cardMileageContent").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#yinHangJiFenDuiHuan").addClass("current");
			$("#yinHangJiFenDuiHuan").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

function init(){
	$("#cardMileageContent a").attr("href","javascript:void(0);");
	$(".center a").remove();
}