import React, { useState } from "react";
import DownArrow from "../down_arrow.png";
import Button from "./Button";

interface DropDownFilterProps {
  options: { id: string; value: string }[];
}

function DropDownFilter(props: DropDownFilterProps) {
  const { options } = props;

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  // const onBlur = () => {
  //   setOpened(false);
  // };

  return (
    // <div className='flex justify-between w-20 px-1 py-2 rounded-lg flex-column bg-purple-mdr-600'>
    //     <div className='w-full font-medium text-center text-white'>
    //         {options[selectedOptionId].value}
    //     </div>
    //     <div className='flex items-center p-1'>
    //       <img src={DownArrow} className="w-[6px] h-[3.7px]" alt="아래화살표"/>
    //     </div>
    // </div>]
    <div className="relative">
      <button
        // id="dropdownButton"
        // data-toggle="dropdown"
        // data-dropdown-toggle="dropdown"
        className={`select-none text-white bg-purple-mdr hover:bg-purple-mdr-400 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center`}
        type="button"
        onClick={toggleOpened}
      >
        {options[selectedOptionIndex].value}
        <svg
          className={`${
            opened ? "rotate-180" : ""
          } transition-all ml-2 w-4 h-4"`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        // id="dropdown"
        className={`${
          opened ? "" : "hidden"
        } absolute py-1 z-10 bg-white shadow flex`}
        // onBlur={onBlur}grid grid-cols-4 grid-flow-row
      >
        {options.map((elem, idx) => {
          return (
            <div key={elem.id} className="w-1/4">
              <Button
                type={idx === selectedOptionIndex ? "primary" : "secondary"}
                label={elem.value}
                onClick={() => {
                  setSelectedOptionIndex(idx);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DropDownFilter;
