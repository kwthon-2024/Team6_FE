import React, { useState, useRef } from 'react';

function ClubEvRegister() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // 등록 모달 상태
  const [isClubModalOpen, setIsClubModalOpen] = useState(false); // 동아리 선택 모달 상태
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // 업로드된 이미지 상태
  const descriptionRef = useRef(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    descriptionRef.current.style.height = 'auto';
    descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`;
  };

  const handleClubClick = (club) => {
    setSelectedClub(club); // 동아리 선택
    setIsClubModalOpen(false); // 동아리 모달 닫기
  };

  const handleClubDelete = () => {
    setSelectedClub(null); // 동아리 선택 해제
    setIsClubModalOpen(true); // 동아리 모달 다시 열기
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
    alert('행사가 등록되었습니다!');
    setIsModalOpen(false);
  };

  const categories = {
    공연예술: ['합창단', '연극반', '댄스팀'],
    문화: ['문학회', '사진동아리', '영화제작'],
    체육: ['축구팀', '농구팀', '배드민턴'],
    학술: ['프로그래밍', '기술개발', '스터디'],
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
            onClick={() => setIsClubModalOpen(true)} // 동아리 모달 열기
            className={`text-sm rounded-full px-3 py-1 ${
              isClubModalOpen
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

      {/* 사진 업로드 */}
      <div className="w-full h-72 flex items-center justify-center bg-gray-300 mb-4 relative">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Uploaded Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <label
              htmlFor="imageUpload"
              className="text-gray-500 text-3xl cursor-pointer"
            >
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
            <h2 className="text-md font-semibold mb-2">{title || '행사'}</h2>
            <p className="text-md text-gray-700 mb-6">행사를 등록하시겠습니까?</p>
            <div className="border-t border-gray-300 flex">
              <button
                className="w-1/2 py-2 text-gray-700 font-semibold border-r mt-1 border-gray-300"
                onClick={() => setIsModalOpen(false)}
              >
                취소
              </button>
              <button
                className="w-1/2 py-2 text-main01 font-semibold  mt-1"
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
        <div className="absolute top-24 left-0 flex justify-center items-center">
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

            <div className="flex flex-wrap gap-2">
              {['공연예술', '문화', '체육 1', '체육 2', '학술', '학술1', '학술2'].map((club, index) => (
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
