
$(function(){
	/*$("link").each(function(index){
		var $this=$(this);
		var href=$this.attr("href");
		if(href&&href.indexOf("/skypearl")==0){
			$this.attr("href","http://skypearl.csair.com"+href);
		}
	})
	$("script").each(function(index){
		var $this=$(this);
		var src=$this.attr("src");
		if(src&&src.indexOf("/skypearl")==0){
			$this.attr("src","http://skypearl.csair.com"+src);
		}
	})*/
	
	$("#savebutton").click(function(){
		basicinformationsave();
	})
})

 function basicinformationsave(){

	    	var b2cName =$("#b2cName").val();
	  //  	alert(b2cName)
	    	var title = $("#title").val();
	  //  	alert(title)
	    	var birthday=$("input[name='birthday']").val();
	  //  	alert(birthday)
	    	var schoolLevel=$("#schoolLevel").val();
	  //  	alert(schoolLevel)
	    	var professionCode=$("#professionCode").val();
	 //   	alert(professionCode)
	    	var professionTitle=document.getElementById("svcPcAllinfo.svcPcBasicInfoDto.professionTitle").value;
	  //  	alert(professionTitle)
	    	var officeName=document.getElementById("svcPcAllinfo.svcPcBasicInfoDto.officeName").value;
	 //   	alert(officeName)
	    	
	    	$.ajax({
	    		url:"basicinformationsave",
	    		type:"POST",
	    		sync:true,
	    		data:{
	    			"b2cName":b2cName,
	    			"title":title,
	    			"birthday":birthday,
	    			"schoolLevel":schoolLevel,
	    			"professionCode":professionCode,
	    			"professionTitle":professionTitle,
	    			"officeName":officeName
	    			
	    		},
	    		success:function(data){
	    			// alert("回话：" + data.informationPage);
	    			if(data.informationPage==false){
	    				alert("请重新登录!")
	    				window.location.href="mzhy";
	    			}
	    	          $('#content').html(data.informationPage);
	    		},
	    		erorr:function(){
	    			
	    		}
	    	})
	    	
	    }







