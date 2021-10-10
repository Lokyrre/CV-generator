import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import fr from "./translations/fr/fr.json";
import en from "./translations/en/en.json";

console.log(i18n);

i18n.use(detector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: en
            },
            fr: {
                translation: fr
            }
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;