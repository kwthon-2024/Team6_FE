import { useState } from "react";

import "./Major.css";

/**
 * 전공 강의 선택
 */
const Major = () => {
  /** 학년 1, 2, 3, 4 */
  const [menuGrade, setMenuGrade] = useState(1);

  return (
    <div className="select-menu-content">
      <div className="select-grade j-content-between a-items-center">
        <p
          className={`p-14-500 c-pointer ` + (menuGrade === 1 ? "c-crimson-red" : "c-black")}
          onClick={() => {
            setMenuGrade(1);
          }}
        >
          1학년
        </p>
        <div></div>
        <p
          className={`p-14-500 c-pointer ` + (menuGrade === 2 ? "c-crimson-red" : "c-black")}
          onClick={() => {
            setMenuGrade(2);
          }}
        >
          2학년
        </p>
        <div></div>
        <p
          className={`p-14-500 c-pointer ` + (menuGrade === 3 ? "c-crimson-red" : "c-black")}
          onClick={() => {
            setMenuGrade(3);
          }}
        >
          3학년
        </p>
        <div></div>
        <p
          className={`p-14-500 c-pointer ` + (menuGrade === 4 ? "c-crimson-red" : "c-black")}
          onClick={() => {
            setMenuGrade(4);
          }}
        >
          4학년
        </p>
      </div>
      <hr></hr>

      <div className="select-grade-content">
        <p className="p-14-600">{menuGrade}학년 1학기</p>
        <div id="essential" className="p-10-400 c-white j-content-center">
          전필
        </div>
        <div className="subject d-flex">
          <p className="p-12-500">프로그래밍 기초</p>
          <p className="p-12-500">컴퓨팅사고</p>
        </div>
        <div id="essential" className="p-10-400 c-white j-content-center">
          전선
        </div>
        <div className="subject d-flex">
          <p className="p-12-500">프로그래밍 기초</p>
          <p className="p-12-500">컴퓨팅사고</p>
        </div>
      </div>
      <hr></hr>
      <div className="select-grade-content">
        <p className="p-14-600">{menuGrade}학년 2학기</p>
        <div id="essential" className="p-10-400 c-white j-content-center">
          전필
        </div>
        <div className="subject d-flex">
          <p className="p-12-500">프로그래밍 기초</p>
          <p className="p-12-500">컴퓨팅사고</p>
        </div>
        <div id="essential" className="p-10-400 c-white j-content-center">
          전선
        </div>
        <div className="subject d-flex">
          <p className="p-12-500">프로그래밍 기초</p>
          <p className="p-12-500">컴퓨팅사고</p>
        </div>
      </div>
    </div>
  );
};

export default Major;
