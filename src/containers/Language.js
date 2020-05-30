import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";
import { languagesList } from "../languages";

// create the language context with default selected language
const navigatorLanguage = navigator.language;
export const defaultLanguage = Object.keys(languagesList).some(l => l == navigatorLanguage) ? navigatorLanguage : "es";

export const LanguageContext = createContext({
  language: languagesList[defaultLanguage],
});

// it provides the language context to app
export function LanguageProvider(props) {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageContext.language);

  const provider = {
    language,
    setLanguage: (selectedLanguage) => {
      setLanguage(selectedLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  );
}

// get text according to id & current language
export function Text(props) {
  const languageContext = useContext(LanguageContext);
  var translatedText = languageContext?.language[props.tid];
  return translatedText ? translatedText : props.tid;
}

Text.propTypes = {
  tid: PropTypes.string,
};
