let taxDiv = document.getElementById("tax");
let expTaxDiv = document.getElementById("expectedTax");
let dateDiv = document.getElementById("date");
let saleTaxDiv = document.getElementById("saleTax");
let expSaleTaxDiv = document.getElementById("expSaleTax");
let educationDiv = document.getElementById("education");
let houseDiv = document.getElementById("houses");
let marketDiv = document.getElementById("markets");
let moneyDiv = document.getElementById("money");

function renderTax(){
    taxDiv.innerText = '0';
    expTaxDiv.innerText = '0';
    saleTaxDiv.innerText = '0';
    expSaleTaxDiv.innerText = '0';
}
function renderDate(){
    dateDiv.innerText = '0';
}
function renderEducation(){
    educationDiv.innerText = '0';
}
function renderItems(){
    houseDiv.innerText = '0';
    marketDiv.innerText = '0';
}
function renderMoney(){
    moneyDiv.innerText = '0';
}
function render(){
    renderTax();
    renderDate();
    renderEducation();
    renderItems();
    renderMoney();
}