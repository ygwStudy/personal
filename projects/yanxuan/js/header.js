/**
 * Created by Administrator on 2017/2/26.
 */
$(function () {
    /*navTab*/
    $(window).scroll(function () {
        var x = $(this).scrollTop();
        var navTopDis = $('.navTab').offset().top;

        if (x >= 179) {
            $('.navTabIn').addClass('fix').removeClass('down');
            $('.navBoxIn').addClass('navBoxInfix').removeClass('navBoxIndown');
             $('.navTab .tabLogo').show();
             $('.navTab .zhuanTi,.navTab .zhenXuanJia ').hide();

             $('.nav .navTab li').css({
                 'width':'68px'
             });
             $('.navTab .logoShow').show();

        } else {
            $('.navTabIn').removeClass('fix').addClass('down');
            $('.navBoxIn').removeClass('navBoxInfix').addClass('navBoxIndown');
            $('.navTab .tabLogo').hide();
            $('.navTab .zhuanTi,.navTab .zhenXuanJia ').show();
            $('.nav .navTab li').css({
                'width':'88px'
            });
            $('.navTab .logoShow').hide();


        }
    });

    /*hover时出现二级导航*/
    $('.navTab li').hover(function () {
        var index = $(this).index();
        $('.navBox ul').eq(index).removeClass('dn').siblings('ul').addClass('dn');
       $(this).addClass('cur');
    }, function () {
        $('.navBox ul').addClass('dn');
        $(this).removeClass('cur');
    });

    $('.navBox ul').hover(function () {
        $(this).removeClass('dn');
    }, function () {
        $(this).addClass('dn');
    });
    /*service*/
     $('.headRight .service').hover(function () {
          $('.headRight .dropMenu').show();
          $('.headRight .arr').addClass('cur');
     },function () {
         $('.headRight .dropMenu').hide();
         $('.headRight .arr').removeClass('cur');

     });


});