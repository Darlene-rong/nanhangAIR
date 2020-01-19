$(function() {

  /*  window.parent.$.unblockUI();
    window.parent.reader.stopAll();
    */

  //全局点击  选择器
  const clickAll = `*[onclick^="submitData"]`;
  //需要特殊处理的页面  它是innerHTML镶嵌进去的;
  //https://www.csair.com/cn/czadscale/2019/20190730/index.html?WT.inner_id=gw-sqy-jc-190730
  //https://www.csair.com/cn/czadscale/2019/20190329_0/index.html?WT.inner_id=gw-xkhbk-jc-190329
  const innerArr = [{
    id: "gw-sqy-jc-190730",
    selector: ".ticketList .tabItem"
  }, {
    id: "gw-xkhbk-jc-190329",
    selector: ".line-tab-item,.b1-line-tab-item"
  }]

  //用来把onmouseover变成click的点击事件的选择器
  const liClass = [{
      navli: ".comNav li",
      toggle: "#mixprice2>div"
    },
    {
      navli: `.flight-group[data-id="0"] .scrollUI li`,
      toggle: `.flight-group[data-id="0"] .fls>div`
    },
    {
      navli: `.flight-group[data-id="1"] .scrollUI li`,
      toggle: `.flight-group[data-id="1"] .fls>div`
    },
    {
      navli: `.flight-group[data-id="2"] .scrollUI li`,
      toggle: `.flight-group[data-id="2"] .fls>div`
    },
    {
      navli: `.flight-group[data-id="3"] .scrollUI li`,
      toggle: `.flight-group[data-id="3"] .fls>div`
    }
  ]
  //添加a标签的li
  const liClassA = [
    ".partI li[class^='st']",
    ".comNav li",
    ".scrollUI li",
    ".flexslider .nav-a,.flexslider nav-b",
    ".line-tab .line-tab-item",
    ".ticketList .tabItem",
    ".b1-line-tab .b1-line-tab-item"
  ]

  var main = {
    init() {
      //优化全局超链接
      this.optimizeA();

      //把banner  Li变成A镶嵌的A链接
      //排除这个特殊的inner
      if($("#activityId").val() !="gw-xkhbk-jc-190329"){
        this.optimizeLiChangeA();
      }
      
      //把banner的滚动  Li变成点击事件
      this.optimizeLi();
      
      
      //立抢按钮跳转优化成自己的
      this.optimizeJump(this.optimizecallBack);
      
      //点切换才innerHTML的页面优化  2个
      this.clickInnerHTMLOptimize();
      
      //单纯的页面修改
      this.optimizeNomal();
    
    },
    optimizeNomal(){
      if($("#activityId").val()=="gw-ffxz-jc-190902"){
       /* let str = $(".js_header_top")[0].outerHTML;
        $("#zsl-header2").parent().prepend(str);
        $(".js_header_top").hide(); */
      }
    },
    optimizecallBack(){
      //特殊处理的回调
      
      //如果是这个活动页 单独处理 https://www.csair.com/cn/czadscale/2017/20170824_8/20170822.html?WT.inner_id=gw-gjhx8-jc-170824
      if($("#activityId").val()=="gw-gjhx8-jc-170824"){
        console.log("进来")
        //外层
           let arr = [
             [".partI .scrollUl1 li",".partI div[id^='c1_']","st01","st02"],
             ["li[id^='l_']","div[id^='y1_']","st83","st84"],
             ["li[id^='m_']","div[id^='n1_']","st61","st62"],
             ["li[id^='o_']","div[id^='p1_']","st03","st04"],
             ["li[id^='h_']","div[id^='g1_']","st51","st52"],
             ["li[id^='g_']","div[id^='h1_']","st91","st92"],
             ["li[id^='e_']","div[id^='f1_']","st93","st94"],
           ]
           arr.forEach(v=>{
             go($(v[0]),$(v[1]),v[2],v[3]);
           })
           
          function go(navDom,toggleDom,activeClass,nomalClass){
            //解除onmouseover事件
            navDom.unbind("mouseover");
            //抵消一些事件代理上的mouseover时间
            navDom.mouseover(function(e) {
              e.stopPropagation();
            });
            navDom.removeAttr("onmouseover");
            //处理过的做标记
            navDom.data("alreadyDeal",true);
            //重新绑定点击事件
            let temp = Array.from(navDom);
            navDom.click(function() {
              //css
              navDom.removeClass(activeClass+" "+nomalClass).addClass(nomalClass);
              $(this).removeClass(nomalClass).addClass(activeClass);
              //js
              let index = $(navDom).index(this);
              toggleDom.hide();
              toggleDom.eq(index).show();
            });
          }
      }
    },
    optimizeJump(cb) {
      let $this = this;
      timeHack.call(this,{
        totalTime: 5000, //总时长
        intervalTime: 200, //间隔时长多少秒
        //退出函数  需要返回true/false  this会与
        outFn() {
          //console.log(`$(${clickAll}).length == 0;`)
          return $(clickAll).length == 0;
        },
        //需要执行函数
        executFn:this.executFn,
        callbaclk:cb,
      });
    },
    executFn(){
      let $this = this;
      //console.log("优化立即抢购连接变成点击事件"+$(clickAll).length)
      $(clickAll).each(function() {
        let dom = this;
        //优化成A链接
        if (dom.tagName != "A") {
          dom = $this.optimizeClickA(dom);
        }
        //保存参数
        let params = $this.saveParam(dom);
        //去除onclick属性
        $(dom).removeAttr("onclick");
        //绑定新的点击事件
        dom.onclick = function() {
          loading.show();
          params = geturlByJson(params);
          window.location.href = "flightQuery?" + params;
        }
      });
    },
    saveParam(dom) {
      //submitData("广州,CAN,重庆,CKG,  S,2020-02-19,")
      //t=R&c1=CAN&c2=CKG&d1=2020-02-19&d2=2020-02-20&at=1&ct=0&it=0
      //t=S/R c1= c2
      let params = $(dom).attr("onclick");
      params = params.slice(params.indexOf("(") + 2, -2).split(",");
      //接口分配
      //flightQuery?c1=CAN&c2=WUH&date=2019-11-07&number1=1&number2=0&number3=0&year=2019&=11&day=07&year2=2019&month2=11&day2=08
      params = this.paramsDeal({
        t: params[4],
        c1: params[1],
        c2: params[3],
        d1: params[5],
        d2: params[6],
        at: 1,
        ct: 0,
        it: 0,
      });
      return params;
    },
    paramsDeal(data) {
      let dataParams = {
        c1: data.c1,
        c2: data.c2,
        number1: data.at,
        number2: data.ct,
        number3: data.it,
        date: data.d1,
        date2: data.d2,
      }
      //去的时间参数
      let temp = getymd(dataParams.date);
      dataParams["year"] = temp[0]
      dataParams["month"] = temp[1]
      dataParams["day"] = temp[2]
      //回来的时间参数
      if (data.t == "R" && dataParams.date2) {
        [dataParams["year2"], dataParams["month2"], dataParams["day2"]] = getymd(dataParams.date2);
      } else {
        //没有回来的就+1天  不要data2  才能后台不报错
        let temp = new Date(dataParams.date).getTime() + 1000 * 60 * 60 * 24;
        [dataParams["year2"], dataParams["month2"], dataParams["day2"]] = getymd(temp);
      }
      return dataParams;
    },
    optimizeClickA(dom) {
      if (dom.tagName != "A") {
        //保留爸爸
        let parent = $(dom).parent();
        //卸下原本属性
        let classAttr = $(dom).attr("class")
        let onCLickAttr = $(dom).attr("onclick")
        //孩子
        let children = $(dom).children();
        //删除原本
        $(dom).remove();
        //添加孩子
        let aDom = $(`<a href="javascript:;"></a>`)
          .attr("class", classAttr)
          .attr("onclick", onCLickAttr).append(children);
        //原本本身
        parent.append(aDom);
        return aDom[0];
      }
    },
    optimizeA() {
      //有些A标签没写 href  这个做优化
      timeHack.call(this,{
        totalTime: 5000, //总时长
        intervalTime: 200, //间隔时长多少秒
        //退出函数  需要返回true/false  this会与
        outFn() {
         return Array.from($("a")).every(v=>{
           return v.href;
         });
        },
        //需要执行函数
        executFn() {
          //console.log("把li优化成A标签+"+ $(liClassA.join(",")).length)
          $("a").each(function() {
            //href为空就加个值 不然没有选中效果
            if (!this.href){
               this.href = "javascript:;"
            }
            //为超链接加title
            if(!this.title){
              $(this).attr("title", $(this).text().trim())
            }
            
          });
        }
      });
      
    },
    clickInnerHTMLOptimize() {
      let $this = this;
      innerArr.forEach(v => {
        if ($("#activityId").val() == v.id) {
          $("body").on("click",v.selector,function() {
            setTimeout(() => {
              $this.executFn();
            }, 200);
          });
        }
      });
    },
    optimizeLi() {
      //有几个flight-group不乖没有data-id 加上；
      $(".flight-group").each(function(index){
        $(this).attr("data-id",index);
      });
      
      //liClass
      /*
      {
        navli:".comNav li",
        toggle:"#mixprice2>div"
      },
      */
     timeHack.call(this,{
       totalTime: 5000, //总时长
       intervalTime: 200, //间隔时长多少秒
       //退出函数  需要返回true/false  this会与
       outFn() {
         let selector = liClass.map(v=>v.navli).join(",");
         return Array.from($(selector)).every(v=>{
           return $(v).data("alreadyDeal")
         });
       },
       //需要执行函数
       executFn() {
         liClass.forEach(v => {
           //解除onmouseover事件
           $(v.navli).unbind("mouseover");
           //抵消一些事件代理上的mouseover时间
           $(v.navli).mouseover(function(e) {
             e.stopPropagation();
           });
           $(v.navli).removeAttr("onmouseover");
           //处理过的做标记
           $(v.navli).data("alreadyDeal",true);
           //重新绑定点击事件
           $(v.navli).click(function() {
             //css
             $(v.navli).removeClass("active");
             $(this).addClass("active");
             //js
             let index =   $(v.navli).index(this);
             $(v.toggle).hide();
             $(v.toggle).eq(index).show();
           });
         })
         
       }
     });
    },
    optimizeLiChangeA() {
      timeHack.call(this,{
        totalTime: 5000, //总时长
        intervalTime: 200, //间隔时长多少秒
        //退出函数  需要返回true/false  this会与
        outFn() {
          return Array.from($(liClassA.join(","))).every(v=>{
            return $(v).find("a").length>0;
          });
        },
        //需要执行函数
        executFn() {
          //console.log("把li优化成A标签+"+ $(liClassA.join(",")).length)
          $(liClassA.join(",")).each(function() {
            if($(this).find("a").length>0) return;
            let html = $(this).html();
            $(this).html(`<a href="javascript:;">${html}</a>`);
          });
        }
      });

    }
  }

  main.init();

});

/*********************工具方法****************************/

/**
 * 时间坑方法 总体目标是在一段时间等待异步数据回来后执行，保证执行函数的稳定执行
  详解:在一段时间  根据outFn判断依据返回是否继续轮询数据是否回来,轮询回来后在调用执行函数
  当花费时间大于总时长或满足条件后执行执行函数后退出。
  
  参数说明
  totalTime:总时长  默认5000
  intervalTime:间隔时长多少秒执行判断条件  默认1000
  //退出函数  需要返回true/false 
  outFn: () {},
  //需要执行回调函数
  executFn() {}  // 需要防止重复添加
  callbaclk()  回调函数  数据全部加载完成后
 */
function timeHack({totalTime=5000,intervalTime=1000,outFn,executFn,callbaclk}){
  let stime = new Date().getTime();
  let timer = setInterval(() => {
    if (!outFn.call(this)) {
      executFn.call(this);
      //这里做扫尾检测  怕执行函数后又有数据返回
      minHack.call(this,{outFn,executFn},timer);
    }
    if ((new Date().getTime() - stime) > totalTime) {
      callbaclk&&callbaclk();
      timer&&clearInterval(timer);
    }
  }, intervalTime);
  
  //最后在网络特别卡的情况做个收尾
  setTimeout(()=>{
    if(!outFn.call(this)){
      executFn.call(this);
    }
  },totalTime);
  
  function minHack({outFn,executFn},timer){
    setTimeout(()=>{
      if(!outFn.call(this)){
        executFn.call(this);
        minHack.call(this,{outFn,executFn},timer);
      }else{
        callbaclk&&callbaclk();
        timer&&clearInterval(timer);
      }
    },intervalTime);
  }
  
  
}


//获取年月日
function getymd(str) {
  let time = new Date(str);
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();

  function changestring(num) {
    return num < 10 ? "0" + num : num + "";
  }
  return [changestring(year), changestring(month), changestring(day)];
}

//json转url？
function geturlByJson(params) {
  let tempParam = [];
  for (let key in params) {
    //url中文转义
    tempParam.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
  }
  return tempParam.join("&")
}
