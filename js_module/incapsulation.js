function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя ${this.name}, возраст ${this.age}`)
    }

    this.getAge = function() {
        return userAge;
    }

    this.setAge = function(age) {
        if (typeof(age) === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}

let ivan = new User("Ivan", 34);

console.log(ivan.name);
console.log(ivan.getAge());

ivan.setAge(30);

console.log(ivan.name);
console.log(ivan.getAge());

