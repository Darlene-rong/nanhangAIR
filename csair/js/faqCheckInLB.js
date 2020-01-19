$(function(){
	$("#guidLine a").focus();
})
function guidLine(){
	var href = "http://www.csair.com/cn/tourguide/faq/check-in/guidline.shtml";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
function onlineCheckIn(){
	var href = "http://www.csair.com/cn/tourguide/faq/check-in/online-check-in.shtml";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
function kiosk(){
	var href = "http://www.csair.com/cn/tourguide/faq/check-in/kiosk.shtml";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
function smsCheckIn(){
	var href = "http://www.csair.com/cn/tourguide/faq/check-in/sms-check-in.shtml";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}
function counterCheckIn(){
	var href = "http://www.csair.com/cn/tourguide/faq/check-in/counter-check-in.shtml";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}