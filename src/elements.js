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
            taskDiv.classList.add('taskDiv');
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
            editBt.classList.add('editBt');
            taskDiv.appendChild(editBt);

            const deletetask = document.createElement('div');
            deletetask.innerHTML = `<i class="fi fi-tr-x"></i>`;
            deletetask.setAttribute('id',`${task.id}`);
            taskDiv.appendChild(deletetask);
            
        });

        return sectionList
    }

	static NewTaskDiv(){
        showTasks.innerHTML = '';
        const formSection = document.createElement("section");
        showTasks.appendChild(formSection);

        const taskForm = document.createElement('form');
        taskForm.setAttribute('id', 'taskForm');
        formSection.appendChild(taskForm);

        const title = document.createElement('input');
        title.setAttribute('type', 'text');
        title.setAttribute('name', 'title');
        title.setAttribute('id', 'taskTitle');
        title.setAttribute('placeholder', 'Título tarefa');
        title.setAttribute('form', 'taskForm');

        const details = document.createElement('textarea');
        details.classList.add('details');
        details.setAttribute('name', 'details');
        details.setAttribute('placeholder', 'Detalhes...');
        details.setAttribute('rows', '4'); 
        details.setAttribute('cols', '50');
        details.setAttribute('form', 'taskForm');

        const schedule = document.createElement('input');
        schedule.setAttribute('type', 'date');
        schedule.setAttribute('name', 'schedule');
        schedule.setAttribute('id', 'taskSchedule');
        schedule.setAttribute('form', 'taskForm');

        const submitBt = document.createElement('input');
        submitBt.setAttribute('type', 'submit');
        submitBt.setAttribute('value', 'Criar Tarefa');
        submitBt.setAttribute('id', 'taskSubmit');
        submitBt.setAttribute('name','submitBt');
        submitBt.setAttribute('form', 'taskForm');

        taskForm.appendChild(title);
        taskForm.appendChild(details);
        taskForm.appendChild(schedule);
        taskForm.appendChild(submitBt);

        return formSection;
    }

}

export default Elements;