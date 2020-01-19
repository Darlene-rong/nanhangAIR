(function ($) {
  $.fn.myDate = function (options) {
    var opts = $.extend($.fn.myDate.default, options, $.fn.myDate.methods);
    var newOp = {};
    if (options.defaultDate == undefined) {
      options.defaultDate = opts._formatDate(new Date());
    } else {
      options.defaultDate = opts._datetoArr(options.defaultDate);
    };
    if (options.maxDate == undefined) {
      options.maxDate = opts._formatDate(new Date());
      options.maxYear = options.maxYear;
      options.maxMonth = options.maxDate.split('-')[1];
      options.maxDay = options.maxDate.split('-')[2];
    } else {
      options.maxDate = opts._datetoArr(options.maxDate);
      options.maxYear = options.maxDate.split('-')[0];
      options.maxMonth = options.maxDate.split('-')[1];
      options.maxDay = options.maxDate.split('-')[2];
    }
    newOpt = $.extend({}, $.fn.myDate.default , options);
    opts.init(newOpt);
  };
  $.fn.myDate.methods = {
    init(opts) {
      this.template(opts);
      this._methods(opts);
      this._setDay(opts);
      this._maxda(opts);
    },
    template(opts) {
      for (let i = opts.minYear; i <= opts.maxYear; i++) {
        let yearHTML = `<option value="${i}">${i}</option>`;
        $(opts.yearId).append(yearHTML);
      };
      for (let j = 1; j <= 12; j++) {
        if (j < 10) {
          j = '0' + j;
        }
        let monthHTML = `<option value="${j}">${j}</option>`;
        $(opts.monthId).append(monthHTML);
      };
      opts.slectedMonth = opts.defaultDate.split('-')[1];
      opts.slectedDay = opts.defaultDate.split('-')[2];
      $(opts.yearId).val(opts.defaultDate.split('-')[0]);
    },
    _methods(opts) {
      var $this = this;
      $(opts.yearId).on('change', function () {
        if (parseInt($(opts.monthId).val()) < parseInt(opts.maxMonth)) {
          opts.slectedMonth = $(opts.monthId).val();
        } else {
          opts.slectedMonth = opts.maxMonth;
        };
        if (parseInt($(opts.dayId).val()) < parseInt(opts.maxDay)) {
          opts.slectedDay = $(opts.dayId).val();
        } else {
          opts.slectedDay = opts.maxDay;
        };
        $this._maxda(opts);
        $this._setDay(opts);
      });
      $(opts.monthId).on('change', function () {
        opts.slectedMonth = $(this).val();
        $this._maxda(opts);
        $this._setDay(opts);
      });
      $(opts.dayId).on('click', function () {
        $this._setDay(opts);
      })
      $(opts.dayId).on('change', function () {
        opts.slectedDay = $(this).val();
      });
    },
    _maxda(opts) {
      if ($(opts.yearId).val() == opts.maxYear) {
        for (let i = parseInt(opts.maxMonth); i <= 12; i++) {
          $($(opts.monthId).find('option')[i]).attr('disabled',true)
        }
      } else {
        for (let i = 1; i <= 12; i++) {
          $($(opts.monthId).find('option')[i]).attr('disabled',false)
        }
      }
      $(opts.monthId).val(opts.slectedMonth);
    },
    _setDay(e) {
      var $this = this;
      var selYear = parseInt($(e.yearId).val());
      var selMonth = parseInt($(e.monthId).val());
      var dayCount = 0;
      switch (selMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          dayCount = 31;
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          dayCount = 30;
          break;
        case 2:
          dayCount = 28;
          if ($this._isLeapYear(selYear)) {
            dayCount = 29;
          }
          break;
        default:
        break;
      }
      $(e.dayId).children().remove();
      for (let i = 1; i <= dayCount; i++) {
        if (i < 10) {
          i = '0' + i;
        }
        var dayHTML = `<option value="${i}">${i}</option>`;
        $(e.dayId).append(dayHTML);
      };
      if (selMonth == e.maxMonth && selYear == e.maxYear) {
        for (let i = parseInt(e.maxDay); i <= dayCount; i++) {
          $($(e.dayId).find('option')[i]).attr('disabled',true)
        }
      } else {
        for (let i = 1; i <= dayCount; i++) {
          $($(e.dayId).find('option')[i]).attr('disabled',false)
        }
      };
      if (e.slectedDay>$(e.dayId).find('option').length) {
        $(e.dayId).val(dayCount);
      } else {
        $(e.dayId).val(e.slectedDay);
      }
    },
    _isLeapYear(year) {
      return (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0));
    },
    _formatDate(date) {
      var y = date.getFullYear();  
      var m = date.getMonth() + 1;  
      m = m < 10 ? '0' + m : m;  
      var d = date.getDate();  
      d = d < 10 ? ('0' + d) : d;  
      return y + '-' + m + '-' + d;  
    },
    _datetoArr(val) {
      var newVal = val.split('-');
      for (let i = 0; i < 10; i++) {
        newVal[i] = parseInt(newVal[i]) < 10 ? '0' + parseInt(newVal[i]) : parseInt(newVal[i]); 
      }
      return newVal[0] + '-' + newVal[1] + '-' + newVal[2];
    }
  };
  $.fn.myDate.default = {
    yearId: '#selYear',  //年ID或者class
    monthId: '#monthId', //月ID或者class
    dayId: '#dayId',   //日ID或者class
    defaultDate: '',  //默认年月日  格式'yyyy-m-d'
    minYear: '2000',  //最小年
    maxYear: new Date().getFullYear() + 1, //最大年 默认为当前年加1
    maxDate: ''    //最大日期 格式'yyyy-m-d'或者'yyyy-mm-dd'   默认为当前年
  }
})(jQuery)