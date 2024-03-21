import tasks from "./taskManager";

const projects = (() => {

    const projectsList = [];
    
    function addProject(name) {
        if (projectsList.some(name)) return alert("Esse projeto já existe!")
        const newProject = { name, tasks: [] };
        projectsList.push(newProject);
    }

    function editProject(oldName, newName) {
        const project = projectsList.find(project => project.name === oldName);
        if (project) {
          project.name = newName;
          return project;
      }
    }

    function deleteProject(name) {
        const index = projectsList.findIndex(project => project.name  === name);
        if (index !== -1) {
          projectsList.splice(index, 1);
          return true 
        } else {
          return false
        }
    }

    return {
        projectsList,
        addProject,
        editProject,
        deleteProject
    }
})();

export default projects;