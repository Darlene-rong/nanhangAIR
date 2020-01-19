$(function (){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			checkLCHZ();
		}
	}, 1000);	
})

//加载里程汇总
function checkLCHZ(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'checkLCHZPost',
		type:'POST',
		dataType:"html",
		sync: true,
		success:function(data){
//				alert(data)
				$("#wdlc").html(data);
				$.unblockUI();
				reader.stopAll();
		}
	});	
}