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
            div.appendChild(list[i].makeDomElement());
        }
    }

    return {addItem, getList, displayList};
}


export function task(inputTitle, inputDescription = '', inputDate, inputProject = '' ) {

    var title = inputTitle;
    var description = inputDescription;
    var date = inputDate;
    var project = inputProject;

    function getDate() {
        return date;
    }

    function getName() {
        return name;
    }

    function makeDomElement() {
        const taskDiv = document.createElement('div')
        taskDiv.classList += 'todo-task';

        taskDiv.innerHTML = `<span><button class = 'check-button'></button><p>${title}</p></span> <p>${project}</p>`

        return taskDiv;
    }

    return {getDate, getName, makeDomElement};
}


export function project(inputName) {

    var name = inputName;

    function getName() {
        return name;
    } 

    return { getName}
}


