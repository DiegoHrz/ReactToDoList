import { useState } from "react";
import "./App.css";

function App() {
  //Any type of data you want to have re-render your component when it changes to make the changes take effect you want to put those inside useState
  //you cant modify a variable inside a hook 
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  //in this way the page wont reload every time you clic submit
  const handleSubmit = (e) => {
    e.preventDefault();
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
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="">Add</button>
        </div>
        <div>
          <h1>ToDo List</h1>
          <ul>
            <li>
              <label>
                <input type="checkbox" name="" id="" />
                {newTodo}
              </label>
              <button>Delete</button>
            </li>
            <li>
              <label>
                <input type="checkbox" name="" id="" />
                Item 1
              </label>
              <button>Delete</button>
            </li>
          </ul>
        </div>
      </form>
    </>
  );
}

export default App;
