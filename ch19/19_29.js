function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hi! My name is ${this.name}`);
}

const me = new Person('Lee');

console.log(me.hasOwnProperty('name'));

console.log(Object.getPrototypeOf(me) === Person.prototype);

console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);