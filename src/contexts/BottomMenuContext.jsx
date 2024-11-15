import React, { createContext, useContext, useState } from "react";

// Context 생성
const BottomMenuContext = createContext();

export const useBottomMenu = () => useContext(BottomMenuContext);

const BottomMenuProvider = ({ children }) => {
  const [pageMenu, setPageMenu] = useState(1);

  return (
    <BottomMenuContext.Provider value={{ pageMenu, setPageMenu }}>
      {children}
    </BottomMenuContext.Provider>
  );
};

export default BottomMenuProvider;
