/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./todolist.js":
/*!*********************!*\
  !*** ./todolist.js ***!
  \*********************/
/***/ (() => {

eval("function namelist() {\r\n  var Name = prompt(\"Please, enter a name of your list:\", \"\");\r\n  document.querySelector(\"#name\").innerHTML = Name;\r\n  if (Name == null || Name.replace(/\\s/g, \"\") == \"\") {\r\n    Name = \"Your world\";\r\n    document.querySelector(\"#name\").innerHTML = Name;\r\n  }\r\n}\r\n\r\nwindow.onload = namelist;\r\nvar taskInput = document.getElementById(\"new-task\"); // Add a new task.\r\nvar addButton = document.getElementsByTagName(\"button\")[0]; // first button\r\nvar incompleteTaskHolder = document.getElementById(\"incomplete-tasks\"); // ul of #incomplete-tasks\r\nvar completedTasksHolder = document.getElementById(\"completed-tasks\"); // completed-tasks\r\n\r\nfunction myF2() {\r\n  var element = document.body;\r\n  element.classList.toggle(\"purple-mode\");\r\n}\r\nfunction myF3() {\r\n  var element = document.body;\r\n  element.classList.toggle(\"pink-mode\");\r\n}\r\nfunction myF4() {\r\n  var element = document.body;\r\n  element.classList.toggle(\"blue-mode\");\r\n}\r\nfunction myF5() {\r\n  var element = document.body;\r\n  element.classList.toggle(\"red-mode\");\r\n}\r\nfunction myF6() {\r\n  var element = document.body;\r\n  element.classList.toggle(\"green-mode\");\r\n}\r\nfunction myF7() {\r\n  var element = document.body;\r\n  element.classList.toggle(\"yellow-mode\");\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./todolist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./todolist.js"]();
/******/ 	
/******/ })()
;