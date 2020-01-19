$(function() {
    InitData();
});
function InitData(){
        var cfsjs = $('#DepartureDate').val().split('-');  //出发日期
        var fcsjs = $('#ReturnDate').val().split('-');  // 返回日期
        var year = cfsjs[0];
        var month = cfsjs[1];
        var day = cfsjs[2];
        var year2 = fcsjs[0];
        var month2 = fcsjs[1];
        var day2 = fcsjs[2];
        var chkObjs=null;
        //获取单程 或者 往返选项
        var obj=document.getElementsByName('segtype_1')
        for (var i=0;i<obj.length;i++){ //遍历Radio
            if(obj[i].checked){
                chkObjs=obj[i].value;
            }
        }
        //把标签替换成首页的标签
        this.changeHtmlSelect();
        //初始化年
        this.initYear();

        if (chkObjs==1) { //单程
            $("#s_class").click();
        } else { //往返
            $("#r_class").click();
        }


        //变更年月日信息
        this.changeDateINPUT(year,month,day,year2,month2,day2);

        $('#year').val(year);
        $('#month').val(month);
        $('#day').val(day);
        $('#yea2').val(year2);
        $('#month2').val(month2);
        $('#day2').val(day2);

        this.selectClick();

}
function dancheng(){
    $(".fancheng").attr("style","display:none;");
    $("#adult").focus();
}
function fancheng(){
    $(".fancheng").attr("style","display:block;");
    $("#adult").focus();
}
function changeHtmlSelect() {
    document.getElementById('s_class').setAttribute("onclick","dancheng()");
    document.getElementById('r_class').setAttribute("onclick","fancheng()");

    document.getElementsByClassName("grid")[0].innerHTML='<div class="grid1">\n' +
        '<p style="margin:0; text-indent:0;  font-size:12px;">出发日期</p>\n' +
        ' <div>\n' +
        '\t<select id="year" title="出发日期选择年份"></select> <select id="month" title="选择月份"></select> <select id="day"\n' +
        '\t  title="选择日期"></select>\n' +
        '  </div>\n' +
        '</div>\n' +
        '<div class="fancheng">\n' +
        '\t\t<p style="margin:0; text-indent:0;  font-size:12px;">回程日期</p>\n' +
        '\t\t<div>\n' +
        '\t\t\t<select id="year2" title="返程日期选择年份"></select> <select id="month2" title="选择月份"></select> <select id="day2"\n' +
        '\t\t\t  title="选择日期"></select>\n' +
        '\t\t</div>\n' +
        '</div>';
    document.getElementsByClassName('submin')[0].innerHTML='<div class="search_div_btn">\n' +
        '              <button type="button" id="search_div_btn"  class ="m-btn min" title="立即查询">立即查询</button>\n' +
        '            </div>';
}
function initYear(){
    var date=new Date;
    var year=date.getFullYear(); //本年
    var month=date.getMonth()+1;
    var day = date.getDate();


    //初始化出发日期“年”
    for(var y=year;y<(year+2);y++){
        $("#year").append("<option value='"+y+"'>"+y+"</option>");
    }
    //变更出发日期“年”
    $("#year").on("change",function(){
        var yy=$(this).val();//变更后的年
        if(yy==year){
            $("#month").empty();
            for(var m=month;m<13;m++){
                m =(m<10 ? "0"+m:m);
                $("#month").append("<option value='"+m+"'>"+m+"</option>");
            }

            $("#year2").empty();
            var yearValue = $("#year").val();
            yearValue = parseInt(yearValue*1);
            for(var y=year;y<(year+2);y++){
                $("#year2").append("<option value='"+y+"'>"+y+"</option>");
            }
            $("#year2 option").each(function(){
                var year2Option = $(this).val();
                if(year2Option == yearValue){
                    $(this).attr("selected","selected");
                }
            });

        }else{
            $("#month").empty();
            for(var m=1;m<month + 1;m++){
                m =(m<10 ? "0"+m:m);
                $("#month").append("<option value='"+m+"'>"+m+"</option>");
            }

            $("#year2").empty();
            var yearValue = $("#year").val();
            yearValue = parseInt(yearValue*1);
            for(var y=yearValue;y<(yearValue+1);y++){
                $("#year2").append("<option value='"+y+"'>"+y+"</option>");
            }
            $("#year2 option").each(function(){
                var year2Option = $(this).val();
                if(year2Option == yearValue){
                    $(this).attr("selected","selected");
                }
            });
        }
        $("#month").trigger("change");


    });
}



function selectClick() {
    $('#search_div_btn').click(function () {

        var c1 = $('#city1_code').val(); //出发城市
        var c2 = $('#city2_code').val();//到达城市
        if (c1 == 'MFM' || c1 == 'HKG' || c1 == 'TPE' || c1 == 'KNH' || c1 == 'KHH' || c1 == 'RMQ') {
            alert('抱歉，暂不提供该航线服务，谢谢！');
            $('#city1_code').focus();
            return;
        }
        if (c2 == 'MFM' || c2 == 'HKG' || c2 == 'TPE' || c2 == 'KNH' || c2 == 'KHH' || c2 == 'RMQ') {
            alert('抱歉，暂不提供该航线服务，谢谢！');
            $('#city2_code').focus();
            return;
        }

        var adult = $('#adult').val(); //成人
        var child = $('#child').val(); //儿童
        var infant = $('#infant').val(); //婴儿

        var year =$('#year').val();;
        var month =$('#month').val();
        var day =  $('#day').val();
        var year2 =$('#year2').val();
        var month2 = $('#month2').val();
        var day2 =$('#day2').val();

        if (c1 == null || c1 == '' || c1 == '支持首字母简拼') {
            alert('请选择出发城市')
            return;
        }
        if (c2 == null || c2 == '' || c2 == '支持首字母简拼') {
            alert('请选择到达城市')
            return;
        }
        var cfsj=year+"-"+month.toString()+"-"+day.toString();
        var fcsj=year2+"-"+month2.toString()+"-"+day2.toString();
        if (cfsj == null || cfsj == '') {
            alert('请选择出发日期')
            return;
        }
        if (c1 == c2) {
            alert('出发城市与到达城市不能相同')
            return;
        }

        var chkObjs = null;
        var obj = document.getElementsByName('segtype_1')
        for (var i = 0; i < obj.length; i++) { //遍历Radio
            if (obj[i].checked) {
                chkObjs = obj[i].value;
            }
        }
        var lcExchangeList = 'c1=' + c1 + '&c2=' + c2 + '&date=' + cfsj
            + '&number1=' + adult + '&number2=' + child + '&number3=' + infant
            + '&year=' + year + '&month=' + month + '&day=' + day;
        //查询信息存入cookie
        setSearchInfo(1);
        if (chkObjs == 1) {
            var day3 = new Date(cfsj);
            day3.setTime(day3.getTime() + 24 * 60 * 60 * 1000);
            window.parent.location.href = 'flightQuery?' + lcExchangeList + '&year2=' + day3.getFullYear() + '&month2=' + (day3.getMonth() + 1) + '&day2=' + day3.getDate();
            ;
        } else {
            window.parent.location.href = 'flightQuery2?' + lcExchangeList + '&date2=' + fcsj + '&year2=' + year2 + '&month2=' + month2 + '&day2=' + day2;
        }
        countreload();
        //语音提示
        $.blockUI({ message: "<h1><a id='msg' href='##' title='提示：航班查询中，请稍后。。。'>提示：航班查询中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
        reader.voicePrompt.play("/iac/csair/mp3/00001");
        timedCount();
    })
}
    function changeDateINPUT(Oldyear,Oldmonth,Oldday,Oldyear2,Oldmonth2,Oldday2) {

        var date = new Date;
        var year = date.getFullYear(); //本年
        var month = date.getMonth() + 1;
        var day = date.getDate();


        var yearValue = Oldyear;
        var monthValue = Oldmonth;
        var dayValue = Oldday;

        if (yearValue == year) {
            $("#month").html("");
            for (var m = month; m < 13; m++) {
                m = (m < 10 ? "0" + m : m);
                $("#month").append("<option value='" + m + "'>" + m + "</option>");
            }
            $("#day").html("");
        } else if (yearValue == year + 1) {
            $("#month").html("");
            for (var m = 1; m < month + 1; m++) {
                m = (m < 10 ? "0" + m : m);
                $("#month").append("<option value='" + m + "'>" + m + "</option>");
            }
            $("#day").html("");
            if (monthValue == 1 || monthValue == 3 || monthValue == 5 || monthValue == 7 || monthValue == 8 || monthValue == 10 || monthValue == 12) {
                for (var d = 1; d < 32; d++) {
                    d = (d < 10 ? "0" + d : d);
                    $("#day").append("<option value='" + d + "'>" + d + "</option>");
                }
            } else if (yearValue % 4 == 0 && monthValue == 2) {
                for (var d = 1; d < 30; d++) {
                    d = (d < 10 ? "0" + d : d);
                    $("#day").append("<option value='" + d + "'>" + d + "</option>");
                }
            } else if (yearValue % 4 != 0 && monthValue == 2) {
                for (var d = 1; d < 29; d++) {
                    d = (d < 10 ? "0" + d : d);
                    $("#day").append("<option value='" + d + "'>" + d + "</option>");
                }
            } else if (monthValue == month) {
                for (var d = 1; d < day + 1; d++) {
                    d = (d < 10 ? "0" + d : d);
                    $("#day").append("<option value='" + d + "'>" + d + "</option>");
                }
            } else {
                for (var d = 1; d < 31; d++) {
                    d = (d < 10 ? "0" + d : d);
                    $("#day").append("<option value='" + d + "'>" + d + "</option>");
                }
            }
        }

        $("#year option").each(function () {
            var yearOption = $(this).val();
            if (yearOption == yearValue) {
                $(this).attr("selected", "selected");
            }
        });

        $("#month option").each(function () {
            var monthOption = $(this).val();
            if (monthOption == monthValue) {
                $(this).attr("selected", "selected");
            }
        });

        var monthValue1 = $("#month").val();
        if (yearValue == year) {
            if (monthValue1 == month) {
                if (monthValue1 == 1 || monthValue1 == 3 || monthValue1 == 5 || monthValue1 == 7 || monthValue1 == 8 || monthValue1 == 10 || monthValue1 == 12) {
                    for (var d = day; d < 32; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day").append("<option value='" + d + "'>" + d + "</option>");
                    }
                } else if (year % 4 == 0 && month == 2) {
                    for (var d = day; d < 30; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day").append("<option value='" + d + "'>" + d + "</option>");
                    }
                } else if (year % 4 != 0 && month == 2) {
                    for (var d = day; d < 29; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day").append("<option value='" + d + "'>" + d + "</option>");
                    }
                } else {
                    for (var d = day; d < 31; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day").append("<option value='" + d + "'>" + d + "</option>");
                    }
                }
            } else {
                if (monthValue1 == 1 || monthValue1 == 3 || monthValue1 == 5 || monthValue1 == 7 || monthValue1 == 8 || monthValue1 == 10 || monthValue1 == 12) {
                    for (var d = 1; d < 32; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day").append("<option value='" + d + "'>" + d + "</option>");
                    }
                } else if (year % 4 == 0 && month == 2) {
                    for (var d = 1; d < 30; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day").append("<option value='" + d + "'>" + d + "</option>");
                    }
                } else if (year % 4 != 0 && month == 2) {
                    for (var d = 1; d < 29; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day").append("<option value='" + d + "'>" + d + "</option>");
                    }
                } else {
                    for (var d = 1; d < 31; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day").append("<option value='" + d + "'>" + d + "</option>");
                    }
                }
            }

        }

        $("#day option").each(function () {
            var dayOption = $(this).val();
            if (dayOption == dayValue) {
                $(this).attr("selected", "selected");
            }
        });


        $("#year2").empty();
        var yearValue = $("#year").val();
        yearValue = parseInt(yearValue * 1);
        var monthValue = $("#month").val();
        monthValue = parseInt(monthValue * 1);
        var dayValue = $("#day").val();
        dayValue = parseInt(dayValue * 1);
        if (yearValue == year) {
            if (monthValue == 12 && dayValue == 31) {
                for (var y = year; y < (year + 2); y++) {
                    $("#year2").append("<option value='" + y + "'>" + y + "</option>");
                }
                $("#year2 option").each(function () {
                    var year2Option = $(this).val();
                    if (year2Option == year + 1) {
                        $(this).attr("selected", "selected");
                    }
                });
            } else {
                for (var y = year; y < (yearValue + 2); y++) {
                    $("#year2").append("<option value='" + y + "'>" + y + "</option>");
                }
            }
        } else {
            for (var y = yearValue; y < (yearValue + 1); y++) {
                $("#year2").append("<option value='" + y + "'>" + y + "</option>");
            }
        }


        $("#month2").empty();
        var monthValue = $("#month").val();
        monthValue = parseInt(monthValue * 1);
        var yearValue = $("#year").val();
        var year2Value = $("#year2").val();
        if (yearValue == year2Value) {
            if (yearValue == year) {
                for (var m = monthValue; m < 13; m++) {
                    m = (m < 10 ? "0" + m : m);
                    $("#month2").append("<option value='" + m + "'>" + m + "</option>");
                }
            } else {
                for (var m = monthValue; m < month + 1; m++) {
                    m = (m < 10 ? "0" + m : m);
                    $("#month2").append("<option value='" + m + "'>" + m + "</option>");
                }
            }
            $("#month2 option").each(function () {
                var month2Option = $(this).val();
                if (month2Option == monthValue) {
                    $(this).attr("selected", "selected");
                }
            });
        } else {
            for (var m = 1; m < month + 1; m++) {
                m = (m < 10 ? "0" + m : m);
                $("#month2").append("<option value='" + m + "'>" + m + "</option>");
            }
        }


        $("#day2").empty();
        var monthValue = $("#month").val();
        monthValue = parseInt(monthValue * 1);
        var month2Value = $("#month2").val();
        month2Value = parseInt(month2Value * 1);
        var yearValue = $("#year").val();
        var year2Value = $("#year2").val();
        var dayValue = $("#day").val();
        dayValue = parseInt(dayValue * 1);

        if (year2Value == year) {
            if (month2Value == monthValue) {
                if (month2Value == 1 || month2Value == 3 || month2Value == 5 || month2Value == 7 || month2Value == 8 || month2Value == 10) {
                    if (dayValue != 31) {
                        for (var d = dayValue; d < 32; d++) {
                            d = (d < 10 ? "0" + d : d);
                            $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                        }
                        $("#day2 option").each(function () {
                            var day2Option = $(this).val();
                            if (day2Option == dayValue + 1) {
                                $(this).attr("selected", "selected");
                            }
                        });
                    } else {
                        $("#month2 option").each(function () {
                            var month2Option = $(this).val();
                            if (month2Option == monthValue + 1) {
                                $(this).attr("selected", "selected");
                                changeMonth2();
                            }
                        });
                    }
                } else if (year2Value % 4 == 0 && month2Value == 2) {
                    if (dayValue != 29) {
                        for (var d = dayValue; d < 30; d++) {
                            d = (d < 10 ? "0" + d : d);
                            $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                        }
                        $("#day2 option").each(function () {
                            var day2Option = $(this).val();
                            if (day2Option == dayValue + 1) {
                                $(this).attr("selected", "selected");
                            }
                        });
                    } else {
                        $("#month2 option").each(function () {
                            var month2Option = $(this).val();
                            if (month2Option == monthValue + 1) {
                                $(this).attr("selected", "selected");
                                changeMonth2();
                            }
                        });
                    }
                } else if (year2Value % 4 != 0 && month2Value == 2) {
                    if (dayValue != 28) {
                        for (var d = dayValue; d < 29; d++) {
                            d = (d < 10 ? "0" + d : d);
                            $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                        }
                        $("#day2 option").each(function () {
                            var day2Option = $(this).val();
                            if (day2Option == dayValue + 1) {
                                $(this).attr("selected", "selected");
                            }
                        });
                    } else {
                        $("#month2 option").each(function () {
                            var month2Option = $(this).val();
                            if (month2Option == monthValue + 1) {
                                $(this).attr("selected", "selected");
                                changeMonth2();
                            }
                        });
                    }
                } else if (month2Value == 12) {
                    if (dayValue != 31) {
                        for (var d = dayValue; d < 32; d++) {
                            d = (d < 10 ? "0" + d : d);
                            $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                        }
                        $("#day2 option").each(function () {
                            var day2Option = $(this).val();
                            if (day2Option == dayValue + 1) {
                                $(this).attr("selected", "selected");
                            }
                        });
                    } else {
                        $("#year2 option").each(function () {
                            var year2Option = $(this).val();
                            if (year2Option == yearValue + 1) {
                                $(this).attr("selected", "selected");
                            }
                        });
                        changeYear2();
                    }
                } else {
                    if (dayValue != 30) {
                        for (var d = dayValue; d < 31; d++) {
                            d = (d < 10 ? "0" + d : d);
                            $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                        }
                        $("#day2 option").each(function () {
                            var day2Option = $(this).val();
                            if (day2Option == dayValue + 1) {
                                $(this).attr("selected", "selected");
                            }
                        });
                    } else {
                        $("#month2 option").each(function () {
                            var month2Option = $(this).val();
                            if (month2Option == monthValue + 1) {
                                $(this).attr("selected", "selected");
                                changeMonth2();
                            }
                        });
                    }
                }
            } else {
                if (month2Value == 1 || month2Value == 3 || month2Value == 5 || month2Value == 7 || month2Value == 8 || month2Value == 10 || month2Value == 12) {
                    for (var d = 1; d < 32; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                    }
                } else if (year2Value % 4 == 0 && month2Value == 2) {
                    for (var d = 1; d < 30; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                    }
                } else if (year2Value % 4 != 0 && month2Value == 2) {
                    for (var d = 1; d < 29; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                    }
                } else {
                    for (var d = 1; d < 31; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                    }
                }
            }
        } else {
            if (year2Value == yearValue) {
                if (month2Value == monthValue) {
                    if (month2Value == month) {
                        for (var d = dayValue; d < day + 1; d++) {
                            d = (d < 10 ? "0" + d : d);
                            $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                        }
                        $("#day2 option").each(function () {
                            var day2Option = $(this).val();
                            if (day2Option == dayValue + 1) {
                                $(this).attr("selected", "selected");
                            }
                        });
                    } else {
                        if (month2Value == 1 || month2Value == 3 || month2Value == 5 || month2Value == 7 || month2Value == 8 || month2Value == 10) {
                            if (dayValue != 31) {
                                for (var d = dayValue; d < 32; d++) {
                                    d = (d < 10 ? "0" + d : d);
                                    $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                                }
                                $("#day2 option").each(function () {
                                    var day2Option = $(this).val();
                                    if (day2Option == dayValue + 1) {
                                        $(this).attr("selected", "selected");
                                    }
                                });
                            } else {
                                $("#month2 option").each(function () {
                                    var month2Option = $(this).val();
                                    if (month2Option == monthValue + 1) {
                                        $(this).attr("selected", "selected");
                                        changeMonth2();
                                    }
                                });
                            }
                        } else if (year2Value % 4 == 0 && month2Value == 2) {
                            if (dayValue != 29) {
                                for (var d = dayValue; d < 30; d++) {
                                    d = (d < 10 ? "0" + d : d);
                                    $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                                }
                                $("#day2 option").each(function () {
                                    var day2Option = $(this).val();
                                    if (day2Option == dayValue + 1) {
                                        $(this).attr("selected", "selected");
                                    }
                                });
                            } else {
                                $("#month2 option").each(function () {
                                    var month2Option = $(this).val();
                                    if (month2Option == monthValue + 1) {
                                        $(this).attr("selected", "selected");
                                        changeMonth2();
                                    }
                                });
                            }
                        } else if (year2Value % 4 != 0 && month2Value == 2) {
                            if (dayValue != 28) {
                                for (var d = dayValue; d < 29; d++) {
                                    d = (d < 10 ? "0" + d : d);
                                    $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                                }
                                $("#day2 option").each(function () {
                                    var day2Option = $(this).val();
                                    if (day2Option == dayValue + 1) {
                                        $(this).attr("selected", "selected");
                                    }
                                });
                            } else {
                                $("#month2 option").each(function () {
                                    var month2Option = $(this).val();
                                    if (month2Option == monthValue + 1) {
                                        $(this).attr("selected", "selected");
                                        changeMonth2();
                                    }
                                });
                            }
                        } else if (month2Value == 12) {
                            if (dayValue != 31) {
                                for (var d = dayValue; d < 32; d++) {
                                    d = (d < 10 ? "0" + d : d);
                                    $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                                }
                                $("#day2 option").each(function () {
                                    var day2Option = $(this).val();
                                    if (day2Option == dayValue + 1) {
                                        $(this).attr("selected", "selected");
                                    }
                                });
                            } else {
                                $("#year2 option").each(function () {
                                    var year2Option = $(this).val();
                                    if (year2Option == yearValue + 1) {
                                        $(this).attr("selected", "selected");
                                    }
                                });
                                changeYear2();
                            }
                        } else {
                            if (dayValue != 30) {
                                for (var d = dayValue; d < 31; d++) {
                                    d = (d < 10 ? "0" + d : d);
                                    $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                                }
                                $("#day2 option").each(function () {
                                    var day2Option = $(this).val();
                                    if (day2Option == dayValue + 1) {
                                        $(this).attr("selected", "selected");
                                    }
                                });
                            } else {
                                $("#month2 option").each(function () {
                                    var month2Option = $(this).val();
                                    if (month2Option == monthValue + 1) {
                                        $(this).attr("selected", "selected");
                                        changeMonth2();
                                    }
                                });
                            }
                        }
                    }

                } else {
                    if (month2Value == month) {
                        for (var d = 1; d < day + 1; d++) {
                            d = (d < 10 ? "0" + d : d);
                            $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                        }
                    } else {
                        if (month2Value == 1 || month2Value == 3 || month2Value == 5 || month2Value == 7 || month2Value == 8 || month2Value == 10 || month2Value == 12) {
                            for (var d = 1; d < 32; d++) {
                                d = (d < 10 ? "0" + d : d);
                                $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                            }
                        } else if (year2Value % 4 == 0 && month2Value == 2) {
                            for (var d = 1; d < 30; d++) {
                                d = (d < 10 ? "0" + d : d);
                                $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                            }
                        } else if (year2Value % 4 != 0 && month2Value == 2) {
                            for (var d = 1; d < 29; d++) {
                                d = (d < 10 ? "0" + d : d);
                                $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                            }
                        } else {
                            for (var d = 1; d < 31; d++) {
                                d = (d < 10 ? "0" + d : d);
                                $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                            }
                        }
                    }
                }
            } else {
                if (month2Value == month) {
                    for (var d = 1; d < day + 1; d++) {
                        d = (d < 10 ? "0" + d : d);
                        $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                    }
                } else {
                    if (month2Value == 1 || month2Value == 3 || month2Value == 5 || month2Value == 7 || month2Value == 8 || month2Value == 10 || month2Value == 12) {
                        for (var d = 1; d < 32; d++) {
                            d = (d < 10 ? "0" + d : d);
                            $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                        }
                    } else if (year2Value % 4 == 0 && month2Value == 2) {
                        for (var d = 1; d < 30; d++) {
                            d = (d < 10 ? "0" + d : d);
                            $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                        }
                    } else if (year2Value % 4 != 0 && month2Value == 2) {
                        for (var d = 1; d < 29; d++) {
                            d = (d < 10 ? "0" + d : d);
                            $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                        }
                    } else {
                        for (var d = 1; d < 31; d++) {
                            d = (d < 10 ? "0" + d : d);
                            $("#day2").append("<option value='" + d + "'>" + d + "</option>");
                        }
                    }
                }
            }



    }
}