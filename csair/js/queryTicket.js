$(function() {
    changeButton()
});
function changeButton() {
    document.getElementsByClassName('submin')[0].innerHTML='<div class="search_div_btn">\n' +
        '              <button type="button" id="search_div_btn"  class ="m-btn min" title="立即查询">立即查询</button>\n' +
        '            </div>';
    $('#search_div_btn').click(function () {
        InitData();
    })
}
function InitData(){

    var cfsjs = $('#DepartureDate').val();  //出发日期
    var fcsjs = $('#ReturnDate').val();  // 返回日期
    var year = cfsjs.split('-')[0];
    var month = cfsjs.split('-')[1];
    var day = cfsjs.split('-')[2];
    var year2 = fcsjs.split('-')[0];
    var month2 = fcsjs.split('-')[1];
    var day2 = fcsjs.split('-')[2];
    var chkObjs=null;
    //获取单程 或者 往返选项
    var obj=document.getElementsByName('segtype_1')
    for (var i=0;i<obj.length;i++){ //遍历Radio
        if(obj[i].checked){
            chkObjs=obj[i].value;
        }
    }

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

    if (c1 == null || c1 == '' || c1 == '支持首字母简拼') {
        alert('请选择出发城市')
        return;
    }
    if (c2 == null || c2 == '' || c2 == '支持首字母简拼') {
        alert('请选择到达城市')
        return;
    }

    if (cfsjs == null || cfsjs == '') {
        alert('请选择出发日期')
        return;
    }
    if (c1 == c2) {
        alert('出发城市与到达城市不能相同')
        return;
    }
    setSearchInfo(1);
    countreload();
    if (chkObjs == 1) {
        var day3 = new Date(cfsjs);
        day3.setTime(day3.getTime() + 24 * 60 * 60 * 1000);
        year2 = day3.getFullYear();
        month2 = day3.getMonth();
        day2 = day3.getDay();
        var flightQuery = "flightQuery?c1=" + c1 + "&c2=" + c2 + "&date="+ cfsjs +"&number1="+adult+"&number2="+child+"&number3="+infant+"&year="+year+"&month="+month+"&day="+day+"&year2="+year2+"&month2="+month2+"&day2="+day2;
        window.location.href=flightQuery;
    }else{
        var flightQuery2 = "flightQuery2?c1=" + c1 + "&c2=" + c2 + "&date="+ cfsjs +"&date2="+ fcsjs +"&number1="+adult+"&number2="+child+"&number3="+infant+"&year="+year+"&month="+month+"&day="+day+"&year2="+year2+"&month2="+month2+"&day2="+day2;
        window.location.href=flightQuery2;
    }
    $.blockUI({ message: "<h1><a id='msg' href='##' title='提示：航班查询中，请稍后。。。'>提示：航班查询中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>" });
    reader.voicePrompt.play("/iac/csair/mp3/00001");
    timedCount();


}