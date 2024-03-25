import tasks from "./taskManager";
import projects from "./projectManager";

const data = (() => {
    function saveData() {
        localStorage.setItem('projects', JSON.stringify(projects.projectsList));
        localStorage.setItem('tasks', JSON.stringify(tasks.taskList));
    }

    function loadData() {
        const savedProjects = localStorage.getItem('projects');
        const savedTasks = localStorage.getItem('tasks');

        if (savedProjects && savedTasks) {
            projects.projectsList = JSON.parse(savedProjects);
            tasks.taskList = JSON.parse(savedTasks);
        }
    }

    window.addEventListener('load', () => {
        loadData();
    });

    window.addEventListener('beforeunload', () => {
        saveData();
    });

    return {
        saveData,
        loadData
    };
})();