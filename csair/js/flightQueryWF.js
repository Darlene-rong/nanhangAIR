$(function() {
//*******************判断页面加载是否成功****************************//
//	var adult = $("#adult").text();
//	if($.trim(adult) == '' || $.trim(adult) == null){
//		alert("网络速度慢，请重新查询！")
//		window.location.href="index";
//		return;
//	}
//********************判断页面加载时间不为null******************//
//	var loadtime = $("#loadtime").text();
//	if(loadtime == '网络速度慢，请重新操作！'){
//		alert(loadtime);
//		window.location.href="index";
//	}
	//************************************************************************************//
	var a = $("li.flight_sel_result_price a");
	var length = $("li.flight_sel_result_price a").length;
	for(i=0;i<length;i++){
		var a_href = $(a[i]).attr('href');
		if(a_href =="##"){
			$(a[i]).css("background","none");
		}
	}
	
	
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
	 if(year2 == year){
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
	

	
//航班查询
	$("#search_div_btn").click(function(){
		var c1=$("#cfcs").val();
		var c2=$("#ddcs").val();
		if(c1=="MFM" || c1=="HKG" || c1=="TPE" || c1=="KNH" || c1=="KHH" || c1=="RMQ"){
			alert("抱歉，暂不提供该航线服务，谢谢！");
			$("#cfcs").focus();
			return;
		}    
		if(c2=="MFM" || c2=="HKG" || c2=="TPE" || c2=="KNH" || c2=="KHH" || c2=="RMQ"){
			alert("抱歉，暂不提供该航线服务，谢谢！");
			$("#ddcs").focus();
			return;
		}
		var num1 = $("#adult").text().replace(/[^0-9]/ig,"");
		var num2 = $("#child").text().replace(/[^0-9]/ig,"");
		var num3 = $("#baby").text().replace(/[^0-9]/ig,"");
		
		
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
		var flightQuery = "flightQuery?c1=" + c1 + "&c2=" + c2 + "&date="+ cfsj +"&number1="+num1+"&number2="+num2+"&number3="+num3+"&year="+year+"&month="+month+"&day="+day+"&year2="+year2+"&month2="+month2+"&day2="+day2;
		var flightQuery2 = "flightQuery2?c1=" + c1 + "&c2=" + c2 + "&date="+ cfsj +"&date2="+ fcsj +"&number1="+num1+"&number2="+num2+"&number3="+num3+"&year="+year+"&month="+month+"&day="+day+"&year2="+year2+"&month2="+month2+"&day2="+day2;
		setSearchInfo(2);
		countreload();
		var fanchengStyle = $("label.fancheng").attr("style");
		if(fanchengStyle.indexOf("none") > -1 ){
			window.location.href=flightQuery;
		}else{
			window.location.href=flightQuery2;
		}
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：航班查询中，请稍后。。。'>提示：航班查询中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/00001");
		timedCount();
	})

	
//********************************************************************//
	$(".detail-trigger").remove();
	$(".share").remove();

	$(".sp-trip-stops").each(function() {
		var num = $(this).text();
		$(this).html("航班号:" + num);
	})

	$(".sp-trip-city").removeAttr("title");
	
//	/**
//	 * 选择票价
//	 */
//	$("li[otype='button']").click(function() {
//		var href = $(this).attr('href');
//		var li = $(this).parent();
//		countreload();
//		$.ajax({
//			url : 'getLi',
//			type : 'POST',
//			sync : true,
//			dataType:'json',
//			data : {
//				'href' : href
//			},
//			success : function(data) {
//				li.find("li:last").remove();
//				cleanLi();
//				li.append(data.lis);
//				$(".ca-de-label").remove();
//				$(".rcd-arrow-down").remove();
//				$(".recommend").remove();
//				if(data.loginState==true){
//					buyButton();
//				}else{
//					nologinBuyButton();
//				}
//			}
//		});
//
//	});
//	
	/**
	 * 点击订票
	 */
//	function buyButton() {
//		$("a[otitle='预订流程-航班选择-预订']").bind("click", function() {
//			var href = $(this).attr("href").substring(1);
//			countreload();
//			window.location.href = "buyButton?href=" + href + "";
//		});
//	}
	
	/**
	 * 非登录选择订票
	 */
	function nologinBuyButton(){
		$("a[otitle='预订流程-航班选择-预订']").bind("click", function() {
			var href = $(this).attr("href").substring(1);
	//		window.location.href = "buyButton?href=" + href + "";
			countreload();
			$("#tan").click();
			
		/**
		 * 登录订票
		 */
			$("#loginbutton").bind("click",function(){
					var username=$.trim($("#username").val());
					var password=$.trim($("#loginpassword").val());
					if(username==""){
						alert("请输入手机或邮箱号");
						return;
					}
					
					if(password==""){
						alert("请输入密码");
						return;
					}
					countreload();
					$.ajax({
						url:'toLoginBuyButton',
						type:'POST',
						sync: true,
						dataType:'json',
						data:{
							"href":href,
							"username":username,
							"password":password
						},
						success:function(data){
							if(data.checkLogin==true){
							 window.location.href="toaddpassenger";
							}else{
								alert(data.message);
							}
						},
						error :function(){
							window.location.href="index";
						}
					});
				}
			)
			/**
			 * 不登录直接订票
			 */
			$("#nologintobuy").bind("click",function(){
				countreload();
				window.location.href="nologinorder?href="+href;
			})
			
			/**
			 * 动态密码登录
			 */
			$(".check_code_btn").bind("click",function(){
				var username = $("#username1").val();

				if (username == "" || username == null) {
					alert("请输入手机号")
					return;
				}
				countreload();
				$.ajax({
					url : "toLoginPhoneYzm",
					type : "POST",
					sync : true,
					data : {
						"href":href,
						"username" : username
					},
					success : function(data) {
						alert(data.message);
					},
					error : function() {
					}
				});
			})
			
			$("#login_infos_btn").bind("click",function(){
				var username=$.trim($("#username1").val());
				var vcodeReg=$.trim($("#check_code_input").val());
				//var xym=$.trim($("#xym").val());
				if(username==""){
					alert("请输入手机号");
					return;
				}
				if(vcodeReg==""){
					alert("请输入验证码");
					return;
				}
				countreload();
				$.ajax({
					url:'toLoginPhone',
					type:'POST',
					sync: true,
					data:{
						"username":username,
						"vcodeReg":vcodeReg
					},
					success:function(data){
						if(data.checkLogin==true){
							window.location.href="toaddpassenger";
						}else{
							alert(data.message);
						}
					},
					error :function(){
						window.location.href="index";
					}
				});
			})
		});
	}

	//禁用f5
//	$("body").bind("keydown",function(e){     
//	    e=window.event||e;
//	    if(event.keyCode==116){
//	        e.keyCode = 0; //IE下需要设置为keyCode为false 
//	        return false; 
//	     }  
//	})
	
	/**
	 * 选择票价
	 */
	$("li[class='flight_sel_result_price'] a").click(function() {
		var ahref = $(this).attr('href');
		if(ahref == "##" || ahref == null || ahref =="undefined"){
			return;
		}
		
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：机票查询中，请稍后。。。'>提示：机票查询中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/00003");
		timedCountFlight();
		countreload();
		$("a").removeClass("flight_sel_result_price_show");
		$(this).addClass("flight_sel_result_price_show");
		var href = $(this).attr('href');
		var li = $(this).parent();
		$.ajax({
			url : 'getLi1',
			type : 'POST',
			sync : true,
			dataType:'json',
			data : {
				'href' : href
			},
			success : function(data) {
				$("li.flight_sel_result_price_show_infos").remove();
				$(li).closest("ul").append('<li class="flight_sel_result_price_show_infos" style="display:none"></li>');
				var markCount = $("#mark").val();
				for(var i=0;i<data.reserve.length;i++){
					if(data.reserve[i].zk != null&& data.reserve[i].lc != null){
						var src='<ul><a href="javascript:enterA(this);" onclick="enterA(this);" class="question" style="float: left;" title="'+data.reserve[i].name+','+data.reserve[i].cw+','+data.reserve[i].zk+','+data.reserve[i].tg+','+data.reserve[i].lc+','+data.reserve[i].xl+',继续按tab键了解客票信息"><img src="/iac/csair/img/question.png"></a>'+
						'<li class="price_infos_name">'+data.reserve[i].name+'</li>'+
						'<li class="price_infos_con">'+data.reserve[i].cw+'|'+data.reserve[i].zk+'|<a href="javascript:void(0);"  class="ticket" id="tg" tgnum="'+data.reserve[i].count+'" title="退改信息" >'+data.reserve[i].tg+'</a>|<a href="javascript:void(0);" class="lc"  lcnum="'+data.reserve[i].count+'"  title="此舱位可累'+data.reserve[i].lc+'，继续按tab键了解行李额" >'+data.reserve[i].lc+'</a>|<a href="javascript:void(0);"  class="xl" xlnum="'+data.reserve[i].count+'" title="行李额信息:成人、儿童'+data.reserve[i].xl+',婴儿行李额10KG,继续按tab键选择该航班购票方式" >'+data.reserve[i].xl+'</a></li><li class="price_infos_money">'+
						'<div>'+data.reserve[i].price+'</div>'
						var nologin=$(".container").find(".nologin");
						if(markCount == "2"){
							src=src+'<a class="pop" title="'+data.reserve[i].name+data.reserve[i].price+'元,点击此处可以进行购票" href="'+data.reserve[i].href+'" onclick="pop1(this);">订票</a></li></ul>';
						}else{
							if(nologin.length>0){
								src=src+'<a class="pop" title="'+data.reserve[i].name+data.reserve[i].price+'元,点击此处可以进行明珠会员登录购票" href="'+data.reserve[i].href+'" onclick="pop(this);">明珠会员登录购票</a><a class="orangebtn nologinbuy"  href="'+data.reserve[i].href+'" onclick="nologin(this);" title="点击此处可无需登录购票">无需登录购票&nbsp;</a></li></ul>';
							}else{
								src=src+'<a class="pop" title="'+data.reserve[i].name+data.reserve[i].price+'元,点击此处可以进行明珠会员购票" href="'+data.reserve[i].href+'" onclick="pop(this);">订票</a></li></ul>';
							}
						}
						
						$(li).closest("ul").find("li.flight_sel_result_price_show_infos").append(src);
					}
					if(data.reserve[i].zk != null && data.reserve[i].lc == null){
						var src='<ul><a href="javascript:enterA(this);" onclick="enterA(this);" class="question" style="float: left;" title="'+data.reserve[i].name+','+data.reserve[i].cw+','+data.reserve[i].zk+','+data.reserve[i].tg+','+data.reserve[i].xl+',继续按tab键了解客票信息"><img src="/iac/csair/img/question.png"></a>'+
						'<li class="price_infos_name">'+data.reserve[i].name+'</li>'+
						'<li class="price_infos_con">'+data.reserve[i].cw+'|'+data.reserve[i].zk+'|<a href="javascript:void(0);"  class="ticket" id="tg" tgnum="'+data.reserve[i].count+'" title="退改信息" >'+data.reserve[i].tg+'</a>|<a href="javascript:void(0);"  class="xl" xlnum="'+data.reserve[i].count+'" title="行李额信息:成人、儿童'+data.reserve[i].xl+',婴儿行李额10KG,继续按tab键选择该航班购票方式" >'+data.reserve[i].xl+'</a></li><li class="price_infos_money">'+
						'<div>'+data.reserve[i].price+'</div>'
						var nologin=$(".container").find(".nologin");
						if(markCount == "2"){
							src=src+'<a class="pop" title="'+data.reserve[i].name+data.reserve[i].price+'元,点击此处可以进行购票" href="'+data.reserve[i].href+'" onclick="pop1(this);">订票</a></li></ul>';
						}else{
							if(nologin.length>0){
								src=src+'<a class="pop" title="'+data.reserve[i].name+data.reserve[i].price+'元,点击此处可以进行明珠会员登录购票" href="'+data.reserve[i].href+'" onclick="pop(this);">明珠会员登录购票</a><a class="orangebtn nologinbuy"  href="'+data.reserve[i].href+'" onclick="nologin(this);" title="点击此处可无需登录购票">无需登录购票&nbsp;</a></li></ul>';
							}else{
								src=src+'<a class="pop" title="'+data.reserve[i].name+data.reserve[i].price+'元,点击此处可以进行明珠会员购票" href="'+data.reserve[i].href+'" onclick="pop(this);">明珠会员购票</a></li></ul>';
							}
						}
						$(li).closest("ul").find("li.flight_sel_result_price_show_infos").append(src);
					}
					if(data.reserve[i].zk == null && data.reserve[i].lc == null){
						var src='<ul><a href="javascript:enterA(this);" onclick="enterA(this);" class="question" style="float: left;" title="'+data.reserve[i].name+','+data.reserve[i].cw+','+data.reserve[i].xl+',继续按tab键了解客票信息"><img src="/iac/csair/img/question.png"></a>'+
						'<li class="price_infos_name">'+data.reserve[i].name+'</li>'+
						'<li class="price_infos_con">'+data.reserve[i].cw+'|<a href="javascript:void(0);"  class="ticket" id="tg" tgnum="'+data.reserve[i].count+'" title="退改信息" >'+data.reserve[i].tg+'</a>|<a href="javascript:void(0);"  class="xl" xlnum="'+data.reserve[i].count+'" title="行李额信息:成人、儿童'+data.reserve[i].xl+',婴儿行李额10KG,继续按tab键选择该航班购票方式" >'+data.reserve[i].xl+'</a></li><li class="price_infos_money">'+
						'<div>'+data.reserve[i].price+'</div>'
						var nologin=$(".container").find(".nologin");
						if(markCount == "2"){
							src=src+'<a class="pop" title="'+data.reserve[i].name+data.reserve[i].price+'元,点击此处可以进行购票" href="'+data.reserve[i].href+'" onclick="pop1(this);">订票</a></li></ul>';
						}else{
							if(nologin.length>0){
								src=src+'<a class="pop" title="'+data.reserve[i].name+data.reserve[i].price+'元,点击此处可以进行明珠会员登录购票" href="'+data.reserve[i].href+'" onclick="pop(this);">明珠会员登录购票</a><a class="orangebtn nologinbuy"  href="'+data.reserve[i].href+'" onclick="nologin(this);" title="点击此处可无需登录购票">无需登录购票&nbsp;</a></li></ul>';
							}else{
								src=src+'<a class="pop" title="'+data.reserve[i].name+data.reserve[i].price+'元,点击此处可以进行明珠会员购票" href="'+data.reserve[i].href+'" onclick="pop(this);">明珠会员购票</a></li></ul>';
							}
						}
						$(li).closest("ul").find("li.flight_sel_result_price_show_infos").append(src);
					}
				}
				$(li).closest("ul").find("li.flight_sel_result_price_show_infos").append("<button type='button' onclick='closeYD()' title='点击收起预定舱位' >点击收起预定舱位</button>");
				$(li).closest("ul").find("li.flight_sel_result_price_show_infos").fadeIn(500);
				$("li.flight_sel_result_price_show_infos").find("a:first").focus();
				$.unblockUI();
				reader.stopAll();

				var tgNum ;
				var xlNum ;
				$("li.price_infos_con  .ticket").on("focus",function(){
					var $this = $(this);
					tgNum = $this.attr("tgnum");
					if(tgNum != null){
//						reader.ready=function(){
//							reader.voicePrompt.play("/iac/csair/mp3/00004");
//						};
//						$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在加载退改信息，请稍后。。。'>提示：正在加载退改信息，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
//						timedCount();
						$.ajaxSetup({ cache:false });
						$.ajax({
							url : 'tgxx',
							type : 'POST',
							dataType:'JSON',
							sync : true,
							data : {
								'tgNum' : tgNum
							},
							success : function(data) {
								var top = $this.offset().top+$this.height();
								var left = $this.offset().left;
								if(data.list.length == 1){
									var html =  '<div class="ticket-box">'+
									'<table cellpadding="0" cellspacing="0" border="0" class="ticket-nt" width="100%">'+
									'<tbody> <tr><td class="even"><strong> 退改签时间点</strong> </td>'+
							        '<td class="even center"><strong> 变更手续费（每次）</strong></td>'+
							        '<td class="even center"> <strong> 退票手续费</strong></td>'+
							        '<td class="even"><strong>签转</strong></td></tr>'+
							        '<tr><td class="odd"> '+ data.list[0].fbefore +' </td> <td class="odd center">'+data.list[0].thBeforeChange+'</td>'+
							        '<td class="odd center">'+data.list[0].thBeforeRefund +'</td> <td class="odd">'+data.list[0].endorsement1+'</td> </tr>'+
							        '<tr><td class="even">'+ data.list[0].fAfter+ '</td><td class="even center"> '+data.list[0].thAfterChange +'</td>'+
							        '<td class="even center"> '+data.list[0].thAfterRefund +'</td><td class="even"> '+data.list[0].endorsement2 +'</td></tr></tbody></table>'+
							        '<p class="grey"> 以上为成人机票退改签费用标准，仅供参考，请以实际情况为准。<br/><span class="red">* </span>'+
							        '客票变更时，需同时收取票价价差和变更手续费。</p></div>';
									$this.attr("title","退改信息, 退改签时间点:"+data.list[0].fbefore+",变更手续费（每次）:"+data.list[0].thBeforeChange+", 退票手续费:"+data.list[0].thBeforeRefund + data.list[0].endorsement1+",退改签时间点:"+data.list[0].fAfter+",变更手续费（每次）:"+data.list[0].thAfterChange+", 退票手续费:"+data.list[0].thAfterRefund + data.list[0].endorsement2+"以上为成人机票退改签费用标准，仅供参考，请以实际情况为准。客票变更时，需同时收取票价价差和变更手续费。");
								}
								
								if(data.list.length == 2){
									var html =  '<div class="ticket-box">'+
									'<h4>'+data.list[0].xc+'</h4>'+
									'<table cellpadding="0" cellspacing="0" border="0" class="ticket-nt" width="100%">'+
									'<tbody> <tr><td class="even"><strong> 退改签时间点</strong> </td>'+
									'<td class="even center"><strong> 变更手续费（每次）</strong></td>'+
									'<td class="even center"> <strong> 退票手续费</strong></td>'+
									'<td class="even"><strong>签转</strong></td></tr>'+
									'<tr><td class="odd"> '+ data.list[0].fbefore +' </td> <td class="odd center">'+data.list[0].thBeforeChange+'</td>'+
									'<td class="odd center">'+data.list[0].thBeforeRefund +'</td> <td class="odd">'+data.list[0].endorsement1+'</td> </tr>'+
									'<tr><td class="even">'+ data.list[0].fAfter+ '</td><td class="even center"> '+data.list[0].thAfterChange +'</td>'+
									'<td class="even center"> '+data.list[0].thAfterRefund +'</td><td class="even"> '+data.list[0].endorsement2 +'</td></tr></tbody></table>'+
									'<h4>'+data.list[1].xc+'</h4>'+
									'<table cellpadding="0" cellspacing="0" border="0" class="ticket-nt" width="100%">'+
									'<tbody> <tr><td class="even"><strong> 退改签时间点</strong> </td>'+
									'<td class="even center"><strong> 变更手续费（每次）</strong></td>'+
									'<td class="even center"> <strong> 退票手续费</strong></td>'+
									'<td class="even"><strong>签转</strong></td></tr>'+
									'<tr><td class="odd"> '+ data.list[1].fbefore +' </td> <td class="odd center">'+data.list[1].thBeforeChange+'</td>'+
									'<td class="odd center">'+data.list[1].thBeforeRefund +'</td> <td class="odd">'+data.list[1].endorsement1+'</td> </tr>'+
									'<tr><td class="even">'+ data.list[1].fAfter+ '</td><td class="even center"> '+data.list[1].thAfterChange +'</td>'+
									'<td class="even center"> '+data.list[1].thAfterRefund +'</td><td class="even"> '+data.list[1].endorsement2 +'</td></tr></tbody></table>'+
									'<p class="grey"> 以上为成人机票退改签费用标准，仅供参考，请以实际情况为准。<br/><span class="red">* </span>'+
									'客票变更时，需同时收取票价价差和变更手续费。</p></div>';
									$this.attr("title","退改信息,行程:"+data.list[0].xc+", 退改签时间点:"+data.list[0].fbefore+",变更手续费（每次）:"+data.list[0].thBeforeChange+", 退票手续费:"+data.list[0].thBeforeRefund + data.list[0].endorsement1+",退改签时间点:"+data.list[0].fAfter+",变更手续费（每次）:"+data.list[0].thAfterChange+", 退票手续费:"+data.list[0].thAfterRefund + data.list[0].endorsement2+",行程:"+data.list[1].xc+", 退改签时间点:"+data.list[1].fbefore+",变更手续费（每次）:"+data.list[1].thBeforeChange+", 退票手续费:"+data.list[1].thBeforeRefund + data.list[1].endorsement1+",退改签时间点:"+data.list[1].fAfter+",变更手续费（每次）:"+data.list[1].thAfterChange+", 退票手续费:"+data.list[1].thAfterRefund + data.list[1].endorsement2+"以上为成人机票退改签费用标准，仅供参考，请以实际情况为准。客票变更时，需同时收取票价价差和变更手续费。");
								}
								$("#kpxx").html(html);
								$("#kpxx").attr("style","display:block; float:left; position:absolute;  margin-left:"+left+"px; margin-top:"+top+"px; top:10px");
								$.unblockUI();
								reader.stopAll();
								navBlock.init();
							}
						});
					}
				})
				
				$("li.price_infos_con  .ticket").on("blur",function(){
					reader.ready=function(){
//						reader.voicePrompt.play("/iac/csair/mp3/00004");
					};
//					$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在加载退改信息，请稍后。。。'>提示：正在加载退改信息，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
//					timedCount();
					$.ajaxSetup({ cache:false });
					$.ajax({
						url : 'mouseOut',
						type : 'POST',
						dataType:'JSON',
						sync : true,
						data : {
							'tgNum' : tgNum
						},
						success : function(data) {
							$("#kpxx").html("");
							$("#kpxx").attr("style","display:none;");
							$.unblockUI();
							reader.stopAll();
							navBlock.init();
						}
					});
				})
				
				$("li.price_infos_con  .ticket").mouseover(function(){
					var $this = $(this);
					tgNum = $this.attr("tgnum");
						$.ajaxSetup({ cache:false });
						$.ajax({
							url : 'tgxx',
							type : 'POST',
							dataType:'JSON',
							sync : true,
							data : {
								'tgNum' : tgNum
							},
							success : function(data) {
								var top = $this.offset().top+$this.height();
								var left = $this.offset().left;
								if(data.list.length==1){
									var html =  '<div class="ticket-box">'+
									'<table cellpadding="0" cellspacing="0" border="0" class="ticket-nt" width="100%">'+
									'<tbody> <tr><td class="even"><strong> 退改签时间点</strong> </td>'+
							        '<td class="even center"><strong> 变更手续费（每次）</strong></td>'+
							        '<td class="even center"> <strong> 退票手续费</strong></td>'+
							        '<td class="even"><strong>签转</strong></td></tr>'+
							        '<tr><td class="odd"> '+ data.list[0].fbefore +' </td> <td class="odd center">'+data.list[0].thBeforeChange+'</td>'+
							        '<td class="odd center">'+data.list[0].thBeforeRefund +'</td> <td class="odd">'+data.list[0].endorsement1+'</td> </tr>'+
							        '<tr><td class="even">'+ data.list[0].fAfter+ '</td><td class="even center"> '+data.list[0].thAfterChange +'</td>'+
							        '<td class="even center"> '+data.list[0].thAfterRefund +'</td><td class="even"> '+data.list[0].endorsement2 +'</td></tr></tbody></table>'+
							        '<p class="grey"> 以上为成人机票退改签费用标准，仅供参考，请以实际情况为准。<br/><span class="red">* </span>'+
							        '客票变更时，需同时收取票价价差和变更手续费。</p></div>';
								}
								
								if(data.list.length == 2){
									var html =  '<div class="ticket-box">'+
									'<h4>'+data.list[0].xc+'</h4>'+
									'<table cellpadding="0" cellspacing="0" border="0" class="ticket-nt" width="100%">'+
									'<tbody> <tr><td class="even"><strong> 退改签时间点</strong> </td>'+
									'<td class="even center"><strong> 变更手续费（每次）</strong></td>'+
									'<td class="even center"> <strong> 退票手续费</strong></td>'+
									'<td class="even"><strong>签转</strong></td></tr>'+
									'<tr><td class="odd"> '+ data.list[0].fbefore +' </td> <td class="odd center">'+data.list[0].thBeforeChange+'</td>'+
									'<td class="odd center">'+data.list[0].thBeforeRefund +'</td> <td class="odd">'+data.list[0].endorsement1+'</td> </tr>'+
									'<tr><td class="even">'+ data.list[0].fAfter+ '</td><td class="even center"> '+data.list[0].thAfterChange +'</td>'+
									'<td class="even center"> '+data.list[0].thAfterRefund +'</td><td class="even"> '+data.list[0].endorsement2 +'</td></tr></tbody></table>'+
									'<h4>'+data.list[1].xc+'</h4>'+
									'<table cellpadding="0" cellspacing="0" border="0" class="ticket-nt" width="100%">'+
									'<tbody> <tr><td class="even"><strong> 退改签时间点</strong> </td>'+
									'<td class="even center"><strong> 变更手续费（每次）</strong></td>'+
									'<td class="even center"> <strong> 退票手续费</strong></td>'+
									'<td class="even"><strong>签转</strong></td></tr>'+
									'<tr><td class="odd"> '+ data.list[1].fbefore +' </td> <td class="odd center">'+data.list[1].thBeforeChange+'</td>'+
									'<td class="odd center">'+data.list[1].thBeforeRefund +'</td> <td class="odd">'+data.list[1].endorsement1+'</td> </tr>'+
									'<tr><td class="even">'+ data.list[1].fAfter+ '</td><td class="even center"> '+data.list[1].thAfterChange +'</td>'+
									'<td class="even center"> '+data.list[1].thAfterRefund +'</td><td class="even"> '+data.list[1].endorsement2 +'</td></tr></tbody></table>'+
									'<p class="grey"> 以上为成人机票退改签费用标准，仅供参考，请以实际情况为准。<br/><span class="red">* </span>'+
									'客票变更时，需同时收取票价价差和变更手续费。</p></div>';
								}
								
								$("#kpxx").html(html);
								$("#kpxx").attr("style","display:block; float:left; position:absolute;  margin-left:"+left+"px; margin-top:"+top+"px; top:10px");
								$.unblockUI();
								reader.stopAll();
								navBlock.init();
							}
						});
				})
				
				$("li.price_infos_con  .ticket").on("mouseout",function(){
					$.ajaxSetup({ cache:false });
					$.ajax({
						url : 'mouseOut',
						type : 'POST',
						dataType:'JSON',
						sync : true,
						data : {
							'tgNum' : tgNum,
						},
						success : function(data) {
							$("#kpxx").html("");
							$("#kpxx").attr("style","display:none;");
							$.unblockUI();
							reader.stopAll();
							navBlock.init();
						}
					});
				})
				
				
				$("li.price_infos_con  .lc").on("focus",function(){
					var $this = $(this);
					var title = $this.attr("title");
					var top = $this.offset().top+$this.height();
					var left = $this.offset().left;
					var html =  '<div class="ticket-box"><div class="tsxx">'+title+'</div>'+
						        '<p class="grey">仅供参考，请以实际入账里程为准。</p></div>';
					
					$("#lcxx").html(html);
					$("#lcxx").attr("style","display:block; float:left; position:absolute;  margin-left:"+left+"px; margin-top:"+top+"px; top:10px");
				})
				
				$("li.price_infos_con  .lc").on("blur",function(){
					$("#lcxx").html("");
					$("#lcxx").attr("style","display:none;");
				})
				
				$("li.price_infos_con  .lc").on("mouseover",function(){
					var $this = $(this);
					var title = $this.attr("title");
					var top = $this.offset().top+$this.height();
					var left = $this.offset().left;
					var html =  '<div class="ticket-box"><div class="tsxx">'+title+'</div>'+
			        			'<p class="grey">仅供参考，请以实际入账里程为准。</p></div>';
					$("#lcxx").html(html);
					$("#lcxx").attr("style","display:block; float:left; position:absolute;  margin-left:"+left+"px; margin-top:"+top+"px; top:10px");
				})
				
				$("li.price_infos_con  .lc").on("mouseout",function(){
					$("#lcxx").html("");
					$("#lcxx").attr("style","display:none;");
				})
				
				$("li.price_infos_con  .xl").on("focus",function(){
					var $this = $(this);
					var title = $this.attr("title");
					var top = $this.offset().top+$this.height();
					var left = $this.offset().left;
					var html =  '<div class="ticket-box"><div class="tsxx">'+title+'</div></div>';
					
					$("#xlxx").html(html);
					$("#xlxx").attr("style","display:block; float:left; position:absolute;  margin-left:"+left+"px; margin-top:"+top+"px; top:10px");
				})
				
				$("li.price_infos_con  .xl").on("blur",function(){
					$("#xlxx").html("");
					$("#xlxx").attr("style","display:none;");
				})
				
				$("li.price_infos_con  .xl").on("mouseover",function(){
					var $this = $(this);
					var title = $this.attr("title");
					var top = $this.offset().top+$this.height();
					var left = $this.offset().left;
					var html =  '<div class="ticket-box"><div class="tsxx">'+title+'</div></div>';
					
					$("#xlxx").html(html);
					$("#xlxx").attr("style","display:block; float:left; position:absolute;  margin-left:"+left+"px; margin-top:"+top+"px; top:10px");
				})
				
				$("li.price_infos_con  .xl").on("mouseout",function(){
					$("#xlxx").html("");
					$("#xlxx").attr("style","display:none;");
				})
				
				
//				$("li.price_infos_con  .baggage").focus(function(){
//					var $this = $(this);
//					xlNum = $this.attr("xlnum");
//					if(xlNum != null){
//						reader.ready=function(){
//							reader.voicePrompt.play("/iac/csair/mp3/00004");
//						};
//						$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在加载预定的航班信息，请稍后。。。'>提示：正在加载预定的航班信息，请稍后。。。(<span id='countdown'>90</span>)</a></h1>" });
//						timedCount();
//						$.ajaxSetup({ cache:false });
//						$.ajax({
//							url : 'xlxx',
//							type : 'POST',
//							dataType:'JSON',
//							sync : true,
//							data : {
//								'xlNum' : xlNum
//							},
//							success : function(data) {
//								var html =  '<div class="baggage">'+data.xlxx+'</div>';
//								$this.attr("title","行李信息:"+data.xlxx);
//								$("#kpxx").html(html);
//								$("#kpxx").attr("style","display:block;");
//							
//								$.unblockUI();
//								reader.stopAll();
//								navBlock.init();
//							}
//						});
//					}
//				})
//				
				
//				$("li.price_infos_con  .baggage").blur(function(){
//					reader.ready=function(){
//						reader.voicePrompt.play("/iac/csair/mp3/00004");
//					};
//					$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在加载预定的航班信息，请稍后。。。'>提示：正在加载预定的航班信息，请稍后。。。(<span id='countdown'>90</span>)</a></h1>" });
//					timedCount();
//					$.ajaxSetup({ cache:false });
//					$.ajax({
//						url : 'mouseOut',
//						type : 'POST',
//						dataType:'JSON',
//						sync : true,
//						data : {
//							'xlNum' : xlNum,
//						},
//						success : function(data) {
//							xlNum = null;
//							$("#kpxx").html("");
//							$("#kpxx").attr("style","display:none;");
//							$.unblockUI();
//							reader.stopAll();
//							navBlock.init();
//						}
//					});
//				})
			}
		});
	});

	
	
	
	
    $('#closePop').click(function() {
    	$.unblockUI();
    });
    
    $(".flight_week").find("li").each(function(i,e){
    	if(i==3){
    		$(e).addClass("choosed");
    	}
    });
    $(".flight_week:last").find("li").each(function(i,e){
    	if(i==3){
    		$(e).addClass("choosed");
    	}
    });
    
    var markVal = $("#mark").val();
    if(markVal == "2"){
    	$("li.choosed").eq(0).find("a").focus();
    }else if(markVal == "1"){
    	var cheng = $(".ap_flight_travel").text();
		if(cheng.indexOf("去程") > -1){
			$("li.choosed").eq(1).find("a").focus();
		}else if(cheng.indexOf("回程") > -1){
			$("li.choosed").eq(0).find("a").focus();
		}
    }
	
})

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
	$("li.flight_sel_result_price_show_infos").remove();
	$("a.flight_sel_result_price_show").focus();
	$("a.flight_sel_result_price_show").removeClass("flight_sel_result_price_show");
}
function pop(e){
	var href=$(e).attr("href").replace("#","");
	if($(".nologin").length>0){
		countreload();
		$("#loginbuy").data("href",href);
		$.blockUI({message: $('.page_mask_div') });
	}else{
		countreload();
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在购票，请稍后。。。'>提示：正在购票，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/00006");
		timedCountFlight();
		$.ajax({
			url:'buyButton',
			type:'POST',
			sync: true,
			dataType:'text',
			data:{
				"href":href
			},
			success:function(data){
				if(data=='true'){
				 window.location.href="buyButton1";
				}else{
					alert("旅客信息页面获取失败！");
					$.unblockUI();
					reader.stopAll();
					navBlock.init();
				}
			},
			error :function(){
				window.location.href="index";
			}
		});
	}
}
function pop1(e){
	var href=$(e).attr("href").replace("#","");
	var timestamp=new Date().getTime();
	countreload();
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在购票，请稍后。。。'>提示：正在购票，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/00006");
	timedCountFlight();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'buyButtonFirst?'+timestamp,
		type : 'GET',
		data:{"href":href},
		dataType : 'html',
		sync : false,
		success:function(data){
			if(data.notice == "false"){
				alert(data.msg);
				return;
			}else{
				$("#flightInfo").html(data);
				$("#flightInfo").attr("style","display:block;")
				$("#mark").attr("value","1");
				var cheng = $(".ap_flight_travel").text();
				if(cheng.indexOf("去程") > -1){
					$(".flight_choosen").eq(0).attr("style","display:none;");
					$(".flight_sel_result").eq(0).attr("style","display:none;");
					$(".week2").each(function(){
						var thisHref = $(this).attr("href");
						thisHref = thisHref.split("mark=")[0]+"mark=1";
						$(this).attr("href",thisHref);
					})
					$.unblockUI();
					reader.stopAll();
					navBlock.init();
					$(".choosed:last").find("a").focus();
				}else if(cheng.indexOf("回程") > -1){
					$(".select_wrap").eq(1).attr("style","display:none;");
					$(".week1").each(function(){
						var thisHref = $(this).attr("href");
						thisHref = thisHref.split("mark=")[0]+"mark=1";
						$(this).attr("href",thisHref);
					})
					$.unblockUI();
					reader.stopAll();
					navBlock.init();
					$(".choosed").eq(0).find("a").focus();
				}
			}
		
		},
		error :function(){
			window.location.href="index";
		}
	});

}

function nologin(e){
	//var href=$("#nologinbuy").data("href");
	countreload();
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在购票，请稍后。。。'>提示：正在购票，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/00006");
	timedCountFlight();
	var href=$(e).attr("href").replace("#","");
	$.ajax({
		url:'nologinorder',
		type:'POST',
		sync: true,
		dataType:'json',
		data:{
			"href":href
		},
		success:function(data){
			if(data.notice =='true'){
			 window.location.href="nologinorder1";
			}else{
				alert(data.content);
				$.unblockUI();
				reader.stopAll();
				navBlock.init();
				window.location.href="index";
			}
		},
		error :function(){
			window.location.href="index";
		}
	});
	//window.location.href="nologinorder?href="+href;
}

function tologin(){
	var href=$("#loginbuy").data("href");
	var username=$("#username").val().trim();
	var password=$("#loginpassword").val().trim();
	
	if(username==""){
		alert("请输入帐号");
		return;
	}
	var pattern = new RegExp("[`~!#$^&*()=|{}':;',\\[\\]<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]");
	for (var i = 0; i < username.length; i++) {
		if(pattern.test(username.substr(i,1))){
			alert("帐号中请不要输入特殊符号")
		    return ;
		}
	}
	if(password==""){
		alert("请输入密码");
		return;
	}
	for (var i = 0; i < password.length; i++) {
		if(pattern.test(password.substr(i,1))){
			alert("密码中请不要输入特殊符号")
		    return ;
		}
	}
	countreload();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：正在登录及购票，请稍后。。。'>提示：正在登录及购票，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/00005");
	timedCountFlight();
	$.ajax({
		url:'toLoginBuyButton',
		type:'POST',
		sync: true,
		dataType:'json',
		data:{
			"href":href,
			"username":username,
			"password":password
		},
		success:function(data){
			if(data.state=="SUCCESS"){
			 window.location.href="toaddpassengerWF";
			}else{
				alert(data.message);
				$.unblockUI();
				reader.stopAll();
			}
		}
	});
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
	$("#adult").focus();
}
function fancheng(){
	$(".fancheng").attr("style","display:inline-block;");
	$("#adult").focus();
}