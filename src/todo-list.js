// todoList - store a todo as object in array

const todoLists = [
    {
        name: 'makan'
    }
];

// submit button - submit the list todo in todoList array
document.querySelector('.js-submit-button')
    .addEventListener('click', () => {
        addingTodo();
        
    });


// function to add each todo when submitted
function addingTodo() {
    const inputElement = document.querySelector('.js-input-todolist');  
    const name = inputElement.value;

    todoLists.push({
        name
    });
    
    // console.log(todoLists);

    // just not display data in console
    inputElement.value = '';

    // always render when anything happend for example delete todo
    renderTodoList();
    
}

// funtion to render the process of todolist happend
function renderTodoList() {
    let todoListHTML = '';

    todoLists.forEach((eachTodoObject, index) => {
        
        // Destructure to get name value of object because of the same name property
        const { name } = eachTodoObject;
        const html = `
            <div class="flex justify-between items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <span class="text-white">${name}</span>
                <button class="js-delete-button focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
            </div>
        `;
        // console.log(html)
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    // delete todo 
    document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
        // deleteButton as DOM Element Object which is refert to button element 
        deleteButton.addEventListener('click', () => {
            todoLists.splice(index,1); // delete element by one only
            renderTodoList();   
        });
    });

}
