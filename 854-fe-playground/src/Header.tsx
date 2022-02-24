import React from "react";
import logo from "./logo.png";

function Header() {
  return (
    <header>
      <div className="flex justify-center ">
        <img className="w-16" src={logo} alt="마대리랭킹로고"></img>
      </div>
    </header>
  );
}

export default Header;
