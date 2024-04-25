let inputRUB = document.getElementById("rub"),
    inputUSD = document.getElementById("usd");

inputRUB.addEventListener("input", () => {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass)
    // request.open("GET", "current.json");
    request.open("GET", "https://www.cbr-xml-daily.ru/latest.js")
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            console.log(data);
            
            inputUSD.value = inputRUB.value * data["rates"]["USD"];
        } else {
            inputUSD.value = "Что-то пошла не так!";
        }
    });
});
    