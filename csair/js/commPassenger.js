$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			commPassengerLoad();
		}
	}, 10);	
		
			
})


function commPassengerLoad(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'commPassengerLoad?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#passengerMX").html(data);
			$.unblockUI();
			reader.stopAll();
			
			pageCheck();
			clickView();
			clickEdit();
			clickDel();
		}
	});	
	
}
//按照姓名查询常用联系人*
function passengerNameCheck(){
	var psg_tpye = $("#psg_tpye").val();
	var passengerName = $("#passenger_name").val().trim();
	var base64 = new Base64();
	psg_tpye = base64.encode(psg_tpye);
	passengerName = base64.encode(passengerName);
	var passengerNameCheck = check_mark(passengerName,"所填写的常用联系人姓名");
	if(passengerNameCheck == false){
		return;
	}
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'passengerNameCheck?'+timestamp,
		type:'GET',
		data:{
			"psg_tpye":psg_tpye,
			"passengerName":passengerName
			},
		dataType:"html",
		sync: false,
		success:function(data){
			$("#passengerMX").html(data);
			$.unblockUI();
			reader.stopAll();
			
			pageCheck();
			clickView();
			clickEdit();
			clickDel();
		}
	});	
}

//跳转增加常用旅客信息页面*
function addCommPassengerPage(){
	window.location.href="addCommPassengerPage";
}


//测试是否含有特殊符号方法*
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

//跳页*
function pageCheck(){
	$(".page_div  a").click(function(){
		var aClass = $(this).prop("class");
		if(aClass != "current" && aClass !=""){
			var timestamp=new Date().getTime();
			$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
			reader.voicePrompt.play("/iac/csair/mp3/ymjz");
			timedCount();
			$.ajaxSetup({ cache:false });
			$.ajax({
				url:'commPassengerLoadPageClass?'+timestamp,
				type:'GET',
				data:{"aClass":aClass},
				dataType:"html",
				sync: false,
				success:function(data){
					$("#passengerMX").html(data);
					$.unblockUI();
					reader.stopAll();
					pageCheck();
					clickView();
					clickEdit();
					clickDel();
				}
			});	
		}else if(aClass != "current" && aClass ==""){
			var aId = $(this).prop("id");
			var timestamp=new Date().getTime();
			$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
			reader.voicePrompt.play("/iac/csair/mp3/ymjz");
			timedCount();
			$.ajaxSetup({ cache:false });
			$.ajax({
				url:'commPassengerLoadPageId?'+timestamp,
				type:'GET',
				data:{"aId":aId},
				dataType:"html",
				sync: false,
				success:function(data){
					$("#passengerMX").html(data);
					$.unblockUI();
					reader.stopAll();
					pageCheck();
					clickView();
					clickEdit();
					clickDel();
				}
			});	
		}
	})
}

//点击查看*
function clickView(){
	$(".view").click(function(){
		var passengerName = $(this).parent().parent().find("td:eq(0)").text();
		var domesticOrInternational = $(this).parent().parent().find("td:eq(1)").text();
		var passengerType = $(this).parent().parent().find("td:eq(2)").text();
		var cardNum = $(this).parent().parent().find("td:eq(3)").text();
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
//		window.location.href="checkViewPassenger?passengerName="+passengerName+"&domesticOrInternational="+domesticOrInternational+"&passengerType="+passengerType+"&cardNum="+cardNum;
		$.ajax({
			url:'checkViewPassenger',
			type:'POST',
			data:{
				"passengerName":passengerName,
				"domesticOrInternational":domesticOrInternational,
				"passengerType":passengerType,
				"cardNum":cardNum
			},
			dataType:"json",
			sync: false,
			success:function(data){
				if(data.notice == "true"){
					window.location.href="loadViewPassenger";
				}else{
					alert("页面加载失败！")
					window.location.href="commPassenger";
				}
			}
		});
	})
}

//点击修改
function clickEdit(){
	$(".edit").click(function(){
		var passengerName = $(this).parent().parent().find("td:eq(0)").text();
		var domesticOrInternational = $(this).parent().parent().find("td:eq(1)").text();
		var passengerType = $(this).parent().parent().find("td:eq(2)").text();
		var cardNum = $(this).parent().parent().find("td:eq(3)").text();
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
//		window.location.href="checkViewPassenger?passengerName="+passengerName+"&domesticOrInternational="+domesticOrInternational+"&passengerType="+passengerType+"&cardNum="+cardNum;
		$.ajax({
			url:'checkEditPassenger',
			type:'POST',
			data:{
				"passengerName":passengerName,
				"domesticOrInternational":domesticOrInternational,
				"passengerType":passengerType,
				"cardNum":cardNum
			},
			dataType:"json",
			sync: false,
			success:function(data){
				if(data.notice == "true"){
					window.location.href="loadEditPassenger";
				}else{
					alert("页面加载失败！")
					window.location.href="commPassenger";
				}
			}
		});
	})
}
//点击删除*
function clickDel(){
	$(".del").click(function(){
		var message = confirm("是否确定删除？");
		if(message == true){
			var passengerName = $(this).parent().parent().find("td:eq(0)").text();
			var domesticOrInternational = $(this).parent().parent().find("td:eq(1)").text();
			var passengerType = $(this).parent().parent().find("td:eq(2)").text();
			var cardNum = $(this).parent().parent().find("td:eq(3)").text();
			$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
			reader.voicePrompt.play("/iac/csair/mp3/ymjz");
			timedCount();
			$.ajax({
				url:'checkDelCommPassenger',
				type:'POST',
				data:{
					"passengerName":passengerName,
					"domesticOrInternational":domesticOrInternational,
					"passengerType":passengerType,
					"cardNum":cardNum
				},
				dataType:"json",
				sync: false,
				success:function(data){
					if(data.notice == "true"){
						window.location.href="commPassenger";
					}else{
						$.unblockUI();
						reader.stopAll();
					}
				}
			});	
		}
	})
}