

const tasks = (() => {
    class Task {
        constructor(title, details, schedule) {
            this.title = title;
            this.details = details;
            this.schedule = schedule;
            this.done = false;
            this.important = false;
        }
    };

    const taskList = [];

    function createTask (
        title,
        details,
        schedule,
        projectIndex
    ) {
        const newTask = new Task(title, details, schedule);
        projects.projectsList[projectIndex].tasks.push(newTask);
    };
}) ();