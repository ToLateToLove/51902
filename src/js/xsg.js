window.onload = function () {
    // var meinv = getid('meinv');
    // var btnBuy = getid('btnBuy');
    var countDown = document.getElementById('timeleft');//显示时间的
    var endTime = '2019-5-22 16:14:30';//字符串
    var end = Date.parse(endTime);//时间对象
    function showtime() {
        //new Date().gettime() :返回执行这行代码时距1970-1-1零时的毫秒数
        var nowtime = Date.now();//时间对象
        var dix = parseInt((end - nowtime) / 1000);//得到两个时间相隔的秒数
        if (dix <= 0) {
            clearInterval(timer);
            // btnBuy.src = '../images/btn_buy.jpg';
            // meinv.src = '../images/g4.jpg';
            countDown.innerHTML = '';
        } else {
            var time = setTime(dix);
            countDown.innerHTML =
                `<label class="mr5">剩余时间：</label>
            <span class="hour">${time.hours}</span>:
            <span class="minute">${time.mins}</span>:
            <span class="second">${time.secs}</span>`;
        }
    }
    function toTwo(num) {
        if (num <= 9) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }

    var timer = setInterval(showtime, 1000);
    function setTime(time) {
        //xx天xx小时xx分xx秒 
        var sec = toTwo(time % 60);//秒
        var min = toTwo(parseInt(time / 60) % 60);
        var hour = toTwo(parseInt(time / 60 / 60) % 24);
        var day = toTwo(parseInt(time / 60 / 60 / 24));
        //console.log(days,hours,min,sec)
        return {
            secs: sec,
            mins: min,
            hours: hour,
            days: day
        }
    }


    var Container_HotSale = document.getElementById('Container_HotSale');
    var hot_sale_a = document.getElementById('hot_sale_a');
    var isok = true;

    hot_sale_a.onclick = function () {
        if (isok) {
            Container_HotSale.style.left = -950 + 'px';
        } else {
            Container_HotSale.style.left = 0;

        }
        isok = !isok;
    }
}