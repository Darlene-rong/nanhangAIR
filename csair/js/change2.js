$(function(){
	$(".nextbtn").click(function(){
		var ar = new Array();
		var d = {};
		var a = $(".dateTd").length;
		for(i=0;i<a;i++){
			d.year = $(".dateTd:eq("+i+")  .year").val();
			d.month = $(".dateTd:eq("+i+")  .month").val();
			d.day = $(".dateTd:eq("+i+")  .day").val();
			var b = d.year+"#"+ d.month+"#"+d.day
			ar.push(b);
		}
		
		var date = year+"-"+month+"-"+day
		var changeType = $("#changeType").val();
		if(changeType == "" || changeType == undefined || changeType == null){
			alert("请选择变更原因");
			return;
		}
		
		var beizhu = $("#beizhu").val().trim();		
		var beizhuCheck = check_mark(beizhu,"备注");
		if(beizhuCheck == false){
			return;
		}
		
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		$.ajax({
			url:'changeNext',
			type:'POST',
			data:{
				"ar":ar,
				"changeType":changeType,
				"beizhu":beizhu
			},
			dataType:"json",
			sync: false,
			success:function(data){
				if(data.notice == "true"){
					window.location.href = "loadChange3";
				}else{
					alert(data.msg);
					$.unblockUI();
					reader.stopAll();
				}
			}
		});
		
		
		
	})
	
	
/*********************************************************************************************/
	
	 var date=new Date;
	 var year=date.getFullYear(); //本年
	 var month=date.getMonth()+1;
	 var day = date.getDate(); 
	
	 //初始化出发日期“年”
	for(var y=year;y<(year+2);y++){
		$(".year").append("<option value='"+y+"'>"+y+"</option>");
	}
	
	//用于初始化，和cookie配合使用
	for(var m=month;m<13;m++){    
		m =(m<10 ? "0"+m:m); 
		$(".month").append("<option value='"+m+"'>"+m+"</option>");
	}
	
	//初始化加载日期
	 var yearValue = $(".year:eq(0)").val();
	 var monthValue = $(".month:eq(0)").val();
	
	$(".day").empty();
	if(yearValue == year && monthValue == month){
		if(month == 1||month ==3||month ==5||month ==7||month ==8||month ==10||month ==12){
			for(var d=day;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$(".day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else if(year%4==0 && month ==2){
			for(var d=day;d<30;d++){
				d =(d<10 ? "0"+d:d); 
				$(".day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else if(year%4!=0 && month ==2){
			for(var d=day;d<29;d++){
				d =(d<10 ? "0"+d:d); 
				$(".day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else{
			for(var d=day;d<31;d++){
				d =(d<10 ? "0"+d:d); 
				$(".day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
	}else{
		if(month == 1||month ==3||month ==5||month ==7||month ==8||month ==10||month ==12){
			for(var d=1;d<32;d++){
				d =(d<10 ? "0"+d:d); 
				$(".day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else if(year%4==0 && month ==2){
			for(var d=1;d<30;d++){
				d =(d<10 ? "0"+d:d); 
				$(".day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else if(year%4!=0 && month ==2){
			for(var d=1;d<29;d++){
				d =(d<10 ? "0"+d:d); 
				$(".day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}else{
			for(var d=1;d<31;d++){
				d =(d<10 ? "0"+d:d); 
				$(".day").append("<option value='"+d+"'>"+d+"</option>");
			}
		}
	}
	
	//变更出发日期“年”
	$(".year").on("change",function(){
		var yy=$(this).val();//变更后的年
		if(yy==year){
			$(this).parent().find(".month").empty();
			for(var m=month;m<13;m++){
				m =(m<10 ? "0"+m:m); 
				$(this).parent().find(".month").append("<option value='"+m+"'>"+m+"</option>");
			}
			
		}else{
			$(this).parent().find(".month").empty();
			for(var m=1;m<month + 1;m++){
				m =(m<10 ? "0"+m:m); 
				$(this).parent().find(".month").append("<option value='"+m+"'>"+m+"</option>");
			}
		}
		$(this).parent().find(".month").trigger("change");
		
	});
	

	$(".month").on("change",function(){
		var yy=$(this).parent().find(".year").val();
		var mm=$(this).val();
		if(mm==month && yy==year){
			$(this).parent().find(".day").empty();
			if(mm == 1||mm ==3||mm ==5||mm ==7||mm ==8||mm ==10||mm ==12){
				for(var d=day;d<32;d++){
					d =(d<10 ? "0"+d:d); 
					$(this).parent().find(".day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(yy%4==0 && mm ==2){
				for(var d=day;d<30;d++){
					d =(d<10 ? "0"+d:d); 
					$(this).parent().find(".day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(yy%4!=0 && mm ==2){
				for(var d=day;d<29;d++){
					d =(d<10 ? "0"+d:d); 
					$(this).parent().find(".day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else{
				for(var d=day;d<31;d++){
					d =(d<10 ? "0"+d:d); 
					$(this).parent().find(".day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}
		}else{
			$(this).parent().find(".day").empty();
			if(yy!=year && mm == month){
				for(var d=1;d<day+1;d++){
					d =(d<10 ? "0"+d:d); 
					$(this).parent().find(".day").append("<option value='"+d+"'>"+d+"</option>");
				}
			} else if(mm == 1||mm==3||mm ==5||mm ==7||mm ==8||mm ==10||mm ==12){
				for(var d=1;d<32;d++){
					d =(d<10 ? "0"+d:d); 
					$(this).parent().find(".day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(yy%4==0 && mm ==2){
				for(var d=1;d<30;d++){
					d =(d<10 ? "0"+d:d); 
					$(this).parent().find(".day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else if(yy%4!=0 && mm ==2){
				for(var d=1;d<29;d++){
					d =(d<10 ? "0"+d:d); 
					$(this).parent().find(".day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}else{
				for(var d=1;d<31;d++){
					d =(d<10 ? "0"+d:d); 
					$(this).parent().find(".day").append("<option value='"+d+"'>"+d+"</option>");
				}
			}
		}
	});

	
	
	
	
	
})





//特殊符号校验cc20171013
function check_mark(value,title) {
var pattern = new RegExp("[`~!#$%^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]");
	for (var i = 0; i < value.length; i++) {
		if(pattern.test(value.substr(i,1))){
			alert(title+"中请不要输入特殊符号")
		    return false;
		}
	}
	return true;
}