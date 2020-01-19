$(function(){
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			loadCsairSearch();
		}
	}, 10);	
})

//加载全站搜索
function loadCsairSearch(){
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍后。。。'>提示：正在加载页面信息，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	href = "http://www.csair.com/cn/search/";
	var timestamp=new Date().getTime();
	
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'loadCsairSearch?'+timestamp,
		type:'POST',
		data:{
			"href":href
		},
		dataType:"json",
		sync: false,
		success:function(data){
			if(data.notice == "false"){
				alert("页面加载超时！")
				return;
			}
			$.unblockUI();
			reader.stopAll();
			navBlock.init();
			$("#keyword").focus();
			submit();//全站搜索提交
			spearlLink();//点击链接
			searchPageClick();//全站搜索页数点击
		}
	});
}

//进行搜索
function submit(){
	$("input.submit_zys").click(function(){
		var keyWord = $(".text_zys").val();
		
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		
		$.ajax({
			url:'csairSearchAll',
			type:'POST',
			data:{
				"keyWord":keyWord
			},
			dataType:"json",
			sync: false,
			success:function(data){
				if(data.notice == "false"){
					alert("加载超时！")
					$.unblockUI();
					reader.stopAll();
					return;
				}else{
					$("#main_zys_content").html(data.main_zys)
					$("#page_zys_content").html(data.page_zys)
					$("#searchButton").focus();
					submit();
					spearlLink();
					searchPageClick();//全站搜索页数点击
					$.unblockUI();
					reader.stopAll();
				}
			}
		});
	})
}

//点击页数
function searchPageClick(){
	$("#pagesDiv a").click(function(){
		var id = $(this).parent().attr('id');
		if(id == undefined){
			return;
		}
		var pageCount = $(this).text().trim();
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		
		$.ajax({
			url:'searchPageClick',
			type:'POST',
			data:{
				"pageCount":pageCount
			},
			dataType:"json",
			sync: false,
			success:function(data){
				if(data.notice == "false"){
					alert("加载超时！")
					$.unblockUI();
					reader.stopAll();
					return;
				}else{
					$("#main_zys_content").html(data.main_zys)
					$("#page_zys_content").html(data.page_zys)
					$("#keyword").focus();
					submit();
					spearlLink();
					searchPageClick();//全站搜索页数点击
					$.unblockUI();
					reader.stopAll();
				}
				
			}
		});
	})
}

//点击链接
function spearlLink(){
	$("a.spearlLink").click(function(){
		var href = $(this).attr("data");
		$.blockUI({ message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
		timedCount();
		window.location.href="cxbz_clickA?href="+href;
	})
}

//测试是否含有特殊符号方法
function check_mark(value,title) {
	var pattern = new RegExp("[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]");
		for (var i = 0; i < value.length; i++) {
			if(pattern.test(value.substr(i,1))){
				alert(title+"中请不要输入特殊符号")
			    return false;
			}
		}
		return true;
	}