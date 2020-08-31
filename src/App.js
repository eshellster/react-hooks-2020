import React, { useReducer, useState } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "add-todos":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    default:
      return state;
  }
}

const App = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (text === "") {
            console.log("같음");
          }
          dispatch({ type: "add-todos", text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default App;
