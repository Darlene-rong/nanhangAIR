$(function() {

    var date=new Date;
    var year=date.getFullYear(); //本年
    var month=date.getMonth()+1;
    var day = date.getDate();


    var yearValue = $("#year").val();
    var monthValue = $("#month").val();
    var dayValue = $("#day").val();

    if(yearValue == year){
        $("#month").html("");
        for(var m=month;m<13;m++){
            m =(m<10 ? "0"+m:m);
            $("#month").append("<option value='"+m+"'>"+m+"</option>");
        }
        $("#day").html("");
    }else if(yearValue == year + 1){
        $("#month").html("");
        for(var m=1;m<month + 1;m++){
            m =(m<10 ? "0"+m:m);
            $("#month").append("<option value='"+m+"'>"+m+"</option>");
        }
        $("#day").html("");
        if(monthValue == 1||monthValue ==3||monthValue ==5||monthValue ==7||monthValue ==8||monthValue ==10||monthValue ==12){
            for(var d=1;d<32;d++){
                d =(d<10 ? "0"+d:d);
                $("#day").append("<option value='"+d+"'>"+d+"</option>");
            }
        }else if(yearValue%4==0 && monthValue ==2){
            for(var d=1;d<30;d++){
                d =(d<10 ? "0"+d:d);
                $("#day").append("<option value='"+d+"'>"+d+"</option>");
            }
        }else if(yearValue%4!=0 && monthValue ==2){
            for(var d=1;d<29;d++){
                d =(d<10 ? "0"+d:d);
                $("#day").append("<option value='"+d+"'>"+d+"</option>");
            }
        }else if(monthValue == month){
            for(var d=1;d<day + 1;d++){
                d =(d<10 ? "0"+d:d);
                $("#day").append("<option value='"+d+"'>"+d+"</option>");
            }
        }else{
            for(var d=1;d<31;d++){
                d =(d<10 ? "0"+d:d);
                $("#day").append("<option value='"+d+"'>"+d+"</option>");
            }
        }
    }

    $("#year option").each(function(){
        var yearOption = $(this).val();
        if(yearOption == yearValue){
            $(this).attr("selected","selected");
        }
    });

    $("#month option").each(function(){
        var monthOption = $(this).val();
        if(monthOption == monthValue){
            $(this).attr("selected","selected");
        }
    });

    var monthValue1 = $("#month").val();
    if(yearValue == year){
        if(monthValue1 == month){
            if(monthValue1 == 1||monthValue1 ==3||monthValue1 ==5||monthValue1 ==7||monthValue1 ==8||monthValue1 ==10||monthValue1 ==12){
                for(var d=day;d<32;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day").append("<option value='"+d+"'>"+d+"</option>");
                }
            }else if(year%4==0 && month ==2){
                for(var d=day;d<30;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day").append("<option value='"+d+"'>"+d+"</option>");
                }
            }else if(year%4!=0 && month ==2){
                for(var d=day;d<29;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day").append("<option value='"+d+"'>"+d+"</option>");
                }
            }else{
                for(var d=day;d<31;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day").append("<option value='"+d+"'>"+d+"</option>");
                }
            }
        }else{
            if(monthValue1 == 1||monthValue1 ==3||monthValue1 ==5||monthValue1 ==7||monthValue1 ==8||monthValue1 ==10||monthValue1 ==12){
                for(var d=1;d<32;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day").append("<option value='"+d+"'>"+d+"</option>");
                }
            }else if(year%4==0 && month ==2){
                for(var d=1;d<30;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day").append("<option value='"+d+"'>"+d+"</option>");
                }
            }else if(year%4!=0 && month ==2){
                for(var d=1;d<29;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day").append("<option value='"+d+"'>"+d+"</option>");
                }
            }else{
                for(var d=1;d<31;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day").append("<option value='"+d+"'>"+d+"</option>");
                }
            }
        }

    }

    $("#day option").each(function(){
        var dayOption = $(this).val();
        if(dayOption == dayValue){
            $(this).attr("selected","selected");
        }
    });


    $("#year2").empty();
    var yearValue = $("#year").val();
    yearValue = parseInt(yearValue*1);
    var monthValue = $("#month").val();
    monthValue = parseInt(monthValue*1);
    var dayValue = $("#day").val();
    dayValue = parseInt(dayValue*1);
    if(yearValue == year){
        if(monthValue == 12 && dayValue == 31){
            for(var y=year;y<(year+2);y++){
                $("#year2").append("<option value='"+y+"'>"+y+"</option>");
            }
            $("#year2 option").each(function(){
                var year2Option = $(this).val();
                if(year2Option == year + 1){
                    $(this).attr("selected","selected");
                }
            });
        }else{
            for(var y=year;y<(yearValue+2);y++){
                $("#year2").append("<option value='"+y+"'>"+y+"</option>");
            }
        }
    }else{
        for(var y=yearValue;y<(yearValue+1);y++){
            $("#year2").append("<option value='"+y+"'>"+y+"</option>");
        }
    }


    $("#month2").empty();
    var monthValue = $("#month").val();
    monthValue = parseInt(monthValue*1);
    var yearValue = $("#year").val();
    var year2Value = $("#year2").val();
    if(yearValue == year2Value){
        if(yearValue == year){
            for(var m=monthValue;m<13;m++){
                m =(m<10 ? "0"+m:m);
                $("#month2").append("<option value='"+m+"'>"+m+"</option>");
            }
        }else{
            for(var m=monthValue;m<month + 1;m++){
                m =(m<10 ? "0"+m:m);
                $("#month2").append("<option value='"+m+"'>"+m+"</option>");
            }
        }
        $("#month2 option").each(function(){
            var month2Option = $(this).val();
            if(month2Option == monthValue){
                $(this).attr("selected","selected");
            }
        });
    }else{
        for(var m=1;m<month + 1;m++){
            m =(m<10 ? "0"+m:m);
            $("#month2").append("<option value='"+m+"'>"+m+"</option>");
        }
    }


    $("#day2").empty();
    var monthValue = $("#month").val();
    monthValue = parseInt(monthValue*1);
    var month2Value = $("#month2").val();
    month2Value = parseInt(month2Value*1);
    var yearValue = $("#year").val();
    var year2Value = $("#year2").val();
    var dayValue = $("#day").val();
    dayValue =  parseInt(dayValue*1);

    if(year2Value == year){
        if(month2Value == monthValue){
            if(month2Value == 1||month2Value ==3||month2Value ==5||month2Value ==7||month2Value ==8||month2Value ==10){
                if(dayValue != 31){
                    for(var d=dayValue;d<32;d++){
                        d =(d<10 ? "0"+d:d);
                        $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                    }
                    $("#day2 option").each(function(){
                        var day2Option = $(this).val();
                        if(day2Option == dayValue + 1){
                            $(this).attr("selected","selected");
                        }
                    });
                }else{
                    $("#month2 option").each(function(){
                        var month2Option = $(this).val();
                        if(month2Option == monthValue + 1){
                            $(this).attr("selected","selected");
                            changeMonth2();
                        }
                    });
                }
            }else if(year2Value%4==0 && month2Value ==2){
                if(dayValue != 29){
                    for(var d=dayValue;d<30;d++){
                        d =(d<10 ? "0"+d:d);
                        $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                    }
                    $("#day2 option").each(function(){
                        var day2Option = $(this).val();
                        if(day2Option == dayValue + 1){
                            $(this).attr("selected","selected");
                        }
                    });
                }else{
                    $("#month2 option").each(function(){
                        var month2Option = $(this).val();
                        if(month2Option == monthValue + 1){
                            $(this).attr("selected","selected");
                            changeMonth2();
                        }
                    });
                }
            }else if(year2Value%4!=0 && month2Value ==2){
                if(dayValue != 28){
                    for(var d=dayValue;d<29;d++){
                        d =(d<10 ? "0"+d:d);
                        $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                    }
                    $("#day2 option").each(function(){
                        var day2Option = $(this).val();
                        if(day2Option == dayValue + 1){
                            $(this).attr("selected","selected");
                        }
                    });
                }else{
                    $("#month2 option").each(function(){
                        var month2Option = $(this).val();
                        if(month2Option == monthValue + 1){
                            $(this).attr("selected","selected");
                            changeMonth2();
                        }
                    });
                }
            }else if(month2Value == 12){
                if(dayValue != 31){
                    for(var d=dayValue;d<32;d++){
                        d =(d<10 ? "0"+d:d);
                        $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                    }
                    $("#day2 option").each(function(){
                        var day2Option = $(this).val();
                        if(day2Option == dayValue + 1){
                            $(this).attr("selected","selected");
                        }
                    });
                }else{
                    $("#year2 option").each(function(){
                        var year2Option = $(this).val();
                        if(year2Option == yearValue + 1){
                            $(this).attr("selected","selected");
                        }
                    });
                    changeYear2();
                }
            }else{
                if(dayValue != 30){
                    for(var d=dayValue;d<31;d++){
                        d =(d<10 ? "0"+d:d);
                        $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                    }
                    $("#day2 option").each(function(){
                        var day2Option = $(this).val();
                        if(day2Option == dayValue + 1){
                            $(this).attr("selected","selected");
                        }
                    });
                }else{
                    $("#month2 option").each(function(){
                        var month2Option = $(this).val();
                        if(month2Option == monthValue + 1){
                            $(this).attr("selected","selected");
                            changeMonth2();
                        }
                    });
                }
            }
        }else{
            if(month2Value == 1||month2Value ==3||month2Value ==5||month2Value ==7||month2Value ==8||month2Value ==10||month2Value ==12){
                for(var d=1;d<32;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                }
            }else if(year2Value%4==0 && month2Value ==2){
                for(var d=1;d<30;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                }
            }else if(year2Value%4!=0 && month2Value ==2){
                for(var d=1;d<29;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                }
            }else{
                for(var d=1;d<31;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                }
            }
        }
    }else{
        if(year2Value == yearValue){
            if(month2Value == monthValue){
                if(month2Value == month){
                    for(var d=dayValue;d<day+1;d++){
                        d =(d<10 ? "0"+d:d);
                        $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                    }
                    $("#day2 option").each(function(){
                        var day2Option = $(this).val();
                        if(day2Option == dayValue + 1){
                            $(this).attr("selected","selected");
                        }
                    });
                }else{
                    if(month2Value == 1||month2Value ==3||month2Value ==5||month2Value ==7||month2Value ==8||month2Value ==10){
                        if(dayValue != 31){
                            for(var d=dayValue;d<32;d++){
                                d =(d<10 ? "0"+d:d);
                                $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                            }
                            $("#day2 option").each(function(){
                                var day2Option = $(this).val();
                                if(day2Option == dayValue + 1){
                                    $(this).attr("selected","selected");
                                }
                            });
                        }else{
                            $("#month2 option").each(function(){
                                var month2Option = $(this).val();
                                if(month2Option == monthValue + 1){
                                    $(this).attr("selected","selected");
                                    changeMonth2();
                                }
                            });
                        }
                    }else if(year2Value%4==0 && month2Value ==2){
                        if(dayValue != 29){
                            for(var d=dayValue;d<30;d++){
                                d =(d<10 ? "0"+d:d);
                                $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                            }
                            $("#day2 option").each(function(){
                                var day2Option = $(this).val();
                                if(day2Option == dayValue + 1){
                                    $(this).attr("selected","selected");
                                }
                            });
                        }else{
                            $("#month2 option").each(function(){
                                var month2Option = $(this).val();
                                if(month2Option == monthValue + 1){
                                    $(this).attr("selected","selected");
                                    changeMonth2();
                                }
                            });
                        }
                    }else if(year2Value%4!=0 && month2Value ==2){
                        if(dayValue != 28){
                            for(var d=dayValue;d<29;d++){
                                d =(d<10 ? "0"+d:d);
                                $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                            }
                            $("#day2 option").each(function(){
                                var day2Option = $(this).val();
                                if(day2Option == dayValue + 1){
                                    $(this).attr("selected","selected");
                                }
                            });
                        }else{
                            $("#month2 option").each(function(){
                                var month2Option = $(this).val();
                                if(month2Option == monthValue + 1){
                                    $(this).attr("selected","selected");
                                    changeMonth2();
                                }
                            });
                        }
                    }else if(month2Value == 12){
                        if(dayValue != 31){
                            for(var d=dayValue;d<32;d++){
                                d =(d<10 ? "0"+d:d);
                                $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                            }
                            $("#day2 option").each(function(){
                                var day2Option = $(this).val();
                                if(day2Option == dayValue + 1){
                                    $(this).attr("selected","selected");
                                }
                            });
                        }else{
                            $("#year2 option").each(function(){
                                var year2Option = $(this).val();
                                if(year2Option == yearValue + 1){
                                    $(this).attr("selected","selected");
                                }
                            });
                            changeYear2();
                        }
                    }else{
                        if(dayValue != 30){
                            for(var d=dayValue;d<31;d++){
                                d =(d<10 ? "0"+d:d);
                                $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                            }
                            $("#day2 option").each(function(){
                                var day2Option = $(this).val();
                                if(day2Option == dayValue + 1){
                                    $(this).attr("selected","selected");
                                }
                            });
                        }else{
                            $("#month2 option").each(function(){
                                var month2Option = $(this).val();
                                if(month2Option == monthValue + 1){
                                    $(this).attr("selected","selected");
                                    changeMonth2();
                                }
                            });
                        }
                    }
                }

            }else{
                if(month2Value == month){
                    for(var d=1;d<day + 1;d++){
                        d =(d<10 ? "0"+d:d);
                        $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                    }
                }else{
                    if(month2Value == 1||month2Value ==3||month2Value ==5||month2Value ==7||month2Value ==8||month2Value ==10||month2Value ==12){
                        for(var d=1;d<32;d++){
                            d =(d<10 ? "0"+d:d);
                            $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                        }
                    }else if(year2Value%4==0 && month2Value ==2){
                        for(var d=1;d<30;d++){
                            d =(d<10 ? "0"+d:d);
                            $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                        }
                    }else if(year2Value%4!=0 && month2Value ==2){
                        for(var d=1;d<29;d++){
                            d =(d<10 ? "0"+d:d);
                            $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                        }
                    }else{
                        for(var d=1;d<31;d++){
                            d =(d<10 ? "0"+d:d);
                            $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                        }
                    }
                }
            }
        }else{
            if(month2Value == month){
                for(var d=1;d<day + 1;d++){
                    d =(d<10 ? "0"+d:d);
                    $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                }
            }else{
                if(month2Value == 1||month2Value ==3||month2Value ==5||month2Value ==7||month2Value ==8||month2Value ==10||month2Value ==12){
                    for(var d=1;d<32;d++){
                        d =(d<10 ? "0"+d:d);
                        $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                    }
                }else if(year2Value%4==0 && month2Value ==2){
                    for(var d=1;d<30;d++){
                        d =(d<10 ? "0"+d:d);
                        $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                    }
                }else if(year2Value%4!=0 && month2Value ==2){
                    for(var d=1;d<29;d++){
                        d =(d<10 ? "0"+d:d);
                        $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                    }
                }else{
                    for(var d=1;d<31;d++){
                        d =(d<10 ? "0"+d:d);
                        $("#day2").append("<option value='"+d+"'>"+d+"</option>");
                    }
                }
            }
        }
    }


})

