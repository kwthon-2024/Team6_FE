import React, { useState } from 'react';
import Graduation from './Graduation';

function GraduationKlas() {
  /** 전공: 0, 교양: 1, 졸업요건 2 */
  const [menu1, setMenu1] = useState(0);

  return (
    <div className="graduation">
      <div className="title j-content-between">
        <div className="name a-items-end">
          <h1 className="p-32-700">광운</h1>
          <p className="p-14-700" style={{ margin: '0.5px' }}>
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
        <div style={{ width: '100%' }}>
          <div className="select-menu j-content-between">
            <div className="select-p">
              {menu1 === 0 ? <div className="selected"></div> : null}
              <p
                className={
                  menu1 === 0 ? 'p-14-600 c-white' : 'p-14-600 c-black'
                }
              >
                전공 30/60
              </p>
            </div>
            <div className="select-p">
              {menu1 === 1 ? <div className="selected"></div> : null}
              <p
                className={
                  menu1 === 1 ? 'p-14-600 c-white' : 'p-14-600 c-black'
                }
              >
                교양 30/60
              </p>
            </div>
            <div className="select-p">
              {menu1 === 2 ? (
                <div
                  className="selected"
                  style={{ transform: 'translate(-22.5px, -25%)' }}
                ></div>
              ) : null}
              <p
                className={
                  menu1 === 2 ? 'p-14-600 c-white' : 'p-14-600 c-black'
                }
              >
                졸업요건
              </p>
            </div>
          </div>
        </div>
        <div className="select-menu-content">
          <div className="font-bold text-xl p-4 text-center">
            KLAS로 로그인해서
            <br /> 졸업요건을 만족했는지 <br />
            손쉽게 확인해보세요!
          </div>
        </div>
      </div>
      <>
        <div className="ABEEK f-dir-column a-items-center j-content-between">
          <div className="select-menu-content">
            <form className="p-3 w-full max-w-md flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  학번
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="학번"
                  className="w-full p-3 rounded-md bg-gray-200 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-main01"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  KLAS 비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="KLAS 비밀번호"
                  className="w-full p-3 rounded-md bg-gray-200 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-main01"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-main01 text-white py-3 rounded-md font-bold text-lg hover:bg-main01 transition"
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default GraduationKlas;
