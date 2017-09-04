import './public/toastr';

$(function () {

  $('#getCredit').on('click', (e) => {
    e.preventDefault();

    $(this).hide()
    $('.credit_img img').attr('src','../img/credit_process.png')
    $('.credit_txt .primary_font').text('处理中...')

    setTimeout(() => {

      window.location.href = './creditReport.html'
    }, 1000)
  })
})




