//机票促销
var loadSoundManagerInterval = setInterval(function() {
  //当声音插件和ip当前城市
  if (reader.soundManagerIsready) {
    clearInterval(loadSoundManagerInterval);
    main.init();
  }
}, 200);
window.main = {
  init(){
    this.getDate()
  },
  getDate() {
    $.blockUI({
      message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>"
    });
    reader.voicePrompt.play("/iac/csair/mp3/ymjz");
    timedCount();
    $.ajaxSetup({
      cache: false
    });

    $.ajax({
      type: "get",
      url:"destinationList",
      success(res){
        main.pageInit(res);
      },
      complete: function(data) {
        $.unblockUI();
        reader.stopAll();
      },
      error(){
        alert("服务器异常,请联系管理员~")
      }
    });
  },
  pageInit: function(res) {
    let pageNo = 0;
    let pageSize = 5;
    //渲染
    let html = "";
    res.video.forEach(function(val) {
      html +=
        ` <li>
                <a href="${val.href}" target="_blank" title="${val.summary}">
                    <img src="${val.imgsrc}" alt="${val.summary}">
                <h5>${val.summary}</h5>
                </a>
            </li>`;
    })
    $(".js_essayList").html(html);
    //指读工具栏重构
    reBuildTool();
  }
}
