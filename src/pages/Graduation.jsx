import Major from "../components/graduation/Major";
import Refinement from "../components/graduation/Refinement";

import { useState } from "react";

import "./Graduation.css";

const Graduation = () => {
  // 공학인증 여부
  const [ABEEK, setABEEK] = useState(true);
  /** 전공: 0, 교양: 1, 졸업요건 2 */
  const [menu1, setMenu1] = useState(0);

  /** 공학인증 중 기초교양: 0, 공학주제: 1 */
  const [menuABEEK, setMenuABEEK] = useState(0);
  /** 기초교양 중 수학: 0, 기초과학: 1, 전산학 2 */
  const [menu2, setMenu2] = useState(0);
  /** 공학주제 중 공학기초: 0, 공학일반: 1, 공학심화: 2 */
  const [menu2_1, setMenu2_1] = useState(0);

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
        {menu1 === 0 ? (
          <Major />
        ) : menu1 === 1 ? (
          <Refinement />
        ) : (
          <div className="select-menu-content p-14-600">졸업작품전시 졸업논문등록 택1</div>
        )}
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
              <div
                className="select-p"
                onClick={() => {
                  setMenuABEEK(0);
                }}
              >
                {menuABEEK === 0 ? <div className="selected"></div> : null}
                <p className={menuABEEK === 0 ? "p-14-600 c-white" : "p-14-600 c-black"}>
                  기초교양 10/20
                </p>
              </div>

              <div
                className="select-p"
                onClick={() => {
                  setMenuABEEK(1);
                }}
              >
                {menuABEEK === 1 ? <div className="selected"></div> : null}
                <p className={menuABEEK === 1 ? "p-14-600 c-white" : "p-14-600 c-black"}>
                  공학주제 30/50
                </p>
              </div>
            </div>
            <div className="select-menu-content">
              <div className="select-grade j-content-between a-items-center">
                {menuABEEK === 0 ? (
                  <>
                    <p
                      className={
                        `p-14-500 c-pointer ` + (menu2 === 0 ? "c-crimson-red" : "c-black")
                      }
                      onClick={() => {
                        setMenu2(0);
                      }}
                    >
                      수학
                    </p>
                    <div></div>
                    <p
                      className={
                        `p-14-500 c-pointer ` + (menu2 === 1 ? "c-crimson-red" : "c-black")
                      }
                      onClick={() => {
                        setMenu2(1);
                      }}
                    >
                      기초과학
                    </p>
                    <div></div>
                    <p
                      className={
                        `p-14-500 c-pointer ` + (menu2 === 2 ? "c-crimson-red" : "c-black")
                      }
                      onClick={() => {
                        setMenu2(2);
                      }}
                    >
                      전산학
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      className={
                        `p-14-500 c-pointer ` + (menu2_1 === 0 ? "c-crimson-red" : "c-black")
                      }
                      onClick={() => {
                        setMenu2_1(0);
                      }}
                    >
                      공학기초
                    </p>
                    <div></div>
                    <p
                      className={
                        `p-14-500 c-pointer ` + (menu2_1 === 1 ? "c-crimson-red" : "c-black")
                      }
                      onClick={() => {
                        setMenu2_1(1);
                      }}
                    >
                      공학일반
                    </p>
                    <div></div>
                    <p
                      className={
                        `p-14-500 c-pointer ` + (menu2_1 === 2 ? "c-crimson-red" : "c-black")
                      }
                      onClick={() => {
                        setMenu2_1(2);
                      }}
                    >
                      공학심화
                    </p>
                  </>
                )}
              </div>

              <hr></hr>

              <div className="select-grade-content">
                <p className="p-14-600">기필</p>
                {menuABEEK === 0 ? (
                  // 기초교양
                  menu2 === 0 ? (
                    <div className="subject d-flex">
                      <p className="p-12-500">확률및불규칙신호론</p>
                      <p className="p-12-500">공학수학1</p>
                      <p className="p-12-500">공학수학2</p>
                    </div>
                  ) : menu2 === 1 ? (
                    <div className="subject d-flex">
                      <p className="p-12-500">물리학1</p>
                      <p className="p-12-500">물리학2</p>
                      <p className="p-12-500">화학1</p>
                      <p className="p-12-500">화학2</p>
                    </div>
                  ) : (
                    <div className="subject d-flex">
                      <p className="p-12-500">프로그래밍기초</p>
                      <p className="p-12-500">컴퓨팅사고</p>
                      <p className="p-12-500">자료구조</p>
                      <p className="p-12-500">알고리즘</p>
                    </div>
                  )
                ) : // 공학주제
                menu2_1 === 0 ? (
                  <div className="subject d-flex">
                    <p className="p-12-500">공학수학1</p>
                    <p className="p-12-500">공학수학2</p>
                  </div>
                ) : menu2_1 === 1 ? (
                  <div className="subject d-flex">
                    <p className="p-12-500">회로이론</p>
                    <p className="p-12-500">전자기학</p>
                    <p className="p-12-500">신호및시스템</p>
                  </div>
                ) : (
                  <div className="subject d-flex">
                    <p className="p-12-500">통신공학</p>
                    <p className="p-12-500">제어공학</p>
                    <p className="p-12-500">전력전자공학</p>
                  </div>
                )}
              </div>
              <hr></hr>
              <div className="select-grade-content f-dir-column j-content-between">
                <p className="p-14-600">기선</p>
                {menuABEEK === 0 ? (
                  menu2 === 0 ? (
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
                  ) : menu2 === 1 ? (
                    <div className="subject d-flex">
                      <p className="p-12-500">물리학실험1</p>
                      <p className="p-12-500">물리학실험2</p>
                      <p className="p-12-500">화학실험1</p>
                      <p className="p-12-500">화학실험2</p>
                      <p className="p-12-500">생명과학실험1</p>
                      <p className="p-12-500">생명과학실험2</p>
                    </div>
                  ) : (
                    <div className="subject d-flex">
                      <p className="p-12-500">프로그래밍기초</p>
                      <p className="p-12-500">컴퓨팅사고</p>
                      <p className="p-12-500">자료구조</p>
                      <p className="p-12-500">알고리즘</p>
                    </div>
                  )
                ) : menu2_1 === 0 ? (
                  <div className="subject d-flex">
                    <p className="p-12-500">공학수학1</p>
                    <p className="p-12-500">공학수학2</p>
                  </div>
                ) : menu2_1 === 1 ? (
                  <div className="subject d-flex">
                    <p className="p-12-500">회로이론</p>
                    <p className="p-12-500">전자기학</p>
                    <p className="p-12-500">신호및시스템</p>
                  </div>
                ) : (
                  <div className="subject d-flex">
                    <p className="p-12-500">통신공학</p>
                    <p className="p-12-500">제어공학</p>
                    <p className="p-12-500">전력전자공학</p>
                  </div>
                )}

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
