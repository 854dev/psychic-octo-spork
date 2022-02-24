import React, { useState } from "react";
import Button from "./Button";

interface DropDownFilterProps {
  options: { id: string; value: string }[];
  columns: 2 | 3 | 4;
}

function DropDownFilter(props: DropDownFilterProps) {
  const { options, columns } = props;

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  // const onBlur = () => {
  //   setOpened(false);
  // };

  const Item = (id: string, value: string, columns: number, idx: number) => {
    switch (columns) {
      case 2:
        return (
          <div key={id} className={`w-1/2 flex justify-center`}>
            <Button
              size="lg"
              type={idx === selectedOptionIndex ? "primary" : "secondary"}
              label={value}
              onClick={() => {
                setSelectedOptionIndex(idx);
              }}
            />
          </div>
        );
      case 3:
        return (
          <div key={id} className={`w-1/3 flex justify-center`}>
            <Button
              size="md"
              type={idx === selectedOptionIndex ? "primary" : "secondary"}
              label={value}
              onClick={() => {
                setSelectedOptionIndex(idx);
              }}
            />
          </div>
        );
      case 4:
        return (
          <div key={id} className={`w-1/4 flex justify-center`}>
            <Button
              size="sm"
              type={idx === selectedOptionIndex ? "primary" : "secondary"}
              label={value}
              onClick={() => {
                setSelectedOptionIndex(idx);
              }}
            />
          </div>
        );
      default:
        return;
    }
  };

  return (
    <div className="relative">
      <button
        className={`select-none text-white bg-purple-mdr hover:bg-purple-mdr-400 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center`}
        type="button"
        onClick={toggleOpened}
      >
        {options[selectedOptionIndex].value}
        <svg
          className={`${opened ? "" : "rotate-180"} transition-all ml-4`}
          width="6"
          height="4"
          viewBox="0 0 6 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.295 3.70496L3 1.41496L0.705 3.70496L6.16331e-08 2.99996L3 -4.41313e-05L6 2.99996L5.295 3.70496Z"
            fill="white"
          />
        </svg>
      </button>
      <div
        className={`${
          opened ? "" : "hidden"
        } absolute shadow bg-white py-4 px-2  z-10 flex flex-wrap overflow-hidden w-[360px]`}
      >
        {options.map((elem, idx) => {
          return Item(elem.id, elem.value, columns, idx);
        })}
      </div>
    </div>
  );
}

export default DropDownFilter;
