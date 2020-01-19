function saveNotloadImgs(existArr) {
    //检查是否有未加载图片
    setTimeout(function(){
        saveImgs(existArr);
    },5000);
    var isClick = true;
    //加载点击后才生成的图片
    $("div").on("click",function(){
        if(isClick) {
            isClick = false;
            setTimeout(function(){
                saveImgs(existArr);
                isClick = true;
            },3000);

        }

    });
}
function isHasImg(pathImg) {
    var ImgObj = new Image();
    ImgObj.src = pathImg;
    if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
        return true;
    } else {
        return false;
    }
}
function saveImgs(existArr){
    var urlContextPath = document.getElementById('urlContextPathId').value;
    var imgArr =[];
    var imgSrcArr =[];
    var styleArr =[];
    //获取所有img元素
    $("img").each(function(){
        var pathImg=$(this).attr("src")+"";
        var imgUrl=pathImg.split("?")[0].replace(/'/g,'').replace(/"/g,'')+"";
        $(this).attr("src",imgUrl);
        //如果图片不存在则添加相对路径
        if(!isHasImg(imgUrl)&&imgUrl!=""&&existArr.indexOf(imgUrl)==-1&&imgUrl.indexOf(".com")==-1&&imgArr.indexOf(imgUrl)==-1&&imgUrl.indexOf("csair")==-1){
            imgArr.push(imgUrl);
            var jsonObj={"src":imgUrl};
            imgSrcArr.push(jsonObj);

        }
    });
    //获取所有style属性
    $('div[style*="background"][style*="url"]').each(function(){
        var style=$(this).attr("style");
        var imgUrl=style.substring(style.indexOf("url(")+"url(".length,style.indexOf(")")).replace(/'/g,'').replace(/"/g,'')+"";
        if(!isHasImg(imgUrl)&&existArr.indexOf(imgUrl)==-1&&imgArr.indexOf(imgUrl)==-1){
            imgArr.push(imgUrl);
            var styleObj={"src":imgUrl};
            imgSrcArr.push(styleObj);
        }

    });
    //如果存在未加载图片，则请求后台下载图片
    if(imgSrcArr.length>0){
        loading.show();
        $.ajax({
            url : 'saveImgs',
            type : 'POST',
            sync : false,
            data : {
                "imgSrcArr" : JSON.stringify(imgSrcArr),
                "styleArr":JSON.stringify(styleArr),
                "contextPathUrl" : urlContextPath
            },
            success : function(data) {
                //如果存在非保存的图片就去刷新页面
                if(data){
                    location.reload(true);
                }
                loading.hide();
            }
        });

    }
}
