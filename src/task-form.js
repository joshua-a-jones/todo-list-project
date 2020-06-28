export function toggleAddTaskForm() {
   const button = document.getElementById('add-task-btn');
   const form = document.getElementById('new-task-form');

    if (button.classList.contains('hidden')) {
        button.classList.remove('hidden');
        form.classList.add('hidden');
    } else {
        button.classList.add('hidden');
        form.classList.remove('hidden');
    }

}


