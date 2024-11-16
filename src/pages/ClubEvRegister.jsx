import React, { useState, useRef } from 'react';

function ClubEvRegister() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null); // 선택된 동아리 상태
  const descriptionRef = useRef(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    descriptionRef.current.style.height = 'auto';
    descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`;
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClubClick = (club) => {
    setSelectedClub(club); // 동아리 선택
    setIsModalOpen(false); // 모달 닫기
  };

  const handleClubDelete = () => {
    setSelectedClub(null); // 동아리 선택 해제
    setIsModalOpen(true); // 모달 다시 열기
  };

  return (
    <div className="bg-white min-h-screen p-4 flex flex-col items-start relative">
      <h1 className="text-lg font-bold text-gray-900 mb-2">동아리 행사 등록</h1>

      {/* 버튼 그룹 */}
      <div className="flex space-x-2 mb-4">
        {selectedClub ? (
          <button
            className="flex items-center space-x-2 text-sm rounded-full px-3 bg-main01 text-white font-semibold"
            onClick={handleClubDelete} // 버튼 클릭 시 삭제
          >
            <span>{selectedClub}</span>
            <span className="ml-2 text-lg font-semibold">×</span>
          </button>
        ) : (
          <button
            onClick={toggleModal}
            className={`text-sm rounded-full px-3 py-1 ${
              isModalOpen
                ? 'bg-white font-semibold text-main01 outline outline-2 outline-main01'
                : 'bg-gray-100 font-semibold text-gray-700'
            }`}
          >
            + 동아리 선택
          </button>
        )}
        <button className="bg-gray-100 font-semibold text-gray-700 text-sm rounded-full px-3 py-1">
          + 일정 추가
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
          ref={descriptionRef}
          value={description}
          onChange={handleDescriptionChange}
          placeholder="행사 설명"
          className="w-full border-b border-gray-300 p-2 resize-none overflow-hidden focus:outline-none focus:border-main01"
          style={{ minHeight: '96px' }}
        ></textarea>
      </div>

      <div className="w-full h-72 flex items-center justify-center bg-gray-300 mb-4">
        <button className="text-gray-500 text-3xl">+</button>
      </div>

      <button className="w-full max-w-md bg-main01 text-white text-lg font-bold py-3 rounded-md">
        등록하기
      </button>

      {/* 모달 창 */}
      {isModalOpen && (
        <div className="absolute top-24 left-0 flex justify-center items-center">
          <div className="bg-gray-100 max-w-sm w-full p-6 rounded-lg shadow-sm relative">
            <button
              onClick={toggleModal}
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

            <div className="flex flex-wrap gap-2">
              {['공연예술', '문화', '체육 1', '체육 2', '학술','학술1','학술2'].map((club, index) => (
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
        </div>
      )}
    </div>
  );
}

export default ClubEvRegister;
