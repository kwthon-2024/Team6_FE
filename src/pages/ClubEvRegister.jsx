import React, { useState } from "react";

import ClubEvCalender from "../components/clubEvCalendar/ClubEvCalendar";

function ClubEvRegister() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClubModalOpen, setIsClubModalOpen] = useState(false);
  const [selectedClubs, setSelectedClubs] = useState([]); // 선택된 동아리들
  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = {
    공연예술: ["합창단", "연극반", "댄스팀"],
    문화: ["문학회", "사진동아리", "영화제작"],
    체육: ["축구팀", "농구팀", "배드민턴"],
    학술: ["프로그래밍", "기술개발", "스터디"],
  };

  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // 카테고리를 선택
  };

  const handleClubClick = (club) => {
    if (!selectedClubs.includes(club)) {
      setSelectedClubs([...selectedClubs, club]); // 동아리를 선택 목록에 추가
    }
    setIsClubModalOpen(false); // 모달 닫기
  };

  const handleClubDelete = (club) => {
    setSelectedClubs(selectedClubs.filter((c) => c !== club)); // 선택된 동아리 삭제
  };

  const handleCategoryDelete = () => {
    setSelectedCategory(null); // 카테고리 선택 해제
    setSelectedClubs([]); // 하위 동아리 초기화
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result); // 이미지 미리보기 URL 저장
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = () => {
    alert("행사가 등록되었습니다!");
    setIsModalOpen(false);
  };

  return (
    <div
      className="bg-white min-h-screen p-4 flex flex-col items-start relative"
      style={{ position: "relative" }}
    >
      <h1 className="text-lg font-bold text-gray-900 mb-2">동아리 행사 등록</h1>

      {/* 버튼 그룹 */}
      <div className="flex space-x-2 mb-4 flex-wrap">
        {/* 카테고리 및 동아리 표시 */}
        {selectedCategory && (
          <button
            className="flex items-center space-x-2 text-sm rounded-full px-3 bg-main01 text-white font-semibold"
            onClick={handleCategoryDelete}
          >
            <span>{selectedCategory}</span>
            <span className="ml-2 text-lg font-semibold">×</span>
          </button>
        )}
        {selectedClubs.map((club, index) => (
          <button
            key={index}
            className="flex items-center space-x-2 text-sm rounded-full px-3 bg-main01 text-white font-semibold mb-2"
            onClick={() => handleClubDelete(club)}
          >
            <span>{club}</span>
            <span className="ml-2 text-lg font-semibold">×</span>
          </button>
        ))}
        {!selectedCategory && (
          <button
            onClick={() => setIsClubModalOpen(true)}
            className="text-sm rounded-full px-3 bg-gray-100 font-semibold text-gray-700 py-1"
          >
            + 동아리 선택
          </button>
        )}
        <button
          className="bg-gray-100 font-semibold text-gray-700 text-sm rounded-full px-3 py-1"
          onClick={() => {
            setShowCalendar(true);
          }}
        >
          {!startDate && !endDate
            ? "+ 일정 추가"
            : `${startDate || "0000-00-00"} ~ ${endDate || "0000-00-00"}`}
        </button>
      </div>

      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-main01"
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">행사 설명</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="행사 설명"
          className="w-full border-b border-gray-300 p-2 resize-none overflow-hidden focus:outline-none focus:border-main01"
          style={{ minHeight: "96px" }}
        ></textarea>
      </div>

      {/* 사진 업로드 */}
      <div className="w-full h-72 flex items-center justify-center bg-gray-300 mb-4 relative">
        {selectedImage ? (
          <img src={selectedImage} alt="Uploaded Preview" className="w-full h-full object-cover" />
        ) : (
          <>
            <label htmlFor="imageUpload" className="text-gray-500 text-3xl cursor-pointer">
              +
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </>
        )}
      </div>

      {/* 등록하기 버튼 */}
      <button
        className="w-full max-w-md bg-main01 text-white text-lg font-bold py-3 rounded-md"
        onClick={() => setIsModalOpen(true)}
      >
        등록하기
      </button>

      {/* 등록 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-72 h-36 rounded-md shadow-lg p-6 text-center">
            <h2 className="text-md font-semibold mb-2">{title || "행사"}</h2>
            <p className="text-md text-gray-700 mb-6">행사를 등록하시겠습니까?</p>
            <div className="border-t border-gray-300 flex">
              <button
                className="w-1/2 py-2 text-gray-700 font-semibold border-r mt-1 border-gray-300"
                onClick={() => setIsModalOpen(false)}
              >
                취소
              </button>
              <button
                className="w-1/2 py-2 text-main01 font-semibold mt-1"
                onClick={handleRegister}
              >
                등록
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 동아리 선택 모달 */}
      {isClubModalOpen && (
        <div className="absolute top-24 left-0 flex justify-center items-center w-full">
          <div className="bg-gray-100 max-w-sm w-full p-6 rounded-lg shadow-sm relative">
            <button
              onClick={() => setIsClubModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 text-xl font-bold"
            >
              ×
            </button>

            <div className="flex items-center bg-white p-2 rounded-md mb-4">
              <input
                type="text"
                placeholder="동아리 검색"
                className="flex-grow bg-transparent outline-none p-1"
              />
            </div>

            {!selectedCategory ? (
              <div className="flex flex-wrap gap-2">
                {Object.keys(categories).map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(category)}
                    className="text-sm bg-white border border-main01 rounded-full px-3 hover:bg-main01 hover:text-white transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            ) : (
              <div>
                <h2 className="text-md font-semibold mb-2">{selectedCategory} 동아리</h2>
                <div className="flex flex-wrap gap-2">
                  {categories[selectedCategory].map((club, index) => (
                    <button
                      key={index}
                      onClick={() => handleClubClick(club)}
                      className="text-sm bg-white border border-main01 rounded-full px-3 py-1 hover:bg-main01 hover:text-white transition-colors"
                    >
                      {club}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 캘린더 */}
      {showCalendar && (
        <ClubEvCalender
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setShowCalendar={setShowCalendar}
        />
      )}
    </div>
  );
}

export default ClubEvRegister;
