//Selectors
// key phrase: What are these elements(objects)? Do they get something from the user? Are they sections of the webpage we are creating?
// key phrase: We add names to these elements so that we could easily call them here.

const todoInput = document.querySelector('.todo-input'); // returns what is inside the element
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
// key phrase: How should your element(object) behave?
// key phrase: Waits on which element the user interacted with and execute its functionality.

// create an event that checks if the page is loaded and then execute a function
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo); // adds a functionality to an object
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // console.log('Hello!');

    // TODO DIV
    // Creates an instance of a new div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo"); // adds a classname of todo to the created div

    // Create List
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; // adds text inside the element list
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); // adds the List (newTodo) inside DIV (todoDiv). Keyword: Stick

    // ADD TODO TO LOCAL STORAGE
    saveLocalTodos(todoInput.value);

    // CREATING BUTTONS

    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; // add an element inside the button
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'; 
    trashButton.classList.add("trash-btn");
    // console.log(trashButton.classList);
    
    // APPEND TO DIV
    todoDiv.appendChild(trashButton);
    
    // APPEND TO LIST
    // If this list is not done this way, it will float under the last div of the HTML
    todoList.appendChild(todoDiv);

    // CLEAR TODO INPUT VALUE
    todoInput.value = "";
}


function deleteCheck(e) { // receives the elements of the triggered event
    const item = e.target; // gets which element the user is selected

    //DELETE TODO
    if(item.classList[0] === 'trash-btn'){ // classList is an Array
        const todo = item.parentElement; // selects the parent element
        // Animations
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }

    //CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) { // receives the elements of the triggered event
    const todos = todoList.childNodes; // returns a list of the elements inside todo-list
    console.log(todos);
    todos.forEach(function(todo){ // puts all items to todo variable
        // check all child elements of todo-list and find specific elements
        // based on what option you choose on filter-redo 
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                // todo.classList.contains("completed")
                // ? todo.style.display = "flex"
                // : todo.style.display = "none"
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                // !todo.classList.contains("completed")
                // ? todo.style.display = "flex"
                // : todo.style.display = "none"
                break;
        }
    });  
}

function saveLocalTodos(todo) {
    // check if there is an existing list
    let todos;

    // check if there is an item on local storage
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        // get existing data from local storage and parse it to an array.
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // add the data to the todos array
    todos.push(todo);

    // set the name of the data that we got from todos array to todos
    // send the data from the todos array to the local storage
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // just a check to add all exsising data to frontend
    todos.forEach(function(todo) {
        // TODO DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");

        // Create List
        const newTodo = document.createElement('li');
        newTodo.innerText = todo; 
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        // CREATING BUTTONS
        // Check Mark Button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>'; 
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        // Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'; 
        trashButton.classList.add("trash-btn");
        
        // APPEND TO DIV
        todoDiv.appendChild(trashButton);
        
        // APPEND TO LIST
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos (todo) {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // console.log(todo.children[0].innerText);
    // console.log(todo.indexOf(todoIndex));
    
    // remove value using position in the array

    // get position of text from the array
    const todoIndex = todo.children[0].innerText;

    // delete the text using its position
    // from what position you want to remove, how many to remove
    todos.splice(todos.indexOf(todoIndex), 1);

    localStorage.setItem("todos", JSON.stringify(todos));

}