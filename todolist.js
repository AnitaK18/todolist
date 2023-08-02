function namelist() {
  var Name = prompt("Please, enter a name of your list:", "");
  document.querySelector("#name").innerHTML = Name;
  if (Name == null || Name.replace(/\s/g, "") == "") {
    Name = "Your world";
    document.querySelector("#name").innerHTML = Name;
  }
}

window.onload = namelist;
var taskInput = document.getElementById("new-task"); // Add a new task.
var addButton = document.getElementsByTagName("button")[0]; // first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); // ul of #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); // completed-tasks

function myF2() {
  var element = document.body;
  element.classList.remove(
    "pink-mode",
    "blue-mode",
    "red-mode",
    "green-mode",
    "yellow-mode"
  );
  element.classList.toggle("purple-mode");
}
function myF3() {
  var element = document.body;
  element.classList.toggle("pink-mode");
  element.classList.remove(
    "purple-mode",
    "blue-mode",
    "red-mode",
    "green-mode",
    "yellow-mode"
  );
}
function myF4() {
  var element = document.body;
  element.classList.remove(
    "purple-mode",
    "pink-mode",
    "red-mode",
    "green-mode",
    "yellow-mode"
  );
  element.classList.toggle("blue-mode");
}

function myF5() {
  var element = document.body;
  element.classList.remove(
    "purple-mode",
    "pink-mode",
    "blue-mode",
    "green-mode",
    "yellow-mode"
  );
  element.classList.toggle("red-mode");
}

function myF6() {
  var element = document.body;
  element.classList.remove(
    "purple-mode",
    "pink-mode",
    "blue-mode",
    "red-mode",
    "yellow-mode"
  );
  element.classList.toggle("green-mode");
}

function myF7() {
  var element = document.body;
  element.classList.remove(
    "purple-mode",
    "pink-mode",
    "blue-mode",
    "red-mode",
    "green-mode"
  );
  element.classList.toggle("yellow-mode");
}
