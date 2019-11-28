var startCulc = document.querySelector('#start'),
    giveMeAClass = document.querySelector('.budget-value'),
    dayBudget = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value');
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button'),
    expensesItemBtn1 = document.getElementsByTagName('button'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncomeLabel = document.querySelector('.choose-income-label');
    savings1 = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),

console.log(startCulc);
console.log(giveMeAClass);
console.log(dayBudget);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalExpensesValue);
console.log(incomeValue);
console.log(monthSavingsValue);
console.log(yearSavingsValue);
console.log(yearValue);
console.log(monthValue);
console.log(dayValue);

for (i = 0; i < expensesItem.length; i++) {
    console.log(expensesItem[i]);
}

for (i = 0; i < expensesItemBtn.length-1; i++) {
    console.log(expensesItemBtn[i]);
}

var btn1 = expensesItemBtn1[0],
    btn2 = expensesItemBtn1[2];
console.log(btn1);
console.log(btn2);

for (i = 0; i < optionalExpensesItem.length; i++) {
    console.log(optionalExpensesItem[i]);
}

console.log(savings1);
console.log(chooseSum);

