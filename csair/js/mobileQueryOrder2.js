$(function(){
	
	
	reader.ready=function(){
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	};
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	timedCount();
	$.ajax({
		url:'prePhone',
		type:'POST',
		sync: true,
		data:{},
		success:function(){
			$.unblockUI();
			reader.stopAll();
		},
		error :function(){
			window.location.href="index";
		}
	});


	
	$(".check_code_btn").bind("click",function(){
		var username = $("#username").val();

		if (username == "" || username == null) {
			alert("请输入手机号")
			return;
		}
//		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在发送验证码，请稍候。。。'>提示：正在发送验证码，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
//		reader.voicePrompt.play("/iac/csair/mp3/yzm");
//		timedCount();
		countreload();
		$.ajax({
			url : "phoneYzm",
			type : "POST",
			sync : true,
			data : {
				"username" : username
			},
			success : function(data) {
				alert(data.message);
//				$.unblockUI();
//				reader.stopAll();
			}
		});
	})
	
	$("#login_infos_btn").bind("click",function(){
		var username=$.trim($("#username").val());
		var vcodeReg=$.trim($("#check_code_input").val());
		//var xym=$.trim($("#xym").val());
		if(username==""){
			alert("请输入手机号");
			return;
		}
		if(vcodeReg==""){
			alert("请输入验证码");
			return;
		}
	/*	if(xym==""){
			alert("请输入校验码");
			return;
		}*/
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：会员登录中，请稍后。。。'>提示：会员登录中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/hydl");
		timedCount();
		countreload();
		$.ajax({
			url:'phone',
			type:'POST',
			sync: true,
			data:{
				"username":username,
				"vcodeReg":vcodeReg
			//	"xym":xym
			},
			success:function(data){
				if(data.state == "SUCCESS"){
					//window.location.href="queryOrder";
					window.location.href="index";
				}else{
					alert(data.message);
					$.unblockUI();
					reader.stopAll();
				}
			},
			error :function(){
				window.location.href="index";
			}
		});
	
	})
})
	function init(){
		document.getElementById("username").focus();
	}
	

	
		
		