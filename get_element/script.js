let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll('.heart'),
    wrapper = document.querySelector(".wrapper");

// console.log(box)
// console.log(btn)
// console.log(circle)
// console.log(heart)

box.style.backgroundColor = 'blue';  // Делает квадрат синим
btn[1].style.borderRadius = "100%";

circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "#00ff00";


// for (let i = 0; i < heart.lenght; i++){
//     heart[i].style.backgroundColor = 'blue';
// }
// heart.forEach(function(value, key, arr){
//     value.style.backgroundColor = "blue";
// })

let div = document.createElement("div"),
    text = document.createTextNode("Негры негры негры");

div.classList.add("black");

// document.body.appendChild(div);  Добавляет div в body
// wrapper.appendChild(div);  Добавляет в конец wrapper
document.body.insertBefore(div, circle[0]);

div.innerHTML = "Привет мир!"

console.log(div);