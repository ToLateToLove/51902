$(function () {

    let name = getCookie('usename');
    if (name) {
        $.ajax({
            type: 'get',
            url: '../api/shopping.php',
            data: 'name=' + name,
            success: function (str) {
                var arr = JSON.parse(str);
                var res = arr.map(function (item) {
                    var pic = item.pic;
                    var u = pic.split('&');
                    return `<ul class="order_lists cartcont" id="${item.id}">
                                <li class="list_chk">
                                    <input type="checkbox" id="checkbox_2" class="son_check">
                                    <label for="checkbox_2"></label>
                                </li>
                                <li class="list_con">
                                    <div class="list_img"><a href="###"
                                            title="${item.title}"><img
                                                src="${u[0]}"
                                                alt="${item.title}"
                                                style="width:80px"></a>
                                    </div>
                                    <div class="list_text"><a href="###"
                                            title="${item.title}&nbsp;[&nbsp;颜色：极光蓝&nbsp;|&nbsp;版本：全网通4G+64G&nbsp;]"
                                            class="funcLink">${item.title}&nbsp;[&nbsp;颜色：极光蓝&nbsp;|&nbsp;版本：全网通4G+64G&nbsp;]</a></div>
                                </li>
                                <li class="list_price">
                                    <p class="price">￥${item.price}</p>
                                </li>
                                <li class="list_amount">
                                    <div class="amount_box">
                                        <input type="text" value="1" class="sum">
                                        <div class="jiajian">
                                            <a href="javascript:;" class="reduce reSty">-</a>
                                            <a href="javascript:;" class="plus">+</a>
                                        </div>
                                    </div>
                                    <span class="limitcount">限购1</span>
                                </li>
                                <li class="list_sum">
                                    <p class="sum_price">￥${item.price}</p>
                                </li>
                                <li class="list_op">
                                    <div class="caozuo">
                                        <p class="del"><a href="###" class="delBtn">删除</a></p>
                                        <p class="shoucang"><a href="###" class="delBtn1">移入收藏夹</a></p>
                                    </div>
                                </li>
                            </ul>`
                }).join('');
                $('.order_content').html(res);
            }
        })
    }

    $('.order_content').on('click','.delBtn',function() {
		var res = confirm('您确认要删除吗？');
		if(res) {
            $(this).parent().parent().parent().parent().remove();
            var id = $(this).parent().parent().parent().parent().attr('id');
            // console.log(id)
            $.ajax({
                type:'get',
                url:'../api/del.php',
                data:'id=' +id,
                success:function(str){

                }
            })
        }
        all();//刷新总数量和总价格
	});
    $('#all').click(function() {
        // console.log(25)
		var istrue = $('#all').prop('checked');
		$('.son_check').prop('checked',istrue);
		all();//刷新总数量和总价格
    });
    	//点击复选框反过来控制全选按钮
	$('.order_content').on('click','.son_check',function() {
		var len = $('.list_chk input:checked').size();
        var total = $('.son_check').size();
        // console.log(total,len)
		if(len == total) {
            //全都勾选了
            // console.log(245)
            $('.whole_check').prop('checked',true);
           
		}else{
            $('.whole_check').prop('checked',false);
        }
        all();
        //刷新总数量和总价格
    });
    




    
    //计算总数量和总价格
	var arr = [];
	function all() {
		arr = [];//存被勾选的复选框的下标
		$('.son_check').each(function(i,item) {
			if($(item).prop('checked')) {
				//被勾选了，把下标存起来
				arr.push(i);
			}
		});
		
		//总数量
		var num = 0;
		//总价格
		var price = 0;
		
		arr.forEach(function(item) {
			num += $('.sum').eq(item).val() * 1;
			price += $('.price').eq(item).text().slice(1) * 1;
		});
		
		// console.log(num,price.toFixed(2));
		//渲染到节点
		$('.total_text').html('￥' + price.toFixed(2));
		$('.total_text').css('color','#f60');
	}

})