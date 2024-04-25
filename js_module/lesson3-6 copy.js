// ТЕМА ООП (Как на python) но это по новому

class User {
    constructor (name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    };

    hello() {
        return "Hello " + this.name;
    };

    exit () {
        return `Пользователь ${this.name} ушел`;
    };
};

let ivan = new User("Ivan", 25),
    alex = new User("Alex", 20);

console.log(ivan);
console.log(alex);
console.log(ivan.hello())
console.log(alex.exit())