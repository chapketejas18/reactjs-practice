import Content from "./Content";
import { LanguageProvider } from "./LanguageContext";

export const ChangeLanguage = () => {
  return (
    <>
      <LanguageProvider>
        <Content />
      </LanguageProvider>
    </>
  );
};
