import './public/toastr';

$(function () {

  function countDown() {//页面倒计时定时器
    let m = 0,  //分钟数
        s = 59, //秒数
        $countDown = $('#countDown'),
        timer


    timer = setInterval(() => {
      s -= 1;

      if (s == 0) {
        s = 59;
        m -= 1;
      }

      if (m < 0) {
        clearInterval(timer)
        timer = '';

        $countDown.html(0 + '分' + 0 + '秒')
        layer.msg('问卷提交超时，即将返回首页...', {
          icon: 5
        })
        setTimeout(() => {
          window.location.href = './index.html'
        },2000)
      }else {
        $countDown.html(m + '分' + s + '秒')
      }

    }, 1000)
  }

  countDown()
})