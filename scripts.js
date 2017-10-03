$(document).ready(function () {
    $('.menu-icon').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('menu-active');
    });
});