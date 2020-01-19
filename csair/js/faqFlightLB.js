$(function(){
	$("#inquiry a").focus();
})
function inquiry(){
	var href = "http://www.csair.com/cn/tourguide/faq/flight/inquiry.shtml";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
function codeShare(){
	var href = "http://www.csair.com/cn/tourguide/faq/flight/codeshare.shtml";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
function cancelChange(){
	var href = "http://www.csair.com/cn/tourguide/faq/flight/cancel-change.shtml";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
function ourAircraft(){
	var href = "http://www.csair.com/cn/tourguide/faq/flight/our-aircraft.shtml";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}