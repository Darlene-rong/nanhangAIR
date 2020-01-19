$(document).ready(function() {
	$(".content_head a").remove();
	$(".page_div").remove();
	


	$("div.table_cell ul").find("li:last").find("a:first").click(function() {
		var orderNo = $(this).parent().parent().attr("orderno");
		window.location.href = "goPayPage?orderNo=" + orderNo;
	});
	$("a:first").focus();
})







//function yzm() {
//	var accountNo = $("#accountNo").val();
//	var buyerName = $("#buyerName").val();
//	var idCard = $("#idCard").val();
//	var mobile = $("#mobile").val();
//	$.ajax({
//		url : 'yzmClick',
//		type : 'POST',
//		sync : true,
//		data : {
//			"accountNo" : accountNo,
//			"buyerName" : buyerName,
//			"idCard" : idCard,
//			"mobile" : mobile
//		},
//		success : function(data) {
//			alert(data.msg);
//		},
//		error : function() {
//		}
//	});
//}
