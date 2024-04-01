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

const dataValidation = (() => {
    const projectForm = document.getElementById('projectForm');
    const taskForm = document.getElementById('taskForm');

    projectForm.addEventListener('submit', event => {
        event.preventDefault();
        const projectName = projectForm.querySelector('#projectName').value.trim();

        if (validateProjectName(projectName)) {
            projects.addProject(projectName);
            projectForm.reset();
        } else {
            alert('Please enter a valid project name.');
        }
    });

    taskForm.addEventListener('submit', event => {
        event.preventDefault();
        const taskTitle = taskForm.querySelector('#taskTitle').value.trim();
        const taskDetails = taskForm.querySelector('#taskDetails').value.trim();
        const taskSchedule = taskForm.querySelector('#taskSchedule').value;

        if (validateTaskData(taskTitle, taskSchedule)) {
            tasks.createTask(taskTitle, taskDetails, taskSchedule);
            taskForm.reset();
        } else {
            alert('Please enter valid task data.');
        }
    });

    function validateProjectName(name) {
        // Aqui você pode adicionar regras de validação para o nome do projeto
        return name !== '';
    }

    function validateTaskData(title, schedule) {
        // Aqui você pode adicionar regras de validação para o título e a programação da tarefa
        return title !== '' && schedule !== '';
    }

    return {
        validateProjectName,
        validateTaskData
    };
})();


export {data, dataValidation} 