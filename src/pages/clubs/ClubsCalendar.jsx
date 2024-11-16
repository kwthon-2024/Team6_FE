import React, { useEffect, useState } from "react";
import koLocale from "@fullcalendar/core/locales/ko";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";

import SmallButton from "../../components/button/SmallButton";

import pencil from "../../assets/pencil.svg";
import prev from "../../assets/prev.svg";
import next from "../../assets/next.svg";

import "./ClubsCalendar.css";
import "./CustomFullCalendar.css";

const ClubsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const todayStr = new Date().toISOString().split("T")[0];
    setSelectedDate(todayStr);
  }, []);

  // 날짜별로 그룹화된 이벤트 데이터
  const groupedEvents = {
    "2024-11-16": [
      { title: "광운해커톤", time: "8:00 ~ 21:00", type: "학술" },
      { title: "세미나", time: "10:00 ~ 12:00", type: "교육" },
      { title: "워크숍", time: "14:00 ~ 17:00", type: "교육" },
      { title: "해커톤", time: "18:00 ~ 23:00", type: "학술" },
      { title: "해커톤", time: "18:00 ~ 23:00", type: "학술" },
    ],
    "2024-11-17": [
      { title: "프로그래밍 대회", time: "9:00 ~ 18:00", type: "경쟁" },
      { title: "코드 리뷰", time: "19:00 ~ 21:00", type: "교육" },
    ],
    "2024-11-18": [{ title: "프로젝트 발표", time: "10:00 ~ 12:00", type: "학술" }],
  };

  // 색상 배열 (각 점에 다른 색상 부여)
  const dotColors = ["#32CD32", "#8B0000", "#1E90FF"]; // 초록, 빨강, 파랑

  // 이벤트 배열 생성
  const formattedEvents = Object.entries(groupedEvents).flatMap(([date, events]) =>
    events.map((event) => ({
      title: event.title,
      start: date,
      extendedProps: {
        time: event.time,
        type: event.type,
      },
    }))
  );

  // 선택된 날짜의 행사 가져오기
  const selectedEvents = selectedDate ? groupedEvents[selectedDate] || [] : [];

  return (
    <div className="clubs-calendar">
      <div className="j-content-between">
        <h1 className="p-20-700">동아리 행사</h1>
        <img src={pencil} alt="수정" className="c-pointer" />
      </div>

      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate="2024-11-16" // 캘린더가 해당 날짜로 열리도록 설정
          locale={koLocale}
          events={formattedEvents}
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          titleFormat={{
            month: "long", // '11월'로 표시
          }}
          dayCellContent={(arg) => {
            const dateStr = arg.dateStr;
            const dayEvents = groupedEvents[dateStr] || [];
            const eventCount = dayEvents.length;

            return (
              <div className="day-cell-content">
                <span className="day-number">{arg.date.getDate()}</span>
                {eventCount > 0 && (
                  <div className="event-dots-container">
                    {dayEvents.slice(0, 3).map((_, index) => (
                      <span
                        key={index}
                        className="event-dot"
                        style={{
                          backgroundColor: dotColors[index % dotColors.length],
                        }}
                      ></span>
                    ))}
                    {eventCount > 3 && <span className="event-more">+</span>}
                  </div>
                )}
              </div>
            );
          }}
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
          dateClick={(arg) => {
            setSelectedDate(arg.dateStr);
          }}
        />
      </div>

      <div className="detail">
        <div className="detail-content">
          {selectedDate ? (
            selectedEvents.length > 0 ? (
              selectedEvents.map((event, index) => (
                <div key={index} className="club-event-content j-content-between">
                  <div>
                    <p className="p-14-700">{event.title}</p>
                    <p className="p-10-700">
                      {new Date(selectedDate).toLocaleDateString("ko-KR", {
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      ({new Date(selectedDate).toLocaleDateString("ko-KR", { weekday: "short" })}){" "}
                      {event.time}
                    </p>
                  </div>
                  <SmallButton selected={true} style={{ width: "63px" }}>
                    {event.type}
                  </SmallButton>
                </div>
              ))
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClubsCalendar;
