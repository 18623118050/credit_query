$(function () {

  $('#getCredit').on('click', function (e) {
    e.preventDefault();

    $(this).hide()
    $('.credit_txt .primary_font').text('处理中...')

    setTimeout(() => {

      window.location.href = './creditGet.html'
    }, 1000)
  })
})




