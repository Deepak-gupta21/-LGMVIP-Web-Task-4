document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <label>
                <input type="checkbox">
                <span>${taskText}</span>
            </label>
            <button class="delete">Delete</button>
        `;

        const checkbox = taskItem.querySelector('input[type="checkbox"]');
        const taskTextSpan = taskItem.querySelector('span');

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskTextSpan.style.textDecoration = 'line-through';
            } else {
                taskTextSpan.style.textDecoration = 'none';
            }
        });

        const deleteButton = taskItem.querySelector('button.delete');
        deleteButton.addEventListener('click', function (e) {
            e.stopPropagation();
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
    }
});

