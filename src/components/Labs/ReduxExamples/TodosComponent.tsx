import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";

const Todos = () => {
  const todos = useAppSelector((state) => state.todos);
  const [todo, setTodo] = useState({ do: "", done: false });
  const dispatch = useAppDispatch();
  const todoChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue,
      done: false,
    };
    setTodo(newTodo);
  };

  const createTodoClickHandler = () => {
    const action = {
      type: "create-todo",
      todo,
    };
    dispatch(action);
  };

  const deleteTodoClickHandler = (todo: any) => {
    const action = {
      type: "delete-todo",
      todo,
    };
    dispatch(action);
  };

  const updateTodoClickHandler = (todo: any) => {
    const action = {
      type: "update-todo",
      todo,
    };
    dispatch(action);
  };

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control"
          />
          <button onClick={createTodoClickHandler} className="btn btn-primary">
            Create New Todo
          </button>
        </li>
        {todos.map((todo) => (
          <li className="list-group-item">
            <input
              checked={todo.done}
              onChange={(event) =>
                updateTodoClickHandler({ ...todo, done: event.target.checked })
              }
              type="checkbox"
            />
            {todo.do}
            <button
              onClick={() => deleteTodoClickHandler(todo)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todos;
