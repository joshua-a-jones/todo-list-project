// all tasks should get added to "all-tasks" even (especially) if they don't have a project. Tasks should be assigned to their project as well if given one. Once a task is checked off, fade it and strikethrough, then add delete button? Or just remove it completely?

import {toggleMenu, toggleAddProjectForm} from './nav-bar.js';
import {project, projectsList, task, todoList} from './todo-list.js';
import {toggleAddTaskForm} from './task-form.js';
import {format} from 'date-fns'




(function controller() {

    //create empty todo list
    const list = new todoList(document.getElementById('todo-list'));
    const projects = projectsList();
    let activeProject = '';
    
    setDate();

    //add event listeners for various buttons
    document.getElementById('burger-button').addEventListener('click', toggleMenu);
    document.getElementById('add-task-btn').addEventListener('click', toggleAddTaskForm);
    document.getElementById('add-project-btn').addEventListener('click', toggleAddProjectForm);
    document.getElementById('submit-new-task-btn').addEventListener('click', createNewTask)
    document.getElementById('new-task-form').addEventListener('keyup', (e) => {if (e.keyCode === 13){createNewTask()}});
    document.getElementById('submit-new-project-btn').addEventListener('click', createNewProject);
    document.getElementById('add-project-form').addEventListener('keyup', (e) => {if (e.keyCode === 13){createNewProject()}});
    
    const listSelectors = document.getElementsByClassName('list-select');
    for (let i = 0; i < listSelectors.length; i++) {
        listSelectors[i].addEventListener('click', changeActiveList);
    }


    //controls program flow when new task is created
    function createNewTask() {
        var title = document.getElementById('new-task-title').value;
        var date = document.getElementById('new-task-date').value;
        var project = document.getElementById('new-task-project').value

        
        if (!title){return;}
        list.createNewTask(title, date, project);
        list.displayList(activeProject);
        toggleAddTaskForm();
        
    }

    function createNewProject() {
        var newProjectName = document.getElementById('new-project-name').value;
        const projectSelect = document.getElementById('project-select');

        if (!newProjectName) {return;}

        const newProject = project(newProjectName);

        newProject.getDomElement().addEventListener('click', changeActiveList);

        projects.addProject(newProject);

        projects.displayList(document.getElementById('projects-list'));

        document.getElementById('new-task-project').innerHTML += `<option>${newProjectName}</option>`;
        toggleAddProjectForm();
    }


    function setDate() {
        const dateDisplay = document.getElementById('date-display');
    
        dateDisplay.innerText = format(new Date(), 'EEEE, MMMM do');
 
    }

    function changeActiveList(e) {
        const buttons = document.getElementsByClassName('list-select');

        for (let i = 0; i<buttons.length; i++) {
            if (buttons[i].classList.contains('active')) {
                buttons[i].classList.remove('active');
            }
        }
        e.target.classList.add('active');
        document.getElementById('task-list-name').innerText = e.target.innerText;
        activeProject = e.target.innerText;
        list.setActiveProject(activeProject);
        list.displayList();
    }

})();