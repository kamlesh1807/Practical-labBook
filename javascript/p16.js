// selector
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

// event handler
todoButton.onclick = create;
todoList.onclick = checkDelete;

// function
function create(e) {
  e.preventDefault();
  if (todoInput.value != "") {
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);

    var checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerHTML = '<i class ="fa fa-check"></i>';
    newDiv.appendChild(checkBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class ="fa fa-trash"></i>';
    newDiv.appendChild(deleteBtn);

    todoList.appendChild(newDiv);
  } else {
    alert("Do not include empty string!");
  }
  todoInput.value = "";
}

function checkDelete(e) {
  // target will give where user clicked
  var item = e.target;
  if (item.classList[0] === "delete-btn") {
    var parent = item.parentNode;
    parent.remove();
  }

  if (item.classList[0] === "check-btn") {
    var parent = item.parentNode;
    // with toggle (remove and add both work)
    parent.classList.toggle("completed");
  }
}