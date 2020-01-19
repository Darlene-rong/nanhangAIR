$(function() {
	 $("#province").change(function(){
			var province = $(this).val();
			mzcountreload();
			$.ajax({
				url : 'changProvince',
				type : 'POST',
				sync : true,
				data : {
					"province" : province
				},
				success : function(data) {
					window.location.href = "loadCsairContactPage";
				},
				error : function() {
					
				}
			});
		})
	
	$(".bluebtn").bind("click",function() {
				var language = $("#language").val();
				var country = $("#country").val();
				var postcode = $("#postcode").val();
				var province = $("#province").val();
				var city = $("#city").val();
				var contactChoice = $("#contactChoice").val();
				var country2 = $("#country2").val();
				var postcode2 = $("#postcode2").val();
				var provinceHid2 = $("#provinceHid2").val();
				var cityHid2 = $("#cityHid2").val();
				var address2 = $("#address2").val();
				var date1 = $("#date1").val();
				var date2 = $("#date2").val();
				
				var countryCodes0 = $("#countryCodes0").val();
				var mobile1 = $("#mobile1").val();
				var countryCodes1 = $("#countryCodes1").val();
				var mobile2 = $("#mobile2").val();
				
				var email1 = $("#email1").val();
				var email2 = $("#email2").val();
				
				
				var countryNum1 = $("#countryNum1").val();
				var areaNum1 = $("#areaNum1").val();
				var phoneNum1 = $("#phoneNum1").val();
				var extNum1 = $("#extNum1").val();
				var countryNum2 = $("#countryNum2").val();
				var areaNum2 = $("#areaNum2").val();
				var phoneNum2 = $("#phoneNum2").val();
				var extNum2 = $("#extNum2").val();
				var countryNum3 = $("#countryNum3").val();
				var areaNum3 = $("#areaNum3").val();
				var phoneNum3 = $("#phoneNum3").val();
				var extNum3 = $("#extNum3").val();
				var date3 = $("#date3").val();
				var date4 = $("#date4").val();
				var countryNum4 = $("#countryNum4").val();
				var areaNum4 = $("#areaNum4").val();
				var phoneNum4 = $("#phoneNum4").val();
				var extNum4 = $("#extNum4").val();
				var textfield12 = $("#textfield12").val();
				var textfield13 = $("#textfield13").val();

				var code = contactChoice.substr(
						contactChoice.length - 1, 1);
				if (code == "省" || code == "市" || code == "县"
						|| code == "路" || code == "道" || code == "街"
						|| code == "区" || code == "道" || code == "盟"
						|| code == "地" || code == "州" || code == "旗"
						|| code == "弄" || code == "村" || code == "组") {
					alert("常用通讯地址输入错误，地址最后一个字符不得为“省、市、县、路、道、街、区、道、盟、地、州、旗、弄、村、组")
					return;
				}
				$.blockUI({ message: "<h1><a id='msg' href='#' title='页面加载中，请耐心等候。。。'>页面加载中，请耐心等候。。。</a></h1>" });
				$("#msg").focus();
				$.ajaxSetup({ cache:false });
				mzcountreload();
				$.ajax({
							url : 'csairContactInfo',
							type : 'POST',
							sync : true,
							data : {
								"language" : language,
								"country" : country,
								"postcode" : postcode,
								"province" : province,
								"city" : city,
								"contactChoice" : contactChoice,
								"country2" : country2,
								"postcode2" : postcode2,
								"provinceHid2" : provinceHid2,
								"cityHid2" : cityHid2,
								"address2" : address2,
								"date1" : date1,
								"date2" : date2,
								
								"countryCodes0" : countryCodes0,
								"mobile1" : mobile1,
								"countryCodes1" : countryCodes1,
								"mobile2" : mobile2,
								
								"email1" : email1,
								"email2" : email2,
								
								"countryNum1" : countryNum1,
								"areaNum1" : areaNum1,
								"phoneNum1" : phoneNum1,
								"extNum1" : extNum1,
								"countryNum2" : countryNum2,
								"areaNum2" : areaNum2,
								"phoneNum2" : phoneNum2,
								"extNum2" : extNum2,
								"countryNum3" : countryNum3,
								"areaNum3" : areaNum3,
								"phoneNum3" : phoneNum3,
								"extNum3" : extNum3,
								"date3" : date3,
								"date4" : date4,
								"countryNum4" : countryNum4,
								"areaNum4" : areaNum4,
								"phoneNum4" : phoneNum4,
								"extNum4" : extNum4,
								"textfield12" : textfield12,
								"textfield13" : textfield13
							},
							success : function(data) {
								if (data.state == "SUCCESS") {
									if(data.checkmodel == true){
										var contentHtml = data.map.contentDiv;
										$(".check_ticket_body").html(contentHtml);
										checkout();
									}else{
										window.location.href = "preCsairContactInfo";
									}
									
								}else {
									alert(data.message)
								}
							},
							error : function() {
								
							}
						});
					})
	
					
	$(".checkBtn").click(function(){
		var vaildConnectInfo = $("#vaildConnectInfo").val();
		$.blockUI({ message: "<h1><a id='msg' href='#' title='检验中，请耐心等候。。。'>校验中，请耐心等候。。。</a></h1>" });
		$("#msg").focus();
		$.ajaxSetup({ cache:false });
		mzcountreload();
		$.ajax({
			url : 'csairContactInfoCheck',
			type : 'POST',
			sync : true,
			data : {
				"vaildConnectInfo" : vaildConnectInfo
			},
			success : function(data) {
				if(data.state == "SUCCESS"){
					window.location.href = "preCsairContactInfo";
				}else{
					alert(data.message);
					window.location.href = "preCsairContactInfo";
				}
			},
			error : function() {
				
			}
		});
	})

	//self.setInterval("getAddress()",500);
	getAddress();
})

function checkout(){
	$.unblockUI();
	$.blockUI({ message: $('.check_box_div') });
	$("#vaildConnectInfo").focus();
}



function getAddress(){
	var p = $("#province").val();
	$("#cloneCity").html("<select id='city'><option>请选择</option></select>");
	$.blockUI({ message: "<h1><a id='msg' href='#' title='页面加载中，请耐心等候。。。'>页面加载中，请耐心等候。。。</a></h1>" });
	$.ajax({
		url : 'getAddress',
		type : 'GET',
		sync : true,
		data :{"province":p},
		success : function(data) {
			//alert(data.city);
			$("#cloneCity").empty().html(data.city);
			$.unblockUI();
			$("#province").focus();
		},
		error : function() {
			
		}
	});
}