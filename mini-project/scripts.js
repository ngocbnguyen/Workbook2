"use strict";

window.onload = init;

function init() {
    const number1Field = document.querySelector("#number1Field");
    const number2Field = document.querySelector("#number2Field");
    const convertBtn = document.querySelector("#convertBtn");
    convertBtn.onclick = convertBtnClicked;
}

function convertBtnClicked() {
    let celsius = (parseFloat(number1Field.value)-32) *5/9;
    number2Field.value = celsius;
}