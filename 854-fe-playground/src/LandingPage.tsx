import React from "react";
import wing_chun from "./wing_chun.png";
import Header from "./Header";
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
        <DropDownFilter options={options} columns={2} /> <span>에서</span>
      </div>
      <div className="flex mb-2">
        <DropDownFilter options={categorys} columns={4} />
      </div>
      <div className="flex mb-2">
        <DropDownFilter options={contentOptions} columns={3} />
        <span>BEST</span>
      </div>
    </>
  );
}

export default LandingPage;
