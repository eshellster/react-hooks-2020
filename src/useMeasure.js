import { useState, useLayoutEffect, useRef } from "react";

export const useMeasure = (data) => {
  const [rect, setRect] = useState({});

  const myRef = useRef();

  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect());
  }, data);
  return [rect, myRef];
};
