import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Verifica se o idioma está salvo no localStorage
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ? savedLanguage : "pt-BR";
  });

  useEffect(() => {
    // Salva o tema no localStorage
    localStorage.setItem("lang", language);
  }, [language]);

  const languageToggle = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "pt-BR" ? "en-US" : "pt-BR";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, languageToggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

const ButtonToggleLanguage = () => {
  const { language, languageToggle } = useContext(LanguageContext);

  return (
    <button onClick={languageToggle} className="bg-gray-200 p-2 rounded-md">
      {language === "pt-BR" ? "EN" : "PT"}
    </button>
  );
};

export { LanguageContext, LanguageProvider, ButtonToggleLanguage };
export default LanguageProvider;
