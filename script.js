$(function() {

    $('.m-button').on('click', function() {

        $('.header__menu').slideToggle();

        $('.flying-element-top.element-1').slideToggle();

        $('.m-button').toggleClass('open');

    });

});