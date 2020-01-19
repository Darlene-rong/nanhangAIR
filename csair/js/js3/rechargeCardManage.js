$(function () {
  window.rechargeCard = {
    tabData: [{
      "orderNo": "1GO1912190063124",
      "createtime": "2019-12-19 14:27:29.000",
      "status": "B,T",
      "orderamt": "20",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "2GO1912190063079",
      "createtime": "2019-12-19 14:27:13.000",
      "status": "D",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "3GO1912190029050",
      "createtime": "2019-12-19 10:37:51.000",
      "status": "C",
      "orderamt": "11010",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "4GO1912190024567",
      "createtime": "2019-12-19 10:07:28.000",
      "status": "C",
      "orderamt": "19100",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "5GO1912190021179",
      "createtime": "2019-12-19 09:42:47.000",
      "status": "C",
      "orderamt": "3010",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "6GO1912190018443",
      "createtime": "2019-12-19 09:20:51.000",
      "status": "C",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "7GO1912180096071",
      "createtime": "2019-12-18 18:26:35.000",
      "status": "C",
      "orderamt": "2000",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "8GO1912180095170",
      "createtime": "2019-12-18 18:18:27.000",
      "status": "C",
      "orderamt": "40",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "9GO1912180089736",
      "createtime": "2019-12-18 17:36:59.000",
      "status": "C",
      "orderamt": "1000",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "10GO1912180089618",
      "createtime": "2019-12-18 17:36:06.000",
      "status": "C",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "11GO1912180083959",
      "createtime": "2019-12-18 16:54:41.000",
      "status": "C",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "12GO1912180079871",
      "createtime": "2019-12-18 16:26:42.000",
      "status": "C",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "13GO1912180032651",
      "createtime": "2019-12-18 11:00:19.000",
      "status": "C",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "14GO1912180029633",
      "createtime": "2019-12-18 10:41:01.000",
      "status": "C",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "15GO1912170097575",
      "createtime": "2019-12-17 19:04:16.000",
      "status": "C",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "16GO1912170092304",
      "createtime": "2019-12-17 18:17:52.000",
      "status": "C",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "17GO1912170088051",
      "createtime": "2019-12-17 17:43:10.000",
      "status": "C",
      "orderamt": "20",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "18GO1912170087945",
      "createtime": "2019-12-17 17:42:17.000",
      "status": "C",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "19GO1912170083982",
      "createtime": "2019-12-17 17:10:56.000",
      "status": "C",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "GO1912170027269",
      "createtime": "2019-12-17 10:23:42.000",
      "status": "D",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "GO1912160064616",
      "createtime": "2019-12-16 15:02:35.000",
      "status": "D",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "GO1912160064585",
      "createtime": "2019-12-16 15:02:21.000",
      "status": "D",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "GO1912160058623",
      "createtime": "2019-12-16 14:21:32.000",
      "status": "D",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "GO1912060065128",
      "createtime": "2019-12-06 15:11:09.000",
      "status": "D",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "GO1911220017627",
      "createtime": "2019-11-22 09:20:29.000",
      "status": "E",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    },
    {
      "orderNo": "GO1911220013409",
      "createtime": "2019-11-22 08:39:01.000",
      "status": "D",
      "orderamt": "10",
      "ordercount": null,
      "cardtype": "1"
    }
    ],
    init() {
      this.changCell();
      this.addItem();
      this.handle();
      this.formValite();
      this.timeInit();
      this.pageAjax(1);
    },
    handle() {
      var $this = this;
      $(document).on('click', '.js_item_del', function () {
        if (confirm('当前订单信息尚未提交，您是否确认清除当前填写的信息？')) {
          $(this).parent().parent().remove();
          $this.totalCount();
        }
      });
      $(".js_rc_reset").click(function () {
        if (confirm('当前订单信息尚未提交，您是否确认清除当前填写的信息？')) {
          $("#rechargeForm")[0].reset();
        }
      });
    },
    timeInit() {
      $('.hs_test').myDate({
        yearId: "#orderYear",
        monthId: "#orderMonth",
        dayId: "#orderDay",
        defaultDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
        maxYear: new Date().getFullYear() + 1
      });
      $('.hs_test').myDate({
        yearId: "#ordertoYear",
        monthId: "#ordertoMonth",
        dayId: "#ordertoDay",
        defaultDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
        maxYear: new Date().getFullYear() + 1
      });
    },
    pageAjax(pageNum) {
      var $this = this;
      var startDate = $("#orderYear").val() + '-' + $("#orderMonth").val() + '-' + $("#orderDay").val();
      var endDate = $("#ordertoYear").val() + '-' + $("#ordertoMonth").val() + '-' + $("#ordertoDay").val();
      var status = $("#orderstatus").val();
      //ajax
      // $.ajax({
      //   type: 'post',
      //   url: 'queryOrders',
      //   data: {
      //     status: status,
      //     startDate: startDate,
      //     endDate: endDate
      //   },
      //   success(res) {
      //     if (res.status == '0') {
      //       $this.tabData = res.orders;
      //       $this.rc_pageInit(res, pageNum)
      //     }
      //   }
      // });
      var resArr = {
        total: 26
      }
      resArr.orders = $this.tabData;
      $this.rc_pageInit(resArr, pageNum)
    },
    rc_pageInit(arr, pageNum) {
      let pageSize = 5;
      var $this = this;
      $this.rc_pageContent(0, pageSize)
      $("#myPage").tzPage(arr.total, {
        num_display_entries: 8, //主体页数
        num_edge_entries: 2, //边缘页数
        current_page: pageNum - 1, //指明选中页码
        items_per_page: pageSize, //每页显示多条条
        prev_text: "上一页",
        next_text: "下一页",
        showGo: false, //显示跳转
        showSelect: false,
        prev_show_always: true,
        next_show_always: true,
        callback: function (pageno) { //会回传两个参数一个当前页，显示的页数
          $this.rc_pageContent(pageno, pageSize)
        }
      });
    },
    rc_pageContent(pageNo, pageSize) {
      var $this = this;
      var tabHTML = '';
      var startIndex = pageNo * pageSize;
      var endIndex = pageSize * (pageNo + 1);
      var newArr = this.tabData.slice(startIndex, endIndex);
      $.each(newArr, function (val) {
        this.status = $this.rc_detail(this.status)
        if (this.cardtype == '1') {
          this.cardtype = '虚拟卡'
        }
        tabHTML += `
          <tr>
            <td>${this.orderNo}</td>
            <td>${this.createtime}</td>
            <td>${this.orderamt}</td>
            <td>${this.cardtype}</td>
            <td>${this.status}</td>
            <td><a href="javascript:;" class="btn pc-btn-detail" data-orderno="${this.orderNo}" onclick="rechargeCard.toLookCon('${this.orderNo}')">查看详情</a></td>
          </tr>
        `
      });
      $(".js_five_tab").html(tabHTML);
    },
    toLookCon(code) {
      var $this = this;
      $this.rc_datail_event()
      var data = {
        "orderNo": "GO1912190090647",
        "createtime": "2019-12-19 17:43:18",
        "status": "D",
        "ordervalidity": "2019-12-21 17:43:18",
        "cardtype": "1",
        "orderamt": "10.0",
        "uppOrderNo": "20191219174317670532",
        "cardList": [
          {
          "salePrice": "10",
          "cardNo": "1"
          }
        ]
      }
      data.salePrice = data.cardList[0].salePrice;
      data.cardNo = data.cardList[0].cardNo;
      data.newstatus = $this.rc_detail(data.status);
      if (data.cardtype == '1') {
        data.cardtype = '虚拟卡'
      };
      $this.rc_btnstatus(data.status);
      var jsonHTML = [
        {name: "orderNo", title:'订单号'},
        {name: "createtime",title:'订单日期'},
        {name:  "newstatus", title:'订单状态'},
        {name:  "cardtype", title:'卡类型'},
        {name:  "salePrice", title:'购卡面值'},
        {name:  "cardNo", title:'卡数量'},
        {name: "orderamt", title:'订单总额'},
        {name: "ordervalidity", title:'支付截止日期'}
      ]
      var html = '';
      $("#js_rc_table").hide();
      $("#js_rc_look").show();
      $.each(jsonHTML, function () {
        html = `
        <div class="rc_cell">
          <span class="rc_cell_left">${this.title}</span>：
          <span class="rc_cell_right">${data[this.name]}</span>
        </div>
        `
        $("#js_rccell").append(html)
      });
    },
    rc_detail(type) {
      var result = '';
      if (type == 'C') {
        result = '待支付'
      } else if (type == 'B,T') {
        result = '已支付代发卡'
      } else if (type == 'E') {
        result = '已发卡'
      } else if (type == 'D') {
        result = '已取消'
      };
      return result;
    },
    rc_datail_event() {
      $(".js_rc_back").click(function () {
        $("#js_rc_table").show();
        $("#js_rc_look").hide();
        $("#js_rccell").children().remove()
      })
    },
    rc_btnstatus(type) {
      if (type == 'C') {
        $(".js_rc_getkm").hide();
        $('.js_rc_ljzf').show();
        $('.js_rc_qxdd').show();
      } else if (type == 'B,T') {
        $('.js_rc_getkm').hide();
        $('.js_rc_ljzf').hide();
        $('.js_rc_qxdd').hide();
      } else if (type == 'E') {
        $(".js_rc_getkm").show();
        $('.js_rc_ljzf').hide();
        $('.js_rc_qxdd').hide();
      } else if (type == 'D') {
        $('.js_rc_getkm').hide();
        $('.js_rc_ljzf').hide();
        $('.js_rc_qxdd').hide();
      };
    },
    formValite() {
      var $this = this;
      $("#js_submitForm").click(function () {
        var phone = $("#phone").val();
        var contact = $("#contact").val();
        var orderAmt = $("#moneyTotal").text();
        var orderCount = $("#numberTotal").text();
        var msgAdd = '';
        var orderMsg = '';
        for (let i = 0; i < $(".js_item_li").length; i++) {
          msgAdd += $($(".js_item_li")[i]).find('.js_cPrice').text() + '|' + $($(".js_item_li")[i]).find('.js_cCount').text() + '^';
        };
        orderMsg = msgAdd.substring(0, msgAdd.length - 1);
        if ($("#phone").val() == '') {
          $this.tipPlay('2', '必填项，不可为空。');
        } else {
          if ($this.checkMobile($("#phone").val()) == false) {
            $this.tipPlay('2', '手机号码输入有误，请重新输入！');
            return;
          } else {
            $("#js_phoneTip").text('');
          }
        };
        if ($("#contact").val() == '') {
          $this.tipPlay('1', '必填项，不可为空。');
          return;
        } else {
          $("#js_contactTip").text('');
        };
        $.ajax({
          type: 'post',
          url: 'createRechargeOrder',
          data: {
            orderMsg: orderMsg,
            orderAmt: orderAmt,
            orderCount: orderCount,
            contact: contact,
            phone: phone
          },
          success(res) {
            if (res.status == '0') {
              if (res.consequent) {
                //创建成功
                console.log(res.data);
                //跳转到支付页面
              }
              $this.tipPlay('2', res.msg);
            }
          }
        })
      });
    },
    checkMobile(value) {
      var length = value.length;
      var tel = /^1\d{10}$/;
      return tel.test(value);
    },
    tipPlay(type, title) {
      if (type == '1') {
        $("#js_contactTip").text(title)
      } else {
        $("#js_phoneTip").text(title)
      }
    },
    changCell() {
      var $this = this;
      $('.js_rc_cell').click(function () {
        $(".js_tab_cell").find('li').removeClass('active');
        $(this).addClass('active');
        var num = $(this).attr('data-item');
        $this.changContent(num);
      })
    },
    changContent(num) {
      var newNum = parseInt(num);
      $(".js_tab_content").find('.tab_con').removeClass('show').addClass('hideen');
      $($(".tab_con")[newNum]).removeClass('hideen').addClass('show');
    },
    addItem() {
      var $this = this;
      $(".js_item_add").click(function () {
        var cPrice = $("#cPrice").val();
        var cCount = $("#cCount").val();
        var eventt = this;
        var mark = true;
        if (cCount == '') {
          alert('请输入张数');
          return;
        }
        for (let i = 0; i < $(".js_cPrice").length; i++) {
          if (cPrice == $($(".js_cPrice")[i]).text()) {
            if (confirm('查询已有改面值')) {
              var count = parseInt($($(".js_cCount")[i]).text()) + parseInt(cCount);
              $($(".js_cPrice")[i]).text(cPrice);
              $($(".js_cCount")[i]).text(count);
            };
            mark = false;
            
          } else {
            mark = true;
          }
        }
        if (mark) {
          var itHTML = `
          <div class="text-c rc_item js_item_li">
            <div class="rc_item_i text-l">面值<span class="js_cPrice">${cPrice}</span></div>
            <div class="rc_item_i text-l" style='padding-left: 133px;'>张数<span class="js_cCount">${cCount}</span></div>
            <div class="rc_item_i text-r"><a href="javascript:;" class='js_item_del' title="删除">删除</a></div>
          </div>
          `
          $("#js_item").append(itHTML);
        }
        $this.totalCount();
      })
    },
    totalCount() {
      var numTotal = 0;
      var priceTotal = 0;
      var numlen = $(".js_cCount").length;
      var priceLen = $(".js_cPrice").length;
      for (let i = 0; i < numlen; i++) {
        numTotal = parseInt($($(".js_cCount")[i]).text()) + numTotal;
      }
      $("#numberTotal").text(numTotal);
      numTotal = 0;
      for (let i = 0; i < priceLen; i++) {
        priceTotal = parseInt($($(".js_cPrice")[i]).text()) * parseInt($($(".js_cCount")[i]).text()) + priceTotal;
      };
      $("#moneyTotal").text(priceTotal);
      priceLen = 0;
    }
  };
  rechargeCard.init();
})