	//$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);


	$(function(){
		var timestamp=new Date().getTime();
		//进入页面加载旅客信息
		reader.ready=function(){
			reader.voicePrompt.play("/iac/csair/mp3/00004");
		};
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在加载预定的航班信息，请稍后。。。'>提示：正在加载预定的航班信息，请稍后。。。(<span id='countdown'>90</span>)</a></h1>" });
		timedCount();
//		Shade();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url : 'loadLCFilightInfo?'+timestamp,
			type : 'GET',
			dataType : 'html',
			sync : false,
			success : function(data) {
//				countreload();
//				$("#flightInfo2").attr("style","display : none;");
				$("#flightInfo").html(data);
				show();
				
				//获取页面信息判断是否加载成功
//				var total = $("#total").text();
//				if($.trim(total) == '' || $.trim(total) == null){
//					alert("网络速度慢，请重新查询！")
//					window.location.href="quit";
//					return;
//				}
				
				//将加载过来的时间信息固定在页面上，不随加载变化消失
//				var loadtime = $("#loadtime").text();
//				if($.trim(loadtime) == '' || $.trim(loadtime) == null ){
//					var loadtime1 = $("#loadtime1").val();
//					$("#loadtime").html(loadtime1);
//				}
				
				$.unblockUI();
				reader.stopAll();
//				Display();
				navBlock.init();
				//配合工具条刷新添加属性
				if(self!=top){
					top.readPageAgain.readAgain();
				}
//				$(".ap_flight_info_flight").find("a:first").focus();
				
			}
		});
		
	//	禁用f5
		$("body").bind("keydown",function(e){     
		    e=window.event||e;
		    if(event.keyCode==116){
		        e.keyCode = 0; //IE下需要设置为keyCode为false 
		        return false; 
		     }  
		})
		
		
		
		//登录点击下一步
		$("#next").click(function() {
			var tyChecked = $("#ty").prop("checked");
			if(tyChecked == false){
				alert("请阅读并理解各项须知！");
				$("#ty").focus();
				return;
			}
			var contact_name =$("#contact_name").val();
			var contact_moblie=$("#contact_moblie").val();
			var e_mail=$("#e_mail").val();
			if(contact_name.replace(/(^s*)|(s*$)/g, "").length == 0){
				alert("联系人姓名不能为空！")
				return;
			}
			var contact_nameCheck = check_mark(contact_name,"联系人姓名");
			if(contact_nameCheck == false){
				return;
			}
		
			if( contact_moblie.replace(/(^s*)|(s*$)/g, "").length == 0){
				alert("手机号不能为空！")
				return;
			}
			var isContact_moblie = checkMobile(contact_moblie);
			if(isContact_moblie == false){
				return;
			}
			
			if(e_mail.replace(/(^s*)|(s*$)/g, "").length == 0){
				alert("邮箱号不能为空！")
				return;
			}
			var isE_mail = cE_mail(e_mail);
			if(isE_mail = false){
				return;
			}
			
			$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：正在生成订单，请稍候。。。'>提示：正在生成订单，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
			reader.voicePrompt.play("/iac/csair/mp3/scdd");
			timedCounttopay();
			countreload();
			$.ajax({
				url : 'submitLCOrder',
				type : 'POST',
				dataType : 'json',
				sync : true,
				data : {
					"contact_name":contact_name,
					"contact_moblie":contact_moblie,
					"e_mail":e_mail
					},
				success : function(data) {
					if(data.state == "FAIL"){
						alert(data.message);
						$.unblockUI();
						reader.stopAll();
						return;
					}else if(data.orderNo == null){
						a = confirm("订单生成超时，是否继续查询订单？")
						if(a == true){
							lcNext(contact_name,contact_moblie,e_mail)
							return;
						}else{
							window.location.href="queryOrder";
						}
						$.unblockUI();
						reader.stopAll();
					}else{
//						window.location.href="payOrder?orderNo="+data.orderNo+"&chuliTime1="+data.map1.chuliTime1+"&nanhangTime1="+data.map1.nanhangTime1+"&chuliTime2="+data.map.chuliTime2+"&nanhangTime2="+data.map.nanhangTime2;
						window.location.href="payLCOrder?orderNo="+data.orderNo;
					}
				
				}
			});
			
			
		});
		
		
		
	});
	
//	function Shade(){ 
//		var s = document.getElementById("shade"); 
//		s.style.display = "block"; 
//		} 
//		function Display(){ 
//		var d = document.getElementById("shade"); 
//		d.style.display = "none"; 
//		} 

	function ts(){
		reader.voicePrompt.play("/iac/csair/mp3/00004");
	}
	
	function  show(){
//		var baoxian = document.getElementById("baoxian");
//		var baoxiancheck = baoxian.attr("check");
		var baoxian = $("#baoxian");
		var baoxiancheck = baoxian.attr("check");

		if(baoxiancheck == "true" ){
			baoxian.checked = true;
		}else{
			baoxian.checked = false;
		}
	}
	
	
	//点击保险
	function baoxiancheck(){
		var timestamp=new Date().getTime();
		$.ajax({
		url : 'baoxiancheckloadLCFilightInfo?'+timestamp,
		type : 'POST',
		dataType : 'json',
		sync : false,
		success : function(data) {
			$("#baoxian").attr("check",data.baoxianCheck)
			$("#costMoney").html(data.baoXianFei);
			show();
			$("#baoxian").focus();
		}
	});
}
	
	function lcNext(contact_name,contact_moblie,e_mail){
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：正在生成订单，请稍候。。。'>提示：正在生成订单，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/scdd");
		timedCounttopay();
		countreload();
		$.ajax({
			url : 'submitLCOrder',
			type : 'POST',
			dataType : 'json',
			sync : true,
			data : {
				"contact_name":contact_name,
				"contact_moblie":contact_moblie,
				"e_mail":e_mail
				},
			success : function(data) {
				if(data.orderNo == null){
					a = confirm("订单生成超时，是否继续查询订单？")
					if(a == true){
						lcNext(contact_name,contact_moblie,e_mail)
						return;
					}else{
						window.location.href="queryOrder";
					}
					$.unblockUI();
					reader.stopAll();
				}else{
//					window.location.href="payLCOrder?orderNo="+data.orderNo+"&chuliTime1="+data.map1.chuliTime1+"&nanhangTime1="+data.map1.nanhangTime1+"&chuliTime2="+data.map.chuliTime2+"&nanhangTime2="+data.map.nanhangTime2;
					window.location.href="payLCOrder?orderNo="+data.orderNo;
				}
			}
		});
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

//旅客信息证件类型变更方法
	function cardTypeChange(){
		var cardTypeValue = $("#cardType").val();
		$.ajax({
			url : 'cardTypeChange',
			type : 'POST',
			dataType : 'json',
			sync : true,
			data : {
				"cardTypeValue":cardTypeValue
				},
			success : function(data) {
				$("#cardNo").attr("value",data.menber);
				$("#cardNo").attr("title","证件号："+data.menber+",只读");
				var cardNo = $("#cardNo").val();
				if($.trim(cardNo) == ""){
					alert("没有有效证件号，请重新选择！");
				}
				checkVcodeCheck ();
			}
		});
	}
	
	//可选旅客变更
	function kxPassengerChange(){
		var enname = $("#kxPassengerName").val();
		var cardTypeValue = $("#cardType").val();
		var cardType;
		if(cardTypeValue == "idcard"){
			cardType = "ni";
		}
		if(cardTypeValue == "passport"){
			cardType = "pp";
		}
		if(cardTypeValue == "otherType"){
			cardType = "other";
		}
//		alert(enname);
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		$.ajax({
			url : 'kxPassengerChange',
			type : 'POST',
			dataType : 'json',
			sync : true,
			data : {
				"enname":enname,
				"cardTypeValue":cardType
				},
			success : function(data) {
				if(data.notice == "false"){
					alert(data.msg);
					$.unblockUI();
					reader.stopAll();
					return;
				}
				$("#passengerName").attr("value",data.psgName);
				$("#passengerName").attr("title","旅客姓名："+data.psgName+",只读");
				if(data.menber == undefined || data.menber == "undefined"){
					data.menber = "";
				}
				$("#cardNo").attr("value",data.menber);
				$("#cardNo").attr("title","证件号："+data.menber+",只读");
				$("#check_box_con").attr("style",data.showCheckVcodeDivStyle);
				$("#assigneeCheckPhoneNum").html(data.mileageCheckMobile);
				if($.trim(data.mileageCheckEmail) == "" ){
					$("#emailYzm").attr("style","display:none;");
				}else{
					$("#emailYzm").attr("style","");
					$("#assigneeCheckEmail").html(data.mileageCheckEmail);
				}
				var cardNo = $("#cardNo").val();
				if($.trim(cardNo) == ""){
					alert("没有有效证件号，请重新选择！");
				}
				$("#vcode_mobile").prop("checked",true);
				
				checkVcodeCheck ();
				$.unblockUI();
				reader.stopAll();
			}
		});
	}
	
	//选择受让人接收验证码方式
	function checkVcodeCheck (){
		$(".checkVcode").on("click",function(){
			$(".checkVcode").each(function(){
				$(this).prop("checked","");
			})
			$(this).prop("checked",true);
		})
	}
	
	
	//点击发送验证码
	function lcAssigneeCtrlYzm(){
		var checkVcodeId = "";
		$(".checkVcode").each(function(){
			var checkVcodeCheck = $(this).prop("checked");
			if(checkVcodeCheck == true){
				checkVcodeId = $(this).attr("id");
			}
		})
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在发送验证码，请稍候。。。'>提示：正在发送验证码，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/yzm");
		timedCount();
		countreload();
		$.ajax({
			url : 'lcAssigneeCtrlYzm',
			type : 'POST',
			dataType : 'json',
			sync : true,
			data : {
				"checkVcodeId":checkVcodeId
				},
			success : function(data) {
				alert(data.msg);
				$.unblockUI();
				reader.stopAll();
				checkVcodeCheck ();
			}
		});
	}
	
	//里程受让人校验
	function lcAssigneeCtrlCheck(){
		var code =  $.trim($("#code").val());
		var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
		for (var i = 0; i < code.length; i++) {
			if(pattern.test(code.substr(i,1))){
				alert("验证码中请不要输入特殊符号")
			    return ;
			}
		}
		$.ajax({
			url : 'lcAssigneeCtrlCheck',
			type : 'POST',
			dataType : 'json',
			sync : true,
			data : {
				"code":code
				},
			success : function(data) {
				alert(data.msg);
				$.unblockUI();
				reader.stopAll();
				checkVcodeCheck ();
			}
		});
		
		
		
	}