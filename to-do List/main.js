const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function (even) {
    even.preventDefault();
    const liList = document.createElement('li');
    liList.innerText = taskInput.value;


    const  deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function () {
        liList.remove();
    });
    liList.appendChild(deleteButton);
    taskList.appendChild(liList);

    taskInput.value = '';
});
