$(function(){
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			hotelMileage();
		}
	}, 10);	
	
	
})

//点击酒店里程加载
function hotelMileage(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'hotelMileagePage?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#hotelMileageContent").html(data);
			init();
			$(".syqk").removeClass("current");
			$("#hotelMileage").addClass("current");
			$("#hotelMileage").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}


function init(){
	$("#flightMileageContent a").attr("href","javascript:void(0);");
	$(".center a").remove();
	
}