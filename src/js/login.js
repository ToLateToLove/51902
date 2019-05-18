window.onload = function () {
    let usename = getid('usename');
    let usepwd = getid('usepwd');
    let lbtns = getid('lbtns');
    // let tipName = getid('tipName');
    // let tipPwd = getid('tipPwd');
    let str = location.search.slice(1);
    // console.log(str)
    usename.value = decodeURI(str);
    //点击登陆的时候，发送请求，把账号和密码传给后端
    function verify() {
        //判断是否在登陆的的状态，没有登陆才能登陆跳转
        if (getCookie('usename')) {
            //证明在登陆状态，不给登陆
            alert('先退出账户');
        } else {
            ajax2({
                type: 'post',
                url: '../api/login.php',
                data: 'name=' + usename.value + '&psw=' + usepwd.value,
                success: (str) => {
                    if (str == 'yes') {
                        //登陆成功，跳转到首页
                        location.href = '../index.html';
                        //把这个用户名存到cookie里面
                        setCookie('usename', usename.value, 7);
                    } else {
                        // alert('登陆失败,账号或密码错误');
                        $('.input_usrname2').css('display','block');
                        $('.input_usrname2').css('color','red');
                        $('.input_usrname2').html('登陆失败,账号或密码错误');
                    }
                }
            });
        }
    }
    lbtns.onclick = () => {
        verify();
    }
    usepwd.onkeydown = (ev) => {
        if (ev.keyCode == 13) {
            verify();
        }
    }
}






// });
