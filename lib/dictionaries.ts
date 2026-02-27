import { en } from "@/dictionaries/en";
import { es } from "@/dictionaries/es";

export const dictionaries: Record<string, any> = {
  en,
  es,
};

export const getDictionary = (locale: string) =>
  dictionaries[locale] || dictionaries.en;
