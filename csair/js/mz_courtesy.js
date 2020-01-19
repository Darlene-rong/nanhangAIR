$(function(){
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			mz_courtesyPage();
		}
	}, 10);	
})

//点击明珠礼遇
function mz_courtesyPage(){
	var timestamp=new Date().getTime();
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'mz_courtesyPage?'+timestamp,
		type:'GET',
		dataType:"html",
		sync: false,
		success:function(data){
			$("#Content").html(data);
			$("#title").remove();
			$(".five").remove();
			init();
			$.unblockUI();
			reader.stopAll();
		}
	});	
}



function init(){
	$("#Content a").attr("href","##");
	$(".scrollUl li").children("p").each(function(i){
		var text = $(".scrollUl li p")[i].innerHTML;
		var p1 = $(".scrollUl li p")[i].outerHTML;
		var p1a = "<a href='##' title='"+text+"'>"+p1+"</a>";
		$(this).parent().html(p1a);
	})
	$(".scrollUl01 li").children("p").each(function(i){
		var text = $(".scrollUl01 li p")[i].innerHTML;
		var p1 = $(".scrollUl01 li p")[i].outerHTML;
		var p1a = "<a href='##' title='"+text+"'>"+p1+"</a>";
		$(this).parent().html(p1a);
	})
	$(".scrollUl02 li").children("p").each(function(i){
		var text = $(".scrollUl02 li p")[i].innerHTML;
		var p1 = $(".scrollUl02 li p")[i].outerHTML;
		var p1a = "<a href='##' title='"+text+"'>"+p1+"</a>";
		$(this).parent().html(p1a);
	})
	$(".scrollUl022 li").children("p").each(function(i){
		var text = $(".scrollUl022 li p")[i].innerHTML;
		var p1 = $(".scrollUl022 li p")[i].outerHTML;
		var p1a = "<a href='##' title='"+text+"'>"+p1+"</a>";
		$(this).parent().html(p1a);
	})
	$(".scrollUl03 li").children("p").each(function(i){
		var text = $(".scrollUl03 li p")[i].innerHTML;
		var p1 = $(".scrollUl03 li p")[i].outerHTML;
		var p1a = "<a href='##' title='"+text+"'>"+p1+"</a>";
		$(this).parent().html(p1a);
	})
	$(".scrollUl04 li").children("p").each(function(i){
		var text = $(".scrollUl04 li p")[i].innerHTML;
		var p1 = $(".scrollUl04 li p")[i].outerHTML;
		var p1a = "<a href='##' title='"+text+"'>"+p1+"</a>";
		$(this).parent().html(p1a);
	})
	$(".scrollUl05 li").children("p").each(function(i){
		var text = $(".scrollUl05 li p")[i].innerHTML;
		var p1 = $(".scrollUl05 li p")[i].outerHTML;
		var p1a = "<a href='##' title='"+text+"'>"+p1+"</a>";
		$(this).parent().html(p1a);
	})
	
	var qjDivSize = $(".qj>div").length;
	$(".scrollUl li").click(function(){
		var $this = $(this);
		var $thisId = $this.attr("id");
		var liIdEnd = $thisId.substring($thisId.length-2,$thisId.length);
		$(".scrollUl li").each(function(i){
			$(this).attr("class","st02");
		})
		$this.attr("class","st01");
		for(var i = 1;i < qjDivSize-1;i++){
			$(".qj>div").eq(i).attr("style","display:none;");
			var qjDivId = $(".qj>div").eq(i).attr("id");
			var qjDivIdEnd = qjDivId.substring(qjDivId.length-2,qjDivId.length);
			if(qjDivIdEnd == liIdEnd){
				$(".qj>div").eq(i).attr("style","display:block;");
			}

		}
	})
	
	var c1DivSize = $("#c1_1>div").length;
	$(".scrollUl01 li").click(function(){
		var $this = $(this);
		var $thisId = $this.attr("id");
		var liIdEnd = $thisId.substring($thisId.length-2,$thisId.length);
		$(".scrollUl01 li").each(function(i){
			$(this).attr("class","st0202");
		})
		$this.attr("class","st0102");
		for(var i = 1;i < c1DivSize;i++){
			$("#c1_1>div").eq(i).attr("style","display:none;");
			var c1DivId = $("#c1_1>div").eq(i).attr("id");
			var c1DivIdEnd = c1DivId.substring(c1DivId.length-2,c1DivId.length);
			if(c1DivIdEnd == liIdEnd){
				$("#c1_1>div").eq(i).attr("style","display:block;");
			}
			
		}
	})
	
	var c2DivSize = $("#c1_2>div").length;
	$(".scrollUl02 li").click(function(){
		var $this = $(this);
		var $thisId = $this.attr("id");
		var liIdEnd = $thisId.substring($thisId.length-2,$thisId.length);
		$(".scrollUl02 li").each(function(i){
			$(this).attr("class","st0202");
		})
		$this.attr("class","st0102");
		for(var i = 1;i < c2DivSize;i++){
			$("#c1_2>div").eq(i).attr("style","display:none;");
			var c2DivId = $("#c1_2>div").eq(i).attr("id");
			var c2DivIdEnd = c2DivId.substring(c2DivId.length-2,c2DivId.length);
			if(c2DivIdEnd == liIdEnd){
				$("#c1_2>div").eq(i).attr("style","display:block;");
			}
		}
	})
	
	var c22DivSize = $("#c1_22>div").length;
	$(".scrollUl022 li").click(function(){
		var $this = $(this);
		var $thisId = $this.attr("id");
		var liIdEnd = $thisId.substring($thisId.length-2,$thisId.length);
		$(".scrollUl022 li").each(function(i){
			$(this).attr("class","st0206");
		})
		$this.attr("class","st0106");
		for(var i = 1;i < c22DivSize;i++){
			$("#c1_22>div").eq(i).attr("style","display:none;");
			var c22DivId = $("#c1_22>div").eq(i).attr("id");
			var c22DivIdEnd = c22DivId.substring(c22DivId.length-2,c22DivId.length);
			if(c22DivIdEnd == liIdEnd){
				$("#c1_22>div").eq(i).attr("style","display:block;");
			}
		}
	})
	
	var c3DivSize = $("#c1_3>div").length;
	$(".scrollUl03 li").click(function(){
		var $this = $(this);
		var $thisId = $this.attr("id");
		var liIdEnd = $thisId.substring($thisId.length-2,$thisId.length);
		$(".scrollUl03 li").each(function(i){
			$(this).attr("class","st0203");
		})
		$this.attr("class","st0103");
		for(var i = 1;i < c3DivSize;i++){
			$("#c1_3>div").eq(i).attr("style","display:none;");
			var c3DivId = $("#c1_3>div").eq(i).attr("id");
			var c3DivIdEnd = c3DivId.substring(c3DivId.length-2,c3DivId.length);
			if(c3DivIdEnd == liIdEnd){
				$("#c1_3>div").eq(i).attr("style","display:block;");
			}
		}
	})
	
	var c4DivSize = $("#c1_4>div").length;
	$(".scrollUl04 li").click(function(){
		var $this = $(this);
		var $thisId = $this.attr("id");
		var liIdEnd = $thisId.substring($thisId.length-2,$thisId.length);
		$(".scrollUl04 li").each(function(i){
			$(this).attr("class","st0204");
		})
		$this.attr("class","st0104");
		for(var i = 1;i < c4DivSize;i++){
			$("#c1_4>div").eq(i).attr("style","display:none;");
			var c4DivId = $("#c1_4>div").eq(i).attr("id");
			var c4DivIdEnd = c4DivId.substring(c4DivId.length-2,c4DivId.length);
			if(c4DivIdEnd == liIdEnd){
				$("#c1_4>div").eq(i).attr("style","display:block;");
			}
		}
	})
	
	var c5DivSize = $("#c1_5>div").length;
	$(".scrollUl05 li").click(function(){
		var $this = $(this);
		var $thisId = $this.attr("id");
		var liIdEnd = $thisId.substring($thisId.length-2,$thisId.length);
		$(".scrollUl05 li").each(function(i){
			$(this).attr("class","st0205");
		})
		$this.attr("class","st0105");
		for(var i = 1;i < c5DivSize;i++){
			$("#c1_5>div").eq(i).attr("style","display:none;");
			var c5DivId = $("#c1_5>div").eq(i).attr("id");
			var c5DivIdEnd = c5DivId.substring(c5DivId.length-2,c5DivId.length);
			if(c5DivIdEnd == liIdEnd){
				$("#c1_5>div").eq(i).attr("style","display:block;");
			}
		}
	})
	
}