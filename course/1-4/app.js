'use strict';

(function(){
    var myInput = document.getElementById('my-input');
    var myList = document.getElementById('my-list');

    document.getElementById('my-btn').addEventListener(
        'click',
        () => {
            var newText = document.createTextNode(myInput.value);
            var newLi = document.createElement("li");

            newLi.appendChild(newText);

            myList.appendChild(newLi);
            myInput.value = '';
        },
        false
    );

})();