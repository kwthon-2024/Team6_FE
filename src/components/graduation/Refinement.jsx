import { useState } from "react";

import "./Refinement.css";

const Refinement = () => {
  // 0: 필수교양 1: 균형교양
  const [menuEssential, setMenuEssential] = useState(0);
  // 0: 기초필수 1: 기초선택
  const [menuBasis, setMenuBasis] = useState(0);

  return (
    <div className="refinement">
      <div className="select-menu-content">
        <div className="select-grade j-content-between a-items-center">
          <p
            className={`p-14-500 c-pointer ` + (menuEssential === 0 ? "c-crimson-red" : "c-black")}
            onClick={() => {
              setMenuEssential(0);
            }}
          >
            필수교양
          </p>
          <div></div>
          <p
            className={`p-14-500 c-pointer ` + (menuEssential === 1 ? "c-crimson-red" : "c-black")}
            onClick={() => {
              setMenuEssential(1);
            }}
          >
            균형교양
          </p>
        </div>
        <hr></hr>

        <div className="select-grade-content">
          <div className="subject d-flex">
            {menuEssential === 0 ? (
              <>
                <p className="p-12-500">광운인되기</p>
                <p className="p-12-500">대학영어</p>
                <p className="p-12-500">융합적사고와글쓰기 영역</p>
                <p className="p-12-500">정보 영역 (프로그래밍기초 | 컴퓨팅사고)</p>
              </>
            ) : (
              <div className="f-dir-column" style={{ gap: "14px" }}>
                {/* 가로 2개 */}
                <div className="d-flex" style={{ gap: "41px" }}>
                  {/* 1개씩 */}
                  <div>
                    <div className="d-flex" style={{ gap: "15px" }}>
                      <p className="p-14-500">과학과 기술 영역</p>
                      <div className="a-items-end">
                        <p className="p-14-500 c-crimson-red">3</p>
                        <p className="p-11-500">학점</p>
                      </div>
                    </div>
                    <p className="p-10-500">인터넷활용</p>
                  </div>
                  <div>
                    <div className="d-flex" style={{ gap: "15px" }}>
                      <p className="p-14-500">예술과 체육 영역</p>
                      <div className="a-items-end">
                        <p className="p-14-500 c-crimson-red">3</p>
                        <p className="p-11-500">학점</p>
                      </div>
                    </div>
                    <p className="p-10-500">인터넷활용</p>
                  </div>
                </div>

                <div className="d-flex" style={{ gap: "41px" }}>
                  <div>
                    <div className="d-flex" style={{ gap: "15px" }}>
                      <p className="p-14-500">인간과 철학 영역</p>
                      <div className="a-items-end">
                        <p className="p-14-500 c-crimson-red">3</p>
                        <p className="p-11-500">학점</p>
                      </div>
                    </div>
                    <p className="p-10-500">논리적으로 사고하기</p>
                  </div>
                  <div>
                    <div className="d-flex" style={{ gap: "15px" }}>
                      <p className="p-14-500">수리와 자연 영역</p>
                      <div className="a-items-end">
                        <p className="p-14-500 c-crimson-red">3</p>
                        <p className="p-11-500">학점</p>
                      </div>
                    </div>
                    <p className="p-10-500">인터넷활용</p>
                  </div>
                </div>

                <div>
                  <div className="d-flex" style={{ gap: "15px" }}>
                    <p className="p-14-500">사회와 경제 영역</p>
                    <div className="a-items-end">
                      <p className="p-14-500 c-crimson-red">3</p>
                      <p className="p-11-500">학점</p>
                    </div>
                  </div>
                  <p className="p-10-500">경제신문읽기기</p>
                </div>

                <div>
                  <div className="d-flex" style={{ gap: "15px" }}>
                    <p className="p-14-500">글로벌 문화와 제2외국어 영역</p>
                    <div className="a-items-end">
                      <p className="p-14-500 c-crimson-red">3</p>
                      <p className="p-11-500">학점</p>
                    </div>
                  </div>
                  <p className="p-10-500">논리적으로 사고하기</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="total-grade j-content-end a-items-end">
          <p className="p-10-600">총&nbsp;</p>
          <h4 className="p-16-600 c-crimson-red">9/9</h4>
          <p className="p-10-600">&nbsp;학점</p>
        </div>
      </div>

      {menuEssential === 0 ? (
        <>
          <div style={{ height: "1.878vh" }}></div>

          <div className="select-menu-content">
            <div className="select-grade j-content-between a-items-center">
              <p
                className={`p-14-500 c-pointer ` + (menuBasis === 0 ? "c-crimson-red" : "c-black")}
                onClick={() => {
                  setMenuBasis(0);
                }}
              >
                기초필수
              </p>
              <div></div>
              <p
                className={`p-14-500 c-pointer ` + (menuBasis === 1 ? "c-crimson-red" : "c-black")}
                onClick={() => {
                  setMenuBasis(1);
                }}
              >
                기초선택
              </p>
            </div>
            <hr></hr>

            <div className="select-grade-content">
              <div className="subject d-flex">
                <p className="p-12-500">광운인되기</p>
                <p className="p-12-500">대학영어</p>
                <p className="p-12-500">융합적사고와글쓰기 영역</p>
                <p className="p-12-500">정보 영역 (프로그래밍기초 | 컴퓨팅사고)</p>
              </div>
            </div>
            <div className="total-grade j-content-end a-items-end">
              <p className="p-10-600">총&nbsp;</p>
              <h4 className="p-16-600 c-crimson-red">9/10</h4>
              <p className="p-10-600">&nbsp;학점</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Refinement;
