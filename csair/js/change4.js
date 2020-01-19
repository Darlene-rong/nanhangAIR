$(function(){
	
	$(".nextbtn").click(function(){
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		$.ajax({
			url:'change4Next',
			type:'POST',
			dataType:"json",
			sync: false,
			success:function(data){
				if(data.notice == "true"){
					var changeNo = data.changeNo;
					window.location.href = "payForChange?changeNo="+changeNo;
				}else{
					alert(data.msg);
					$.unblockUI();
					reader.stopAll();
					navBlock.init();
				}
			}
		});
	})
})

