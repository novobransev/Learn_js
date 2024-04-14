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

    let deadline = "2024-04-13T20:08:52.570Z";

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


});