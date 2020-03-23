
$(function () {
  /*
    1.中转的停留时长
    2. 座舱的类型
  */
  let param = "";
  let isBack = false;//是否是第二次返程选择
  let code = lehem_dan.data.ticket.segment[0].arrcity;
  let cities = lehem_dan.data.ticket.airports;
  let planes = lehem_dan.data.ticket.planes;
  let duration = '2020-01-21T20:40';
  // 根据code找 cities
  function lhgetCity(city,code) {
    let res = city.filter(v => v.code == code);
    return res.length > 0 ? res[0].zhName : code;
  };
  // 根据plane 找 zhplanename
  function lhgetPlaneName(planes,planetype) {
    let res = planes.filter(v => v.planetype == planetype);
    return res.length > 0 ? res[0].zhplanename : planetype;
  }
  //处理时间段 格式PT21H12M
  function lhgetDuration(str) {
    let splitH = str.split('PT')[1];
    let hours = splitH.indexOf('H') == -1 ? '00' : splitH.split('H')[0];
    let minues = splitH.indexOf('M') == -1 ? '00' : splitH.split('H')[1].split('M')[0];
    let res = hours + '小时' + minues + '分钟';
    return res;
  }
  //处理时间 2020-01-21T20:40
  function lhgetTime(str) {
    let resJSON = {};
    resJSON.date = str.split('T')[0];
    resJSON.time = str.split('T')[1];
    return resJSON
  };
  //是否为共享航班
  function isShare(data) {
    var tipHTML = '';
    var topHTML = '';
    data.map((v, index) => {
      if (index != 0) {
        if (data[index - 1].flightNo != data[index].flightNo) {
          topHTML = `<div>温馨提示：此中转行程由不同航空公司分别执飞，请您留意到达航站楼跟出发航站楼是否一样</div>`;
        }
      }
      if (v.codeshare == 'true') {
        tipHTML = `<div>共享航班不接受特殊餐食、特殊服务及无成人陪伴儿童申请，详情请咨询澳洲航空公司</div>`;
      };
    });
    return topHTML + tipHTML;
  }
  window.lahem = {
    cabinFY: {
      FIRST: '头等舱',
      BUSINESS:  '公务舱',
      PREMIUMECONOMY:  '明珠经济舱',
      ECONOMY: '经济舱'
    },
    dcTicket:{},
    init() {
      // 单程和往返
      if (isBack) {
        this.returnWay();
      } else {
        this.oneWay();
      }
      // tip提示
      this.smallTip();
      //登录
      this.loginModal();
    },
    serach() {
      var $this = this;
    },
    oneWay() {
      //单程
      let $this = this;
      let dcParam = {};
      // dcParam = window.fromMain.getFromJSON1();
      // dcParam.pullBlackTest = 1;
      // $.ajax({
      //   type: "post",
      //   url: "mainInterAirTicket",
      //   data: param,
      //   success: function (res) {
      //     loading.hide();
      //     if (res.status === "0") {
      //       $this.getOneDate(res.data);
      //     } else {
      //       $(".js_banner").hide();
      //       $(".js_flight_sel_result").hide();
      //       $("#errorAlert").show();
      //     }
      //   }
      // });
      $this.dcTicket = lehem_dan.data.ticket;
      $this.getOneDate(lehem_dan.data);
    },
    returnWay() {
      // 回程
      var $this = this;
      //ajax
      $this.getBlackDate(lehem_wangfan.data.ticket);
    },
    getOneDate(date) {
      let $this = this;
      //头部
      // 列表头部
      let cabintype = {
        FIRST: 0,
        BUSINESS: 0,
        PREMIUMECONOMY: 0,
        ECONOMY:0
      };   //座舱类型有多少
      let cabinHTML = '';
      let dcFlightMsg = []; //航班信息
      dcFlightMsg = date.ticket.segment[0].dateflight;
      dcFlightMsg.map((v, index) => {
        v.prices.map((p, pi) => {
          if (cabintype[p.cabintype] == 0) {
            cabintype[p.cabintype] = 1;
            cabinHTML += `<li class="lahem_li"><a href="javascript:;" title="${$this.cabinFY[p.cabintype]}" data-type="${p.cabintype}">${$this.cabinFY[p.cabintype]}</a></li>`
          }
        })
      });
      $(".js_dc_header").html(cabinHTML);
      $this.oneHtml();
    },
    oneHtml() {
      var $this = this;
      var liHTML = '';
      let depcity = lhgetCity($this.dcTicket.airports,$this.dcTicket.segment[0].depcity);
      let arrcity = lhgetCity($this.dcTicket.airports,$this.dcTicket.segment[0].arrcity);
      $this.dcTicket.segment[0].dateflight.map((vone, index) => {
        let starTime = lhgetTime(vone.flight[0].deptime).time;
        let endTime = lhgetTime(vone.flight[vone.flight.length - 1].arrtime).time;
        liHTML += `
        <li class="lahem_ul-li">
        <div class="inline-block lahem_ul-con">
          <div class="lahem_li-left inline-block ">
            <a href="javascript:;" class="conimg" title="此航线起飞时间:${starTime}到达时间:${endTime},继续按tab键选择该航班舱位">
              <img src="/csair/img/question.png" alt="">
            </a>
            <div class="lahem_li-left-con  inline-block">
              <div class="con con1 inline-block">
                <strong class="num">${starTime}</strong>
                <div class="city">${depcity}</div>
              </div>
              <div class="con con2 inline-block ">
                <div class="caption">中转${vone.flight.length-1}次</div>
                <img src="/csair/img/split_destination.png" alt="">
                <div> ${lhgetDuration(vone.totalduration)}</div>
              </div>
              <div class="con con3  inline-block">
                <strong class="num">${endTime}</strong>
                <div class="city">${arrcity}</div>
              </div>
            </div>
          </div>
          <ul class="lahem_li-right inline-block lahem_result-title js_lahem_lowest">
          ${
          vone.prices.map((price, indext) => {
              if (1) {
                return `
                <li class="">
                <a href="javascript: void(0);" class="" data-opennum='${index}' title="公务舱,票价¥ 8468元，点击购票" onclick="window.lahem.dclookDetile(this)">
                  <div class="lahem_li-right-a">
                    <strong class="price">¥7178</strong>
                    <br>全程含税价<br>
                    <div class="addimg"></div>
                  </div>
                </a>
              </li>  
                `
              } else {
                `               
                <li>
                  <a href="javascript: void(0);" class="lahem_li-right-a" title="此航班经济舱售罄">
                      <strong class="price-null">售罄</strong>
                  </a>
                </li>`
              }
            })
          }
          </ul>
        </div>
        <!-- 展开看详情 -->
        <div class="lahem_li-detail js_dc_lidetail" data-detailnum='${index}'>
        ${
          vone.flight.map((flight, indexf) => {
            return `
              <ul class="lehem-dep dep-0">
                <li class="hem-dot">
                  <strong>起飞：</strong>
                  <span class="hem-dot-part">${lhgetTime(flight.deptime).time}</span>
                  <span class="hem-dot-part">${lhgetTime(flight.deptime).date}</span>
                  <strong class="hem-dot-part">(${
                    lhgetCity($this.dcTicket.cities,flight.depport)
              }) ${lhgetCity($this.dcTicket.airports,flight.depport)}</strong>
                </li>
                <li class="hem-part js_samll_tip">
                  <span>${flight.meal == 'Y' ? '提供餐饮' : '不提供餐饮'}</span> |
                  <span title="飞行时间">飞行时间：${lhgetDuration(flight.duration)}</span>|
                  <a data-type="airline" class="blueC js_lhplane_tip lhtip" href="javascript: void(0);" title="实际乘坐航班： 中国南方航空公司 ${flight.flightNo} ， 乘机手续请到 中国南方航空公司 值机柜台办理。">
                    ${flight.flightNo}
                  </a> |
                  <a href="#738" class="blueC" rel="vehicle" data-title="${lhgetPlaneName($this.dcTicket.planes,flight.plane)}" data-dir="2">
                    ${lhgetPlaneName($this.dcTicket.planes,flight.plane)}
                  </a>| 
                  <div class="c-tip js_stip" style="display: none;">
                    <div class="c_tip_con js_stip_con">
                    </div>
                  </div>
                </li>
                <div class="clearboth"></div>
              <li class="hem-dot">
                <strong>起飞：</strong>
                <span class="hem-dot-part">${lhgetTime(flight.arrtime).time}</span>
                <span class="hem-dot-part">${lhgetTime(flight.arrtime).date}</span>
                <strong class="hem-dot-part">(${
                  lhgetCity($this.dcTicket.cities,flight.arrport)
                }) ${lhgetCity($this.dcTicket.airports,flight.arrport)}</strong>
              </li>
              </ul>
              ${
              vone.flight.length - 1 != indexf ? `
                <div class="transfer">中转于&nbsp;<strong>${
                  lhgetCity($this.dcTicket.cities,flight.arrport)
                }</strong>&nbsp;停留时间&nbsp;10小时15分钟</div>
              `: ''}
            `
          })
        }
          <div class="sh-notice">
            <div>
              出发时间和到达时间均为当地时间
              ${isShare(vone.flight)}
            </div>
            <!-- 共享航班 -->
            <div><button class="fr">登录购票预定</button></div>
            <div class="clearboth"></div>
        </div>
      </li>
        
        `
      });
      $(".js_dc_flightlist").html(liHTML);
    },  
    dclookDetile(e) {
      if ($(e).hasClass('active')) {
        $(e).removeClass('active');
        $(".js_dc_lidetail").fadeOut('fast');
      } else {
        $(".js_dc_lidetail").fadeOut('fast');
        var detailNum = $(e).attr('data-opennum');
        $($(".js_dc_lidetail").get(detailNum)).fadeIn('fast');
        $(".js_lahem_lowest").find('.active').removeClass('active');
        $(e).addClass('active');
      }
    },
    getBlackDate(date) {
      let $this = this;
      //头部
      // 列表头部
      let cabintype = {
        FIRST: 0,
        BUSINESS: 0,
        PREMIUMECONOMY: 0,
        ECONOMY:0
      };
      //座舱类型有多少
      let cabinHTML = '';
      let dcFlightMsg = []; //航班信息
      // dcFlightMsg = date.ticket.segment[0].dateflight;
      // dcFlightMsg.map((v, index) => {
      //   v.prices.map((p, pi) => {
      //     if (cabintype[p.cabintype] == 0) {
      //       cabintype[p.cabintype] = 1;
      //       cabinHTML += `<li class="lahem_li"><a href="javascript:;" title="${$this.cabinFY[p.cabintype]}" data-type="${p.cabintype}">${$this.cabinFY[p.cabintype]}</a></li>`
      //     }
      //   })
      // });
      // $(".js_dc_header").html(cabinHTML);
      $this.blackHtml(date);
    },
    blackHtml(data) {
      var $this = this;
      let dateFlight = data.dateflight;
      let wfList = '';
      function isZZ(flight) {
        if (flight.length == 1) {
          return `${flight[0].flightNo}`
        } else {
          return `中转&nbsp;${flight.length - 1}&nbsp;次  ${flight[0].flightNo}`
        }
      }
      dateFlight.map((v, index) => {
        wfList += `
        <li class="lahem_ul-li">
          <div class=" wflahem_list inline-block lahem_ul-con" style="border: 1px solid #eee;">
            <div class="lahem_li-left lahem_wf-li">
              <div class="saml"><span>去</span></div>
              <a href="javascript:;" class="conimg" title="此航线为去程：
              ${lhgetCity(data.airports, v.segment[0].depcity)} 到 ${lhgetCity(data.airports, v.segment[0].arrcity)}航班
              起飞时间:${lhgetTime(v.segment[0].flight[0].deptime).time}到达时间:${lhgetTime(v.segment[0].flight[0].arrtime).time},继续按tab键选择该航班舱位">
                <img src="/csair/img/question.png" alt="">
              </a>
              <div class="lahem_li-left-con  inline-block">
                <div class="con con1 inline-b.lock">
                  <strong class="num">${lhgetTime(v.segment[0].flight[0].deptime).time}</strong>
                  <div class="city">${lhgetCity(data.airports, v.segment[0].depcity)} ${v.segment[0].flight[0].depterm}</div>
                </div>
                <div class="con con2 inline-block ">
                  <div class="caption">${isZZ(v.segment[0].flight)}</div>
                  <img src="/csair/img/split_destination.png" alt="">
                  <div> ${lhgetDuration(v.segment[0].totalduration)}</div>
                </div>
                <div class="con con3  inline-block">
                  <strong class="num">${lhgetTime(v.segment[0].flight[v.segment[0].flight.length - 1].arrtime).time}</strong>
                  <div class="city">${lhgetCity(data.airports, v.segment[0].arrcity)} ${v.segment[0].flight[0].arrTerm}</div>
                </div>
              </div>
            </div>
          </div>
        <div class=" wflahem_list" style="height: 120px; margin-top: -7px; width:100%; border:1px solid #eee;" >
          <div class="lahem_li-left inline-block lahem_wf-li" style="position: relative;">
          <div class="saml black"><span>返</span></div>
            <a href="javascript:;" class="conimg" title="此航线为返程详情:
            ${lhgetCity(data.airports, v.segment[0].depcity)} 到 ${lhgetCity(data.airports, v.segment[0].arrcity)}航班起飞时间:${lhgetTime(v.segment[1].flight[0].deptime).time}到达时间:${lhgetTime(v.segment[1].flight[0].arrtime).time},继续按tab键选择该航班舱位">
              <img src="/csair/img/question.png" alt="">
            </a>
            <div class="lahem_li-left-con  inline-block">
              <div class="con con1 inline-block">
                <strong class="num">${lhgetTime(v.segment[1].flight[0].deptime).time}</strong>
                <div class="city">${lhgetCity(data.airports, v.segment[1].depcity)} ${v.segment[1].flight[0].depterm}</div>
              </div>
              <div class="con con2 inline-block ">
                <div class="caption">${isZZ(v.segment[1].flight)}</div>
                <img src="/csair/img/split_destination.png" alt="">
                <div>  ${lhgetDuration(v.segment[1].totalduration)}</div>
              </div>
              <div class="con con3  inline-block">
                <strong class="num">${lhgetTime(v.segment[1].flight[v.segment[1].flight.length - 1].arrtime).time}</strong>
                <div class="city">${lhgetCity(data.airports, v.segment[1].arrcity)} ${v.segment[1].flight[v.segment[1].flight.length - 1].arrTerm}</div>
              </div>
            </div>
          </div>
          <ul class="lahem_li-right inline-block lahem_result-title js_lahem_lowest" >
            ${
            v.prices.map((price, indexp) => {
              if (1) {
                return `
                    <li class="">
                    <a href="javascript: void(0);" class="" data-opennum='${index}' title="公务舱,票价¥ 8468元，点击购票" onclick="window.lahem.dclookDetile(this)">
                      <div class="lahem_li-right-a">
                        <strong class="price">¥7178</strong>
                        <br>全程含税价<br>
                        <div class="addimg"></div>
                      </div>
                    </a>
                  </li>  
                    `
              } else {
                `               
                    <li>
                      <a href="javascript: void(0);" class="lahem_li-right-a" title="此航班经济舱售罄">
                          <strong class="price-null">售罄</strong>
                      </a>
                    </li>`
              }
            })
            }
          </ul>
        </div>
        <ul class="js_dc_lidetail" style="display:none">
          <li class="lahem_li-detail lahem_wf-li">
            <div class="goto wfgoto">去</div>
            ${
              v.segment[0].flight.map((goflight, indexgo) => {
                return `
                  <ul class="lehem-dep dep-0">
                    <li class="hem-dot">
                      <strong>起飞：</strong>
                      <span class="hem-dot-part">${lhgetTime(goflight.deptime).time}</span>
                      <span class="hem-dot-part">${lhgetTime(goflight.deptime).date}</span>
                      <strong class="hem-dot-part">(${
                  lhgetCity(data.cities, goflight.depport)
                  }) ${lhgetCity(data.airports, goflight.depport)}</strong>
                    </li>
                    <li class="hem-part js_samll_tip">
                      <span>${goflight.meal == 'Y' ? '提供餐饮' : '不提供餐饮'}</span> |
                      <span title="飞行时间">飞行时间：${lhgetDuration(goflight.duration)}</span>|
                      <a data-type="airline" class="blueC js_lhplane_tip lhtip" href="javascript: void(0);" title="实际乘坐航班： 中国南方航空公司 ${goflight.flightNo} ， 乘机手续请到 中国南方航空公司 值机柜台办理。">
                        ${goflight.flightNo}
                      </a> |
                      <a href="#738" class="blueC" rel="vehicle" data-title="${lhgetPlaneName(data.planes, goflight.plane)}" data-dir="2">
                        ${lhgetPlaneName(data.planes, goflight.plane)}
                      </a>| 
                      <div class="c-tip js_stip" style="display: none;">
                        <div class="c_tip_con js_stip_con">
                        </div>
                      </div>
                    </li>
                    <div class="clearboth"></div>
                  <li class="hem-dot">
                    <strong>到达：</strong>
                    <span class="hem-dot-part">${lhgetTime(goflight.arrtime).time}</span>
                    <span class="hem-dot-part">${lhgetTime(goflight.arrtime).date}</span>
                    <strong class="hem-dot-part">(${
                  lhgetCity(data.cities, goflight.arrport)
                  }) ${lhgetCity(data.airports, goflight.arrport)}</strong>
                  </li>
                  </ul>
                  ${
                  v.segment[0].flight.length - 1 != indexgo ? `
                    <div class="transfer">中转于&nbsp;<strong>${
                    lhgetCity(data.cities, goflight.arrport)
                    }</strong>&nbsp;停留时间&nbsp;10小时15分钟</div>
                  `: ''}
                `
              })
            }
          </li>
            
          <li class="lahem_li-detail lahem_wf-li">
            <div class="goto wfback wfgoto">回</div>
            ${
              v.segment[1].flight.map((goflight, indexgo) => {
                return `
                  <ul class="lehem-dep dep-0">
                    <li class="hem-dot">
                      <strong>起飞：</strong>
                      <span class="hem-dot-part">${lhgetTime(goflight.deptime).time}</span>
                      <span class="hem-dot-part">${lhgetTime(goflight.deptime).date}</span>
                      <strong class="hem-dot-part">(${
                  lhgetCity(data.cities, goflight.depport)
                  }) ${lhgetCity(data.airports, goflight.depport)}</strong>
                    </li>
                    <li class="hem-part js_samll_tip">
                      <span>${goflight.meal == 'Y' ? '提供餐饮' : '不提供餐饮'}</span> |
                      <span title="飞行时间">飞行时间：${lhgetDuration(goflight.duration)}</span>|
                      <a data-type="airline" class="blueC js_lhplane_tip lhtip" href="javascript: void(0);" title="实际乘坐航班： 中国南方航空公司 ${goflight.flightNo} ， 乘机手续请到 中国南方航空公司 值机柜台办理。">
                        ${goflight.flightNo}
                      </a> |
                      <a href="#738" class="blueC" rel="vehicle" data-title="${lhgetPlaneName(data.planes, goflight.plane)}" data-dir="2">
                        ${lhgetPlaneName(data.planes, goflight.plane)}
                      </a>| 
                      <div class="c-tip js_stip" style="display: none;">
                        <div class="c_tip_con js_stip_con">
                        </div>
                      </div>
                    </li>
                    <div class="clearboth"></div>
                    <li class="hem-dot">
                      <strong>到达：</strong>
                      <span class="hem-dot-part">${lhgetTime(goflight.arrtime).time}</span>
                      <span class="hem-dot-part">${lhgetTime(goflight.arrtime).date}</span>
                      <strong class="hem-dot-part">(${
                  lhgetCity(data.cities, goflight.arrport)
                  }) ${lhgetCity(data.airports, goflight.arrport)}</strong>
                    </li>
                  </ul>
                  ${
                  v.segment[1].flight.length - 1 != indexgo ? `
                    <div class="transfer">中转于&nbsp;<strong>${
                    lhgetCity(data.cities, goflight.arrport)
                    }</strong>&nbsp;停留时间&nbsp;10小时15分钟</div>
                  `: ''}
                  `

                
              })
            }
          </li>
          <div class="sh-notice">
            <div>
              出发时间和到达时间均为当地时间
            </div>
            <!-- 共享航班 -->
            <div><button class="fr">登录购票预定</button></div>
            <div class="clearboth"></div>
          </div>
        </ul>
        </li>
      </li>
        
        
        `
      });
      $(".js_wf_flightlist").html(wfList);
    },
    smallTip() {
      $('body').on('focus mouseenter', '.js_lhplane_tip', function () {
        let title = $(this).prop('title')
        $(this).parent().find('.js_stip_con').html(title)
        $(this).parent().find('.js_stip').show();
      });
      $('body').on('blur mouseleave', '.js_lhplane_tip', function () {
        $(".js_stip").hide();
      });
      $("body").on("mouseenter",".js_stip",function(){
        $(this).show();
      })
      $("body").on("mouseleave",".js_stip",function(){
        $(this).hide();
      })
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
    lehemlnHTML(val) {
      let login = ` <button class="fr" data-value='${JSON.stringify(val)}' onclick="lehemlogin.login(this);" >登录购票预定</button>`
      let erlogin = `<button class="fr" data-value='${JSON.stringify(val)}' onclick="lehemlogin.login(this);" >预订</button>`;
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
    },
    lehemlogin(dom){
      $.blockUI({message: $('.page_mask_div') });
      $(".blockUI.blockPage").css({border:"none"});
 
      let parmas = $(dom).data("value");
      let currindex = $(dom).closest("ul").find(".flight_sel_result_price_show").data("currindex");
      //选中的航班  只用拿第一次的航班id 所以不用
      $.cookie("id",parmas.cell[currindex].solution.id);
    },
  };
  lahem.init();
});
