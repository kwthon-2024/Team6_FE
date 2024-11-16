import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SmallButton from "../../components/button/SmallButton";

import calender from "../../assets/calender.svg";

import "./Clubs.css";

const Clubs = () => {
  const [clubCategory, setClubCategory] = useState(0);

  const navigate = useNavigate();

  return (
    <div className="clubs">
      <h1 className="p-20-700">광운대 중앙 동아리</h1>
      <div className="category-buttons d-flex">
        <SmallButton
          onClick={() => {
            setClubCategory(0);
          }}
          selected={clubCategory === 0}
        >
          공연예술
        </SmallButton>
        <SmallButton
          onClick={() => {
            setClubCategory(1);
          }}
          selected={clubCategory === 1}
        >
          문화
        </SmallButton>
        <SmallButton
          onClick={() => {
            setClubCategory(2);
          }}
          selected={clubCategory === 2}
        >
          체육 1
        </SmallButton>
        <SmallButton
          onClick={() => {
            setClubCategory(3);
          }}
          selected={clubCategory === 3}
        >
          체육 2
        </SmallButton>
        <SmallButton
          onClick={() => {
            setClubCategory(4);
          }}
          selected={clubCategory === 4}
        >
          학술
        </SmallButton>
        <SmallButton
          onClick={() => {
            setClubCategory(5);
          }}
          selected={clubCategory === 5}
        >
          종교행사
        </SmallButton>
        <SmallButton
          onClick={() => {
            setClubCategory(6);
          }}
          selected={clubCategory === 6}
        >
          종교행사
        </SmallButton>
      </div>
      <div className="club-list">
        <div
          className="club-thumbnail j-content-center a-items-center"
          onClick={() => {
            navigate("/pages/clubs/detail");
          }}
        >
          <p className="p-14-700">동아리명</p>
          <div className="club-member-recruit p-10-700 c-white j-content-center a-items-center">
            상시모집
          </div>
        </div>
        <div className="club-thumbnail j-content-center a-items-center">
          <p className="p-14-700">동아리명</p>
          <div className="club-member-recruit p-10-700 c-white j-content-center a-items-center">
            상시모집
          </div>
        </div>
        <div className="club-thumbnail j-content-center a-items-center">
          <p className="p-14-700">동아리명</p>
          <div className="club-member-recruit p-10-700 c-white j-content-center a-items-center">
            상시모집
          </div>
        </div>
        <div className="club-thumbnail j-content-center a-items-center">
          <p className="p-14-700">동아리명</p>
          <div className="club-member-recruit p-10-700 c-white j-content-center a-items-center">
            상시모집
          </div>
        </div>
        <div className="club-thumbnail j-content-center a-items-center">
          <p className="p-14-700">동아리명</p>
        </div>
        <div className="club-thumbnail j-content-center a-items-center">
          <p className="p-14-700">동아리명</p>
        </div>
      </div>

      <div className="club-event-title j-content-between">
        <h1 className="p-20-700">동아리 행사</h1>
        <img
          src={calender}
          alt="날짜"
          className="c-pointer"
          onClick={() => {
            navigate("/pages/clubs/calendar");
          }}
        ></img>
      </div>

      <div className="club-event f-dir-column">
        <div className="club-event-content j-content-between">
          <div>
            <p className="p-14-700">광운해커톤</p>
            <p className="p-10-700">11월 16일 (토) 8:00 ~ 21:00</p>
          </div>
          <SmallButton style={{ width: "63px", color: "#77212E", backgroundColor: "#eee" }}>
            학술
          </SmallButton>
        </div>
        <div className="club-event-content j-content-between">
          <div>
            <p className="p-14-700">광운해커톤</p>
            <p className="p-10-700">11월 16일 (토) 8:00 ~ 21:00</p>
          </div>
          <SmallButton style={{ width: "63px", color: "#77212E", backgroundColor: "#eee" }}>
            학술
          </SmallButton>
        </div>
        <div className="club-event-content j-content-between">
          <div>
            <p className="p-14-700">광운해커톤</p>
            <p className="p-10-700">11월 16일 (토) 8:00 ~ 21:00</p>
          </div>
          <SmallButton style={{ width: "63px", color: "#77212E", backgroundColor: "#eee" }}>
            학술
          </SmallButton>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
