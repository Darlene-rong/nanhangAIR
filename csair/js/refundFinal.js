$(function(){
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajax({
		url:'refundFinal',
		type:'POST',
		data:{},
		dataType:"json",
		sync: false,
		success:function(data){
			 if(data.notice == "true"){
				$.unblockUI();
				reader.stopAll();
			}else {
				alert(data.msg);
				$.unblockUI();
				reader.stopAll();
			}
		}
	});
	
})