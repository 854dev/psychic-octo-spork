import React from "react";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  type: "primary" | "secondary";
  label: string;
  onClick: (e?: React.SyntheticEvent) => void;
}

function Button(props: ButtonProps) {
  const { type, label, onClick, size } = props;

  const sizeMapper = {
    sm: "w-20 h-9 px-2 py-1",
    md: "w-24 h-9 px-2 py-1",
    lg: "w-40 h-9 px-2 py-1",
  };

  const typeMapper = {
    primary: "ctive:bg-purple-mdr-400 bg-purple-mdr text-white ",
    secondary:
      "active:bg-gray-200 bg-white text-gray-600 border border-gray-500",
  };

  // const typeMapper = {
  //   primary: `${
  //     size ? sizeMapper[size] : ""
  //   } select-none cursor-pointer a rounded-lg flex justify-center px-2 py-1`,
  //   secondary: ``,
  // };

  return (
    <>
      <button
        className={`select-none cursor-pointer rounded-lg flex justify-center ${
          size ? sizeMapper[size] : ""
        } ${typeMapper[type]}`}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
