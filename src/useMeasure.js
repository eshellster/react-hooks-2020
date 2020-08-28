import { useState, useLayoutEffect } from "react";

export const UseMeasure = (divRef, data) => {
  const [rect, setRect] = useState({});

  useLayoutEffect(() => {
    setRect(divRef.current.getBoundingClientRect());
  }, [data, divRef]);
  return rect;
};
