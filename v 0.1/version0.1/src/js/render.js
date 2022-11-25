let taxDiv = document.getElementById("tax");
let expTaxDiv = document.getElementById("expectedTax");
let dateDiv = document.getElementById("date");
let saleTaxDiv = document.getElementById("saleTax");
let expSaleTaxDiv = document.getElementById("expSaleTax");
let educationDiv = document.getElementById("education");
let houseDiv = document.getElementById("houses");
let marketDiv = document.getElementById("markets");
let moneyDiv = document.getElementById("money");


let year = 0;
let tax = 5;
let expTax = '';
let saleTax = 5;
let expSaleTax = '';
let education = 0;
let house = 0;
let market = 0;
let money = 600;

function renderTax(){
    taxDiv.innerText = tax + '%';
    expTaxDiv.innerText = expTax;
    saleTaxDiv.innerText = saleTax + '%';
    expSaleTaxDiv.innerText = expSaleTax;
}
function renderDate(){
    dateDiv.innerText =  'November' + ' 11, ' + year;
}
function renderEducation(){
    educationDiv.innerText = education;
}
function renderItems(){
    houseDiv.innerText = house;
    marketDiv.innerText = market;
}
function renderMoney(){
    moneyDiv.innerText = money;
}
function render(){
    renderTax();
    renderDate();
    renderEducation();
    renderItems();
    renderMoney();
}
render();