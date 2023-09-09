import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <form action="" className="">
        <div>
          <label htmlFor="item">New item</label>
          <input type="text" id="text" />
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
                Item 1
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
