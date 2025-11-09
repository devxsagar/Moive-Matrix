import React from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <div className="w-full max-w-7xl mx-auto px-5">
          <Navbar />
          <Outlet />
          <Footer />
          <Toaster position="bottom-right" toastOptions={{ duration: 3000 }}  />
        </div>
      </div>
    </Provider>
  );
};

export default App;
