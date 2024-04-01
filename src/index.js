import './styles.scss';
import tasks from "./taskManager";
import projects from "./projectManager";
import {data, dataValidation} from "./dataManager";
import UI from './UI';
import Elements from './elements';


// Por exemplo, você pode chamar a função para carregar os dados salvos quando a página é carregada
window.addEventListener('load', () => {
    loadData();
    //criando exemplos
    tasks.createTask('Ir no médico', 'lembrar de olhar o endereço', '01/02/2024')
    Elements.ShowTaskSection('Tarefas', tasks.taskList)
});

// Ou você pode adicionar manipuladores de eventos para os formulários de adição de projetos e tarefas
const projectForm = document.getElementById('projectForm');
const taskForm = document.getElementById('taskForm');

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

// Por fim, você pode chamar a função para exibir os projetos na interface do usuário
UI.displayProjects();
