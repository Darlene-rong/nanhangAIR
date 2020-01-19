$(function(){
	$("#paymentNotice a").focus();
})
function paymentNotice(){
	var href = "http://www.csair.com/cn/tourguide/booking/payment/domestic_pay/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}

function servicePoint(){
	var href = "http://www.csair.com/cn/tourguide/booking/static/gnxsjg/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}

function agent(){
	var href = "http://www.csair.com/cn/tourguide/booking/shouquandailishang/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}