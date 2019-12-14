let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    expensesBtn = document.getElementsByTagName('button')[0],
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    countBtn = document.querySelector('.count-budget-btn'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    incomeItem = document.querySelector('.choose-income'),
    incomeValue = document.querySelector('.income-value'),
    checkSavings = document.querySelector('.checksavings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    allButons = document.querySelectorAll('button');

let money, time;


for( let i = 0; i < allButons.length-1; i++) {
    allButons[i].disabled = true;
    allButons[i].style.opacity = '0.5';
}

startBtn.addEventListener('click', function(){
    time = prompt('Введите дату в формате', '');
    money = +prompt("Ваш бюджет на месяц?", '');
    
    while(isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет?", "");
    }

    for( let i = 0; i < allButons.length-1; i++) { // проходим циклом по всем элементам массивоподобного объекта
        allButons[i].disabled = false;
        allButons[i].style.opacity = '1';
    }

    appData.budget = money;
    appData.timedata = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ( (typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a !='' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;

});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {

        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }

    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }

    if(expensesValue.textContent != null) {
        appData.moneyPerDay = (appData.budget - expensesValue.textContent) / 30;
        dayBudgetValue.textContent = appData.moneyPerDay;
    }

});


incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click',function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};