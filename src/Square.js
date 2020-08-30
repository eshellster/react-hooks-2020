import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Square = React.memo(({ increment, n }) => {
  useCountRenders();
  return <button onClick={() => increment(n)}>{n}</button>;
});
