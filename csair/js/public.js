var baseURL="cs/";

$(function(){
	pageTimedCount();
	$("#connectioninformation").click(function(){
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
	})
	$("#basicinformation").click(function(){
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
	})
	$("#changepassword").click(function(){
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
	})
	$("#zxsfyz").click(function(){
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
	})
	$("#yhq").click(function(){
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
	})
	$("#lclj").click(function(){
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
	})
	
	//点击弹框关闭
	$(".cancelBtn").bind("click",function(){
		$.unblockUI();
	})
	
	$('#closeCheck').click(function() {
		$.unblockUI();
	});
	
	$('#closePop').click(function() {
			$.unblockUI();
		});
	
	//点击弹框的在线认证
	$(".successBtn").bind("click",function(){
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		window.location.href="preCsairOnlineIdentityAuthentication";
	})
	var browser=navigator.appName;
	var b_version=navigator.appVersion;
	var version=b_version.split(";");
	if(version[1]){
		var trim_Version=version[1].replace(/[ ]/g,"");
		if(browser=="Microsoft Internet Explorer" &&( trim_Version=="MSIE8.0"||trim_Version=="MSIE9.0")){
			var $inputt = $("input:text");
			$inputt.each(function(){
				var $this = $(this);
				var this_height = $this.height();
				$this.css("line-height",this_height+"px");
				var pt = $this.attr("placeholder");
				
				if(pt != null && pt !=""){
					$this.css("color","#c1c1c1");
					$this.val(pt).focus(function(){
						if($this.val() == pt){
							$this.val("").css("color","#000000");
						}
					}).blur(function(){
						if($this.val() == ""){
							$this.val(pt).css("color","#c1c1c1");
						}
					})
				}
			})
		} 
	}
	
	
	
	if(self==top){//未开启工具条
		//焦点跟随
		$("body").append("<div id='focus_show_top' class='focus_lineshow'></div>");
		$("body").append("<div id='focus_show_bottom' class='focus_lineshow'></div>");
		$("body").append("<div id='focus_show_left' class='focus_lineshow'></div>");
		$("body").append("<div id='focus_show_right' class='focus_lineshow'></div>");
		$(".focus_lineshow").css({"display":"none"});
		$(document).keyup(function(event){
		    var keynum = (event.keyCode ? event.keyCode : event.which);
		    if(keynum == '9'){   
		    	var e = $(document.activeElement)
		    	var x=$(e).offset();
		    	//var w=parseInt($(e).outerWidth(true));
		    	var w=parseInt($(e).outerWidth());
		    	//var h=parseInt($(e).outerHeight(true));
		    	var h=parseInt($(e).outerHeight());
		    	$("#focus_show_top").css({"z-index":"9999","border": "yellowgreen 2px solid","position": "absolute","top":(x.top-2),"left":(x.left-2),"width":(w-2),"height":"0px"});
		    	$("#focus_show_bottom").css({"z-index":"9999","border": "yellowgreen 2px solid","position": "absolute","top":(x.top+h-2),"left":(x.left-2),"width":w,"height":"0px"});
		    	$("#focus_show_left").css({"z-index":"9999","border": "yellowgreen 2px solid","position": "absolute","top":(x.top-2),"left":(x.left-2),"width":"0px","height":(h-2)});
		    	$("#focus_show_right").css({"z-index":"9999","border": "yellowgreen 2px solid","position": "absolute","top":(x.top-2),"left":(x.left+w-2),"width":"0px","height":(h-2)});
		    	$("html,body").animate({scrollTop : $("#focus_show_top").offset().top}, 200);
		    	$(".focus_lineshow").css({"display":"block"});
		    	//$("*:focus").css({"background":"#E9B"});
		    }    
		}); 
	}
	
})

function quit(){
	window.location.href="quit";
}

function pob(){
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			precsairAssigneeCtrl();
		}
	}, 10);	
		
	}
//加载明珠会员受让人管理
function precsairAssigneeCtrl(){
	$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	$.ajax({
		url : 'precsairAssigneeCtrl',
		type : 'POST',
		sync : true,
		dataType:'json',
		data : {},
		success : function(data) {
			if(data.checkmodel == true ){
				if(data.state == "SUCCESS"){
					$.unblockUI();
					reader.stopAll();
					$.blockUI({ message: $('.pop_box_div') });
					stopCount();
				}
			}
			if(data.checkmodel == false  ){
				if(data.state == "SUCCESS"){
					$.unblockUI();
					reader.stopAll();
					window.location.href="AssigneeCtrl";
				}
			}
			if(data.state == "FAIL"){
				alert("加载超时!");
				$.unblockUI();
				reader.stopAll();
			}
		},
		error : function() {
		}
	});
}

//跳转支付页面遮罩倒计时
function timedCounttopay()
{
	var suspendNode = $("#suspend").text();
	if(suspendNode == null || suspendNode == '' ){
		var suspend = "&nbsp;<a  title='点击此处可中止进程' href='index1' id='suspend'>中止当前操作，并返回首页</a>"
			$("#countdown").after(suspend);
	}
	$("#suspend").focus();
	c=$("#countdown").text();
	if(c==null||c==""){
		return;
	}
	c=c-1
	if(c==0){
		//	alert("订单已提交处理，具体情况请查询订单！")
		alert("网络速度慢订单查询失败，请重新登录查询！")
		window.location.href="index";
		return;
	}
	$("#countdown").text(c);
	setTimeout("timedCounttopay()",1100);
}

//旅客信息非登录状态跳转支付页面遮罩倒计时
function timedCounttopay1()
{
	var suspendNode = $("#suspend").text();
	if(suspendNode == null || suspendNode == ''){
		var suspend = "&nbsp;<a  title='点击此处可中止进程' href='quit1' id='suspend'>中止当前操作,并返回首页</a>"
		$("#countdown").after(suspend);
	}
	$("#suspend").focus();
	c=$("#countdown").text();
	if(c==null||c==""){
		return;
	}
	c=c-1
	if(c==0){
	//	alert("订单已提交处理，具体情况请查询订单！")
		alert("网络速度慢订单查询失败，请重新登录查询！")
		window.location.href="quit";
		return;
	}
	$("#countdown").text(c);
	setTimeout("timedCounttopay1()",1100);
}

//订单查询页面遮罩倒计时
function ordertimedCount()
{
	var suspendNode = $("#suspend").text();
	if(suspendNode == null || suspendNode == '' ){
		var suspend = "&nbsp;<a  title='点击此处可中止进程' href='index1' id='suspend'>中止当前操作，并返回首页</a>"
		$("#countdown").after(suspend);
	}
	$("#suspend").focus();
	c=$("#countdown").text();
	if(c==null||c==""){
		return;
	}
	c=c-1
	if(c==0){
		alert("网络速度慢订单查询失败，请重新登录查询！")
		window.location.href="index";
		return;
	}
	$("#countdown").text(c);
	setTimeout("ordertimedCount()",1100);
}

//遮罩倒计时
function timedCount()
{
	var suspendNode = $("#suspend").text();
	if(suspendNode == null || suspendNode == '' ){
		var suspend = "&nbsp;<a  title='点击此处可中止进程' href='javascript:indexfh()' id='suspend'>中止当前操作，并返回首页</a>"
		$("#countdown").after(suspend);
	}
	$("#suspend").focus();
	c=$("#countdown").text();
	if(c==null||c==""){
		return;
	}
	c=c-1
	if(c==0){
		window.location.href="quit";
		return;
	}
	$("#countdown").text(c);
	setTimeout("timedCount()",1100);
}
function timedCountIndex()//返回首页10秒遮罩倒计时
{
	c=$("#countdown").text();
	if(c==null||c==""){
		return;
	}
	c=c-1
	if(c==0){
		window.location.href="index";
		return;
	}
	$("#countdown").text(c);
	setTimeout("timedCountIndex()",1100);
}

//航班查询页面遮罩倒计时
function timedCountFlight()
{
	var suspendNode = $("#suspend").text();
	if(suspendNode == null || suspendNode == '' ){
		var suspend = "&nbsp;<a  title='点击此处可中止进程' href='index1' id='suspend'>中止当前操作，并返回首页</a>"
			$("#countdown").after(suspend);
	}
	$("#suspend").focus();
	c=$("#countdown").text();
	if(c==null||c==""){
		return;
	}
	c=c-1
	if(c==0){
		alert("网络速度慢中转数据失败，请刷新后重新操作！")
		window.location.href="index";
		return;
	}
	$("#countdown").text(c);
	setTimeout("timedCountFlight()",1100);
}

//页面操作倒计时方法
function pageTimedCount()
{
	c=$("#count").text();
	if(c==null||c==""){
		return;
	}
	c=c-1
	if(c==0){
		alert("页面停留时间太长可能已超时，请刷新后重新操作！")
		window.location.href="index";
		return;
	}
	$("#count").text(c);
	setTimeout("pageTimedCount()",1100);
}

function countreload()
{
	c=$("#count").text();
	
	if(c==null||c==""){
		return;
	}
	c=300
	$("#count").text(c);
	
}

function mzcountreload()
{
	c=$("#count").text();
	
	if(c==null||c==""){
		return;
	}
	c=250
	$("#count").text(c);
	
}

function stopCount(){
	("#countdown").remove();
}

//点击查看加载时间
function loadtime(){
//	var loadtimeStyle = $("#loadtime").attr("style");
//	alert(loadtimeStyle)
//	if(loadtimeStyle == "display:none;" || loadtimeStyle == "DISPLAY:none"){
//		alert(222)
//		$("#loadtime").attr("style","display:block;");
//		$("#checkloadtime").html("关闭加载时间");
//	}
//	if(loadtimeStyle == "display:block;"){
//		$("#loadtime").attr("style","display:none;");
//		$("#checkloadtime").html("查看加载时间");
//	}
	var target=document.getElementById("loadtime");
    var clicktext=document.getElementById("checkloadtime")

          if (target.style.display=="block"){
              target.style.display="none";
              clicktext.innerText="查看加载时间";
          } else {
              target.style.display="block";
              clicktext.innerText='关闭加载时间';
          }
 
}
function indexfh(){
	$.unblockUI();
	reader.stopAll();
	window.location.href="index1";
}
//function reload(){
//	window.location.href="back";; 
//}


/*第三期管理*/
var baseURL="http://b2c.csair.com";


//重新初始化工具条
function reBuildTool(){
  if(window.self!=window.top){
    console.log("重新初始化工具条")
     //选中和指读重新初始化
    window.top.readPageAgain.readAgain()
    //重新构建标签
    window.top.pageRebuild.rebuild()
  }
}

//loading   调用 loading.show()显示loading    loading.hide() 隐藏loading
var loading = {
  show: function (str) {
    if (this.prepare()) {
      console.log('/22')
      str = str ? str : "提示：页面加载中，请稍后。。。"
      $.blockUI({
        message: "<h1><a id='msg' href='##' title='" + str + "'>" + str + "(<span id='countdown'>900</span>)</a></h1>"
      });
      // reader.voicePrompt.play("/iac/csair/mp3/ymjz");
      timedCount();
    }
  },
  hide: function () {
    if (window.timedCount) {
      
      clearInterval
    }
    $.unblockUI();
    // reader.stopAll();
  },
  prepare: function () {
    var res = false;
    var $this = this;
    if (reader.soundManagerIsready) {
      res = true;
    } else {
      var loadSoundManagerInterval = setInterval(function () {
        //当声音插件和ip当前城市
        if (reader.soundManagerIsready) {
          clearInterval(loadSoundManagerInterval);
          $this.show();
        }
      }, 200);
    }
    return res;
  }
};
/*手机验证码倒计时 */
function countDown(second, dom) {
  //验证码 样式改变
  var $this = this;
  if (second > 1) {
    second--;
    $(dom).attr('disabled', true);
    $(dom).css({
      'background': '#828586',
      'cursor': 'not-allowed'
    })
    $(dom).html(second + '秒后重新获取');
    setTimeout(function () {
      countDown(second, dom)
    }, 1000)
  } else {
    $(dom).attr('disabled', false);
    $(dom).html('获取验证码');
    $(dom).css({
      'background': '#0193CF',
      'cursor': 'pointer'
    })
  }
};
/*手机号码验证正则 */
function checkMobile(value) {
  var length = value.length;
  var tel = /^1\d{10}$/;
  return tel.test(value);
}
/*验证是否为纯数字*/
function regOnlyNaN(number) {
  //判断是否为纯数字
  var reg = /^\d+$/;
  return reg.test(number);
} 
/*
切换tab格式：
*/
function tabChange(dom,condom,callback) {
  var pDom = $(dom);
  var conDom = $(condom);
  var num;
  pDom.find('li').on('click', function () {
    num = $(this).attr('data-item');
    if (callback) callback(num);
    pDom.find('li').removeClass('active');
    $(this).addClass('active');
    conDom.children().removeClass('show').addClass('hideen');
    $(conDom.children()[num]).removeClass('hideen').addClass('show');
  })
}











