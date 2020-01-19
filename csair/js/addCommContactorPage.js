$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			addCommContactorPageLoad();
		}
	}, 10);	
})

function addCommContactorPageLoad(){
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'addCommContactorPageLoad',
		type:'POST',
		dataType:"json",
		sync: false,
		success:function(data){
			if(data.notice == "true"){
				$.unblockUI();
				reader.stopAll();
			}else{
				alert("增加常用联系人页面加载失败！");
				window.location.href="commContactor";
			}
			
		}
	});	
	
}

//保存新增常用联系人
function saveAddCommContactor(){
	var contactName = $("#contactName").val().trim();
	if(contactName == "" || contactName == null){
		alert("联系人姓名不能为空！")
		return;
	}
	var regex = /^[a-zA-Z\u4e00-\u9fa5 ]{1,20}$/;
	if(!regex.test(contactName)){
		alert("请输入拼音或文字！")
		return;
	}
	
	
	var contactPhone = $("#contactPhone").val().trim();
	if(contactPhone == "" || contactPhone == null){
		alert("手机号不能为空！")
		return;
	}
	var regex =/^[1][3,4,5,7,8][0-9]{9}$/; 
	if(!regex.test(contactPhone)){
		alert("您输入的手机格式不正确！")
		return;
	}
	
	
	var contactFPNO = $("#contactFPNO").val().trim();
	if(contactFPNO != ""){
		var regex = /^(\d{8}|\d{12})?[^ ]/;
		if(!regex.test(contactFPNO)){
			alert("明珠卡号格式不正确！")
			return;
		}
		var contactFPNOCheck = check_mark(contactFPNO,"明珠卡号");
		if(contactFPNOCheck == false){
			return;
		}
	}
	
	
	var contactEmail = $("#contactEmail").val().trim();
	if(contactEmail == "" || contactEmail == null){
		alert("电子邮箱不能为空！")
		return;
	}
	var cE = cE_mail(contactEmail);
	if(cE == false){
		return;
	}
	
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajax({
		url:'saveCommContactor',
		type:'POST',
		data:{
			"contactName":contactName,
			"contactPhone":contactPhone,
			"contactFPNO":contactFPNO,
			"contactEmail":contactEmail
		},
		dataType:"json",
		sync: false,
		success:function(data){
			if(data.errorinfo == "null"){
				alert(data.msg);
				$.unblockUI();
				reader.stopAll();
				window.location.href="commContactor";
			}else{
				alert(data.errorinfo);
				$.unblockUI();
				reader.stopAll();
				return;
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