'use strict';

(function(){
    var myInput = document.getElementById('my-input');

    document.getElementById('my-btn').addEventListener(
        'click',
        () => {
            alert(myInput.value);
        },
        false
    );

})();