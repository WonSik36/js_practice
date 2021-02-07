const person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log('toString' in person);

console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));

for(const key in person) {
    console.log(key+" : "+person[key]);
}