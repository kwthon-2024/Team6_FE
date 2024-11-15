import graduation from "../../assets/graduation.svg";
import graduation1 from "../../assets/graduation1.svg";
import map from "../../assets/map.svg";
import people from "../../assets/people.svg";

import "./BottomMenu.css";

const BottomMenu = () => {
  return (
    <div className="bottom-menu j-content-between a-items-center">
      <div className="f-dir-column j-content-center">
        <img src={map} alt="로드맵" />
        <p className="p-16-600 c-grey">로드맵</p>
      </div>
      <div className="f-dir-column j-content-between a-items-center">
        <div className="graduate j-content-center">
          <img src={graduation} alt="졸업요건" />
          <img src={graduation1} alt="졸업요건" />
        </div>
        <p className="p-16-600 c-grey">졸업요건</p>
      </div>
      <div className="f-dir-column j-content-center a-items-center">
        <img src={people} alt="동아리" />
        <p className="p-16-600 c-grey">동아리</p>
      </div>
    </div>
  );
};

export default BottomMenu;
