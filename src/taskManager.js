import projects from "./projectManager";

const tasks = (() => {
    class Task {
        constructor(title, details, schedule) {
            this.title = title;
            this.details = details;
            this.schedule = schedule;
            this.done = false;
            this.important = false;
            this.project = '';
            this.id = this.getID();
    };
    getID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    }

    const taskList = [];

    function createTask (
        title,
        details,
        schedule
    ) {
        const newTask = new Task(title, details, schedule);
        taskList.push(newTask)
        return newTask;  
    };

    function editTask(taskId, updatedData) {
        const taskIndex = taskList.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            Object.assign(taskList[taskIndex], updatedData);
            return taskList[taskIndex]; 
        } else return null; 

    }
    
    function deleteTask(taskId) {
        const taskIndex = taskList.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
           taskList.splice(taskIndex, 1);
      } else return null;
    }

    function completeTask(taskId) {
        const taskIndex = taskList.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
          taskList[taskIndex].done = true;
        }
    }

    function assignProjectToTask(projectName, taskId) {
        const project = projects.projectsList.find(project => project.name === projectName);
        const task = taskList.find(task => task.id === taskId);
        
        if (project && task) {
            task.project = project;
            project.tasks.push(task);
            return true; // Retorna verdadeiro se a atribuição for bem-sucedida
        }
    }

      return{
        taskList,
        createTask,
        editTask,
        deleteTask,
        completeTask,
        assignProjectToTask
      }

}) ();

export default tasks;