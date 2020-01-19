	
	$(function(){
		//邮箱实时验证cx20170915
	/*	$("#e_mail").blur(function(){		
			var e_mail = $(this).val();
			var flag = cE_mail(e_mail);
			return flag;
			//if(flag == false){
				//$(this).focus();
			//}
		  });
		//手机号实时验证cx20170915
		$("#contact_moblie").blur(function(){
			var contact_moblie = $(this).val();
			var flag = checkMobile(contact_moblie);
			return flag;
		});
	 */
	});
	//特殊符号校验cc20171013
	function check_mark(value,title) {
	var pattern = new RegExp("[`~!#$%^&*()=|{}':;',\\[\\].<>?~！#￥……&*（）——|{}【】‘；：”“'。，、？]");
		for (var i = 0; i < value.length; i++) {
			if(pattern.test(value.substr(i,1))){
				alert(title+"中请不要输入特殊符号")
			    return false;
			}
		}
		return true;
	}
	//邮箱校验cx20170915
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
	//验证码校验不为6位都不过，乘机人信息页不登录购票
	function checkCode(){
		var code = $("#code").val();
		if(myTrim(code).length != 6){
			alert("验证码不正确，请重新输入！");
			//$("#code").focus();
			return false;
		}
	}
	
	//验证乘机人信息页cx20170915
	function checkPData(){
		//乘机人信息验证cx20170915
		//姓名和婴儿携带者cx20170915
		var value;
		var returnStatic = true;
		 $(".ap_infos_name").each(function(){
			var pnode = $(this).parent();
			var display = pnode.css("display");
			if(display != "none"){
				value = $(this).val();
				if(!/^[\u4e00-\u9fa5]+$/gi.test(this.value)){
					 var name = $(this).attr("title");
					 alert(name + '不能为空或含有非汉字字符');
					 returnStatic = false;
					 return false;
				 }
			}		
		  });
		 if(!returnStatic){
			 return false;
		 }
		 //身份证验证cx20170915
		 var flagPid;
		 $("ul.ap_passenger_infos").each(function(){
			 var pType=$(this).find("[name=pType]").eq(0).val();
			 if(pType == '0' || pType == '1' ){
			 var card = $(this).find(".ap_infos_human_card_type").val();
			 var pId = $(this).find(".ap_infos_human_card_num").val();
				 if(card == "PP" && myTrim(pId).length == 0){
					 alert("护照不能为空！");
					 returnStatic = false;
					 return false;
				 }
				 if(card == "ID" && myTrim(pId).length == 0){
					 alert("其他证件不能为空！");
					 returnStatic = false;
					 return false;
				 }
				 if(card == "NI"){	 
					 flagPid = scCard(pId);
					 if(!flagPid){
						 returnStatic = false;
						 return false;
					 }
				 }
			 }
		 })
		 if(!returnStatic){
			 return false;
		 }
		//联系人信息验证cx20170915
		var telphone =$("#contact_moblie").val();
		var username =$("#contact_name").val();
		var email =$("#e_mail").val();
		var tellen = telphone.replace(/(^s*)|(s*$)/g, "").length;
		if(myTrim(username).length == 0){
			alert("请填写联系人信息的姓名！");
			return false;
		}
		if(!/^[\u4e00-\u9fa5]+$/gi.test(username)){
			alert('联系人信息的姓名含有非汉字字符');
			return false;
		}
		if(tellen == 0){
			alert("请填写手机号！");
			return false;
		}
		var tellenc = 11 - tellen;
		if(tellenc > 0 ){
			alert("您写入的手机号为"+tellen+"位少了"+tellenc+"位");
			return false;
		}
		//验证手机号格式cx20170915
		if(!checkMobile(telphone)){
			return false;
		}
		//姓名校验cx20170915
		
		if(myTrim(email).length == 0){
			alert("邮箱不能为空！");
			return false;
		}
		if(!cE_mail(email)){
			return false;
		}	
	}
	/*********************************************通用方法************************************************************/
	//去除字符串前后空格cx20170915
	function myTrim(x) {
	    return x.replace(/^\s+|\s+$/gm,'');
	}
	//邮箱校验
	function isEmail(strEmail) {
		// var emailReg = /^[_a-z0-9]+@([_a-z0-9]+\.)+[a-z0-9]{2,3}$/;
		var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
		if (emailReg.test(strEmail)) {
			//符合规则
			return true;
		} else {
			return false;
		}
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