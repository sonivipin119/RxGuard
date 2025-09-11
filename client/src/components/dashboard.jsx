import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
    <div className="top-0 left-0 w-full h-full -z-10 opacity-80">
      <img src="./images/rxgurad-back.jpg" alt="background"></img>
    </div>
    <div className="p-6 absolute top-[100px]">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your dashboard! Here you can manage your account and view your activities.</p>
      <Link to="/profile" className="text-blue-500 hover:underline mt-4 inline-block">Go to Profile</Link>
    </div>
    </>
  );
}
export default Dashboard;