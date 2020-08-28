import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState({ data: state.data, loading: true });
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setTimeout(() => {
          setState({ data: y, loading: false });
        }, 2000);
      });
  }, [url]);

  return state;
};
