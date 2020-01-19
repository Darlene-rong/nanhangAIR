$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			hotActivity();
		}
	}, 10);	
})

//热点活动
function hotActivity(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'hotActivity?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			$(".syqk").removeClass("current");
			$("#hotActivity").addClass("current");
			$("#hotActivity").focus();
			clickA();//点击列表内容
			init();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

//航线促销
function lines(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'lines?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			$(".syqk").removeClass("current");
			$("#lines").addClass("current");
			$("#lines").focus();
			clickA();//点击列表内容
			init();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}
//银行
function banking(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'banking?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			$(".syqk").removeClass("current");
			$("#banking").addClass("current");
			$("#banking").focus();
			clickA();//点击列表内容
			init();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}
//酒店
function hotels(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'hotels?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			$(".syqk").removeClass("current");
			$("#hotels").addClass("current");
			$("#hotels").focus();
			clickA();//点击列表内容
			init();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}
//租车
function cars(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'cars?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			$(".syqk").removeClass("current");
			$("#cars").addClass("current");
			$("#cars").focus();
			clickA();//点击列表内容
			init();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}
//旅游
function travels(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'travels?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			$(".syqk").removeClass("current");
			$("#travels").addClass("current");
			$("#travels").focus();
			clickA();//点击列表内容
			init();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}
//酒店预订网
function booking(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'booking?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			$(".syqk").removeClass("current");
			$("#booking").addClass("current");
			$("#booking").focus();
			clickA();//点击列表内容
			init();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}
//其他
function others(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'others?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			$(".syqk").removeClass("current");
			$("#others").addClass("current");
			$("#others").focus();
			clickA();//点击列表内容
			init();
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
	$("#Content a").each(function(){
		var aText = $(this).text();
		$(this).attr("title",aText);
	})
}