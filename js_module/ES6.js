// Интерполяция - это как f-строки в python

let name = "Ivan",
    age = 30,
    mail = "example@mail.ru";

console.log(`Пользователю ${name} ${age} лет. Его почтовый индекс ${mail}`);


// let лучше использовать чем var, так как var может сделать код неправильным

function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        let item = function() {
            console.log(i);
        };
        items.push(item);
    };

    return items;
};

let arr = makeArray();

arr[1]();
arr[3]();
arr[7]();


// Стрелочные функции - анонимные функции (без имени)

let fun = () => {
    console.log("Hello");
};

fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log("say");
        };
        say();
    }
};

obj.sayNumber();


// Параметры по умолчанию 

function calcOrDouble(number, basis=2) {
    console.log(number*basis);
};

calcOrDouble(19);


// Классы

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
};

const square = new Rectangle(10, 20);

console.log(square.calcArea());


// Spread-операторы - разворачивание массива

let video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "vk", "facebook"];  // типо ... это и есть разворачивание массива он похож на *array в python

console.log(internet);
