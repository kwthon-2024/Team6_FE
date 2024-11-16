import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import koLocale from "@fullcalendar/core/locales/ko";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";

import "./ClubEvCalendar.css";

const ClubEvCalender = ({ setStartDate, setEndDate, setShowCalendar }) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const calendarRef = useRef(null);

  const onClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCalendar(false);
      // 선택된 날짜 초기화 (필요에 따라 제거 가능)
      setSelectedStartDate(null);
      setSelectedEndDate(null);
    }
  };

  useEffect(() => {
    // 이벤트 리스너 등록
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("touchstart", onClickOutside); // 모바일 지원
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("touchstart", onClickOutside);
    };
  }, []);

  return (
    <div className="club-ev-calendar">
      <div className="calendar-wrap" ref={calendarRef}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate="2024-11-16" // 캘린더가 해당 날짜로 열리도록 설정
          locale={koLocale}
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          titleFormat={{
            month: "long", // '11월'로 표시
          }}
          selectable={true} // 날짜 선택 가능하도록 설정
          selectMirror={true} // 선택할 때 미러 효과 적용
          select={(arg) => {
            // arg.startStr과 arg.endStr을 직접 사용합니다.
            const selectedStartDate = arg.startStr;

            // arg.endStr은 선택한 마지막 날짜의 다음 날이므로 하루를 빼야 합니다.
            const adjustedEndDate = new Date(arg.end);
            adjustedEndDate.setDate(adjustedEndDate.getDate());
            const selectedEndDate = adjustedEndDate.toISOString().slice(0, 10);

            // 선택된 날짜를 상태로 저장
            setSelectedStartDate(selectedStartDate);
            setSelectedEndDate(selectedEndDate);
          }}
          unselectAuto={false} // 캘린더 외부를 클릭해도 선택이 취소되지 않도록 설정
          eventContent={(arg) => {
            return (
              <span
                className="event-dot"
                style={{
                  backgroundColor: "#77212e",
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                }}
              ></span>
            );
          }}
          // 기존의 dateClick 핸들러는 제거하거나 필요에 따라 유지하세요.
          // dateClick={(arg) => {
          //   setSelectedDate(arg.dateStr);
          // }}
        />
        <div className="days j-content-center">
          <p className="p-13-600">시작일</p>
          <div style={{ width: "21px" }}></div>
          <input className="p-13-400" type="date" value={selectedStartDate} readOnly />
          <div style={{ width: "22px" }}></div>
          <p className="p-13-600">종료일</p>
          <div style={{ width: "21px" }}></div>
          <input className="p-13-400" type="date" value={selectedEndDate} readOnly />
        </div>
        <div className="j-content-center">
          <button
            style={{ width: "288px", height: "30px", borderRadius: "4px", background: "#77212E" }}
            className="p-16-700 c-white"
            onClick={() => {
              setShowCalendar(false);
              setStartDate(selectedStartDate);
              setEndDate(selectedEndDate);
            }}
          >
            등록
          </button>
        </div>
        <div style={{ height: "1.878vh" }}>&nbsp;</div>
      </div>
    </div>
  );
};

export default ClubEvCalender;
