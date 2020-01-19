$(function(){
	var href = $("#href").val();
	if(href.indexOf("http://www.csair.com/cn/tourguide/booking/static") > -1){
		$("#country").attr("title","请选择地区或国家");
		$("#cname_city1").attr("title","请选择城市");
		$("#sumbitthis").attr("title","搜索按钮");
	}else if(href.indexOf("http://www.csair.com/cn/tourguide/booking/orders/order/dianzhikepiaobaoxiaofapiao/") > -1){
		$("#city_options").attr("title","电子商务柜台城市选择");
	}else if(href.indexOf("http://www.csair.com/cn/tourguide/booking/shouquandailishang/") > -1){
		$("#cname_city7").attr("title","南航授权代理商，请填写城市");
		$("#selvalue").attr("title","请填写代理关键字");
		$("#sumbitto").attr("title","搜索按钮 ");
	}else if(href.indexOf("http://www.csair.com/cn/about/investor/yejibaogao/") > -1){
		$("#report-tab a").on("click",function(){
			$("#report-tab li").each(function(){
				$(this).attr("class","");
			})
			$(this).parent().attr("class","current");
			var data_id = $(this).attr("data-id");
			$("#report-list li").each(function(){
				$(this).attr("style","display:none;")
			})
			var data_id_text = $("#report-list  ."+data_id).text().trim();
			if(data_id_text == ""){
				$("#report-list .news-items").attr("style","display:block;");
			}else{
				$("#report-list  ."+data_id).attr("style","display:inline-block;")
			}
		})
	}else if(href.indexOf("http://www.csair.com/cn/about/investor/email-subscription-centre/") > -1){
		$(".mail-list").remove();
		$("#email-submit").attr("type","button");
		$("#emailNo").attr("title","请填写电子邮箱号");
		$("#m-status").attr("title","请选择您的订阅身份，个人或者公司");
		$("#firstName").attr("title","请填写您的名，不包含姓");
		$("#lastName").attr("title","请填写您的姓氏");
		$("#vocation").attr("title","请选择您的职业");
		$("#country").attr("title","请选择您的国家");
		$("#email-submit").attr("title","提交按钮");
		$("#email-reset").attr("title","取消按钮");
	}else if(href.indexOf("http://www.csair.com/cn/tourguide/before_ready/destination") > -1){
		$(".city-item-list li").each(function(){
			var text = $(this).text();
			var str = "<a href='javascript:void(0);'>"+text+"</a>";
			$(this).html(str);
		})
	}
	
	$(".hide").attr("style","display:none;");
	
	removeOnFocus();//去除a链接中的onfocus事件
	countryChange();//机票预订-各地服务点变更国家
	searchServicePoint();//机票预订-各地服务点搜索
	
	cityOnFocus();//机票预订-南航授权代理商 城市input焦点
	cityOnBlur();//机票预订-南航授权代理商 城市input焦点移出
	selOnFocus();//机票预订-南航授权代理商 代理关键字/结算号input焦点
	selOnBlur();//机票预订-南航授权代理商 代理关键字/结算号input焦点移出
	searchAgent();//机票预订-南航授权代理商 搜索
	
	city_itemClick();//出行准备-目的地信息 点击每个城市内的项目
	
	zhijitimelist();//办理值机中的值机时间表默认显示
	guoneitimelist();//办理值机中的值机时间表默认显示
	guojitimelist();//办理值机中的值机时间表默认显示
	
	changeALink();//机场服务-航延服务指南中的其他国内机场链接需要改变
	linkVideo();//视频链接处理
	airportServiceCityChange();//机场服务-电子商务柜台城市变更
	
	removeP_transfers();//中转服务-广州枢纽服务中心p去除
	
	news_year_chosenInit();//关于南航-投资者关系-列表“年选择栏”初始化
	news_year_chosen();//关于南航-投资者关系-列表“年选择栏”点击事件
	csairPagesClick();//关于南航-投资者关系-列表页号选择
	
	submitEmail();//关于南航-投资者关系-电邮订阅中心提交
	
	tableChooseClick();//关于南航-投资者关系-财务总览表格选择
	
	$("a.spearlLink").click(function(){
		var href = $(this).attr("data");
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		window.location.href="cxbz_clickA?href="+href;
	})
	
	aTitle();
	
	
	
})

function removeOnFocus(){
	$("a").removeAttr("onfocus");
}

function countryChange(){
	$("#country").on("change",function(){
		var country = $("#country").val();
		var timestamp=new Date().getTime();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url:'countryChange?'+timestamp,
			type:'GET',
			data:{"country":country},
			dataType:"html",
			sync: false,
			success:function(data){
				$("#cname_city1").html(data);
				aTitle();
				removeOnFocus();
			}
		});	
	})
}
function searchServicePoint(){
	$("#sumbitthis").on("click",function(){
		var country = $("#country").val();
		var city = $("#cname_city1").val();
		var timestamp=new Date().getTime();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url:'searchServicePoint?'+timestamp,
			type:'GET',
			data:{
				"country":country,
				"city":city
				},
			dataType:"html",
			sync: false,
			success:function(data){
				$("#result").html(data);
				aTitle();
				removeOnFocus();
			}
		});	
	})
}

function cityOnFocus(){
	$("#cname_city7").on("focus",function(){
		var cityValue = $("#cname_city7").val();
		if(cityValue == "全拼/简拼/汉字"){
			$("#cname_city7").attr("value","");
		}
	})
}
function cityOnBlur(){
	$("#cname_city7").on("blur",function(){
		var cityValue = $("#cname_city7").val();
		if(cityValue == ""){
			$("#cname_city7").attr("value","全拼/简拼/汉字");
		}
	})
}

function selOnFocus(){
	$("#selvalue").on("focus",function(){
		var selValue = $("#selvalue").val().trim();
		if(selValue == "请输入关键字或结算号"){
			$("#selvalue").attr("value","");
		}
	})
}
function selOnBlur(){
	$("#selvalue").on("blur",function(){
		var selValue = $("#selvalue").val();
		if(selValue == ""){
			$("#selvalue").attr("value","请输入关键字或结算号");
		}
	})
}
function searchAgent(){
	$("#cname_city7").focus();
	$("#sumbitto").on("click",function(){
		var cityValue = $("#cname_city7").val();
		var cityValueCheck = check_mark(cityValue,"城市");
		if(cityValueCheck == false){
			return;
		}
		var selValue = $("#selvalue").val().trim();
		if(selValue == "请输入关键字或结算号" || selValue == ""){
			alert("请输入关键字或结算号");
			return;
		}
		var selValueCheck = check_mark(selValue,"关键字或结算号");
		if(selValueCheck == false){
			return;
		}
		var selectValue = $("#sel").val();
		var timestamp=new Date().getTime();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url:'searchAgent?'+timestamp,
			type:'GET',
			data:{
				"cityValue":cityValue,
				"selValue":selValue,
				"selectValue":selectValue
				},
			dataType:"html",
			sync: false,
			success:function(data){
				$("#result").html(data);
				$("#cname_city7").focus();
				aTitle();
				removeOnFocus();
			}
		});	
	})
}

function city_itemClick(){
	$("#tab li").on("click",function(){
		$("#tab li").each(function(i){
			$("#tab li").attr("class","");
		})
		$(this).attr("class","current");
		var index = $(this).index();
		
		$("#htmlpage .destinationpart").each(function(i){
			$("#htmlpage .destinationpart").attr("style","display:none;")
		})
		$("#htmlpage .destinationpart").eq(index).attr("style","display:block;")
	})
}

function zhijitimelist(){
	$("#zhijitimelist").attr("style","display: table;")
}
function guoneitimelist(){
	$("#guoneitimelist").attr("style","display: table;")
}
function guojitimelist(){
	$("#guojitimelist").attr("style","display: table;")
}

function changeALink(){
	var data = $(".check-in-list li a").eq(1).attr("data");
	if(data == "http://www.csair.com/cn/tourguide/airport_service/delay_guide/domestic_airport/"){
		$(".check-in-list li a").eq(1).attr("href",data);
		$(".check-in-list li a").eq(1).attr("data","");
		$(".check-in-list li a").eq(1).attr("class","");
	}
}

function linkVideo(){
	var data = $(".form-con-list a").each(function(){
		var data = $(this).attr("data");
		if(data !=undefined && data.indexOf("video")>-1){
			$(this).attr("href",data);
			$(this).attr("data","");
			$(this).removeClass();
		}
	})
	
}

function airportServiceCityChange(){
	$("#city_options").on("change",function(){
		var city = $("#city_options").val();
		var timestamp=new Date().getTime();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url:'airportServiceCityChange?'+timestamp,
			type:'POST',
			data:{"city":city},
			dataType:"json",
			sync: false,
			success:function(data){
				$("#current_city").text(data.current_city);
				$("#city_list").remove();
				$(".form-con").eq(0).append(data.city_list);
			}
		});
	})
}

function removeP_transfers(){
	$("p").each(function(){
		var pText = $(this).text();
		if(pText.indexOf("广州中转休息室盛大开业")>-1){
			$(this).remove();
		}
	})
}

function news_year_chosenInit(){
	$(".chosen-drop").attr("style","display:none;");
	$(".chosen-single").attr("href","javascript:void(0)");
	$(".chosen-single").attr("tabindex","0");
	$(".chosen-search").remove();
}

function news_year_chosen(){
	$("#news_year_chosen").on("click",function(){
		var style = $(".chosen-drop").attr("style");
		var left = $(".chosen-drop").css("left");
		if(style == "display:none;"){
			$("#news_year_chosen").addClass("chosen-with-drop");
			$(".chosen-drop").attr("style","display:block;");
			$(".chosen-drop").css("left","0px");
		}else{
			$("#news_year_chosen").removeClass("chosen-with-drop");
			$(".chosen-drop").attr("style","display:none;");
		}
	})
}

function csairPagesClick(){
	$("#pagesDiv a").on("click",function(){
		var a_class = $(this).attr("class");
		if(a_class.indexOf("current")<0){
			var page = $(this).text().trim();
			var href = $("#href").val();
			var timestamp=new Date().getTime();
			$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
			reader.voicePrompt.play("/iac/csair/mp3/ymjz");
			timedCount();
			$.ajaxSetup({ cache:false });
			$.ajax({
				url:'csairPagesClick?'+timestamp,
				type:'GET',
				data:{
					"href":href,
					"page":page
					},
				dataType:"html",
				sync: false,
				success:function(data){
					$("#Content").html(data);
					aTitle();
					removeOnFocus();
					csairPagesClick();
					$.unblockUI();
					reader.stopAll();
				}
			});	
		}
		
	})
}


function submitEmail(){
	$("#email-submit").on("click",function(){
		var emailNo = $("#emailNo").val();
		var checkEmail = cE_mail(emailNo);
		if(checkEmail == false){
			return;
		}
		var m_status = $("#m-status").val();
		if(m_status == ""){
			alert("请选择个人/公司！");
			return;
		}
		var firstName = $("#firstName").val();
		if(firstName == ""){
			alert("请填写名！")
			return;
		}
		var checkFirstName = check_mark(firstName,"名");
		if(checkFirstName == false){
			return;
		}
		var lastName = $("#lastName").val();
		if(lastName == ""){
			alert("请填写姓氏！")
			return;
		}
		var checkLastName = check_mark(lastName,"姓氏");
		if(checkLastName == false){
			return;
		}
		var vocation = $("#vocation").val();
		if(vocation == ""){
			alert("请选择职业！")
			return;
		}
		var country = $("#country").val();
		if(country == ""){
			alert("请选择国家！");
			return;
		}
		
		$.ajax({
			url:'submitEmail',
			type:'POST',
			data:{
				"emailNo":emailNo,
				"m_status":m_status,
				"firstName":firstName,
				"lastName":lastName,
				"vocation":vocation,
				"country":country
			},
			dataType:"json",
			sync: false,
			success:function(data){
				alert(data.notice);
			}
		});
	})
}

function tableChooseClick(){
	$("#fin li").on("click",function(){
		var li_class =  $(this).attr("class");
		if(li_class != undefined && li_class != ""){
			return;
		}
		var data_href = $(this).attr("data-href");
		var timestamp=new Date().getTime();
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		$.ajaxSetup({ cache:false });
		$.ajax({
			url:'tableChooseClick?'+timestamp,
			type:'GET',
			data:{
				"data_href":data_href
			},
			dataType:"html",
			sync: false,
			success:function(data){
				$("#Content").html(data);
				aTitle();
				removeOnFocus();
				tableChooseClick();
				spearlLinkClick();
				$.unblockUI();
				reader.stopAll();
				$("#fin li ").each(function(i){
					var data_href1 = $("#fin li").eq(i).attr("data-href");
					if(data_href1 == data_href){
						$("#fin li a").eq(i).focus();
						return;
					}
				})
			}
		});	
	})
}

//a链接点击
function spearlLinkClick(){
	$("a.spearlLink").click(function(){
		var href = $(this).attr("data");
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		window.location.href="cxbz_clickA?href="+href;
	})
}

//链接加title属性
function aTitle(){
	$("a").each(function(){
		var aText = $(this).text();
		$(this).attr("title",aText);
	})
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

//邮箱校验cx20170915
function cE_mail(e_mail) {
	if (e_mail.length != 0) {
		if (!isEmail(e_mail)) {
			alert("邮箱格式错误");
			return false;
		} else {
			//$("#errorTips").html("");
		}
	}else {
		alert("邮箱不能为空!");
		return false;
	}
	return true;
}
//邮箱校验
function isEmail(strEmail) {
	var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	if (emailReg.test(strEmail)) {
		//符合规则
		return true;
	} else {
		return false;
	}
}






