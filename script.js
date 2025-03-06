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
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Добавляем обработчик для зачеркивания задачи
    taskSpan.addEventListener('click', function() {
        taskSpan.classList.toggle('completed');
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Редактировать';
    editButton.classList.add('edit-button'); // Добавляем класс для стилизации
    editButton.addEventListener('click', function() {
        const newText = prompt('Редактировать задачу:', taskSpan.textContent);
        if (newText !== null && newText.trim() !== '') {
            taskSpan.textContent = newText.trim();
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('delete-button'); // Добавляем класс для стилизации
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(taskSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    document.getElementById('todo-list').appendChild(li);
}