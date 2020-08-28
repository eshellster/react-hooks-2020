import React, { useState, useRef } from "react";
import "./App.css";
import { useForm } from "./useForm";
// import { useFetch } from "./useFetch";
import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({ name: "", email: "", password: "" });

  const inputRef = useRef();

  const [showHello, setHello] = useState(true);

  return (
    <div className="parent">
      <div className="containerWrap">
        <div>
          {showHello && <Hello />}
          <button onClick={() => setHello(!showHello)}>toggle</button>
        </div>
        <div>
          <input
            ref={inputRef}
            type="email"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="name"
            name="name"
            placeholder="name"
            value={values.name}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              inputRef.current.focus();
            }}
          >
            focus
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
