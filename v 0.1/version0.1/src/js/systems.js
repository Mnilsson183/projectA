function nextYear(){
    year++;
    returnMoney();
    render();
}
function buyHouse(){
    if(money >= 200){
        house++;
        money -= 200;
        renderItems();
        renderMoney();
    }
}
function buyMarket(){
    if(money >= 400){
        market++;
        money -= 400;
        renderItems();
        renderMoney();
    }
}
function buyEducation(){
    if(money >= 800){
        education++;
        money -= 800;
        renderEducation();
        renderMoney();
    }
}
function calcTax(){
    expTax = ((tax * (0.25 * education) / 100) + 1) * (house * 3);
    renderTax();
}
function calcSaleTax(){
    expSaleTax = ((saleTax * (0.25 * education)  / 100) + 1) * (market * house);
    renderTax();
}
function returnMoney(){
    calcTax();
    calcSaleTax();
    earned = expSaleTax + expTax;
    money += earned;
}