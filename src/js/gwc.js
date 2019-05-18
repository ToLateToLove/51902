$(function(){
    
    let name = getCookie('usename');
    // console.log(name)
    $.ajax({
        type:'get',
        url:'../api/gwc.php',
        data:'name='+ name,
        success:function(str){
            // console.log(str);
            var arr= JSON.parse(str);
            // console.log(arr)
            $('#headerCartCount').html(arr.length);
        }
    })

    if(name){
        $('#tit_cart').click(function(){
            location.href = '../html/shopping.html'
        });
        $('.logintip').css('display','none');
        $('.openerC').css('display','none');
    }
 




})