/**
 * 
 */
$(function(){
		$.ajax({
			url:'prelogin',
			type:'POST',
			sync: true,
			data:{},
			success:function(data){
			
			},
			error :function(){
				
			}
		});
	})

	function init(){
		document.getElementById("username").focus();
	}
	
	function login(){
		var username=$.trim($("#username").val());
		var password=$.trim($("#password").val());
		if(username==""){
			alert("请输入手机或邮箱号");
			return;
		}
		if(password==""){
			alert("请输入密码");
			return;
		}
		$.ajax({
			url:'login',
			type:'POST',
			sync: true,
			data:{
				"username":username,
				"password":password
			},
			success:function(data){
				if(data.state=="SUCCESS"){
					alert(data.message);
					window.location.href="queryOrder";
				}else{
					alert(data.message);
				}
			},
			error :function(){
				
			}
		});
	}
	