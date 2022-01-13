$(document).ready(function() {
    $('.product').each(function() {
        if($(this).find('.popup_container>span').is('.ApopupEvent')==true) {
            $(this).find('.discountPay').show();
            $(this).find('.discountPay').addClass('hidePay');
            $(this).find('.discountPay').removeClass('.productPay');
        }
    });    
});