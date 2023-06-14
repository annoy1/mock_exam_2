import React from "react";
import MockExam from "../MockExam";

const CandidateDashboard = ({ username, onLogout }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout}>Logout</button>
      <MockExam />
    </div>
  );
};

export default CandidateDashboard;
