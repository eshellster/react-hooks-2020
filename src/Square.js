import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Square = React.memo(({ onClick, n }) => {
  useCountRenders();
  return <button onClick={onClick}>{n}</button>;
});
