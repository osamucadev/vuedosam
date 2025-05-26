import { createI18n } from "vue-i18n";
import en from "@/i18n/locales/en";
import es from "@/i18n/locales/es";
import ptBR from "@/i18n/locales/pt-BR";

const savedLocale = localStorage.getItem("locale");
const browserLocale = navigator.language.split("-")[0];

const i18n = createI18n({
  legacy: false,
  locale:
    savedLocale ||
    (["pt", "es", "en"].includes(browserLocale) ? browserLocale : "en"),
  fallbackLocale: "en",
  messages: {
    en,
    es,
    "pt-BR": ptBR,
  },
});

export default i18n;
