const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = document.createElement('li');
        task.classList.add('list-group-item', 'task');
        task.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(task);
            // Add animation for task removal
            task.style.animation = 'fadeOut 0.3s ease-in-out';
            setTimeout(() => {
                task.remove();
            }, 300);
        });

        task.appendChild(deleteButton);
        taskList.appendChild(task);
        taskInput.value = '';

        // Add animation for new task
        task.style.animation = 'fadeIn 0.3s ease-in-out';
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});