
$(function(){
	ready();
})
	function ready(){
	$("#flightInfo").html("");
	$("#flightInfo2").attr("style","display : block;");
//	var timestamp=new Date().getTime();
	//进入页面加载旅客信息
	var a = null
	var orderNo = $("#hiddenOrderNum").val();
	var chuliTime1 = $("#hiddenchuliTime1").val();
	var nanhangTime1 = $("#hiddennanhangTime1").val();
	var chuliTime2 = $("#hiddenchuliTime2").val();
	var nanhangTime2 = $("#hiddennanhangTime2").val();
	reader.ready=function(){
		reader.voicePrompt.play("/iac/csair/mp3/00004");
	};
//	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在加载预定的航班信息，请稍后。。。'>提示：正在加载预定的航班信息，请稍后。。。(<span id='countdown'>90</span>)</a></h1>" });
	timedCount();
	Shade();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url : 'loadPayFilightInfo?orderNo='+orderNo+'&chuliTime1='+chuliTime1+'&nanhangTime1='+nanhangTime1+'&chuliTime2='+chuliTime2+'&nanhangTime2='+nanhangTime2,
		type : 'GET',
		dataType : 'html',
		sync : false,
		success : function(data) {
			countreload();
			$("#flightInfo").html(data);
			$.unblockUI();
			$("#flightInfo2").attr("style","display : none;");
			
			
			//获取页面信息判断是否加载成功
			var city = $("#city").text();
			if($.trim(city) == '' || $.trim(city) == null){
//				alert("网络速度慢，请重新查询！")
//				window.location.href="quit";
				a = confirm("订单已生成，由于网络原因支付页面加载超时，是否重新加载？")
				if(a == true){
					ready();
					return;
				}else{
					window.location.href="queryOrder";
				}
				return;
			}
			
			//将加载过来的时间信息固定在页面上，不随加载变化消失
			var loadtime = $("#loadtime").text();
			if($.trim(loadtime) == '' || $.trim(loadtime) == null ){
				var loadtime1 = $("#loadtime1").val();
				var loadtime2 = $("#loadtime2").val();
				var loadtime3 = $("#loadtime3").val();
				if(loadtime3 == '网络速度慢，请重新操作！'){
//					alert(loadtime3);
//					window.location.href="quit";
					a = confirm("订单已生成，由于网络原因支付页面加载超时，是否重新加载？")
					if(a == true){
						ready();
					}else{
						window.location.href="queryOrder";
					}
				}
				$("#loadtime").html(loadtime1+"</br>"+loadtime2+"</br>"+loadtime3);
			}
			reader.stopAll();
			Display();
			navBlock.init();
			
			//配合工具条刷新添加属性
			if(self!=top){
				top.readPageAgain.readAgain();
			}
			$(".ap_flight_info_flight").find("a:first").focus();
		}
	});

}
		function Shade(){ 
		var s = document.getElementById("shade"); 
		s.style.display = "block"; 
		} 

		function Display(){ 
		var d = document.getElementById("shade"); 
		d.style.display = "none"; 
		} 
		
		function xykKeyup(e)
		{
		   e = e? e : (window.event ? window.event : null);
		   if(e.keyCode==13)//Enter
		   {
		      document.getElementById("xyk").click();
		   }
		}
		function jjkKeyup(e)
		{
			e = e? e : (window.event ? window.event : null);
			if(e.keyCode==13)//Enter
			{
				document.getElementById("jjk").click();
			}
		}

function checkxyk(){
	$("#xyk").prop('checked',true);
	$("#jjk").prop('checked','');
	$("#EXPIRE").attr("style","display:block; padding-right: 120px;");
	$("#CVV2").attr("style","display:block;");
}

function checkjjk(){
	$("#jjk").prop('checked',true);
	$("#xyk").prop('checked','');
	$("#EXPIRE").attr("style","display:none;");
	$("#CVV2").attr("style","display:none;");
}

function yzm() {
	var accountNo = $("#accountNo").val();
	var buyerName = $("#buyerName").val();
	var idCard = $("#idCard").val();
	var mobile = $("#mobile").val();
	var cvvInputStyle = $("#CVV2").attr("style");
	if(cvvInputStyle == undefined || cvvInputStyle == "display:block;"){
		var cvv = $("#CVV").val();
		var EXPIREMONTH = $("#EXPIREMONTH").val();
		var EXPIREYEAR = $("#EXPIREYEAR").val();
		if(accountNo==""){
			alert("请填写卡号")
			return;
		}
		var accountNotest=/^(\d{15}|\d{16}|\d{17}|\d{18}|\d{19})$/;
		if(!accountNotest.test(accountNo)){
			alert("请以正确格式输入银行卡号")
			return;
		}
		if(buyerName==""){
			alert("请填写持卡人姓名");
			return;
		}
		var nametest=/[\u4e00-\u9fa5]+/;
		if(!nametest.test(buyerName)){
			alert("请以正确格式输入姓名")
			return;
		}
		if(idCard==""){
			alert("请填写身份证号");
			return;
		}
		var IDtest=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		if(!IDtest.test(idCard)){
			alert("请以正确格式输入身份证号")
			return;
		}
		if(mobile==""){
			alert("请填写银行预留电话");
			return;
		}
		var regu = /^[1][3|4|5|7|8][0-9]{9}$/;
		var re = new RegExp(regu);
		if(!re.test(mobile)){
			alert("请以正确格式输入手机号")
			return;
		}
		
		if(cvv==""){
			alert("请填写信用卡背后3位CVV2码");
			return;
		}
		var pattern = new RegExp("[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]");
		for (var i = 0; i < cvv.length; i++) {
			if(pattern.test(cvv.substr(i,1))){
				alert("cvv中请不要输入特殊符号")
			    return ;
			}
		}
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在发送验证码，请稍候。。。'>提示：正在发送验证码，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/yzm");
		timedCount();
		countreload();
		$.ajax({
			url : 'xykPayOrderYzm',
			type : 'POST',
			sync : true,
			data : {
				"accountNo" : accountNo,
				"cvv" : cvv,
				"EXPIREMONTH":EXPIREMONTH ,
				"EXPIREYEAR":EXPIREYEAR ,
				"buyerName" : buyerName,
				"idCard" : idCard,
				"mobile" : mobile
			},
			success : function(data) {
				if(data.message == undefined){
					alert("获取失败！");
				}else{
					alert(data.message);
				}
				$.unblockUI();
				reader.stopAll();
			},
			error : function() {
			}
		});
	}else{
		if(accountNo==""){
			alert("请填写卡号")
			return;
		}
		var accountNotest=/^(\d{15}|\d{16}|\d{17}|\d{18}|\d{19})$/;
		if(!accountNotest.test(accountNo)){
			alert("请以正确格式输入银行卡号")
			return;
		}
		if(buyerName==""){
			alert("请填写持卡人姓名");
			return;
		}
		var nametest=/[\u4e00-\u9fa5]+/;
		if(!nametest.test(buyerName)){
			alert("请以正确格式输入姓名")
			return;
		}
		if(idCard==""){
			alert("请填写身份证号");
			return;
		}
		var IDtest=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		if(!IDtest.test(idCard)){
			alert("请以正确格式输入身份证号")
			return;
		}
		if(mobile==""){
			alert("请填写银行预留电话");
			return;
		}
		var regu = /^[1][3|4|5|7|8][0-9]{9}$/;
		var re = new RegExp(regu);
		if(!re.test(mobile)){
			alert("请以正确格式输入手机号")
			return;
		}
//		var mobiletest=/^[1][3-8]+\\d{9}/;
//		if(!mobiletest.test(mobile)){
//			alert("请以正确格式输入手机号")
//			return;
//		}
		
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在发送验证码，请稍候。。。'>提示：正在发送验证码，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/yzm");
		timedCount();
		countreload();
		$.ajax({
			url : 'payOrderYzm',
			type : 'POST',
			sync : true,
			data : {
				"accountNo" : accountNo,
				"buyerName" : buyerName,
				"idCard" : idCard,
				"mobile" : mobile
			},
			success : function(data) {
				if(data.message == undefined){
					alert("获取失败！");
				}else{
					alert(data.message);
				}
				
				$.unblockUI();
				reader.stopAll();
			},
			error : function() {
			}
		});
	}
}


function panduan(){
	var accountNo=$.trim($("#accountNo").val());
	var buyerName=$.trim($("#buyerName").val());
	var idCard=$.trim($("#idCard").val());
	var mobile=$.trim($("#mobile").val());
	var codeName=$.trim($("#codeName").val());
	var orderNum=$.trim($("#hiddenOrderNum").val());
	
	if(accountNo==""){
		alert("请填写卡号")
		return;
	}
	var accountNotest=/^(\d{15}|\d{16}|\d{17}|\d{18}|\d{19})$/;
	if(!accountNotest.test(accountNo)){
		alert("请以正确格式输入银行卡号")
		return;
	}
	if(buyerName==""){
		alert("请填写持卡人姓名");
		return;
	}
	var nametest=/[\u4e00-\u9fa5]+/;
	if(!nametest.test(buyerName)){
		alert("请以正确格式输入姓名")
		return;
	}
	if(idCard==""){
		alert("请填写身份证号");
		return;
	}
	var IDtest=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
	if(!IDtest.test(idCard)){
		alert("请以正确格式输入身份证号")
		return;
	}
	if(mobile==""){
		alert("请填写银行预留电话");
		return;
	}
//	var mobiletest=/^[1][3-8]+\\d{9}/;
//	if(!mobiletest.test(mobile)){
//		alert("请以正确格式输入手机号")
//		return;
//	}
	if(codeName==""){
		alert("请填写手机验证码");
		return;
	}
	var pattern = new RegExp("[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]");
	for (var i = 0; i < codeName.length; i++) {
		if(pattern.test(codeName.substr(i,1))){
			alert("验证码中请不要输入特殊符号")
		    return ;
		}
	}
	var cvvInputStyle = $("#CVV2").attr("style");
	if(cvvInputStyle == "undefined" || cvvInputStyle == "display:block;"){
		var cvv = $("#CVV").val();
		if(cvv==""){
			alert("请填写信用卡背后3位CVV2码");
			return;
		}
		var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
		for (var i = 0; i < cvv.length; i++) {
			if(pattern.test(cvv.substr(i,1))){
				alert("cvv中请不要输入特殊符号")
			    return ;
			}
		}
		var expiremonth = $("#EXPIREMONTH").val();
		var expireyear = $("#EXPIREYEAR").val();
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		countreload();
		$.ajax({
			url : 'xykQueryAndPayOrder',
			type : 'POST',
			sync : true,
			data : {
				"codeName":codeName,
				"expiremonth":expiremonth,
				"expireyear":expireyear
			},
			success : function(data) {
				if(data.state=="SUCCESS"){
					alert("购票成功！！！")
					window.location.href="OrderMX?orderNum="+orderNum;
				}else{
					if(data.checkmodel == true){
						alert(data.message);
						window.location.href="index";
					}else{
						alert(data.message);
						reader.stopAll();
						navBlock.init();
					}
					
				}
			},
			error : function() {
			}
		});
	}else{
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		countreload();
		$.ajax({
			url : 'queryAndPayOrder',
			type : 'POST',
			sync : true,
			data : {
				"codeName":codeName
			},
			success : function(data) {
				if(data.state=="SUCCESS"){
					alert("购票成功！！！")
					window.location.href="OrderMX?orderNum="+orderNum;
				}else{
					if(data.checkmodel == true){
						alert(data.message);
						window.location.href="index";
					}else{
						alert(data.message);
						reader.stopAll();
						navBlock.init();
					}
					
				}
			},
			error : function() {
			}
		});
	}
		
}