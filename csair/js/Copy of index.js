$(function() {
	
	var info=$("#userinfo");
	if(info.length==0){
		$.ajax({
			url:'prelogin',
			type:'POST',
			sync: true
		});
	}

	$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
	
	var useCities = info3LowerCase = '';
	var useCities1 = info3LowerCase = '';
	$.each(cities, function(i, jsonObj) {//循环citiesData.js中的城市
		if (jsonObj.info7 == "China") {
			if (jsonObj.info3) {
				info3LowerCase = jsonObj.info3.toLowerCase();
				info2LowerCase = jsonObj.info2.toLowerCase();
			}
			useCities += '<li class="send" value='+jsonObj.info4+' onclick="gettext(this);">'
					+ jsonObj.name + '<p class="info3">' + info3LowerCase + '</p><p class="info2">' + info2LowerCase + '</p><p class="name">' + jsonObj.name + '</p></li>';
			useCities1 += '<li class="arrive" value='+jsonObj.info4+' onclick="gettext1(this);">'
					+ jsonObj.name + '<p class="info3">' + info3LowerCase + '</p><p class="info2">' + info2LowerCase + '</p><p class="name">' + jsonObj.name + '</p></li>';
		}
	});
	$("#send").html(useCities);
	$("#arrive").html(useCities1);
	$("#arrive").addClass("arrive");
	$("#send").addClass("send");

	
	// $(".detail-trigger").remove();
	// $("input[type='radio']").click(function(){
	// alert($(this).prev().html());
	// var href =
	// $(this).parent().parent().parent().parent().find("li[otype='button']").attr('href');
	// var ul = $(this).parent().parent().parent().parent().parent();
	// var li = $(this).parent().parent().parent().parent()
	// alert(ul.html());
	// $.ajax({
	// url : 'getLi',
	// type : 'POST',
	// sync : true,
	// data : {
	// 'href' : href
	// },
	// success : function(data) {
	// alert(data);
	// // li.children().find("li:last").remove();
	// cleanLi();
	// li.append(data);
	// buyButton();
	//				
	//				
	// },
	// error : function() {
	// }
	// });
	// });
	$("#search_div_btn").click(function(){
		var c1=$("#c1").val();
		var c2=$("#c2").val();
		var cs1;
		var cs2;
		var date = $("#date").val();
		var num1 = $("#adult").val();
		var num2 = $("#child").val();
		var num3 = $("#infant").val();
		if(c1==null || c1==""){
			alert("请选择出发城市")
			return;
		}
		if(c2==null || c2==""){
			alert("请选择到达城市")
			return;
		}
		if(date==null || date==""){
			alert("请选择出发日期")
			return;
		}
		$.each(cities, function(i, jsonObj) {//循环citiesData.js中的城市
			if(c1==jsonObj.name){
				cs1=jsonObj.info4;
			}
			if(c2==jsonObj.name){
				cs2=jsonObj.info4;
			}
		})
		
		$("body").empty();
		 $.blockUI({ message: "<h1>机票查询中，请耐心等候。。。</h1>" });
		window.location.href = "flightQuery?c1=" + cs1 + "&c2=" + cs2 + "&date="+ date +"&number1="+num1+"&number2="+num2+"&number3="+num3
	})
	
	
	$("#sendlist").css("display","none");
	$("#arrivelist").css("display","none");
	$("ul[name='send']").hide();
	$("ul[name='arrive']").hide();
	$("li.send").hide();
	$("li.arrive").hide();

	// 键盘按键弹起时执行
	$("#c1, #c2").keyup(function(event) {
		selFilterShow( event, $(this) );
	}).focus(function(event) {
		selFilterShow( event, $(this) );
	});
	
	// 键盘按键弹起时执行
//	$("#c2").keyup(
//			function(event) {
//				var curKey = event.which;
//				if (curKey == 13) { // 监听回车的键盘
//					return false;
//				}
//				var index1 = $.trim($("#c2").val().toString()); // 去掉两头空格
//				if (index1 == "") { // 如果搜索框输入为空
//					//$("li.arrive").removeClass('on');
//					$("#arrivelist").css("display","block");
//					$("ul[name='arrive']").show();
//					$("li.arrive").show();
//					return false;
//				}
//				$("#arrivelist").css("display","block");
//				$("ul[name='arrive']").show();
//				$("li.arrive").hide().filter(":contains('" + index1 + "')")
//						.show();
////				var parent = $("ul[name='arrive']");
////				$("li").removeClass('on');
//				// 选择包含文本框值的所有加上focus类样式，并把它（们）移到ul的最前面
//				// prependTo() 方法在被选元素的开头（仍位于内部）插入指定内容
////				// contains 选择器，选取包含指定字符串的元素
////				$("li.arrive:contains('" + index1 + "')").prependTo(parent)
////						.addClass('on');
////				$("p.arrive:contains('" + index1 + "')").parent().prependTo(
////						parent).addClass('on');
//			});
	
	
	$(document).keydown(function(event) {
		var $ele = $(":focus");
		var inputId;
		var targetId;
		var sellist;
		if( $ele.length>0 ) {
			inputId = $ele.attr("id");
			targetId = $ele.attr("target");
			sellist = $ele.attr("sellist");
		}
		var curKey = event.which;
		if (curKey == 37) { // 监听向左的键盘
			moveSel( targetId, "left" );
		} else if (curKey == 38) { // 监听向上的键盘
			moveSel( targetId, "up" );
		} else if (curKey == 39) { // 监听向右的键盘
			moveSel( targetId, "right" );
		} else if (curKey == 40) { // 监听向下的键盘
			moveSel( targetId, "down" );
		} else if (curKey == 13) { // 监听回车的键盘
			confirmChoose(sellist, targetId, inputId);
		}
	});
	
	$("#c1, #c2").on("keyup",function(event){
		if(event.which>40||event.which<37){
				$(".current").removeClass("current");
		}
	});
});

function quit(){
	window.location.href="quit";
}


function login(){
	var username=$.trim($("#username").val());
	var password=$.trim($("#password").val());
	if(username==""){
		alert("请输入手机或邮箱号");
		return;
	}
	if(password==""){
		alert("请输入密码");
		return;
	}
	$.ajax({
		url:'login',
		type:'POST',
		sync: true,
		data:{
			"username":username,
			"password":password
		},
		success:function(data){
			if(data.state=="SUCCESS"){
				alert(data.message);
				window.location.href="queryOrder";
			}else{
				alert(data.message);
			}
		},
		error :function(){
			
		}
	});
}
/**
 * 
 * @param event 事件源
 * @param $this 触发事件的jquery对象.如$this = $("#c1") 或者 $this = $("#c2")
 * @returns {Boolean}
 */
function selFilterShow(event, $this) {
	var curKey = event.which;
	if (curKey == 13) { // 监听回车的键盘
		return false;
	}
	var flag;
	var thisId = $this.attr("id");
	if(thisId=="c1") {
		flag = "send";
	} else {
		flag = "arrive";
	}
	var index = $.trim($this.val().toString()); // 去掉两头空格
	if (index == '') { // 如果搜索框输入为空
		$("#"+flag+"list").css("display","block");
		$("ul[name='"+flag+"']").show();
		$("li."+flag).show();
		return false;
	}
	$("#"+flag+"list").css("display","block");
	$("ul[name='"+flag+"']").show();
//	$("li."+flag).hide().filter(":contains('" + index + "')").show();
	$("li."+flag).hide();
	$.each($("li."+flag), function(i, li){
		var $li = $(li);
		var $quanpin = $li.find(".info2");
		var quanpinValue = $quanpin.text();
		var $shouzimu = $li.find(".info3");
		var shouzimuValue = $shouzimu.text();
		var $hanzi = $li.find(".name");
		var hanzi = $hanzi.text();
		if( quanpinValue && quanpinValue.indexOf(index)==0 ) {
			$li.show();
		} else if( shouzimuValue && shouzimuValue.indexOf(index)==0 ){
			$li.show();
		} else if( hanzi && hanzi.indexOf(index)==0 ){
			$li.show();
		}
	});

}
function moveSel( selId, direct ) {
	var perLineNum = 6; // 每行展示多少个数
	var $sel = $("#"+selId); // 根据ID获取jquery的对象
	
	var liShowArr = $sel.find("li:visible");
	var selOptionsNum = liShowArr.length; // 获取总共有多少个可选则的数
	
	var curIdx;
	$.each( liShowArr, function(i, showLi) {
		
		var $li = $(showLi);
		if( $li.hasClass("current") ) {
			curIdx = i;
			return;
		}
	});
	if( curIdx==undefined ) {
		curIdx = 0;
	}
	
	$curLi = $( liShowArr[curIdx] );
	//var $curLi = $sel.find(".current"); // 拿到当前选中的li元素
	//if( $curLi.length==0 ) { // 没有找到选中的
	//$curLi = $sel.find("li:eq(0)"); // 默认拿第一个li元素
	//}
	//var curIdx = $curLi.index(); // 当前选中的元素的下标
	
	var moveIdx;// 需要移动到第几个元素上
	if( "down"==direct ) {
		moveIdx = curIdx + perLineNum; // 向下移动，则当前选中的元素+每行展示的元素数
	} else if( "up"==direct ) {
		moveIdx = curIdx - perLineNum; // 向上移动，则当前选中的元素-每行展示的元素数
	} else if( "left"==direct ) {
		moveIdx = curIdx - 1; // 向左移动，则当前选中的元素-1
	} else if( "right"==direct ) {
		moveIdx = curIdx + 1; // 向右移动，则当前选中的元素+1
	}
	
	if( moveIdx>=selOptionsNum) { // 如果移动的下标大于数字的总数量了，则从第一个选中
		moveIdx=0;
	} else if(moveIdx<0) { // 如果移动的下标小于0，则从最后一个选中
		moveIdx = selOptionsNum-1;
	}
	
	$curLi.removeClass("current"); // 当前的选中取消
	var moveObj = liShowArr[moveIdx];
	$sel.find(moveObj).addClass("current");
	//$sel.find("li:eq("+moveIdx+")").addClass("current"); // 移动到的元素增加选中current样式
}

function confirmChoose( sellist, selId, inputId ) {
	console.log("confirmChoose-->"+selId+"---"+inputId);
	var $sel = $("#"+selId); // 根据ID获取jquery的对象
	var $selected = $sel.find(".current");
	//setTimeout(getTextElem(sellist, $selected[0], inputId), 200);
	getTextElem(sellist, $selected[0], inputId);
}
    	
function init() {
	document.getElementById("c1").focus();
}
function getTextElem(sellist, obj, inputId) {
	document.getElementById(inputId).value = obj.childNodes[0].nodeValue;
	$("#"+sellist).css("display","none");
}
function gettext(obj) {
	document.getElementById('c1').value = obj.childNodes[0].nodeValue;
	//document.getElementById('cs1').value = obj.getAttribute("value");
	//$("ul[name='send']").hide();
	$("#sendlist").css("display","none");
}
function gettext1(obj) {
	document.getElementById('c2').value = obj.childNodes[0].nodeValue;
	//document.getElementById('cs2').value = obj.getAttribute("value");
	//$("ul[name='arrive']").hide();
	$("#arrivelist").css("display","none");
}
function arriveul() {
	setTimeout(function () {
		$("#arrivelist").css("display","none");
		//$("ul[name='arrive']").hide()
	}, 200);
}
function sendul() {
	setTimeout(function () {
		$("#sendlist").css("display","none");
		//$("ul[name='send']").hide()
	}, 200);
}