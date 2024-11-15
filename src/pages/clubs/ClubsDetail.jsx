import { useState } from "react";

import "./ClubsDetail.css";

const ClubsDetail = () => {
  /** 상시 모집 여부 */
  const [alwaysRecruit, setAlwaysRecruit] = useState(true);

  return (
    <div className="clubs-detail">
      <h1 className="p-20-700">광운대 중앙 동아리</h1>
      <h1 className="title p-24-700">광운대 배드민턴 동아리 팡팡</h1>
      {alwaysRecruit ? (
        <div className="always-recruit p-10-700 c-white j-content-center a-items-center">
          상시 모집
        </div>
      ) : (
        <div style={{ height: "18px" }} />
      )}
      <div className="club-info">
        <div className="club-info-title d-flex">
          <div className="club-thumbnail"></div>
          <div className="club-content f-dir-column j-content-between">
            <div>
              <p className="p-20-500">팡팡</p>
              <p className="p-16-500">동아리 인원 : 1234명</p>
              <p className="p-16-500">@ kwu_pangpang</p>
            </div>
            <button className="club-apply p-15-700 c-white">지원하러 가기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubsDetail;
