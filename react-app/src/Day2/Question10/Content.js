import React from 'react';
import {useLanguage } from './LanguageContext';

const Content = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <h1>{language === 'english' ? 'Hi How are you' : 'Hola, cómo estás'}</h1>
      <p>{language === 'english' ? 'My name is Tejas' : 'mi nombre es tejas'}</p>
      <button onClick={changeLanguage}>
        {language === 'english' ? 'Switch to Spanish' : 'Switch to English'}
      </button>
    </div>
  );
};

export default Content;
