$(document).ready(function() {
    var index=1;
    var left_sw=false;
    var right_sw=false;
    first_position(index);
    $('.productSlider').append($('.sliderImage').first().clone());
    $('.productSlider').prepend($('.sliderImage').eq(-2).clone());
    $('.swipe_right').click(function() {
        if(right_sw) {
            return false;
        } else {
            right_sw=true;
            if(index<3) {
                index++;
                move_image(index);
            } else {
                $('.productSlider').css('left',0);
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
        } else {
            left_sw=true;
            if(index>1) {
                index--;
                move_image(index);
            } else {
                $('.productSlider').css('left',-2280);
                index=3;
                move_image(index);
            }
            setTimeout(function() {
                left_sw=false;
            },650);
        }
    });
    function move_image () {
        $('.productSlider').animate({
            left:-(index*570)
        },'slow');
    }
    function first_position () {
        $('.productSlider').css('left',-570);
    }
    
    //찜하기 기능
    var checksw=false;
    $('.check').click(function() {
        checkProduct();
    });
    function checkProduct() {
        if(checksw) {
            $('.check>img').attr('src','./image/callicon3.png');
            $('.check').css('backgroundColor','white');
            checksw=false;
        } else {
            checksw=true;
            $('.check>img').attr('src','./image/callicon2.png');
            $('.check').css('backgroundColor','aquamarine');
        }
    }
    //예약버튼 클릭
    $('.reservation').click(function() {
        if($('.selectDate').html()=="") {
            alert('날짜를 선택해주세요');
        }
    });
    //예약버튼 호버
    $('.reservation').hover(function() {
        $(this).css({
            backgroundColor:'#fff',
            transition:'0.5s'
        });
        $('.reservation>a').css({
            color:'#FF7F00',
            transition:'0.5s'
        });
    },function() {
        $(this).css({
            backgroundColor:'#FF7F00',
            transition:'0.5s'
        });
        $('.reservation>a').css({
            color:'#fff',
            transition:'0.5s'
        });
    });
    //할인 가격 js
    if($('.productInfo>.popup').is('.ApopupEvent')==true) {
        discountProduct();
    }
    function discountProduct() {
        $('.discountPay').show();
        $('.mainPay').removeClass('.productPay');
        $('.mainPay').addClass('hidePay');
    }
    //달력 버튼
    $('#datepicker').datepicker({
        dateFormat:'yy년 mm월 dd일',
        onSelect: function(dateText,inst) {
            $('.selectDate').html("");
            var date=$(this).val();
            $('.selectDate').html(date);
        }
    });
    //하단 슬라이드
    var other_index=0;
    $('.other_left').click(function() {
        other_index--;
        otherSlider(other_index);
    });
    $('.other_right').click(function() {
        other_index++;
        otherSlider(other_index);
    });
    function otherSlider() {
        if(other_index==0) {
            $('.other_left').fadeOut(200);
        }
        if(other_index>=4) {
            $('.other_right').fadeOut(200);
        }
        if(other_index>=0 && other_index<4) {
            $('.other_right').fadeIn(200);
        }
        if(other_index<=4 && other_index>0) {
            $('.other_left').fadeIn(200);
        }

        $('.otherSlide').stop().animate({
            left:-(other_index*230)
        },'slow');
    }

    
});

