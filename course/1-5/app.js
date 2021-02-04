'use strict';

(function(){
    var myInput = document.getElementById('my-input');
    var myList = document.getElementById('my-list');
    var id = 0;

    document.getElementById('my-btn').addEventListener('click',addToDo,false);

    function addToDo() {
        var newLi = newToDo(myInput.value);
        myInput.value = '';
        myList.appendChild(newLi);
    }

    function newToDo(text) {
        // var newText = document.createTextNode(text);
        

        // var newCheck = document.createElement('input');
        // newCheck.type = 'checkbox'
        // newCheck.setAttribute('id', 'check-'+(++id));
        
        // var newLabel = document.createElement('label');
        // newLabel.appendChild(newCheck);
        // newLabel.appendChild(newText);
        // newLabel.setAttribute('for', 'check-'+id);

        var newLi = document.createElement("li");
        // newLi.appendChild(newLabel);

        newLi.innerHTML = `<input type='checkbox' /> ${text}`;

        var [newInput] = newLi.getElementsByTagName('input');
        newInput.addEventListener('click', (e) => {
            e.stopPropagation();
        }, false)

        newLi.addEventListener('click', function(event){
            debugger;

            var [input] = this.getElementsByTagName('input');
            input.checked = !input.checked;
        }, false)    
        // false 이면 버블링이 일어나서 이벤트가 두번 처리됨 
        // 따라서 newInput에 대한 이벤트 리스너를 사용 & e.stopPropagation()

        return newLi;
    }
})();