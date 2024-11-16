import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';

function SignUp() {
  const [formData, setFormData] = useState({
    user_email: '',
    user_id: '',
    user_name: '',
    user_password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://112.152.14.116:1116/register', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      if (response.status === 200) {
        alert('회원가입이 성공했습니다!');
        window.location.href = '/login'; // 로그인 페이지로 이동
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="mb-8">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      <form className="w-4/5 max-w-md flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="user_email" className="text-sm font-medium text-gray-700">이메일</label>
          <input
            type="email"
            id="user_email"
            placeholder="이메일"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main01"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="user_name" className="text-sm font-medium text-gray-700">이름</label>
          <input
            type="text"
            id="user_name"
            placeholder="이름"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main01"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="user_id" className="text-sm font-medium text-gray-700">아이디</label>
          <input
            type="text"
            id="user_id"
            placeholder="아이디"
            value={formData.user_id}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main01"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="user_password" className="text-sm font-medium text-gray-700">비밀번호</label>
          <input
            type="password"
            id="user_password"
            placeholder="비밀번호"
            value={formData.user_password}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main01"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-main01 text-white py-3 rounded-md font-bold text-lg hover:bg-main01 transition"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUp;
