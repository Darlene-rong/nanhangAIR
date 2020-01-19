/**
 * 
 */
$(function() {
	
	$("#oldpassword").focus();
	
//	$.ajax({
//		url : 'preChangePassword',
//		type : 'POST',
//		sync : true,
//		data : {},
//		success : function() {
//
//		},
//		error : function() {
//			
//		}
//	});
})

function editpassword() {
	
	var oldpassword = $.trim($("#oldpassword").val());
	var newpassword = $.trim($("#newpassword").val());
	var newpasswordagain = $.trim($("#newpasswordagain").val());
	
	if(oldpassword == ""){
		alert("旧密码不能为空!")
		return;
	}
	if(newpassword == ""){
		alert("新密码不能为空!")
		return;
	}
	if(newpasswordagain == ""){
		alert("确认密码不能为空!")
		return;
	}

	if (isNaN(oldpassword) || oldpassword.length > 10 || oldpassword.length < 6) {
		alert("旧密码必须为6-10位数字")
		return;
	}

	if (oldpassword == newpassword) {
		 alert("新密码与旧密码不能相同");
		return;
	}

	if (newpassword == '' || isNaN(newpassword) || newpassword.length > 10
			|| newpassword.length < 6) {
		alert("新密码必须为6-10位数字")
		return;
	}


	if (newpasswordagain == "" || isNaN(newpasswordagain) || newpasswordagain.length > 10
			|| newpasswordagain.length < 6) {
		alert("新密码必须为6-10位数字")
		return;
	}

	if (newpassword != newpasswordagain) {
		alert("两次新密码输入不一致")
		return;
	}
	$(".upd_pwd_btn").attr("style","background:#7a7a7a;");
	mzcountreload();
	$.ajax({
		url : "changePassword",
		type : "POST",
		sync : true,
		data : {
			"oldpassword" : oldpassword,
			"newpassword" : newpassword,
			"newpasswordagain" : newpasswordagain
		},
		success : function(data) {
			if (data.state == "SUCCESS") {
				alert(data.message)
				window.location.href = "index";
			} else {
				alert(data.message);
			}
		},
		error : function() {

		}
	});
}


function qk(){
	$("#oldpassword").val("");
	$("#newpassword").val("");
	$("#newpasswordagain").val("");
}
