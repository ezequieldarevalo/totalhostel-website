import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Tus traducciones
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';
import translationHE from './locales/he/translation.json';

const resources = {
  es: { translation: translationES },
  en: { translation: translationEN },
  he: { translation: translationHE },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React ya hace esto
    },
  });

export default i18n;
