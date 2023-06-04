import React from "react";

type Props = {
  text: string;
  type: "submit" | "button";
};

const Button: React.FC<Props> = ({ text, type }) => {
  return (
    <button
      className="shadow bg-red-400 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
