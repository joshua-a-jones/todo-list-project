// all tasks should get added to "all-tasks" even (especially) if they don't have a project. Tasks should be assigned to their project as well if given one. Once a task is checked off, fade it and strikethrough, then add delete button? Or just remove it completely?

import {toggleMenu, toggleAddProjectForm} from './nav-bar.js';
import {project, task, todoList} from './todo-list.js';
import {toggleAddTaskForm} from './task-form.js';
import {format} from 'date-fns'




(function controller() {

    //create empty todo list
    const list = todoList();
    
    setDate();



    //add event listeners for various buttons
    document.getElementById('burger-button').addEventListener('click', toggleMenu);
    document.getElementById('add-task-btn').addEventListener('click', toggleAddTaskForm);
    document.getElementById('add-project-btn').addEventListener('click', toggleAddProjectForm);
    document.getElementById('submit-new-task-btn').addEventListener('click', createNewTask)
    
    //controls program flow when new task is created
    function createNewTask() {
        var title = document.getElementById('new-task-title').value;
        var date = document.getElementById('new-task-date').value;
        var project = document.getElementById('new-task-project').value

        const newTask = task(title, '', date, project);

        list.addItem(newTask);
        
    
        clearDiv(document.getElementById('todo-list'))
        list.displayList(document.getElementById('todo-list'));

        toggleAddTaskForm();
        
    }


    function clearDiv(div) {
        div.innerHTML ='';
    }

    function setDate() {
        const dateDisplay = document.getElementById('date-display');
    
        dateDisplay.innerText = format(new Date(), 'EEEE, MMMM do');
 
    }

})();