$(function(){
	
	$(".flight-link").remove();
	
	$("#common-passengers").remove();
	
	$("td").removeAttr("width");
	
	$("table").removeAttr("width");
	
//	$(".summary-sub").attr("rules","rows");
	
	var div='<div class="hbxx"></div>';

	$(".flight-info-left").before(div);
	
	var img='<img src="csair/img/plant.png"></img>';
	
	var span='<span>航班信息</span>';
	
	$(".hbxx").html(img+span);

	var timeimg='<img id="timeimg" src="csair/img/time.png"></img>';

	$(".flight-city").before(timeimg);

	$(".flight-city").attr("style","color:#00BBFF;");
	
	$(".flight-date").attr("style","color:#00BBFF;");
})