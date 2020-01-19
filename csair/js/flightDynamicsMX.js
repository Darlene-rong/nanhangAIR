$(function(){
	var mark = $("#mark").val();
	if(mark == "place"){
		$("li[data-value='flightNum']").css("background-color","#fff");
		$("li[data-value='flightNum'] a").css("color","#000");
		$("li[data-value='depArvCode']").css("background-color","#3399FF");
		$("li[data-value='depArvCode'] a").css("color","#fff");
		$(".flightNumber").attr("style","display:none;");
		$(".flightCities").attr("style","display:block;");
		$("#numCheck").attr("style","display:none;")
		$("#sendCheck").attr("style","display:block;")
	}else if(mark == "num"){
		$("li[data-value='depArvCode']").css("background-color","#fff");
		$("li[data-value='depArvCode'] a").css("color","#000");
		$("li[data-value='flightNum']").css("background-color","#3399FF");
		$("li[data-value='flightNum'] a").css("color","#fff");
		$(".flightCities").attr("style","display:none;");
		$(".flightNumber").attr("style","display:block;");
		$("#sendCheck").attr("style","display:none;")
		$("#numCheck").attr("style","display:block;")
	}else{
		$("li[data-value='depArvCode']").css("background-color","#3399FF");
		$("li[data-value='depArvCode'] a").css("color","#fff");
	}
	
	
	$("li[data-value='depArvCode']").click(function(){
		$("li[data-value='flightNum']").css("background-color","#fff");
		$("li[data-value='flightNum'] a").css("color","#000");
		$("li[data-value='depArvCode']").css("background-color","#3399FF");
		$("li[data-value='depArvCode'] a").css("color","#fff");
		$(".flightNumber").attr("style","display:none;");
		$(".flightCities").attr("style","display:block;");
		$("#numCheck").attr("style","display:none;")
		$("#sendCheck").attr("style","display:block;")
	})
	
	$("li[data-value='flightNum']").click(function(){
		$("li[data-value='depArvCode']").css("background-color","#fff");
		$("li[data-value='depArvCode'] a").css("color","#000");
		$("li[data-value='flightNum']").css("background-color","#3399FF");
		$("li[data-value='flightNum'] a").css("color","#fff");
		$(".flightCities").attr("style","display:none;");
		$(".flightNumber").attr("style","display:block;");
		$("#sendCheck").attr("style","display:none;")
		$("#numCheck").attr("style","display:block;")
	})
	
	//航班查询遮罩
	$(".flightQuery").click(function(){
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：航班查询中，请稍后。。。'>提示：航班查询中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/00001");
		timedCount();
	})
	/********************************************************************************/
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
	 
	 var year1 = $("#nian").val();
	 var month1 = $("#yue").val();
	 var day1 = $("#ri").val();
	 
	 
	 if(month == 3 || month == 5 || month == 7 || month == 8 || month == 10){
		 if(day < 7){
			for(var y=year;y<(year+2);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month-1;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=1;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else{
			for(var y=year;y<(year+2);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=day-7;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
	 }else if(month == 4 || month == 6 || month == 9 || month == 11){
		if(day < 7){
			for(var y=year;y<(year+2);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month-1;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=1;d<31;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else{
			for(var y=year;y<(year+2);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=day-7;d<31;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
	 }else if(year%4 != 0 && month == 2){
		if(day < 7){
			for(var y=year;y<(year+2);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month-1;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=1;d<29;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else{
			for(var y=year;y<(year+2);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=day-7;d<29;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
	 }else if(year%4 == 0 && month == 2){
		 if(day < 7){
			for(var y=year;y<(year+2);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month-1;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=1;d<30;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else{
			for(var y=year;y<(year+2);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=day-7;d<30;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
	 }else if(month == 12){
		if(day < 7){
			for(var y=year;y<(year+2);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month-1;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=1;d<31;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else{
			for(var y=year;y<(year+2);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=day-7;d<31;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
	 }else if(month ==1){
		if(day < 7){
			for(var y=year-1;y<(year+1);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=1;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else{
			for(var y=year;y<(year+2);y++){
				$("#year").append("<option value='"+y+"'>"+y+"</option>");
			}
			for(var m=month;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$("#month").append("<option value='"+m+"'>"+m+"</option>");
			}
			for(var d=day-7;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$("#day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
	 }
	 
	 $("#year option").each(function(){
		var yearOption = $(this).val();
		if(yearOption == year){
			$(this).attr("selected","selected");
		}
	});
	
	$("#month option").each(function(){
		var monthOption = $(this).val();
		if(monthOption == month){
			$(this).attr("selected","selected");
		}
	});
	
	$("#day option").each(function(){
		var dayOption = $(this).val();
		if(dayOption == day){
			$(this).attr("selected","selected");
		}
	});
	 
		$("#year").on("change",function(){
			var yy=$(this).val();//变更后的年
			if(yy==year){
				$("#month").empty();
				$("#day").empty();
				if(day<7){
					if(month == 1){
						for(var m=month;m<13;m++){
							m =(m<10 ? "0"+m:m); 
							$("#month").append("<option value='"+m+"'>"+m+"</option>");
						}
						for(var d=1;d<32;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
						$("#day option").each(function(){
							var dayOption = $(this).val();
							if(dayOption == day){
								$(this).attr("selected","selected");
							}
						});
					}else{
						for(var m=month-1;m<13;m++){
							m =(m<10 ? "0"+m:m); 
							$("#month").append("<option value='"+m+"'>"+m+"</option>");
						}
						$("#month option").each(function(){
							var monthOption = $(this).val();
							if(monthOption == month){
								$(this).attr("selected","selected");
							}
						});
						if(month==3||month ==5||month ==7||month ==8||month ==10||month ==12){
							for(var d=1;d<32;d++){
								d =(d<10 ? "0"+d:d); 
								$("#day").append("<option value='"+d+"'>"+d+"</option>");
							}
						}else if(yy%4==0 && month ==2){
							for(var d=1;d<30;d++){
								d =(d<10 ? "0"+d:d); 
								$("#day").append("<option value='"+d+"'>"+d+"</option>");
							}
						}else if(yy%4!=0 && month ==2){
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
						$("#day option").each(function(){
							var dayOption = $(this).val();
							if(dayOption == day){
								$(this).attr("selected","selected");
							}
						});
					}
					
				}else{
					for(var m=month;m<13;m++){
						m =(m<10 ? "0"+m:m); 
						$("#month").append("<option value='"+m+"'>"+m+"</option>");
					}
					if(month==1 ||month==3||month ==5||month ==7||month ==8||month ==10||month ==12){
						for(var d=day-7;d<32;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(yy%4==0 && month ==2){
						for(var d=day-7;d<30;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(yy%4!=0 && month ==2){
						for(var d=day-7;d<29;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else{
						for(var d=day-7;d<31;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}
					$("#day option").each(function(){
						var dayOption = $(this).val();
						if(dayOption == day){
							$(this).attr("selected","selected");
						}
					});
				}
				
			}else {
				$("#month").empty();
				$("#day").empty();
				if(month == 1){
					$("#month").append("<option value='12'>12</option>");
					for(var d=24+day;d<32;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day").append("<option value='"+d+"'>"+d+"</option>");
					}
				}else{
					for(var m=1;m<month+1;m++){
						m =(m<10 ? "0"+m:m); 
						$("#month").append("<option value='"+m+"'>"+m+"</option>");
					}
					for(var d=1;d<32;d++){
						d =(d<10 ? "0"+d:d); 
						$("#day").append("<option value='"+d+"'>"+d+"</option>");
					}
					
				}
			}
		});
		
		
		$("#month").on("change",function(){
			var yy=$("#year").val();
			var mm=$(this).val();
			if(mm==month&&yy==year){
				$("#day").empty();
				if(day < 7){
					if(mm == 1||mm ==3||mm ==5||mm ==7||mm ==8||mm ==10||mm ==12){
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
					$("#day option").each(function(){
						var dayOption = $(this).val();
						if(dayOption == day){
							$(this).attr("selected","selected");
						}
					});
				}else{
					if(mm == 1||mm ==3||mm ==5||mm ==7||mm ==8||mm ==10||mm ==12){
						for(var d=day-7;d<32;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(yy%4==0 && mm ==2){
						for(var d=day-7;d<30;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(yy%4!=0 && mm ==2){
						for(var d=day-7;d<29;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else{
						for(var d=day-7;d<31;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}
					$("#day option").each(function(){
						var dayOption = $(this).val();
						if(dayOption == day){
							$(this).attr("selected","selected");
						}
					});
				}
				
			}else if(yy == year){
				$("#day").empty();
				if(mm>month){
					if(mm==3||mm ==5||mm ==7||mm ==8||mm ==10||mm ==12){
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
				}else if(mm<month){
					if(mm == 1||mm==3||mm ==5||mm ==7||mm ==8||mm ==10||mm ==12){
						for(var d=24+day;d<32;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(yy%4==0 && mm ==2){
						for(var d=22+day;d<30;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(yy%4!=0 && mm ==2){
						for(var d=21+day;d<29;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else{
						for(var d=23+day;d<31;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}
				}
				
			}else if(yy > year){
				$("#day").empty();
				if(mm == month){
					if(mm == 1||mm==3||mm ==5||mm ==7||mm ==8||mm ==10||mm ==12){
						for(var d=1;d<day;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(yy%4==0 && mm ==2){
						for(var d=1;d<day;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else if(yy%4!=0 && mm ==2){
						for(var d=1;d<day;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}else{
						for(var d=1;d<day;d++){
							d =(d<10 ? "0"+d:d); 
							$("#day").append("<option value='"+d+"'>"+d+"</option>");
						}
					}
				}else{
					if(mm == 1||mm==3||mm ==5||mm ==7||mm ==8||mm ==10||mm ==12){
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

	
		$("#acfddcscx").focus();
	
})

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

function sendCheck(){
	var c1=$("#cfcs").val();
	var c2=$("#ddcs").val();
	if(c1=="MFM" || c1=="HKG" || c1=="TPE" || c1=="KNH" || c1=="KHH" || c1=="RMQ"){
		alert("暂不支持港、澳、台地区查询！");
		$("#cfcs").focus();
		return;
	}    
	if(c2=="MFM" || c2=="HKG" || c2=="TPE" || c2=="KNH" || c2=="KHH" || c2=="RMQ"){
		alert("暂不支持港、澳、台地区查询！");
		$("#ddcs").focus();
		return;
	}
	var year = $("#year").val();
	var month = $("#month").val();
	var day = $("#day").val();
	var cfsj=year+"-"+month.toString()+"-"+day.toString();
	
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
	var flightDynamicsPlace = "flightDynamicsPlace?c1=" + c1 + "&c2=" + c2 + "&d="+ cfsj +"&year="+year+"&month="+month+"&day="+day;
	//查询信息存入cookie
//	setSearchInfo(1);
	window.location.href=flightDynamicsPlace;
	countreload();
	//语音提示
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：航班查询中，请稍后。。。'>提示：航班查询中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/00001");
	timedCount();
}

function numCheck(){
	var flightNumber = $("#flightNumber").val().trim();
	var year = $("#year").val();
	var month = $("#month").val();
	var day = $("#day").val();
	var cfsj=year+"-"+month.toString()+"-"+day.toString();
	if(flightNumber == ""){
		alert("请填写航班号！！");
		return;
	}
	var flightNumberCheck = check_mark(flightNumber,"航班号") 
	if(flightNumberCheck == false){
		return;
	}
	
	var flightDynamicsNum = "flightDynamicsNum?f="+ flightNumber +"&d="+ cfsj +"&year="+year+"&month="+month+"&day="+day;
	//查询信息存入cookie
//	setSearchInfo(1);
	window.location.href=flightDynamicsNum;
	countreload();
	//语音提示
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：航班查询中，请稍后。。。'>提示：航班查询中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/00001");
	timedCount();
}

//测试是否含有特殊符号方法
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