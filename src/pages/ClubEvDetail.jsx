import React from 'react';

function ClubEvDetail() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-start p-4">
      {/* 날짜 및 모집 태그 */}
      <div className="w-full flex items-center mb-2 space-x-2">
      <p className="text-md font-medium text-gray-900">2024년 11월 16일 (토)</p>
      <span className="text-xs text-white bg-main01 rounded-sm px-3 py-1">
        모집 중
      </span>
      </div>

      {/* 제목 */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2">광운해커톤</h1>

      {/* 카테고리 */}
      <div className="flex justify-start space-x-2 w-full">
        <button className="text-xs text-white bg-main01 rounded-sm px-3 py-1">
          학술
        </button>
        <button className="text-xs text-white bg-main01 rounded-sm px-3 py-1">
          동아리1
        </button>
        <button className="text-xs text-white bg-main01 rounded-sm px-3 py-1">
          동아리2
        </button>
        <button className="text-xs text-white bg-main01 rounded-sm px-3 py-1">
          동아리3
        </button>
      </div>

      {/* 사진 */}
      <div className="w-full h-72 flex items-center justify-center mt-4 overflow-hidden bg-gray-500">
        사진
      </div>

      {/* 행사 설명 */}
      <div className="bg-gray-100 w-full text-gray-600 py-4 mt-4 rounded-md">
        행사 설명
      </div>

      {/* 제출 버튼 */}
      <button className="w-full mt-6 bg-main01 text-white text-lg font-bold py-3 rounded-md">
        신청하러 가기
      </button>
    </div>
  );
}

export default ClubEvDetail;
