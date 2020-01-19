
$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			preAssigneeCtrl();
		}
	}, 10);	
	
	//点击“继续”按钮
	$(".bluebtn").click(function(){
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		$.ajax({
			url:'AssigneeCtrlContinue',
			type:'POST',
			dataType:'json',
			sync: true,
			success:function(data){
				if(data.state == "SUCCESS"){
					if(data.checkModel == "true"){
						$.unblockUI();
						reader.stopAll();
						$("#phoneNum").html(data.phoneNum);
						$("#checkYzm").focus();
						checkout();
					}
				}
				if(data.state == "SUCCESS"){
					if(data.checkModel == "false"){
						$.unblockUI();
						reader.stopAll();
						$("#content").attr("style","display:none;");
						$("#content1").attr("style","display:block;");
						$("div.table").html(data.table);
						$("#countdown").remove();
						$("input").removeAttr("onblur");
						removeA();
					}
				}
				if(data.state == "FAIL"){
					$.unblockUI();
					reader.stopAll();
					alert("校验框加载失败!")
					$("#countdown").remove();
				}
			}
		});
	})
	
	//点击“删除”
	$("#delbtn").click(function(){
		var $this = $(this);
		var ids=new Array();
		var i = 0;
		var k = 0;
		$(".selectObj").each(function(){
			var checked = $(this).is(':checked');
			if(checked == true){
				ids[i] = $(this).attr("id");
				i++;
			}
		})
		for(j=0; j < ids.length;j++){
			if(ids[j].indexOf("newData")>-1){
				k++;
			}
		}
		if(k == ids.length){
			alert("暂未有删除的数据,请检查！")
			return;
		}
		reader.ready=function(){
			reader.voicePrompt.play("/iac/csair/mp3/00004");
		};
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在加载页面信息，请稍后。。。'>提示：正在加载页面信息，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		timedCount();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url : 'AssigneeCtrlDel',
			type : 'POST',
			dataType:'JSON',
			sync : true,
			data : {
				"ids":ids
			},
			success : function(data) {
				if(data.state == "SUCCESS"){
					$.unblockUI();
					reader.stopAll();
					navBlock.init();
					var top = $this.offset().top+$this.height();
					var left = $this.offset().left;
					$("#assigneeCtrlxx").html(data.map.twiceCheck);
					$("#assigneeCtrlxx").attr("style","display:block; float:left; position:absolute;  margin-left:"+left+"px; margin-top:"+top+"px; top:10px");
					$(".dialogConfirm input").focus();
					closeTwiceSave();
					TwiceSave();
					removeA();
				}else{
					alert(data.message)
					$.unblockUI();
					reader.stopAll();
					navBlock.init();
				}
			}
		});
		
	})
	
	//点击“保存”
	$("#savebtn").click(function(){
		var $this = $(this);
		var firstNameCN1 = $("#firstNameCN1").val();
		var firstNameCN1Check = check_mark(firstNameCN1,"第一位受让人的姓");
		if(firstNameCN1Check == false){
			return;
		}
		var lastNameCN1 = $("#lastNameCN1").val();
		var lastNameCN1Check = check_mark(lastNameCN1,"第一位受让人的名");
		if(lastNameCN1Check == false){
			return;
		}
		var inputcertificateIdnum1 = $("#inputcertificateIdnum1").val();
		var inputcertificateIdnum1Check = check_mark(inputcertificateIdnum1,"第一位受让人的身份证号码");
		if(inputcertificateIdnum1Check == false){
			return;
		}
		var inputpassport1 = $("#inputpassport1").val();
		var inputpassport1Check = check_mark(inputpassport1,"第一位受让人的护照号码");
		if(inputpassport1Check == false){
			return;
		}
		var inputotherCertificate1 = $("#inputotherCertificate1").val();
		var inputotherCertificate1Check = check_mark(inputotherCertificate1,"第一位受让人的其他证件");
		if(inputotherCertificate1Check == false){
			return;
		}
		
		var firstNameCN2 = $("#firstNameCN2").val();
		var firstNameCN2Check = check_mark(firstNameCN2,"第二位受让人的姓");
		if(firstNameCN2Check == false){
			return;
		}
		var lastNameCN2 = $("#lastNameCN2").val();
		var lastNameCN2Check = check_mark(lastNameCN2,"第二位受让人的名");
		if(lastNameCN2Check == false){
			return;
		}
		var inputcertificateIdnum2 = $("#inputcertificateIdnum2").val();
		var inputcertificateIdnum2Check = check_mark(inputcertificateIdnum2,"第二位受让人的身份证号码");
		if(inputcertificateIdnum2Check == false){
			return;
		}
		var inputpassport2 = $("#inputpassport2").val();
		var inputpassport2Check = check_mark(inputpassport2,"第二位受让人的护照号码");
		if(inputpassport2Check == false){
			return;
		}
		var inputotherCertificate2 = $("#inputotherCertificate2").val();
		var inputotherCertificate2Check = check_mark(inputotherCertificate2,"第二位受让人的其他证件");
		if(inputotherCertificate2Check == false){
			return;
		}
		
		var firstNameCN3 = $("#firstNameCN3").val();
		var firstNameCN3Check = check_mark(firstNameCN3,"第三位受让人的姓");
		if(firstNameCN3Check == false){
			return;
		}
		var lastNameCN3 = $("#lastNameCN3").val();
		var lastNameCN3Check = check_mark(lastNameCN3,"第三位受让人的名");
		if(lastNameCN3Check == false){
			return;
		}
		var inputcertificateIdnum3 = $("#inputcertificateIdnum3").val();
		var inputcertificateIdnum3Check = check_mark(inputcertificateIdnum3,"第三位受让人的身份证号码");
		if(inputcertificateIdnum3Check == false){
			return;
		}
		var inputpassport3 = $("#inputpassport3").val();
		var inputpassport3Check = check_mark(inputpassport3,"第三位受让人的护照号码");
		if(inputpassport3Check == false){
			return;
		}
		var inputotherCertificate3 = $("#inputotherCertificate3").val();
		var inputotherCertificate3Check = check_mark(inputotherCertificate3,"第三位受让人的其他证件");
		if(inputotherCertificate3Check == false){
			return;
		}
		
		var firstNameCN4 = $("#firstNameCN4").val();
		var firstNameCN4Check = check_mark(firstNameCN4,"第四位受让人的姓");
		if(firstNameCN4Check == false){
			return;
		}
		var lastNameCN4 = $("#lastNameCN4").val();
		var lastNameCN4Check = check_mark(lastNameCN4,"第四位受让人的名");
		if(lastNameCN4Check == false){
			return;
		}
		var inputcertificateIdnum4 = $("#inputcertificateIdnum4").val();
		var inputcertificateIdnum4Check = check_mark(inputcertificateIdnum4,"第四位受让人的身份证号码");
		if(inputcertificateIdnum4Check == false){
			return;
		}
		var inputpassport4 = $("#inputpassport4").val();
		var inputpassport4Check = check_mark(inputpassport4,"第四位受让人的护照号码");
		if(inputpassport4Check == false){
			return;
		}
		var inputotherCertificate4 = $("#inputotherCertificate4").val();
		var inputotherCertificate4Check = check_mark(inputotherCertificate4,"第四位受让人的其他证件");
		if(inputotherCertificate4Check == false){
			return;
		}
		
		var firstNameCN5 = $("#firstNameCN5").val();
		var firstNameCN5Check = check_mark(firstNameCN5,"第五位受让人的姓");
		if(firstNameCN5Check == false){
			return;
		}
		var lastNameCN5 = $("#lastNameCN5").val();
		var lastNameCN5Check = check_mark(lastNameCN5,"第五位受让人的名");
		if(lastNameCN5Check == false){
			return;
		}
		var inputcertificateIdnum5 = $("#inputcertificateIdnum5").val();
		var inputcertificateIdnum5Check = check_mark(inputcertificateIdnum5,"第五位受让人的身份证号码");
		if(inputcertificateIdnum5Check == false){
			return;
		}
		var inputpassport5 = $("#inputpassport5").val();
		var inputpassport5Check = check_mark(inputpassport5,"第五位受让人的护照号码");
		if(inputpassport5Check == false){
			return;
		}
		var inputotherCertificate5 = $("#inputotherCertificate5").val();
		var inputotherCertificate5Check = check_mark(inputotherCertificate5,"第五位受让人的其他证件");
		if(inputotherCertificate5Check == false){
			return;
		}
		
		var firstNameCN6 = $("#firstNameCN6").val();
		var firstNameCN6Check = check_mark(firstNameCN6,"第六位受让人的姓");
		if(firstNameCN6Check == false){
			return;
		}
		var lastNameCN6 = $("#lastNameCN6").val();
		var lastNameCN6Check = check_mark(lastNameCN6,"第六位受让人的名");
		if(lastNameCN6Check == false){
			return;
		}
		var inputcertificateIdnum6 = $("#inputcertificateIdnum6").val();
		var inputcertificateIdnum6Check = check_mark(inputcertificateIdnum6,"第六位受让人的身份证号码");
		if(inputcertificateIdnum6Check == false){
			return;
		}
		var inputpassport6 = $("#inputpassport6").val();
		var inputpassport6Check = check_mark(inputpassport6,"第六位受让人的护照号码");
		if(inputpassport6Check == false){
			return;
		}
		var inputotherCertificate6 = $("#inputotherCertificate6").val();
		var inputotherCertificate6Check = check_mark(inputotherCertificate6,"第六位受让人的其他证件");
		if(inputotherCertificate6Check == false){
			return;
		}
		
		var firstNameCN7 = $("#firstNameCN7").val();
		var firstNameCN7Check = check_mark(firstNameCN7,"第七位受让人的姓");
		if(firstNameCN7Check == false){
			return;
		}
		var lastNameCN7 = $("#lastNameCN7").val();
		var lastNameCN7Check = check_mark(lastNameCN7,"第七位受让人的名");
		if(lastNameCN7Check == false){
			return;
		}
		var inputcertificateIdnum7 = $("#inputcertificateIdnum7").val();
		var inputcertificateIdnum7Check = check_mark(inputcertificateIdnum7,"第七位受让人的身份证号码");
		if(inputcertificateIdnum7Check == false){
			return;
		}
		var inputpassport7 = $("#inputpassport7").val();
		var inputpassport7Check = check_mark(inputpassport7,"第七位受让人的护照号码");
		if(inputpassport7Check == false){
			return;
		}
		var inputotherCertificate7 = $("#inputotherCertificate7").val();
		var inputotherCertificate7Check = check_mark(inputotherCertificate7,"第七位受让人的其他证件");
		if(inputotherCertificate7Check == false){
			return;
		}
		
		var firstNameCN8 = $("#firstNameCN8").val();
		var firstNameCN8Check = check_mark(firstNameCN8,"第八位受让人的姓");
		if(firstNameCN8Check == false){
			return;
		}
		var lastNameCN8 = $("#lastNameCN8").val();
		var lastNameCN8Check = check_mark(lastNameCN8,"第八位受让人的名");
		if(lastNameCN8Check == false){
			return;
		}
		var inputcertificateIdnum8 = $("#inputcertificateIdnum8").val();
		var inputcertificateIdnum8Check = check_mark(inputcertificateIdnum8,"第八位受让人的身份证号码");
		if(inputcertificateIdnum8Check == false){
			return;
		}
		var inputpassport8 = $("#inputpassport8").val();
		var inputpassport8Check = check_mark(inputpassport8,"第八位受让人的护照号码");
		if(inputpassport8Check == false){
			return;
		}
		var inputotherCertificate8 = $("#inputotherCertificate8").val();
		var inputotherCertificate8Check = check_mark(inputotherCertificate8,"第八位受让人的其他证件");
		if(inputotherCertificate8Check == false){
			return;
		}
		
		reader.ready=function(){
			reader.voicePrompt.play("/iac/csair/mp3/00004");
		};
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在加载页面信息，请稍后。。。'>提示：正在加载页面信息，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		timedCount();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url : 'AssigneeCtrlSave',
			type : 'POST',
			dataType:'JSON',
			sync : true,
			data : {
				 "firstNameCN1":firstNameCN1 ,
				 "lastNameCN1":lastNameCN1,
				 "inputcertificateIdnum1":inputcertificateIdnum1,
				 "inputpassport1":inputpassport1,
				 "inputotherCertificate1":inputotherCertificate1,
				 
				 "firstNameCN2":firstNameCN2 ,
				 "lastNameCN2":lastNameCN2,
				 "inputcertificateIdnum2":inputcertificateIdnum2,
				 "inputpassport2":inputpassport2,
				 "inputotherCertificate2":inputotherCertificate2,
				 
				 "firstNameCN3":firstNameCN3 ,
				 "lastNameCN3":lastNameCN3,
				 "inputcertificateIdnum3":inputcertificateIdnum3,
				 "inputpassport3":inputpassport3,
				 "inputotherCertificate3":inputotherCertificate3,
				 
				 "firstNameCN4":firstNameCN4 ,
				 "lastNameCN4":lastNameCN4,
				 "inputcertificateIdnum4":inputcertificateIdnum4,
				 "inputpassport4":inputpassport4,
				 "inputotherCertificate4":inputotherCertificate4,
				 
				 "firstNameCN5":firstNameCN5 ,
				 "lastNameCN5":lastNameCN5,
				 "inputcertificateIdnum5":inputcertificateIdnum5,
				 "inputpassport5":inputpassport5,
				 "inputotherCertificate5":inputotherCertificate5,
				 
				 "firstNameCN6":firstNameCN6 ,
				 "lastNameCN6":lastNameCN6,
				 "inputcertificateIdnum6":inputcertificateIdnum6,
				 "inputpassport6":inputpassport6,
				 "inputotherCertificate6":inputotherCertificate6,
				 
				 "firstNameCN7":firstNameCN7 ,
				 "lastNameCN7":lastNameCN7,
				 "inputcertificateIdnum7":inputcertificateIdnum7,
				 "inputpassport7":inputpassport7,
				 "inputotherCertificate7":inputotherCertificate7,
				 
				 "firstNameCN8":firstNameCN8 ,
				 "lastNameCN8":lastNameCN8,
				 "inputcertificateIdnum8":inputcertificateIdnum8,
				 "inputpassport8":inputpassport8,
				 "inputotherCertificate8":inputotherCertificate8
			},
			success : function(data) {
				if(data.state == "SUCCESS"){
					$.unblockUI();
					reader.stopAll();
					navBlock.init();
					var top = $this.offset().top+$this.height();
					var left = $this.offset().left;
					$("#assigneeCtrlxx").html(data.map.twiceCheck);
					$("#assigneeCtrlxx").attr("style","display:block; float:left; position:absolute;  margin-left:"+left+"px; margin-top:"+top+"px; top:10px");
					$(".dialogConfirm input").focus();
					closeTwiceSave();
					TwiceSave();
					removeA();
				}else{
					alert(data.message)
					$.unblockUI();
					reader.stopAll();
					navBlock.init();
				}
			}
		});
	}) 


})

//判断受让人页面加载成功与否（“继续”页面）
function preAssigneeCtrl(){
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	
	$.ajax({
		url:'preAssigneeCtrl',
		type:'POST',
		dataType:'json',
		sync: true,
		success:function(data){
			if(data.state == "SUCCESS"){
				removeA();
				$.unblockUI();
				reader.stopAll();
			}else{
				$.unblockUI();
				reader.stopAll();
				window.location.href="index";
			}
			
		}
	});
}

//弹校验框
function checkout(){
		$.blockUI({ message: $('.check_box_div') });
	}

//校验发送验证码
function assigneeCtrlYzm(){
	$.ajax({
		url:'AssigneeCtrlYzm',
		type:'POST',
		dataType:'json',
		sync: true,
		success:function(data){
			alert(data.message)
		}
	});
}

//进行校验
function assigneeCtrlCheck(){
	var yzm = $("#code").val();
	if(yzm == null || yzm ==""){
		alert("请填写验证码!")
		return;
	}
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajax({
		url:'AssigneeCtrlCheck',
		type:'POST',
		data:{"yzm":yzm},
		dataType:'json',
		sync: true,
		success:function(data){
			if(data.state == "SUCCESS"){
				$.unblockUI();
				reader.stopAll();
				$("#content").attr("style","display:none;");
				$("div.table").html(data.map.table);
				$("#content1").attr("style","display:block;");
				$("#countdown").remove();
				$("input").removeAttr("onblur");
				removeA();
			}else{
				$.unblockUI();
				reader.stopAll();
				alert(data.message)
				$("#countdown").remove();
			}
		}
	});
}

//二次确认“取消”
function closeTwiceSave(){
	$(".close input").attr("title","二次确定取消按钮");
	$(".close input").click(function(){
		reader.ready=function(){
			reader.voicePrompt.play("/iac/csair/mp3/00004");
		};
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在加载页面信息，请稍后。。。'>提示：正在加载页面信息，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		timedCount();
		$.ajax({
			url:'AssigneeTwiceCheckQuit',
			type:'POST',
			dataType:'json',
			sync: true,
			success:function(data){
				if(data.state == "SUCCESS"){
					$.unblockUI();
					reader.stopAll();
					window.location.href="AssigneeCtrl";
				}else{
					$.unblockUI();
					reader.stopAll();
					alert("点击取消失败!")
				}
			}
		});
	})
}

//二次确认“确定”
function TwiceSave(){
	$(".dialogConfirm input").attr("title","二次确定按钮");
	$(".dialogConfirm input").click(function(){
		reader.ready=function(){
			reader.voicePrompt.play("/iac/csair/mp3/00004");
		};
		$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：正在加载页面信息，请稍后。。。'>提示：正在加载页面信息，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		timedCount();
		$.ajax({
			url:'AssigneeTwiceCheckBtn',
			type:'POST',
			dataType:'json',
			sync: true,
			success:function(data){
				if(data.state == "SUCCESS"){
					$.unblockUI();
					reader.stopAll();
					alert(data.message);
					window.location.href="AssigneeCtrl";
				}else{
					$.unblockUI();
					reader.stopAll();
					alert("点击确认失败!")
				}
			}
		});
	})
}

//去除详情 全选 
function removeA(){
	$(".bluebtn").focus();
	$("#tbodyalienee a").remove();
	$("#selectAllBut").remove();
	$(".user-cox-list th:eq(0)").html("");
	$("#firstNameCN1").attr("title","这里请填写第一位受让人的中文姓");
	$("#lastNameCN1").attr("title","这里请填写第一位受让人的中文名");
	$("#firstNameEN1").attr("disabled","disabled");
	$("#lastNameEN1").attr("disabled","disabled");
	$("#inputcertificateIdnum1").attr("readonly","readonly");
	$("#inputpassport1").attr("readonly","readonly");
	$("#inputotherCertificate1").attr("readonly","readonly");
	$("#inputcertificateIdnum1").attr("title","这里是第一位受让人的身份证号码，如需更改请拨打95533");
	$("#inputpassport1").attr("title","这里是第一位受让人的护照号码，如需更改请拨打95533");
	$("#inputotherCertificate1").attr("title","这里是第一位受让人的其他证件，如需更改请拨打95533");
	
	$("#firstNameCN2").attr("title","这里请填写第二位受让人的中文姓");
	$("#lastNameCN2").attr("title","这里请填写第二位受让人的中文名");
	$("#firstNameEN2").attr("disabled","disabled");
	$("#lastNameEN2").attr("disabled","disabled");
	$("#inputcertificateIdnum2").attr("readonly","readonly");
	$("#inputpassport2").attr("readonly","readonly");
	$("#inputotherCertificate2").attr("readonly","readonly");
	$("#inputcertificateIdnum2").attr("title","这里是第二位受让人的身份证号码，如需更改请拨打95533");
	$("#inputpassport2").attr("title","这里是第二位受让人的护照号码，如需更改请拨打95533");
	$("#inputotherCertificate2").attr("title","这里是第二位受让人的其他证件，如需更改请拨打95533");
	
	$("#firstNameCN3").attr("title","这里请填写第三位受让人的中文姓");
	$("#lastNameCN3").attr("title","这里请填写第三位受让人的中文名");
	$("#firstNameEN3").attr("disabled","disabled");
	$("#lastNameEN3").attr("disabled","disabled");
	$("#inputcertificateIdnum3").attr("readonly","readonly");
	$("#inputpassport3").attr("readonly","readonly");
	$("#inputotherCertificate3").attr("readonly","readonly");
	$("#inputcertificateIdnum3").attr("title","这里是第三位受让人的身份证号码，如需更改请拨打95533");
	$("#inputpassport3").attr("title","这里是第三位受让人的护照号码，如需更改请拨打95533");
	$("#inputotherCertificate3").attr("title","这里是第三位受让人的其他证件，如需更改请拨打95533");
	
	$("#firstNameCN4").attr("title","这里请填写第四位受让人的中文姓");
	$("#lastNameCN4").attr("title","这里请填写第四位受让人的中文名");
	$("#firstNameEN4").attr("disabled","disabled");
	$("#lastNameEN4").attr("disabled","disabled");
	$("#inputcertificateIdnum4").attr("readonly","readonly");
	$("#inputpassport4").attr("readonly","readonly");
	$("#inputotherCertificate4").attr("readonly","readonly");
	$("#inputcertificateIdnum4").attr("title","这里是第四位受让人的身份证号码，如需更改请拨打95533");
	$("#inputpassport4").attr("title","这里是第四位受让人的护照号码，如需更改请拨打95533");
	$("#inputotherCertificate4").attr("title","这里是第四位受让人的其他证件，如需更改请拨打95533");
	
	$("#firstNameCN5").attr("title","这里请填写第五位受让人的中文姓");
	$("#lastNameCN5").attr("title","这里请填写第五位受让人的中文名");
	$("#firstNameEN5").attr("disabled","disabled");
	$("#lastNameEN5").attr("disabled","disabled");
	$("#inputcertificateIdnum5").attr("readonly","readonly");
	$("#inputpassport5").attr("readonly","readonly");
	$("#inputotherCertificate5").attr("readonly","readonly");
	$("#inputcertificateIdnum5").attr("title","这里是第五位受让人的身份证号码，如需更改请拨打95533");
	$("#inputpassport5").attr("title","这里是第五位受让人的护照号码，如需更改请拨打95533");
	$("#inputotherCertificate5").attr("title","这里是第五位受让人的其他证件，如需更改请拨打95533");
	
	$("#firstNameCN6").attr("title","这里请填写第六位受让人的中文姓");
	$("#lastNameCN6").attr("title","这里请填写第六位受让人的中文名");
	$("#firstNameEN6").attr("disabled","disabled");
	$("#lastNameEN6").attr("disabled","disabled");
	$("#inputcertificateIdnum6").attr("readonly","readonly");
	$("#inputpassport6").attr("readonly","readonly");
	$("#inputotherCertificate6").attr("readonly","readonly");
	$("#inputcertificateIdnum6").attr("title","这里是第六位受让人的身份证号码，如需更改请拨打95533");
	$("#inputpassport6").attr("title","这里是第六位受让人的护照号码，如需更改请拨打95533");
	$("#inputotherCertificate6").attr("title","这里是第六位受让人的其他证件，如需更改请拨打95533");
	
	$("#firstNameCN7").attr("title","这里请填写第七位受让人的中文姓");
	$("#lastNameCN7").attr("title","这里请填写第七位受让人的中文名");
	$("#firstNameEN7").attr("disabled","disabled");
	$("#lastNameEN7").attr("disabled","disabled");
	$("#inputcertificateIdnum7").attr("readonly","readonly");
	$("#inputpassport7").attr("readonly","readonly");
	$("#inputotherCertificate7").attr("readonly","readonly");
	$("#inputcertificateIdnum7").attr("title","这里是第七位受让人的身份证号码，如需更改请拨打95533");
	$("#inputpassport7").attr("title","这里是第七位受让人的护照号码，如需更改请拨打95533");
	$("#inputotherCertificate7").attr("title","这里是第七位受让人的其他证件，如需更改请拨打95533");
	
	$("#firstNameCN8").attr("title","这里请填写第八位受让人的中文姓");
	$("#lastNameCN8").attr("title","这里请填写第八位受让人的中文名");
	$("#firstNameEN8").attr("disabled","disabled");
	$("#lastNameEN8").attr("disabled","disabled");
	$("#inputcertificateIdnum8").attr("readonly","readonly");
	$("#inputpassport8").attr("readonly","readonly");
	$("#inputotherCertificate8").attr("readonly","readonly");
	$("#inputcertificateIdnum8").attr("title","这里是第八位受让人的身份证号码，如需更改请拨打95533");
	$("#inputpassport8").attr("title","这里是第八位受让人的护照号码，如需更改请拨打95533");
	$("#inputotherCertificate8").attr("title","这里是第八位受让人的其他证件，如需更改请拨打95533");
}

//测试是否含有特殊符号方法
function check_mark(value,title) {
	var pattern = new RegExp("[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]");
		for (var i = 0; i < value.length; i++) {
			if(pattern.test(value.substr(i,1))){
				alert(title+"中请不要输入特殊符号");
			    return false;
			}
		}
		return true;
	}