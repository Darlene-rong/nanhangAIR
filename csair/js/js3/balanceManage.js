$(function () {
  window.balanceManage = {
    formData: {
      userName: '二蛋',
      cardNo: '616626443619',
      cardNo: '616626443619',
      idType: '身份证',
      idNumber: '43042619971231231',
      cellphone: '155****4675',
    },
    couponList: [
      {
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '02'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '04'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '05'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      },
      {
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      },{
        couponNo: '1121321312',
        blance: 122,
        remark: '3413123',
        startDate: '2019-01-01',
        endDate: '2019-02-01',
        initBlance: 999,
        status: '00'
      }
    ],
    nbmsgHTML(dom, title) {
      $(dom).html(title);
      //语音播放提示语；
    },
    countDown(second, dom) {
      //验证码 样式改变
      var $this = this;
      if (second > 1) {
        second--;
        $(dom).attr('disabled', true);
        $(dom).css({
          'background': '#828586',
          'cursor': 'not-allowed'
        })
        $(dom).html(second + '秒后重新获取');
        setTimeout(function () {
          window.balanceManage.countDown(second, dom)
        }, 1000)
      } else {
        $(dom).attr('disabled', false);
        $(dom).html('获取验证码');
        $(dom).css({
          'background': '#0193CF',
          'cursor': 'pointer'
        })
      }
    },
    init() {
      this.noRegisterhandle();
      this.registerHandle();
      this.userInformation();//账户信息
     
      // 测试
      $("#js_no_banlance").hide();
      $("#js_register").show();
      $("#js_bm_next").hide();
      $.myDate({
        yearId: "#cfYear",
        monthId: "#cfMonth",
        dayId: "#cfDay",
        defaulYear: '2020',
        defaulMonth: '2',
        defaulDay: '2'
      });
      $.myDate({
        yearId: "#endYear",
        monthId: "#endMonth",
        dayId: "#endDay",
        defaulYear: new Date().getFullYear(),
        defaulMonth: new Date().getMonth()+1,
        defaulDay: new Date().getDate()
      });
    },
    noRegisterhandle() {
      // 初始化绑定事件
      var $this = this;
      // 未开通余额注册
      $('.js_nb_btn').click(function () {
        $(".js_nb_content").remove();
        var html = `
          <div class="nb_register tab_content_one" id="js_nb_register">
          <form action="" id="registerForm">
            <div class="nb_re_input">
              <label for="userName">姓名：</label>
              <input type="text" name="userName" id="userName" disabled="true">
              <label for="cardNo">明珠会员号：</label>
              <input type="text" maxlength="12" name="cardNo" id="cardNo" disabled="true"> 
            </div>
            <div class="nb_re_input">
              <label for="idTypeText">证件类型：</label>
              <input type="text" id="idTypeText" maxlength="20" name="idTypeText" disabled="true">
              <label for="idNumber">证件号码：</label>
              <input type="text" maxlength="20" name="idNumber" id="idNumber" disabled="true">
            </div>
            <div class="nb_re_input">
              <label for="mobile">手机号：</label>
              <input type="text" maxlength="11" name="mobile" id="mobile" >
            </div>
            <h3>设置支付密码</h3>
            <div class="nb_re_input">
              <label for="pwd">支付密码：</label>
              <input type="password" maxlength="19" name="pwd" id="pwd" placeholder="请输入6位数字的支付密码">
            </div>
            <div class="nb_re_input">
              <label for="passwordAgain">确认支付密码：</label>
              <input type="password" maxlength="19" name="passwordAgain" id="passwordAgain" placeholder="请输入6位数字的支付密码">
            </div>
            <div class="nb_re_input">
              <label for="code">手机验证码：</label>
              <input type="text" class="shorter" name="code" id="code" placeholder="请输入您手机收到的验证码">
              <button class="form_left_btn" type="button" title="获取手机验证码">获取验证码</button>
            </div>
            <div class="text-c messageBox" id="nbMSG"></div>
            <div class="nb_re_read">
              <input type="checkbox" name="readcheck" id="readcheck">
              我已经阅读了
              <a href="https://www.csair.com/cn/tourguide/booking/orders/static/wallet_agreement/index.shtml" class="read-rule" target="_blank" title="点击阅读南航钱包注册服务条款">《南航钱包注册服务条款》</a>
              与
              <a href="https://www.csair.com/cn/tourguide/booking/orders/static/unionpay_agreement/index.shtml" class="read-rule" target="_blank" title="点击阅读银联电子账户服务协议">《银联电子账户服务协议》</a>
            </div>
            <div class="nb_re_btn">
              <input type="button" class="js_register_btn" value="完成注册">
            </div>
          </form>
        </div>
        `
        $("#js_no_banlance").append(html);
        $this.getFormdata();
      });
      // 提交表单
      $("#js_no_banlance").on('click', '.js_register_btn', function () {
        var form = $("#registerForm")[0];
        var pwdVal = $("#pwd").val();
        var pwdValAgin = $("#passwordAgain").val();
        var codeVla = $("#code").val();
        var reg = /^\d+$/; //判断支付密码是否为纯数字
        var checkboxStatus = $("#readcheck")[0].checked;
        var setformdata = $('form').serializeArray();
        if (pwdVal == '') {
          $this.nbmsgHTML('#nbMSG', '支付密码不能为空！');
          return;
        } else {
          if ($this.regOnlyNaN(pwdVal) == false) {
            $this.nbmsgHTML('#nbMSG', '请输入6位数字的支付密码！');
            return;
          }
        };
        if (pwdValAgin == '') {
          $this.nbmsgHTML('#nbMSG', '确认支付密码不能为空！');
          return;
        } else {
          if (pwdValAgin != pwdVal) {
            $this.nbmsgHTML('#nbMSG', '确认支付密码输入与第一次输入不匹配！');
            return;
          }
        };
        if (codeVla == '') {
          $this.nbmsgHTML('#nbMSG', '手机验证码不能为空！');
          return;
        };
        $this.nbmsgHTML('');
        if (checkboxStatus == false) {
          alert('请阅读相关条款和协议');
          return;
        };
        //ajax请求
        $.each(setformdata, function () {
          $this.formData[this.name] = this.value;
        });
        console.log($this.formData);
        form.reset();
        $("#js_no_banlance").remove();
      })
    },
    registerHandle() {
      var $this = this;
      var itemJson = ['余额总概', '代金券', '支付密码', '账户信息', '交易记录', '充值'];
      // 切换tab
      $('.js_bm_cell').click(function () {
        $(".js_bm").find('li').removeClass('active');
        $(this).addClass('active');
        var num = $(this).attr('data-item');
        $this.changContent(num);
        if (num == 1) {
          $this.pageInit(1);
        }
        $("#bm_title").text(itemJson[num])
      });
      // 获取验证码
      $("#js_bm_getYZM").click(function () {
        $this.countDown('60', "#js_bm_getYZM");
      });
      // 下一步
      $("#js_three_next").click(function () {
        var YZMval = $("#threePWS").val();
        if (YZMval == '') {
          $this.nbmsgHTML('#js_bm_msg1', '验证码不能为空');
          return;
        };
        $this.nbmsgHTML('#js_bm_msg1', '');
        //ajax请求
        $("#js_bm_pre").hide();
        $("#js_bm_next").show();
      });
      // 重置密码
      $("#js_next_reset").click(function () {
        if (confirm('当前信息尚未提交，您是否确认清除当前填写的信息？')) {
          $this.resetForm('#bmNextForm');
        }
      });
      //提交修改密码
      $("#js_next_submit").click(function () {
        var bmPWSVal = $("#bmPWS").val();
        var bmPWSagainVal = $("#bmPWSagain").val();
        if (bmPWSVal == '') {
          $this.nbmsgHTML('#js_bm_msg2', '支付密码不能为空！');
          return;
        } else {
          if ($this.regOnlyNaN(bmPWSVal) == false) {
            $this.nbmsgHTML('#js_bm_msg2', '请输入6位数字的支付密码！');
            return;
          }
        };
        if (bmPWSagainVal == '') {
          $this.nbmsgHTML('#js_bm_msg2', '确认支付密码不能为空！');
          return;
        } else {
          if (bmPWSagainVal != bmPWSVal) {
            $this.nbmsgHTML('#js_bm_msg2', '确认支付密码输入与第一次输入不匹配！');
            return;
          }
        };
        $this.nbmsgHTML('#js_bm_msg2', '');
        $this.resetForm('#bmNextForm');
      });
    },
    userInformation() {
      var json = {
        userName: '二蛋',
        cardNo: '616626443619',
        cardNo: '616626443619',
        idType: '身份证',
        idNumber: '43042619971231231',
        cellphone: '155****4675',
        address: '地址',
        cardNo: '身份证号（有码）',
        certNo: '证件类型 00身份证',
        certType: '二蛋',
        email: '二蛋',
        memberId: '二蛋',
        memberNo: '二蛋',
        mobile: '二蛋',
        name: '二蛋',
        phone: '二蛋',
        post: '二蛋',
        sex: '二蛋'
      };
      var jArr = [{
        label: '明珠卡号',
        name: 'userName'
      }, {
        label: '明珠卡姓名',
        name: 'userName'
      }, {
        label: '证件类型',
        name: 'certType'
      }, {
        label: '证件号码',
        name: 'certNo'
      }, {
        label: '账户名',
        name: 'memberNo'
      }, {
        label: '邮件地址',
        name: 'email'
      }, {
        label: '手机号码',
        name: 'mobile'
      }, {
        label: '固定电话',
        name: 'userName'
      }, {
        label: '会员性别',
        name: 'sex'
      }, {
        label: '联系地址',
        name: 'address'
      }, {
        label: '邮政编号',
        name: 'userName'
      }, {
        label: '个人备注',
        name: 'userName'
      },]
      jArr.forEach(function (item, index) {
        var html = `
          <div class="bm_four_left nb_re_input">
          <label for="idTypeText">${item.label}</label>
          <input type="text" id="bm${item.name}" maxlength="20" name="bm${item.name}" disabled="true" value="${json[item.name]}" />
        </div>
        `
        $(".js_bm_four").append(html)
      })
    },
    getFormdata() {
      var $this = this;
      // ajax请求数据
      $("#userName").val($this.formData.userName)
      $("#cardNo").val($this.formData.cardNo)
      $("#idTypeText").val($this.formData.idType)
      $("#idNumber").val($this.formData.idNumber)
      $("#mobile").val($this.formData.cellphone)
    },
    regOnlyNaN(number) {
      //判断是否为纯数字
      var reg = /^\d+$/;
      return reg.test(number);
    },
    resetForm(dom) {
      // 重置表单
      var formDom = $(dom)[0];
      formDom.reset();
    },
    changContent(num) {
      // 切换列表改变内容
      var newNum = parseInt(num);
      $(".js_bm_content").find('.tab_con').removeClass('show').addClass('hideen');
      $($(".js_tab_con")[newNum]).removeClass('hideen').addClass('show');
    },
    pageInit(pageNum) {
      var $this = this;
      ajax
      $.ajax({
        type: 'post',
        url: 'getCashCouponInfo',
        success(res) {
          if (res.status == '0') {
            $this.couponList = res.couponList;
            $this.bm_pageInit(res, pageNum);
          }
        }
      });
      var resArr = {
        total: 15
      }
      resArr.orders = $this.couponList;
      $this.bm_pageInit(resArr, pageNum)
    },
    bm_pageInit(arr, pageNum) {
      let pageSize = 10;
      var $this = this;
      $this.bm_pageContent(0, pageSize)
      $("#js_tmyPage").tzPage(arr.total, {
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
          $this.bm_pageContent(pageno, pageSize)
        }
      });
    },
    bm_pageContent(pageNo, pageSize) {
      var $this = this;
      var tabHTML = '';
      var startIndex = pageNo * pageSize;
      var endIndex = pageSize * (pageNo + 1);
      var newArr = $this.couponList.slice(startIndex, endIndex);
      $.each(newArr, function (val) {
        this.status = $this.bm_detail(this.status)
        tabHTML += `
          <tr>
            <td>${this.couponNo}</td>
            <td>${this.status}</td>
            <td>${this.initBlance}</td>
            <td>${this.initBlance}</td>
            <td>${this.endDate}</td>
            <td>${this.remark}</td>
          </tr>
        `
      });
      $(".js_two_tab").html(tabHTML);
    },
    bm_detail(type) {
      var result = '';
      var color = '';
      if (type == '00') {
        result = '正常'
      } else if (type == '02') {
        result = '已过期'
      } else if (type == '04') {
        result = '已消费'
      } else if (type == '05') {
        result = '部分消费'
      };
      return result;
    }
  };
  balanceManage.init();
});