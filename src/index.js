import './styles.scss';
import tasks from "./taskManager";
import projects from "./projectManager";
import {data, dataValidation} from "./dataManager";
import UI from './UI';
import Elements from './elements';


const addTask = document.querySelector('#add');


// Por exemplo, você pode chamar a função para carregar os dados salvos quando a página é carregada
window.addEventListener('load', () => {
    loadData();
    //criando exemplos
    tasks.createTask('Ir no médico', 'lembrar de olhar o endereço', '01/02/2024')
    Elements.ShowTaskSection('Tarefas', tasks.taskList)
});

addTask.addEventListener('click', Elements.NewTaskDiv)



projectForm.addEventListener('submit', event => {
    event.preventDefault();
    dataValidation.validateProjectName(projectForm.querySelector('#projectName').value.trim());
});

taskForm.addEventListener('submit', event => {
    event.preventDefault();
    const taskTitle = taskForm.querySelector('#taskTitle').value.trim();
    const taskDetails = taskForm.querySelector('#taskDetails').value.trim();
    const taskSchedule = taskForm.querySelector('#taskSchedule').value;

    dataValidation.validateTaskData(taskTitle, taskSchedule);
});
