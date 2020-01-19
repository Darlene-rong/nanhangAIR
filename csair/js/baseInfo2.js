$(function(){
	$("#cardNo").focus();
	
	$("#savebutton").bind("click",function(){
		var b2cName = $("#b2cName").val();
		var title = $("#title").val();
		var schoolLevel = $("#schoolLevel").val();
		var professionCode = $("#professionCode").val();
		var professionTitle = $("#professionTitle").val();
		var officeName = $("#officeName").val();
		$.blockUI({ message: "<h1><a id='msg' href='#' title='页面加载中，请耐心等候。。。'>页面加载中，请耐心等候。。。</a></h1>" });
		$("#msg").focus();
		$.ajaxSetup({ cache:false });
		mzcountreload();
		$.ajax({
			url : 'csairBaseInfo',
			type : 'POST',
			sync : true,
			data : {
				"b2cName":b2cName,
				"title":title,
				"schoolLevel":schoolLevel,
				"professionCode":professionCode,
				"professionTitle":professionTitle,
				"officeName":officeName
			},
			success : function(data) {
				alert(data.message)
				window.location.href="preCsairBaseInfo";
			},
			error : function() {
				
			}
		});
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})