var cgLiChengIdBeChecked = null;
$(function() {
	$(".cuXiaoLiCheng").each(function(){
		var cxLiChengIdBeChecked = $(this).attr("id");
		if(cxLiChengIdBeChecked == "" || cxLiChengIdBeChecked == undefined){
			$(this).remove();
		}
	})
	$(".changGuiLiCheng:eq(0)").prop("checked",true);
	cgLiChengIdBeChecked = $(".changGuiLiCheng:eq(0)").attr("id");
	$("#cflist .lcRadio:eq(0)").prop("checked",true);
	$("#ddlist .lcRadio:eq(0)").prop("checked",true);
//*******************判断页面加载是否成功****************************//
//	var adult = $("#adult").text();
//	if($.trim(adult) == '' || $.trim(adult) == null){
//		alert("页面加载超时！")
//		window.location.href="index";
//		return;
//	}
//********************判断页面加载时间不为null******************//
	var loadtime = $("#loadtime").text();
	if(loadtime == '网络速度慢，请重新操作！'){
		alert(loadtime);
		window.location.href="index";
	}
	//************************************************************************************//
	var a = $("li.flight_sel_result_price a");
	var length = $("li.flight_sel_result_price a").length;
	for(i=0;i<length;i++){
		$(a[i]).css("background","none");
	}
	
//点击列表单选框
	$("#cflist .lcRadio").on("click",function(){
		$("#cflist .lcRadio").each(function(i){
			$(this).prop("checked","");
		})
		$(this).prop("checked",true);
	})
	
	$("#ddlist .lcRadio").on("click",function(){
		$("#ddlist .lcRadio").each(function(i){
			$(this).prop("checked","");
		})
		$(this).prop("checked",true);
	})
	
//点击详情
	checkDetails();
	
//城市	
	var cf = $("#cf").val();
	var dd = $("#dd").val();
	
	var useCities = info3LowerCase = '';
	$.each(cities, function(i, jsonObj) {//循环citiesData.js中的城市
		if (jsonObj.info7 == "China") {
			if (jsonObj.info3) {
				info3LowerCase = jsonObj.info3.toLowerCase();
				info2LowerCase = jsonObj.info2.toLowerCase();
			}
			var str=info3LowerCase.substring(0,1);
			var option = null;
			var option1 = null;
			if(cf == jsonObj.info4 ){
				 option='<option value="'+jsonObj.info4+'" selected="selected">'+info3LowerCase+' ['+jsonObj.name+']</option>'
			}else{
				 option='<option value="'+jsonObj.info4+'" >'+info3LowerCase+' ['+jsonObj.name+']</option>'
			}
			
			if(dd == jsonObj.info4){
				option1='<option value="'+jsonObj.info4+'" selected="selected">'+info3LowerCase+' ['+jsonObj.name+']</option>'
			}else{
				option1='<option value="'+jsonObj.info4+'" >'+info3LowerCase+' ['+jsonObj.name+']</option>'
			}
			
			$("#cfcs").find("optgroup[label='"+str.toUpperCase()+"']").append(option);
			$("#ddcs").find("optgroup[label='"+str.toUpperCase()+"']").append(option1);
		}
	});
	
//日期
	 var date=new Date;
	 var year=date.getFullYear(); 
	 var month=date.getMonth()+1;
	 var day = date.getDate(); 
	 
	 var year1 = $("#year1").val();
	 var month1 = $("#month1").val();
	 var day1 = $("#day1").val();
	 var year2 = $("#year22").val();
	 var month2 = $("#month22").val();
	 var day2 = $("#day22").val();

		
//	 $("#year").append("<option value='"+year1+"' selected='selected'>"+year1+"</option>");
//	$("#month").append("<option value='"+month1+"' selected='selected'>"+month1+"</option>");
//	$("#day").append("<option value='"+day1+"'selected='selected'>"+day1+"</option>");

	 for(var y=year;y<(year+2);y++){
			$("#year").append("<option value='"+y+"'>"+y+"</option>");
		}
	 if(year1 == year){
			for(var y=year;y<(year+2);y++){
				$("#year2").append("<option value='"+y+"'>"+y+"</option>");
			}
		 }else{
			for(var y=year2;y<(year+2);y++){
				$("#year2").append("<option value='"+y+"'>"+y+"</option>");
			}
		 }
	//出发年月日循环
	 if(year1 == year ){
		 for(var m=month;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
		$("#day").empty();
		if(month1 == month){
			if(month == 1||month ==3||month ==5||month ==7||month ==8||month ==10||month ==12){
				for(var d=day;d<32;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(year%4==0 && month ==2){
				for(var d=day;d<30;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(year%4!=0 && month ==2){
				for(var d=day;d<29;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else{
				for(var d=day;d<31;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}
		}else{
			if(month == 1||month ==3||month ==5||month ==7||month ==8||month ==10||month ==12){
				for(var d=1;d<32;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(year%4==0 && month ==2){
				for(var d=1;d<30;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(year%4!=0 && month ==2){
				for(var d=1;d<29;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else{
				for(var d=1;d<31;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}
		}

	}else if(year1 == year + 1){
		 for(var m=1;m<month + 1;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
		$("#day").empty();
		if(month1 == 1||month1 ==3||month1 ==5||month1 ==7||month1 ==8||month1 ==10||month1 ==12){
			for(var d=1;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else if(year1%4==0 && month1 ==2){
			for(var d=1;d<30;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else if(year1%4!=0 && month1 ==2){
			for(var d=1;d<29;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else if( month1  == month){
			for(var d=1;d<day + 1;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else{
			for(var d=1;d<31;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
	}
	
	//返程年月日循环
	 if(year2 == year){
			if(month1 == month2){
				for(var m=month1;m<13;m++){
					m =(m<10 ? "0"+m:m); 
					$("#month2").append("<option value='"+m+"'>"+m+"</option>");
				}
				$("#day2").empty();
				if(month2 == 1||month2 ==3||month2 ==5||month2 ==7||month2 ==8||month2 ==10||month2 ==12){
					for(var d=day1;d<32;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}else if(year2%4==0 && month2 ==2){
					for(var d=day1;d<30;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}else if(year2%4!=0 && month2 ==2){
					for(var d=day1;d<29;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}else{
					for(var d=day1;d<31;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}
				
			}else{
				for(var m=month1;m<13;m++){
					m =(m<10 ? "0"+m:m); 
					$("#month2").append("<option value='"+m+"'>"+m+"</option>");
				}
				$("#day2").empty();
				if(month2 == 1||month2 ==3||month2 ==5||month2 ==7||month2 ==8||month2 ==10||month2 ==12){
					for(var d=1;d<32;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}else if(year2%4==0 && month2 ==2){
					for(var d=1;d<30;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}else if(year2%4!=0 && month2 ==2){
					for(var d=1;d<29;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}else{
					for(var d=1;d<31;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}
			}
		}else if(year2 == year + 1){
			if(year2 == year1){
				if(month2 == month1){
					for(var m = month1;m<month + 1;m++){
						m =(m<10 ? "0"+m:m); 
						$("#month2").append("<option value='"+m+"'>"+m+"</option>");
					}
					$("#day2").empty();
					if( month2  == month){
						for(var d=day1;d<day + 1;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day2").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(month2 == 1||month2 ==3||month2 ==5||month2 ==7||month2 ==8||month2 ==10||month2 ==12){
						for(var d=day1;d<32;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day2").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(year2%4==0 && month2 ==2){
						for(var d=day1;d<30;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day2").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(year2%4!=0 && month2 ==2){
						for(var d=day1;d<29;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day2").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else {
						for(var d=day1;d<31;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day2").append("<option value='"+d+"'>"+d+"</option>");
						}
					}
				}else{
					for(var m = month1;m<month + 1;m++){
						m =(m<10 ? "0"+m:m); 
						$("#month2").append("<option value='"+m+"'>"+m+"</option>");
					}
					$("#day2").empty();
					if( month2  == month){
						for(var d=1;d<day + 1;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day2").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(month2 == 1||month2 ==3||month2 ==5||month2 ==7||month2 ==8||month2 ==10||month2 ==12){
						for(var d=1;d<32;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day2").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(year2%4==0 && month2 ==2){
						for(var d=1;d<30;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day2").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(year2%4!=0 && month2 ==2){
						for(var d=1;d<29;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day2").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else {
						for(var d=1;d<31;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day2").append("<option value='"+d+"'>"+d+"</option>");
						}
					}
				}
			}else{
				for(var m=1;m<month + 1;m++){
					m =(m<10 ? "0"+m:m); 
					$("#month2").append("<option value='"+m+"'>"+m+"</option>");
				}
				$("#day2").empty();
				if( month2  == month){
					for(var d=1;d<day + 1;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}else if(month2 == 1||month2 ==3||month2 ==5||month2 ==7||month2 ==8||month2 ==10||month2 ==12){
					for(var d=1;d<32;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}else if(year2%4==0 && month2 ==2){
					for(var d=1;d<30;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}else if(year2%4!=0 && month2 ==2){
					for(var d=1;d<29;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}else {
					for(var d=1;d<31;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day2").append("<option value='"+d+"'>"+d+"</option>");
					}
				}
			}
				
		}
	
	
	
	//变更出发年
	$("#year").on("change",function(){
		var yy=$(this).val();
		if(yy==year){
			$("#month").empty();
			for(var m=month;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			
			$("#year2").empty();
			var yearValue = $("#year").val();
			yearValue = parseInt(yearValue*1);
			for(var y=year;y<(year+2);y++){
				$("#year2").append("<option value='"+y+"'>"+y+"</option>");
			}
			$("#year2 option").each(function(){
				var year2Option = $(this).val();
				if(year2Option == yearValue){
					$(this).attr("selected","selected");
				}
			});
			
		}else{
			$("#month").empty();
			for(var m=1;m<month+1;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}	
			
			$("#year2").empty();
			var yearValue = $("#year").val();
			yearValue = parseInt(yearValue*1);
			for(var y=yearValue;y<(yearValue+1);y++){
				$("#year2").append("<option value='"+y+"'>"+y+"</option>");
			}
			$("#year2 option").each(function(){
				var year2Option = $(this).val();
				if(year2Option == yearValue){
					$(this).attr("selected","selected");
				}
			});
		}
		$("#month").trigger("change");
	});
	
	//变更出发月
	$("#month").on("change",function(){
		var yy=$("#year").val();
		var mm=$(this).val();
		if(mm==month&&yy==year){
			$("#day").empty();
			if(mm == 1||mm ==3||mm ==5||mm ==7||mm ==8||mm ==10||mm ==12){
				for(var d=day;d<32;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(yy%4==0 && mm ==2){
				for(var d=day;d<30;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(yy%4!=0 && mm ==2){
				for(var d=day;d<29;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else{
				for(var d=day;d<31;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}
		}else {
			$("#day").empty();
			if( mm == month){
				for(var d=1;d<day + 1;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(mm == 1||mm==3||mm ==5||mm ==7||mm ==8||mm ==10||mm ==12){
				for(var d=1;d<32;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(yy%4==0 && mm ==2){
				for(var d=1;d<30;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(yy%4!=0 && mm ==2){
				for(var d=1;d<29;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else{
				for(var d=1;d<31;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}
		}
		
		$("#year2").empty();
		var yearValue = $("#year").val();
		yearValue = parseInt(yearValue*1);
		if(yearValue == year){
			for(var y=year;y<(yearValue+2);y++){
				$("#year2").append("<option value='"+y+"'>"+y+"</option>");
				$("#year2 option").each(function(){
					var year2Option = $(this).val();
					if(year2Option == yearValue){
						$(this).attr("selected","selected");
					}
				});
				$("#month2").empty();
				var monthValue = $("#month").val();
				monthValue = parseInt(monthValue*1);
				for(var m=monthValue;m<13;m++){
					m =(m<10 ? "0"+m:m); 
					$("#month2").append("<option value='"+m+"'>"+m+"</option>");
				}
				$("#month2 option").each(function(){
					var month2Option = $(this).val();
					if(month2Option == monthValue){
						$(this).attr("selected","selected");
					}
				});
				var dayHtml = $("#day").html();
				$("#day2").html(dayHtml);
				var dayValue = $("#day").val();
				dayValue =  parseInt(dayValue*1);
				$("#day2 option").each(function(){
					var day2Option = $(this).val();
					if(day2Option == dayValue + 1){
						$(this).attr("selected","selected");
					}
				});

			}
		}else{
			for(var y=yearValue;y<(yearValue+1);y++){
				$("#year2").append("<option value='"+y+"'>"+y+"</option>");
			}
			$("#year2 option").each(function(){
				var year2Option = $(this).val();
				if(year2Option == yearValue){
					$(this).attr("selected","selected");
				}
			});
			$("#month2").empty();
			var monthValue = $("#month").val();
			monthValue = parseInt(monthValue*1);
			for(var m=monthValue;m<month+1;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month2").append("<option value='"+m+"'>"+m+"</option>");
			}
			$("#month2 option").each(function(){
				var month2Option = $(this).val();
				if(month2Option == monthValue){
					$(this).attr("selected","selected");
				}
			});
			
			if(monthValue == month){
				$("#day2").empty();
				var dayValue = $("#day").val();
				dayValue =  parseInt(dayValue*1);
				for(var d=1;d<day+1;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day2").append("<option value='"+d+"'>"+d+"</option>");
				}
				$("#day2 option").each(function(){
					var day2Option = $(this).val();
					if(day2Option == dayValue + 1){
						$(this).attr("selected","selected");
					}
				});

			}else{
				var dayHtml = $("#day").html();
				$("#day2").html(dayHtml);
				var dayValue = $("#day").val();
				dayValue =  parseInt(dayValue*1);
				$("#day2 option").each(function(){
					var day2Option = $(this).val();
					if(day2Option == dayValue + 1){
						$(this).attr("selected","selected");
					}
				});
			}
			
		}
		
	});
	
	
	//绑定出发时间“日”的change方法
	$("#day").on("change",function(){
		
		$("#day2").empty();
		var yearValue = $("#year").val(); 
		yearValue =  parseInt(yearValue*1);
		var monthValue = $("#month").val(); 
		monthValue =  parseInt(monthValue*1);
		var dayValue = $("#day").val();
		dayValue =  parseInt(dayValue*1);
		if(monthValue == 1||monthValue ==3||monthValue ==5||monthValue ==7||monthValue ==8||monthValue ==10){
			if(dayValue == 31){
				changeDaySpecial();
			}else{
				changeDayNormal();
			}
		}else if(yearValue%4==0 && monthValue ==2){
			if(dayValue == 29){
				changeDaySpecial();
			}else{
				changeDayNormal();
			}
		}else if(yearValue%4!=0 && monthValue ==2){
			if(dayValue == 28){
				changeDaySpecial();
			}else{
				changeDayNormal();
			}
		}else if(monthValue == 12){//12月最后一天变更方法
			if(dayValue == 31){
				if(yearValue == year){
					$("#year2 option").each(function(){
						var year2Option = $(this).val();
						if(year2Option == yearValue + 1){
							$(this).attr("selected","selected");
						}
					});
					changeYear2();
				}
			}else{
				changeDayNormal();
			}
		}else{
			if(dayValue == 30){
				changeDaySpecial();
			}else{
				changeDayNormal();
			}
		}
		
	});
	
	$("#year2").bind("change",function(){
		changeYear2();
	})
	$("#month2").bind("change",function(){
		changeMonth2();
	})
	
	
	month1 =(month1<10 ? "0"+month1:month1); 
	day1 =(day1<10 ? "0"+day1:day1); 
	$("#year option").each(function(){
		var yearOption = $(this).val();
		if(yearOption==year1){
			$(this).attr("selected","selected");
		}
	});
	$("#month option").each(function(){
		var monthOption = $(this).val();
		if(monthOption==month1){
			$(this).attr("selected","selected");
		}
	});
	$("#day option").each(function(){
		var dayOption = $(this).val();
		if(dayOption==day1){
			$(this).attr("selected","selected");
		}
	});
	
	month2 =(month2<10 ? "0"+month2:month2); 
	day2 =(day2<10 ? "0"+day2:day2); 
	$("#year2 option").each(function(){
		var yearOption = $(this).val();
		if(yearOption==year2){
			$(this).attr("selected","selected");
		}
	});
	$("#month2 option").each(function(){
		var monthOption = $(this).val();
		if(monthOption==month2){
			$(this).attr("selected","selected");
		}
	});
	$("#day2 option").each(function(){
		var dayOption = $(this).val();
		if(dayOption==day2){
			$(this).attr("selected","selected");
		}
	});
	

	
//里程兑换查询
	$("#search_div_btn").click(function(){
		var c1=$("#cfcs").val();
		var c2=$("#ddcs").val();
		var num1 = $("#adult").text().replace(/[^0-9]/ig,"");
		
		
		//获取日期
		var year = $("#year").val();
		var month = $("#month").val();
		var day = $("#day").val();
		var year2 = $("#year2").val();
		var month2 = $("#month2").val();
		var day2 = $("#day2").val();
		
		var cfsj=year+"-"+month.toString()+"-"+day.toString();
		var fcsj=year2+"-"+month2.toString()+"-"+day2.toString();
		
		if(c1==null || c1=="" || c1=="支持首字母简拼"){
			alert("请选择出发城市")
			return;
		}
		if(c2==null || c2=="" || c2=="支持首字母简拼"){
			alert("请选择到达城市")
			return;
		}
		if(cfsj==null || cfsj==""){
			alert("请选择出发日期")
			return;
		}
		if(c1 == c2){
			alert("出发城市与到达城市不能相同")
			return;
		}
		var lcExchangeList = "lcExchangeList?c1=" + c1 + "&c2=" + c2 + "&date="+ cfsj +"&year="+year+"&month="+month+"&day="+day+"&year2="+year2+"&month2="+month2+"&day2="+day2;
		var lcExchangeList2 = "lcExchangeList2?c1=" + c1 + "&c2=" + c2 + "&date="+ cfsj +"&date2="+ fcsj +"&year="+year+"&month="+month+"&day="+day+"&year2="+year2+"&month2="+month2+"&day2="+day2;
		setSearchInfo(2);
		countreload();
		var fanchengStyle = $("label.fancheng").attr("style");
		if(fanchengStyle.indexOf("none") > -1 || fanchengStyle == "undifined"){
			window.location.href=lcExchangeList;
		}else{
			window.location.href=lcExchangeList2;
		}
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：航班查询中，请稍后。。。'>提示：航班查询中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/00001");
		timedCount();
	})

	//里程兑换列表页点击下一步
	$("#next").click(function(){
		var data_href1 = "";
		var data_href2 = "";
		$("#cflist  .lcRadio").each(function(){
			var cfLcRadioChecked = $(this).prop("checked");
			if(cfLcRadioChecked == true){
				$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：机票查询中，请稍后。。。'>提示：机票查询中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
				reader.voicePrompt.play("/iac/csair/mp3/00003");
				timedCountFlight();
				data_href1 = $(this).attr("data-href");
			}
		})
		$("#ddlist  .lcRadio").each(function(){
			var ddLcRadioChecked = $(this).prop("checked");
			if(ddLcRadioChecked == true){
				$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：机票查询中，请稍后。。。'>提示：机票查询中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
				reader.voicePrompt.play("/iac/csair/mp3/00003");
				timedCountFlight();
				data_href2 = $(this).attr("data-href");
			}
		})
		
		$.ajax({
			url : 'lcExchangeNext2',
			type : 'POST',
			sync : false,
			dataType:'json',
			data : {
				'data_href1' : data_href1,
				'data_href2' : data_href2
			},
			success : function(data) {
				if(data.notice == "false"){
					alert(data.errorinfo)
					$.unblockUI();
					reader.stopAll();
					return;
				}else if(data.notice == "true"){
					window.location.href="lcPassenger";
				}
				$.unblockUI();
				reader.stopAll();
				return;
			}
		});
	})
//********************************************************************//
	$(".detail-trigger").remove();
	$(".share").remove();

	$(".sp-trip-stops").each(function() {
		var num = $(this).text();
		$(this).html("航班号:" + num);
	})

	$(".sp-trip-city").removeAttr("title");
	
    $('#closePop').click(function() {
    	$.unblockUI();
    });
    
    $("ul.flight_week").find("li").each(function(i,e){
    	if(i==3){
    		$(e).addClass("choosed");
    	}
    });
	$("li.choosed").find("a").focus();
})

/**
 * 点击详情
 */
function checkDetails(){
	
	$("a.details").click(function() {
		var aid = $(this).attr('id');
		if(aid == "##" || aid == null || aid =="undefined"){
			return;
		}
		
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：机票查询中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCountFlight();
		$("a").removeClass("flight_details_result_show");
		$(this).addClass("flight_details_result_show");
		var id = $(this).attr('id');
		var li = $(this).parent();
		countreload();
		$.ajax({
			url : 'getDiv2',
			type : 'POST',
			sync : true,
			dataType:'json',
			data : {
				'id' : id
			},
			success : function(data) {
				$("li.flight_details_result_show_infos").remove();
				$(li).closest("ul").append('<li class="flight_details_result_show_infos" style="display:none"></li>');
				
				var src='<ul><a href="javascript:enterA(this);" onclick="enterA(this);" class="question" style="float: left;" title="该航班由'+data.sendPlace+'至'+data.arrPlace+',起飞时间：'+data.sendTime+',到达时间：'+data.arrTime+',飞行时长：'+data.flightTime+',航班号为：'+data.flightCode+data.planeName+','+data.jingTing+'"><img src="/iac/csair/img/question.png"></a>'+
				'<li class="flightInfoLi"><div class="sendTime">'+data.sendTime+'</div><div class="sendPlace">'+data.sendPlace+'</div><div class="blueMark">------------></div>'+
				'<div class="arrTime">'+data.arrTime+'</div><div class="arrPlace">'+data.arrPlace+'</div><div class="jingTing">'+data.jingTing+'</div><div class="flightNum"><div class="flightCode">'+data.flightCode+'</div><div class="planeName">'+data.planeName+'</div></div><div class="flightTime">飞行时间：<strong>'+data.flightTime+'</strong></div></li></ul>';
				
				$(li).closest("ul").find("li.flight_details_result_show_infos").append(src);
			
				$(li).closest("ul").find("li.flight_details_result_show_infos").append("<button type='button' onclick='closeYD()' title='点击收起预定舱位' >点击收起预定舱位</button>");
				$(li).closest("ul").find("li.flight_details_result_show_infos").fadeIn(500);
				$("li.flight_details_result_show_infos").find("a:first").focus();
				$.unblockUI();
				reader.stopAll();
			}
		});
	});
}

//变更出发“日”非月底的方法
function changeDayNormal(){
	 var date=new Date;
	 var year=date.getFullYear(); //本年
	 var month=date.getMonth()+1;
	 var day = date.getDate(); 
	$("#year2").empty();
	var yearValue = $("#year").val();
	yearValue = parseInt(yearValue*1);
	if(yearValue == year){
		for(var y=year;y<(yearValue+2);y++){
			$("#year2").append("<option value='"+y+"'>"+y+"</option>");
			$("#year2 option").each(function(){
				var year2Option = $(this).val();
				if(year2Option == yearValue){
					$(this).attr("selected","selected");
				}
			});
			$("#month2").empty();
			var monthValue = $("#month").val();
			monthValue = parseInt(monthValue*1);
			for(var m=monthValue;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month2").append("<option value='"+m+"'>"+m+"</option>");
			}
			$("#month2 option").each(function(){
				var month2Option = $(this).val();
				if(month2Option == monthValue){
					$(this).attr("selected","selected");
				}
			});
			
			dayForChangeDay();
			var dayValue = $("#day").val();
			dayValue =  parseInt(dayValue*1);
			$("#day2 option").each(function(){
				var day2Option = $(this).val();
				if(day2Option == dayValue + 1){
					$(this).attr("selected","selected");
				}
			});

		}
	}else{
		for(var y=yearValue;y<(yearValue+1);y++){
			$("#year2").append("<option value='"+y+"'>"+y+"</option>");
		}
		$("#year2 option").each(function(){
			var year2Option = $(this).val();
			if(year2Option == yearValue){
				$(this).attr("selected","selected");
			}
		});
		$("#month2").empty();
		var monthValue = $("#month").val();
		monthValue = parseInt(monthValue*1);
		for(var m=monthValue;m<month+1;m++){
			m =(m<10 ? "0"+m:m); 
			$("#month2").append("<option value='"+m+"'>"+m+"</option>");
		}
		$("#month2 option").each(function(){
			var month2Option = $(this).val();
			if(month2Option == monthValue){
				$(this).attr("selected","selected");
			}
		});
		dayForChangeDay();
		var dayValue = $("#day").val();
		dayValue =  parseInt(dayValue*1);
		if(dayValue == day){
			$("#day2 option").each(function(){
				var day2Option = $(this).val();
				if(day2Option == dayValue){
					$(this).attr("selected","selected");
				}
			});
		}else{
			$("#day2 option").each(function(){
				var day2Option = $(this).val();
				if(day2Option == dayValue + 1){
					$(this).attr("selected","selected");
				}
			});
		}
	}
}

//改变出发日期“日”，对返程日期“日”的排序规则（只用于排序，用到该方法时出发和返程已经是同年同月了）
//需要判断是否是本年，如果不是则是明年，日期不能超过第二年的今天
function dayForChangeDay(){
	var date=new Date;
	var year=date.getFullYear(); //本年
	var month=date.getMonth()+1;
	var day = date.getDate(); 
	var yearValue = $("#year").val();
	yearValue =  parseInt(yearValue*1);
	var monthValue = $("#month").val();
	monthValue =  parseInt(monthValue*1);
	var year2Value = $("#year2").val();
	year2Value =  parseInt(year2Value*1);
	var month2Value = $("#month2").val();
	month2Value =  parseInt(month2Value*1);
	$("#day2").empty();
	var dayValue = $("#day").val();
	dayValue =  parseInt(dayValue*1);
	if(year == year2Value && monthValue ==month2Value){
		if(monthValue == 1||monthValue==3||monthValue ==5||monthValue ==7||monthValue ==8||monthValue ==10||monthValue ==12){
			for(var d=dayValue;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else if(yearValue%4==0 && monthValue==2){
			for(var d=dayValue;d<30;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else if(yearValue%4!=0 && monthValue==2){
			for(var d=dayValue;d<29;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else{
			for(var d=dayValue;d<31;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
		
		
		$("#day2 option").each(function(){
			var day2Option = $(this).val();
			if(day2Option == dayValue + 1){
				$(this).attr("selected","selected");
			}
		});
	}else if(year != year2Value && month2Value == month){
		for(var d=1;d<day+1;d++){
			d =(d<10 ? "0"+d:d); 
			$("#day2").append("<option value='"+d+"'>"+d+"</option>");
		}
	}else if(month2Value == 1||month2Value ==3||month2Value ==5||month2Value ==7||month2Value ==8||month2Value ==10||month2Value ==12){
		for(var d=1;d<32;d++){
			d =(d<10 ? "0"+d:d); 
			$("#day2").append("<option value='"+d+"'>"+d+"</option>");
		}
	}else if(year2Value%4==0 && month2Value ==2){
		for(var d=1;d<30;d++){
			d =(d<10 ? "0"+d:d); 
			$("#day2").append("<option value='"+d+"'>"+d+"</option>");
		}
	}else if(year2Value%4!=0 && month2Value ==2){
		for(var d=1;d<29;d++){
			d =(d<10 ? "0"+d:d); 
			$("#day2").append("<option value='"+d+"'>"+d+"</option>");
		}
	}else{
		for(var d=1;d<31;d++){
			d =(d<10 ? "0"+d:d); 
			$("#day2").append("<option value='"+d+"'>"+d+"</option>");
		}
	}

}

//变更出发“日”为每月最后一天返程日期变化的方法（除12月份，因为12月最后一天跨年）
function changeDaySpecial(){
	var yearValue = $("#year").val(); 
	yearValue =  parseInt(yearValue*1);
	var monthValue = $("#month").val(); 
	monthValue =  parseInt(monthValue*1);
	var dayValue = $("#day").val();
	dayValue =  parseInt(dayValue*1);
	$("#month2 option").each(function(){
		var month2Option = $(this).val();
		if(month2Option == monthValue + 1){
			$(this).attr("selected","selected");
			changeMonth2();
		}
	});
}
//单独变换返程“年”
function changeYear2(){
	var date=new Date;
	var year=date.getFullYear(); //本年
    var month=date.getMonth()+1;
	var day = date.getDate(); 
	var yy=$("#year").val();
	var mm=$("#month").val();
	var dd=$("#day").val();
	var yy2=$("#year2").val();
	var mm2=$("#month2").val();
	var dd2=$("#day2").val();
	$("#month2").empty();
	if(yy == yy2){
		yy = parseInt(yy);
		$("#year2").empty();
		for(var y=year;y<(year+2);y++){
			$("#year2").append("<option value='"+y+"'>"+y+"</option>");
		}
		$("#year2 option").each(function(){
			var year2Option = $(this).val();
			if(year2Option == yy){
				$(this).attr("selected","selected");
			}
		});
		if(mm == 1||mm==3||mm ==5||mm ==7||mm ==8||mm ==10){
			if(dd == 31){
				changeFanchengYearSpecial();
			}else{
				changeFanchengYearNormal();
			}
		}else if(yy%4==0 && mm ==2){
			if(dd == 29){
				changeFanchengYearSpecial();
			}else{
				changeFanchengYearNormal();
			}
		}else if(yy%4!=0 && mm ==2){
			if(dd == 28){
				changeFanchengYearSpecial();
			}else{
				changeFanchengYearNormal();
			}
		}else if(mm == 12 && dd == 31){
			$("#month2").empty();
			var monthValue = $("#month").val();
			monthValue = parseInt(monthValue*1);
			for(var m=monthValue;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month2").append("<option value='"+m+"'>"+m+"</option>");
			}
			$("#month2 option").each(function(){
				var month2Option = $(this).val();
				if(month2Option == monthValue){
					$(this).attr("selected","selected");
				}
			});
			$("#day2").empty();
			var dayValue = $("#day").val();
			dayValue =  parseInt(dayValue*1);
			for(var d=dayValue;d<dayValue + 1;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
			$("#day2 option").each(function(){
				var day2Option = $(this).val();
				if(day2Option == dayValue){
					$(this).attr("selected","selected");
				}
			});
		}else{
			if(dd == 30){
				changeFanchengYearSpecial();
			}else{
				changeFanchengYearNormal();
			}
		}
		
	}else{
		for(var m=1;m<month + 1;m++){
			m =(m<10 ? "0"+m:m); 
			$("#month2").append("<option value='"+m+"'>"+m+"</option>");
		}
		
		$("#day2").empty();
		for(var d=1;d<32;d++){
			d =(d<10 ? "0"+d:d); 
			$("#day2").append("<option value='"+d+"'>"+d+"</option>");
		}
	}
}
//单独变换返程“月”
function changeMonth2(){
	var date=new Date;
	var year=date.getFullYear(); //本年
    var month=date.getMonth()+1;
	var day = date.getDate(); 
	var yearValue = $("#year").val();
	var monthValue = $("#month").val();
	var year2Value = $("#year2").val();
	var month2Value = $("#month2").val();
	$("#day2").empty();
	var dayValue = $("#day").val();
	dayValue =  parseInt(dayValue*1);
	if(year == year2Value && monthValue ==month2Value){
		if(monthValue == 1||monthValue==3||monthValue ==5||monthValue ==7||monthValue ==8||monthValue ==10||monthValue ==12){
			for(var d=dayValue;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else if(yearValue%4==0 && monthValue==2){
			for(var d=dayValue;d<30;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else if(yearValue%4!=0 && monthValue==2){
			for(var d=dayValue;d<29;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else{
			for(var d=dayValue;d<31;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
		$("#day2 option").each(function(){
			var day2Option = $(this).val();
			if(day2Option == dayValue + 1){
				$(this).attr("selected","selected");
			}
		});
	}else if(year != year2Value && month2Value == month){
		if(year2Value == yearValue && month2Value == monthValue){
			for(var d=dayValue;d<day+1;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
			$("#day2 option").each(function(){
				var day2Option = $(this).val();
				if(day2Option == dayValue + 1){
					$(this).attr("selected","selected");
				}
			});
		}else{
			for(var d=1;d<day+1;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
		
	}else if(month2Value == 1||month2Value ==3||month2Value ==5||month2Value ==7||month2Value ==8||month2Value ==10||month2Value ==12){
		if(year2Value == yearValue && month2Value == monthValue){
			for(var d=dayValue;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
			$("#day2 option").each(function(){
				var day2Option = $(this).val();
				if(day2Option == dayValue + 1){
					$(this).attr("selected","selected");
				}
			});
		}else{
			for(var d=1;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
		
	}else if(year2Value%4==0 && month2Value ==2){
		if(year2Value == yearValue && month2Value == monthValue){
			for(var d=dayValue;d<30;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
			$("#day2 option").each(function(){
				var day2Option = $(this).val();
				if(day2Option == dayValue + 1){
					$(this).attr("selected","selected");
				}
			});
		}else{
			for(var d=1;d<30;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
		
	}else if(year2Value%4!=0 && month2Value ==2){
		if(year2Value == yearValue && month2Value == monthValue){
			for(var d=dayValue;d<29;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
			$("#day2 option").each(function(){
				var day2Option = $(this).val();
				if(day2Option == dayValue + 1){
					$(this).attr("selected","selected");
				}
			});
		}else{
			for(var d=1;d<29;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
		
	}else{
		if(year2Value == yearValue && month2Value == monthValue){
			for(var d=dayValue;d<31;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
			$("#day2 option").each(function(){
				var day2Option = $(this).val();
				if(day2Option == dayValue + 1){
					$(this).attr("selected","selected");
				}
			});
		}else{
			for(var d=1;d<31;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day2").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
		
	}
}

//变更返程“年”，出发日期是非月底的方法
function changeFanchengYearNormal(){
	$("#month2").empty();
	var monthValue = $("#month").val();
	monthValue = parseInt(monthValue*1);
	for(var m=monthValue;m<13;m++){
		m =(m<10 ? "0"+m:m); 
		$("#month2").append("<option value='"+m+"'>"+m+"</option>");
	}
	$("#month2 option").each(function(){
		var month2Option = $(this).val();
		if(month2Option == monthValue){
			$(this).attr("selected","selected");
		}
	});
	var dayHtml = $("#day").html();
	$("#day2").html(dayHtml);
	var dayValue = $("#day").val();
	dayValue =  parseInt(dayValue*1);
	$("#day2 option").each(function(){
		var day2Option = $(this).val();
		if(day2Option == dayValue + 1){
			$(this).attr("selected","selected");
		}
	});
}

//变更返程“年”，出发日期是月底的方法(除12月份)
function changeFanchengYearSpecial(){
	$("#month2").empty();
	var monthValue = $("#month").val();
	monthValue = parseInt(monthValue*1);
	for(var m=monthValue;m<13;m++){
		m =(m<10 ? "0"+m:m); 
		$("#month2").append("<option value='"+m+"'>"+m+"</option>");
	}
	$("#month2 option").each(function(){
		var month2Option = $(this).val();
		if(month2Option == monthValue + 1){
			$(this).attr("selected","selected");
		}
	});
	var year2Value = $("#year2").val();
	year2Value = parseInt(year2Value*1);
	var month2Value = $("#month2").val();
	month2Value = parseInt(month2Value*1);
	$("#day2").empty();
	if(monthValue ==month2Value){
		var dayHtml = $("#day").html();
		$("#day2").html(dayHtml);
		var dayValue = $("#day").val();
		dayValue =  parseInt(dayValue*1);
		$("#day2 option").each(function(){
			var day2Option = $(this).val();
			if(day2Option == dayValue + 1){
				$(this).attr("selected","selected");
			}
		});
	}else if(month2Value == 1||month2Value ==3||month2Value ==5||month2Value ==7||month2Value ==8||month2Value ==10||month2Value ==12){
		for(var d=1;d<32;d++){
			d =(d<10 ? "0"+d:d); 
			$("#day2").append("<option value='"+d+"'>"+d+"</option>");
		}
	}else if(year2Value%4==0 && month2Value ==2){
		for(var d=1;d<30;d++){
			d =(d<10 ? "0"+d:d); 
			$("#day2").append("<option value='"+d+"'>"+d+"</option>");
		}
	}else if(year2Value%4!=0 && month2Value ==2){
		for(var d=1;d<29;d++){
			d =(d<10 ? "0"+d:d); 
			$("#day2").append("<option value='"+d+"'>"+d+"</option>");
		}
	}else{
		for(var d=1;d<31;d++){
			d =(d<10 ? "0"+d:d); 
			$("#day2").append("<option value='"+d+"'>"+d+"</option>");
		}
	}
}



function closeYD(){
	$("li.flight_details_result_show_infos").remove();
	$("a.flight_details_result_show").focus();
	$("a.flight_details_result_show").removeClass("flight_details_result_show");
}

function enterA(e){
	$(e).parent("ul").find("a").each(function(index,event){
		if(index==1){
			$(event).focus();
			return;
		}
	})
}

function dancheng(){
	$(".fancheng").attr("style","display:none;");
}
function fancheng(){
	$(".fancheng").attr("style","display:inline-block;");
}

function RadioKeyup(e,t){
	e = e? e : (window.event ? window.event : null);
	if(e.keyCode==13)//Enter
	{
		$(t).click();
	}
}

function cuXiaoChangGuiLiChengCheck(e){
	var LiChengIdBeChecked = $(e).children("input:eq(0)").attr("id");
	if(LiChengIdBeChecked == undefined){
		return;
	}
	if(LiChengIdBeChecked != cgLiChengIdBeChecked){
		$(".cuXiaoLiCheng").each(function(){
			$(this).prop("checked","");
		})
		$(".changGuiLiCheng").each(function(i){
			$(this).prop("checked","");
		})
		$(e).children("input:eq(0)").prop("checked",true);
		cgLiChengIdBeChecked = LiChengIdBeChecked;
		
		var timestamp=new Date().getTime();
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：正在生成订单，请稍候。。。'>提示：正在生成订单，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/scdd");
		timedCounttopay();
		countreload();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url : 'loadLcFlightInfoWF?'+timestamp,
			type : 'GET',
			data:{"LiChengIdBeChecked":LiChengIdBeChecked},
			dataType : 'html',
			sync : false,
			success : function(data) {
				$("#content").html(data);
				$("#cflist .lcRadio:eq(0)").prop("checked",true);
				$("#ddlist .lcRadio:eq(0)").prop("checked",true);
				var a = $("li.flight_sel_result_price a");
				var length = $("li.flight_sel_result_price a").length;
				for(i=0;i<length;i++){
					$(a[i]).css("background","none");
				}
				$("#"+LiChengIdBeChecked).focus();
				checkDetails();
				$("#cflist .lcRadio").on("click",function(){
					$("#cflist .lcRadio").each(function(i){
						$(this).prop("checked","");
					})
					$(this).prop("checked",true);
				})
				
				$("#ddlist .lcRadio").on("click",function(){
					$("#ddlist .lcRadio").each(function(i){
						$(this).prop("checked","");
					})
					$(this).prop("checked",true);
				})
				$.unblockUI();
				reader.stopAll();
				navBlock.init();
			}
		});
	}
}