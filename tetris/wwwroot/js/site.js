﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function checkPasswordMatch() {
    var password = $("#pass1").val();
    var confirmPassword = $("#pass2").val();

    if (password != confirmPassword)
        $("#divCheckPasswordMatch").html("Пароли не совпадают!");
    else
        $("#divCheckPasswordMatch").html("");
}

$(document).ready(function () {
    $("#txtConfirmPassword").keyup(checkPasswordMatch);
});
