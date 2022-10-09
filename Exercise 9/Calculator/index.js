"use strict";

window.onload = function () {
    const number1Field = document.querySelector("#number1Field");
    const number2Field = document.querySelector("#number2Field");
    const answerField = document.querySelector("#answerField");
    const addBtn = document.querySelector("#addBtn");
    addBtn.onclick = addBtnClicked;
    const subtractBtn = document.querySelector("#subtractBtn");
    subtractBtn.onlick = subtractBtnClicked;
    const multiplyBtn = document.querySelector("#multiplyBtn");
    multiplyBtn.onclick = multiplyBtnClicked;
    const divideBtn = document.querySelector("#divideBtn");
    divideBtn.onclick = divideBtnClicked;
}

function addBtnClicked() {
    let addition = parseFloat(number1Field.value) + parseFloat(number2Field.value);
    answerField.value = addition;
}

function subtractBtnClicked() {
    let subtraction = parseFloat(number1Field.value) - parseFloat(number2Field.value);
    answerField.value = subtraction;
}

function multiplyBtnClicked() {
    let multiplication = parseFloat(number1Field.value) * parseFloat(number2Field.value);
    answerField.value = multiplication;
}

function divideBtnClicked() {
    let division = parseFloat(number1Field.value) / parseFloat(number2Field.value);
    answerField.value = division;
}