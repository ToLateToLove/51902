$(function () {
    var sun = decodeURI(location.search);
    var id = sun.slice(1);
    // console.log(id);
    $.ajax({
        type: 'get',
        url: '../api/goods.php',
        data: 'id=' + id,
        success: function (str) {
            // console.log(str)
            var arr = JSON.parse(str);
            // console.log(arr);
            var res = arr.map(function (item) {
                var pic = item.pic;
                var u = pic.split('&');
                // console.log(u)
                return `<div class="wrap-left" >
                            <div id="MagnifierWrap2">
                                <div class="MagnifierMain">
                                    <img class="MagTargetImg" src="${u[0]}" data-src="${u[0]}">
                                </div>
                                <span class="spe_leftBtn"></span>
                                <span class="spe_rightBtn"></span>
                                <div class="spec-items">
                                    <ul>
                                        <li class="on"><img src="${u[0]}" data-lsrc="${u[0]}"
                                                data-maxSrc="${u[0]}">
                                        </li>
                                        <li><img src="${u[1]}" data-lsrc="${u[1]}"
                                                data-maxSrc="${u[1]}">
                                        </li>
                                        <li><img src="${u[2]}" data-lsrc="${u[2]}"
                                                data-maxSrc="${u[2]}">
                                        </li>
                                        <li><img src="${u[3]}" data-lsrc="${u[3]}"
                                                data-maxSrc="${u[3]}">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="goods_intro">
                            <div class="goods_title" id="productTitle">
                                <h1>${item.title}</h1>
                                <p>输入蛋券SJ05,满1000-30元,满3000-100元,数量有限,先到先得!</p>
                            </div>
                            <div class="goods_info">
                                <ul>
                                    <li>
                                        <div class="goods_info_name">品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：
                                        </div>
                                        <div class="godds_info_data">
                                            <a href="###" title="HUAWEI 华为" target="_blank">
                                                HUAWEI 华为
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="goods_info_name">产品型号：</div>
                                        <div class="godds_info_data">畅玩8C 4GB+64GB 极光蓝</div>
                                    </li>
                                    <li class="goods_price_now">
                                        <div class="goods_info_name" id="pricecontent" v="新蛋价">新&nbsp;&nbsp;蛋&nbsp;&nbsp;价：
                                        </div>
                                        <div class="godds_info_data">
                                            <span class="priceValue"><em>¥&nbsp;</em><strong class="fs30">${item.price}</strong></span>

                                        </div>
                                    </li>
                                    <li class="goods_info_choose goods_info_support">
                                        <div class="goods_info_name">商品支持：</div>
                                        <div class="godds_info_data">
                                            <p></p>
                                            <a href="javascript:void(0)" class="goods_info_promise_logo promise_seven_day_off"
                                                title="不支持7天无理由退换货">不支持无理由退</a>
                                        </div>
                                    </li>
                                    <li class="goods_info_choose productProperty">
                                        <div class="goods_info_name lh29">
                                            颜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色：</div>
                                        <div class="godds_info_data cl000 ">
                                            <a ref="noBlank" class="common_choose pr10  common_choose_cur"
                                                href="javascript:void(0);" title="极光蓝" target="_self">
                                                极光蓝<s class=""></s></a>
                                            <a ref="noBlank" class="common_choose pr10 " href="###" title="铂光金" target="_self">
                                                铂光金</a>
                                            <a ref="noBlank" class="common_choose pr10 " href="###" title="幻夜黑" target="_self">
                                                幻夜黑</a>
                                        </div>
                                    </li>
                                    <li class="goods_info_choose productProperty">
                                        <div class="goods_info_name lh29">
                                            版&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本：</div>
                                        <div class="godds_info_data cl000 ">
                                            <a ref="noBlank" class="common_choose pr10  common_choose_cur"
                                                href="javascript:void(0);" title="全网通4G+64G" target="_self">
                                                全网通4G+64G<s class=""></s></a>
                                        </div>
                                    </li>
                                    <li class="goods_info_cnts" id="buyQty">
                                        <div class="goods_info_name">数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：
                                        </div>
                                        <div class="godds_info_data posr">
                                            <a class="plus_minus minus" href="javascript:void(0);" ref1="1">-</a>
                                            <input class="num" type="text" value="1" maxlength="3" autocomplete="off">
                                            <a class="plus_minus plus" href="javascript:void(0);" ref1="1">+</a>
                                            <span class="godds_cnts_tips">每日限购：1</span>
                                            <span style="color:green">&nbsp;&nbsp;&nbsp;&nbsp;库存：有货</span>
                                            <!-- <span class="wholePrice">购买数量已满足条件，立享批发价<b></b>元/件</span> -->
                                        </div>
                                    </li>
                                    <li class="goods_info_answer" id="productTips" style="">
                                        <div class="goods_info_name"></div>
                                        <div class="godds_info_data">已选择 “<strong>极光蓝、全网通4G+64G</strong><strong></strong>”
                                        </div>
                                    </li>
                                </ul>
                                <div class="goods_buy_btns " id="operations" data-id="${item.id}">
                                    <div class="kon"></div>
                                    <a id="quickBuy" class="pro_common_add_btn pro_common_org  btn_mrg" title="立即购买"
                                        href="###">立即购买</a>
                                    <a id="addToCart" class="pro_common_add_btn pro_common_addShoppingCart ie6png" title="加入购物车"
                                        href="###">加入购物车</a>
                                    <!-- <div class="tk1 ts quickBuyTips popv13" id="ts" style="display: none;">
                                        <a class="shuter" href="j###" title="关闭"></a>
                                        <h5>重要提示</h5>
                                        <p>您有赠品未选择，是否去购物车选择</p>
                                        <p class="alc"><a class="common_blue_btn go2Shoppingcart"
                                                href="javascript:void(0);">去购物车</a><a class="giveup"
                                                href="javascript:void(0);">放弃赠品</a></p>
                                    </div> -->
                                    <div class="goods_buy_otherbtns">
                                        <a class="gray_btn" ref="noBlank" level="3" id="addToWishList" cid="addToWishList"
                                            onclick="return AddToWishList(this,457774);" href="###" title="加入收藏夹">加入收藏夹</a>
                                        <img src="../img/like.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="goods_otherinfo" style="height: 507px;">
                                <p class="goods_notice">
                                    <a href="###" title="降价通知">
                                    </a>
                                </p>
                                <div class="goods_comment goods_otherinfo_frame goods_comment2">
                                    <div class="goods_comment_score">
                                        <strong>0.0</strong>
                                    </div>
                                    <a href="javascript:void(0);" class="showReview" title="得分 0.0">
                                        <p class="score_egg score_egg_0"></p>
                                    </a>
                                    <br><br>
                                    <a href="javascript:void(0);" id="showReviewLink" class="showReview">暂无评论</a>
                                </div>
                                <div class="goods_code">
                                    <img src="../img/qrcode_app.png" alt="">
                                    <p>转到手机上看</p>
                                </div>
                            </div>
                        </div>`
            }).join('');
            $('.wrap').html(res);
        }
    })


    $('.wraper ').on('click','#addToCart',function(){
        let name = getCookie('usename');
        console.log(name);
        $.ajax({
            type:'get',
            url:'../api/goodscar.php',
            data:'id=' + id + '&name=' +name,
            success:function(str){
                // console.log(str)
            }
        })
    })
    


})