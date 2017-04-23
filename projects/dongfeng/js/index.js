/**
 * Created by Macrolam
 */
$(function () {
    var timer = null;
    var timerp2 = null;
    var index = 0;
    var oGps = $('.GPS li');

    function changePage(index) {
        oGps.eq(index).addClass('cur').siblings().removeClass('cur');
        $('section').eq(index).show().siblings('section').hide();
        setTimeout(function () {
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },300);
    }
    //点击切换GPS
    oGps.click(function () {
        index = $(this).index();
        changePage(index);
    });
    //滚轮切换
    $(window).mousewheel(function (e, dir) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            index -= dir;
            if (index > oGps.length - 1 || index < 0) {
                index = 0;
            }
            changePage(index);
            //page4 里的列表依次掉落
            if(index==3){
                  $('.page4 .p4In ul li').each(function (index, ele) {
                 $(ele).hide().delay(index * 1000).slideDown(index*800);
                 });
            }
        }, 100);
    });

    /*************************page2*******************************************/

    clearTimeout(timer);
    $('.page2>img:nth-child(2)').hide();
    timer = setTimeout(function () {
        $('.page2>img:nth-child(2)').show().addClass('animated slideInLeft');

    }, 1500);

// clearTimeout(timer);这里利用定时器累加，不要清除了
    $('.page2 .p2pic3').hide();
    timer = setTimeout(function () {
        $('.page2 .p2pic3').show().addClass('animated5s bounceInDown');

    }, 2500);
//mesBox延时出现，单独开个定时器；防止冲突
    var timerp2 = null;
    clearTimeout(timerp2);
    timerp2 = setTimeout(function () {
        $('.page2 .mesBox').get(0).style.display = 'block';
    }, 3200);
    $('.page2 .mesBox').get(0).style.display = 'none';


    /*************************page2end*******************************************/
    /*************************page3*******************************************/
    $('.descBox ').hide();
    $('.p3main li').on("click", ".descBtn", function (e) {
        $('.descBox ').show();//1--先让父级大盒子显示，关闭按钮时隐藏了。
        var indexDesc = $(this).parents('li').index();//2--让对应的descBoxIn显示。
        $('.descBox .descBoxIn').eq(indexDesc).show().siblings('.descBox .descBoxIn').hide();

    });
    //closeAll
    $('.closeAll').click(function () {
        $('.descBox ').hide();
    });
    /*************************page3end*******************************************/
    /*************************page4*******************************************/
    /*************************1.每个列表依次掉落*******/

    /*************************2.ban处理*******/
    $('.page4 .nextBtn').click(function () {
        $('.page4 .p4In ul').get(0).style.left = '-100%';
        $(this).hide();
        $('.page4 .preBtn').show();
    });
    $('.page4 .preBtn').click(function () {
        $('.page4 .p4In ul').get(0).style.left = '0%';
        $(this).hide();
        $('.page4 .nextBtn').show();
    });
    /*************************page4end*******************************************/
    /*************************page5*******************************************/
    $('.page5 .point').hover(function () {
        $(this).siblings('.tip').slideToggle(600);

    });
    $('.page5 .glow').each(function (index, ele) {
        $(ele).addClass('animated5s bounceInDown')
    });
    $('.page5 .descBox').hide();
    $('.page5 .glow').click(function () {
        var glowIndex = $(this).index() - 1;
        console.log(glowIndex);
        $('.page5 .descBox').eq(glowIndex).show().siblings('.page5 .descBox').hide();
    });
    /*mask*/
    $('.page5 .small24L').click(function () {
        $('.page5 .p5motor').hide();
        $('.page5 .engine').show().hide().fadeIn(600);
        $('.txt24L').show().hide().fadeIn(800);
        $('.txt8L').hide();
    });
    $('.page5 .big8').click(function () {
        $('.page5 .engine').hide();
        $('.page5 .p5motor').show().hide().fadeIn(600);
        $('.txt8L').show().hide().fadeIn(800);
        $('.txt24L').hide();
    });
    /*************************page5end*******************************************/
    /*************************page6*******************************************/
    $('.page6 .descPage  .lookDescBtn').click(function () {
        $('.page6 .descBox').show().hide().fadeIn();
    });
    //p6轮播---事件委托给父级p6ban
    $('.page6 .p6ban ul li:not(:first)').hide();
    $('.page6 .p6ban').on('click', '.closeAll', function () {
        $('.page6 .descBox').hide().show().fadeOut(800);
    });
    var p6banIndex = $('.page6 .p6ban ul li').index();
    $('.page6 .p6ban ').on('click', '.nextBtn', function () {
        p6banIndex++;
        if (p6banIndex > $('.page6 .p6ban ul li').length - 1) {
            p6banIndex = 0;
        }
        $('.page6 .p6ban ul li').eq(p6banIndex).show().hide().fadeIn().siblings().hide();
    });
    $('.page6 .p6ban ').on('click', '.preBtn', function () {
        p6banIndex--;
        if (p6banIndex < 0) {
            p6banIndex = $('.page6 .p6ban ul li').length - 1;
        }
        $('.page6 .p6ban ul li').eq(p6banIndex).show().hide().fadeIn().siblings().hide();
    });
    /*************************page6end*******************************************/
    /*************************page7*******************************************/
    var p7index=0;
$('.page7 ol li').mouseenter(function () {
    p7index=$(this).index();
    $(this).addClass('p7cur').siblings().removeClass('p7cur');
    $('.page7 ul li').eq(p7index).addClass('p7active').siblings().removeClass('p7active');
})

    /*************************page7end*******************************************/

});//end;
