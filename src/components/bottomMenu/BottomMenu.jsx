import { useNavigate } from "react-router-dom";

import { useBottomMenu } from "../../contexts/BottomMenuContext";

import graduation from "../../assets/graduation.svg";
import graduation1 from "../../assets/graduation1.svg";
import map from "../../assets/map.svg";
import people from "../../assets/people.svg";

import "./BottomMenu.css";

const BottomMenu = () => {
  const { pageMenu, setPageMenu } = useBottomMenu();
  const navigate = useNavigate();

  return (
    <div className="bottom-menu j-content-between a-items-center">
      <div
        className="f-dir-column j-content-center c-pointer"
        onClick={() => {
          navigate("/pages/roadmap");
          setPageMenu(0);
        }}
      >
        <img src={map} alt="로드맵" className={pageMenu === 0 ? "selected" : ""} />
        <p className={`p-16-600 ${pageMenu === 0 ? `c-crimson-red` : `c-grey`}`}>로드맵</p>
      </div>
      <div
        className="f-dir-column j-content-between a-items-center c-pointer"
        onClick={() => {
          navigate("/pages/graduation");
          setPageMenu(1);
        }}
      >
        <div className="graduate j-content-center">
          <img src={graduation} alt="졸업요건" className={pageMenu === 1 ? "selected" : ""} />
          <img src={graduation1} alt="졸업요건" className={pageMenu === 1 ? "selected" : ""} />
        </div>
        <p className={`p-16-600 ${pageMenu === 1 ? `c-crimson-red` : `c-grey`}`}>졸업요건</p>
      </div>
      <div
        className="f-dir-column j-content-center a-items-center c-pointer"
        onClick={() => {
          navigate("/pages/clubs");
          setPageMenu(2);
        }}
      >
        <img src={people} alt="동아리" className={pageMenu === 2 ? "selected" : ""} />
        <p className={`p-16-600 ${pageMenu === 2 ? `c-crimson-red` : `c-grey`}`}>동아리</p>
      </div>
    </div>
  );
};

export default BottomMenu;
