$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			visaPage();
		}
	}, 10);
})

//点击便捷签证
function visaPage(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'visaPage?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			$("input.mkn-button1").remove();
			init();
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