import React, { createContext, useState } from "react";

export const MainContext = createContext();

function Context({ children }) {
    const [isLogin, setIsLogin] = useState()
  return <MainContext.Provider value={{isLogin, setIsLogin}}>{children}</MainContext.Provider>;
}

export default Context;
