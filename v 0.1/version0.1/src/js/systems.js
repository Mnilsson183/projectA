function nextYear(){
    year++;
    calcPopMax();
    calcPopIncrease();
    returnMoney();
    checkLike();
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
function buyLike(){
    if(money >= 200){
        like += 25;
        money -= 200;
        checkLikeOverflow();
        renderPopularity();
        renderMoney();
    }
}
function taxChange(i){
    tax += i;
    renderTax();
}
function taxSaleChange(i){
    saleTax += i;
    renderTax();
}
function calcTax(){
    expTax = ((tax / 100) + 1 + (0.25 * education)) * (population);
    renderTax();
}
function calcSaleTax(){
    expSaleTax = ((saleTax / 100) + 1 + (0.25 * education)) * (market * population);
    renderTax();
}
function calcPopMax(){
    popMax = house * 4;
}
function calcPopIncrease(){
    population = population + gravity
    if(population > popMax){
        population = popMax;
    }
    renderPopulation();
}
function returnMoney(){
    calcTax();
    calcSaleTax();
    earned = expSaleTax + expTax;
    money += earned;
}
function checkLike(){
    if(like <= 0){
        document.body.innerText = "You are disliked big L";
        reset();
    }
}
function checkLikeOverflow(){
    if(like > 100){
        like = 100;
        money += 200;
    }
}