import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
  return (
    <div className=" place-content-between w-full gap-10 tab:gap-20 flex flex-col tab:flex-row">
      <Logo />
      <div className="flex flex-row place-content-between gap-10">
        <button>MakeUp</button>
        <button>Service</button>
        <button>Info</button>
        <button>Location</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Header;
