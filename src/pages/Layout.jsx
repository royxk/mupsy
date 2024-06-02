import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeMain from "./HomeMain";

const Layout = () => {
  return (
    <div className="flex flex-col p-10 min-h-screen">
      <Header />
      <div className="flex-grow pt-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
