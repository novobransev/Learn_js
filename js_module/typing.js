// Преобразование в строку

console.log("" + 456 + null + true)  // это строка
console.log("2" + 456)  // это строка )))


// Преобразование в число

console.log(Number("123")) // это число
console.log(+"123") // это число
console.log(5 + +"123") // это число



console.log(2 && 1 && null && 0 && undefined); 
console.log(null || 2 && 3 || 4);

a = [1, 2, 3]; b = [1, 2, 3]; console.log(a == b);


console.log(0 || [])