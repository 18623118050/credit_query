import './public/index'

import {
  realName        as validate_realName,
  idCard          as validate_idCard,
  identifyCode    as validate_identifyCode
} from './public/validate'


let app = new Vue({
  el: '#sign-form',
  data: () => { // 设置成函数才可以调用$options.data()方法来清空数据
    return {
      realName    : '',
      idCard      : '',
      identifyCode: ''
    }
  },
  mounted: () => { // 生命周期
    vue_mounted_valid()
  }
})

function vue_mounted_valid () {
  let form_valid,
    form = $('#sign-form')

  $.validator.setDefaults({ // 只能放在validate规则配置之前

    // 提交事件
    submitHandler: () => {
      console.log('submit!')
      window.location.href = './personData.html'
      /*      let loading_modal = layer.msg('提交中...', {
       icon: 16,
       time: 0
       })*/

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
      realName    : validate_realName,
      idCard      : validate_idCard,
      identifyCode: validate_identifyCode
    }
  })

}