let btn = document.getElementsByTagName("button"),
    link = document.querySelector("a");

// btn[0].onclick = function() {
//     alert("Вы нажали на кнопку");
// }


// btn[0].addEventListener("click", function(){
//     alert("Вы нажали на кнопку");
// });

// btn[0].addEventListener("click", function(){
//     alert("Вы опять нажали на кнопку");
// });

// btn[0].addEventListener("mouseenter", function(){
//     alert("Вы навели на первую кнопку");
// });

btn[0].addEventListener("click", function(event){
    let colors = ["yellow", "black", "blue", "red"];
    var color = colors[Math.floor(Math.random()*colors.length)];
    let target = event.target;
    target.style.background = color;
    console.log(`Произошло событие: ${event.type} на элементе ${event.target}`)
});


link.addEventListener("click", function(event){
    event.preventDefault();  // отменяет обычное поведение (типо мы должны по идее переходить по ссылке но с помощью этого он не переходит)
    console.log(`Произошло событие: ${event.type} на элементе ${event.target}`)
});
