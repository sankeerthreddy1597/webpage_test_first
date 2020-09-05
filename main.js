/*jslint browser: true*/
/*global $*/

var navbar = $(".navbar");
var window = $(window);

$(window).scroll(function () {
    'use strict';
    var oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});