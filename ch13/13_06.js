function foo() {
    console.log('global function foo');
}

function bar() {
    foo();
    
    function foo() {
        console.log('local function foo');
    }

    // var foo = function foo() {
    //     console.log('local function foo');
    // }
    // 
    // TypeError: foo is not a function

    foo();
}

bar();