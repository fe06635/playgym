$(document).ready(function () {
    $('.lecListRow').each(function() {
        let pay_state=$(this).find('.lec_pay_state').html();
        if(pay_state == "마감완료") {
            $(this).find('.lec_pay_pay').addClass('lec_close');
            $(this).find('.lec_pay_pay').removeClass('lec_open');
            $(this).find('.lec_pay_state').addClass('lec_close');
        } else if(pay_state == "모집중") {
            $(this).find('.lec_pay_pay').addClass('lec_open');
            $(this).find('.lec_pay_pay').removeClass('lec_close');
            $(this).find('.lec_pay_state').removeClass('lec_close');
        }
    });
});