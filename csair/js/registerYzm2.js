/**
 * 
 */

$(function(){
	
	$("#submit").bind("click",function(){
		var yzm = $("#yzm").val();
		mzcountreload();
		$.ajax({
			url:'submitYzm',
			type:'POST',
			sync: true,
			data:{
				"code":yzm
			},
			success:function(data){
				alert(data.message)
			},
			error :function(){
				
			}
		});
	})
	
	
	$("#register").bind("click",function(){
		window.location.href="register";
	})
	
	
})


