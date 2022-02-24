import Header from "./Header";
import React from "react";
import wing_chun from "./wing_chun.png";
import TopNav from "TopNav";
import Button from "components/Button";
import DropDownFilter from "components/DropDownFilter";

function LandingPage() {
  const options = [
    { id: "0", value: "유튜브" },
    { id: "1", value: "인스타그램" },
  ];
  const categorys = [
    { id: "0", value: "전체" },
    { id: "1", value: "자동차" },
    { id: "2", value: "뷰티" },
    { id: "3", value: "푸드" },
    { id: "4", value: "게임" },
    { id: "5", value: "게임" },
    { id: "6", value: "게임" },
    { id: "7", value: "게임" },
    { id: "8", value: "게임" },
    { id: "9", value: "게임" },
  ];
  const contentOptions = [
    { id: "0", value: "콘텐츠" },
    { id: "1", value: "채널" },
    { id: "2", value: "해시태그" },
  ];

  return (
    <>
      <Header />
      <TopNav />
      <Button type="primary" label="버튼 테스트" onClick={console.log} />
      <Button type="secondary" label="버튼 테스트" onClick={console.log} />
      <div className="flex mb-2">
        <DropDownFilter options={options} /> <span>에서</span>
      </div>
      <div className="flex mb-2">
        <DropDownFilter options={categorys} />
      </div>
      <div className="flex mb-2">
        <DropDownFilter options={contentOptions} /> <span>BEST</span>
      </div>
      {/* <div className='flex justify-center'>
              <img className='w-full px-[24%]' src={wing_chun} alt="영춘권" />
              </div>
              <div className="w-full text-2xl text-center text-blue-700">
              <a
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  워씽 리액트 배워라 쉬먀
              </a>
          </div> */}
    </>
  );
}

export default LandingPage;
