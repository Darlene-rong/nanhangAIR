
$(function() {
	var loadSoundManagerInterval = setInterval(function(){
		if(reader.soundManagerIsready){
			clearInterval(loadSoundManagerInterval);
			findOrder(1);
		}
	}, 10);	
	
});

function findOrder(p){
	
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	ordertimedCount();
	$.ajaxSetup({ cache:false });
	$.ajax({
		url:'queryOrderEx',
		type:'POST',
		data:{"page":p},
		dataType:'json',
		sync: false,
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
				var depport2="";
				var arrport2="";
				var deptime="";
				if(seginfo.length){
//					for(var k=0;k<seginfo.length;k++){
//						alert(seginfo.length);
//						depport = seginfo[k].depport;
//						arrport = seginfo[k].arrport;
//						
//					}
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
				var totalmileage = orders[j].totalmileage;
				var status= orders[j].status;
				if(status=='C' || status=='P'){
					status='待支付';
				}else if(status=='D'){
					status='已取消';
				}else if(status=='E'){
					status='已出票';
				}
//				alert("seginfo.length===>"+seginfo.length)
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
//				alert(orderno+"  "+a)
				if(a=="待支付"){
					if(undefined == totalmileage){
						var ht= "<input type='button' value='支付' id='"+orderno+"'   title='支付' onclick='pay(this)' >"
					}else{
						var ht= "<input type='button' value='支付' id='"+orderno+"'   title='支付' onclick='payLC(this)' >"
					}
					
						$("."+orderno).html(ht)
				}else if(a=="已出票"){
					var ht= "<input type='button' value='变更' data='"+orderno+"'   title='变更' onclick='change(this)' ></br><input type='button' value='退票' data='"+orderno+"'   title='退票' onclick='refund(this)' >"
					$("."+orderno).html(ht)
				}else{
					var ht="";
					$("."+orderno).html(ht)
				}
			}
			
		
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


//支付
function pay(e){
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	var orderNo = $(e).attr("id");
	countreload();
	window.location.href="payOrder?orderNo="+orderNo;
}
//里程支付
function payLC(e){
	$.blockUI({ message: "<h1><a id='msg' href='#' title='提示：页面加载中，请稍候。。。'>提示：页面加载中，请稍候。。。(<span id='countdown'>900</span>)</a></h1>" });
	reader.voicePrompt.play("/iac/csair/mp3/ymjz");
	timedCount();
	var orderNo = $(e).attr("id");
	countreload();
	window.location.href="payLCOrder?orderNo="+orderNo;
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


