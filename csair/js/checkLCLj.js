$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			jzlCLj();
		}
	}, 10);	
	
	
	
	var useCities = info3LowerCase = '';
	var useCities1 = info3LowerCase = '';
	$.each(cities, function(i, jsonObj) {//循环citiesData.js中的城市
		if (jsonObj.info7 == "China") {
			if (jsonObj.info3) {
				info3LowerCase = jsonObj.info3.toLowerCase();
				info4 = jsonObj.info4;
			}
			var str=info3LowerCase.substring(0,1);
			var option='<option value="'+jsonObj.info4+'" mark="'+jsonObj.info3+'" >'+info3LowerCase+' ['+jsonObj.name+']</option>'
			$("#cfcs1").find("optgroup[label='"+str.toUpperCase()+"']").append(option);
		}
	});
	//sort();
	$("#cname_city1").html($("#cfcs1").html());
	$("#cname_city2").html($("#cfcs1").html());
	
})

//加载城市间里程计算
function jzlCLj(){
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajax({
		url:'jzlCLj',
		type:'POST',
		dataType:"json",
		sync: true,
		success:function(data){
			if(data.state=="SUCCESS"){
				$("#cname_city1").focus();
				$.unblockUI();
				reader.stopAll();
			}else{
				alert("页面加载失败！")
				window.location.href="quit";
			}
			
		}
	});	
}

function cityLCcheck(){
	var cname_city1 = $.trim($("#cname_city1").val());
	var cname_city2 = $.trim($("#cname_city2").val());
	if(cname_city1==null || cname_city1=="" || cname_city1=="支持首字母简拼"){
		alert("请选择出发城市")
		return;
	}
	if(cname_city2==null || cname_city2=="" || cname_city2=="支持首字母简拼"){
		alert("请选择到达城市")
		return;
	}
	var select = $("#select").val();
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'cityLCcheck?'+timestamp,
		type:'GET',
		data:{
			"cname_city1":cname_city1,
			"cname_city2":cname_city2,
			"select":select
		},
		dataType:"html",
		sync: false,
		success:function(data){
				$("#cityLCcontent").html(data);
				$("#cname_city1").focus();
				$.unblockUI();
				reader.stopAll();
		}
	});	
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
