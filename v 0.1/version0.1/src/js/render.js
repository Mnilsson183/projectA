let taxDiv = document.getElementById("tax");
let expTaxDiv = document.getElementById("expectedTax");
let dateDiv = document.getElementById("date");
let saleTaxDiv = document.getElementById("saleTax");
let expSaleTaxDiv = document.getElementById("expSaleTax");
let educationDiv = document.getElementById("education");
let houseDiv = document.getElementById("houses");
let marketDiv = document.getElementById("markets");
let moneyDiv = document.getElementById("money");
let likeDiv = document.getElementById("like");
let popDiv = document.getElementById("pop");


let population = 0;
let popMax = 0;
let like = 50;
let gravity = 3;
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
    expTaxDiv.innerText = Math.round(expTax);
    saleTaxDiv.innerText = saleTax + '%';
    expSaleTaxDiv.innerText = Math.round(expSaleTax);
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
    moneyDiv.innerText = Math.round(money);
}
function renderPopularity(){
    likeDiv.innerText = like;
}
function renderPopulation(){
    popDiv.innerText = population;
}
function render(){
    renderTax();
    renderDate();
    renderEducation();
    renderItems();
    renderMoney();
    renderPopularity();
}
function reset(){
    like = 50;
    gravity = 1;
    year = 0;
    tax = 5;
    expTax = '';
    saleTax = 5;
    expSaleTax = '';
    education = 0;
    house = 0;
    market = 0;
    money = 600;
    population = 0;
}
render();