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

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-app/./src/styles.scss?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\n/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager.js */ \"./src/taskManager.js\");\n\r\n\r\n\r\nconst UI = (() => {\r\n\r\n    const body = document.querySelector('body');\r\n        \r\n\r\n    \r\n    const projectListContainer = document.getElementById('projectList');\r\n    const taskListContainer = document.getElementById('taskList');\r\n\r\n    function displayProjects() {\r\n        // Limpa o conteúdo atual da lista de projetos\r\n        projectListContainer.innerHTML = '';\r\n\r\n        // Itera sobre os projetos e cria elementos HTML para exibir na lista de projetos\r\n        _projectManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList.forEach(project => {\r\n            const projectItem = document.createElement('div');\r\n            projectItem.textContent = project.name;\r\n            // Adiciona um evento de clique para exibir as tarefas do projeto ao ser clicado\r\n            projectItem.addEventListener('click', () => displayTasks(project));\r\n            projectListContainer.appendChild(projectItem);\r\n        });\r\n    }\r\n\r\n    function displayTasks(project) {\r\n        // Limpa o conteúdo atual da lista de tarefas\r\n        taskListContainer.innerHTML = '';\r\n\r\n        // Itera sobre as tarefas do projeto e cria elementos HTML para exibir na lista de tarefas\r\n        project.tasks.forEach(task => {\r\n            const taskItem = document.createElement('div');\r\n            taskItem.textContent = task.title;\r\n            taskListContainer.appendChild(taskItem);\r\n        });\r\n    }\r\n\r\n    // Exibe os projetos quando a página é carregada\r\n    window.addEventListener('load', () => {\r\n        displayProjects();\r\n    });\r\n\r\n    // Atualiza a interface do usuário quando os dados são modificados\r\n    _projectManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(displayProjects);\r\n\r\n    return {\r\n        displayProjects,\r\n        displayTasks\r\n    };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://todo-app/./src/UI.js?");

/***/ }),

/***/ "./src/dataManager.js":
/*!****************************!*\
  !*** ./src/dataManager.js ***!
  \****************************/
/***/ (() => {

eval("// import tasks from \"./taskManager\";\r\n// import projects from \"./projectManager\";\r\n\r\n// const data = (() => {\r\n//     function saveData() {\r\n//         localStorage.setItem('projects', JSON.stringify(projects.projectsList));\r\n//         localStorage.setItem('tasks', JSON.stringify(tasks.taskList));\r\n//     }\r\n\r\n//     function loadData() {\r\n//         const savedProjects = localStorage.getItem('projects');\r\n//         const savedTasks = localStorage.getItem('tasks');\r\n\r\n//         if (savedProjects && savedTasks) {\r\n//             projects.projectsList = JSON.parse(savedProjects);\r\n//             tasks.taskList = JSON.parse(savedTasks);\r\n//         }\r\n//     }\r\n\r\n//     window.addEventListener('load', () => {\r\n//         loadData();\r\n//     });\r\n\r\n//     window.addEventListener('beforeunload', () => {\r\n//         saveData();\r\n//     });\r\n\r\n//     return {\r\n//         saveData,\r\n//         loadData\r\n//     };\r\n// })();\r\n\r\n// const dataValidation = (() => {\r\n//     const projectForm = document.getElementById('projectForm');\r\n//     const taskForm = document.getElementById('taskForm');\r\n\r\n//     projectForm.addEventListener('submit', event => {\r\n//         event.preventDefault();\r\n//         const projectName = projectForm.querySelector('#projectName').value.trim();\r\n\r\n//         if (validateProjectName(projectName)) {\r\n//             projects.addProject(projectName);\r\n//             projectForm.reset();\r\n//         } else {\r\n//             alert('Please enter a valid project name.');\r\n//         }\r\n//     });\r\n\r\n//     taskForm.addEventListener('submit', event => {\r\n//         event.preventDefault();\r\n//         const taskTitle = taskForm.querySelector('#taskTitle').value.trim();\r\n//         const taskDetails = taskForm.querySelector('#taskDetails').value.trim();\r\n//         const taskSchedule = taskForm.querySelector('#taskSchedule').value;\r\n\r\n//         if (validateTaskData(taskTitle, taskSchedule)) {\r\n//             tasks.createTask(taskTitle, taskDetails, taskSchedule);\r\n//             taskForm.reset();\r\n//         } else {\r\n//             alert('Please enter valid task data.');\r\n//         }\r\n//     });\r\n\r\n//     function validateProjectName(name) {\r\n//         // Aqui você pode adicionar regras de validação para o nome do projeto\r\n//         return name !== '';\r\n//     }\r\n\r\n//     function validateTaskData(title, schedule) {\r\n//         // Aqui você pode adicionar regras de validação para o título e a programação da tarefa\r\n//         return title !== '' && schedule !== '';\r\n//     }\r\n\r\n//     return {\r\n//         validateProjectName,\r\n//         validateTaskData\r\n//     };\r\n// })();\r\n\r\n\r\n// export {data, dataValidation} \n\n//# sourceURL=webpack://todo-app/./src/dataManager.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showTasks = document.querySelector(\"#tasks\");\r\nconst addProjectBt = document.querySelector(\"#projects\")\r\n\r\nclass Elements {\r\n\r\n    static ShowTaskSection(title, list) {\r\n        showTasks.innerHTML = '';\r\n        const sectionList = document.createElement('section');\r\n        showTasks.appendChild(sectionList);\r\n\r\n        const pageName = document.createElement('h2');\r\n        pageName.innerText = title;\r\n        sectionList.appendChild(pageName);\r\n\r\n        list.forEach(task => {\r\n            const taskDiv = document.createElement('div');\r\n            taskDiv.classList.add('taskDiv');\r\n            sectionList.appendChild(taskDiv);\r\n\r\n            // colocar \"done\" mark\r\n\r\n            const taskTitle = document.createElement('h6');\r\n            taskTitle.innerText = task.title;\r\n            taskDiv.appendChild(taskTitle);\r\n\r\n            const taskData = document.createElement('p');\r\n            taskData.innerText = task.schedule;\r\n            taskDiv.appendChild(taskData);\r\n\r\n            const editBt = document.createElement('button');\r\n            editBt.setAttribute('value', 'Editar');\r\n            editBt.classList.add('editBt');\r\n            taskDiv.appendChild(editBt);\r\n\r\n            const deletetask = document.createElement('div');\r\n            deletetask.innerHTML = `<i class=\"fi fi-tr-x\"></i>`;\r\n            deletetask.setAttribute('id',`${task.id}`);\r\n            taskDiv.appendChild(deletetask);\r\n            \r\n        });\r\n\r\n        return sectionList\r\n    }\r\n\r\n\tstatic NewTaskDiv(){\r\n        showTasks.innerHTML = '';\r\n        const formSection = document.createElement(\"section\");\r\n        showTasks.appendChild(formSection);\r\n\r\n        const taskForm = document.createElement('form');\r\n        taskForm.setAttribute('id', 'taskForm');\r\n        formSection.appendChild(taskForm);\r\n\r\n        const title = document.createElement('input');\r\n        title.setAttribute('type', 'text');\r\n        title.setAttribute('name', 'title');\r\n        title.setAttribute('id', 'taskTitle');\r\n        title.setAttribute('placeholder', 'Título tarefa');\r\n        title.setAttribute('form', 'taskForm');\r\n\r\n        const details = document.createElement('textarea');\r\n        details.classList.add('details');\r\n        details.setAttribute('name', 'details');\r\n        details.setAttribute('placeholder', 'Detalhes...');\r\n        details.setAttribute('rows', '4'); \r\n        details.setAttribute('cols', '50');\r\n        details.setAttribute('form', 'taskForm');\r\n\r\n        const schedule = document.createElement('input');\r\n        schedule.setAttribute('type', 'date');\r\n        schedule.setAttribute('name', 'schedule');\r\n        schedule.setAttribute('id', 'taskSchedule');\r\n        schedule.setAttribute('form', 'taskForm');\r\n\r\n        const submitBt = document.createElement('input');\r\n        submitBt.setAttribute('type', 'submit');\r\n        submitBt.setAttribute('value', 'Criar Tarefa');\r\n        submitBt.setAttribute('id', 'taskSubmit');\r\n        submitBt.setAttribute('name','submitBt');\r\n        submitBt.setAttribute('form', 'taskForm');\r\n\r\n        taskForm.appendChild(title);\r\n        taskForm.appendChild(details);\r\n        taskForm.appendChild(schedule);\r\n        taskForm.appendChild(submitBt);\r\n\r\n        return formSection;\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Elements);\n\n//# sourceURL=webpack://todo-app/./src/elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager */ \"./src/taskManager.js\");\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n/* harmony import */ var _dataManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataManager */ \"./src/dataManager.js\");\n/* harmony import */ var _dataManager__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dataManager__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst addTask = document.querySelector('#add');\r\n\r\n// Por exemplo, você pode chamar a função para carregar os dados salvos quando a página é carregada\r\nwindow.addEventListener('load', () => {\r\n    loadData();\r\n    //criando exemplos\r\n    _taskManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTask('Ir no médico', 'lembrar de olhar o endereço', '01/02/2024')\r\n    _elements__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ShowTaskSection('Tarefas', _taskManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].taskList)\r\n});\r\n\r\naddTask.addEventListener('click', _elements__WEBPACK_IMPORTED_MODULE_5__[\"default\"].NewTaskDiv)\r\n\r\n// Por fim, você pode chamar a função para exibir os projetos na interface do usuário\r\n_UI__WEBPACK_IMPORTED_MODULE_4__[\"default\"].displayProjects();\r\n\r\nprojectForm.addEventListener('submit', event => {\r\n    event.preventDefault();\r\n    _dataManager__WEBPACK_IMPORTED_MODULE_3__.dataValidation.validateProjectName(projectForm.querySelector('#projectName').value.trim());\r\n});\r\n\r\ntaskForm.addEventListener('submit', event => {\r\n    event.preventDefault();\r\n    const taskTitle = taskForm.querySelector('#taskTitle').value.trim();\r\n    const taskDetails = taskForm.querySelector('#taskDetails').value.trim();\r\n    const taskSchedule = taskForm.querySelector('#taskSchedule').value;\r\n\r\n    _dataManager__WEBPACK_IMPORTED_MODULE_3__.dataValidation.validateTaskData(taskTitle, taskSchedule);\r\n});\r\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ \"./src/taskManager.js\");\n\r\n\r\nconst projects = (() => {\r\n\r\n    const projectsList = [];\r\n    \r\n    function addProject(name) {\r\n        if (projectsList.some(name)) return alert(\"Esse projeto já existe!\")\r\n        const newProject = { name, tasks: [] };\r\n        projectsList.push(newProject);\r\n    }\r\n\r\n    function editProject(oldName, newName) {\r\n        const project = projectsList.find(project => project.name === oldName);\r\n        if (project) {\r\n          project.name = newName;\r\n          return project;\r\n      }\r\n    }\r\n\r\n    function deleteProject(name) {\r\n        const index = projectsList.findIndex(project => project.name  === name);\r\n        if (index !== -1) {\r\n          projectsList.splice(index, 1);\r\n          return true \r\n        } else {\r\n          return false\r\n        }\r\n    }\r\n\r\n    return {\r\n        projectsList,\r\n        addProject,\r\n        editProject,\r\n        deleteProject\r\n    }\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://todo-app/./src/projectManager.js?");

/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n\r\n\r\nconst tasks = (() => {\r\n    class Task {\r\n        constructor(title, details, schedule) {\r\n            this.title = title;\r\n            this.details = details;\r\n            this.schedule = schedule;\r\n            this.done = false;\r\n            this.important = false;\r\n            this.project = '';\r\n            this.id = this.getID();\r\n    };\r\n    getID() {\r\n        return '_' + Math.random().toString(36).substr(2, 9);\r\n    }\r\n    }\r\n\r\n    const taskList = [];\r\n\r\n    function createTask (\r\n        title,\r\n        details,\r\n        schedule\r\n    ) {\r\n        const newTask = new Task(title, details, schedule);\r\n        taskList.push(newTask)\r\n        return newTask;  \r\n    };\r\n\r\n    function editTask(taskId, updatedData) {\r\n        const taskIndex = taskList.findIndex(task => task.id === taskId);\r\n        if (taskIndex !== -1) {\r\n            Object.assign(taskList[taskIndex], updatedData);\r\n            return taskList[taskIndex]; \r\n        } else return null; \r\n\r\n    }\r\n    \r\n    function deleteTask(taskId) {\r\n        const taskIndex = taskList.findIndex(task => task.id === taskId);\r\n        if (taskIndex !== -1) {\r\n           taskList.splice(taskIndex, 1);\r\n      } else return null;\r\n    }\r\n\r\n    function completeTask(taskId) {\r\n        const taskIndex = taskList.findIndex(task => task.id === taskId);\r\n        if (taskIndex !== -1) {\r\n          taskList[taskIndex].done = true;\r\n        }\r\n    }\r\n\r\n    function assignProjectToTask(projectName, taskId) {\r\n        const project = _projectManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList.find(project => project.name === projectName);\r\n        const task = taskList.find(task => task.id === taskId);\r\n        \r\n        if (project && task) {\r\n            task.project = project;\r\n            project.tasks.push(task);\r\n            return true; // Retorna verdadeiro se a atribuição for bem-sucedida\r\n        }\r\n    }\r\n\r\n      return{\r\n        taskList,\r\n        createTask,\r\n        editTask,\r\n        deleteTask,\r\n        completeTask,\r\n        assignProjectToTask\r\n      }\r\n\r\n}) ();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://todo-app/./src/taskManager.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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