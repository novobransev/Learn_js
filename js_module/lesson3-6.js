// ТЕМА ООП (Как на python) но это по старому

function User(name, id){

    // this это как self в python
    this.name = name;
    this.id = id;
    this.human = true;

    this.hello = function (){
        return "Hello " + this.name;
    };
};

User.prototype.exit = function(name) {  // насколько я понял так можно добавить в класс User функцию exit
    return `Пользователь ${this.name} ушел`;
}

let ivan = new User("Ivan", 25),
    alex = new User("Alex", 20);

console.log(ivan);
console.log(alex);
console.log(ivan.hello())
console.log(alex.exit())