$().ready(function() {
  card.init();
})
window.card = {
  listArr: [ //银行卡列表
    {
      bankCode: 'EVR',
      cardNumber: '8669',
      src: 'https://b2c.csair.com/B2C40/common/images/bankicon/gzcbank_big.gif'
    }
  ],
  init() {
    // 初始化
    this.handle();
    // 关闭
    this.closeBand();
    // 获取年份
    this.setSelMonth();
    //初始化银行卡列表
    this.addCardList();
    //表单验证
    $("#banding_card").hide();
  },
  handle() {
    var $this = this;
    $('#creat').click(function() {
      $this.showHide('#cardnew_list','#banding_card')
    })
  },
  closeBand() {
    var $this = this;
    $("#closebanding").click(function () {
      $("#formdata")[0].reset()
      $this.showHide('#banding_card','#cardnew_list')
    })
  },
  showHide(hideid,showid) {
    $(hideid).hide();
    $(showid).show();
  },
  setSelMonth() {
    var month = 12;
    var data = new Date();
    var yearAdd = data.getFullYear() + 20;
    for (let i = 1; i <= 12; i++) {
      if (i < 10) {
        $("#month").append(`<option value='0${i}' title="选择${i}月份">0${i}</option>`)
      } else {
        $("#month").append(`<option value='${i}' title="选择${i}月份">${i}</option>`)
      }
    }
    for (let j = data.getFullYear(); j <= yearAdd; j++ ) {
      $("#year").append(`<option value='${j}' title="选择${j}年份">${j}</option>`)
    }
  },
  formValidate() {
    var $this = this;
    var form = $("#formdata")[0];
    var formdata = $('form').serializeArray();
    var formJSON = {};
    var idNumber = $("#idNumber").val();
    var userName = $("#userName").val();
    formJSON.idNumber = idNumber;
    formJSON.userName = userName;
    if ($('#creditCardNumber').val() == '') {
      $this.msgHTML('信用卡号不能为空！');
      return;
    } else {
      // return;
    };
    if($("#month").val() == '') {
      $this.msgHTML('请选择有效期月份！');
      return;
    };
    if($("#year").val() == '') {
      $this.msgHTML('请选择有效期年份！');
      return;
    };
    if($("#cardVerificationCode").val() == '') {
      $this.msgHTML('卡验证码不能为空！');
      return;
    };
    if($("#cellPhoneNumber").val() == '') {
      $this.msgHTML('手机号码不能为空！');
      return;
    } else {
      if($this.checkMobile($("#cellPhoneNumber").val()) == false) {
        $this.msgHTML('手机号码输入有误，请重新输入！');
        return;
      }
    }
    if($("#verificationCode").val() == '') {
      $this.msgHTML('手机验证码不能为空！');
      return;
    };
    //提交给后台的json
    $.each(formdata,function() {
      if(this.name == 'year') {
        this.value = this.value.substring(2);
      }
      formJSON[this.name]  = this.value;
    })
    // 表单提交
    form.reset();
    $this.msgHTML('');
    $this.addCardList();
    $this.showHide('#banding_card','#cardnew_list')
  },
  msgHTML(title) {
    $("#messageBox").html(title);
    //语音播放提示语；
  },
  checkMobile(value) {
    //验证手机号码
    var length = value.length;
    var tel = /^1\d{10}$/;
    return tel.test(value);
  },
  addCardList() {
    $(".cards_li").remove()
    $.each(card.listArr, function () {
      var liHTML = `
      <li class="cards_li ">
        <img class="m-t-md" src="${this.src}" alt="">
        <div class="fr m-t">
          <span class="end_number">**${this.cardNumber}</span>
          <a class="acolor m-t-n-xxs block m-l" href="javascript:void(0)" title="解除银行卡绑定" onclick="card.relieveCard('${this.bankCode}','${this.cardNumber}')">解除</a>
        </div>
      </li>
      `
      $("#cardul").prepend(liHTML);
    })
  },
  relieveCard(code, num) {
    console.log(code, num);
  }
};