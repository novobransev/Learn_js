
let menu = document.getElementsByClassName("menu-item"),
    parent_menu = document.getElementsByClassName("menu")[0],
    title = document.getElementById("title"),
    ads = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),

    // Получаем элементы
    one_menu = menu[0],
    two_menu = menu[2],
    three_menu = menu[1],
    four_menu = menu[3];

// удаляем элементы
one_menu.remove();
two_menu.remove();
three_menu.remove();
four_menu.remove();

// сортируем самостоятельно
parent_menu.append(one_menu);
parent_menu.append(two_menu);
parent_menu.append(three_menu);
parent_menu.append(four_menu);


// Заменяем картинку
document.body.style.background = "url('img/apple_true.jpg')";

// Заменяем текст
title.innerText = "Мы продаем только подлинную технику Apple";

// Удаляем рекламу
ads.remove();

// Вставляем текст пользователя
let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptforApple.textContent = yourOpinion;



