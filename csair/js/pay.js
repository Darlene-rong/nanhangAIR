$(function(){
	$(".payment-title h2").attr("style","font-size:14px");
	
	$("table#flight-info").attr("rules","rows");
	
	$("table#flight-info td:eq(0)").css("width","100px");
	$("table#flight-info td:eq(1)").css("width","110px");
		
	$(".xing:first").attr("style","color:#39F")
	
	var price=$(".order-price-total").html();
	
	$(".order-price-total").removeClass("order-price-total");
	
	$(".order-summary-info tbody tr:eq(6) td").html('<table class="info-box" id="total_price"><tbody><tr><td class="info-title">'+price+'</td></tr></tbody></table>');
	
	var img1='<img src="csair/img/orderinformation.png"></img>';
	
	$(".payment-title h2").before(img1);
	
	var img2='<img src="csair/img/order.png"></img>';
	
	$("#infotd1 div").before(img2);
	
	var flight_date=$(".flight-date").html();
	
	var flight_date=flight_date.replace(/&nbsp;/ig,'');
	var flight_date=flight_date.replace(/&amp;/ig,'');
	var flight_date=flight_date.replace(/nbsp/ig,'');
	
	var flight_date=$(".flight-date").html(flight_date+'<img src="csair/img/rili.png"></img>');
	
	 $(".deArLeft:eq(2)").after('<img src="csair/img/time.png"></img>');
	 
	 $(".flight-time div:eq(0)").css("margin","0px");

	})

function yzm() {
	var accountNo = $("#accountNo").val();
	var buyerName = $("#buyerName").val();
	var idCard = $("#idCard").val();
	var mobile = $("#mobile").val();
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
			alert(data.message);
		},
		error : function() {
		}
	});
}


function panduan(){
	var accountNo=$.trim($("#accountNo").val());
	var buyerName=$.trim($("#buyerName").val());
	var idCard=$.trim($("#idCard").val());
	var mobile=$.trim($("#mobile").val());
	var codeName=$.trim($("#codeName").val());
	
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
	$.ajax({
		url : 'queryAndPayOrder',
		type : 'POST',
		sync : true,
		data : {
			"accountNo" : accountNo,
			"buyerName" : buyerName,
			"idCard" : idCard,
			"mobile" : mobile,
			"codeName":codeName
		},
		success : function(data) {
			if(data.checkLogin==true){
				window.location.href="";
			}else{
				alert(data.message);
			}
		},
		error : function() {
		}
	});
}