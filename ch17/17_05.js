function foo() {
    console.log(this);
}

foo();  // window or global

const obj = { foo };
obj.foo();

const inst = new foo();