import projects from "./projectManager.js";
import tasks from "./taskManager.js";

const showTasks = document.querySelector("#tasks");
const addProjectBt = document.querySelector("#projects")

class Elements {

    static ShowTaskSection(title, list) {
        showTasks.innerHTML = '';
        const sectionList = document.createElement('section');
        showTasks.appendChild(sectionList);

        const pageName = document.createElement('h2');
        pageName.innerText = title;
        sectionList.appendChild(pageName);

        list.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.setAttribute('className','taskDiv');
            sectionList.appendChild(taskDiv);

            // colocar "done" mark

            const taskTitle = document.createElement('h6');
            taskTitle.innerText = task.title;
            taskDiv.appendChild(taskTitle);

            const taskData = document.createElement('p');
            taskData.innerText = task.schedule;
            taskDiv.appendChild(taskData);

            const editBt = document.createElement('button');
            editBt.setAttribute('value', 'Editar');
            editBt.setAttribute('className', 'editBt');
            taskDiv.appendChild(editBt);

            const deletetask = document.createElement('div');
            deletetask.innerHTML = `<i class="fi fi-tr-x"></i>`;
            deletetask.setAttribute('id',`${task.id}`);
            










            
        });







        return sectionList
    }

    static showPageTasks (title, list){
        


    }

 






	static NewTaskDiv(){
        const taskSection = document.createElement("div");
    }
}

export default Elements;