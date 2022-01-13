$(document).ready(function() {
    /*var smartPhones=['iphone','ipod','windows ce','android','blackberry',
    'nokia','webos','opera mini','sonyericsson','opera mobi','iembile'];
    for(var i in smartPhones) {
        //스마트폰 확인
        if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
            document.location='playgym.dothome.co.kr/mobile.html';
        }
    } 모바일페이지 */
    //네비게이션바 드롭다운
    $('.mainMenu>li').hover(function() {
        $(this).addClass('mainMenuColor');
        $(this).find('ul').stop().slideDown('normal');
        //$('ul').stop().slideDown('normal');   //풀드롭다운 js
        //$(".nav_bg").stop().slideDown('normal');
    }, function() {
        $(this).removeClass('mainMenuColor');
        $(this).find('ul').stop().slideUp('normal');
        //$('.mainMenu>li>ul').stop().slideUp('normal'); //풀드롭다운 js
        //$(".nav_bg").stop().slideUp('normal');
    });
    //더알아보기 버튼 호버
    $('.btnVisual').hover(function() {
        $(this).css({
            backgroundColor:'coral',
            border: '1px solid coral',
            transition:'0.3s'
        });
        $(this).find('a').css({
            color:'#fff',
            transition:'0.3s'
        });
    },function() {
        $(this).css({
            backgroundColor:'#fff',
            border: '1px solid white',
            transition:'0.3s'
        });
        $(this).find('a').css({
            color:'black',
            transition:'0.3s'
        });
    });

    var width=$('.visualImage>img').width();
    var index=0;
    var count=$('.visualSlide').children().length;
    var sw_interval;
    //move_visual(index);
    first_position(index);
    $('.visualSlide').append($('.visualImage').first().clone());
    $('.visualSlide').prepend($('.visualImage').eq(-2).clone());
    autoSlide();

    $('.visualCanvas').hover(function() {
        clearInterval(sw_interval);
    },function() {  
        autoSlide();
    });

    function autoSlide() {
        sw_interval=setInterval(function() {
            if(index<count) {
                index++;
                move_visual(index);
            } else {
                $('.visualSlide').css('left',0);
                index=0;
                if(index==0) {
                    index=1;
                }
                move_visual(index);
            }
        },4000);
    }
    function move_visual() {
        $('.visualSlide').animate({
            left:-(index*width)
        },'normal');
    }
    function first_position () {
        $('.visualSlide').css('left',0);
    }
});