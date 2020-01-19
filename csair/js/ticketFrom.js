//下拉模板
const selectHTML =
  `
<select>
    <optgroup label="A"></optgroup>
    <optgroup label="B"></optgroup>
    <optgroup label="C"></optgroup>
    <optgroup label="D"></optgroup>
    <optgroup label="E"></optgroup>
    <optgroup label="F"></optgroup>
    <optgroup label="G"></optgroup>
    <optgroup label="H"></optgroup>
    <optgroup label="I"></optgroup>
    <optgroup label="J"></optgroup>
    <optgroup label="K"></optgroup>
    <optgroup label="L"></optgroup>
    <optgroup label="M"></optgroup>
    <optgroup label="N"></optgroup>
    <optgroup label="O"></optgroup>
    <optgroup label="P"></optgroup>
    <optgroup label="Q"></optgroup>
    <optgroup label="R"></optgroup>
    <optgroup label="S"></optgroup>
    <optgroup label="T"></optgroup>
    <optgroup label="U"></optgroup>
    <optgroup label="V"></optgroup>
    <optgroup label="W"></optgroup>
    <optgroup label="X"></optgroup>
    <optgroup label="Y"></optgroup>
    <optgroup label="Z"></optgroup>
</select>
`

$(() => {
  window.fromMain = {
    init() {
      //单程  往返
      this.typeWay();
      //初始化城市
      this.cityInit();
      //初始化日期
      this.dataInit();
      //获取form数据  getJSONdate();
    },
    verification(){
      var c1=$("#cfcs").val();
      var c2=$("#ddcs").val();
      if(c1=="MFM" || c1=="HKG" || c1=="TPE" || c1=="KNH" || c1=="KHH" || c1=="RMQ"){
      	alert("抱歉，暂不提供该航线服务，谢谢！");
      	$("#cfcs").focus();
      	return false;
      }    
      if(c2=="MFM" || c2=="HKG" || c2=="TPE" || c2=="KNH" || c2=="KHH" || c2=="RMQ"){
      	alert("抱歉，暂不提供该航线服务，谢谢！");
      	$("#ddcs").focus();
      	return false;
      }
      if(c1==null || c1=="" || c1=="支持首字母简拼"){
      	alert("请选择出发城市")
      	return false;
      }
      if(c2==null || c2=="" || c2=="支持首字母简拼"){
      	alert("请选择到达城市")
      	return false;
      }
      if(c1 == c2){
      	alert("出发城市与到达城市不能相同")
      	return false;
      }
      return true;
    },
    //获取去程的
    getFromJSON1(){
     let dateStr =$.cookie("hbyear")+"-"+$.cookie("hbmonth")+"-"+$.cookie("hbday");
      return {
        departureCity:$.cookie("cfcs"),
        arrivalCity:$.cookie("ddcs"),
        departureDate:dateStr,
        adultNum:$.cookie("adult").slice(0,-1)||"1",
        childNum:$.cookie("child").slice(0,-1)||"0",
        infantNum:$.cookie("infant").slice(0,-1)||"0"
      }
	},
	//获取返程的参数
    getFromJSON2(){
      if($.cookie("isFancheng")=="true"){
        let dateStr =$.cookie("year2")+"-"+$.cookie("month2")+"-"+$.cookie("day2");
        return {
          departureCity:$.cookie("ddcs"),
          arrivalCity:$.cookie("cfcs"),
          departureDate:dateStr,
          adultNum:$.cookie("adult").slice(0,-1)||"1",
          childNum:$.cookie("child").slice(0,-1)||"0",
          infantNum:$.cookie("infant").slice(0,-1)||"0"
        }
      }
	},
	//是否是国际
	isInner(){
		return $.cookie('startType')=="国内"&&$.cookie('endType')=="国内";
	},
    chang_cf_dd() {
      let departure = $("input[name='departure']:checked");
      let arrive = $("input[name='arrive']:checked");
      var cfcs = $("#cfcs").val();
      var ddcs = $("#ddcs").val();
      if(departure.val()==arrive.val()){
        $("#cfcs").val(ddcs);
        $("#ddcs").val(cfcs);
      }else{
        $("input[name='departure']:not(:checked)").trigger("click");
        $("input[name='arrive']:not(:checked)").trigger("click");
        $("#cfcs").val(ddcs);
        $("#ddcs").val(cfcs);
      }
    },
    typeWay() {
      window.dancheng = function(dom) {
        $("#fancheng").removeClass("active");
        $(dom).addClass("active");
        $(".fancheng").attr("style", "display:none;");
        $("#adult").focus();
      }

      window.fancheng = function(dom) {
        $("#dancheng").removeClass("active");
        $(dom).addClass("active");
        $(".fancheng").attr("style", "display:inline-block;");
        $("#adult").focus();
      }

    },
    cityInit() {
      var info3LowerCase = '';
      var innerHtml = null;
      var internationalHtml = null;
      let dom1 = $(selectHTML);
      let dom2 = $(selectHTML);
      $.each(cities, function(i, jsonObj) { //循环citiesData.js中的城市
        if (jsonObj.info7 == "China") {
          if (jsonObj.info3) {
            info3LowerCase = jsonObj.info3.toLowerCase();
          }
          var str = info3LowerCase.substring(0, 1);
          var option = '<option value="' + jsonObj.info4 + '" mark="' + jsonObj.info3 + '" >' +
            info3LowerCase + ' [' + jsonObj.name + ']</option>'
          dom1.find("optgroup[label='" + str.toUpperCase() + "']").append(option);
        } else {
          if (jsonObj.info3) {
            info3LowerCase = jsonObj.info3.toLowerCase();
          }
          var str = info3LowerCase.substring(0, 1);
          var option = '<option value="' + jsonObj.info4 + '" mark="' + jsonObj.info3 + '" >' +
            info3LowerCase + ' [' + jsonObj.name + ']</option>'
          dom2.find("optgroup[label='" + str.toUpperCase() + "']").append(option);
        }
      });
      innerHtml = dom1.html();
      internationalHtml = dom2.html();

      $("#cfcs").html(innerHtml);
      $("#ddcs").html(innerHtml);

      //点击触发的函数
      window.chooseChange = function(dom) {
        var id = $(dom).data("id");
        if ($(dom).val() == "国内") {
          $("#" + id).html(innerHtml)
        } else {
          $("#" + id).html(internationalHtml)
        }
      }
    },
    dataInit() {
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
      
    }
  }

  fromMain.init();

});
