import { useState } from "react";
import "./App.css";

function App() {
  //Any type of data you want to have re-render your component when it changes to make the changes take effect you want to put those inside useState
  //you cant modify a variable inside a hook. its inmutable thats why you need to create a new state object ( ...state)
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  //in this way the page wont reload every time you clic submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newTodo, completed: false },
      ];
    });
    setNewTodo('')
  };

  // const handleEvent = (e) => {
  //   setNewTodo(e.target.value)
  // }

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="">
        <div>
          <label htmlFor="item">New item</label>
          <input
            type="text"
            id="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <div>
          <button className="">Add</button>
        </div>
        <div>
          <h1>ToDo List</h1>
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id} > 
                  <label id={todo.id}>
                    <input type="checkbox" checked={  todo.completed} />
                    {todo.title}
                  </label>
                  <button>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </>
  );
}

export default App;
