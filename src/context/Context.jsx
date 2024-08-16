import React, { createContext, useState } from "react";

export const MainContext = createContext();

function Context({ children }) {
  const [isLogin, setIsLogin] = useState(
    JSON.parse(window.localStorage.getItem("isLogin")) || false
  );

  const LogOut = () => {
    setShowIsLogOutModal(false);
    setTimeout(() => {
      window.localStorage.clear();
      window.location.reload();
    }, 700);
  };

  const [showIsLogOutModal, setShowIsLogOutModal] = useState(false);

  window.localStorage.setItem("isLogin", JSON.stringify(isLogin));
  return (
    <MainContext.Provider
      value={{ isLogin, setIsLogin, showIsLogOutModal, LogOut, setShowIsLogOutModal }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default Context;
