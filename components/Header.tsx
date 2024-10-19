import React from "react";

const Header = () => {
  return (
    <header className="flex justify-around items-center mt-2 max-lg:mt-10">
      <div className="flex items-center font-bold tracking-wider">
        <img src="./logo.png" alt="" className="w-12 max-lg:max-w-60" />
        <span className="max-xl:hidden">TreadingQuiz</span>
      </div>
      <div className="flex gap-10">
        <a href="/" className="hover:underline text-lg">
          Home
        </a>
      </div>

      <div className="flex gap-3">
        <button className="bg-orange-400 shadow-orange-400 shadow-md text-white rounded-md py-2 px-3 ">
          <a href="/login">login</a>
        </button>
        <button className="border-orange-400 border text-orange-400 rounded-md py-2 px-3 ">
          <a href="/signup">Sign up</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
