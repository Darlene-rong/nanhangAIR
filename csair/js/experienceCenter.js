$(function(){
	$("#experience_video a").focus();
})
function experience_video(){
	var href = "http://www.csair.com/cn/tourguide/experience_center/video/A380/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}

function experience_beauties(){
	var href = "http://www.csair.com/cn/tourguide/experience_center/beauties/A380beauties/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}

function experience_animation(){
	var href = "http://www.csair.com/cn/tourguide/experience_center/animation/internation_internation/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}

function experience_fullview(){
	var href = "http://www.csair.com/cn/tourguide/experience_center/fullview/cabin/";
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	window.location.href="cxbz_clickA?href="+href;
}

