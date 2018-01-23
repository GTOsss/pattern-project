import i18next from 'i18next';
import en from './en.json';
import ru from './ru.json';

const resources = {
  en,
  ru,
};

const i18n = i18next
  .init({
    lng: 'ru',
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });


export default i18n;
