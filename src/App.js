import React, { useState, useCallback } from "react";
import "./App.css";
import { Hello } from "./Hello";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(count + 1), [count, setCount]);

  return (
    <div>
      <Hello increment={increment} />
      <div>count:{count}</div>
    </div>
  );
};

export default App;
