import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';

function Login() {
  const [formData, setFormData] = useState({
    user_id: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://112.152.14.116:1116/token', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      if (response.status === 200) {
        const { access_token } = response.data;
        localStorage.setItem('access_token', access_token); // 로컬 스토리지에 토큰 저장
        alert('로그인 성공!');
        window.location.href = '/pages/graduation';
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="mb-8">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      <form className="w-4/5 max-w-md flex flex-col space-y-4" onSubmit={handleSubmit}>
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
          <label htmlFor="password" className="text-sm font-medium text-gray-700">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main01"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-main01 text-white py-3 rounded-md font-bold text-lg hover:bg-main01 transition"
        >
          로그인
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-500">
        계정이 없으신가요? <a href="/signup" className="text-main01 font-semibold hover:underline">회원가입</a>
      </p>
    </div>
  );
}

export default Login;
