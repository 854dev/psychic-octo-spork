import React from "react";

interface ButtonProps {
  type: "primary" | "secondary";
  label: string;
  onClick: (e?: React.SyntheticEvent) => void;
}

function Button(props: ButtonProps) {
  const { type, label, onClick } = props;

  const typeMapper = {
    primary: `select-none cursor-pointer active:bg-purple-mdr-400 bg-purple-mdr w-24 h-8 rounded-lg text-white flex justify-center px-2 py-1 m-8`,
    secondary: `select-none cursor-pointer active:bg-gray-200 bg-white w-24 h-8 rounded-lg text-gray-600 border  border-gray-500 flex justify-center px-2 py-1 m-8`,
  };

  return (
    <>
      <button className={typeMapper[type]} onClick={onClick}>
        <span>{label}</span>
      </button>
    </>
  );
}

export default Button;
