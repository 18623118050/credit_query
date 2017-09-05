import './public/index'

import {
  userName        as validate_loginName,
  pwd             as validate_pwd,
  identifyCode    as validate_identifyCode
} from './public/validate'

let app = new Vue({
  el: '#login-form',
  data: () => { // 设置成函数才可以调用$options.data()方法来清空数据
    return {
      loginName: '',
      pwd: '',
      identifyCode: ''
    }
  },
  mounted: () => { // 生命周期
    vue_mounted_valid()
  }
})

function vue_mounted_valid () {
  let form_valid,
    form = $('#login-form')

  $.validator.setDefaults({ // 只能放在validate规则配置之前

    // 提交事件
    submitHandler: () => {
      console.log('submit!')

      let $loadingToast = $('#loadingToast');


        if ($loadingToast.css('display') != 'none') return;

        $loadingToast.fadeIn(100);
        setTimeout(function () {
          $loadingToast.fadeOut(100);
          window.location.href = './creditWithout.html'

        }, 2000);


      /*     $.ajax({
       url: base + addCustomer,
       type: 'POST',
       data: app.$data,
       })
       .done(function (res) {
       console.log(res)

       if (typeof res === 'object') { // 成功

       layer.msg('添加渠道商成功', {
       icon: 6
       })

       setTimeout(() => {
       window.location = './index.html'
       }, 1000)
       }

       console.log("success");
       })
       .fail(function (res) {
       console.log(res)

       layer.msg('添加渠道商失败', {
       icon: 5
       })

       console.log("error");
       })
       .always(function (res) {

       catchError(res)
       console.log("complete")
       // 重置表单
       $.extend(app.$data, app.$options.data())
       layer.close(loading_modal)
       })*/

    }
  })

  // 验证
  form_valid = form.validate({
    rules: {
      loginName: validate_loginName,
      pwd: validate_pwd,
      identifyCode: validate_identifyCode
    }
  })

}

// 弹窗
function findPwd() {
  let $getPwd       = $('#getPwd'),
      $getPwdDialog = $('#getPwdDialog'),
      $dialogBtn    = $('.weui-dialog__btn')

  $getPwd.on('click',(e) => {
    e.preventDefault();
    $getPwdDialog.fadeIn(200)
  })

  $dialogBtn.on('click',(e) => {
    e.preventDefault();
    let $el = $(e.target)
    
    $el.parents('.js_dialog').fadeOut(200)
  })
}

// 解决移动端绝对定位的问题
function footer() {
  let h = $(window).height();

  $(window).resize(function() {

    if($(window).height() < h){
      $('.footer_bar').hide();
    }
    if($(window).height() >= h){
      $('.footer_bar').show();
    }
  });
}

findPwd();
footer();





