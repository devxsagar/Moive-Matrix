import React from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
