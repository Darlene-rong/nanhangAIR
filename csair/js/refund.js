$(function(){
	$(".nextbtn").click(function(){
		var a = confirm("是否确定退票？");
		if(a){
			refund();
		}else{
			return;
		}
	})
})

function refund(){
	var REFUNDTYPE = $("#REFUNDTYPE").val();
	if(REFUNDTYPE == "" || REFUNDTYPE == undefined || REFUNDTYPE == null){
		alert("请选择退票原因");
		return;
	}
	
	var beizhu = $("#beizhu").val().trim();		
	var beizhuCheck = check_mark(beizhu,"备注");
	if(beizhuCheck == false){
		return;
	}
	if(beizhu == ""){
		alert("请填写备注！")
		return;
	}
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajax({
		url:'refundNext',
		type:'POST',
		data:{
			"refundtype":REFUNDTYPE,
			"beizhu":beizhu
		},
		dataType:"json",
		sync: false,
		success:function(data){
			if(data.notice == "true"){
				alert(data.msg);
				$.unblockUI();
				reader.stopAll();
				var url = window.location.href;
				var url1 = url.split("/iac/iac")[0];
				window.location.href=url1+"/iac/iac/cs/refundTicket";
			}else {
				alert(data.msg);
				window.location.reload();
				$.unblockUI();
				reader.stopAll();
			}
		}
	});
	
	
	
}



//特殊符号校验cc20171013
function check_mark(value,title) {
var pattern = new RegExp("[!#$&*()=|{}':;'.<>/?~#￥……&*——|{}]");
	for (var i = 0; i < value.length; i++) {
		if(pattern.test(value.substr(i,1))){
			alert(title+"中请不要输入特殊符号")
		    return false;
		}
	}
	return true;
}