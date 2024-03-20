const tasks = (() => {
    class Task {
        constructor(title, details, schedule) {
            this.title = title;
            this.details = details;
            this.schedule = schedule;
            this.done = false;
            this.important = false;
            this.project = 
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
            // Atualize os dados da tarefa existente com os dados atualizados
            Object.assign(taskList[taskIndex], updatedData);
            return taskList[taskIndex]; // Retorna a tarefa atualizada
        } else return null; // Retorna null se a tarefa não for encontrada

    }
    
    function deleteTask(taskId) {
        // Remova a tarefa pelo ID
        const taskIndex = taskList.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            // Apagar objeto 
           taskList.splice(taskList[taskIndex], 1);
      } else return null;
    }

    function completeTask(taskId) {
        const taskIndex = taskList.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
          taskList[taskIndex].done = true;
        }
      }


}) ();

export default tasks;