'use strict';

window.addEventListener('load', function(){
    var myContentsEl = document.getElementById('myContents');
    console.log(myContentsEl.getElementsByTagName('a'));

    var myBtn = document.getElementById('my-btn');
    myBtn.addEventListener('click', function() {
        alert('You clicked button');
    }, false);
});