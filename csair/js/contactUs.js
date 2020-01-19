$(function(){
	$("#service a").focus();
})
function service(){
	var href = "http://www.csair.com/cn/contactus/service/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
function call(){
	var href = "http://www.csair.com/cn/contactus/call/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
function skypearl(){
	var href = "http://www.csair.com/cn/contactus/skypearl/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
function gnxsjg(){
	var href = "http://www.csair.com/cn/tourguide/booking/static/gnxsjg/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
function other(){
	var href = "http://www.csair.com/cn/contactus/other/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
