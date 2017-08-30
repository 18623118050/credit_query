import './public/toastr';

$(function () {

  let $getPWd       = $('#getPwd'),
      $getPwdDialog = $('#getPwdDialog');


  $('.weui-dialog__btn').on('click', function(){
    $(this).parents('.js_dialog').hide();
  });

  $getPWd.on('click', function(){
    $getPwdDialog.show();
  });

  $('#xx').on('click',function (e) {
    e.preventDefault();
    toastr["error"]('你好')
  })
})

