	//$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);


	$(function(){
		var timestamp=new Date().getTime();
		//进入页面加载旅客信息
		reader.ready=function(){
			reader.voicePrompt.play("/iac/csair/mp3/00004");
		};
//		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在加载预定的航班信息，请稍后。。。'>提示：正在加载预定的航班信息，请稍后。。。(<span id='countdown'>90</span>)</a></h1>" });
//		timedCount();
		Shade();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url : 'loadFilightInfo1?'+timestamp,
			type : 'GET',
			dataType : 'html',
			sync : false,
			success : function(data) {
				countreload();
				$("#flightInfo2").attr("style","display : none;");
				$("#flightInfo").html(data);
				show();
				
				//获取页面信息判断是否加载成功
				var total = $("#total").text();
				if($.trim(total) == '' || $.trim(total) == null){
					alert("网络速度慢，请重新查询！")
					window.location.href="quit";
					return;
				}
				
				//将加载过来的时间信息固定在页面上，不随加载变化消失
				var loadtime = $("#loadtime").text();
				if($.trim(loadtime) == '' || $.trim(loadtime) == null ){
					var loadtime1 = $("#loadtime1").val();
					$("#loadtime").html(loadtime1);
				}
				
				$.unblockUI();
				reader.stopAll();
				Display();
				navBlock.init();
				//配合工具条刷新添加属性
				if(self!=top){
					top.readPageAgain.readAgain();
				}
				$(".ap_flight_info_flight").find("a:first").focus();
				
				if($("#userinfo").html() == '用户：未登录'){
					$.ajax({
						url : 'prePhone',
						type : 'POST',
						sync : true,
						success : function(data) {}
						})
				}
				
			}
		});
		
		
		
		
		
		//登录点击下一步
		$("#next").click(function() {
			var tyChecked = $("#ty").prop("checked");
			if(tyChecked == false){
				alert("请阅读并理解各项须知！");
				$("#ty").focus();
				return;
			}
			if(checkPData() == false){
				return false;
			}
			var ar = new Array();
			var p = {};
			var a = 1;
			$("[name=pType]").each(function(){
				var pType=$(this).val();
				var parent=$(this).parents(".add_pas_div");
				if(pType=='0'){//成人
					p.psgName=$(parent).find("[name=psgName]").val();
					p.pIdType=$(parent).find("[name=pIdType]").val();
					p.pIdCard=$(parent).find("[name=pIdCard]").val();
					if(p.psgName == ""){
						alert("请填写成人姓名")
						a=2;
						return;
					}
					if(p.pIdCard == ""){
						alert("请填写证件号")
						a=2;
						return;
					}
				}
				if(pType=='1'){//儿童
					p.psgName=$(parent).find("[name=psgName]").val();
					p.pIdCard=$(parent).find("[name=pIdCard]").val();
					p.pBirthday=$(parent).find("[name=pBirthday_year]").val() +"-"+ $(parent).find("[name=pBirthday_month]").val() +"-"+ $(parent).find("[name=pBirthday_day]").val();
					if(p.psgName == ""){
						alert("请填写儿童姓名")
						a=2;
						return;
					}
					if(p.pIdCard == ""){
						alert("请填写儿童证件号")
						a=2;
						return;
					}
					if(p.pBirthday == ""){
						alert("请填写儿童生日")
						a=2;
						return;
					}
				}
				if(pType=='2'){//婴儿
					p.psgName=$(parent).find("[name=psgName]").val();
					p.pBirthday=$(parent).find("[name=pBirthday_year]").val() +"-"+ $(parent).find("[name=pBirthday_month]").val() +"-"+ $(parent).find("[name=pBirthday_day]").val();
					p.carryByName=$(parent).find("[name=carryByName]").val();
					if(p.psgName == ""){
						alert("请填写婴儿姓名")
						a=2;
						return;
					}
					if(p.pBirthday == ""){
						alert("请填写婴儿生日")
						a=2;
						return;
					}
					if(p.carryByName == ""){
						alert("请填写携带人")
						a=2;
						return;
					}
				}
				var b=pType+"#"+p.psgName+"#"+p.pIdType+"#"+p.pIdCard+"#"+p.pBirthday+"#"+p.carryByName;
				ar.push(b);
				
			});
			if(a == 2){
				return;
			}
			var contact_name =$("#contact_name").val();
			var contact_moblie=$("#contact_moblie").val();
			var e_mail=$("#e_mail").val();
			if(contact_name.replace(/(^s*)|(s*$)/g, "").length == 0){
				alert("联系人姓名不能为空！")
				return;
			}
			if( contact_moblie.replace(/(^s*)|(s*$)/g, "").length == 0){
				alert("手机号不能为空！")
				return;
			}
			if(e_mail.replace(/(^s*)|(s*$)/g, "").length == 0){
				alert("邮箱号不能为空！")
				return;
			}
			var status="login"
			var	hbh=$("#hbh").html();
			var	arrtime=$("#arrtime").html();
			var total=$("#total").html();
	/*		if(!$("#ty").get(0).checked){
				alert("请勾选各项须知");
				return;
			}*/
			
			$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：正在生成订单，请稍候。。。'>提示：正在生成订单，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
			reader.voicePrompt.play("/iac/csair/mp3/scdd");
			timedCounttopay();
			countreload();
			$.ajax({
				url : 'submitOrder',
				type : 'POST',
				dataType : 'json',
				sync : true,
				data : {
					
					"p":ar,
					"contact_name":contact_name,
					"contact_moblie":contact_moblie,
					"e_mail":e_mail,
					"status":status,
					"hbh":hbh,
					"arrtime":arrtime,
					"total":total
					},
				success : function(data) {
					if(data.orderNo == null){
						a = confirm("订单生成超时，是否继续查询订单？")
						if(a == true){
							next(ar,contact_name,contact_moblie,e_mail,status,hbh,arrtime,total)
							return;
						}else{
							window.location.href="queryOrder";
						}
						$.unblockUI();
						reader.stopAll();
					}else{
						window.location.href="payOrder?orderNo="+data.orderNo+"&chuliTime1="+data.map1.chuliTime1+"&nanhangTime1="+data.map1.nanhangTime1+"&chuliTime2="+data.map.chuliTime2+"&nanhangTime2="+data.map.nanhangTime2;
					}
				
				}
			});

		});
		
		
		//点击获取验证码
//		$("#yzm").click(function() {
//			yzm();
//		})
		
		//点击“下一步”先进行动态登陆，然后生成订单查询	
		$("#next1").click(function() {
			var tyChecked = $("#ty").prop("checked");
			if(tyChecked == false){
				alert("请阅读并理解各项须知！");
				$("#ty").focus();
				return;
			}
			if(checkPData() == false){
				return false;
			}
			var ar = new Array();
			var p = {};
			var a = 1;
			$("[name=pType]").each(function(){
				var pType=$(this).val();
				var parent=$(this).parents(".add_pas_div");
				if(pType=='0'){//成人
					p.psgName=$(parent).find("[name=psgName]").val();
					p.pIdType=$(parent).find("[name=pIdType]").val();
					p.pIdCard=$(parent).find("[name=pIdCard]").val();
					if(p.psgName == ""){
						alert("请填写成人姓名")
						a=2;
						return;
					}
					if(p.pIdCard == ""){
						alert("请填写证件号")
						a=2;
						return;
					}
				}
				if(pType=='1'){//儿童
					p.psgName=$(parent).find("[name=psgName]").val();
					p.pIdCard=$(parent).find("[name=pIdCard]").val();
					p.pBirthday=$(parent).find("[name=pBirthday_year]").val() +"-"+ $(parent).find("[name=pBirthday_month]").val() +"-"+ $(parent).find("[name=pBirthday_day]").val();
					if(p.psgName == ""){
						alert("请填写儿童姓名")
						a=2;
						return;
					}
					if(p.pIdCard == ""){
						alert("请填写儿童证件号")
						a=2;
						return;
					}
					if(p.pBirthday == ""){
						alert("请填写儿童生日")
						a=2;
						return;
					}
				}
				if(pType=='2'){//婴儿
					p.psgName=$(parent).find("[name=psgName]").val();
					p.pBirthday=$(parent).find("[name=pBirthday_year]").val() +"-"+ $(parent).find("[name=pBirthday_month]").val() +"-"+ $(parent).find("[name=pBirthday_day]").val();
					p.carryByName=$(parent).find("[name=carryByName]").val();
					if(p.psgName == ""){
						alert("请填写婴儿姓名")
						a=2;
						return;
					}
					if(p.pBirthday == ""){
						alert("请填写婴儿生日")
						a=2;
						return;
					}
					if(p.carryByName == ""){
						alert("请填写携带人")
						a=2;
						return;
					}
				}
				var b=pType+"#"+p.psgName+"#"+p.pIdType+"#"+p.pIdCard+"#"+p.pBirthday+"#"+p.carryByName;
				ar.push(b);
				
			});
			if(a == 2){
				return;
			}
			var contact_name =$("#contact_name").val();
			var contact_moblie=$("#contact_moblie").val();
			var e_mail=$("#e_mail").val();
			var vcodeReg=$("#code").val();
			if(contact_name.replace(/(^s*)|(s*$)/g, "").length == 0){
				alert("联系人姓名不能为空！")
				return;
			}
			if( contact_moblie.replace(/(^s*)|(s*$)/g, "").length == 0){
				alert("手机号不能为空！")
				return;
			}
			if(e_mail.replace(/(^s*)|(s*$)/g, "").length == 0){
				alert("邮箱号不能为空！")
				return;
			}
			var status="login"
			var	hbh=$("#hbh").html();
			var	arrtime=$("#arrtime").html();
			var total=$("#total").html();
	/*		if(!$("#ty").get(0).checked){
				alert("请勾选各项须知");
				return;
			}*/
			if(vcodeReg == ""){
				alert("请填写验证码!");
				return;
			}
			$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：正在生成订单，请稍候。。。'>提示：正在生成订单，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
			reader.voicePrompt.play("/iac/csair/mp3/scdd");
			timedCounttopay1();//这个倒计时中断可以清除登录状态
			countreload();
			$.ajax({
				url:'mobilequery',
				type:'POST',
				sync: true,
				data:{
					"username":contact_moblie,
					"vcodeReg":vcodeReg
//					"hbh":hbh,
//					"arrtime":arrtime,
//					"total":total
				},
				success:function(data){
					next(ar,contact_name,contact_moblie,e_mail,status,hbh,arrtime,total);
				}
			});
			

		});

		//===========================================================
		//点击获取验证码:
		//相当于先在旅客信息页面点击下一步产生订单
		//然后加载手机查询页面再点击获得验证码
//		$("#yzm1111").click(function() {
//			if(checkPData() == false){
//				return false;
//			}
//			var contact_name =$("#contact_name").val();
//			var contact_moblie= $("#contact_moblie").val();
//			var e_mail=$("#e_mail").val();
//			
//			if(contact_name.replace(/(^s*)|(s*$)/g, "").length == 0){
//				alert("联系人姓名不能为空！")
//				return;
//			}
//			if( contact_moblie.replace(/(^s*)|(s*$)/g, "").length == 0){
//				alert("手机号不能为空！")
//				return;
//			}
//			if(e_mail.replace(/(^s*)|(s*$)/g, "").length == 0){
//				alert("邮箱号不能为空！")
//				return;
//			}
//			
//			var ar = new Array();
//			var p = {};
//			var a = 1;
//			$("[name=pType]").each(function(){
//				var pType=$(this).val();
//				var parent=$(this).parents(".add_pas_div");
//				if(pType=='0'){//成人
//					p.psgName=$(parent).find("[name=psgName]").val();
//					p.pIdType=$(parent).find("[name=pIdType]").val();
//					p.pIdCard=$(parent).find("[name=pIdCard]").val();
//					if(p.psgName == ""){
//						alert("请填写成人姓名")
//						a = 2;
//						return;
//					}
//					if(p.pIdCard == ""){
//						alert("请填写证件号")
//						a = 2;
//						return;
//					}
//				}
//				if(pType=='1'){//儿童
//					p.psgName=$(parent).find("[name=psgName]").val();
//					p.pIdCard=$(parent).find("[name=pIdCard]").val();
//					//p.pBirthday=$(parent).find("[name=pBirthday]").val(); pBirthday_year
//					p.pBirthday=$(parent).find("[name=pBirthday_year]").val()+"-"+$(parent).find("[name=pBirthday_month]").val()+"-"+$(parent).find("[name=pBirthday_day]").val();
//					if(p.psgName == ""){
//						alert("请填写儿童姓名")
//						a = 2;
//						return;
//					}
//					if(p.pIdCard == ""){
//						alert("请填写儿童证件号")
//						a = 2;
//						return;
//					}
//					if(p.pBirthday == ""){
//						alert("请填写儿童生日")
//						a = 2;
//						return;
//					}
//				}
//				if(pType=='2'){//婴儿
//					p.psgName=$(parent).find("[name=psgName]").val();
//					//p.pBirthday=$(parent).find("[name=pBirthday]").val();
//					p.pBirthday=$(parent).find("[name=pBirthday_year]").val()+"-"+$(parent).find("[name=pBirthday_month]").val()+"-"+$(parent).find("[name=pBirthday_day]").val();
//					p.carryByName=$(parent).find("[name=carryByName]").val();
//					if(p.psgName == ""){
//						alert("请填写婴儿姓名")
//						a = 2;
//						return;
//					}
//					if(p.pBirthday == ""){
//						alert("请填写婴儿生日")
//						a = 2;
//						return;
//					}
//					if(p.carryByName == ""){
//						alert("请填写携带人")
//						a = 2;
//						return;
//					}
//				}
//				
//				var b=pType+"#"+p.psgName+"#"+p.pIdType+"#"+p.pIdCard+"#"+p.pBirthday+"#"+p.carryByName;
//				ar.push(b);
//				
//			});
//			
//			var status="login"
//			var	hbh=$("#hbh").html();
//			var	arrtime=$("#arrtime").html();
//			var total=$("#total").html();
//			if(a == 2){
//				return;
//			}
//			$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在发送验证码，请稍候。。。'>提示：正在发送验证码，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
//			reader.voicePrompt.play("/iac/csair/mp3/yzm");
//			timedCount();
//			countreload();
//			$.ajax({
//				url : 'submitOrder',
//				type : 'POST',
//				dataType : 'json',
//				sync : true,
//				data : {
//					"p":ar,
//					"contact_name":contact_name,
//					"contact_moblie":contact_moblie,
//					"e_mail":e_mail,
//					"status":status,
//					"hbh":hbh,
//					"arrtime":arrtime,
//					"total":total
//					},
//				success : function(data) {
//					if(data.state=="SUCCESS"){
//						yzm();
//					}else{
//						//alert("订单生成失败");
//						alert(data.message);
//						$.unblockUI();
//						reader.stopAll();
//					}
////					$.unblockUI();
////					reader.stopAll();
//				}
//			});
//		});
//		
//		//点击下一步相当于手机查询的登录
//		$("#next1111111").click(function() {
//			//验证乘机人信息页
//			if(checkPData() == false){
//				return false;
//			}
//			//验证码6位true
//			if(checkCode() == false){
//				return false;
//			}
//			var vcodeReg=$("#code").val();
//			var contact_name =$("#contact_name").val();
//			var contact_moblie =$("#contact_moblie").val();
//			var e_mail=$("#e_mail").val();
//			if(contact_name.replace(/(^s*)|(s*$)/g, "").length == 0){
//				alert("联系人姓名不能为空！")
//				return;
//			}
//			if( contact_moblie.replace(/(^s*)|(s*$)/g, "").length == 0){
//				alert("手机号不能为空！")
//				return;
//			}
//			if(e_mail.replace(/(^s*)|(s*$)/g, "").length == 0){
//				alert("邮箱号不能为空！")
//				return;
//			}
//			var	hbh=$("#hbh").html();
//			var	arrtime=$("#arrtime").html();
//			var total=$("#total").html();
//			
//			if(vcodeReg == ""){
//				alert("请填写验证码!");
//				return;
//			}
//		/*	if(!$("#ty").get(0).checked){
//				alert("请勾选各项须知");
//				return;
//			}*/
//			$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：正在生成订单，请稍候。。。'>提示：正在生成订单，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
//			reader.voicePrompt.play("/iac/csair/mp3/scdd");
//			timedCounttopay();
//			$.ajax({
//				url:'mobilequery',
//				type:'POST',
//				sync: true,
//				data:{
//					"username":contact_moblie,
//					"vcodeReg":vcodeReg,
//					"hbh":hbh,
//					"arrtime":arrtime,
//					"total":total
//				},
//				success:function(data){
//					if(data.state=="SUCCESS"){
//						countreload();
//						window.location.href="payOrder?orderNo="+data.orderNo+"&chuliTime1="+data.map1.chuliTime1+"&nanhangTime1="+data.map1.nanhangTime1+"&chuliTime2="+data.map.chuliTime2+"&nanhangTime2="+data.map.nanhangTime2;
//					}else{
//						alert("订单生成失败,请刷新页面重试")
//						$.unblockUI();
//						reader.stopAll();
//					}
//				}
//			});
//		})
		
	});
	function next(ar,contact_name,contact_moblie,e_mail,status,hbh,arrtime,total){
		var a = null;
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：正在生成订单，请稍候。。。'>提示：正在生成订单，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/scdd");
		timedCounttopay1();//这个倒计时中断可以清除登录状态
		$.ajax({
			
			url : 'submitOrder',
			type : 'POST',
			dataType : 'json',
			sync : true,
			data : {
				
				"p":ar,
				"contact_name":contact_name,
				"contact_moblie":contact_moblie,
				"e_mail":e_mail,
				"status":status,
				"hbh":hbh,
				"arrtime":arrtime,
				"total":total
				},
			success : function(data) {
				if(data.orderNo == null){
					a = confirm("订单生成超时，是否继续查询订单？")
					if(a == true){
						next(ar,contact_name,contact_moblie,e_mail,status,hbh,arrtime,total)
						return;
					}else{
						window.location.href="queryOrder";
					}
					$.unblockUI();
					reader.stopAll();
				}else{
					window.location.href="payOrder?orderNo="+data.orderNo+"&chuliTime1="+data.map1.chuliTime1+"&nanhangTime1="+data.map1.nanhangTime1+"&chuliTime2="+data.map.chuliTime2+"&nanhangTime2="+data.map.nanhangTime2;
				}
			
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
	
	function ts(){
		reader.voicePrompt.play("/iac/csair/mp3/00004");
	}
	
	function  show(){
		$("#psg00000000 .pType").remove();
		$(".add_pas_div:eq(0) .close_ap").css("display","none");
		$("[name=pType]").each(function(){
			var pType=$(this).val();
			$(this).data("selectedValue",pType);
			var parent=$(this).parents(".add_pas_div");
			var parentId=parent.attr("id");
			$(this).data("psgid",parentId);
			var delButoon=$(parent).find(".close_ap_btn");
			$(delButoon).data("psgid",parentId);
			var pIdTypeSelect = parent.find("[name=pIdType]");
			var IDtype = $(pIdTypeSelect).val();
			$(pIdTypeSelect).data("psgid1",parentId);
			if(pType == 0){
				$(parent).find(".birthdayLi").attr("style","display:none;")
				$(parent).find(".takeLi").attr("style","display:none;")
				$(parent).find(".pIdLi").attr("style","display:block;")
				$(parent).find(".flight_insurance2").attr("style","display:block;")
			}
			if(pType == 1){
				$(parent).find(".birthdayLi").attr("style","display:block;")
				$(parent).find(".takeLi").attr("style","display:none;")
				$(parent).find(".pIdLi").attr("style","display:block;")
				$(parent).find(".flight_insurance2").attr("style","display:block;")
			}
			if(pType == 2){
				$(parent).find(".birthdayLi").attr("style","display:block;")
				$(parent).find(".takeLi").attr("style","display:block;")
				$(parent).find(".pIdLi").attr("style","display:none;")
				$(parent).find(".flight_insurance2").attr("style","display:none;")
			}
			var zhxId = parent.find("input[name='hkzhx']").attr("id");
			var zhcheck = parent.find("input[name='hkzhx']").attr("check");
			var zhx = document.getElementById(zhxId);
			if(zhcheck == "true" ){
				zhx.checked = true;
			}else{
				zhx.checked = false;
			}
			
			if(parent.find("input[name='jptpx']").size()!= 0){
				var tpxId = parent.find("input[name='jptpx']").attr("id");
				var tpcheck = parent.find("input[name='jptpx']").attr("check");
				var tpx = document.getElementById(tpxId);
				if(tpcheck == "true" ){
					tpx.checked = true;
				}else{
					tpx.checked = false;
				}
			}
			//出生日期cx 20170911
			brithday(parentId);
		});
		function brithday(divId){
			 var date=new Date;
			 var year=date.getFullYear(); 
			 var month=date.getMonth()+1;
			 $("#"+divId+ " .birthday_year").empty();
			for(var y=(year - 13);y<(year+1);y++){
				$("#"+divId+ " .birthday_year").append("<option value='"+y+"'>"+y+"</option>");
			}
			$("#"+divId+ " .birthday_month").empty();
			for(var m=1;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#"+divId+ " .birthday_month").append("<option value='"+m+"'>"+m+"</option>");
			}
			$("#"+divId+ " .birthday_day").empty();
			for(var d=1;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$("#"+divId+ " .birthday_day").append("<option value='"+d+"'>"+d+"</option>");
			}
			$("#"+divId+ " .birthday_year").on("change",function(){
				$("#"+divId+ " .birthday_month").empty();
				for(var m=1;m<13;m++){
					m =(m<10 ? "0"+m:m); 
					$("#"+divId+ " .birthday_month").append("<option value='"+m+"'>"+m+"</option>");
				}
				$("#"+divId+ " .birthday_day").empty();
				for(var d=1;d<32;d++){
					d =(d<10 ? "0"+d:d); 
					$("#"+divId+ " .birthday_day").append("<option value='"+d+"'>"+d+"</option>");
				}	
			});
			$("#"+divId+ " .birthday_month").on("change",function(){
				var yy=$("#"+divId+ " .birthday_year").val();
				var mm=$(this).val();
				var  day = new Date(yy,mm,0);
		        var daycount = day.getDate();
				$("#"+divId+ " .birthday_day").empty();
				for(var d=1;d<(daycount + 1);d++){
					d =(d<10 ? "0"+d:d); 
					$("#"+divId+ " .birthday_day").append("<option value='"+d+"'>"+d+"</option>");
				}			
			});
		}
	}
	
	//填加乘客按钮
	function add() {
		var ar = new Array();
		var p = {};
		var flag = true;
		$("[name=pType]").each(function(){
			var pType=$(this).val();
			var parent=$(this).parents(".add_pas_div");
			if(pType=='0'){//成人
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdType=$(parent).find("[name=pIdType]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}else{
					 if(check_mark(p.psgName,"姓名")==false ){
						 flag = false;
						 return false;
					 }
				}
				if(p.pIdType == ""){
					p.pIdType = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}else{
					if(check_mark(p.pIdCard,"证件号")==false){
						flag = false;
						return false;
					}
				}
				
			}
			if(pType=='1'){//儿童
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}else{
					 if(check_mark(p.psgName,"姓名")==false ){
						 flag = false;
						 return false;
					 }
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}else{
					if(check_mark(p.pIdCard,"证件号")==false){
						flag = false;
						return false;
					}
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
				
			}
			if(pType=='2'){//婴儿
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				p.carryByName=$(parent).find("[name=carryByName]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}else{
					 if(check_mark(p.psgName,"姓名")==false ){
						 flag = false;
						 return false;
					 }
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
				if(p.carryByName == ""){
					p.carryByName = undefined;
				}else{
					 if(check_mark(p.carryByName,"婴儿携带者")==false ){
						 flag = false;
						 return false;
					 }
				}
				
			}
			var b=pType+"#"+p.psgName+"#"+p.pIdType+"#"+p.pIdCard+"#"+p.pBirthday+"#"+p.carryByName;
			ar.push(b);
		});
		if(flag){
			$.ajaxSetup({ cache:false });
			countreload();
			$.ajax({
				url : 'addpassenger',
				type : 'POST',
				data:{"p":ar},
				dataType : 'json',
				sync : true,
				success : function(data) {
					if(data.state=="SUCCESS"){
						$(".add_pas_con").append($(".add_pas_div:first").clone());
						var timestamp=new Date().getTime();
						$.ajax({
							url : 'addpassengerloadFilightInfo1?'+timestamp,
							type : 'GET',
							dataType : 'html',
							sync : false,
							success : function(data) {
								$("#flightInfo").html(data);
								show();
								if(self!=top){
									top.readPageAgain.readAgain();
								}
							}
						});
					}
					
				}
			});
		}
	};
	
	//点击综合险
	function ir0check(e){
		var ar = new Array();
		var p = {};
		
		$("[name=pType]").each(function(){
			var pType=$(this).val();
			var parent=$(this).parents(".add_pas_div");
			if(pType=='0'){//成人
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdType=$(parent).find("[name=pIdType]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdType == ""){
					p.pIdType = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
			}
			if(pType=='1'){//儿童
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
			}
			if(pType=='2'){//婴儿
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				p.carryByName=$(parent).find("[name=carryByName]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
				if(p.carryByName == ""){
					p.carryByName = undefined;
				}
			}
			var b=pType+"#"+p.psgName+"#"+p.pIdType+"#"+p.pIdCard+"#"+p.pBirthday+"#"+p.carryByName;
			ar.push(b);
		});
		$.ajaxSetup({ cache:false });
		$.ajax({
			url : 'addpassenger',
			type : 'POST',
			data:{"p":ar},
			dataType : 'json',
			sync : true,
			success : function(data) {
				if(data.state=="SUCCESS"){
					var checkBoxId = $(e).attr("id");
					var timestamp=new Date().getTime();
					countreload();
					$.ajax({
						url : 'ir0checkBoxloadFilightInfo1?'+timestamp,
						type : 'GET',
						data:{"checkBoxId":checkBoxId},
						dataType : 'html',
						sync : false,
						success : function(data) {
							$("#flightInfo").html(data);
							show();
							$("#"+checkBoxId).focus();
						}
					});
				}
				
			}
		});
		
	}
	
	//点击退票险
	function ir1check(e){
		var ar = new Array();
		var p = {};
		
		$("[name=pType]").each(function(){
			var pType=$(this).val();
			var parent=$(this).parents(".add_pas_div");
			if(pType=='0'){//成人
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdType=$(parent).find("[name=pIdType]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdType == ""){
					p.pIdType = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
			}
			if(pType=='1'){//儿童
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
			}
			if(pType=='2'){//婴儿
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				p.carryByName=$(parent).find("[name=carryByName]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
				if(p.carryByName == ""){
					p.carryByName = undefined;
				}
			}
			var b=pType+"#"+p.psgName+"#"+p.pIdType+"#"+p.pIdCard+"#"+p.pBirthday+"#"+p.carryByName;
			ar.push(b);
			
		});
		$.ajaxSetup({ cache:false });
		$.ajax({
			url : 'addpassenger',
			type : 'POST',
			data:{"p":ar},
			dataType : 'json',
			sync : true,
			success : function(data) {
				if(data.state=="SUCCESS"){
					var checkBoxId = $(e).attr("id");
					var timestamp=new Date().getTime();
					countreload();
					$.ajax({
						url : 'ir1checkBoxloadFilightInfo1?'+timestamp,
						type : 'GET',
						data:{"checkBoxId":checkBoxId},
						dataType : 'html',
						sync : false,
						success : function(data) {
							$("#flightInfo").html(data);
							show();
							$("#"+checkBoxId).focus();
						}
					});
				}
				
			}
		});
		
		
	}

	//点击删除
	function del(e){
		var ar = new Array();
		var p = {};
		
		$("[name=pType]").each(function(){
			var pType=$(this).val();
			var parent=$(this).parents(".add_pas_div");
			if(pType=='0'){//成人
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdType=$(parent).find("[name=pIdType]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdType == ""){
					p.pIdType = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
			}
			if(pType=='1'){//儿童
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
			}
			if(pType=='2'){//婴儿
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				p.carryByName=$(parent).find("[name=carryByName]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
				if(p.carryByName == ""){
					p.carryByName = undefined;
				}
			}
			var b=pType+"#"+p.psgName+"#"+p.pIdType+"#"+p.pIdCard+"#"+p.pBirthday+"#"+p.carryByName;
			ar.push(b);
			
		});
		$.ajaxSetup({ cache:false });
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在删除乘客信息，请稍后。。。'>提示：提示：正在删除乘客信息，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/scck");
		timedCount();
		$.ajax({
			url : 'addpassenger',
			type : 'POST',
			data:{"p":ar},
			dataType : 'json',
			sync : true,
			success : function(data) {
				if(data.state=="SUCCESS"){
					var divId = $(e).data("psgid");
					var timestamp=new Date().getTime();
					countreload();
					$.ajax({
						url : 'delloadFilightInfo1?'+timestamp,
						type : 'GET',
						data:{
							"divId":divId
						},
						dataType : 'html',
						sync : false,
						success : function(data) {
							$("#flightInfo").html(data);
							show();
							$.unblockUI();
							reader.stopAll();
							navBlock.init();
							if(self!=top){
								top.readPageAgain.readAgain();
							}
						}
					});
				}
				
			}
		});
		
		
		
	}
	
	
	
	
	
	//变更人物类型
	function changePtype(e){
		var ar = new Array();
		var p = {};
		
		$("[name=pType]").each(function(){
			var pType=$(this).val();
			var parent=$(this).parents(".add_pas_div");
			if(pType=='0'){//成人
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdType=$(parent).find("[name=pIdType]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdType == ""){
					p.pIdType = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
			}
			if(pType=='1'){//儿童
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
			}
			if(pType=='2'){//婴儿
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				p.carryByName=$(parent).find("[name=carryByName]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
				if(p.carryByName == ""){
					p.carryByName = undefined;
				}
			}
			var b=pType+"#"+p.psgName+"#"+p.pIdType+"#"+p.pIdCard+"#"+p.pBirthday+"#"+p.carryByName;
			ar.push(b);
			
		});
		$.ajaxSetup({ cache:false });
		$.ajax({
			url : 'addpassenger',
			type : 'POST',
			data:{"p":ar},
			dataType : 'json',
			sync : true,
			success : function(data) {
				if(data.state=="SUCCESS"){
					var selectedValue = $(e).data("selectedValue");
					var divId = $(e).data("psgid");
					var optionValue = e.value;
					if(optionValue == 0){
						$("#"+divId).find(".birthdayLi").attr("style","display:none;")
						$("#"+divId).find(".takeLi").attr("style","display:none;")
						$("#"+divId).find(".pIdLi").attr("style","display:block;")
						$("#"+divId).find(".flight_insurance2").attr("style","display:block;")
					}
					if(optionValue == 1){
						$("#"+divId).find(".birthdayLi").attr("style","display:block;")
						$("#"+divId).find(".takeLi").attr("style","display:none;")
						$("#"+divId).find(".pIdLi").attr("style","display:block;")
						$("#"+divId).find(".flight_insurance2").attr("style","display:block;")
					}
					if(optionValue == 2){
						$("#"+divId).find(".birthdayLi").attr("style","display:block;")
						$("#"+divId).find(".takeLi").attr("style","display:block;")
						$("#"+divId).find(".pIdLi").attr("style","display:none;")
						$("#"+divId).find(".flight_insurance2").attr("style","display:none;")
					}
					countreload();
					$.ajax({
						url : 'changePtype',
						type : 'POST',
						data:{
							"divId":divId,
							"optionValue":optionValue
						},
						dataType : 'json',
						sync : true,
						success : function(data) {
							if(data.state == "FAIL"){
								alert(data.message);
								$(e).val(selectedValue);
								if(selectedValue == 0){
									$("#"+divId).find(".birthdayLi").attr("style","display:none;")
									$("#"+divId).find(".takeLi").attr("style","display:none;")
									$("#"+divId).find(".pIdLi").attr("style","display:block;")
									$("#"+divId).find(".flight_insurance2").attr("style","display:block;")
								}
								if(selectedValue == 1){
									$("#"+divId).find(".birthdayLi").attr("style","display:block;")
									$("#"+divId).find(".takeLi").attr("style","display:none;")
									$("#"+divId).find(".pIdLi").attr("style","display:block;")
									$("#"+divId).find(".flight_insurance2").attr("style","display:block;")
								}
								if(selectedValue == 2){
									$("#"+divId).find(".birthdayLi").attr("style","display:block;")
									$("#"+divId).find(".takeLi").attr("style","display:block;")
									$("#"+divId).find(".pIdLi").attr("style","display:none;")
									$("#"+divId).find(".flight_insurance2").attr("style","display:none;")
								}
							}
							if(data.state == "SUCCESS"){
								var timestamp=new Date().getTime();
								$.ajax({
									url : 'changePtypeloadFilightInfo1?'+timestamp,
									type : 'GET',
									data:{},
									dataType : 'html',
									sync : false,
									success : function(data) {
										$("#flightInfo").html(data);
										show()
									}
								});
							}
						}
					});
				}
				
			}
		});
	}
	
	//变更证件类型
	function changeIDtype(e){
		var ar = new Array();
		var p = {};
		
		$("[name=pType]").each(function(){
			var pType=$(this).val();
			var parent=$(this).parents(".add_pas_div");
			if(pType=='0'){//成人
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdType=$(parent).find("[name=pIdType]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdType == ""){
					p.pIdType = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
			}
			if(pType=='1'){//儿童
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
			}
			if(pType=='2'){//婴儿
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				p.carryByName=$(parent).find("[name=carryByName]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
				if(p.carryByName == ""){
					p.carryByName = undefined;
				}
			}
			var b=pType+"#"+p.psgName+"#"+p.pIdType+"#"+p.pIdCard+"#"+p.pBirthday+"#"+p.carryByName;
			ar.push(b);
			
		});
		$.ajaxSetup({ cache:false });
		$.ajax({
			url : 'addpassenger',
			type : 'POST',
			data:{"p":ar},
			dataType : 'json',
			sync : true,
			success : function(data) {
				if(data.state=="SUCCESS"){
					var divId = $(e).data("psgid1");
					var optionValue = e.value;
					countreload();
					$.ajax({
						url : 'changeIDtype',
						type : 'POST',
						data:{
							"divId":divId,
							"optionValue":optionValue
						},
						dataType : 'json',
						sync : true,
						success : function(data) {
							if(data.state == "FAIL"){
								alert(data.message);
							}
							if(data.state == "SUCCESS"){
								var timestamp=new Date().getTime();
								$.ajax({
									url : 'changePtypeloadFilightInfo1?'+timestamp,
									type : 'GET',
									data:{},
									dataType : 'html',
									sync : false,
									success : function(data) {
										$("#flightInfo").html(data);
										show();
									}
								});
							}
						}
					});
				}
				
			}
		});
	}


    //点击常用旅客
	function clickCommonPassengerWF(e){
		var ar = new Array();
		var p = {};
		
		$("[name=pType]").each(function(){
			var pType=$(this).val();
			var parent=$(this).parents(".add_pas_div");
			if(pType=='0'){//成人
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdType=$(parent).find("[name=pIdType]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdType == ""){
					p.pIdType = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
			}
			if(pType=='1'){//儿童
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pIdCard=$(parent).find("[name=pIdCard]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pIdCard == ""){
					p.pIdCard = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
			}
			if(pType=='2'){//婴儿
				p.psgName=$(parent).find("[name=psgName]").val();
				p.pBirthday=$(parent).find("[name=pBirthday]").val();
				p.carryByName=$(parent).find("[name=carryByName]").val();
				if(p.psgName == ""){
					p.psgName = undefined;
				}
				if(p.pBirthday == ""){
					p.pBirthday = undefined;
				}
				if(p.carryByName == ""){
					p.carryByName = undefined;
				}
			}
			var b=pType+"#"+p.psgName+"#"+p.pIdType+"#"+p.pIdCard+"#"+p.pBirthday+"#"+p.carryByName;
			ar.push(b);
			
		});
		$.ajaxSetup({ cache:false });
		$.ajax({
			url : 'addpassenger',
			type : 'POST',
			data:{"p":ar},
			dataType : 'json',
			sync : true,
			success : function(data) {
				if(data.state=="SUCCESS"){
					var Id = $(e).attr("id");
					countreload();
					$.ajax({
						url : 'clickCommonPassenger',
						type : 'POST',
						data:{
							"id":Id
						},
						dataType : 'json',
						sync : true,
						success : function(data) {
							if(data.state == "FAIL"){
								alert(data.message);
							}
							if(data.state == "SUCCESS"){
								var timestamp=new Date().getTime();
								$.ajax({
									url : 'clickCommonPassengerWFloadFilightInfo?'+timestamp,
									type : 'GET',
									data:{},
									dataType : 'html',
									sync : false,
									success : function(data) {
										$("#flightInfo").html(data);
										show();
									}
								});
							}
						}
					});
				}
				
			}
		});
	}

	
	
	//未登录获取验证码
	function yzm() {
		var username =$("#contact_moblie").val();
		if(username.replace(/(^s*)|(s*$)/g, "").length == 0){
			alert("请填写手机号！");
			return;
		}
		
		
		$.ajax({
			url : "phoneYzm",
			type : "POST",
			sync : true,
			data : {
				"username" : username
			},
			success : function(data) {
				alert(data.message+",如果长时间未收到验证码可能是因为您的获取验证码过于频繁，请在2小时后再次获取");
				$.unblockUI();
				reader.stopAll();
				$("#yzm").focus();
			}

		});
	}
	
	var nologin=$(".container").find(".nologin");
	if(nologin.length>0){
		$.ajax({
			url:'prePhone',
			type:'POST',
			sync: true

		});
	}

	