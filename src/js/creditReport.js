import './public/toastr';

$('.c-tab-tit .c-tab-icon').on('click',(e) => {
  let $el  = $(e.target),
      rank = $el.index()

  $el.addClass('active').siblings().removeClass('active')

  $el.parents('.c-tab-tit').siblings('.c-tab-content').children().eq(rank).show().siblings().hide()
})
