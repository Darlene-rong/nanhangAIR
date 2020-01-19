//根据ip获取城市
var baseCity="";

//根据ip获取城市
$.ajax({
  type : "post",  
  data:{pageUrl:"https://www.csair.com/iplocator/ip.php"},
  url : "requestURL",
  success:function(res){
    if(res){
      var sIndex = res.indexOf("省")+1;
      var eIndex = res.indexOf("市");
      baseCity = res.slice(sIndex,eIndex);
    }
  }
});

//机票促销
var loadSoundManagerInterval = setInterval(function() {
  //当声音插件和ip当前城市
  if (reader.soundManagerIsready && baseCity) {
    clearInterval(loadSoundManagerInterval);
    discountTicket.init();
  }
}, 200);
//整体原始数据
let arrO = [];
let arrCurr = [];
//下拉原始数据
let seletO = [];
let selectCurr = [];

window.discountTicket = {
  init: function() {
    this.getDate("N");
    this.btnClick();
    this.srarchInit();
  },
  srarchInit: function() {
    var useCities = window.info3LowerCase = '';
    var useCities1 = window.info3LowerCase = '';
    $.each(cities, function(i, jsonObj) { //循环citiesData.js中的城市
      if (jsonObj.info7 == "China") {
        if (jsonObj.info3) {
          window.info3LowerCase = jsonObj.info3.toLowerCase();
          window.info2LowerCase = jsonObj.info2.toLowerCase();
        }
        var str = info3LowerCase.substring(0, 1);
        var option = '<option value="' + jsonObj.info4 + '" mark="' + jsonObj.info3 + '" text="' + jsonObj.name +
          '" >' + info3LowerCase + ' [' + jsonObj.name + ']</option>'
        $("#cfcs1").find("optgroup[label='" + str.toUpperCase() + "']").append(option);
      }
    });
    //sort();
    $("#cfcs").html($("#cfcs1").html());
    $("#ddcs").html($("#cfcs1").html());
  },
  serach: function() {
    var c1 = $("#cfcs").val();
    var c2 = $("#ddcs").val();
    if (c1 == null || c1 == "" || c1 == "支持首字母简拼") {
      alert("请选择出发城市")
      return;
    }
    if (c2 == null || c2 == "" || c2 == "支持首字母简拼") {
      alert("请选择到达城市")
      return;
    }
    if (c1 == c2) {
      alert("出发城市与到达城市不能相同")
      return;
    }
    $.blockUI({
      message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>"
    });
    reader.voicePrompt.play("/iac/csair/mp3/ymjz");
    timedCount();
    $.ajaxSetup({
      cache: false
    });

    $(".js_info").html("")
    $(".js_error").hide();
    $(".echar_box").hide();

    $.ajax({
      type: "get",
      sync: true,
      url: baseURL + "/portal/minPrice/queryLineMinPrice",
      data: {
        jsoncallback: "discountTicket.echar",
        inter: "N",
        callback: "discountTicket.echar",
        depCity: c1,
        arrCity: c2
      },
      dataType: "jsonp", //数据类型为jsonp
      jsonp: "jsonpCallback", //服务端用于接收callback调用的function名的参数 
      complete: function(data) {
        $.unblockUI();
        reader.stopAll();
      }
    });
  },
  echar:function(data) {
    if (!data) {
      $(".js_error").show();
      return;
    }
    var c1 = $("#cfcs option:selected").attr("text");
    var c2 = $("#ddcs option:selected").attr("text");
    $(".js_info").html(`<span class="fw700">${c1} -- ${c2}</span>   未来一月的票价情况`)
    $(".echar_box").show();
    /*
    ARRCITY: "WUH"
    ARRCTIYNAME_EN: "Wuhan"
    ARRCTIYNAME_ZH: "武汉"
    DEPCITY: "CAN"
    DEPCTIYNAME_EN: "Guangzhou"
    DEPCTIYNAME_ZH: "广州"
    FLIGHT: [{DEPDATE: "2019-11-17", MINPRICE: "430"}, {DEPDATE: "2019-11-05", MINPRICE: "430"},…]
    0: {DEPDATE: "2019-11-17", MINPRICE: "430"}
    1: {DEPDATE: "2019-11-05", MINPRICE: "430"}
    2: {DEPDATE: "2019-10-31", MINPRICE: "430"}
    3: {DEPDATE: "2019-10-28", MINPRICE: "430"}
    4: {DEPDATE: "2019-11-10", MINPRICE: "430"}
    5: {DEPDATE: "2019-11-19", MINPRICE: "430"}
    6: {DEPDATE: "2019-11-09", MINPRICE: "430"}
    7: {DEPDATE: "2019-10-30", MINPRICE: "410"}
    8: {DEPDATE: "2019-11-18", MINPRICE: "410"}
    9: {DEPDATE: "2019-11-12", MINPRICE: "430"}
    10: {DEPDATE: "2019-11-02", MINPRICE: "430"}
    11: {DEPDATE: "2019-10-22", MINPRICE: "430"}
    12: {DEPDATE: "2019-10-24", MINPRICE: "410"}
    13: {DEPDATE: "2019-11-07", MINPRICE: "430"}
    14: {DEPDATE: "2019-10-26", MINPRICE: "410"}
    15: {DEPDATE: "2019-10-23", MINPRICE: "430"}
    16: {DEPDATE: "2019-11-04", MINPRICE: "430"}
    17: {DEPDATE: "2019-10-25", MINPRICE: "540"}
    18: {DEPDATE: "2019-11-03", MINPRICE: "430"}
    19: {DEPDATE: "2019-10-29", MINPRICE: "410"}
    20: {DEPDATE: "2019-11-20", MINPRICE: "410"}
    21: {DEPDATE: "2019-11-16", MINPRICE: "430"}
    22: {DEPDATE: "2019-11-08", MINPRICE: "430"}
    23: {DEPDATE: "2019-11-11", MINPRICE: "410"}
    24: {DEPDATE: "2019-10-27", MINPRICE: "550"}
    25: {DEPDATE: "2019-11-06", MINPRICE: "410"}
    26: {DEPDATE: "2019-11-01", MINPRICE: "620"}
    27: {DEPDATE: "2019-11-15", MINPRICE: "430"}
    28: {DEPDATE: "2019-11-14", MINPRICE: "430"}
    29: {DEPDATE: "2019-11-13", MINPRICE: "410"}
    */
    //排序
    data = data.FROMOFLIGHTS;
    data.forEach(v => {
      v.FLIGHT.sort((a, b) => {
        return new Date(a.DEPDATE) -new Date(b.DEPDATE);
      });
    });
    //去程
    let xAxis1 = data[0].FLIGHT.map((v) => {
      return v.DEPDATE.split("-")[2];
    });
    let series1 = data[0].FLIGHT.map((v) => {
      //把数据代入tip
      return {
        value: v.MINPRICE,
        date: v.DEPDATE
      };
    });
    //回程
    let xAxis2 = data[1].FLIGHT.map((v) => {
      return v.DEPDATE.split("-")[2];
    });
    let series2 = data[1].FLIGHT.map((v) => {
      //把数据代入tip
      return {
        value: v.MINPRICE,
        date: v.DEPDATE
      };
    });

    function getOption(titleName,xAxisData,seriesData,color) {
      return {
        title: {
          text: titleName,
          x: '0',
          y: "13",
          textStyle: {
            fontSize: 14,
            fontWeight: '600',
            color: "#008DD3",
          },
        },
        color: color||"#008DD3",
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(params) {
            let index = params[0].dataIndex;
            let str = params[0].data.date;
            let data = new Date(str);
            let month = data.getMonth() + 1;
            let day = data.getDate();
            const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
            let weekstr = week[data.getDay()];
            return `${month}月${day}日(${weekstr})<br>
                  <span class='fw600'>${params[0].value}</span>元`
          }
        },
        grid: {
          top: "25",
          left: '5%',
          right: '4%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xAxisData,
          axisTick: {
            alignWithLabel: true
          },
          splitLine: {
            show: true
          }
        },
        yAxis: {
          type: 'value',
          scale: true,
          splitLine: {
            lineStyle: 'none'
          },
        },
        series: [
          {
            type: 'line',
            step: 'middle',
            data: seriesData,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
          }
        ]
      }
    }
    let chart1 = echarts.init($(".js_echar_box1")[0]);
    chart1.setOption(getOption("去程",xAxis1,series1)); 
    //回程
    let chart2 = echarts.init($(".js_echar_box2")[0]);
    chart2.setOption(getOption("回程",xAxis2,series2,"#cc6600"));
    $(window).resize(function() {
      chart1.resize();
      chart2.resize();
    })
    

  },
  btnClick: function() {
    $(function() {
      $("body").on("click", ".js_btn", function() {
        $(".js_btn").removeClass("active");
        $(this).addClass("active");
      })
    });
  },
  getDate: function(inter) {
    $.blockUI({
      message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>"
    });
    reader.voicePrompt.play("/iac/csair/mp3/ymjz");
    timedCount();
    $.ajaxSetup({
      cache: false
    });

    $.ajax({
      type: "get",
      sync: true,
      url: baseURL + "/portal/minPrice/queryMinPriceInAirLines",
      data: {
        jsoncallback: "discountTicket.dataDeal",
        inter: inter,
        callback: "discountTicket.dataDeal"
      },
      dataType: "jsonp", //数据类型为jsonp
      jsonp: "jsonpCallback", //服务端用于接收callback调用的function名的参数 
      complete: function(data) {
        $.unblockUI();
        reader.stopAll();
      }
    });
  },
  dataDeal: function(data) {
    //数据初始化
    arrO = [];
    arrCurr = [];
    seletO = [];
    selectCurr = [];
    $(".js_sug_input").val("");
    //按照拼音排序
    data.FROMOFLIGHTS.sort(function(a, b) {
      var len = a.DEPCTIYNAME_EN.length < b.DEPCTIYNAME_EN.length ? a.DEPCTIYNAME_EN.length : b.DEPCTIYNAME_EN.length;
      for (var i = 0; i < len; i++) {
        if (a.DEPCTIYNAME_EN.charCodeAt(i) < b.DEPCTIYNAME_EN.charCodeAt(i)) {
          return -1;
        }
        if (a.DEPCTIYNAME_EN.charCodeAt(i) == b.DEPCTIYNAME_EN.charCodeAt(i)) {
          continue;
        }
        return 1;
      }
    })
    //组装成一个大数组  把ip对应的城市提前
    data.FROMOFLIGHTS.forEach(function(val, index) {
      //ip对应的城市
      if (baseCity == val["DEPCTIYNAME_ZH"]) {
        selectCurr.unshift({
          DEPCTIYNAME_ZH: val["DEPCTIYNAME_ZH"],
          DEPCTIYNAME_EN: val["DEPCTIYNAME_EN"]
        })
      } else {
        selectCurr.push({
          DEPCTIYNAME_ZH: val["DEPCTIYNAME_ZH"],
          DEPCTIYNAME_EN: val["DEPCTIYNAME_EN"]
        })
      }

      val.FLIGHT.forEach(function(val2) {
        val2["DEPCITY"] = val["DEPCITY"]
        val2["DEPCTIYNAME_EN"] = val["DEPCTIYNAME_EN"]
        val2["DEPCTIYNAME_ZH"] = val["DEPCTIYNAME_ZH"]
        val2["REGION"] = val["REGION"]
        val2["REGION_CODE"] = val["REGION_CODE"]
        //ip对应的城市
        if (baseCity == val["DEPCTIYNAME_ZH"]) {
          arrCurr.unshift(val2);
        } else {
          arrCurr.push(val2);
        }
      })
    })
    seletO = JSON.parse(JSON.stringify(selectCurr));
    arrO = JSON.parse(JSON.stringify(arrCurr));
    this.pageInit();
    this.selectInit();
    this.searchEvent(this.searchClick.bind(this));
  },
  searchClick: function(city) {
    arrCurr = JSON.parse(JSON.stringify(arrO));
    if (city) {
      arrCurr = arrCurr.filter(function(v) {
        return v.DEPCTIYNAME_ZH == city
      });
    }
    this.pageInit();
  },
  pageInit: function() {
    let pageNo = 0;
    let pageSize = 10;
    page(pageNo, pageSize);
    //填肉
    function page(pageNo = 0, pageSize = 10) {
      let startIndex = 0,
        endIndex = 0;
      startIndex = pageNo * pageSize;
      endIndex = pageSize * (pageNo + 1);
      let newArr = arrCurr.slice(startIndex, endIndex);
      //渲染
      let html = "";
      newArr.forEach(function(val) {
        html +=
          `<tr>
                  <td>${val.DEPCTIYNAME_ZH}</td>
                  <td>${val.ARRCTIYNAME_ZH}</td>
                  <td class="fw700">￥${val.MINPRICE}起</td>
                  <td>${val.SEGTYPE=='S'?'单程':'往返'}</td>
                  <td>${val.DEPDATE}</td>
                  <td>${val.RETURNDATE||'-'}</td>
                  <td><a href="javascript:;" class="m-btn min" data-value='${JSON.stringify(val)}' 
                   onclick="discountTicket.jumpUrl(this)"
                   title="出发城市${val.DEPCTIYNAME_ZH},到达城市${val.ARRCTIYNAME_ZH},特价${val.MINPRICE},去程日期${val.DEPDATE},点我去购买"
                   >立即抢购</a></td>
                </tr>`;
      })
      $(".js_content").html(html);
      //指读工具栏重构
      reBuildTool();
    }

    //分页  起始页为0;
    $("#tzPage").tzPage(arrCurr.length, {
      num_display_entries: 8, //主体页数
      num_edge_entries: 2, //边缘页数
      current_page: 0, //指明选中页码
      items_per_page: pageSize, //每页显示多条条
      prev_text: "上一页",
      next_text: "下一页",
      showGo: false, //显示跳转
      showSelect: false,
      prev_show_always: true,
      next_show_always: true,
      callback: function(pageno) { //会回传两个参数一个当前页，显示的页数
        pageNo = pageno;
        page(pageNo, pageSize);
      }
    });
  },
  selectInit: function() {
    //下拉
    let lisStr = "";
    for (let li of selectCurr) {
      lisStr +=
        ` <li data-pinyin="${li.DEPCTIYNAME_EN.toLowerCase()}"><span>${li.DEPCTIYNAME_ZH}</span></li>`
    }
    $(".js_suggestion").html(lisStr);
  },
  searchEvent: function(callBack) {
    //进来就取消绑定
    $(".js_sug_input").unbind("focus input blur keydown");
    $(".js_suggestion").unbind("click input");

    $(".js_sug_input").on("focus", function() {
      $(".js_suggestion").slideDown("fast");
      $(".js_suggestion li").show().removeClass("active");
    });
    $(".js_sug_input").on("blur", function() {
      if (!$(this).val()) {
        callBack && callBack();
      }
    });
    //显示隐藏
    $(".js_sug_input").on("input", function() {
      $(".js_suggestion").slideDown("fast");
      let val = $(this).val().toLowerCase();
      $(".js_suggestion li").show().removeClass("active");
      $(".js_suggestion li").each(function(index, dom) {
        if ($(dom).text().indexOf(val) == -1 && $(dom).data("pinyin").indexOf(val) == -1) {
          $(dom).hide();
        }
      });
    });
    //点击其他位置隐藏
    $(window).on("click", function(e) {
      if (!($(e.target).closest(".index_search").length > 0)) {
        $(".js_suggestion").hide();
      }
    });
    //li点击
    $(".js_suggestion").on("click", "li", function() {
      //$(this).find("a").trigger("click");
      $(".js_suggestion").slideUp("fast");
      $(".js_sug_input").val($(this).text());
      callBack && callBack($(this).text());
    });
    //键盘事件
    $(".js_sug_input").on("keydown", function(e) {
      let activeLiDom = $(".js_suggestion li.active");
      //enter
      if (e.keyCode == 13) {
        activeLiDom.trigger("click");
      }
      //上
      if (e.keyCode == 38) {
        e.preventDefault();
        if (activeLiDom.length >= 1) {
          let activeIndex = activeLiDom.index();
          activeLiDom.removeClass("active");
          for (let i = $(".js_suggestion li").length - 1; i >= 0; i--) {
            let dom = $(".js_suggestion li").eq(i);
            if (i < activeIndex && dom.not(":hidden").length > 0) {
              dom.addClass("active");
              $(".js_sug_input").val(dom.text().trim());
              //滚动条
              let top = $(dom).position().top
              let winT = $(".js_suggestion").outerHeight();
              if (top < 0) {
                $(".js_suggestion").scrollTop($(".js_suggestion").scrollTop() - dom.outerHeight());
              }
              break;
            }
          }
        } else {
          let lastDom = $(".js_suggestion li:not(:hidden):last");
          let top = lastDom.position().top + lastDom.outerHeight();
          let winT = $(".js_suggestion").outerHeight();
          $(".js_suggestion li:not(:hidden):last").addClass("active");
          if (top > winT) {
            $(".js_suggestion").scrollTop(top - winT);
          }
        }
      }
      //下
      if (e.keyCode == 40) {
        if (activeLiDom.length >= 1) {
          let activeIndex = activeLiDom.index();
          activeLiDom.removeClass("active");
          $(".js_suggestion li").each(function(index, dom) {
            if (index > activeIndex && $(dom).not(":hidden").length > 0) {
              $(dom).addClass("active");
              $(".js_sug_input").val($(dom).text().trim());
              //滚动条
              let top = $(dom).position().top + $(dom).outerHeight();
              let winT = $(".js_suggestion").outerHeight();
              if ((top - winT) >= 0) {
                $(".js_suggestion").scrollTop($(".js_suggestion").scrollTop() + $(dom).outerHeight());
              }
              return false;
            }
          });
        } else {
          $(".js_suggestion li:not(:hidden):first").addClass("active");
          $(".js_suggestion").scrollTop(0);
        }
      }
    });
  },
  jumpUrl: function(dom) {
    $.blockUI({
      message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>"
    });
    reader.voicePrompt.play("/iac/csair/mp3/ymjz");
    timedCount();
    $.ajaxSetup({
      cache: false
    });
    //flightQuery?c1=CAN&c2=WUH&date=2019-11-07&number1=1&number2=0&number3=0&year=2019&=11&day=07&year2=2019&month2=11&day2=08
    let data = $(dom).data("value");
    let date2 = data.RETURNDATE;
    let dataParams = {};
    //去的时间参数
    [dataParams["year"], dataParams["month"], dataParams["day"]] = getymd(data.DEPDATE);
    //回来的时间参数
    if (date2) {
      dataParams["date2"] = date2;
      [dataParams["year2"], dataParams["month2"], dataParams["day2"]] = getymd(date2);
    } else {
      //没有回来的就+1天  不要data2  才能后台不报错
      date2 = new Date(data.DEPDATE).getTime() + 1000 * 60 * 60 * 24;
      [dataParams["year2"], dataParams["month2"], dataParams["day2"]] = getymd(date2);
    }
    let params = {
      c1: data.DEPCITY,
      c2: data.ARRCITY,
      date: data.DEPDATE,
      number1: 1,
      number2: 0,
      number3: 0
    }
    Object.assign(params,dataParams);
    params = geturlByJson(params);
    window.location.href = "flightQuery?" + params;
  }
}



/*********************工具方法****************************/
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
