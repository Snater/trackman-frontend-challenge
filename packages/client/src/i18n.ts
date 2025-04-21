import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {z} from 'zod';
import {zodI18nMap} from 'zod-i18n-map';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		load: 'languageOnly',
		ns: ['translation', 'zod'],
		supportedLngs: ['en'],
	});

z.setErrorMap(zodI18nMap);

export default i18n;
