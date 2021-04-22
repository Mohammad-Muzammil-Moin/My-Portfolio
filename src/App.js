import "./App.css";
import React, { useState, useEffect } from "react";
import Main_Content from "./Components/Main_Content/Main_Content";
import Loader from "./Loader";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => setloader(false), 2000);
  }, []);

  return (
    <Router>
      {loader && <Loader />}
      <Main_Content />
    </Router>
  );
}

export default App;
