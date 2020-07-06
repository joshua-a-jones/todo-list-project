export function toggleMenu() {
    
    if (document.getElementById('menu').classList.contains('hidden')) {
        document.getElementById('menu').classList.remove('hidden');
        
    } else {
        document.getElementById('menu').classList.add('hidden');
    }
    
    
}

export function toggleAddProjectForm() {
    
    const addButton = document.getElementById('add-project-btn');
    const addProjectForm = document.getElementById('add-project-form');
    
    var flag = addButton.classList.contains('hidden');

    if (!flag) {
        addButton.classList.add('hidden');
        addProjectForm.classList.remove('hidden');
    } else {
        addButton.classList.remove('hidden');
        addProjectForm.classList.add('hidden');
        clearForm();
    }

    function clearForm() {
        document.getElementById('new-project-name').value = '';
    }

}



