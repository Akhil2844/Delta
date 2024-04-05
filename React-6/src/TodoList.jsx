import "./TodoList.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-text", id: uuidv4(), isDone: false },
  ]);
  let [newTodos, setnewTodos] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodos, id: uuidv4(), isDone: false }];
    });
    setnewTodos("");
  };

  let updateTodoValue = (event) => {
    setnewTodos(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  // UPDATING ALL ELEMENTS IN AN ARRAY
  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  // UPDATING ONE ELEMENT IN AN ARRAY

  let updateOneTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  //  Line Through one task
  let doneOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone, // Toggle isDone value
          };
        } else {
          return todo;
        }
      })
    );
  };

  // Line through all task
  let doneAll = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: !todo.isDone, // Toggle isDone value
        };
      })
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add a task"
        value={newTodos}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h2>TodoList</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isDone ? "done" : ""}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            {/*  we use onclick callback here because it makes the copy of function not excute the function */}
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => updateOneTodo(todo.id)}>
              UpperCase One
            </button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => doneOne(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>Upper All</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={doneAll}>All Done</button>
    </>
  );
}
