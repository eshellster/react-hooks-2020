import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useFetch } from "./useFetch";
import { UseMeasure } from "./useMeasure";

export const Hello = () => {
  //   const renders = useRef(0);
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  //   console.log("hello render:", renders.current++);

  const divRef = useRef();

  const ref = UseMeasure(divRef, data);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{data ? data : `loading...`}</div>
      </div>

      <pre>{JSON.stringify(ref, null, 2)}</pre>
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
