$(function () {
    let name = getCookie('usename');
    // console.log(name)
    if (name) {

        $('#userpanel').css('display', 'none');
        $('#usename1').css('display', 'block');
        $('#con').html(name + ',晚上好，欢迎来到新蛋购物！');
    } else {
        $('#usename1').css('display', 'none');
        $('#userpanel').css('display', 'block');
    }
     
    
    $('#quit').click(function () {
        removeCookie('usename');
        location.href = '../html/login.html';
        // $('#usename1').css('display', 'none');
        // $('#userpanel').css('display', 'block');
    })


    window.onscroll = function() {
        //在窗口滚动的时候触发
        // console.log(window.scrollY);
        var scrollTop = window.scrollY;
        // console.log(scrollTop)
        if(scrollTop >= 300) {
            $('.totop').css('display','block');
        }else{
            $('.totop').css('display','none');
        }
    }
    $('.totop').click(function(){
        var scrollTop = window.scrollY;
        var timer = setInterval(function() {
            scrollTop -= 20;//步长
            if(scrollTop <= 0) {//临界值
                clearInterval(timer);
                window.scrollTo(0,0);
            }else{
                window.scrollTo(0,scrollTop);
            }
        },20);
    })
})