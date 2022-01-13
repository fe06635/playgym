$(document).ready(function() {
    $('.lecInfoTab>ul>li').click(function() {
        let tab=$(this).index();

        $('.lecInfoTab>ul>li').removeClass('select_sports');
        $('.lecInfoTab>ul>li>a').removeClass('select_sports_font');
        $(this).addClass('select_sports');
        $(this).find('a').addClass('select_sports_font');

        $('.tabContainer>div').removeClass('tabOn');
        $('.tabContainer>div').eq(tab).addClass('tabOn');
    });
    let random=Math.floor(Math.random()*5);
    $('.lecInfoTab>ul>li').eq(random).trigger('click');
});