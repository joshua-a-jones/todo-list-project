import { format } from "date-fns";

 export function todoList() {
    var list = new Array();


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

    function displayList(div) {
        for (let i = 0; i<list.length; i++) {
            div.appendChild(list[i].getDomElement());
        }
    }


    return {addItem, getList, displayList};
}



export function task(inputTitle, inputDescription = '', inputDate, inputProject = ' ' ) {

    var title = inputTitle;
    var description = inputDescription;
    var date = inputDate;
    var project = inputProject;
    var checked = false;
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

    function makeDomElement() {
        const taskDiv = document.createElement('div')
        taskDiv.classList += 'todo-task';

        const checkButton = document.createElement('button')
        checkButton.classList.add('check-button');
        checkButton.addEventListener('click', toggleCheckedState);

        const titleP = document.createElement('p');
        titleP.innerText = title;
        
        const projectP = document.createElement('p');
        projectP.innerText = project;

        const dateP = document.createElement('p');
        dateP.innerText = formatDate();

        taskDiv.appendChild(checkButton);
        taskDiv.appendChild(titleP);
        taskDiv.appendChild(projectP);
        taskDiv.appendChild(dateP);
        
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

    return {getDate, getName, getDomElement, toggleCheckedState};
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


