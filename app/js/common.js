$(function() {
    $('.flexslider').flexslider({
        animation: "slide"
    });
	// menu
    var combinedMenu = $('#menu2');
    combinedMenu.slicknav({
        label: '',
        duration: 300,
        prependTo:'.adaptive_menu',
        closeOnClick: true,
        closedSymbol: 123,
        openedSymbol: 456
        // parentTag : 'a',
    });
    //BLUR
    $('.slicknav_btn').click(function () {
        $('#blur').toggleClass('blur','addOrRemove')

    });
    $('.slicknav_item').click(function () {
        $(this).css('color','white')
    });

    
});
