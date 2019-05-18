$(function () {

    $('.egg_btns_org').click(function () {
        var page = 1;//第几页
        var num = 12;//每页12条数据
        function init() {
            $.ajax({
                type: "get",
                url: '../api/listprice.php',
                async: true,
                data: 'page=' + page + '&num=' + num + '&price=' + $('#iptUDPriceFrom').val() + '&price2=' + $('#iptUDPriceTo').val(),
                success: function (str) {
                       console.log(str);
                    create(str);
                }
            });
        }
        init();
        function create(str) {
            arr = JSON.parse(str);
            // console.log(arr)
            var res = arr.data2.map(function (item) {
                var pic = item.pic;
                var u = pic.split('&');
                return `<li class="cls" data-id="${item.id}">
                        <div class="img">
                            <a href="###"
                                title="${item.title}"
                                >
                                <img src="${u[0]}" class="beclone"
                                    alt="${item.title}">
                                <span class="icon_pro">
                                </span></a><span class="icon_pro">
                            </span>
                            <a class="ie6png sevendayoff" href="###" title="不支持7天无理由退换货" ></a>
                        </div>
                        <p class="title">
                            <a href="####"
                                title="${item.title}"
                                >${item.title}</a>
                        </p>
                        <p class="prom">输入蛋券SJ05,满1000-30元,满3000-100元,数量有限,先到先得!</p>
                        <p class="cls cmt mt5">
                            <span class="cls rank">
                                <a href="###" title="得分 5.0" class="rankB10" >[0]&nbsp;</a>
                            </span>
                        </p>
                        <p class="priceline">
                            <span class="price">¥${item.price}
                            </span>
                        </p>
                        <p class="action">
                            <a href="###" onclick="return InitAddToCart.addToCart(this,'455052','1');"
                                class="egg_btns_t1 egg_btns_org mr5">
                                购买
                            </a><a href="####" id="addtowishlist455052"
                                cid="addtowishlist455052" level="3" class="egg_btns_t1 egg_btns_white mr5"
                                >
                                收藏 </a>
                            <a href="####">
                                <label class="egg_input" for="ck_A28-800-830"><input type="checkbox"
                                        id="ck_A28-800-830">比较</label>
                            </a>
                        </p>
                    </li>`;
            }).join('');
            $('#prolist').html(res);
            $("#page").paging({
                pageNum: page, // 当前页面
                totalNum: Math.ceil(arr.total / num), // 总页码
                totalList: arr.total, // 记录总数量
                callback: function (num) { //回调函数
                    // console.log(num)
                }
            });

            $('.strong').html(arr.total + '个');
            $('.canp').html('共' + arr.total + '个产品');

        }
        $('#page').on('click', function () {
            ipage = $("#page .current").html() * 1;
            init();
        });
    })

})