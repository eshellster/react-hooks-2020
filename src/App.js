import React, { useEffect } from "react";
import "./App.css";
import { useForm } from "./useForm";
// import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({ name: "", email: "", password: "" });

  // const [showHello, setHello] = useState(true);

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  useEffect(() => {
    console.log("mount1");
  }, []);

  useEffect(() => {
    console.log("mount2");
  }, []);

  return (
    <div className="parent">
      <div>
        {/* <button onClick={() => setHello(!showHello)}>toggle</button> */}
        {/* {showHello && <Hello />} */}
        <input
          type="name"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;
