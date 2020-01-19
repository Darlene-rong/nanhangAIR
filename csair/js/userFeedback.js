$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			loadUserFeedback();
		}
	}, 10);
/****************************************************************************/	
	$("#feedbackType .chooseBox").on("click",function(){
		$("#feedbackType .chooseBox").attr("class","chooseBox");
		$(this).attr("class","chooseBox chosen");
		var data_val = $(this).attr("data-val");
		$("#category").attr("value",data_val);
	})
	
	$("#feedbackLink .chooseBox").on("click",function(){
		$("#feedbackLink .chooseBox").attr("class","chooseBox");
		$(this).attr("class","chooseBox chosen");
		var data_val = $(this).attr("data-val");
		$("#businessType").attr("value",data_val);
		if(data_val == "ticket"){
			var handChannel_Wrapper_Style = $("#handChannel-Wrapper").attr("style");
			if(handChannel_Wrapper_Style.indexOf("none")>0){
				$("#handChannel-Wrapper").attr("style","display:block;");
				$("#handChannel-Wrapper .chooseBox").attr("class","chooseBox");
				$("#website").attr("class","chooseBox chosen");
				$("#handChannel").attr("value","officialsite");
			}
		}else{
			var handChannel_Wrapper_Style = $("#handChannel-Wrapper").attr("style");
			if(handChannel_Wrapper_Style.indexOf("block")>0){
				$("#handChannel-Wrapper").attr("style","display:none;");
			}
		}
	})
	
	$("#handChannel-Wrapper .chooseBox").on("click",function(){
		$("#handChannel-Wrapper .chooseBox").attr("class","chooseBox");
		$(this).attr("class","chooseBox chosen");
		var data_val = $(this).attr("data-val");
		$("#handChannel").attr("value",data_val);
	})
/*******************************************************************************************/
	//发送验证码
	$("#forMcode").on("click",function(){
		var mobile = $("#mobile").val().trim();
		if(mobile == ""){
			alert("手机号码不能为空！")
			return;
		}
		var mobileCheck = check_mark(mobile,"手机号");
		if(mobileCheck == false){
			return;
		}
		if(!checkMobile(mobile)){
			return false;
		}
		var forMcodeText = $("#forMcode").text();
		if(forMcodeText.indexOf("秒后再次获取")>0){
			return;
		}
		userFeedbackTimedCount();
		$.ajax({
			url:'userFeedback_yzm',
			type:'POST',
			data:{
				"mobile":mobile
			},
			dataType:"json",
			sync: false,
			success:function(data){
				alert(data.msg);
			}
		});
	})
/*******************************************************************************************/	
	//点击重置
	$("#cleanForm").on("click",function(){
		$("#name").val("");
		$("#content").val("");
		$("#username").val("");
		$("#mobile").val("");
		$("#mcode").val("");
		$("#email").val("");
	})
/*******************************************************************************************/
	//提交反馈
	$("#formSubmit").on("click",function(){
		var category = $("#category").val();
		var businessType = $("#businessType").val();
		var handChannel = $("#handChannel").val();
		var name = $("#name").val().trim();
		if(name == ""){
			alert("问题描述不能为空！");
			return;
		}
		var nameCheck = check_mark(name,"问题描述");
		if(nameCheck == false){
			return;
		}
		
		var content = $("#content").val().trim();
		if(content == ""){
			alert("具体内容不能为空！")
			return;
		}
		var contentCheck = check_mark(content,"具体内容");
		if(contentCheck == false){
			return;
		}
		
		var username = $("#username").val().trim();
		if(username == ""){
			alert("反馈人姓名不能为空！");
			return;
		}
		var usernameCheck = check_mark(username,"反馈人姓名");
		if(usernameCheck == false){
			return;
		}
		
		var mobile = $("#mobile").val().trim();
		if(mobile == ""){
			alert("手机号码不能为空！")
			return;
		}
		var mobileCheck = check_mark(mobile,"手机号码");
		if(mobileCheck == false){
			return;
		}
		if(!checkMobile(mobile)){
			return false;
		}
		
		var reg = /^\d{6}$/;
		var mcode = $("#mcode").val().trim();
		if(mcode == ""){
			alert("验证码不能为空！")
			return;
		}
		var mcodeCheck = check_mark(mcode,"验证码");
		if(mcodeCheck == false){
			return;
		}
		if(!reg.test(mcode)){
			alert("请输入正确的验证码！")
			return;
		}
		
		var email = $("#email").val().trim();
		if(email == ""){
			alert("邮箱不能为空！")
			return;
		}
		var checkEmail = cE_mail(email);
		if(checkEmail == false){
			return;
		}
		
		$.ajax({
			url:'userFeedback_submit',
			type:'POST',
			data:{
				"category":category,
				"businessType":businessType,
				"handChannel":handChannel,
				"name":name,
				"content":content,
				"username":username,
				"mobile":mobile,
				"mcode":mcode,
				"email":email
			},
			dataType:"json",
			sync: false,
			success:function(data){
				alert(data.msg);
				if(data.msg.indexOf("成功")){
					window.location.href="userFeedback";
				}else{
					return;
				}
			}
		});
		
		
	})
})

//加载用户反馈
function loadUserFeedback(){
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajax({
		url:'loadUserFeedback',
		type:'POST',
		dataType:"json",
		sync: false,
		success:function(data){
			if(data.notice == "false"){
				alert("用户反馈页面加载超时！")
				window.location.href="customerService";
			}else{
				$.unblockUI();
				reader.stopAll();
			}
		}
	});
}

//验证码按钮倒计时
function userFeedbackTimedCount(){
	var t=$("#countdown1").text();
	if(t == undefined || t == ""){
		t = 60;
	}
	$("#forMcode").html("请在<span id='countdown1' style='color:red;'>"+t+"</span>秒后再次获取");
	t=$("#countdown1").text();
	t=t-1;
	if(t == 0){
		$("#forMcode").text("获取验证码");
		t = 10;
		return;
	}
	$("#countdown1").text(t);
	setTimeout("userFeedbackTimedCount()",1100);
}

//特殊符号校验cc20171013
function check_mark(value,title) {
var pattern = new RegExp("[`~!#$%^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]");
	for (var i = 0; i < value.length; i++) {
		if(pattern.test(value.substr(i,1))){
			alert(title+"中请不要输入特殊符号")
		    return false;
		}
	}
	return true;
}
//手机号校验cx20170915
function  checkMobile(s) {
	var regu = /^[1][3|4|5|7|8][0-9]{9}$/;
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		alert("手机号格式错误！");
		return false;
	}
};

//邮箱校验cx20170915
function cE_mail(e_mail) {
	if (e_mail.length != 0) {
		if (!isEmail(e_mail)) {
			alert("邮箱格式错误");
			return false;
		} 
	}else {
		alert("邮箱不能为空!");
		return false;
	}
	return true;
}
//邮箱校验
function isEmail(strEmail) {
	var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	if (emailReg.test(strEmail)) {
		//符合规则
		return true;
	} else {
		return false;
	}
}