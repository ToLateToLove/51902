$(function () {
    var name = getCookie('usename');
    // console.log(name)
    if (name) {

        $('#con').html(name + ',晚上好，欢迎来到新蛋购物！');
        $('#usename1').css('display', 'block');
        $('#loginLink').css('display', 'none');
        $('#spWelcome').css('display', 'none');
        $('#quit').click(function () {
            removeCookie('usename');
            location.href = '../html/login.html';
            $('#usename1').css('display', 'none');
            $('#userpanel').css('display', 'block');
        })
    } else {
        $('#usename1').css('display', 'none');
        $('#loginLink').css('display', 'block');
        $('#spWelcome').css('display', 'block');
    }

})