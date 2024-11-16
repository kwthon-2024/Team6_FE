import React, { useState, useRef } from 'react';

function ClubEvRegister() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const descriptionRef = useRef(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    
    // 행사 설명 높이 조정
    descriptionRef.current.style.height = 'auto'; // 초기화
    descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`;
  };

  return (
    <div className="bg-white min-h-screen p-4 flex flex-col items-start">
      {/* 제목 */}
      <h1 className="text-lg font-bold text-gray-900 mb-2">동아리 행사 등록</h1>

      {/* 버튼 그룹 */}
      <div className="flex space-x-2 mb-4">
        <button className="bg-gray-100 text-gray-700 text-sm rounded-full px-4 py-2">
          + 동아리 선택
        </button>
        <button className="bg-gray-100 text-gray-700 text-sm rounded-full px-4 py-2">
          + 일정 추가
        </button>
      </div>

      {/* 제목 입력 */}
      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          제목
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-main01"
        />
      </div>

      {/* 행사 설명 입력 */}
      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          행사 설명
        </label>
        <textarea
          ref={descriptionRef}
          value={description}
          onChange={handleDescriptionChange}
          placeholder="행사 설명"
          className="w-full border-b border-gray-300 p-2 resize-none overflow-hidden focus:outline-none focus:border-main01"
          style={{ minHeight: '96px' }} // 초기 높이
        ></textarea>
      </div>

      {/* 이미지 업로드 */}
      <div className="w-full h-72 flex items-center justify-center bg-gray-300 mb-4">
        <button className="text-gray-500 text-3xl">+</button>
      </div>

      {/* 등록 버튼 */}
      <button className="w-full max-w-md bg-main01 text-white text-lg font-bold py-3 rounded-md">
        등록하기
      </button>
    </div>
  );
}

export default ClubEvRegister;
