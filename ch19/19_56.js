function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hi! My name is ${this.name}`);
}

Person.staticProp = 'static prop';

Person.staticMethod = function() {
    console.log('staic method');
}

const me = new Person('Lee');

Person.staticMethod();
console.log(Person.staticProp);

me.staticMethod();      // TypeError
console.log(me.staticProp); // undefined