import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./routes";

function App() {
  return (
    <Router>
      <RouterComponent />
    </Router>
  );
}

export default App;
