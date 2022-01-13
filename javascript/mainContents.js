$(document).ready(function() {
    //인기 시설 슬라이드 메서드
    var count=$('.product').children().length;//현재 카운트 8개 자식도 8개 인기 시설 슬라이드 기능
    var index=2;//Math.round(Math.random()*count);
    var left_sw=false;
    var right_sw=false;
    first_position_product();
    $('.product').append($('.article').first().clone());
    $('.product').prepend($('.article').eq(-2).clone());
    $('.product').prepend($('.article').eq(-3).clone());
    $('.product').append($('.article').eq(3).clone());
    $('.swipe_right').click(function() {
        if(right_sw) {
            return false;
        } else {
            right_sw=true;
            if(index<count) {
                index++;
                move_image(index);
            }else {
                $('.product').css('left',0);
                index=1;
                move_image(index);
            }
            setTimeout(function() {
                right_sw=false;
            },650);
        }
        
    });
    $('.swipe_left').click(function() {
        if(left_sw) {
            return false;
        }else {
            left_sw=true;
            if(index>1) {
                index--;
                move_image(index);
            }else {
                $('.product').css('left',-3546);
                index=count;
                move_image(index);
            }
            setTimeout(function() {
                left_sw=false;
            },650);
        }
    });
    function move_image() {
        $('.product').animate({
            left:-(index*394)
        },'slow');
    }
    function first_position_product () {
       $('.product').css('left',-788);
    }

    //강사소개 슬라이드 메서드
    var lesson_count=$('.slide_lesson').children().length;
    var lesson_index=1;
    var lesson_left_sw=false;
    var lesson_right_sw=false;
    //move_lesson_image(lesson_index);
    first_position_lesson(lesson_index);
    $('.slide_lesson').append($('.article_lesson').first().clone());//김덕배
    $('.slide_lesson').prepend($('.article_lesson').eq(-2).clone());
    $('.slide_lesson').prepend($('.article_lesson').eq(-3).clone());
    $('.slide_lesson').append($('.article_lesson').eq(3).clone());
    $('.lesson_swipe_right').click(function() {
        if(lesson_right_sw) {
            return false;
        } else {
            lesson_right_sw=true;
            if(lesson_index<lesson_count) {
                lesson_index++;
                move_lesson_image(lesson_index);
            } else {
                $('.slide_lesson').css('left',0);
                lesson_index=1;
                move_lesson_image(lesson_index);
            }
            setTimeout(function() {
                lesson_right_sw=false;
            },650);
        }
    });
    $('.lesson_swipe_left').click(function() {
        if(lesson_left_sw) {
            return false;
        } else {
            lesson_left_sw=true;
            if(lesson_index>0) {
                lesson_index--;
                move_lesson_image(lesson_index);
            } else {
                $('.slide_lesson').css('left',-1644);
                lesson_index=lesson_count;
                move_lesson_image(lesson_index);
            }
            setTimeout(function() {
                lesson_left_sw=false;
            },650);
        }
    });
    function move_lesson_image() {
        $('.slide_lesson').animate({
            left:-(lesson_index*274)
        },'slow');
    }
    function first_position_lesson () {
        $('.slide_lesson').css('left',-274);
    }

    //랜덤광고 메서드
    var otherProduct_image=["./image/beer-advertising-g77693d267_1920.jpg",
    "./image/drink-g837231228_1920.jpg","./image/facebook-793048_1920.jpg",
    "./image/neon-ga5cd3b504_1920.jpg","./image/nevada-gfd8113210_1920.jpg"];
    var other_sw=true;
    while(other_sw) {
        var other_index=Math.floor(Math.random()*otherProduct_image.length);
        var other_index2=Math.floor(Math.random()*otherProduct_image.length);
        if(other_index!=other_index2) {
            other_sw=false; 
        }
    }
    $('.otherProduct_img').eq(0).attr('src',otherProduct_image[other_index]);
    $('.otherProduct_img').eq(1).attr('src',otherProduct_image[other_index2]);

    //배너 이동버튼 호버기능
    $('.content_bannerInner button').hover(function() {
        $(this).css({
            color:'#2DB400',
            backgroundColor:'#fff',
            transition:'0.3s'
        });
        $('.content_bannerInner button>p>span').css({
            border:'1px solid #2DB400',
            backgroundColor:'#2DB400',
            color:'#fff',
            transition:'0.3s'
        });
    },function() {
        $(this).css({
            color:'#fff',
            backgroundColor:'#2DB400',
            transition:'0.3s'
        });
        $('.content_bannerInner button>p>span').css({
            border:'1px solid #fff',
            backgroundColor:'#fff',
            color:'coral',
            transition:'0.3s'
        });
    });
});