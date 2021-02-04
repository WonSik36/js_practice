const person = {
    name: 'Lee'
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));