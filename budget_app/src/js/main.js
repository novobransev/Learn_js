 // Получить кнопку "Начать расчет" через id
 let startCalc = document.getElementById('start');


 //  Получить все блоки в правой части программы через классы
 // (которые имеют класс название-value, начиная с <div class="budget-value"></div>
 // и заканчивая <div class="yearsavings-value"></div>)
 let budgetValue = document.body.getElementsByClassName('budget-value')[0];
 let daybudgetValue = document.body.getElementsByClassName('daybudget-value')[0];
 let levelValue = document.body.getElementsByClassName('level-value')[0];
 let expensesValue = document.body.getElementsByClassName('expenses-value')[0];
 let optionalexpensesValue = document.body.getElementsByClassName('optionalexpenses-value')[0];
 let incomeValue = document.body.getElementsByClassName('income-value')[0];
 let monthsavingsValue = document.body.getElementsByClassName('monthsavings-value')[0];
 let yearsavingsValue = document.body.getElementsByClassName('yearsavings-value')[0];
 
 
 // Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
 let expenses = document.body.getElementsByClassName('expenses-item');
 
 // Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
 let allBtns = document.body.getElementsByTagName('button');
 let applyBtn0 = allBtns[0];
 let applyBtn1 = allBtns[1];
 let calcBtn0 = allBtns[2];
 // let calcBtn1 = allBtns[3];
 
 // console.log(allBtns);
 
 
 //  Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
 let optExpenses = document.querySelectorAll('.optionalexpenses-item');
 // console.log(optExpenses);
 
 
 // Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
 let income = document.body.querySelector('.choose-income');
 let haveSavings = document.querySelector('#savings');
 let sum = document.body.querySelector('#sum');
 let percent = document.body.querySelector('#percent');
 let yearValue = document.body.querySelector('.year-value');
 let monthValue = document.body.querySelector('.month-value');
 let dayValue = document.body.querySelector('.day-value');


let money, time;

applyBtn0.disabled = true;
applyBtn1.disabled = true;
calcBtn0.disabled = true;


startCalc.addEventListener("click", function (){
    money = +prompt("Ваш бюджет на месяц? ");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц? ");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    applyBtn0.disabled = false;
    applyBtn1.disabled = false;
    calcBtn0.disabled = false;
});


applyBtn0.addEventListener("click", function(){
    let sum = 0;

    for (let i = 0; i < expenses.length; i++){
        let a = expenses[i].value,
            b = expenses[++i].value;
    
        if (typeof(a) === 'string' && typeof(a) != null  && typeof(b) != null && a != '' && b != '' && a.length < 50) {
            console.log("done")
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i -= 1;
        }
    };
    expensesValue.textContent = sum;
});

applyBtn1.addEventListener("click", function(){
    for (let i = 0; i <= optExpenses.length; i++) {
        let opt = optExpenses[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " " 
    }
});

calcBtn0.addEventListener("click", function(){
    if (appData.budget != undefined){
        
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка!";
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = "Высокий уровень достатка!";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка";
    }
});

income.addEventListener("input", function(){  // событие где можно что то писать и оно будет писаться в другом месте
    let items = income.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

haveSavings.addEventListener("click", function(){
    if (appData.savings){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});


sum.addEventListener("input", function(){
    if (appData.savings) {
        let sum_val = +sum.value,
            percent_val = +percent.value;

        appData.mounthIncome = sum_val / 100 / 12 * percent_val;
        appData.yearIncome = sum_val / 100 * percent_val;

        monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
        yearsavingsValue.textContent =  appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener("input", function(){
    if (appData.savings) {
        let sum_val = +sum.value,
            percent_val = +percent.value;

        appData.mounthIncome = sum_val / 100 / 12 * percent_val;
        appData.yearIncome = sum_val / 100 * percent_val;

        monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
        yearsavingsValue.textContent =  appData.yearIncome.toFixed(1);
    }
});



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};


