import { TextField } from "@material-ui/core";
import React, { useState } from "react";

function Dashboard() {
  const [state, setstate] = useState("");
  const [Name, setName] = useState([]);

  const getData = (event) => {
    setstate(event.target.value);
  };
  const click = () => {
    setName((WriteName) => {
      return [...WriteName, state];
    });
    setstate("");
  };
  return (
    <div
      style={{
        background: "white",
      }}
    >
      <TextField type="text" value={state} onChange={getData} />
      <h1>{Name}</h1>
      <button onClick={click}>name</button>
    </div>
  );
}

export default Dashboard;
