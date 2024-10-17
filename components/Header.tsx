import React from "react";

const Header = () => {
  return (
    <header className="flex justify-around items-center mt-2 max-lg:mt-10">
      <div className="bg-red-300 w-11 max-lg:max-w-60">
        <img src="./logo.png" alt="" className="" />
      </div>
      <div className="flex gap-10">
        <a href="/">Home</a>
      </div>
      <div className="flex gap-3 text-sm ">
        <button className="bg-orange-400 shadow-orange-400 shadow-md text-white rounded-md px-2 pt-1 h-fit">
          Sign up
        </button>
        <button className="border-orange-400 border   rounded-md px-2 pt-1 h-fit">
          Login
        </button>
        
      </div>
    </header>
  );
};

export default Header;
