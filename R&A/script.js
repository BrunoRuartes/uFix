jQuery('document').ready(function($) {

    var menuBtn = $('.menu-icon');
    var menu = $('.lista');
    var microfix = $('.logach');

    menuBtn.click(function() {

        if (menu.hasClass('show')) {
            menu.removeClass('show');
            microfix.show();
        } else {
            menu.addClass('show');
            microfix.hide();
        }

    });
});