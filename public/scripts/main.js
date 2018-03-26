"use strict";

var app = {};

app.events = function () {
    //convert to vanilla javascript
    // $(document).ready(function () {
    //     $(".hamburger").click(function () {
    //         $(this).toggleClass("is-active");
    //     });
    // });
};

app.init = function () {
    app.events();
};

$(function () {
    app.init();
});