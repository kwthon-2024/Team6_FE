import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/button/Button";
import InputField from "../components/InputField/InputField";

import "./SignIn.css";

const SignIn = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="sign-in">
      <div className="title-box">로고 타이틀</div>

      <div className="contents">
        <InputField
          title="학번"
          type="text"
          value={studentId}
          onChange={(event) => {
            setStudentId(event.target.value);
          }}
        />
        <InputField
          title="Klas 비밀번호"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>

      <Button
        onClick={() => {
          navigate("/pages/graduation");
        }}
      >
        로그인
      </Button>
    </div>
  );
};

export default SignIn;
