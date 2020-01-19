
$(function(){
	$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
	$(".upd_mobile").click(function(){
		$("#mobile").val("");
	})
	
	$(".get_mobile_code").click(function(){
		var bandPhone = $("#mobile").val();
		mzcountreload();
		$.ajax({
			url:'agreeCsairOnlineIdentityAuthenticationVerifCode',
			type:'POST',
			sync: true,
			data:{
				"bandPhone":bandPhone
			},
			success:function(data){
				alert(data.message);
			},
			error :function(){
				
			}
		});
	})
	
	$("#savebutton").click(function(){
		var certType = $("#certType").val();
		var optionValue = $(".infos_inputs_sel_short2").val();
		var bankcardType = $(".infos_inputs_sel_short2  option[value='"+optionValue+"']").text();
	//	alert(bankcardType)
		var bankcardNo = $("#bankcardNo").val();
		var validateCode = $("#validateCode").val();
		mzcountreload();
		$.ajax({
			url:'Debit_cardOnlineIdentityAuthentication',
			type:'POST',
			sync: true,
			data:{
				"certType":certType,
				"bankcardType":bankcardType,
				"bankcardNo":bankcardNo,
				"validateCode":validateCode
			},
			success:function(data){
				alert(data.message);
			},
			error :function(){
				
			}
		});
	})
	
	
	
	
})