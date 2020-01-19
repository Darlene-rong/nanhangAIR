$(function() {
	
	$("#search_div_btn").click(function(){
		var c1=$("#cfcs").val();
		var c2=$("#ddcs").val();
		var num1 = $("#adult").val().substr(0,1);
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
		//查询信息存入cookie
		setSearchInfo(1);
		var fanchengStyle = $(".fancheng").attr("style");
		if(fanchengStyle.indexOf("none") > -1){
			window.location.href=lcExchangeList;
		}else{
			window.location.href=lcExchangeList2;
		}
		countreload();
		//语音提示
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：航班查询中，请稍后。。。'>提示：航班查询中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/00001");
		timedCount();

	})
	
	//************************************************************************************//
	var useCities = info3LowerCase = '';
	var useCities1 = info3LowerCase = '';
	$.each(cities, function(i, jsonObj) {//循环citiesData.js中的城市
		if (jsonObj.info7 == "China") {
			if (jsonObj.info3) {
				info3LowerCase = jsonObj.info3.toLowerCase();
				info2LowerCase = jsonObj.info2.toLowerCase();
			}
			var str=info3LowerCase.substring(0,1);
			var option='<option value="'+jsonObj.info4+'" mark="'+jsonObj.info3+'" >'+info3LowerCase+' ['+jsonObj.name+']</option>'
			$("#cfcs1").find("optgroup[label='"+str.toUpperCase()+"']").append(option);
		}
	});
	//sort();
	$("#cfcs").html($("#cfcs1").html());
	$("#ddcs").html($("#cfcs1").html());
	 var date=new Date;
	 var year=date.getFullYear(); //本年
	 var month=date.getMonth()+1;
	 var day = date.getDate(); 
	
	
	 //初始化出发日期“年”
	for(var y=year;y<(year+2);y++){
		$("#year").append("<option value='"+y+"'>"+y+"</option>");
	}
	//变更出发日期“年”
	$("#year").on("change",function(){
		var yy=$(this).val();//变更后的年
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
			for(var m=1;m<month + 1;m++){
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
	
	//用于初始化，和cookie配合使用
	for(var m=1;m<13;m++){    
		m =(m<10 ? "0"+m:m); 
		$("#month").append("<option value='"+m+"'>"+m+"</option>");
	}
	
	//初始化加载日期
	 var yearValue = $("#year").val();
	 var monthValue = $("#month").val();
	
	$("#day").empty();
	if(yearValue == year && monthValue == month){
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

	$("#month").on("change",function(){
		var yy=$("#year").val();
		var mm=$("#month").val();
		if(mm==month && yy==year){
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
		}else{
			$("#day").empty();
			if(yy!=year && mm == month){
				for(var d=1;d<day+1;d++){
					d =(d<10 ? "0"+d:d); 
					$("#day").append("<option value='"+d+"'>"+d+"</option>");
				}
			} else if(mm == 1||mm==3||mm ==5||mm ==7||mm ==8||mm ==10||mm ==12){
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
	
	
	$("#toolbarCtrl").focus();
	
});

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

function sortOption(option,e){
	var v1 = $(e).val();
	$(option).each(function(i,e1){
		var v2 = $(e1).val();
		if(v1!=v2){
			var s1=v1.charCodeAt(1);
			var s2=v2.charCodeAt(1);
			console.log(s1+":"+s2);
			if(s1>s2){
				console.log("串行");
				$(e1).insertBefore($(e));
			}
			
		}
	});
}

function sort(){
	var optgroup = $("#cfcs1").find("optgroup");
	$(optgroup).each(function(index,element){
		var option = $(element).find("option");
		var len = $(option).length;
		for(var i=0;i<len;i++){
			$(option).each(function(i,e){
				sortOption(option,e);
			});
		}
	});
}


function dancheng(){
	$(".fancheng").attr("style","display:none;");
	$("#adult").focus();
}
function fancheng(){
	$(".fancheng").attr("style","display:block;");
	$("#adult").focus();
}