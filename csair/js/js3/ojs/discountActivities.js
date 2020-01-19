//机票促销
var loadSoundManagerInterval = setInterval(function() {
  //当声音插件和ip当前城市
  if (reader.soundManagerIsready) {
    clearInterval(loadSoundManagerInterval);
    main.init();
  }
}, 200);
window.main= {
  init(){
    this.getDate(1)
  },
  getDate(pageNum) {
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
      url:"getExcitingActivities",
      data: {
        pageNum:pageNum,
      },
      success(res){
        main.pageInit(res,pageNum);
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
  pageInit: function(res,pageNum) {
    let pageNo = 0;
    let pageSize = 5;
    //渲染
    let html = "";
    if(res.total>0){
        res.excitingActivitieList.forEach(function(val) {
            html +=
                ` <li class="list-item">
              <a href="javascript:;" data-url="${val.activitieHref}" onclick="main.jump(this)"
             title="${val.activitieTitle}" class="list-wrap">
                <img src="${val.imgSrc}"
                  alt="${val.imgAlt}">
                <div class="list-description">
                  <h5>${val.activitieTitle}</h5>
                  <p>${val.activitieDescription}</p>
                  <span class="opts" title="查看详情">查看详情</span>
                </div>
              </a>
            </li>`;
        })
    }
    $(".js_essayList").html(html);
    //指读工具栏重构
    reBuildTool();
    //分页  起始页为0;
    $("#tzPage").tzPage(res.total, {
      num_display_entries: 8, //主体页数
      num_edge_entries: 2, //边缘页数
      current_page: pageNum-1, //指明选中页码
      items_per_page: pageSize, //每页显示多条条
      prev_text: "上一页",
      next_text: "下一页",
      showGo: false, //显示跳转
      showSelect: false,
      prev_show_always: true,
      next_show_always: true,
      callback: function(pageno) { //会回传两个参数一个当前页，显示的页数
       main.getDate(pageno+1);
      }
    });
  },
  jump(dom){
    let url = $(dom).data("url");
    $.blockUI({
      message: "<h1><a id='msg' href='##' title='提示：页面加载中，请稍后。。。'>提示：页面加载中，请稍后。。。(<span id='countdown'>900</span>)</a></h1>"
    });
    reader.voicePrompt.play("/iac/csair/mp3/ymjz");
    timedCount();
    window.location.href="getActivitiePage?url="+url;
  }
}
