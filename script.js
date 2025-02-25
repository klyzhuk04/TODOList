document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        input.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById('todo-list').appendChild(li);
}