function sum() {
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function(pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum());
console.log(sum(1,2));
console.log(sum(1,2,3));