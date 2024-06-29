import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col align-center w-full items-center justify-center tab:p-10 min-h-screen">
        <div className="flex-grow w-full desktop:max-w-[1020px]">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
