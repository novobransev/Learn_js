window.addEventListener('DOMContentLoaded', function() {
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
        hideDisplay(0); // при каждом клике будут все скрываться табы, а потом смотря куда мы кликнули, тот абзац будет показываться
        for (let i = 0; i < infoHeaderTab.length; i++){
            if (event.target == infoHeaderTab[i]){
                infoTabContent[i].classList.remove("hide");
                infoTabContent[i].classList.add("show");
            }
        }
    })
    
})