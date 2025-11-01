import React from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-5">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
