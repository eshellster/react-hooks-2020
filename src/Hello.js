import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useFetch } from "./useFetch";

export const Hello = () => {
  //   const renders = useRef(0);
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  //   console.log("hello render:", renders.current++);

  const divRef = useRef();
  useLayoutEffect(() => {
    console.log(divRef.current.getBoundingClientRect());
  }, [data]);
  return (
    <div>
      <div ref={divRef}>{data ? data : `loading...`}</div>
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
