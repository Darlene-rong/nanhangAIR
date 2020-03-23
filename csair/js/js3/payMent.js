
$(function () {
  var lang = "ZH_CN";
  
  window.payMent = {
    orderNo: '',
    orderTime: '',
    orderTotal: '',
    init() {
      $(".js_th_weixin").hide();
      $(".js_th_zhifubao").hide();
      this.handle();
      this.setSelMonth();
      this.orderNo = 'Gd23-3-3-3-322323';
      this.orderTime= '2020-3-5 23:00:00'
      $("#js_pay_num").html('90');
      $("#js_pay_nid").html(this.orderNo);
      // if (this.orderNo) {
      //   $.ajax({
      //     type: 'post',
      //     url: 'querySpecificOrder',
      //     data: {
      //       orderNo: this.orderNo
      //     },
      //     success(res) {
      //       if (res.status == '0') {
      //         var total = `￥${res.data.orderamt}`;
      //         this.orTime = res.data.createtime;
      //         $("#js_pay_num").html(total);
      //         $("#js_pay_nid").html(res.data.orderNo);
      //       }
      //     }
      //   })
      // };
      this.countdown();

    },
    handle() {
      var $this = this;
      var timer = 1800;
      // tab切换
      tabChange('.js_pay_cell', '.js_pcell_con', function (val) {
        if (val == '0') {
          //请求的ajax
          $this.thirdPay();
        } else if (val == '1') {
          //请求的ajax
          $this.quickPay()
        }
      });
      // 第三方立即支付
      $("#js_py_ljzf").on('click', function () {
        var value = $(".js_rad_type:checked").val();
        if (value == undefined) {
          alert('请选择第三方支付方式')
        } else {
          if (value == 'weixin') {
            $(".js_pay_wximg").prop('src', 'https://upp.csair.com/upp_payment/pay/uppwxsm.upp?merAppId=101&merId=100&orderFlag=ECARD&needMerPayNo=N&orderNo=GO1912260014507&amount=10&callBackUrl=https://b2c.csair.com/B2C40/walletPayment/chargingCard/payingForCallback.ao')
            $(".js_th_radio").hide();
            $(".js_th_weixin").show()
          } else if (value == 'zhifubao') {
            $(".js_th_radio").hide();
            $(".js_th_zhifubao").show();
          }
        }
      });
      //选择支付方式
      $(".js_rad_type").bind('keypress',function (event) {
        if (event.keyCode == '13') {
          console.log(this)
          $('.js_rad_type').prop("checked",false)     
          $(this).prop("checked","checked")      
        }
      })
    },
    thirdPay() {

    },
    quickPay() {

    },
    countdown() {
      var orTime = Date.parse(this.orderTime);
      var nowTime = new Date().getTime();
      var cdTime = 30 * 60 * 1000;
      var difTime = nowTime - orTime;
      var interval = 1000;
      var msg;
      setTimeout(function () {
        var m, s;
        var tipHTML = '';
        var jgTime = cdTime - difTime;
        if (difTime < cdTime) {
          m = new Date(jgTime).getMinutes();
          s = new Date(jgTime).getSeconds();
          m = m < 10 ? '0' + m : m;
          s = s < 10 ? '0' + s : s;
          tipHTML = m + "分&nbsp" + s + "秒";
          msg1 = '请在<b class="redC">' + tipHTML + '</b>内完成支付';
          setTimeout(arguments.callee, interval);
          $("#js_pay_min").html(msg1)
        } else {
          //订单超时
          tipHTML = '付款期限已过请重新下单！';
          $("#js_pay_tip").html(tipHTML)
          $("#js_pay_min").html('')
          $("#pay_cell").remove();
          $(".js_py_overtime").show();
        };
        cdTime = cdTime - interval;
      }, interval);
    },
    _thirdSel() {

    },
    _changCard(e) {
      $(".js_cmdtype").prop('checked', false);
      $(e).prop('checked','checked');
      if ($(e).val() == 'UOPF') {
        $(".js_py_card").show()
      } else if ($(e).val() == 'EposDebitSaleNew') {
        $(".js_py_card").hide()
      }
    },
    _getYZM(dom) {
      //获取验证码
      var $this = this;
      $this._pyformVali('yzm',function (json) {
        if (json.isajax == true) {
          countDown(60, dom);
        }
      })
    },
    _pySubForm() {
      //提交表单
      var $this = this;
      $this._pyformVali('formtj',function (json) {
        if (json.isajax == true) {
        }
      })
    },
    _pyformVali(type,callback) {
      var $this = this;
      var formData = $('#js_pay_from').serializeArray();
      var radioData = $("input:radio[name='cmdType']:checked").val();
      var fJSON = {
        isajax: false
      };
      if (radioData == 'EposDebitSaleNew') {
        formData.splice(2, 3)
      };
      if (type == 'yzm') {
       formData.splice(formData.length-1,1)
      }
      for (let i = 0; i < formData.length; i++) {
        if (formData[i].value == '') {
          // $(`#${formData[i].name}`).val()
          if (formData[i].name == 'ACCOUNTNO') {
            $this.pyTip('.js_py_tip', '卡号不能为空！');
          } else if (formData[i].name == 'pymonth') {
            $this.pyTip('.js_py_tip', '卡有效期月份不能为空！');
          } else if (formData[i].name == 'pyyear') {
            $this.pyTip('.js_py_tip', '卡有效期年份不能为空！');
          } else if (formData[i].name == 'CVV') {
            $this.pyTip('.js_py_tip', '信用卡背后3位CVV2码不能为空！');
          } else if (formData[i].name == 'BUYERNAME') {
            $this.pyTip('.js_py_tip', '持卡人姓名不能为空！');
          } else if (formData[i].name == 'IDCARD') {
            $this.pyTip('.js_py_tip', '持卡人证件号不能为空！');
          } else if (formData[i].name == 'MOBILE') {
            $this.pyTip('.js_py_tip', '银行卡预留手机号不能为空！');
          } else if (formData[i].name == 'CODENAME' && type != 'yzm') {
            $this.pyTip('.js_py_tip', '手机验证码不能为空！');
          }
          return;
        } else {
          if (formData[i].name == 'MOBILE') {
            if (checkMobile(formData[i].value) == false) {
              $this.pyTip('.js_py_tip', '手机号码格式输入有误！');
              return;
            }
          };
          if (formData[i].name == 'CVV') {
            if (formData[i].value.length != 3) {
              $this.pyTip('.js_py_tip', '请输入有效的CVV2码！');
              return;
            }
          };
        }
        fJSON[formData[i].name] = formData[i].value;
      }
      fJSON.isajax = true;
      $this.pyTip('.js_py_tip', '');
      if(callback) callback(fJSON)
    },
    _pydone(e) {
      //已完成支付;
      console.log(e);
      var $this = this;
      $.ajax({
        type: 'post',
        url: 'checkRechargeOrderPayResul',
        data: {
          orderNo: $this.orderNo
        },
        success(res) {

        }
      })
    },
    _pyresetPY(e) {
      $(".js_th_radio").show();
      $(".js_th_weixin").hide();
      $(".js_th_zhifubao").hide();
    },
    pyTip(dom, title) {
      $(dom).html(title)
    },
    setSelMonth() {
      var month = 12;
      var data = new Date();
      var yearAdd = data.getFullYear() + 20;
      for (let i = 1; i <= 12; i++) {
        if (i < 10) {
          $("#pymonth").append(`<option value='0${i}' title="选择${i}月份">0${i}</option>`)
        } else {
          $("#pymonth").append(`<option value='${i}' title="选择${i}月份">${i}</option>`)
        }
      }
      for (let j = data.getFullYear() - 5; j <= yearAdd; j++) {
        $("#pyyear").append(`<option value='${j}' title="选择${j}年份">${j}</option>`)
      }
    },
    resetForm(dom) {
      // 重置表单
      var formDom = $(dom)[0];
      formDom.reset();
    },

  }
  payMent.init();
});