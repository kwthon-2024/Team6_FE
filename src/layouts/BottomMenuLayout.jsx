import { Outlet } from "react-router-dom";

import BottomMenu from "../components/bottomMenu/BottomMenu";

import "./BottomMenuLayout.css";

const BottomMenuLayout = () => {
  return (
    <div className="bottom-menu-layout f-dir-column j-content-between">
      <main>
        <Outlet />
      </main>
      <BottomMenu />
    </div>
  );
};

export default BottomMenuLayout;
