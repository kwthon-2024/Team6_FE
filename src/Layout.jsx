import React from "react";
import { Outlet } from "react-router-dom";

import "./Layout.css";

/**
 * 화면 크기 레이아웃
 */
function Layout() {
  return (
    <div className="layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
