$(function() {
    $('.flexslider').flexslider({
        animation: "slide"
    });
	// menu
    var combinedMenu = $('#menu2');
    combinedMenu.slicknav({
        label: '',
        duration: 100,
        prependTo:'.adaptive_menu',
        closeOnClick: true,
        parentTag : 'a',

    });
    //BLUR
    $('.slicknav_btn').click(function () {
        $('#blur').toggleClass('blur','addOrRemove')

    });
    $('.slicknav_item, .slicknav_open').click(function () {
        $(this).toggleClass('open_menu','addOrRemove');
        $('.arrow_l',this).toggleClass('arr_l', 'addOrRemove');
    });
    $('.sprache_down').click(function () {
        $('.slicknav_menu .SPR').toggleClass('on','addOrRemove');

    })
    $('.footer_list').click(function () {
        $('.footer_drop',this).toggleClass('footer_drop_on','addOrRemove');
        $('.fa-caret-down',this).toggleClass('fa-caret-up ','addOrRemove');
    })

});
