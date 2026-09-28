document.getElementById('add-todo').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const newTodo = document.createElement('li');
        newTodo.textContent = todoText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            todoList.removeChild(newTodo);
        });

        newTodo.appendChild(removeButton);
        todoList.appendChild(newTodo);
        todoInput.value = '';
    }
});

document.getElementById('todo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('add-todo').click();
    }
});