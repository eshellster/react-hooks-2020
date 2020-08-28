import React, { useState, useRef } from "react";
import "./App.css";
import { useForm } from "./useForm";
// import { useFetch } from "./useFetch";
import { Hello } from "./Hello";
import { useMeasure } from "./useMeasure";

const App = () => {
  const [values, handleChange] = useForm({ name: "", email: "", password: "" });

  const inputRef = useRef();
  // const hello = useRef(() => console.log("hello"));

  const [showHello, setHello] = useState(true);

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect());
  // }, []);

  const [rect, inputRef2] = useMeasure([]);

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
            ref={inputRef2}
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
              // hello.current();
            }}
          >
            focus
          </button>
        </div>
        <pre>{JSON.stringify(rect, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
