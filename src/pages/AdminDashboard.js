import React from "react";
import UploadFile from "../components/UploadFile";

const AdminDashboard = ({ username, onLogout }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout}>Logout</button>
      <UploadFile />
    </div>
  );
};

export default AdminDashboard;
