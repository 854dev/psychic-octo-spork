import React, { useState } from "react";

function TopNav() {
  const [sel, setsel] = useState("0");

  return (
    <div className="flex flex-row justify-start border-b">
      <div
        className={`select-none transition cursor-pointer px-4 py-3 border-b-4 ${
          sel === "0"
            ? "border-b-purple-mdr text-gray-three font-bold"
            : "border-b-white text-gray-six"
        }`}
        onClick={() => {
          setsel("0");
        }}
      >
        SNS 랭킹
      </div>
      <div
        className={`select-none transition cursor-pointer px-4 py-3 border-b-4 ${
          sel === "1"
            ? "border-b-purple-mdr text-gray-three font-bold"
            : "border-b-white text-gray-six"
        }`}
        onClick={() => {
          setsel("1");
        }}
      >
        별별 랭킹
      </div>
    </div>
  );
}

export default TopNav;
