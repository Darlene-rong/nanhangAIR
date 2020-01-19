//机票促销
window.main = {
  init(){
    this.getDate(1)
  },
  getDate(pageNum) {
    window.loading.show()
    $.ajaxSetup({
      cache: false
    });

    $.ajax({
      type: "get",
      url:"getTicketSales",
      data: {
        pageNum:pageNum,
      },
      success(res){
        main.pageInit(res,pageNum);
      },
      complete: function(data) {
        window.loading.hide()
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
        res.ticketSaleList.forEach(function(val) {

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
    
    window.loading.show()
    
    window.location.href="getActivitiePage?url="+url;
  }
}

window.main.init();