
$(function() {
	
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			findOrder(1);
		}
	}, 10);	
	
	
	//查询
	$(".bluebtn").click(function(){
		var orderStatusType = $("#orderStatusType").val();
		var allOrderStatus = $("#allOrderStatus").val();
		if(orderStatusType =="1" && allOrderStatus == "0"){
			findOrder(1);
		}else if(orderStatusType =="1" && allOrderStatus != "0"){
			findOrderByStatus(allOrderStatus,1);
		}else if(orderStatusType =="2" && allOrderStatus == "ALL"){
			findChangeList(1);
		}else if(orderStatusType =="2" && allOrderStatus != "ALL"){
			findChangeListByStatus(allOrderStatus,1);
		}else if(orderStatusType =="3" && allOrderStatus == "ALL"){
			findRefundList(1);
		}else if(orderStatusType =="3" && allOrderStatus != "ALL"){
			findRefundListByStatus(allOrderStatus,1);
		}
	})
	
	//订单状态变更
	$("#orderStatusType").on("change",function(){
		var orderStatusType = $("#orderStatusType").val();
		if(orderStatusType == "1"){
			var str = "<option value='0' title='全部'>全部</option>"+
					"<option value='1' title='待支付'>待支付</option>"+
					"<option value='2' title='待出票'>待出票</option>"+
					"<option value='3' title='已出票'>已出票</option>"+
					"<option value='4' title='已取消'>已取消</option>";
			
			$("#allOrderStatus").html("");
			$("#allOrderStatus").html(str);
		}else if(orderStatusType == "2"){
			var str = "<option value='ALL' title='全部'>全部</option>"+
					"<option value='S' title='提交'>提交</option>"+
					"<option value='U' title='未支付'>未支付</option>"+
					"<option value='P' title='正在支付'>正在支付</option>"+
					"<option value='H' title='待变更'>待变更</option>"+
					"<option value='E' title='成功'>成功</option>"+
					"<option value='C' title='取消'>取消</option>"+
					"<option value='S' title='待处理'>待处理</option>"+
					"<option value='E' title='已通过'>已通过</option>"+
					"<option value='N' title='未通过'>未通过</option>";
			
			$("#allOrderStatus").html("");
			$("#allOrderStatus").html(str);
		}else if(orderStatusType == "3"){
			var str = "<option value='ALL' title='全部'>全部</option>"+
					"<option value='U' title='未处理'>未处理</option>"+
					"<option value='N' title='未通过'>未通过</option>"+
					"<option value='R' title='退票中'>退票中</option>"+
					"<option value='F' title='成功'>成功</option>";
			
			$("#allOrderStatus").html("");
			$("#allOrderStatus").html(str);
		}
	})
	
	
});

//默认查询
function findOrder(p){
	
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	ordertimedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'queryOrderEx',
		type:'POST',
		sync: true,
		data:{"page":p},
		dataType:'json',
		success:function(data){
			$("#pagination").empty();
			$("tbody").empty();
			//添加数据
			var orders=data.order;
			for(var j=0;j<orders.length;j++){
				var orderno = orders[j].orderno;
				var seginfo = orders[j].seginfo;
				var depport="";
				var arrport="";
				var deptime="";
				if(seginfo.length){
					if(seginfo.length == 1){
						depport = seginfo[0].depport;
						arrport = seginfo[seginfo.length-1].arrport;
					}else if(seginfo.length == 2){
						depport = seginfo[0].depport;
						arrport = seginfo[0].arrport;
						depport2 = seginfo[seginfo.length-1].depport;
						arrport2 = seginfo[seginfo.length-1].arrport;
					}
					
					deptime = seginfo[0].deptime;
				}else{
					if(undefined!=seginfo.seginfo){
						depport = orders[j].seginfo.seginfo.depport;
						arrport = orders[j].seginfo.seginfo.arrport;
						deptime = seginfo.seginfo.deptime;
					}
				}


				//var deptime = seginfo.seginfo.deptime;
				var psginfo = orders[j].psginfo;
				var psgname = "";
				if(psginfo.length!=undefined){
					if(psginfo.length==1){
						psgname=psginfo[0].psgname;
					}else{
						for(var k=0;k<psginfo.length;k++){
							psgname=psgname+psginfo[k].psgname;
							if((k+1)==psginfo.length){
								
							}else{
								psgname=psgname+"/"
							}
						}
					}
				}else{
					psgname = psginfo.psginfo.psgname;
				}
				var totalpaymoney= orders[j].totalpaymoney;
				if(totalpaymoney == null || totalpaymoney == "null"){
					totalpaymoney = "-";
				}
				var totalmileage= orders[j].totalmileage;
				var status= orders[j].status;
				if(status=='C' || status=='P'){
					status='待支付';
				}else if(status=='D'){
					status='已取消';
				}else if(status=='E'){
					status='已出票';
				}
				if(seginfo.length == 1){
					if(undefined == totalmileage){
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}else{
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}
					
				}else if(seginfo.length == 2){
					if(undefined == totalmileage){
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}else{
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}
					
				}
				$("tbody").append(tr);	
				var a = $("."+orderno).html();
				if(a=="待支付"){
					var ht= "<input type='button' value='支付' id='"+orderno+"'   title='支付' onclick='pay(this)' >"
						$("."+orderno).html(ht)
				}else if(a=="已出票"){
					var ht= "<input type='button' value='变更' data='"+orderno+"'   title='变更' onclick='change(this)' ></br><input type='button' value='退票' data='"+orderno+"'   title='退票' onclick='refund(this)' >"
					$("."+orderno).html(ht)
				}else{
					var ht="";
					$("."+orderno).html(ht)
				}
			}
			if(orders.length == 0){
				var tr="<tr><td class='flight_num_td' colspan='7' title='查无此记录，请输入正确信息！'>查无此记录，请输入正确信息！</td></tr>";
				$("tbody").append(tr);	
			}
			var th = "<th>订单编号</th>"+
					 "<th>行程</th>"+
					 "<th>乘机人</th>"+
					 "<th>出发时间</th>"+
					 "<th>订单金额</th>"+
					 "<th>订单状态</th>"+
					 "<th>操作</th>";
			
			$(".ticketTitle").html(th);
		
			//分页
			var pageSize=10;
			var start=data.start;
			var end=data.end;
			var pageNum=data.pageNum;
			var total=data.total;
			var pn=1;
			var z = total%pageSize;
			if(z==0){ //整除
				pn=total/pageSize;
			}else{
				pn=Math.ceil(total/pageSize);
			}
			if(p<2){
				$("#pagination").append("<a href='javascript:findOrder(1)' title='上一页'>上一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p-1)+")'title='上一页' >上一页</a>");
			}
			if(pn>5){
				if(p>=1 && p<6){
					for(var i=0;i<5;i++){
						if((i+1)==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}
					}
				}
				if(p>=6 && p<=pn-5){
					for(var i=p;i<p+5;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
				if(p>pn-5){
					for(var i=pn-4;i<pn+1;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
			}
			
			if(pn <= 5){
				for(var i=0;i<5;i++){
					if((i+1)==p){
						$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}else{
						$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}
				}
			}
			
			if(p>(pn-1)){
				$("#pagination").append("<a href='javascript:findOrder("+(pn)+")' title='下一页'>下一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p+1)+")' title='下一页'>下一页</a>");
			}
		
			$("#pagination").append('<div class="clearboth"></div>')
			
			//配合工具条刷新添加属性
			if(self!=top){
				top.readPageAgain.readAgain();
			}
			$.unblockUI();
			reader.stopAll();
			//点击订单号查看详情
			$(".flight_num_td  a").click(function(){
				var orderNum = $(this).text();
				$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
				reader.ready=function(){
					reader.voicePrompt.play("/iac/csair/mp3/ymjz");
				};
				timedCount();
				countreload();
				window.location.href="OrderMX?orderNum="+orderNum;
			})
			
		}
	});	
}

//查询改票列表
function findChangeList(p){
	$.ajaxSetup({ cache:false });
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.ready=function(){
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	};
	ordertimedCount();
	$.ajax({
		url:'findChangeList',
		type:'POST',
		sync: true,
		data:{"page":p},
		dataType:'json',
		success:function(data){
			$("#pagination").empty();
			$("tbody").empty();
			//添加数据
			var orders=data.changeList;
			for(var j=0;j<orders.length;j++){
				var changeno = orders[j].changeno;
				var orderno = orders[j].orderno;
				var changetype = orders[j].changetype;
				var seginfo = orders[j].seginfo2;
//				alert(changeno+" "+orderno+" "+seginfo)
				var depport="";
				var arrport="";
				var deptime="";
				if(seginfo.length){
					if(seginfo.length == 1){
						depport = seginfo[0].depportname;
						arrport = seginfo[seginfo.length-1].arrportname;
					}else if(seginfo.length == 2){
						depport = seginfo[0].depportname;
						arrport = seginfo[0].arrportname;
						depport2 = seginfo[seginfo.length-1].depportname;
						arrport2 = seginfo[seginfo.length-1].arrportname;
					}
					
					deptime = seginfo[0].newdeptime;
				}
//				else{
//					if(undefined!=seginfo.seginfo){
//						depport = orders[j].seginfo.seginfo.depport;
//						arrport = orders[j].seginfo.seginfo.arrport;
//						deptime = seginfo.seginfo.deptime;
//					}
//				}

				
				//var deptime = seginfo.seginfo.deptime;
				var psginfo = orders[j].psginfo;
				var psgname = "";
				if(psginfo.length!=undefined){
					if(psginfo.length==1){
						psgname=psginfo[0].psgname;
					}else{
						for(var k=0;k<psginfo.length;k++){
							psgname=psgname+psginfo[k].psgname;
							if((k+1)==psginfo.length){
								
							}else{
								psgname=psgname+"/"
							}
						}
					}
				}else{
					psgname = psginfo.psginfo.psgname;
				}
				var totalchangeprice= orders[j].totalchangeprice;
				var totalmileage= orders[j].totalmileage;
				var status= orders[j].status;
				if(status=='B'){
					status='支付成功';
				}else if(status=='C'){
					status='已取消';
				}else if(status=='D'){
					status='正在处理';
				}else if(status=='E'){
					status='完成变更';
				}else if(status=='N'){
					status='审核不通过';
				}else if(status=='P'){
					status='开始支付';
				}else if(status=='S'){
					status='已提交';
				}else if(status=='V'){
					status='审核通过';
				}else if(status=='F'){
					status='失败';
				}
				if(seginfo.length == 1){
					if(undefined == totalmileage){
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalchangeprice+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}else{
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalchangeprice+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}
					
				}else if(seginfo.length == 2){
					if(undefined == totalmileage){
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalchangeprice+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}else{
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalchangeprice+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}
					
				}
				$("tbody").append(tr);	
				var a = $("."+orderno).html();
				if(a=="待支付"){
					var ht= "<input type='button' value='支付' id='"+orderno+"'   title='支付' onclick='pay(this)' >"
					$("."+orderno).html(ht)
				}else if(a=="已出票"){
					var ht= "<input type='button' value='变更' data='"+orderno+"'   title='变更' onclick='change(this)' ></br><input type='button' value='退票' data='"+orderno+"'   title='退票' onclick='refund(this)' >"
					$("."+orderno).html(ht)
				}else{
					var ht="";
					$("."+orderno).html(ht)
				}
			}
			if(orders.length == 0){
				var tr="<tr><td class='flight_num_td' colspan='7' title='查无此记录，请输入正确信息！'>查无此记录，请输入正确信息！</td></tr>";
				$("tbody").append(tr);	
			}
			var th = "<th>服务单号</th>"+
					 "<th>行程</th>"+
					 "<th>乘机人</th>"+
					 "<th>出发时间</th>"+
					 "<th>变更手续费</th>"+
					 "<th>变更单状态</th>";
			
			$(".ticketTitle").html(th);
					
			//分页
			var pageSize=10;
			var start=data.start;
			var end=data.end;
			var pageNum=data.pageNum;
			var total=data.total;
			var pn=1;
			var z = total%pageSize;
			if(z==0){ //整除
				pn=total/pageSize;
			}else{
				pn=Math.ceil(total/pageSize);
			}
			if(p<2){
				$("#pagination").append("<a href='javascript:findOrder(1)' title='上一页'>上一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p-1)+")'title='上一页' >上一页</a>");
			}
			if(pn>5){
				if(p>=1 && p<6){
					for(var i=0;i<5;i++){
						if((i+1)==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}
					}
				}
				if(p>=6 && p<=pn-5){
					for(var i=p;i<p+5;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
				if(p>pn-5){
					for(var i=pn-4;i<pn+1;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
			}
			
			if(pn <= 5){
				for(var i=0;i<5;i++){
					if((i+1)==p){
						$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}else{
						$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}
				}
			}
			
			if(p>(pn-1)){
				$("#pagination").append("<a href='javascript:findOrder("+(pn)+")' title='下一页'>下一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p+1)+")' title='下一页'>下一页</a>");
			}
			
			$("#pagination").append('<div class="clearboth"></div>')
			
			//配合工具条刷新添加属性
			if(self!=top){
				top.readPageAgain.readAgain();
			}
			$.unblockUI();
			reader.stopAll();
			//点击订单号查看详情
			$(".flight_num_td  a").click(function(){
				var changeno = $(this).text();
				var orderno = $(this).parent().find(".orderno").val();
//				alert(orderno);
				var changetype = $(this).parent().find(".changetype").val();
//				alert(changetype);
				$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
				reader.ready=function(){
					reader.voicePrompt.play("/iac/csair/mp3/ymjz");
				};
				timedCount();
				countreload();
				window.location.href="changeListMX?orderno="+orderno+"&changeno="+changeno+"&changetype="+changetype;
			})
		}
	});	
}

//根据状态查询购票记录
function findOrderByStatus(status,p){
	$.ajaxSetup({ cache:false });
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.ready=function(){
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	};
	ordertimedCount();
	$.ajax({
		url:'findOrderByStatus',
		type:'POST',
		sync: true,
		data:{
			"status":status,
			"pageNum":p
		},
		dataType:'json',
		success:function(data){
			$("#pagination").empty();
			$("tbody").empty();
			//添加数据
			var orders=data.order;
			if(orders.length == undefined){
				var order1 = data.order.order;
				var orderno = order1.orderno;
				var seginfo = order1.seginfo;
				var depport="";
				var arrport="";
				var deptime="";
				if(seginfo.length){
					if(seginfo.length == 1){
						depport = seginfo[0].depport;
						arrport = seginfo[seginfo.length-1].arrport;
					}else if(seginfo.length == 2){
						depport = seginfo[0].depport;
						arrport = seginfo[0].arrport;
						depport2 = seginfo[seginfo.length-1].depport;
						arrport2 = seginfo[seginfo.length-1].arrport;
					}
					
					deptime = seginfo[0].deptime;
				}else{
					if(undefined!=seginfo.seginfo){
						depport = order1.seginfo.seginfo.depport;
						arrport = order1.seginfo.seginfo.arrport;
						deptime = seginfo.seginfo.deptime;
					}
				}
				
				var psginfo = order1.psginfo;
				var psgname = "";
				if(psginfo.length!=undefined){
					if(psginfo.length==1){
						psgname=psginfo[0].psgname;
					}else{
						for(var k=0;k<psginfo.length;k++){
							psgname=psgname+psginfo[k].psgname;
							if((k+1)==psginfo.length){
								
							}else{
								psgname=psgname+"/"
							}
						}
					}
				}else{
					psgname = psginfo.psginfo.psgname;
				}
				var totalpaymoney= order1.totalpaymoney;
				var totalmileage= order1.totalmileage;
				var status= order1.status;
				if(status=='C' || status=='P'){
					status='待支付';
				}else if(status=='D'){
					status='已取消';
				}else if(status=='E'){
					status='已出票';
				}
				if(seginfo.length == 1){
					if(undefined == totalmileage){
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}else{
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}
					
				}else if(seginfo.length == 2){
					if(undefined == totalmileage){
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}else{
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
					}
					
				}
				$("tbody").append(tr);	
				var a = $("."+orderno).html();
				if(a=="待支付"){
					var ht= "<input type='button' value='支付' id='"+orderno+"'   title='支付' onclick='pay(this)' >"
					$("."+orderno).html(ht)
				}else if(a=="已出票"){
					var ht= "<input type='button' value='变更' data='"+orderno+"'   title='变更' onclick='change(this)' ></br><input type='button' value='退票' data='"+orderno+"'   title='退票' onclick='refund(this)' >"
					$("."+orderno).html(ht)
				}else{
					var ht="";
					$("."+orderno).html(ht)
				}
			
			}else if(orders.length > 1){
				for(var j=0;j<orders.length;j++){
					var orderno = orders[j].orderno;
					var seginfo = orders[j].seginfo;
					var depport="";
					var arrport="";
					var deptime="";
					if(seginfo.length){
						if(seginfo.length == 1){
							depport = seginfo[0].depport;
							arrport = seginfo[seginfo.length-1].arrport;
						}else if(seginfo.length == 2){
							depport = seginfo[0].depport;
							arrport = seginfo[0].arrport;
							depport2 = seginfo[seginfo.length-1].depport;
							arrport2 = seginfo[seginfo.length-1].arrport;
						}
						
						deptime = seginfo[0].deptime;
					}else{
						if(undefined!=seginfo.seginfo){
							depport = orders[j].seginfo.seginfo.depport;
							arrport = orders[j].seginfo.seginfo.arrport;
							deptime = seginfo.seginfo.deptime;
						}
					}
					
					var psginfo = orders[j].psginfo;
					var psgname = "";
					if(psginfo.length!=undefined){
						if(psginfo.length==1){
							psgname=psginfo[0].psgname;
						}else{
							for(var k=0;k<psginfo.length;k++){
								psgname=psgname+psginfo[k].psgname;
								if((k+1)==psginfo.length){
									
								}else{
									psgname=psgname+"/"
								}
							}
						}
					}else{
						psgname = psginfo.psginfo.psgname;
					}
					var totalpaymoney= orders[j].totalpaymoney;
					if(totalpaymoney == null || totalpaymoney == "null"){
						totalpaymoney = "-";
					}
					var totalmileage= orders[j].totalmileage;
					var status= orders[j].status;
					if(status=='C' || status=='P'){
						status='待支付';
					}else if(status=='D'){
						status='已取消';
					}else if(status=='E'){
						status='已出票';
					}
					if(seginfo.length == 1){
						if(undefined == totalmileage){
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
						}else{
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
						}
						
					}else if(seginfo.length == 2){
						if(undefined == totalmileage){
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
						}else{
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
						}
						
					}
					$("tbody").append(tr);	
					var a = $("."+orderno).html();
					if(a=="待支付"){
						var ht= "<input type='button' value='支付' id='"+orderno+"'   title='支付' onclick='pay(this)' >"
						$("."+orderno).html(ht)
					}else if(a=="已出票"){
						var ht= "<input type='button' value='变更' data='"+orderno+"'   title='变更' onclick='change(this)' ></br><input type='button' value='退票' data='"+orderno+"'   title='退票' onclick='refund(this)' >"
						$("."+orderno).html(ht)
					}else{
						var ht="";
						$("."+orderno).html(ht)
					}
				}
			}else if(orders.length == 0){
				var tr="<tr><td class='flight_num_td' colspan='7' title='查无此记录，请输入正确信息！'>查无此记录，请输入正确信息！</td></tr>";
				$("tbody").append(tr);	
			}
			
			var th = "<th>订单编号</th>"+
					 "<th>行程</th>"+
					 "<th>乘机人</th>"+
					 "<th>出发时间</th>"+
					 "<th>订单金额</th>"+
					 "<th>订单状态</th>"+
					 "<th>操作</th>";
			
			$(".ticketTitle").html(th);
			//分页
			var pageSize=10;
			var start=data.start;
			var end=data.end;
			var pageNum=data.pageNum;
			var total=data.total;
			var pn=1;
			var z = total%pageSize;
			if(z==0){ //整除
				pn=total/pageSize;
			}else{
				pn=Math.ceil(total/pageSize);
			}
			if(p<2){
				$("#pagination").append("<a href='javascript:findOrder(1)' title='上一页'>上一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p-1)+")'title='上一页' >上一页</a>");
			}
			if(pn>5){
				if(p>=1 && p<6){
					for(var i=0;i<5;i++){
						if((i+1)==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}
					}
				}
				if(p>=6 && p<=pn-5){
					for(var i=p;i<p+5;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
				if(p>pn-5){
					for(var i=pn-4;i<pn+1;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
			}
			
			if(pn <= 5){
				for(var i=0;i<5;i++){
					if((i+1)==p){
						$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}else{
						$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}
				}
			}
			
			if(p>(pn-1)){
				$("#pagination").append("<a href='javascript:findOrder("+(pn)+")' title='下一页'>下一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p+1)+")' title='下一页'>下一页</a>");
			}
			
			$("#pagination").append('<div class="clearboth"></div>')
			
			//配合工具条刷新添加属性
			if(self!=top){
				top.readPageAgain.readAgain();
			}
			$.unblockUI();
			reader.stopAll();
			//点击订单号查看详情
			$(".flight_num_td  a").click(function(){
				var orderNum = $(this).text();
				$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
				reader.ready=function(){
					reader.voicePrompt.play("/iac/csair/mp3/ymjz");
				};
				timedCount();
				countreload();
				window.location.href="OrderMX?orderNum="+orderNum;
			})
			
		}
	});	
}

//根据状态查询变更记录
function findChangeListByStatus(status,p){
	$.ajaxSetup({ cache:false });
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.ready=function(){
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	};
	ordertimedCount();
	$.ajax({
		url:'findChangeListByStatus',
		type:'POST',
		sync: true,
		data:{
			"status":status,
			"pageNum":p
		},
		dataType:'json',
		success:function(data){
			$("#pagination").empty();
			$("tbody").empty();
			//添加数据
			var orders=data.changeList;
//			if(orders.length == undefined){
//				var order1 = data.order.order;
//				
//				var orderno = order1.orderno;
//				var seginfo = order1.seginfo;
//				var depport="";
//				var arrport="";
//				var deptime="";
//				if(seginfo.length){
//					if(seginfo.length == 1){
//						depport = seginfo[0].depport;
//						arrport = seginfo[seginfo.length-1].arrport;
//					}else if(seginfo.length == 2){
//						depport = seginfo[0].depport;
//						arrport = seginfo[0].arrport;
//						depport2 = seginfo[seginfo.length-1].depport;
//						arrport2 = seginfo[seginfo.length-1].arrport;
//					}
//					
//					deptime = seginfo[0].deptime;
//				}else{
//					if(undefined!=seginfo.seginfo){
//						depport = order1.seginfo.seginfo.depport;
//						arrport = order1.seginfo.seginfo.arrport;
//						deptime = seginfo.seginfo.deptime;
//					}
//				}
//				
//				var psginfo = order1.psginfo;
//				var psgname = "";
//				if(psginfo.length!=undefined){
//					if(psginfo.length==1){
//						psgname=psginfo[0].psgname;
//					}else{
//						for(var k=0;k<psginfo.length;k++){
//							psgname=psgname+psginfo[k].psgname;
//							if((k+1)==psginfo.length){
//								
//							}else{
//								psgname=psgname+"/"
//							}
//						}
//					}
//				}else{
//					psgname = psginfo.psginfo.psgname;
//				}
//				var totalpaymoney= order1.totalpaymoney;
//				var status= order1.status;
//				if(status=='B'){
//					status='支付成功';
//				}else if(status=='C'){
//					status='已取消';
//				}else if(status=='D'){
//					status='正在处理';
//				}else if(status=='E'){
//					status='完成变更';
//				}else if(status=='N'){
//					status='审核不通过';
//				}else if(status=='P'){
//					status='开始支付';
//				}else if(status=='S'){
//					status='已提交';
//				}else if(status=='V'){
//					status='审核通过';
//				}else if(status=='F'){
//					status='失败';
//				}
//				if(seginfo.length == 1){
//					var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
//				}else if(seginfo.length == 2){
//					var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
//				}
//				$("tbody").append(tr);	
//				var a = $("."+orderno).html();
//				if(a=="待支付"){
//					var ht= "<input type='button' value='支付' id='"+orderno+"'   title='支付' onclick='pay(this)' >"
//					$("."+orderno).html(ht)
//				}else if(a=="已出票"){
//					var ht= "<input type='button' value='变更' data='"+orderno+"'   title='变更' onclick='change(this)' ></br><input type='button' value='退票' data='"+orderno+"'   title='退票' onclick='refund(this)' >"
//					$("."+orderno).html(ht)
//				}else{
//					var ht="";
//					$("."+orderno).html(ht)
//				}
//				
//			}else 
				if(orders.length >= 1){
				for(var j=0;j<orders.length;j++){
					var changeno = orders[j].changeno;
					var orderno = orders[j].orderno;
					var changetype = orders[j].changetype;
					var seginfo2 = orders[j].seginfo2;
					var depport="";
					var arrport="";
					var deptime="";
					if(seginfo2.length){
						if(seginfo2.length == 1){
							depport = seginfo2[0].depportname;
							arrport = seginfo2[seginfo2.length-1].arrportname;
						}else if(seginfo.length == 2){
							depport = seginfo2[0].depportname;
							arrport = seginfo2[0].arrportname;
							depport2 = seginfo2[seginfo2.length-1].depportname;
							arrport2 = seginfo2[seginfo2.length-1].arrportname;
						}
						
						deptime = seginfo2[0].newdeptime;
					}
					
					var psginfo = orders[j].psginfo;
					var psgname = "";
					if(psginfo.length!=undefined){
						if(psginfo.length==1){
							psgname=psginfo[0].psgname;
						}else{
							for(var k=0;k<psginfo.length;k++){
								psgname=psgname+psginfo[k].psgname;
								if((k+1)==psginfo.length){
									
								}else{
									psgname=psgname+"/"
								}
							}
						}
					}else{
						psgname = psginfo.psginfo.psgname;
					}
					var totalchangeprice= orders[j].totalchangeprice;
					var totalmileage= orders[j].totalmileage;
					var status= orders[j].status;
					if(status=='B'){
						status='支付成功';
					}else if(status=='C'){
						status='已取消';
					}else if(status=='D'){
						status='正在处理';
					}else if(status=='E'){
						status='完成变更';
					}else if(status=='N'){
						status='审核不通过';
					}else if(status=='P'){
						status='开始支付';
					}else if(status=='S'){
						status='已提交';
					}else if(status=='V'){
						status='审核通过';
					}else if(status=='F'){
						status='失败';
					}
					if(seginfo2.length == 1){
						if(undefined == totalmileage){
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalchangeprice+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
						}else{
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalchangeprice+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
						}
						
					}else if(seginfo2.length == 2){
						if(undefined == totalmileage){
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalchangeprice+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
						}else{
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalchangeprice+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
						}
						
					}
					$("tbody").append(tr);	
					var a = $("."+orderno).html();
					if(a=="待支付"){
						var ht= "<input type='button' value='支付' id='"+orderno+"'   title='支付' onclick='pay(this)' >"
						$("."+orderno).html(ht)
					}else if(a=="已出票"){
						var ht= "<input type='button' value='变更' data='"+orderno+"'   title='变更' onclick='change(this)' ></br><input type='button' value='退票' data='"+orderno+"'   title='退票' onclick='refund(this)' >"
						$("."+orderno).html(ht)
					}else{
						var ht="";
						$("."+orderno).html(ht)
					}
				}
			}else if(orders.length == 0){
				var tr="<tr><td class='flight_num_td' colspan='7' title='查无此记录，请输入正确信息！'>查无此记录，请输入正确信息！</td></tr>";
				$("tbody").append(tr);	
			}
			
			var th = "<th>服务单号</th>"+
					 "<th>行程</th>"+
					 "<th>乘机人</th>"+
					 "<th>出发时间</th>"+
					 "<th>变更手续费</th>"+
					 "<th>变更单状态</th>";
			
			$(".ticketTitle").html(th);
			//分页
			var pageSize=10;
			var start=data.start;
			var end=data.end;
			var pageNum=data.pageNum;
			var total=data.total;
			var pn=1;
			var z = total%pageSize;
			if(z==0){ //整除
				pn=total/pageSize;
			}else{
				pn=Math.ceil(total/pageSize);
			}
			if(p<2){
				$("#pagination").append("<a href='javascript:findOrder(1)' title='上一页'>上一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p-1)+")'title='上一页' >上一页</a>");
			}
			if(pn>5){
				if(p>=1 && p<6){
					for(var i=0;i<5;i++){
						if((i+1)==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}
					}
				}
				if(p>=6 && p<=pn-5){
					for(var i=p;i<p+5;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
				if(p>pn-5){
					for(var i=pn-4;i<pn+1;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
			}
			
			if(pn <= 5){
				for(var i=0;i<5;i++){
					if((i+1)==p){
						$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}else{
						$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}
				}
			}
			
			if(p>(pn-1)){
				$("#pagination").append("<a href='javascript:findOrder("+(pn)+")' title='下一页'>下一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p+1)+")' title='下一页'>下一页</a>");
			}
			
			$("#pagination").append('<div class="clearboth"></div>')
			
			//配合工具条刷新添加属性
			if(self!=top){
				top.readPageAgain.readAgain();
			}
			$.unblockUI();
			reader.stopAll();
			//点击订单号查看详情
			$(".flight_num_td  a").click(function(){
				var changeno = $(this).text();
				var orderno = $(this).parent().find(".orderno").val();
//				alert(orderno);
				var changetype = $(this).parent().find(".changetype").val();
//				alert(changetype);
				$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
				reader.ready=function(){
					reader.voicePrompt.play("/iac/csair/mp3/ymjz");
				};
				timedCount();
				countreload();
				window.location.href="changeListMX?orderno="+orderno+"&changeno="+changeno+"&changetype="+changetype;
			})
			
		}
	});	
}


//查询退票列表
function findRefundList(p){
	$.ajaxSetup({ cache:false });
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.ready=function(){
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	};
	ordertimedCount();
	$.ajax({
		url:'findRefundList',
		type:'POST',
		sync: true,
		data:{"page":p},
		dataType:'json',
		success:function(data){
			$("#pagination").empty();
			$("tbody").empty();
			//添加数据
			var orders=data.refundList;
			for(var j=0;j<orders.length;j++){
				var refundno = orders[j].seginfo[0].refundno;
				var seginfo = orders[j].seginfo;
				var depport="";
				var arrport="";
				var deptime="";
				if(seginfo.length){
					depport = seginfo[0].depport;
					arrport = seginfo[seginfo.length-1].arrport;
					deptime = seginfo[0].deptime;
				}
				
				//var deptime = seginfo.seginfo.deptime;
				var psginfo = orders[j].psginfo;
				var psgname = "";
				if(psginfo.length!=undefined){
					if(psginfo.length==1){
						psgname=psginfo[0].psgname;
					}else{
						for(var k=0;k<psginfo.length;k++){
							psgname=psgname+psginfo[k].psgname;
							if((k+1)==psginfo.length){
								
							}else{
								psgname=psgname+"/"
							}
						}
					}
				}else{
					psgname = psginfo.psginfo.psgname;
				}
				var totalrepaymoney= orders[j].totalrepaymoney;
				var totalmileage= orders[j].totalmileage;
				if(totalrepaymoney.indexOf("null") > -1 || totalrepaymoney == null){
					totalrepaymoney = "";
				}
				var status= orders[j].status;
				var status1= orders[j].status;
				if(status=='F'){
					status='财务审核不通过';
				}else if(status=='N'){
					status='审核不通过';
				}else if(status=='P'){
					status='财务审核通过';
				}else if(status=='S'){
					status='已提交';
				}else if(status=='R'){
					status='调账';
				}else if(status=='U'){
					status='未提交';
				}else if(status=='Y'){
					status='退票中';
				}
				if(seginfo.length == 1){
					if(undefined == totalmileage){
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+refundno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalrepaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+refundno+"'>"+status+"</div></td></tr>";
					}else{
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+refundno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalrepaymoney+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+refundno+"'>"+status+"</div></td></tr>";
					}
					
				}else if(seginfo.length == 2){
					if(undefined == totalmileage){
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+refundno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalrepaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+refundno+"'>"+status+"</div></td></tr>";
					}else{
						var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+refundno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalrepaymoney+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+refundno+"'>"+status+"</div></td></tr>";
					}
					
				}
				$("tbody").append(tr);	
				var a = $("."+refundno).html();
				if(a=="待支付"){
					var ht= "<input type='button' value='支付' id='"+orderno+"'   title='支付' onclick='pay(this)' >"
					$("."+refundno).html(ht)
				}else if(a=="已出票"){
					var ht= "<input type='button' value='变更' data='"+orderno+"'   title='变更' onclick='change(this)' ></br><input type='button' value='退票' data='"+orderno+"'   title='退票' onclick='refund(this)' >"
					$("."+refundno).html(ht)
				}else{
					var ht="";
					$("."+refundno).html(ht)
				}
			}
			if(orders.length == 0){
				var tr="<tr><td class='flight_num_td' colspan='7' title='查无此记录，请输入正确信息！'>查无此记录，请输入正确信息！</td></tr>";
				$("tbody").append(tr);	
			}
			var th = "<th>服务单号</th>"+
					 "<th>行程</th>"+
					 "<th>乘机人</th>"+
					 "<th>出发时间</th>"+
					 "<th>退还金额</th>"+
					 "<th>退票单状态</th>";
			
			$(".ticketTitle").html(th);
			//分页
			var pageSize=10;
			var start=data.start;
			var end=data.end;
			var pageNum=data.pageNum;
			var total=data.total;
			var pn=1;
			var z = total%pageSize;
			if(z==0){ //整除
				pn=total/pageSize;
			}else{
				pn=Math.ceil(total/pageSize);
			}
			if(p<2){
				$("#pagination").append("<a href='javascript:findOrder(1)' title='上一页'>上一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p-1)+")'title='上一页' >上一页</a>");
			}
			if(pn>5){
				if(p>=1 && p<6){
					for(var i=0;i<5;i++){
						if((i+1)==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}
					}
				}
				if(p>=6 && p<=pn-5){
					for(var i=p;i<p+5;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
				if(p>pn-5){
					for(var i=pn-4;i<pn+1;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
			}
			
			if(pn <= 5){
				for(var i=0;i<5;i++){
					if((i+1)==p){
						$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}else{
						$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}
				}
			}
			
			if(p>(pn-1)){
				$("#pagination").append("<a href='javascript:findOrder("+(pn)+")' title='下一页'>下一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p+1)+")' title='下一页'>下一页</a>");
			}
			
			$("#pagination").append('<div class="clearboth"></div>')
			
			//配合工具条刷新添加属性
			if(self!=top){
				top.readPageAgain.readAgain();
			}
			$.unblockUI();
			reader.stopAll();
			//点击订单号查看详情
			$(".flight_num_td  a").click(function(){
				var refundno = $(this).text();
				var status = $(this).parent().find(".status").val();
				$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
				reader.ready=function(){
					reader.voicePrompt.play("/iac/csair/mp3/ymjz");
				};
				timedCount();
				countreload();
				window.location.href="refundListMX?refundno="+refundno+"&status="+status;
			})
		}
	});	
}

//根据状态查询退票记录
function findRefundListByStatus(status,p){
	$.ajaxSetup({ cache:false });
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.ready=function(){
		reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	};
	ordertimedCount();
	$.ajax({
		url:'findRefundListByStatus',
		type:'POST',
		sync: true,
		data:{
			"status":status,
			"pageNum":p
		},
		dataType:'json',
		success:function(data){
			$("#pagination").empty();
			$("tbody").empty();
			//添加数据
			var orders=data.refundList;
//			if(orders.length == undefined){
//				var order1 = data.order.order;
//				
//				var orderno = order1.orderno;
//				var seginfo = order1.seginfo;
//				var depport="";
//				var arrport="";
//				var deptime="";
//				if(seginfo.length){
//					if(seginfo.length == 1){
//						depport = seginfo[0].depport;
//						arrport = seginfo[seginfo.length-1].arrport;
//					}else if(seginfo.length == 2){
//						depport = seginfo[0].depport;
//						arrport = seginfo[0].arrport;
//						depport2 = seginfo[seginfo.length-1].depport;
//						arrport2 = seginfo[seginfo.length-1].arrport;
//					}
//					
//					deptime = seginfo[0].deptime;
//				}else{
//					if(undefined!=seginfo.seginfo){
//						depport = order1.seginfo.seginfo.depport;
//						arrport = order1.seginfo.seginfo.arrport;
//						deptime = seginfo.seginfo.deptime;
//					}
//				}
//				
//				var psginfo = order1.psginfo;
//				var psgname = "";
//				if(psginfo.length!=undefined){
//					if(psginfo.length==1){
//						psgname=psginfo[0].psgname;
//					}else{
//						for(var k=0;k<psginfo.length;k++){
//							psgname=psgname+psginfo[k].psgname;
//							if((k+1)==psginfo.length){
//								
//							}else{
//								psgname=psgname+"/"
//							}
//						}
//					}
//				}else{
//					psgname = psginfo.psginfo.psgname;
//				}
//				var totalpaymoney= order1.totalpaymoney;
//				var status= order1.status;
//				if(status=='F'){
//					status='财务审核不通过';
//				}else if(status=='N'){
//					status='审核不通过';
//				}else if(status=='P'){
//					status='财务审核通过';
//				}else if(status=='S'){
//					status='已提交';
//				}else if(status=='R'){
//					status='调账';
//				}else if(status=='U'){
//					status='未提交';
//				}else if(status=='Y'){
//					status='退票中';
//				}
//				if(seginfo.length == 1){
//					var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
//				}else if(seginfo.length == 2){
//					var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+orderno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalpaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+orderno+"'>"+status+"</div></td></tr>";
//				}
//				$("tbody").append(tr);	
//				var a = $("."+orderno).html();
//				if(a=="待支付"){
//					var ht= "<input type='button' value='支付' id='"+orderno+"'   title='支付' onclick='pay(this)' >"
//					$("."+orderno).html(ht)
//				}else if(a=="已出票"){
//					var ht= "<input type='button' value='变更' data='"+orderno+"'   title='变更' onclick='change(this)' ></br><input type='button' value='退票' data='"+orderno+"'   title='退票' onclick='refund(this)' >"
//					$("."+orderno).html(ht)
//				}else{
//					var ht="";
//					$("."+orderno).html(ht)
//				}
//				
//			}else
				if(orders.length >= 1){
				for(var j=0;j<orders.length;j++){
					var refundno = orders[j].seginfo[0].refundno;
					var seginfo = orders[j].seginfo;
					var depport="";
					var arrport="";
					var deptime="";
					if(seginfo.length){
						if(seginfo.length == 1){
							depport = seginfo[0].depport;
							arrport = seginfo[seginfo.length-1].arrport;
						}else if(seginfo.length == 2){
							depport = seginfo[0].depport;
							arrport = seginfo[0].arrport;
							depport2 = seginfo[seginfo.length-1].depport;
							arrport2 = seginfo[seginfo.length-1].arrport;
						}
						
						deptime = seginfo[0].deptime;
					}
//					else{
//						if(undefined!=seginfo.seginfo){
//							depport = orders[j].seginfo.seginfo.depport;
//							arrport = orders[j].seginfo.seginfo.arrport;
//							deptime = seginfo.seginfo.deptime;
//						}
//					}
					
					var psginfo = orders[j].psginfo;
					var psgname = "";
					if(psginfo.length!=undefined){
						if(psginfo.length==1){
							psgname=psginfo[0].psgname;
						}else{
							for(var k=0;k<psginfo.length;k++){
								psgname=psgname+psginfo[k].psgname;
								if((k+1)==psginfo.length){
									
								}else{
									psgname=psgname+"/"
								}
							}
						}
					}else{
						psgname = psginfo.psginfo.psgname;
					}
					var totalrepaymoney= orders[j].totalrepaymoney;
					var totalmileage= orders[j].totalmileage;
					if(totalrepaymoney == "null" || totalrepaymoney == null){
						totalrepaymoney = "";
					}
					var status= orders[j].status;
					var status1= orders[j].status;
					if(status=='F'){
						status='财务审核不通过';
					}else if(status=='N'){
						status='审核不通过';
					}else if(status=='P'){
						status='财务审核通过';
					}else if(status=='S'){
						status='已提交';
					}else if(status=='R'){
						status='调账';
					}else if(status=='U'){
						status='未提交';
					}else if(status=='Y'){
						status='退票中';
					}
					if(seginfo.length == 1){
						if(undefined == totalmileage){
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+refundno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalrepaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+refundno+"'>"+status+"</div></td></tr>";
						}else{
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+refundno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalrepaymoney+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+refundno+"'>"+status+"</div></td></tr>";
						}
						
					}else if(seginfo.length == 2){
						if(undefined == totalmileage){
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+refundno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalrepaymoney+"</td><td  title='订单状态'>"+status+"</td><td><div  class='"+refundno+"'>"+status+"</div></td></tr>";
						}else{
							var tr="<tr><td class='flight_num_td' title='订单号'><a href='##' >"+refundno+"</a></td><td  title='行程'>"+depport+"-"+arrport+"<br>"+depport2+"-"+arrport2+"</td><td  title='乘机人'>"+psgname+"</td><td  title='出发时间'>"+deptime+"</td><td  title='订单金额'>"+totalrepaymoney+"元   + "+totalmileage+"公里</td><td  title='订单状态'>"+status+"</td><td><div  class='"+refundno+"'>"+status+"</div></td></tr>";
						}
						
					}
					$("tbody").append(tr);	
					var a = $("."+refundno).html();
					if(a=="待支付"){
						var ht= "<input type='button' value='支付' id='"+orderno+"'   title='支付' onclick='pay(this)' >"
						$("."+refundno).html(ht)
					}else if(a=="已出票"){
						var ht= "<input type='button' value='变更' data='"+orderno+"'   title='变更' onclick='change(this)' ></br><input type='button' value='退票' data='"+orderno+"'   title='退票' onclick='refund(this)' >"
						$("."+refundno).html(ht)
					}else{
						var ht="";
						$("."+refundno).html(ht)
					}
				}
			}else if(orders.length == 0){
				var tr="<tr><td class='flight_num_td' colspan='7' title='查无此记录，请输入正确信息！'>查无此记录，请输入正确信息！</td></tr>";
				$("tbody").append(tr);	
			}
			var th = "<th>服务单号</th>"+
					 "<th>行程</th>"+
					 "<th>乘机人</th>"+
					 "<th>出发时间</th>"+
					 "<th>退还金额</th>"+
					 "<th>退票单状态</th>";
			$(".ticketTitle").html(th);
			
			//分页
			var pageSize=10;
			var start=data.start;
			var end=data.end;
			var pageNum=data.pageNum;
			var total=data.total;
			var pn=1;
			var z = total%pageSize;
			if(z==0){ //整除
				pn=total/pageSize;
			}else{
				pn=Math.ceil(total/pageSize);
			}
			if(p<2){
				$("#pagination").append("<a href='javascript:findOrder(1)' title='上一页'>上一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p-1)+")'title='上一页' >上一页</a>");
			}
			if(pn>5){
				if(p>=1 && p<6){
					for(var i=0;i<5;i++){
						if((i+1)==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
						}
					}
				}
				if(p>=6 && p<=pn-5){
					for(var i=p;i<p+5;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
				if(p>pn-5){
					for(var i=pn-4;i<pn+1;i++){
						if(i==p){
							$("#pagination").append("<a class='current' href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}else{
							$("#pagination").append("<a href='javascript:findOrder("+(i)+")'>"+(i)+"</a>");
						}
					}
				}
			}
			
			if(pn <= 5){
				for(var i=0;i<5;i++){
					if((i+1)==p){
						$("#pagination").append("<a class='current' href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}else{
						$("#pagination").append("<a href='javascript:findOrder("+(i+1)+")'>"+(i+1)+"</a>");
					}
				}
			}
			
			if(p>(pn-1)){
				$("#pagination").append("<a href='javascript:findOrder("+(pn)+")' title='下一页'>下一页</a>");
			}else{
				$("#pagination").append("<a href='javascript:findOrder("+(p+1)+")' title='下一页'>下一页</a>");
			}
			
			$("#pagination").append('<div class="clearboth"></div>')
			
			//配合工具条刷新添加属性
			if(self!=top){
				top.readPageAgain.readAgain();
			}
			$.unblockUI();
			reader.stopAll();
			//点击订单号查看详情
			$(".flight_num_td  a").click(function(){
				var refundno = $(this).text();
				var status = $(this).parent().find(".status").val();
				$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
				reader.ready=function(){
					reader.voicePrompt.play("/iac/csair/mp3/ymjz");
				};
				timedCount();
				countreload();
				window.location.href="refundListMX?refundno="+refundno+"&status="+status;
			})
			
		}
	});	
}




//支付
function pay(e){
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	var orderNo = $(e).attr("id");
	countreload();
	window.location.href="payOrder?orderNo="+orderNo;
}

//退票
function refund(e){
	var orderNo = $(e).attr("data");
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	countreload();
	window.location.href="refund?orderNo="+orderNo;
}

//变更
function change(e){
	var orderNo = $(e).attr("data");
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	countreload();
	$.ajax({
		url:'change',
		type:'POST',
		data:{"orderNo":orderNo},
		dataType:'json',
		sync: false,
		success:function(data){
			if(data.notice == "false"){
				alert(data.msg)
				$.unblockUI();
				reader.stopAll();
			}else{
				window.location.href="change?orderNo="+orderNo;
			}
		}
	})
	
}


