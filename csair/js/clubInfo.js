$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			loadclubInfo();
		}
	}, 10);	
})

//热点活动
function loadclubInfo(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'loadclubInfo?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			clickA();//点击列表内容
			$.unblockUI();
			reader.stopAll();
		}
	});	
}





//点击列表内容
function clickA(){
	$(".spearlLink").click(function(){
		var href = $(this).attr("data");
		var timestamp=new Date().getTime();
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url:'clickA?'+timestamp,
			type:'GET',
			data:{
				"href":href
			},
			dataType:"html",
			sync: false,
			success:function(data){
				$("#Content").html(data);
				init();
				clickA();
				$.unblockUI();
				reader.stopAll();
			}
		});	
	})
}


function init(){
	$("#Content a").attr("href","javascript:void(0);");
	$(".loginLink").remove();
	$(".btn").remove();
	$("a img").remove();
	$(".btn-yellow").remove();
	
}