/**
 * 
 */
$(function(){
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.ready=function(){
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	};
	timedCount();
	$.ajax({
		url:'loadfindPassword',
		type:'POST',
		sync: true,
		data:{},
		success:function(){
		
		},
		error :function(){
			
		}
	});
})
	function init() {
		document.getElementById("username").focus();
	}

	function login() {
		var username = $.trim($("#username").val());
		var password = $.trim($("#check_code_input").val());
		if (username == "") {
			alert("请输入手机或邮箱号");
			return;
		}
		if (password == "") {
			alert("请输入密码");
			return;
		}
		countreload();
		$.ajax({
			url : 'findpasswordlogin',
			type : 'POST',
			sync : true,
			data : {
				"username" : username,
				"password" : password
			},
			success : function(data) {
				if(data.state=="SUCCESS"){
					alert(data.message);
					window.location.href="queryOrder";
				}else{
					alert(data.message);
				}
			},
			error : function() {
				
			}
		});
	}

	function mm() {
		var username = $.trim($("#username").val());
		if (username == "") {
			alert("请填写邮箱或手机号")
			return;
		}
		countreload();
		$.ajax({
			url : "getPassword",
			type : "POST",
			sync : true,
			data : {
				"username" : username
			},
			success : function(data) {
				alert(data.message);
			},
			error : function() {

			}
		});
	}
