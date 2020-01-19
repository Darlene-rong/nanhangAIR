$(function(){
	$(".qtipdiv-wallt").bind("mouseover",function(){
		$(this).attr("style","display:block;")
	})
	$(".qtipdiv-wallt").bind("mouseout",function(){
		$(this).attr("style","display:none;")
	})
	
	var mark = $("#mark").val();
	if(mark == "wsy"){
		$("#wsy").attr("style","background-color:#ccc;")
		$("#ysy").attr("style","background-color:#fff;")
		$("#bsy").attr("style","background-color:#fff;")
		$("#wsy a").focus();
	}else if(mark == "ysy"){
		$("#wsy").attr("style","background-color:#fff;")
		$("#ysy").attr("style","background-color:#ccc;")
		$("#bsy").attr("style","background-color:#fff;")
		$("#ysy a").focus();
	}else if(mark == "bsy"){
		$("#wsy").attr("style","background-color:#fff;")
		$("#ysy").attr("style","background-color:#fff;")
		$("#bsy").attr("style","background-color:#ccc;")
		$("#bsy a").focus();
	}
})

//点击优惠券未使用
function checkWSY(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'checkWSY?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
				$("#YHQsy").html(data);
				var mark = $("#mark").val();
				if(mark == "wsy"){
					$("#wsy").attr("style","background-color:#ccc;")
					$("#ysy").attr("style","background-color:#fff;")
					$("#bsy").attr("style","background-color:#fff;")
				}else if(mark == "ysy"){
					$("#wsy").attr("style","background-color:#fff;")
					$("#ysy").attr("style","background-color:#ccc;")
					$("#bsy").attr("style","background-color:#fff;")
				}else if(mark == "bsy"){
					$("#wsy").attr("style","background-color:#fff;")
					$("#ysy").attr("style","background-color:#fff;")
					$("#bsy").attr("style","background-color:#ccc;")
				}
				$("#wsy a").focus();
				$.unblockUI();
				reader.stopAll();
				
		}
	});	
}
//点击优惠券已使用
function checkYSY(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'checkYSY?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#YHQsy").html(data);
			var mark = $("#mark").val();
			if(mark == "wsy"){
				$("#wsy").attr("style","background-color:#ccc;")
				$("#ysy").attr("style","background-color:#fff;")
				$("#bsy").attr("style","background-color:#fff;")
			}else if(mark == "ysy"){
				$("#wsy").attr("style","background-color:#fff;")
				$("#ysy").attr("style","background-color:#ccc;")
				$("#bsy").attr("style","background-color:#fff;")
			}else if(mark == "bsy"){
				$("#wsy").attr("style","background-color:#fff;")
				$("#ysy").attr("style","background-color:#fff;")
				$("#bsy").attr("style","background-color:#ccc;")
			}
			$("#ysy a").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}
//点击优惠券不可使用
function checkBSY(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'checkBSY?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#YHQsy").html(data);
			var mark = $("#mark").val();
			if(mark == "wsy"){
				$("#wsy").attr("style","background-color:#ccc;")
				$("#ysy").attr("style","background-color:#fff;")
				$("#bsy").attr("style","background-color:#fff;")
			}else if(mark == "ysy"){
				$("#wsy").attr("style","background-color:#fff;")
				$("#ysy").attr("style","background-color:#ccc;")
				$("#bsy").attr("style","background-color:#fff;")
			}else if(mark == "bsy"){
				$("#wsy").attr("style","background-color:#fff;")
				$("#ysy").attr("style","background-color:#fff;")
				$("#bsy").attr("style","background-color:#ccc;")
			}
			$("bsy a").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

//查询优惠券号
function checkYHQNo(){
	var mark = $("#mark").val();
	var keyword = $("#codeNo").val().trim();
	var checkKeyword = check_mark(keyword,"优惠券号");
	if(checkKeyword == false){
		return;
	}
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'checkYHQNo?'+timestamp,
		type:'GET',
		data:{
			"keyword":keyword,
			"mark":mark
		},
		dataType:"html",
		sync: false,
		success:function(data){
			$("#YHQsy").html(data);
			var mark = $("#mark").val();
			if(mark == "wsy"){
				$("#wsy").attr("style","background-color:#ccc;")
				$("#ysy").attr("style","background-color:#fff;")
				$("#bsy").attr("style","background-color:#fff;")
			}else if(mark == "ysy"){
				$("#wsy").attr("style","background-color:#fff;")
				$("#ysy").attr("style","background-color:#ccc;")
				$("#bsy").attr("style","background-color:#fff;")
			}else if(mark == "bsy"){
				$("#wsy").attr("style","background-color:#fff;")
				$("#ysy").attr("style","background-color:#fff;")
				$("#bsy").attr("style","background-color:#ccc;")
			}
			$("#checkYHQNo").focus();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}

//绑定优惠券号
function checkBinding(){
	var keyword = $("#codeNo").val().trim();
	var checkKeyword = check_mark(keyword,"优惠券号");
	if(checkKeyword == false){
		return;
	}
	if(keyword == ""||keyword == null){
		alert("优惠券号码不能为空！！")
		return;
	}
	var reg = /^[\dA-Za-z]{12}$|^[\d]{12}$|^[A-Za-z]{12}$/;
	if(!reg.test(keyword)){
		alert("您输入的优惠券格式不正确！")
		return;
	}
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'checkBinding?'+timestamp,
		type:'POST',
		data:{"keyword":keyword},
		dataType:"json",
		sync: true,
		success:function(data){
			alert(data.notice);
			checkWSY();
		}
	});	
}

//测试是否含有特殊符号方法
function check_mark(value,title) {
	var pattern = new RegExp("[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]");
		for (var i = 0; i < value.length; i++) {
			if(pattern.test(value.substr(i,1))){
				alert(title+"中请不要输入特殊符号");
			    return false;
			}
		}
		return true;
	}

//显示规则
function showOrder(e){
	$(e).children(".qtipdiv-wallt").attr("style","display:block;");
}
//隐藏规则
function hideOrder(e){
	$(e).children(".qtipdiv-wallt").attr("style","display:none;");
}