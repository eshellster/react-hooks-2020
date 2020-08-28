import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";
import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({ name: "", email: "", password: "" });
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const inputRef = useRef();

  const [showHello, setHello] = useState(true);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="parent">
      <div className="containerWrap">
        <div>{data ? data : `loading...`}</div>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          increment
        </button>
        <div>
          <button onClick={() => setHello(!showHello)}>toggle</button>
          {showHello && <Hello />}
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
