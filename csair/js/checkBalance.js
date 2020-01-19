$(function() {
	var mark = $("#mark").val();
	if(mark == "yuE"){
		$(".wkt").attr("style","display:none;");
		$(".loser").attr("style","display:none;");
	}else if(mark == "register"){
		$(".yuEContent").attr("style","display:none;");
	}else if(mark == "null"){
		alert("session失效，请重新登录！")
		window.location.href="quit";
	}
})
var bankCheck = null;

//点击立即开通
function ljkt(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'ljkt?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
				$(".wkt").attr("style","display:none;");
				$(".blkt").html(data);
				$(".blkt").attr("style","display:block;");
				$.unblockUI();
				reader.stopAll();
		}
	});	
}
//点击获取手机验证码
function sjyzm(){
	var regex =/^[1][3,4,5,7,8][0-9]{9}$/; 
	var mobile = $("#mobile").val().trim();
	if(mobile == null || mobile == ""){
		alert("手机号不能为空！");
		return;
	}
	if(!regex.test(mobile)){
		alert("您输入的手机格式不正确！")
		return;
	}
	var check = check_mark(mobile,"手机号码");
	if(check == false){
		return;
	}
	$.ajax({
		url:'sjyzm',
		type:'POST',
		data:{"mobile":mobile},
		dataType:"json",
		sync: true,
		success:function(data){
			alert(data.notice);
		}
	});	
}

//完成注册方法
function wczc(){
	var regex =/^[1][3,4,5,7,8][0-9]{9}$/; 
	var mobile = $("#mobile").val();
	if(mobile == null || mobile == ""){
		alert("手机号不能为空！");
		return;
	}
	if(!regex.test(mobile)){
		alert("您输入的手机格式不正确！")
		return;
	}
	var checkMobile = check_mark(mobile,"手机号码");
	if(checkMobile == false){
		return;
	}
	
	var email = $("#email").val().trim();
	var cE = cE_mail(email);
	if(cE == false){
		return;
	}
	
	var question = $("#question").val();
	
	var pwd = $("#pwd").val().trim();
	var passwordAgain = $("#passwordAgain").val().trim();
	if(pwd != passwordAgain){
		alert("支付密码和确认支付密码不一致！")
		return;
	}
//	var reg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{8,19}$/;
	var reg = /^[\dA-Za-z]{8,19}$|^[\d]{8,19}$|^[A-Za-z]{8,19}$/;
	if(!reg.test(pwd)){
		alert("您输入的支付密码不符合规则！")
		return;
	}
	if(!reg.test(passwordAgain)){
		alert("您输入的确认支付密码不符合规则！")
		return;
	}
	if(pwd == null || pwd == ""){
		alert("支付密码不能为空！");
		return;
	}
	if(passwordAgain == null || passwordAgain == ""){
		alert("确认支付密码不能为空！");
		return;
	}
	
	var answer = $("#answer").val().trim();
	if(answer == null || answer == ""){
		alert("答案不能为空！");
		return;
	}
	var checkAnswer = check_mark(answer,"答案");
	if(checkAnswer == false){
		return;
	}
	
	var code = $("#code").val().trim();
	if(code == null || code == ""){
		alert("验证码不能为空！");
		return;
	}
	var reg1 = /^\d{6}$/; 
	if(!reg1.test(code)){
		alert("您输入的验证码不正确！")
		return;
	}
	$.ajax({
		url:'wczc',
		type:'POST',
		data:{
			"mobile":mobile,
			"email":email,
			"question":question,
			"pwd":pwd,
			"passwordAgain":passwordAgain,
			"answer":answer,
			"code":code
		},
		dataType:"json",
		sync: true,
		success:function(data){
			alert(data.notice);
			if(data.status == "true"){
				window.location.href="checkBalance";
			}
		}
	});	
	
	
}

//测试是否含有特殊符号方法
function check_mark(value,title) {
	var pattern = new RegExp("[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]");
		for (var i = 0; i < value.length; i++) {
			if(pattern.test(value.substr(i,1))){
				alert(title+"中请不要输入特殊符号")
			    return false;
			}
		}
		return true;
	}
//邮箱校验
function cE_mail(e_mail) {
	if (e_mail.length != 0) {
		if (!isEmail(e_mail)) {
			alert("邮箱格式错误");
			return false;
		} else {
			//$("#errorTips").html("");
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

//点击充值
function checkChongzhi(){
	$.ajax({
		url:'checkChongzhi',
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$(".yuEContent").attr("style","display:none;");
			$("#chongzhiContent").attr("style","display:block;");
			$("#chongzhiContent").html(data);
		}
	});	
}

//变更支付方式
function changePaytype(){
	var paytypeValue = $("#paytype").val();
	if(paytypeValue == "1"){
		$("#rechargeable").attr("style","display:none;")
		$("#chinapay").attr("style","display:block;")
	}else if(paytypeValue == "2"){
		$("#chinapay").attr("style","display:none;")
		$("#rechargeable").attr("style","display:block;")
	}
}

//chinapay选择银行
function checkBank(e){
	$(".icon-radio").each(function(){
		$(this).prop('checked','');
	});
	$(e).prop('checked',true);
	bankCheck = $(e).attr("id");
}

//chinapay点击下一步
function chinapay_next(){
	var paytypeValue = $("#paytype").val();
	var chinapaymoney = $("#chinapaymoney").val().trim();
	if(chinapaymoney == "" || chinapaymoney == null){
		alert("充值金额不能为空！")
		return;
	}else if(chinapaymoney%10 != 0){
		alert("充值金额应为10的倍数！")
		return;
	}
	var checkChinapaymoney = check_mark(chinapaymoney,"充值金额");
	if(checkChinapaymoney == false){
		return;
	}
	if(bankCheck == null){
		alert("请选择银行！")
	}
	$.ajax({
		url:'chinapayNext',
		type:'POST',
		data:{
			"paytype":paytypeValue,
			"chinapaymoney":chinapaymoney,
			"id":bankCheck
		},
		dataType:"json",
		sync: true,
		success:function(data){

		}
	});	
}

//充值卡充值点击下一步
function rechargeable_next(){
	var paytypeValue = $("#paytype").val();
	var cardaccount = $("#cardaccount").val().trim();
	if(cardaccount == "" || cardaccount == null){
		alert("充值金额不能为空！")
		return;
	}
	if(cardaccount.length != 18){
		alert("充值卡号长度不正确！")
		return;
	}
	var checkCardaccount = check_mark(cardaccount,"充值卡号");
	if(checkCardaccount == false){
		return;
	}
	var cardpassword = $("#cardpassword").val().trim();
	if(cardpassword == "" || cardpassword == null){
		alert("充值金额不能为空！")
		return;
	}
	var checkCardpassword = check_mark(cardpassword,"充值密码");
	if(checkCardpassword == false){
		return;
	}
	$.ajax({
		url:'rechargeableNext',
		type:'POST',
		data:{
			"paytype":paytypeValue,
			"cardaccount":cardaccount,
			"cardpassword":cardpassword
		},
		dataType:"json",
		sync: true,
		success:function(data){

		}
	});
}