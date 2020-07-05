import { format } from "date-fns";

 export function todoList(displayDiv) {
    var list = new Array();
    var activeProject = 'All Tasks'


    function addItem(item) {
        list.push(item);
        sortList();
    
    }

    function sortList() {
        list.sort((a,b) => (a.getDate() > b.getDate()) ? 1 : -1);
    }

    function getList() {
        return list;
    }

    function displayList() {
        displayDiv.innerHTML = '';

        if (activeProject === 'All Tasks') {
            for (let i = 0; i<list.length; i++) {
                displayDiv.appendChild(list[i].getDomElement());
            }
        } else {
            for (let i = 0; i<list.length; i++) {
                if (list[i].getProject() === activeProject) {
                    displayDiv.appendChild(list[i].getDomElement());
                }
            }
        }
    }

    function createNewTask(title, date, project) {
        const newTask = task(title, '', date, project)
        newTask.deleteBtn.addEventListener('click', deleteItem);
        addItem(newTask)

    }

    function deleteItem(e) {
        for (let i= 0; i < list.length; i++) {
            if (list[i].deleteBtn === e.target) {
                list.splice(i,1);
            }
        }
        displayList(activeProject);
    }

    function setActiveProject(project) {
        activeProject = project;
    }

    return {addItem, getList, displayList, createNewTask, setActiveProject};
}



export function task(inputTitle, inputDescription = '', inputDate, inputProject = ' ' ) {

    var title = inputTitle;
    var description = inputDescription;
    var date = inputDate;
    var project = inputProject;
    var checked = false;
    const deleteBtn = makeDeleteButton();
    var DomElement = makeDomElement();

    function getDate() {
        return date;
    }

    function formatDate(){
        
        if (!getDate()) {return ''};
        return format(new Date(getDate()), 'MMMM do');
    }

    function getName() {
        return name;
    }

    function makeDeleteButton() {
        const deleteBtn = document.createElement('input');
        deleteBtn.type = 'image';
        deleteBtn.src = './assets/remove.svg';
        deleteBtn.classList.add('button');
        
        return deleteBtn;
    }

    function makeDomElement() {
        const taskDiv = document.createElement('div')
        taskDiv.classList += 'todo-task';

        const checkButton = document.createElement('button')
        checkButton.classList.add('check-button');
        checkButton.addEventListener('click', toggleCheckedState);

        const titleP = document.createElement('p');
        titleP.innerText = title;

        const filler = document.createElement('div');
        filler.innerHTML = '';
        
        const projectP = document.createElement('p');
        projectP.innerText = project;

        const dateP = document.createElement('p');
        dateP.innerText = formatDate();

    

        taskDiv.appendChild(checkButton);
        taskDiv.appendChild(titleP);
        taskDiv.appendChild(filler);
        taskDiv.appendChild(projectP);
        taskDiv.appendChild(dateP);
        taskDiv.appendChild(deleteBtn);
        
        return taskDiv;
    }

    function toggleCheckedState(e) {
        if (!checked) {
            checked = true;
            DomElement.classList.add('checked');
            e.target.innerHTML = '&#10003;';
            
        } else {
            checked = false;
            DomElement.classList.remove('checked');
            e.target.innerHTML = '';
        }
    }

    function getDomElement() {
        return DomElement;
    }

    function getProject() {
        return project;
    }


    return {getDate, getName, getProject, getDomElement, toggleCheckedState, deleteBtn};
}


export function project(inputName) {

    var name = inputName;
    var DomElement = makeDomElement();

    function getName() {
        return name;
    } 

    function makeDomElement() {
        const projectDiv =  document.createElement('li');
        projectDiv.innerText = name;
        projectDiv.classList.add('button');
        projectDiv.classList.add('list-select');

        return projectDiv;
    }

    function getDomElement() {
        return DomElement;
    }

    return {getName, getDomElement}
}

export function projectsList() {

    var projectsList = new Array();

    function addProject(newProject) {
        projectsList.push(newProject)
    } 

    function getList() {
        return projectsList;
    }

    function displayList(div) {
        for (let i = 0; i<projectsList.length; i++) {
            div.appendChild(projectsList[i].getDomElement());
        }
    }




    return {addProject, getList, displayList}
}


