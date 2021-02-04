"use strict";

(function () {
  var myToDo = document.getElementById("todo-status");
  var myInput = document.getElementById("my-input");
  var myList = document.getElementById("my-list");

  document.getElementById("my-btn").addEventListener("click", addToDo, false);

  function addToDo() {
    var newLi = newToDo(myInput.value);
    myInput.value = "";
    myList.appendChild(newLi);
    updateStatus();
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

    newLi.innerHTML = `<input type='checkbox' /> ${text} <button>삭제</button>`;

    newLi.addEventListener(
      "click",
      function (event) {
        var [input] = this.getElementsByTagName("input");
        input.checked = !input.checked;

        if (event.target !== this) {
          input.checked = !input.checked;
        }

        if (input.checked) {
          this.className = "complete";
        } else {
          this.className = "incomplete";
        }

        updateStatus();
      },
      false
    );
    // false 이면 버블링이 일어나서 이벤트가 두번 처리됨
    // 따라서 newInput에 대한 이벤트 리스너를 사용 & e.stopPropagation()

    var [delBtn] = newLi.getElementsByTagName("button");
    delBtn.addEventListener(
      "click",
      function (e) {
        e.stopPropagation();
        removeToDo(this.parentNode);
      },
      false
    );

    return newLi;
  }

  function updateStatus() {
    var total = document.querySelectorAll("#my-list li").length;
    var done = document.querySelectorAll(".complete").length;
    var notDone = total - done;

    myToDo.innerHTML = `<button id='total'>전체: ${total}</button> <button id='complete'>완료: ${done}</button> <button id='incomplete'>미완료: ${notDone}</button>`;
  }

  function removeToDo(child) {
    child.parentNode.removeChild(child);
    updateStatus();
  }

  myToDo.addEventListener(
    "click",
    (e) => {
      switch (e.target.id) {
        case "complete":
          myList.className = "hideIncomplete";
          break;
        case "incomplete":
          myList.className = "hideComplete";
          break;
        default:
          myList.className = "total";
          break;
      }
    },
    false
  );
})();
