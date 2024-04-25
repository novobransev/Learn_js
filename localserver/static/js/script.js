window.addEventListener('DOMContentLoaded', function() {

    // Анимации при клике на ТАБЫ

    let infoHeaderTab = document.querySelectorAll(".info-header-tab"),
        infoHeader = document.querySelector(".info-header"),
        infoTabContent = document.querySelectorAll(".info-tabcontent");


    function hideDisplay(num){
        for (let i = num; i < infoTabContent.length; i++){
            infoTabContent[i].classList.add("hide");
            infoTabContent[i].classList.remove("show");
        }
    };

    hideDisplay(1);  // Для начала нам нужна эта функция так как когда загружается страница хотя бы один таб нужно оставить

    infoHeader.addEventListener('click', function(event){
        for (let i = 0; i < infoHeaderTab.length; i++){
            if (event.target == infoHeaderTab[i]){
                hideDisplay(0);
                infoTabContent[i].classList.remove("hide");
                infoTabContent[i].classList.add("show");
            }
        }
    });

    // ТАЙМЕР

    let deadline = "2024-04-22T20:08:52.570Z";

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60));

        
        return {
            "total": t,
            "seconds": seconds,
            "minutes": minutes,
            "hours": hours
        };
    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endtime);
            
            if (+t.hours < 10) {
                hours.textContent = "0" + t.hours;
            } else {
                hours.textContent = t.hours;
            }

            if (+t.minutes < 10) {
                minutes.textContent = "0" + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }

            if (+t.seconds < 10) {
                seconds.textContent = "0" + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }
            
            
            

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        };
    };

    setClock("timer", deadline);

    // МОДАЛЬНОЕ ОКНО

    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        descriptionBtn = document.querySelectorAll(".description-btn"),
        info = document.querySelector(".info");

    more.addEventListener("click", function (){
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden"; 
    });
    
    close.addEventListener("click", function (){
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = ""; 
    });

    info.addEventListener("click", function (event){
        for (let i = 0; i < descriptionBtn.length; i++){
            if (event.target == descriptionBtn[i]){
                overlay.style.display = "block";
                this.classList.add("more-splash");
                document.body.style.overflow = "hidden"; 
            }
        }
    });


    // Form

    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.open("POST", "");

        let formData = new FormData(form);
        let obj = {};
        
        formData.forEach((value, key) => {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }
    });


    // СЛАЙДЕР 

    let slideIndex = 1,
        slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    showSlides(slideIndex);
    
    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");

        dots.forEach((item) => item.classList.remove("dot-active"));

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active");
    };

    function plusSlides(n) {
        showSlides(slideIndex += n);
    };
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    };

    prev.addEventListener("click", () => {
        plusSlides(-1);
    });

    next.addEventListener("click", () => {
        plusSlides(1);
    });

    dotsWrap.addEventListener("click", (event) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });


    // Калькулятор

    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener("change", function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == "" || persons.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener("change", function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == "" || restDays.value == "" ) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener("change", function() {
        if (restDays.value == "" || persons.value == "") {
            totalValue.innerHTML = 0;
        } else {
            let a = total;

            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    })

});