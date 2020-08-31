import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
    // 이 컴퍼넌트가 언마운트 될때 불여진다.
  }, []);

  useEffect(() => {
    setState({ data: state.data, loading: true });
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        if (isCurrent.current) {
          setState({ data: y, loading: false });
        }
      });
  }, [url, state.data]);

  return state;
};
