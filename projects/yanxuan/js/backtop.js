$(function () {
    //1.定义当滚动一定距离的y值
    var y = 400;
    //2.监听窗口滚动
    $(window).on('scroll',function () {
        //2.1获取当前滚动的top方向的偏移量
        var scroll_top = $(window).scrollTop();
        //判断
        if (scroll_top > y){
            //显示返回顶部
            $('.backtop').css({'display':'block'});
        }else {
            $('.backtop').css({'display':'none'});
        }
    })
    //3.监听点击返回顶部
    $('.backtop').click(function () {
        $('html body').animate({scrollTop:0});
    })


})
