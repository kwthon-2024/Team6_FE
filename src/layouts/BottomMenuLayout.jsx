import { Outlet } from "react-router-dom";

import BottomMenu from "../components/bottomMenu/BottomMenu";

import "./BottomMenuLayout.css";
import BottomMenuProvider from "../contexts/BottomMenuContext";

const BottomMenuLayout = () => {
  return (
    <BottomMenuProvider>
      <div className="bottom-menu-layout f-dir-column j-content-between">
        <main>
          <Outlet />
        </main>
        <BottomMenu />
      </div>
    </BottomMenuProvider>
  );
};

export default BottomMenuLayout;
