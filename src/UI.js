import projects from "./projectManager.js";
import tasks from "./taskManager.js";

const UI = (() => {

    const body = document.querySelector('body');
        

    
    const projectListContainer = document.getElementById('projectList');
    const taskListContainer = document.getElementById('taskList');

    function displayProjects() {
        // Limpa o conteúdo atual da lista de projetos
        projectListContainer.innerHTML = '';

        // Itera sobre os projetos e cria elementos HTML para exibir na lista de projetos
        projects.projectsList.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.textContent = project.name;
            // Adiciona um evento de clique para exibir as tarefas do projeto ao ser clicado
            projectItem.addEventListener('click', () => displayTasks(project));
            projectListContainer.appendChild(projectItem);
        });
    }

    function displayTasks(project) {
        // Limpa o conteúdo atual da lista de tarefas
        taskListContainer.innerHTML = '';

        // Itera sobre as tarefas do projeto e cria elementos HTML para exibir na lista de tarefas
        project.tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.textContent = task.title;
            taskListContainer.appendChild(taskItem);
        });
    }

    // Exibe os projetos quando a página é carregada
    window.addEventListener('load', () => {
        displayProjects();
    });

    // Atualiza a interface do usuário quando os dados são modificados
    projects.subscribe(displayProjects);

    return {
        displayProjects,
        displayTasks
    };
})();

export default UI;