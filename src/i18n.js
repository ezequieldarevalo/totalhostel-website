import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  es: { translation: translationES },
  en: { translation: translationEN },
};

// Normaliza códigos raros a algo que tu app soporte
function normalizeLocale(raw) {
  if (!raw) return 'es';
  const v = String(raw).toLowerCase().replace('_', '-');
  // fuerza es-419 / es-la a 'es'
  if (v === 'es-419' || v === 'es-la') return 'es';
  if (v.startsWith('es')) return 'es';
  return 'en';
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    nonExplicitSupportedLngs: true,   // si llega es-AR -> usa 'es'
    cleanCode: true,                  // minúsculas, guiones
    load: 'languageOnly',             // descarta región (es-AR -> es)
    detection: {
      // clave: convierte cualquier detectado (incl. es-419) a 'es' o 'en'
      convertDetectedLanguage: normalizeLocale,
      // (opcional) orden/caché si ya los usás:
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// por las dudas, si el detector ya fijó es-419, lo corregimos al iniciar
i18n.on('initialized', () => {
  const fixed = normalizeLocale(i18n.language);
  if (i18n.lan
