$(function () {

    var ipage = 1;//第几页
    var num = 12;//每页12条数据
    var id = '';
    var type = '';
    var order = '';
    function init() {
        $.ajax({
            type: "get",
            url: "../api/list.php",
            async: true,
            data: 'page=' + ipage + '&num=' + num + '&id=' + id + '&type=' + type + '&order=' + order,
            success: function (str) {
                //    console.log(str);
                create(str);
            }
        });
    }
    init();
    function create(str) {
        arr = JSON.parse(str);
        // console.log(arr)

        var res = arr.data.map(function (item) {
            var pic = item.pic;
            var u = pic.split('&');
            // u[0];
            // console.log(u[0]);
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
            pageNum: ipage, // 当前页面
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
    var isok = true;
    $('.innert').on('click', '.byup', function () {
        // console.log(123)
        type = 'price';//根据价格进行排序
        if (isok) {
            //第一次点击：升序
            order = 'ASC';//升序
        } else {
            order = 'DESC';//降序
        }
        isok = !isok;
        init(1);//排序后默认的跳转到第一页
    })



    // 点击跳转到详情页并且把id传过去
    $('#prolist').on('click', '.img', function () {
        var id = $(this).parent().attr('data-id');
        // console.log(id)
        window.open('goods.html?' + id);

    })

    var isok = true;
    $('.wrap-left-top').on('click', '.list', function () {

        if (isok) {
            $(this).children().css('display', 'block');
        } else {
            $('.lis').css('display', 'none');
        }
        isok = !isok;
    })




})