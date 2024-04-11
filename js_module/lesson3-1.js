// let timeId = setTimeout(say, 3000);  // функция запуститься через 3 секунды после загрузки страницы и выполниться один раз
// clearTimeout(timeId); // Функция которая остановит setTimeout и setInterval
// function say(){
//     alert("Асаламалейкум");
// }

// setInterval(say, 3000);  // функция запуститься через 3 секунды после загрузки страницы и выполниться постаянно 
// // clearTimeout(timeId); // Функция которая остановит setTimeout и setInterval
// function say(){
//     alert("Асаламалейкум");
// }

let child = document.getElementsByClassName("child")[0];
setInterval(myAnimation, 1);
pos = 0;
help_pos = 0;
function myAnimation() {
    if (pos == 444){
        help_pos = pos;
    } else if (pos == 0){
        help_pos = pos;
    }

    if (help_pos == 444) {
        child.style.top = pos + "px";
        child.style.left = pos + "px";
        pos--;
    } else {
        child.style.top = pos + "px";
        child.style.left = pos + "px";
        pos++;
    }
}