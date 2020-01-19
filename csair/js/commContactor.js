$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			commContactorLoad();	
		}
	}, 10);	
		
			
})

function commContactorLoad(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'commContactorLoad?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#contactorMX").html(data);
			$.unblockUI();
			reader.stopAll();
			
			pageCheck();
			clickEdit();
			clickDel();
		}
	});	
	
}

//按照姓名查询常用联系人
function contactNameCheck(){
	var contactorName = $("#contact_name").val().trim();
	var base64 = new Base64();
	contactorName = base64.encode(contactorName);
	var contactorNameCheck = check_mark(contactorName,"所填写的常用联系人姓名");
	if(contactorNameCheck == false){
		return;
	}
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'contactNameCheck?'+timestamp,
		type:'GET',
		data:{"contactorName":contactorName},
		dataType:"html",
		sync: false,
		success:function(data){
			$("#contactorMX").html(data);
			$.unblockUI();
			reader.stopAll();
			
			pageCheck();
			clickEdit();
			clickDel();
		}
	});	
}

//跳转增加常用联系人页面
function addCommContactorPage(){
	window.location.href="addCommContactorPage";
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

//跳页
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
				url:'commContactorLoadPageClass?'+timestamp,
				type:'GET',
				data:{"aClass":aClass},
				dataType:"html",
				sync: false,
				success:function(data){
					$("#contactorMX").html(data);
					$.unblockUI();
					reader.stopAll();
					pageCheck();
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
				url:'commContactorLoadPageId?'+timestamp,
				type:'GET',
				data:{"aId":aId},
				dataType:"html",
				sync: false,
				success:function(data){
					$("#contactorMX").html(data);
					$.unblockUI();
					reader.stopAll();
					pageCheck();
					clickEdit();
					clickDel();
				}
			});	
		}
	})
}

//点击修改
function clickEdit(){
	$(".edit").click(function(){
		var num = $(this).parent().parent().find("td:eq(0)").text();
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
//		window.location.href="checkEditCommContactor?num="+num;
		$.ajax({
			url:'checkEditCommContactor',
			type:'POST',
			data:{
				"num":num
			},
			dataType:"json",
			sync: false,
			success:function(data){
				if(data.notice == "true"){
					window.location.href="loadEditCommContactor";
				}else{
					alert("页面加载失败！")
					window.location.href="CommContactor";
				}
			}
		});
	})
}
//点击删除
function clickDel(){
	$(".del").click(function(){
		var message = confirm("是否确定删除？");
		if(message == true){
			var num = $(this).parent().parent().find("td:eq(0)").text();
			$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
			reader.voicePrompt.play("/iac/csair/mp3/ymjz");
			timedCount();
			$.ajax({
				url:'checkDelCommContactor',
				type:'POST',
				data:{"num":num},
				dataType:"json",
				sync: false,
				success:function(data){
					if(data.notice == "true"){
						window.location.href="commContactor";
					}else{
						$.unblockUI();
						reader.stopAll();
					}
				}
			});	
		}
	})
}