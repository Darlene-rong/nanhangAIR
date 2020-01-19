$(function() {
	getSearchInfo();
});
/********************使用cookie**************************************/
function setSearchInfo(page){
	
	var cfcs=$("#cfcs").val();
	var ddcs=$("#ddcs").val();

	var cfcsZH=$("#cfcs option:selected").text().replace(/[\w\W]*(\[)/gi,"").slice(0,-1);
	var ddcsZH=$("#ddcs option:selected").text().replace(/[\w\W]*(\[)/gi,"").slice(0,-1);

	var hbyear = $("#year").val();
	var hbmonth = $("#month").val();
	var hbday = $("#day").val();
  //是否为返程
  var isFancheng ="false";
  if($("#fancheng").hasClass("active")){
    isFancheng = "true";
  }
  $.cookie('isFancheng', isFancheng);
 if(isFancheng=="true"){
    var year2 = $("#year2").val();
    var month2 = $("#month2").val();
    var day2 = $("#day2").val();
    $.cookie('year2', year2);
    $.cookie('month2', month2); 
    $.cookie('day2', day2);
 }
  
  var startType ="国内";
  var endType ="国内";
  if($("input[name='departure']:checked").val()=="国际"){
    startType = "国际"
  }
  if($("input[name='arrive']:checked").val()=="国际"){
    endType = "国际"
  }
  $.cookie('startType', startType);
  $.cookie('endType', endType);
  
	if(page == 1){
		var adult = $("#adult").val();
		var child = $("#child").val();
		var infant = $("#infant").val();
		$.cookie('adult', adult);
		$.cookie('child', child); 
		$.cookie('infant', infant);
	}
	if(page == 2){
		$.cookie('adult', $.cookie('adult')||1);
		$.cookie('child', $.cookie('child')||0); 
		$.cookie('infant', $.cookie('infant')||0); 
	}
	$.cookie('cfcs', cfcs); 
	$.cookie('ddcs', ddcs); 
	$.cookie('cfcsZH', cfcsZH);
	$.cookie('ddcsZH', ddcsZH); 
	$.cookie('hbyear', hbyear);
	$.cookie('hbmonth', hbmonth); 
	$.cookie('hbday', hbday); 
}
function getSearchInfo(){
	var adult = $.cookie("adult");
	
	if(adult != "undefined" ){
		
		var isFancheng = $.cookie("isFancheng");
		var child = $.cookie("child");
		var infant = $.cookie("infant");
		var cfcs = $.cookie("cfcs");
		var ddcs = $.cookie("ddcs");
		var hbyear = $.cookie("hbyear");
		var hbmonth = $.cookie("hbmonth");
		var hbday = $.cookie("hbday");
    var startType = $.cookie('startType');
    var endType = $.cookie('endType');
		var year2 = $.cookie("year2");
		var month2 = $.cookie("month2");
		var day2 = $.cookie("day2");
    
//		alert(hbyear+"  "+hbmonth+"  "+hbday)

		$("#adult").find("option:contains("+adult+")").attr("selected",true);
		$("#child").find("option:contains("+child+")").attr("selected",true);
		$("#infant").find("option:contains("+infant+")").attr("selected",true);
    
		
    if(startType=="国际"){
      $("input[name='departure'][value='国际']").attr("checked",true).trigger("change")
    }
    if(endType=="国际"){
      $("input[name='arrive'][value='国际']").attr("checked",true).trigger("change")
    }
    
    $("#cfcs").find("option[value="+cfcs+"]").attr("selected",true);
    $("#ddcs").find("option[value="+ddcs+"]").attr("selected",true);
/*    
		if(cfcs == 'SWA'){
			alert(1)
			$("#cfcs").find("option[mark=JY]").attr("selected",true);
		}else{
			$("#cfcs").find("option[value="+cfcs+"]").attr("selected",true);
		}
		if(ddcs == 'SWA'){
			$("#ddcs").find("option[mark=JY]").attr("selected",true);
		}else{
			$("#ddcs").find("option[value="+ddcs+"]").attr("selected",true);
		} */

		$("#year").find("option:contains("+hbyear+")").attr("selected",true).trigger("change");
		$("#month").find("option:contains("+hbmonth+")").attr("selected",true).trigger("change");
		$("#day").find("option:contains("+hbday+")").attr("selected",true).trigger("change");		
    
    //isFancheng
    if(isFancheng=="true"){
      $("#fancheng").trigger("click");
      $("#year2").find("option:contains("+year2+")").attr("selected",true).trigger("change");
      $("#month2").find("option:contains("+month2+")").attr("selected",true).trigger("change");
      $("#day2").find("option:contains("+day2+")").attr("selected",true).trigger("change");		
    }

	}
}

