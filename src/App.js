import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MockExam from "./MockExam";
import Login from "./pages/Login";
import CandidateDashboard from "./pages/CandidateDashboard";
import AdminDashboard from "./pages/AdminDashboard";
//import "./App.css";

const App = () => {
  return (
    <div className="App">
      <MockExam />
    </div>
  );
};

export default App;
