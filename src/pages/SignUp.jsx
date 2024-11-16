import React from 'react';
import logo from '../assets/logo.png'; 

function SignUp() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="mb-8">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      <form className="w-4/5 max-w-md flex flex-col space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            이메일
          </label>
          <input
            type="email"
            id="email"
            placeholder="이메일"
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main01"
          />
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            아이디
          </label>
          <input
            type="text"
            id="username"
            placeholder="아이디"
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main01"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            이름
          </label>
          <input
            type="text"
            id="name"
            placeholder="이름"
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main01"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            className="w-full p-3 rounded-md bg-gray-200 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-main01"
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
