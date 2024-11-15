import { useState } from "react";

import "./Graduation.css";

const Graduation = () => {
  // 공학인증 여부
  const [ABEEK, setABEEK] = useState(true);
  /** 전공: 0, 교양: 1, 졸업요건 2 */
  const [menu1, setMenu1] = useState(0);
  /** 학년 1, 2, 3, 4 */
  const [menuGrade, setMenuGrade] = useState(1);

  return (
    <div className="graduation">
      <div className="title j-content-between">
        <div className="name a-items-end">
          <h1 className="p-32-700">김광운</h1>
          <p className="p-14-700" style={{ margin: "0.5px" }}>
            님
          </p>
        </div>
        <div className="total-credit a-items-end">
          <p className="p-14-700">총&nbsp;</p>
          <h1 className="p-32-700">120/133</h1>
          <p className="p-14-700">학점</p>
        </div>
      </div>

      <div className="common f-dir-column a-items-center">
        <div style={{ width: "100%" }}>
          <div className="select-menu j-content-between">
            <div
              className="select-p"
              onClick={() => {
                setMenu1(0);
              }}
            >
              {menu1 === 0 ? <div className="selected"></div> : null}
              <p className={menu1 === 0 ? "p-14-600 c-white" : "p-14-600 c-black"}>전공 30/60</p>
            </div>
            <div
              className="select-p"
              onClick={() => {
                setMenu1(1);
              }}
            >
              {menu1 === 1 ? <div className="selected"></div> : null}
              <p className={menu1 === 1 ? "p-14-600 c-white" : "p-14-600 c-black"}>교양 30/60</p>
            </div>
            <div
              className="select-p"
              onClick={() => {
                setMenu1(2);
              }}
            >
              {menu1 === 2 ? (
                <div className="selected" style={{ transform: "translate(-22.5px, -25%)" }}></div>
              ) : null}
              <p className={menu1 === 2 ? "p-14-600 c-white" : "p-14-600 c-black"}>졸업요건</p>
            </div>
          </div>
        </div>
        <div className="select-menu-content">
          <div className="select-grade j-content-between a-items-center">
            <p className="p-14-500">1학년</p>
            <div></div>
            <p className="p-14-500">2학년</p>
            <div></div>
            <p className="p-14-500">3학년</p>
            <div></div>
            <p className="p-14-500">4학년</p>
          </div>
          <hr></hr>

          <div className="select-grade-content">
            <p className="p-14-600">1학년 1학기</p>
            <div className="subject d-flex">
              <p className="p-12-500">프로그래밍 기초</p>
              <p className="p-12-500">컴퓨팅사고</p>
            </div>
          </div>
          <hr></hr>
          <div className="select-grade-content">
            <p className="p-14-600">1학년 2학기</p>
            <div className="subject d-flex">
              <p className="p-12-500">프로그래밍 기초</p>
              <p className="p-12-500">컴퓨팅사고</p>
            </div>
          </div>
        </div>
      </div>
      {ABEEK ? (
        <>
          <hr></hr>

          <div className="ABEEK-title a-items-end">
            <h6 className="p-20-700">공학인증</h6>
            <p className="p-14-700">&nbsp;- 전자공학과</p>
          </div>

          <div className="ABEEK f-dir-column a-items-center j-content-between">
            <div className="select-menu j-content-between">
              <p className="p-14-600">기초교양 10/20</p>
              <p className="p-14-600">공학주제 30/50</p>
            </div>
            <div className="select-menu-content">
              <div className="select-grade j-content-between a-items-center">
                <p className="p-14-500">수학</p>
                <div></div>
                <p className="p-14-500">기초과학</p>
                <div></div>
                <p className="p-14-500">전산학</p>
              </div>
              <hr></hr>

              <div className="select-grade-content">
                <p className="p-14-600">기필</p>
                <div className="subject d-flex">
                  <p className="p-12-500">확률및불규칙신호론</p>
                  <p className="p-12-500">공학수학1</p>
                  <p className="p-12-500">공학수학2</p>
                </div>
              </div>
              <hr></hr>
              <div className="select-grade-content f-dir-column j-content-between">
                <p className="p-14-600">기선</p>
                <div className="subject d-flex">
                  <p className="p-12-500">선형대수학</p>
                  <p className="p-12-500">수치해석</p>
                  <p className="p-12-500">이산수학</p>
                  <p className="p-12-500">확률및통계</p>
                  <p className="p-12-500">대학수학및연습1</p>
                  <p className="p-12-500">대학수학및연습2</p>
                  <p className="p-12-500">벡터해석학및연습</p>
                  <p className="p-12-500">기초수학및연습</p>
                </div>

                <div style={{ height: "12px" }}></div>

                <div className="total-grade j-content-end a-items-end">
                  <p className="p-10-600">총&nbsp;</p>
                  <h4 className="p-16-600 c-crimson-red">9/10</h4>
                  <p className="p-10-600">&nbsp;학점</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Graduation;
