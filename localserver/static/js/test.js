let age = document.getElementById('age');
function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, ["Пушкин", "Александр"]);

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = param;
    }
}

const item = new Options(300, 350, "red", 14, "center");

item.createDiv();

let a = 5;
b = String(a);
console.log(typeof(b))