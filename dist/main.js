/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-app/./src/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager */ \"./src/taskManager.js\");\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ \"./src/taskManager.js\");\n\r\n\r\nconst projects = (() => {\r\n\r\n    const projectsList = [];\r\n    \r\n    function addProject(name) {\r\n        if (projectsList.some(name)) return alert(\"Esse projeto já existe!\")\r\n        const newProject = { name, tasks: [] };\r\n        projectsList.push(newProject);\r\n    }\r\n\r\n    function editProject(oldName, newName) {\r\n        const project = projectsList.find(project => project.name === oldName);\r\n        if (project) {\r\n          project.name = newName;\r\n          return project;\r\n      }\r\n    }\r\n\r\n    function deleteProject(name) {\r\n        const index = projectsList.findIndex(project => project.name  === name);\r\n        if (index !== -1) {\r\n          projectsList.splice(index, 1);\r\n          return true \r\n        } else {\r\n          return false\r\n        }\r\n    }\r\n\r\n    return {\r\n        projectsList,\r\n        addProject,\r\n        editProject,\r\n        deleteProject\r\n    }\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://todo-app/./src/projectManager.js?");

/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n\r\n\r\nconst tasks = (() => {\r\n    class Task {\r\n        constructor(title, details, schedule) {\r\n            this.title = title;\r\n            this.details = details;\r\n            this.schedule = schedule;\r\n            this.done = false;\r\n            this.important = false;\r\n            this.project = ''\r\n            this.id = this.getID();\r\n    };\r\n    getID() {\r\n        return '_' + Math.random().toString(36).substr(2, 9);\r\n    }\r\n    }\r\n\r\n    const taskList = [];\r\n\r\n    function createTask (\r\n        title,\r\n        details,\r\n        schedule\r\n    ) {\r\n        const newTask = new Task(title, details, schedule);\r\n        taskList.push(newTask)\r\n        return newTask;  \r\n    };\r\n\r\n    function editTask(taskId, updatedData) {\r\n        const taskIndex = taskList.findIndex(task => task.id === taskId);\r\n        if (taskIndex !== -1) {\r\n            Object.assign(taskList[taskIndex], updatedData);\r\n            return taskList[taskIndex]; \r\n        } else return null; \r\n\r\n    }\r\n    \r\n    function deleteTask(taskId) {\r\n        const taskIndex = taskList.findIndex(task => task.id === taskId);\r\n        if (taskIndex !== -1) {\r\n           taskList.splice(taskIndex, 1);\r\n      } else return null;\r\n    }\r\n\r\n    function completeTask(taskId) {\r\n        const taskIndex = taskList.findIndex(task => task.id === taskId);\r\n        if (taskIndex !== -1) {\r\n          taskList[taskIndex].done = true;\r\n        }\r\n    }\r\n\r\n    function assignProjectToTask(projectName, taskId) {\r\n        const project = _projectManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList.find(project => project.name === projectName);\r\n        const task = taskList.find(task => task.id === taskId);\r\n        \r\n        if (project && task) {\r\n            task.project = project;\r\n            project.tasks.push(task);\r\n            return true; // Retorna verdadeiro se a atribuição for bem-sucedida\r\n        }\r\n    }\r\n\r\n      return{\r\n        taskList,\r\n        createTask,\r\n        editTask,\r\n        deleteTask,\r\n        completeTask,\r\n        assignProjectToTask\r\n      }\r\n\r\n}) ();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://todo-app/./src/taskManager.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;