import './public/index';

$('.c-tab-tit .c-tab-icon').on('click',(e) => {
  let $el  = $(e.target),
      rank = $el.index()

  $el.addClass('active').siblings().removeClass('active')

  $el.parents('.c-tab-tit').siblings('.c-tab-content').children().eq(rank).show().siblings().hide()
})
function protocol() {//服务协议弹窗
  let myScroll;

  //取消body默认行为：下拉、滑动
  document.addEventListener('touchmove',  (e)=> { e.preventDefault(); });

  window.onload = function () {
    myScroll = new IScroll('.page',{
      click: true
    });
  }
}
protocol()