persone = {
    name: "John",
    surname: "Smith",
    age: 20,
    bio: "bla bla bla"
};

delete persone.bio;

for (let key in persone) {
    console.log(`Свойство ${key} имеет значение ${persone[key]}`);
}

let arr = ["first", "second", "three", "four", "five"]

for (let key in arr){  // in показывает их индексы
    console.log(key)  
}

for (let value of arr){  // of показывает как раз таки значения
    console.log(value)
}

let arra = [1, 15, 4], i = arra.sort();  // Короче говоря sort он именно сортирует по 1 элементу типо не найдет разницы в 1 и в 15 так как начинаются с 1

console.log(i);
