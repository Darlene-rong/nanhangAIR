$(function(){
	
	changeRadio2Click();
	
	$(".nextbtn").click(function(){
//		var radio1Id = "";
//		var radio2Id = "";
//		$(".changeRadio1").each(function(){
//			var changeRadio1IsChecked = $(this).is(":checked");
//			if(changeRadio1IsChecked == true){
//				radio1Id = $(this).attr("id");
//				
//			}
//		})
//		$(".changeRadio2").each(function(){
//			var changeRadio2IsChecked = $(this).is(":checked");
//			if(changeRadio2IsChecked == true){
//				radio2Id = $(this).attr("id");
//				
//			}
//		})
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		$.ajax({
			url:'change3Next',
			type:'POST',
//			data:{
//				"radio1Id":radio1Id,
//				"radio2Id":radio2Id
//			},
			dataType:"json",
			sync: false,
			success:function(data){
				if(data.notice == "true"){
					window.location.href = "loadChange4";
				}else{
					alert(data.msg);
					$.unblockUI();
					reader.stopAll();
					navBlock.init();
				}
			}
		});
	})
})

function changeRadio1Click(e){
	$(e).parentsUntil("tbody").siblings("tr").find(".changeRadio1").each(function(){
		$(this).prop("checked","");
	});
	$(e).parentsUntil("tbody").find(".changeRadio1").each(function(){
		$(this).prop("checked","");
	});
	$(e).prop("checked",true);
	var id = $(e).attr("id");
	var mark = $(e).attr("mark");
	var eWei = $(e).next().text().trim();
	
	var timestamp=new Date().getTime();
	$(e).parentsUntil("tbody").siblings("tr").each(function(){
		$(this).find(".changeContent").hide();
	});
	$.ajaxSetup({ cache:false });
	$.ajax({
		url : 'change3ChangeFlightInfo?'+timestamp,
		type : 'GET',
		data:{
			"id":id,
			"mark":mark
		},
		dataType : 'html',
		sync : false,
		success : function(data) {
			$("#"+mark+" .changedFlightInfo").html(data);
			var choosedTbody = null;
			$(e).parentsUntil("tbody").siblings("tr").find(".changeTbody").each(function(){
				$(this).attr("style","display:none;");
				var dataId = $(this).attr("data");
				if(id == dataId){
					choosedTbody = dataId;
					$(this).attr("style","");
					$(this).find("tr").each(function(){
						var tbodyEWai = $(this).find("span").text().trim();
						if(tbodyEWai.indexOf(eWei) > -1){
							$(this).find("span").prev().prop("checked",true);
						}else{
							$(this).find("span").prev().prop("checked","");
						}
					})
				}
			})
			$("tbody[data='"+choosedTbody+"']").parent().parent(".changeContent").attr("style","display:block;");
		}
	});
}

function changeRadio2Click(){
	$(".changeRadio2").click(function(){
		var b = $(this).parentsUntil("table").find(".changeRadio2:checked").length
		if(b == 1){
			return;
		}
		$(this).parentsUntil("table").find(".changeRadio2").each(function(){
			$(this).prop("checked","");
		})
		$(this).prop("checked",true);
		var id = $(this).attr("id");
		var mark = $(this).attr("mark");
		var timestamp=new Date().getTime();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url : 'change3ChangeFlightInfo?'+timestamp,
			type : 'GET',
			data:{
				"id":id,
				"mark":mark
			},
			dataType : 'html',
			sync : false,
			success : function(data) {
				$("#"+mark+" .changedFlightInfo").html(data);
			}
		});
	})
}