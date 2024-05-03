import React, { useState, useContext, createContext } from "react";

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  const changeLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "spanish" : "english"
    );
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};
