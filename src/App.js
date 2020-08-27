import React, { useState } from "react";
import "./App.css";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({ name: "", email: "", password: "" });

  const [showHello, setHello] = useState(true);

  return (
    <div className="parent">
      <div>
        <button onClick={() => setHello(!showHello)}>toggle</button>
        {showHello && <Hello />}
        <input
          type="name"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;
