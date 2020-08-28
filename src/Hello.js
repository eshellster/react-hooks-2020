import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export const Hello = () => {
  //   const renders = useRef(0);
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  //   console.log("hello render:", renders.current++);
  return (
    <div>
      <div>{data ? data : `loading...`}</div>
      <div>count: {count}</div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        reset
      </button>
      <hr />
    </div>
  );
};
