﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
divCheckPasswordMatch.innerHTML = localStorage.getItem("warn2");
divCheckPasswordMatch.innerHTML = localStorage.getItem("warn");

const buttonRegist = document.querySelector('#submitRegist');
const login = document.querySelector('#login');
const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');


function checkPasswordMatch() {
    var password = $("#pass1").val();
    var confirmPassword = $("#pass2").val();

    if (password != confirmPassword) {
        $("#divCheckPasswordMatch").html("Пароли не совпадают!");
        localStorage.setItem("warn", "Пароли не совпадают!");
    }
    else {
        $("#divCheckPasswordMatch").html("");
        localStorage.removeItem("warn");
    }
}

function checLogin(b) {
    if (b) {
        localStorage.setItem("warn2", "Такой логин уже существует");
    }
    else {
        localStorage.removeItem("warn2");
    }
}

$(document).ready(function () {
    $("#txtConfirmPassword").keyup(checkPasswordMatch);
});




