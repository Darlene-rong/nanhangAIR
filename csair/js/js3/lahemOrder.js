$(() => {
  const selectHTML = `
    <select>
    <optgroup label="A"></optgroup>
    <optgroup label="B"></optgroup>
    <optgroup label="C"></optgroup>
    <optgroup label="D"></optgroup>
    <optgroup label="E"></optgroup>
    <optgroup label="F"></optgroup>
    <optgroup label="G"></optgroup>
    <optgroup label="H"></optgroup>
    <optgroup label="I"></optgroup>
    <optgroup label="J"></optgroup>
    <optgroup label="K"></optgroup>
    <optgroup label="L"></optgroup>
    <optgroup label="M"></optgroup>
    <optgroup label="N"></optgroup>
    <optgroup label="O"></optgroup>
    <optgroup label="P"></optgroup>
    <optgroup label="Q"></optgroup>
    <optgroup label="R"></optgroup>
    <optgroup label="S"></optgroup>
    <optgroup label="T"></optgroup>
    <optgroup label="U"></optgroup>
    <optgroup label="V"></optgroup>
    <optgroup label="W"></optgroup>
    <optgroup label="X"></optgroup>
    <optgroup label="Y"></optgroup>
    <optgroup label="Z"></optgroup>
    </select>
  `;
  window.lahemOrder = {
    dataJson: {},
    init() {
      this.dataAdd();
      this.timeInit();
      this.eventInit();
      this.initCountry();
      console.log(validateType('isCardID','43042619971109885x'))
      
    },
    dataAdd() {
      let $this = this;
      $this.dataJson = duorendata; //往返多人
      // $.each($this.dataJson.price, (jname, je) => {
      //   if (je != null) {
      //     if (jname == 'adultPrice') {
      //       je.number = $this.dataJson.adult;
      //     } else if (jname == 'childPrice') {
      //       je.number = $this.dataJson.child;
      //     } else if (jname == 'babyPrice') {
      //     je.number = $this.dataJson.infant;
      //     }       
      //   }
      // });
      $this.personHTML($this.dataJson.price);
      $this.listHTML();
      $this.chengjiHTML();
    },
    timeInit() {
      var date = new Date();
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      let $this = this;
      $(".js_date_one").each(function (index) {
        $(".js_date_one").myDate({
          yearId: `.js_lh_y_${index}`,
          monthId: `.js_lh_m_${index}`,
          dayId: `.js_lh_d_${index}`,
          defaultDate: "--",
          minYear: y - 150
        });
        // if($this.form.pax[index].type=="INF"){
        //   $(".js_date_two").myDate({
        //     yearId: `.js_y_two_${index}`,
        //     monthId: `.js_m_two_${index}`,
        //     dayId: `.js_d_two_${index}`,
        //     defaultDate:"--",
        //     minYear: y,
        //     maxYear: y + 100
        //   });
        // }
      });
      $(".js_date_two").each(function (index) {
        $(".js_date_two").myDate({
          yearId: `.js_lh_zj_y_${index}`,
          monthId: `.js_lh_zj_m_${index}`,
          dayId: `.js_lh_zj_d_${index}`,
          defaultDate: "--",
          minYear: y - 150
        });
      });
    },
    initCountry() {
      var dom = $(selectHTML);
      $.each(country, function (i, jsonObj) {
        //循环citiesData.js中的城市
        var index;
        var arr = jsonObj.name.split("");
        for (let i = 0, len = arr.length; i < len; i++) {
          if (xa_pinyin.haveChainFont(arr[i])) {
            index = i;
            break;
          }
        }

        var info3LowerCase = xa_pinyin.getCamelChars(jsonObj.name.slice(index)).toLowerCase();

        var str = info3LowerCase.substring(0, 1);
        var option = '<option value="' + jsonObj.id + '" mark="' + jsonObj.name + '" >' + info3LowerCase + " [" + jsonObj.name.slice(index) + " " + jsonObj.name.slice(0, index) + "]</option>";
        dom.find("optgroup[label='" + str.toUpperCase() + "']").append(option);
      });
      $(".js_country").html(dom.html());
      $(".js_country").val("CHN");
    },
    eventInit() {
      $('.js_selType').on('change', function () {
        if ($(this).val() == 2) {
          $('.js_lhbabyinp').eq($(this).attr('data-seltype')).show()
        } else {
          $('.js_lhbabyinp').eq($(this).attr('data-seltype')).hide()
        }
      });
      $(".js_tipimg").on('mouseover', function () {
        $(this).next().show()
      });
      $(".js_tipimg").on('mouseout', function () {
        $(this).next().hide()
      });
      $(".js_p_xdye").on('click', function () {
        var optHTML;
        $(".js_yer_inp").each((index, e) => {
          if ($(e).attr('data-type') != 'infant') {
            if ($(e).find(`#js_username1_${index}`).val() == '' || $(e).find(`#js_username2_${index}`).val() == '') {
            } else {
              optHTML += `<option value="yexd-${index}">${$(e).find(`#js_username1_${index}`).val() + '/' + $(e).find(`#js_username2_${index}`).val()}</option>`
            }
          }
        });
        $(this).html(optHTML);
      })
    },
    personHTML(data) {
      var trH = '';
      var $this = this;
      var total = 0;
      $.each(data, (name, e) => {
        let number = '';
        let person = '';
        total += e.ticketPrice + eval(e.tax.join('+'));
        if (e != null) {
          if (name == 'adultPrice') {
            number = $this.dataJson.adult;
            person = '成人';
          } else if (name == 'childPrice') {
            number = $this.dataJson.child;
            person = '儿童';
          } else if (name == 'babyPrice') {
            number = $this.dataJson.infant;
            person = '婴儿';
          }
          trH += `
            <tr>
              <td>${person} x ${number}</td>
              <td>¥<span id=" summary-prc-fare-0">${e.ticketPrice}</span></td>
              <td>¥<span id="summary-prc-tax-0">${eval(e.tax.join('+'))}</span></td>
            </tr>
          `
        }
      });
      $(".js_t_price").html(trH);
      $(".js_f_total").html(total)

    },
    listHTML() {
      var $this = this;
      var liHtml = '';
      $.each($this.dataJson.segments, (index, data) => {
        liHtml += `
          <div class="lhorder_flight-info">
            <div class="saml"><span>${index == 0 ? '去' : '回'}</span></div>
            <ul class="lh_f-info-list">
            ${
                data.flight.map((flight) => {
                  return ` <li>
                      <div class="li_info inline-block">
                        <div class="li_info-msg con">
                          <div class="city"><strong>${flight.depportname}</strong> </div>
                          <div class="num">${flight.depdate} ${flight.deptime}分</div>
                        </div>
                        <div class="con con2 inline-block">
                          <img src="/csair/img/split_destination.png" alt="">
                          <div> ${flight.carrier+flight.flightno}</div>
                        </div>
                        <div class="li_info-msg con">
                          <div class="city"><strong>${flight.arrportname}</strong></div>
                          <div class="num">${flight.arrdate} ${flight.arrtime}分</div>
                        </div>
                        <div class="li_info-jc inline-block">${flight.cabincode}舱</div>
                        <div class="clearboth"></div>
                      </div>
                    </li> 
                  `
                })
              }
            </ul>
          </div>
        `
      });
      $('.js_lh_list').html(liHtml)
    },
    chengjiHTML() {
      var $this = this;
      var pJSON = [
        { number: $this.dataJson['adult'], name: 'adult',title:'成人(≥12岁)' },
        { number: $this.dataJson['child'], name: 'child' ,title:'儿童(2-11岁)'},
        { number: $this.dataJson['infant'], name: 'infant',title:'婴儿(<12岁)' },
      ];
      var formHTML = '';
      $.each(pJSON, (index, json) => {
        if (json.number != 0) {
          formHTML += `
          <form class="lho_form js_lhform_class" id="js_lhform_${index}" action="javascript:(void)">
            <div class="lhform_title">
              旅客${index + 1}：<span >${json.title}</span>
              <input type="hidden" value="${json.title}"/>
              <span class="text-err js_error_${index}"></span>
            </div>
            <ul class="lform_ul">
              <li>
                <div class="lform_li js_yer_inp" data-type="${json.name}">
                  <label for=""><span class="orangefont">*</span>旅客姓名 </label>
                  <input type="text" name="${index}_username1" id="js_username1_${index}" data-inty="lvxm" data-nume="${index}" onBlur="window.lahemOrder.lhBlur(this)" autocomplete="off" maxlength="28" placeholder="姓（拼音或者英文）"
                    title="姓（拼音或者英文）" style="width: 130px;"/>
                  <input type="text" name="${index}_username2" id="js_username2_${index}" data-inty="lvxm" data-nume="${index}"  onBlur="window.lahemOrder.lhBlur(this)" autocomplete="off" maxlength="28" placeholder="名（拼音或者英文）"
                    title="名（拼音或者英文）" style="width: 130px;"/>
                  <div class="lh_form-tip">
                    <img src="/csair/img/question.png" class="js_tipimg" alt="">
                    <div class="lhtip_img js_lhtip_img" style="display: none;">
                      <img src="https://b2c.csair.com/B2C40/static/inter/images/card.jpg" width="450" height="324" alt="passport" />
                    </div>
                  </div>
                </div>
                <div class="lform_li">
                  <label for=""><span class="orangefont">*</span>性别</label>
                  <label class="input_r"> <input name="${index}p-sex" value="M" id="js_lhsex${index}_1" data-nume="${index}"  type="radio" checked="checked"/>男</label>
                  <label class="input_r"> <input name="${index}p-sex" value="F" id="js_lhsex${index}_2" data-nume="${index}"  type="radio"/>女</label>
                </div>              
              </li>
              <li>
                <div class="lform_li js_date_one">
                  <label for=""><span class="orangefont">*</span>出生日期</label>
                  <select type="text" name="p-birthday-y${index}" class="lminwidth js_lh_y_${index}" data-nume="${index}"  autocomplete="off" title="年"></select>
                  <select type="text" name="p-birthday-m${index}" class="lminwidth js_lh_m_${index}" data-nume="${index}"  autocomplete="off" title="月"></select>
                  <select type="text" name="p-birthday-d${index}" class="lminwidth js_lh_d_${index}" data-nume="${index}"  autocomplete="off" title="日"></select>
                </div >
                <div class="lform_li">
                  <label for=""><span class="orangefont">*</span>国家/地区</label>
                  <select name="p-city${index}" class="lmaxwidth js_country" data-nume="${index}" ></select>
                </div>              
              </li>
              <li>
                <div class="lform_li">
                  <label for=""><span class="orangefont">*</span>证件号码</label>
                  <select type="text" name="p-hz${index}" class="lminwidth" data-nume="${index}" >
                    <option value="P" selected>护照</option>
                    <option value="P">港澳通行证</option>
                    <option value="P">回乡证</option>
                    <option value="P">台胞证</option>
                    <option value="P">台湾通行证</option>
                  </select>
                  <input  type="text" name="p-doc${index}" onBlur="window.lahemOrder.lhBlur(this)" data-inty="zjhm" data-inty="zjhm"  data-nume="${index}" autocomplete="off" maxlength="15" />
                </div>
                <div class="lform_li  js_date_two">
                  <label for=""><span class="orangefont">*</span>证件有效期</label>
                  <select type="text" name="p-zj-y${index}" class="js_lh_zj_y_${index} lminwidth" data-nume="${index}"  autocomplete="off" title="年"></select>
                  <select type="text" name="p-zj-m${index}" class="js_lh_zj_m_${index} lminwidth" data-nume="${index}"  autocomplete="off" title="月"></select>
                  <select type="text" name="p-zj-d${index}" class="js_lh_zj_d_${index} lminwidth" data-nume="${index}"  autocomplete="off" title="日"></select>
                </div>              
              </li>
              <li>
                <div class="lform_li">
                  <label for=""><span class="orangefont">*</span>签发地</label>
                  <select class="lmaxwidth js_country" name="p-qfd${index}" data-nume="${index}" ></select>
                </div>
                ${
                json.name == 'infant' ? `
                  <div class="lform_li js_lhbabyinp" >
                  <label for=""><span class="orangefont">*</span>婴儿携带人</label>
                  <select name="p-yexdz${index}"  class="lminwidth js_p_xdye" data-nume="${index}" ></select>
                </div>
                  `: ''
                }
              </li>
            </ul>
          </form>
          
          `
        }
      });
      $(".js_lhoform").html(formHTML);
    },
    lhBlur(e) {
      var $this = this;
      var index = $(e).attr('data-nume');
      if ($(e).val() == '') {
        $this.errorTip(index, '必填处不能为空！');
      }
      if ($(e).attr('data-inty') == 'zjhm' && $(e).val() != '') {
        console.log($(e).val())
      } else {
        
      }
    },
    errorTip(index, text) {
      $(`.js_error_${index}`).html(text);
      //语音提示
    },
    lhformValite() {
      var $this = this;
      var mark = true;
      var msgData = $(".js_lah_f").serializeArray();
      var check = $('#js_lhf_check').prop('checked');
      console.log(msgData);
      $('.js_lhform_class').each((index, formdata) => {
        $this.errorTip(index, '');
        var fdata = $(formdata).serializeArray();
        $.each(fdata, (indexf, json) => {
          if (!json.value) {
            // console.log(json, indexf);
            if (mark) {
              $this.errorTip(index, '必填处不能为空！')
              mark = false;
            } else {
            
            }
          }
        })
      });
      if (mark) {
        $.each(msgData, (indexm, msgdata)=> {
          if (!msgdata.value) {
            $(".js_er_bttom").html('请阅读条例进行勾选 ')
          }
        })
      }
      if (check == false && mark) {
        $(".js_er_bttom").html('请阅读条例进行勾选 ')
      }
    }

  }
  window.lahemOrder.init()
})
