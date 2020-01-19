$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			addCommPassengerPageLoad();		
		}
	}, 10);
	
		//变更证件类型
		$("#cardTyep").on("change",function(){
			$("#cardNum").empty();
		})
		
		//变更年
		$("#year").on("change",function(){
			var yy=$(this).val();
			var mm=$("#month").val();
			if(yy%4 == 0 && mm == 2){
				$("#day").empty();
				for(var d=1;d<30;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(mm == 1 || mm == 3 ||mm == 5 ||mm == 7 ||mm == 8 ||mm == 10 ||mm == 12 ){
				$("#day").empty();
				for(var d=1;d<32;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(mm == 4 || mm == 6 || mm == 9 || mm == 11 ){
				$("#day").empty();
				for(var d=1;d<31;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(yy%4 != 0 && mm == 2){
				$("#day").empty();
				for(var d=1;d<29;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}
		})
		//变更月
		$("#month").on("change",function(){
			var yy=$("#year").val();
			var mm=$(this).val();
			if(yy%4 == 0 && mm == 2){
				$("#day").empty();
				for(var d=1;d<30;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(mm == 1 || mm == 3 ||mm == 5 ||mm == 7 ||mm == 8 ||mm == 10 ||mm == 12 ){
				$("#day").empty();
				for(var d=1;d<32;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(mm == 4 || mm == 6 || mm == 9 || mm == 11 ){
				$("#day").empty();
				for(var d=1;d<31;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(yy%4 != 0 && mm == 2){
				$("#day").empty();
				for(var d=1;d<29;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}
		})
})

function addCommPassengerPageLoad(){
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'addCommPassengerPageLoad',
		type:'POST',
		dataType:"json",
		sync: false,
		success:function(data){
			if(data.notice == "true"){
				$.unblockUI();
				reader.stopAll();
			}else{
				alert("增加常用旅客页面加载失败！");
				window.location.href="commPassenger";
			}
			
		}
	});	
}

//旅客类型键盘事件
function adultKeyup(e)
		{
		   e = e? e : (window.event ? window.event : null);
		   if(e.keyCode==13)//Enter
		   {
		      document.getElementById("adult").click();
		   }
		}
function childKeyup(e)
{
	e = e? e : (window.event ? window.event : null);
	if(e.keyCode==13)//Enter
	{
		document.getElementById("child").click();
	}
}
function infantKeyup(e)
{
	e = e? e : (window.event ? window.event : null);
	if(e.keyCode==13)//Enter
	{
		document.getElementById("infant").click();
	}
}
//点击成人
function checkAdult(){
	$("#adult").prop('checked',true);
	$("#child").prop('checked','');
	$("#infant").prop('checked','');
	$("#birthdayDiv").attr("style","display:none;");
	$("#cardTyepDiv").attr("style","display:inline-block;");
}
//点击儿童
function checkChild(){
	$("#adult").prop('checked','');
	$("#child").prop('checked',true);
	$("#infant").prop('checked','');
	$("#birthdayDiv").attr("style","display:inline-block;");
	$("#cardTyepDiv").attr("style","display:inline-block;");
	
	var date=new Date;
	var year=date.getFullYear(); //本年
	var month=date.getMonth()+1;
	var day = date.getDate(); 
	$("#year").empty();
	$("#month").empty();
	$("#day").empty();
	for(var y=year-12;y<=(year-2);y++){
		$("#year").append("<option value='"+y+"'>"+y+"</option>");
	}
	for (var m = 1; m < 13; m++) {
		m =(m<10 ? "0"+m:m); 
		$("#month").append("<option value='"+m+"'>"+m+"</option>");
	}
	for(var d=1;d<32;d++){
		d =(d<10 ? "0"+d:d); 
		$("#day").append("<option value='"+d+"'>"+d+"</option>");
	}

}
//点击婴儿
function checkInfant(){
	$("#adult").prop('checked','');
	$("#child").prop('checked','');
	$("#infant").prop('checked',true);
	$("#birthdayDiv").attr("style","display:inline-block;");
	$("#cardTyepDiv").attr("style","display:none;");
	
	var date=new Date;
	var year=date.getFullYear(); //本年
	var month=date.getMonth()+1;
	var day = date.getDate(); 
	$("#year").empty();
	$("#month").empty();
	$("#day").empty();
	for(var y=year-2;y<=year;y++){
		$("#year").append("<option value='"+y+"'>"+y+"</option>");
	}
	for (var m = 1; m < 13; m++) {
		m =(m<10 ? "0"+m:m); 
		$("#month").append("<option value='"+m+"'>"+m+"</option>");
	}
	for(var d=1;d<32;d++){
		d =(d<10 ? "0"+d:d); 
		$("#day").append("<option value='"+d+"'>"+d+"</option>");
	}
}






//保存新增常用旅客
function saveAddCommPassenger(){
	
	var adultProp = $("#adult").prop('checked');
	var childProp = $("#child").prop('checked');
	var infantProp = $("#infant").prop('checked');
	if(adultProp == true){
		var psgName = $("#psgName").val().trim();
		if(psgName == "" || psgName == null){
			alert("旅客姓名不能为空！")
			return;
		}
		var regex = /^[a-zA-Z\u4e00-\u9fa5 ]{1,20}$/;
		if(!regex.test(psgName)){
			alert("请输入拼音或文字！")
			return;
		}
		
		var psgFPNO = $("#psgFPNO").val().trim();
		if(psgFPNO != ""){
			var regex = /^(\d{8}|\d{12})?[^ ]/;
			if(!regex.test(psgFPNO)){
				alert("明珠卡号格式不正确！")
				return;
			}
			var contactFPNOCheck = check_mark(contactFPNO,"明珠卡号");
			if(contactFPNOCheck == false){
				return;
			}
		}
		
		var cardType = $("#cardTyep").val();
		var cardNum = $("#cardNum").val().trim();
		if(cardNum == "" || cardNum == null){
			alert("证件号码不能为空！")
			return;
		}
		if(cardType == "NI"){
			var reg = /(^\d{17}(\d|X)$)/;
			if (reg.test(cardNum) == false) {
				alert("身份证格式输入不正确！")
				return ;
			}
		}
		
		var phoneNum = $("#phoneNum").val().trim();
		if(phoneNum != ""){
			var regex =/^[1][3,4,5,7,8][0-9]{9}$/; 
			if(!regex.test(phoneNum)){
				alert("您输入的手机格式不正确！")
				return;
			}
		}
		
		var email = $("#email").val().trim();
		if(email != ""){
			var cE = cE_mail(email);
			if(cE == false){
				return;
			}
		}
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		$.ajax({
			url:'saveCommPassengerAdult',
			type:'POST',
			data:{
				"psgName":psgName,
				"psgFPNO":psgFPNO,
				"cardType":cardType,
				"cardNum":cardNum,
				"phoneNum":phoneNum,
				"email":email
			},
			dataType:"json",
			sync: false,
			success:function(data){
				if(data.errorinfo == "null"){
					alert(data.msg);
					$.unblockUI();
					reader.stopAll();
					window.location.href="commPassenger";
				}else{
					alert(data.errorinfo);
					$.unblockUI();
					reader.stopAll();
					return;
				}
				
			}
		});	
	}else if(childProp == true){

		var psgName = $("#psgName").val().trim();
		if(psgName == "" || psgName == null){
			alert("旅客姓名不能为空！")
			return;
		}
		var regex = /^[a-zA-Z\u4e00-\u9fa5 ]{1,20}$/;
		if(!regex.test(psgName)){
			alert("请输入拼音或文字！")
			return;
		}
		
		var psgFPNO = $("#psgFPNO").val().trim();
		if(psgFPNO != ""){
			var regex = /^(\d{8}|\d{12})?[^ ]/;
			if(!regex.test(psgFPNO)){
				alert("明珠卡号格式不正确！")
				return;
			}
			var contactFPNOCheck = check_mark(contactFPNO,"明珠卡号");
			if(contactFPNOCheck == false){
				return;
			}
		}
		
		var cardType = $("#cardTyep").val();
		var cardNum = $("#cardNum").val().trim();
		if(cardNum == "" || cardNum == null){
			alert("证件号码不能为空！")
			return;
		}
		if(cardType == "NI"){
			var reg = /(^\d{17}(\d|X)$)/;
			if (reg.test(cardNum) == false) {
				alert("身份证格式输入不正确！")
				return ;
			}
		}
		
		var year = $("#year").val();
		var month = $("#month").val();
		var day = $("#day").val();
		
		var phoneNum = $("#phoneNum").val().trim();
		if(phoneNum != ""){
			var regex =/^[1][3,4,5,7,8][0-9]{9}$/; 
			if(!regex.test(phoneNum)){
				alert("您输入的手机格式不正确！")
				return;
			}
		}
		
		var email = $("#email").val().trim();
		if(email != ""){
			var cE = cE_mail(email);
			if(cE == false){
				return;
			}
		}
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		$.ajax({
			url:'saveCommPassengerChild',
			type:'POST',
			data:{
				"psgName":psgName,
				"psgFPNO":psgFPNO,
				"cardType":cardType,
				"cardNum":cardNum,
				"year":year,
				"month":month,
				"day":day,
				"phoneNum":phoneNum,
				"email":email
			},
			dataType:"json",
			sync: false,
			success:function(data){
				if(data.errorinfo == "null"){
					alert(data.msg);
					$.unblockUI();
					reader.stopAll();
					window.location.href="commPassenger";
				}else{
					alert(data.errorinfo);
					$.unblockUI();
					reader.stopAll();
					return;
				}
				
			}
		});	
	}else if(infantProp == true){
		var psgName = $("#psgName").val().trim();
		if(psgName == "" || psgName == null){
			alert("旅客姓名不能为空！")
			return;
		}
		var regex = /^[a-zA-Z\u4e00-\u9fa5 ]{1,20}$/;
		if(!regex.test(psgName)){
			alert("请输入拼音或文字！")
			return;
		}
		
		var psgFPNO = $("#psgFPNO").val().trim();
		if(psgFPNO != ""){
			var regex = /^(\d{8}|\d{12})?[^ ]/;
			if(!regex.test(psgFPNO)){
				alert("明珠卡号格式不正确！")
				return;
			}
			var contactFPNOCheck = check_mark(contactFPNO,"明珠卡号");
			if(contactFPNOCheck == false){
				return;
			}
		}
		
		var year = $("#year").val();
		var month = $("#month").val();
		var day = $("#day").val();
		
		var phoneNum = $("#phoneNum").val().trim();
		if(phoneNum != ""){
			var regex =/^[1][3,4,5,7,8][0-9]{9}$/; 
			if(!regex.test(phoneNum)){
				alert("您输入的手机格式不正确！")
				return;
			}
		}
		
		var email = $("#email").val().trim();
		if(email != ""){
			var cE = cE_mail(email);
			if(cE == false){
				return;
			}
		}
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		$.ajax({
			url:'saveCommPassengerInfant',
			type:'POST',
			data:{
				"psgName":psgName,
				"psgFPNO":psgFPNO,
				"year":year,
				"month":month,
				"day":day,
				"phoneNum":phoneNum,
				"email":email
			},
			dataType:"json",
			sync: false,
			success:function(data){
				if(data.errorinfo == "null"){
					alert(data.msg);
					$.unblockUI();
					reader.stopAll();
					window.location.href="commPassenger";
				}else{
					alert(data.errorinfo);
					$.unblockUI();
					reader.stopAll();
					return;
				}
				
			}
		});	
	
	}
	
	
}


//测试是否含有特殊符号方法*
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

//邮箱校验*
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

//邮箱校验*
function isEmail(strEmail) {
	var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	if (emailReg.test(strEmail)) {
		//符合规则
		return true;
	} else {
		return false;
	}
}