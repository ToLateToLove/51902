(function () {


    $('#txtPhone').on('blur', function () {
        var reg = /^1[3-9]\d{9}$/gi;
        if ($(this).val() == '') {
            $('.input_usrname1').css('display', 'block');
            $('.input_usrname1').html('手机号不能为空');
            $('.input_usrname1').css('color', 'red');
        } else if (!reg.test($(this).val())) {
            $('.input_usrname1').css('display', 'block');
            $('.input_usrname1').html('手机号格式不对，请重新输入');
            $('.input_usrname1').css('color', 'red');
        } else {
            $.ajax({
                type: 'get',
                url: '../api/reg.php',
                data: 'name=' + $('#txtPhone').val(),
                success: function (str) {
                    if (str == 'no') {
                        $('.input_usrname1').css('display', 'block');
                        $('.input_usrname1').html('该手机号已被注册');
                        $('.input_usrname1').css('color', 'red');
                    } else {
                        $('.input_usrname1').css('display', 'block');
                        $('.input_usrname1').html('该手机号可以使用');
                        $('.input_usrname1').css('color', '#58bc58');
                    }
                }
            })
        }

    })



    $.idcode.setCode();

    $("#Txtidcode").blur(function () {
        var IsBy = $.idcode.validateCode();
        if (IsBy) {
            $('.input_usrname2').css('display', 'block');
            $('.input_usrname2').html('√');
            $('.code_btn_0').click(function () {
                $('#code_btn_0').css('display', 'none');
                $('#reg_txt_1').css('display', 'blcok');
                $('#next_step_btn').css('display', 'blcok');
                $('#btnGetVaildataCode').css('display', 'blcok');

                $('.input_usrname3').html('60' + '秒');
                var now = 60;
                function showtime() {
                    now--;
                    if (now < 0) {
                        clearInterval(timer);
                        $('#code_btn_1').css('display', 'blcok');
                        $('.input_usrname3').css('display', 'blcok');
                        $('#btnGetVaildataCode').css('display', 'none');
                    }
                    $('.input_usrname3').html(now + '秒');
                }
                var timer = setInterval(showtime, 1000);
            })
            $('.code_btn_1').click(function () {
                $('#code_btn_1').css('display', 'none');
                $('.input_usrname3').css('display', 'block');
                $('.input_usrname3').html('60' + '秒');
                $('#btnGetVaildataCode').css('display', 'block');
                var now2 = 60;
                function showtime2() {
                    now2--;
                    if (now2 < 0) {
                        clearInterval(timer2);
                        $('#code_btn_1').css('display', 'blcok');
                        $('.input_usrname3').css('display', 'blcok');
                        $('#btnGetVaildataCode').css('display', 'none');
                    }
                    $('.input_usrname3').html(now2 + '秒');

                }
                var timer2 = setInterval(showtime2, 1000);
            })

        } else {
            $('.input_usrname2').css('display', 'block');
            $('.input_usrname2').html('×');

        }
    });




    $('.next_step_btn').click(function () {
        $('#step1').css('display', 'none');
        $('#step2').css('display', 'block');
    })

    $('#txtPwd').on('blur', function () {
        var reg = /^[\w]{6,20}$/gi;//密码;
        if ($(this).val() == '') {
            $('.input_usrname4').css('display', 'block');
            $('.input_usrname4').html('密码不能为空');
            $('.input_usrname4').css('color', 'red');
        } else if (!reg.test($(this).val())) {
            $('.input_usrname4').css('display', 'block');
            $('.input_usrname4').html('密码长度6-20');
            $('.input_usrname4').css('color', 'red');
        } else {
            $('.input_usrname4').css('display', 'block');
            $('.input_usrname4').html('请再次输入确认密码');
            $('.input_usrname4').css('color', '#58bc58');

        }

    })

    // 确认密码
    $('#txtConfirmPwd').blur(function () {
        if ($('#txtPwd').val() === $('#txtConfirmPwd').val()) {
            $('.input_usrname5').css('display', 'block');
            $('.input_usrname5').html('密码验证正确');
            $('.input_usrname5').css('color', '#58bc58');
            //注册
           if($('#agree1').click()){
            $('.zhuce').click(function () {
                $.ajax({
                    type: 'post',
                    url: '../api/regpost.php',
                    data: 'name=' + $('#txtPhone').val() + '&psw=' + $('#txtPwd').val(),
                    success: function (str) {
                        if (str == 'yes') {
                            alert('注册成功');
                            $('#step2').css('display', 'none');
                            $('#step3').css('display', 'block');
                        } else {
                            alert('注册失败');
                        }
                    }
                });

            })
           }else{
            $('.zhuce').css('pointer-events','none');
           }
        } else {
            $('.input_usrname5').css('display', 'block');
            $('.input_usrname5').html('密码验证错误，请重新输入密码');
            $('.input_usrname5').css('color', 'red');
        }
    })

    $('.fri_link').click(function () {
        location.href = 'login.html?' + $('#txtPhone').val();
    })
})() 
