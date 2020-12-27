import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import mainEn from './texts/mainEn';
import mainHu from './texts/mainHu';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns: Object.keys(mainEn),
    resources: {
      en: {
        main: mainEn,
      },
      hu: {
        main: mainHu,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
