import React, { useReducer, useState } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "add-todos":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount - 1,
      };
    default:
      return state;
  }
}

const App = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState();
  return (
    <div>
      <h2>number of todos: {todoCount}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todos", text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: "toggle-todo", idx })}
          style={
            t.completed
              ? { textDecoration: "line-through", color: "gray" }
              : { textDecoration: "", color: "inherit" }
          }
        >
          {t.text}
        </div>
      ))}
    </div>
  );
};

export default App;
