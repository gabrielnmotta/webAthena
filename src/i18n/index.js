import i18n from 'i18next';
import {initReactI18next} from 'react-i18next'
import PTBR from './locales/pt/translation.json'
import ENUS from './locales/en/translation.json'
import FR from './locales/fr/translation.json'
import ES from './locales/es/translation.json'

const resources = {
    'pt-BR': PTBR,
    'en-us': ENUS,
    'fr':FR,
    'es': ES
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng:navigator.language,
        interpolation: {
            escapeValue: false,
        }
    })

export default i18n;