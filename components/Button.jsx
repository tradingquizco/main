import React from "react";

const Button = ({ children}) => {
  return (
    <button className="bg-orange-400 shadow-orange-400 shadow-md text-white rounded-md px-2 hover:shadow-lg hover:shadow-orange-400">
      {children}
    </button>
  );
};

export default Button;
