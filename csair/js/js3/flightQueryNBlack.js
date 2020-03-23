/*国际*/
$(() => {
    let param = "";
     //是否是第二次返程选择
    let isBack = false;
    //全局返回的数据
    let g_data = null;
    //全局回程的数据
    let g_data2 = null;
    //往返显示差价
    let totalPrice = 0;
    //返程的第二次查询要带上
    let targetSet = "";
    //提交时改变票的
    let solutionSet = "";
    window.main = {
      init() {
        setTimeout(()=>{
          if(!$.cookie('adult')){
            window.location.href="index";
            return;
          }
          this.getData();
          this.event();
        });
        
      },
      timeChange(date,id){
        let [y,m,d] = date.split("-");
        if(isBack){
          $.cookie('year2', y);
          $.cookie('month2', m);
          $.cookie('day2', d);
        }else{
          $.cookie('hbyear', y);
          $.cookie('hbmonth', m);
          $.cookie('hbday', d);
        }
        //回显输入框
        window.getSearchInfo();
        //请求数据
        if(isBack){
          this.getData2(id);
        }else{
          this.getData();
        }
      },
      serach() {
        //保存cookie
        window.setSearchInfo(2);
        //重置已经选好的
        this.hideDep();
        if (window.fromMain.verification()) {
          this.getData();
        }
      },
      togglePriceInfo(dom){
        if(!$(dom).hasClass("flight_sel_result_price_show")){
          $(".js_priceA").removeClass("flight_sel_result_price_show")
          $(".flight_sel_result_price_show_infos").hide();
          $(".js_priceInfos").hide();
          $(dom).addClass("flight_sel_result_price_show");
          $(dom).closest("li").siblings(".flight_sel_result_price_show_infos").fadeIn();
          let popDom = $(dom).closest("li").siblings(".flight_sel_result_price_show_infos").fadeIn().find(".js_pop");
          let index = $(dom).data("currindex");
          let v = popDom.data("value");
          if(isBack){
            let temp = v.cell[index].solution.displayTotal.amount - totalPrice;
            let mark ="";
            if(temp>0){
              mark = "+";
            }else if(temp<0){
              mark = "-";
            }
            popDom.attr("title",`全程含税价 ${mark}￥${temp}元,点击此处可以进行登录购票`)
          }else{
            popDom.attr("title",`全程含税价 ￥${v.cell[index].solution.displayTotal.amount}元,点击此处可以进行登录购票`)
          }
        }else{
          $(".js_priceA").removeClass("flight_sel_result_price_show")
          $(".flight_sel_result_price_show_infos").hide();
          $(".js_priceInfos").hide();
        }
      },
      closeul(){
        $(".js_priceA.flight_sel_result_price_show").trigger("click");
      },
      getData(){
        if(window.fromMain.isInner()){
          window.location.href = "requestJsp?pagePath=csair/jsp3/flightQuery";
          return;
        }
        let $this = this;
        param = window.fromMain.getFromJSON1();
        if($.cookie("isFancheng") == "true"){
          let arrivalDate =$.cookie("year2")+"-"+$.cookie("month2")+"-"+$.cookie("day2");
          param.arrivalDate = arrivalDate;
        }
        param.pullBlackTest = 1;
        loading.show();
        $.ajax({
          type: "post",
          url: "mainInterAirTicket",
          data: param,
          success:function(res){
            loading.hide();
            if(res.status==="0"){
              //全局使用
              g_data = res;
              //保存参数
              $.cookie("execution",res.data.execution);
              $.cookie("session",res.data.ticket.ita.session);
              $.cookie("solutionSet",res.data.ticket.ita.solutionSet);
              
              $("#errorAlert").hide();
              $(".js_banner").show();
              $(".js_flight_sel_result").show();
               $this.dataHTML(res.data.ticket.ita);
            }else{
              $(".js_banner").hide();
              $(".js_flight_sel_result").hide();
              $("#errorAlert").show();
            }
          }
        })
      },
      //获取返程数据
      getData2(id){
        let $this = this;
        let arrivalDate =$.cookie("year2")+"-"+$.cookie("month2")+"-"+$.cookie("day2");
        let param2 = {
          id:$.cookie("id"),
          execution:$.cookie("execution"),
          session:$.cookie("session"),
          solutionSet:$.cookie("solutionSet"),
          next:1,
          date:arrivalDate
        }
        if(id){
          param2.targetId = id;
          param2.targetSet = targetSet;
        }
        loading.show();
        $.ajax({
          type: "post",
          url: "airNextTicket",
          data: param2,
          success:function(res){
            loading.hide();
            if(res.status==="0"){
              $("#errorAlert").hide();
              $(".js_banner").show();
              $(".js_flight_sel_result").show();
              //格式转化 
              let dateFmt = [];
              res.data.price.ita.flexibleDates.column.forEach((v,i)=>{
                dateFmt.push({
                  date: v.returnDate,
                  solution: res.data.price.ita.flexibleDates.row[0].cell[i].solution
                });
              })
              //保存参数
              g_data2 = res;
              if(targetSet){
                let time = new Date(arrivalDate);
                $(".js_banner .flight_choosen_date").text(time.format("yyyy年MM月dd日"));
                //choosed
                $(".js_banner li").removeClass("choosed");
                $(".js_banner .flight_week_info_num").each(function(){
                  if($(this).text() == time.format("MM-dd")){
                    $(this).closest("li").addClass("choosed");
                  }
                })
              }else{
                targetSet =res.data.price.ita.solutionSet;
              }
  
               $this.dataHTML(res.data.ticket.ita);
               
            }else{
              $(".js_banner").hide();
              $(".js_flight_sel_result").hide();
              $("#errorAlert").show();
            }
          }
        })
      },
      event(){
       //item的tip的提示信息
       this.tipEvent();
       //login的切换
       this.loginModal();
     },
     loginModal(){
       $("body").on("click",".js_banner_title",function(){
         $(".js_banner_title").removeClass("action");
         $(this).addClass("action");
         let index = $(this).index();
         $(".js_banner_item").hide();
         $(".js_banner_item").eq(index).show();
       })
     },
     login(dom){
       $.blockUI({message: $('.page_mask_div') });
       $(".blockUI.blockPage").css({border:"none"});
  
       let parmas = $(dom).data("value");
       let currindex = $(dom).closest("ul").find(".flight_sel_result_price_show").data("currindex");
       //选中的航班  只用拿第一次的航班id 所以不用
       $.cookie("id",parmas.cell[currindex].solution.id);
     },
     verification1(){
       var username=$.trim($("#username").val());
       var password=$.trim($("#password").val());
       if(username==""){
         alert("请输入手机或邮箱号");
         return false;
       }
       var pattern = new RegExp("[`~!#$^&*()=|{}':;',\\[\\]<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]");
       for (var i = 0; i < username.length; i++) {
         if(pattern.test(username.substr(i,1))){
           alert("帐号中请不要输入特殊符号")
             return false;
         }
       }
       if(password==""){
         alert("请输入密码");
         return false;
       }
       for (var i = 0; i < password.length; i++) {
         if(pattern.test(password.substr(i,1))){
           alert("密码中请不要输入特殊符号")
           return false;
         }
       }
       return true;
     },
     tologin(){
       if($(".js_login_member").hasClass("action")){
         if(!this.verification1())return;
         loading.show("提示：正在登录及购票，请稍后。。。","/iac/csair/mp3/00005");
         var username=$.trim($("#username").val());
         var password=$.trim($("#password").val());
         let $this = this;
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
               //记录userId
              $.cookie("userId",data.userId)
              $this.jump()
             }else{
              alert(data.message);
              loading.hide();
              $.blockUI({message: $('.page_mask_div') });
              $(".blockUI.blockPage").css({border:"none"});
             }
           }
         });
       }else{
         alert("动态密码登陆尚未开放~")
       }
       
     },
      submit(dom){
        let parmas = $(dom).data("value");
        let currindex = $(dom).closest("ul").find(".flight_sel_result_price_show").data("currindex");
        //选中的航班  只用拿第一次的航班id 所以不用
        $.cookie("id",parmas.cell[currindex].solution.id);
  
          //是否是往返
        if($.cookie("isFancheng") == "true"){
          if(isBack){
            //往返都选好了
            this.jump();
          }else{
            isBack = true;
            targetSet = "";
            this.getData2();
            //总价
            totalPrice = parmas.cell[currindex].solution.displayTotal.amount;
            this.showDep(parmas,currindex);
          }
          //跳转购票逻辑
        }else{
          //loading.show("提示：正在购票，请稍后。。。","/iac/csair/mp3/00006");
          this.jump();
        }
      },
      //单程提交
      jump(){
        //提交前把solutionSet赋值上
        console.log(isBack);
        isBack&&$.cookie("solutionSet",g_data2.data.ticket.ita.solutionSet);
        console.log($.cookie("solutionSet"));
        window.location.href="requestJsp?pagePath=csair/jsp3/order";
      },
      hideDep(){
        //重置
        isBack = false;
        $("#flightInfo").hide();
      },
      showDep(v,index){
        let data = g_data.data.ticket.ita;
        //根据code找城市
        function getCity(code){
          let res = data.data.airport.filter(v=>v.code==code);
          res = data.data.city.filter(v=>v.code==res[0].city);
          return res.length>0?res[0].name:code
        }
        //根据code找航空公司
        function getCarrier(code){
          let res = data.data.carrier.filter(v=>v.code==code);
          return res.length>0?res[0].name:code
        }
        //根据code找航班中文机场名称
        function getAirport(code){
          let res = data.data.airport.filter(v=>v.code==code);
          return res.length>0?res[0].name:code
        }
        //根据code找航班型号
        function getAircraft(code){
          let res = data.data.aircraft.filter(v=>v.code==code);
          return res[0].name.length>15?res[0].shortName:res[0].name;
        }
        //格式化分钟为小时+分
        function fmtHM(num){
          return Math.floor(num/60)+"小时"+(num%60==0?"":num%60+"分钟")
        }
        function getIntervalDay(departrueDate,arrivalDate){
          arrivalDate = new Date(new Date(arrivalDate.slice(0,-6)).format("yyyy-MM-dd"))
          departrueDate = new Date(new Date(departrueDate.slice(0,-6)).format("yyyy-MM-dd"))
          const ONEDAY = 1000*60*60*24;
          let res =  (new Date(arrivalDate) - new Date(departrueDate))/ONEDAY;
          return res>0?"+"+res:"";
        }
        
       //否是共享
        function getoperationaHTML(v){
          if(v.leg[0].operationalFlight){
            return `<a href="javscript:;" class="js_hb" title="实际乘坐航班：${getCarrier(v.leg[0].operationalFlight.carrier)} ${v.leg[0].operationalFlight.carrier+v.leg[0].operationalFlight.number}，乘机手续请到 ${getCarrier( v.leg[0].operationalFlight.carrier)} 值机柜台办理。">
            <p>${v.flight.carrier+v.flight.number}</p>
            <p style="font-size:12px" class="js_code" data-value="${v.leg[0].operationalFlight.carrier+v.leg[0].operationalFlight.number}">(${v.leg[0].operationalFlight.carrier+v.leg[0].operationalFlight.number})</p>
            <p class="js_name">${getCarrier( v.leg[0].operationalFlight.carrier)}</p>`
          }else{
            return `
            <a href="javscript:;" class="js_hb" title="实际乘坐航班：${getCarrier(v.flight.carrier)} ${v.flight.carrier+v.flight.number}，乘机手续请到 ${getCarrier( v.flight.carrier)} 值机柜台办理。">
            <p class="js_code" data-value="${v.flight.carrier+v.flight.number}">${v.flight.carrier+v.flight.number}</p>
            <p class="js_name">${getCarrier(v.flight.carrier)}</p>`
          }
        }
        function getShareHTML(v){
          let name = "";
          let res = v.some(val=>{
            if(val.leg[0].operationalFlight){
              name = getCarrier(val.leg[0].operationalFlight.carrier);
              return true
            }
            return false;
          })
          if(!res){
            return ""
          }else{
            return `<p class="sp-detail-notice">共享航班不接受特殊餐食、特殊服务及无成人陪伴儿童申请，详情请咨询 ${name}</p>`
          }
        }
  
        function getBooking(currIndex){
          const cabinJSON ={
            "First":"头等舱",
            "Business":"公务舱",
            "PremiumEconomy":"明珠经济舱",
            "Economy":"经济舱"
          }
          let str = cabinJSON[data.sliceOptionsGrid.column[index].product]
          return `<strong>${v.cell[index].solution.slice.segment[currIndex].bookingInfo["0"].bookingCode}舱</strong>`+str;
        }
  
        let template = `
        <div class="page_title">
            <h2>已选航班</h2>
            <div class="page_title_more">
              <a href="javascript:location.reload()" style="color:#0e5ed7" title="修改航班">修改航班</a>
            </div>
            <div class="clearboth"></div>
          </div>
          <div class="ap_flight_info navBlock">
            <div class="sh-summary-detail">
              <div class="sm-trip trip-idx-0">
                <div class="sm-trip-prefix">去程</div>
                <div class="info">
                  <div class="sm-slice">
                    ${v.slice.segment.map((v,i)=>
                    `
                    <ul class="sm-seg seg-0">
                      <li class="sm-endpoint">
                        <span class="sm-ep-time">${new Date(v.leg[0].departure.slice(0,-6)).format("HH:mm")}</span>
                        <strong>${getAirport(v.origin)}</strong>
                        ${new Date(v.leg[0].departure.slice(0,-6)).format("yyyy-MM-dd")}
                      </li>
                      <li class="sm-flight">
                        <div class="line"><i class="ico-plane"></i></div>
                        <div class="btm">${v.flight.carrier+v.flight.number}</div>
                        ${
                          v.leg[0].operationalFlight?
                          `<div class="btm">(${v.leg[0].operationalFlight.carrier+v.leg[0].operationalFlight.number})</div>`:''
                        }
                        
                      </li>
                      <li class="sm-endpoint">
                      <span class="sm-ep-time">${new Date(v.leg[0].arrival.slice(0,-6)).format("HH:mm")}</span>
                      <strong>${getAirport(v.destination)}</strong>
                      ${new Date(v.leg[0].arrival.slice(0,-6)).format("yyyy-MM-dd")}
                      </li>
                      <li class="sm-cabin sm-cabin-ECO">
                      ${getBooking(i)}
                      </li>
                      ${
                        v.leg[0].operationalFlight?
                        `<div class="sm-seg-hint">
                        <i class="ico-tips">!</i>
                        实际乘坐航班：${getCarrier(v.leg[0].operationalFlight.carrier)} ${v.leg[0].operationalFlight.carrier+v.leg[0].operationalFlight.number}，乘机手续请到 ${getCarrier( v.leg[0].operationalFlight.carrier)} 值机柜台办理。
                        </div>
                        <div class="sm-seg-hint">
                        共享航班不接受特殊餐食、特殊服务及无成人陪伴儿童申请，详情请咨询中国东方航空公司
                        </div>`:""
                      }
                    </ul>
                    `).join("")}
                    
                    
                  </div>
                </div>
              </div>
              <div class="sm-trip hide trip-idx-1" >
                <div class="sm-trip-prefix">回程</div>
                <div class="info"></div>
              </div>
              <div class="detail-price">
                <table id="summary-prc-table" class="sh-sm-table">
                  <thead>
                    <tr>
                      <th>旅客</th>
                      <th>票价</th>
                      <th>税项/附加税</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${v.cell[index].solution.pricing.map(v=>{
                      let temp ={
                        "adults":"成人",
                        "children":"儿童",
                        "infantsInLap":"婴儿"
                      };
                      return `
                      <tr>
                        <td>${temp[Object.keys(v.ext.pax)[0]]} x ${v.ext.pax[Object.keys(v.ext.pax)[0]]}</td>
                        <td>¥<span id="summary-prc-fare-0">${v.displayFareTotal.amount}</span></td>
                        <td>¥<span id="summary-prc-tax-0">${v.displayTaxTotal.amount}</span></td>
                      </tr>
                      
                      `
                    }).join("")}
                  </tbody>
                </table>
              </div>
  
            </div>
          </div>
          <div class="ap_all_price">
            总价：<span class="flight_price orangefont" id="total">${v.cell[index].solution.displayTotal.amount}</span>
          </div>
        `;
        $("#flightInfo").html(template).show();
      },
      tipEvent(){
        $("body").on("focus mouseenter",".js_hb",function(){
          let code = $(this).find(".js_code").data("value");
          let name = $(this).find(".js_name").text();
         
          let html = ` <div class="ticket-box">
          <div class="tsxx">
              实际乘坐航班： ${name} ${code}，乘机手续请到 ${name} 值机柜台办理。
          </div>
        </div>`
          $("#xlxx").html(html.trim());
          var top = $(this).offset().top+$(this).height();
                  var left = $(this).offset().left;
          $("#xlxx").attr("style","display:block; position:absolute;  margin-left:"+left+"px; margin-top:"+top+"px; top:10px");
        })
       
        //触发本身的隐藏时间
        $("body").on("blur mouseleave",".js_hb",function(){
          $("#xlxx").hide();
        })
        //自身隐藏显示
        $("body").on("mouseenter","#xlxx",function(){
          $(this).show();
        })
        $("body").on("mouseleave","#xlxx",function(){
          $(this).hide();
        })
        
      },
      dataHTML(data){
  
        // First 头等舱 Business 公务舱  PremiumEconomy  明珠经济舱 Economy 经济舱 
        //column: [{product: "Economy"}, {product: "PremiumEconomy"}, {product: "Business"},{product:"First"}]
  
        //找到对应显示的key
        const cabinJSON ={
          "First":"头等舱",
          "Business":"公务舱",
          "PremiumEconomy":"明珠经济舱",
          "Economy":"经济舱"
        }
        let indexArr = {
          First:-1,
          Business:-1,
          PremiumEconomy:-1,
          Economy:-1
        };
        data.sliceOptionsGrid.column.map((v,i)=>{
          if(v.product=="First")indexArr.First = i;
          if(v.product=="Business")indexArr.Business = i;
          if(v.product=="PremiumEconomy")indexArr.PremiumEconomy = i;
          if(v.product=="Economy")indexArr.Economy = i;
        });
  
        //根据code找城市
        function getCity(code){
          let res = data.data.airport.filter(v=>v.code==code);
          res = data.data.city.filter(v=>v.code==res[0].city);
          return res.length>0?res[0].name:code
        }
        //根据code找航空公司
        function getCarrier(code){
          let res = data.data.carrier.filter(v=>v.code==code);
          return res.length>0?res[0].name:code
        }
        //根据code找航班中文机场名称
        function getAirport(code){
          let res = data.data.airport.filter(v=>v.code==code);
          return res.length>0?res[0].name:code
        }
        //根据code找航班型号
        function getAircraft(code){
          let res = data.data.aircraft.filter(v=>v.code==code);
          return res[0].name.length>15?res[0].shortName:res[0].name;
        }
        //格式化分钟为小时+分
        function fmtHM(num){
          return Math.floor(num/60)+"小时"+(num%60==0?"":num%60+"分钟")
        }
        function getIntervalDay(departrueDate,arrivalDate){
          arrivalDate = new Date(new Date(arrivalDate.slice(0,-6)).format("yyyy-MM-dd"))
          departrueDate = new Date(new Date(departrueDate.slice(0,-6)).format("yyyy-MM-dd"))
          const ONEDAY = 1000*60*60*24;
          let res =  (new Date(arrivalDate) - new Date(departrueDate))/ONEDAY;
          return res>0?"+"+res:"";
        }
  
        function getTotal(number){
          if(isBack){
            let temp = number - totalPrice;
            if(temp<0){
              return `- ¥ ${Math.abs(temp)}`
            }else if(temp>0){
              return `+ ¥ ${temp}`
            }else{
              return `¥ ${temp}`
            }
          }else{
            return `¥ ${number}`;
          }
        }
  
        function getTypeA(v,key){
          //  // First 头等舱 Business 公务舱  PremiumEconomy  明珠经济舱 Economy 经济舱 
          let index = indexArr[key];
          
          if(index==-1)return "";
  
          if(v[index]&&v[index].solution){
            return `<a href="javascript:void(0);" class="js_priceA js_Index" data-currindex="${index}" title="${cabinJSON[key]},票价${getTotal(v[index].solution.displayTotal.amount)}元，点击购票" onclick="main.togglePriceInfo(this)">
            ${getTotal(v[index].solution.displayTotal.amount)}
            <span>${isBack?"差价":"全程含税价"}</span>
            </a>`
          }else{
            return `<a href="javascript:void(0);" class="none" style="color: #999;" title="此航班${cabinJSON[key]}售罄">售罄</a>`
          }
        }
        
       //否是共享
        function getoperationaHTML(v){
          if(v.leg[0].operationalFlight){
            return `<a href="javscript:;" class="js_hb" title="实际乘坐航班：${getCarrier(v.leg[0].operationalFlight.carrier)} ${v.leg[0].operationalFlight.carrier+v.leg[0].operationalFlight.number}，乘机手续请到 ${getCarrier( v.leg[0].operationalFlight.carrier)} 值机柜台办理。">
            <p>${v.flight.carrier+v.flight.number}</p>
            <p style="font-size:12px" class="js_code" data-value="${v.leg[0].operationalFlight.carrier+v.leg[0].operationalFlight.number}">(${v.leg[0].operationalFlight.carrier+v.leg[0].operationalFlight.number})</p>
            <p class="js_name">${getCarrier( v.leg[0].operationalFlight.carrier)}</p>`
          }else{
            return `
            <a href="javscript:;" class="js_hb" title="实际乘坐航班：${getCarrier(v.flight.carrier)} ${v.flight.carrier+v.flight.number}，乘机手续请到 ${getCarrier( v.flight.carrier)} 值机柜台办理。">
            <p class="js_code" data-value="${v.flight.carrier+v.flight.number}">${v.flight.carrier+v.flight.number}</p>
            <p class="js_name">${getCarrier(v.flight.carrier)}</p>`
          }
        }
        function getShareHTML(v){
          let name = "";
          let res = v.some(val=>{
            if(val.leg[0].operationalFlight){
              name = getCarrier(val.leg[0].operationalFlight.carrier);
              return true
            }
            return false;
          })
          if(!res){
            return ""
          }else{
            return `<p class="sp-detail-notice">共享航班不接受特殊餐食、特殊服务及无成人陪伴儿童申请，详情请咨询 ${name}</p>`
          }
        }
  
        function loginHTML(val){
          
          let login = ` <a class="pop js_pop"  data-value='${JSON.stringify(val)}' href="javascript:;" onclick="main.login(this);">登录购票预定</a>`
          
          let erlogin = `<a class="pop js_pop" data-value='${JSON.stringify(val)}' href="javascript:;" onclick="main.submit(this);">预定</a>`;
          //登陆
            if(window.userName){
              return erlogin;
            }else{
              //是否是往返
              if($.cookie("isFancheng") == "false"){
                return login
              }else{
                //返程第二次选择才要登陆
                if(isBack){
                  return login
                }else{
                  return erlogin;
              }
            }
          }
       } 
       
        let template = `
        <div class="flight_sel_title">
              <ul class="flight_sel_result_ul even navBlock" title="此处为舱位表头,分别是：头等/公务舱、明珠经济舱、经济舱，点击ctrl加下按钮查看航班列表">
                <li class="flight_sel_result_price">
                ${indexArr['First']!=-1?`<a>头等舱</a>`:""}
                ${indexArr['Business']!=-1?`<a>公务舱</a>`:""}
                ${indexArr['PremiumEconomy']!=-1?`<a>明珠经济舱</a>`:""}
                ${indexArr['Economy']!=-1?`<a>经济舱</a>`:""}
                </li>
                <div class="clearboth"></div>
              </ul>
            </div>
            ${
              data.sliceOptionsGrid.row.map((v,i)=>{
                return `<ul class="flight_sel_result_ul even navBlock clearfix">
                    <div style="float: left;position:relative;width:16px;height: 86px;">
                      <a href="javascript:;"
                      class="question" style="height:16px;position:absolute;top:0;bottom:0;margin:auto;"
                        title="此航线起飞时间:${new Date(v.slice.segment[0].leg[0].departure.slice(0,-6)).format("HH:mm")}到达时间:${new Date(v.slice.segment[v.slice.segment.length-1].leg[0].arrival.slice(0,-6)).format("HH:mm")},继续按tab键选择该航班舱位">
                        <img src="/iac/csair/img/question.png" >
                        </a></div>
  
                  <li class="flight_sel_result_dest">
                    <div class="flight_sel_result_dest_start">
                      <div class="flight_sel_result_dest_time">${new Date(v.slice.segment[0].leg[0].departure.slice(0,-6)).format("HH:mm")}分</div>
                      <div class="flight_sel_result_dest_city">${getAirport(v.slice.segment[0].origin)}</div>
                    </div>
                    <div class="flight_sel_result_dest_plane_info">
                    ${v.slice.stopCount==0?
                    `<div class="flight_num">${v.slice.segment[0].flight.carrier+v.slice.segment[0].flight.number}</div>
                    <div class="flight_type">${getAircraft(v.slice.segment[0].leg[0].aircraft.code)}</div>
                    `:
                    `<div class="flight_num">${v.slice.stopCount}次中转</div>`
                  }
                      
                    </div>
                    <div class="flight_sel_result_dest_end">
                      <div class="flight_sel_result_dest_time">${new Date(v.slice.segment[v.slice.segment.length-1].leg[0].arrival.slice(0,-6)).format("HH:mm")}分 ${getIntervalDay(v.slice.segment[v.slice.segment.length-1].leg[0].arrival,v.slice.segment[0].leg[0].departure)}</div>
                      <div class="flight_sel_result_dest_city">${getAirport(v.slice.segment[v.slice.segment.length-1].destination)}</div>
                    </div>
                  </li>
                  <li class="flight_time">
                    ${fmtHM(v.slice.duration)}
                  </li>
                  <li class="flight_sel_result_price">
                  ${getTypeA(v.cell,"First")}
                  ${getTypeA(v.cell,"Business")}
                  ${getTypeA(v.cell,"PremiumEconomy")}
                  ${getTypeA(v.cell,"Economy")}
                  </li>
                  <li class="flight_sel_result_price_show_infos" style="display:none">
                    ${
                      v.slice.segment.map(val=>{
                        return `
                        <div class="fligt_log_item clearfix">
                          <div class="fligt_log_left">
                            <div class="fligt_log_start">
                              <strong class="m-r-xs">起飞:</strong>
                              <span class="m-r-xs">${new Date(val.leg[0].departure.slice(0,-6)).format("HH:mm")}</span>
                              <span class="m-r-xs">${new Date(val.leg[0].departure.slice(0,-6)).format("MM月dd日")}</span>
                              <strong>(${getCity(val.origin)}) ${getAirport(val.origin)}</strong>
                            </div>
                            <div class="fligt_log_end">
                              <strong class="m-r-xs">到达:</strong>
                              <span class="m-r-xs">${new Date(val.leg[0].arrival.slice(0,-6)).format("HH:mm")}</span>
                              <span class="m-r-xs">${new Date(val.leg[0].arrival.slice(0,-6)).format("MM月dd日")}</span>
                              <strong>(${getCity(val.destination)}) ${getAirport(val.destination)}</strong>
                            </div>
                          </div>
                          <div class="fligt_log_right">
                            <div class="fligt_log_serve">
                              <span class="m-r-xs">${val.leg[0].scheduledServices.length>0?"提供餐饮":""}</span>
                              <span class="m-r-xs">飞行时间:${fmtHM(val.leg[0].duration)}</span>
                              <span class="m-r-xs">${getAircraft(val.leg[0].aircraft.code)}</span>
                            </div>
                            <div class="fligt_log_company">
                            ${getoperationaHTML(val)}
                             
                                <!--<img src="https://b2c.csair.com/B2C40/static/main/images/airlines/CZ.png" alt="航空公司">-->
                              </a>
                            </div>
                          </div>
                        </div>
                        ${
                          val.connection?
                          `<div class="divided">
                            <strong class="m-r-xs">中转于 ${getCity(val.destination)} </strong>
                            <span>停留时长： ${fmtHM(val.connection.duration)}</span>
                           </div>`:""
                        }
                        `
                      }).join("")
                    }
                      <div class="opts clearfix">
                          <div class="tip">
                            <p class="sp-detail-notice">出发时间和到达时间均为当地时间</p>
                            ${v.slice.segment.every(val=>val.flight.carrier == v.slice.segment[0].flight.carrier)?"":`<p class="sp-detail-notice">温馨提示：此中转行程由不同航空公司分别执飞，请您留意到达航站楼跟出发航站楼是否一样</p>`}
                            ${getShareHTML(v.slice.segment)}
                            </div>
  
                          <div class="sub">
                          ${loginHTML(v)}
                          </div>
                      </div>
                      
                      <button type="button" onclick="main.closeul()" title="点击收起预定舱位">点击收起预定舱位</button>
                  </li>
                </ul>`
              }).join("")
            }
            `
  
            $(".js_flight_sel_result").html(template);
      },

    }
  
    main.init();
  });
  