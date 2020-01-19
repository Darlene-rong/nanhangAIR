$(function() {
	
	$("#c1").focus;
	$(".city-section").each(function(){
		$(this).display("none");
	})
	
	 $(".citieslist1 div div a").each(function(){
			$(this).gettext(obj);
	})
	
	$("ul[name='arrive']").hide();
	$("li.send").hide();
	$("li.arrive").hide();

	 //键盘按键弹起时执行
	$("#c1").keyup(function(){
	    var index = $.trim($("#c1").val().toString()); // 去掉两头空格
	    if(index == ''){ // 如果搜索框输入为空
			$(".ui-city-area-0").show();
			$("li.send").show();
	        return false;
	    }
		$("ul[name='send']").show();
		$("li.send")    
		.hide()    
		.filter(":contains('"+index+"')")    
		.show();  
	    var parent = $("ul[name='send']");
	    $("li.send").removeClass('on');
	    //选择包含文本框值的所有加上focus类样式，并把它（们）移到ul的最前面
	    // prependTo() 方法在被选元素的开头（仍位于内部）插入指定内容
	    // contains 选择器，选取包含指定字符串的元素
	    $("li.send:contains('"+index+"')").prependTo(parent).addClass('on');
	    $("p.send:contains('"+index+"')").parent().prependTo(parent).addClass('on');
	});

		 //键盘按键弹起时执行
	 $("#c2").keyup(function(){
	    var index1 = $.trim($("#c2").val().toString()); // 去掉两头空格
	    if(index1 == ""){ // 如果搜索框输入为空
	        $("li.arrive").removeClass('on');
			$("ul[name='arrive']").show();
			$("li.arrive").show();
	        return false;
	    }
		$("ul[name='arrive']").show();
		$("li.arrive")    
		.hide()    
		.filter(":contains('"+index1+"')")    
		.show();  
	    var parent = $("ul[name='arrive']");
	    $("li").removeClass('on');
	    //选择包含文本框值的所有加上focus类样式，并把它（们）移到ul的最前面
	    // prependTo() 方法在被选元素的开头（仍位于内部）插入指定内容
	    // contains 选择器，选取包含指定字符串的元素
	    $("li.arrive:contains('"+index1+"')").prependTo(parent).addClass('on');
	    $("p.arrive:contains('"+index1+"')").parent().prependTo(parent).addClass('on');
	});
	
	 
	
	
	
	$(".detail-trigger").remove();
	
//	$(".sp-trip-stops").html("到");
//	$(".sp-trip-duration").html("");
	
	$(".sp-trip-stops").each(function(){
		var num = $(this).text();
		$(this).html("航班号:" + num);	
	})
	
	$(".sp-trip-city").removeAttr("title");
	
//	$(".detail-trigger").remove();
//	$("input[type='radio']").click(function(){
//		alert($(this).prev().html());
//		var href = $(this).parent().parent().parent().parent().find("li[otype='button']").attr('href');
//		var ul = $(this).parent().parent().parent().parent().parent();
//		var li = $(this).parent().parent().parent().parent()
//		alert(ul.html());
//		$.ajax({
//			url : 'getLi',
//			type : 'POST',
//			sync : true,
//			data : {
//				'href' : href
//			},
//			success : function(data) {
//				alert(data);
////				li.children().find("li:last").remove();
//				cleanLi();
//				li.append(data);
//				buyButton();
//				
//				
//			},
//			error : function() {
//			}
//		});		
//	});
	
	
	
	
	$("li[otype='button']").click(function(){
//		var name = $(this).find("input[type='radio']").attr("name");
//		alert(name);
//		$("input[type='radio']").attr("checked", false);
		var href = $(this).attr('href');
		var li = $(this).parent();
//		$(this).children().children().children().find("input[type='radio']").attr("checked", "true");
		$.ajax({
			url : 'getLi',
			type : 'POST',
			sync : true,
			data : {
				'href' : href
			},
			success : function(data) {
				li.find("li:last").remove();
				cleanLi();
				li.append(data);
				$(".ca-de-label").remove();
				$(".rcd-arrow-down").remove();
				$(".recommend").remove();
				buyButton();
				
				
			},
			error : function() {
			}
		});
		
	});
})

function buyButton() {
	$("a[otitle='预订流程-航班选择-预订']").bind("click", function() {
		var href = $(this).attr("href").substring(1);
		window.location.href = "buyButton?href=" + href + "";
//		$.ajax({
//			url : 'getBuyButton',
//			type : 'POST',
//			sync : true,
//			data : {
//				'href' : href
//			},
//			success : function(data) {
//				window.location.href = "addPassenger.jsp";
//			},
//			error : function() {
//			}
//		});		
	});
}

function cleanLi(){
	$(".sp-trip-detail").html("");
}
function init() {
	document.getElementById("c1").focus();
}
function gettext1(obj) {
		document.getElementById('c1').value=obj.innerText;
		$("ul[name='send']").hide();
}
function gettext1(obj) {
	document.getElementById('c2').value=obj.innerText;
	$("ul[name='arrive']").hide();
	}
function arriveul(){
	$("ul[name='arrive']").hide();
}
function sendul(){
	$("ul[name='send']").hide();
}