$(function () {
    
    
    $('.abtn_aleft').click( function () {
        $('#prolist').css("left", "0");

    });
    $('.abtn_aright').click (function () {
        $('#prolist').css("left", "-753px")
    });
    
    $(".hot_comment_goods_cnt li").each(function(){
        var fold = $(this).find(".fold");
        var unfold = $(this).find(".unfold");
        if(fold.is(":hidden")){
            $(this).width(675);
        }else{
            $(this).width(174);
        }
    })
    $(".hot_comment_goods_cnt li").mouseenter(function(){
        var li_index = $(this).index();
        $(this).stop().animate({width:675},800);
        $(this).find(".unfold").show();
        $(this).find(".fold").hide();
        $(this).siblings().stop().animate({width:174},800);
        $(this).siblings().find(".unfold").hide();
        $(this).siblings().find(".fold").show();
    })

})