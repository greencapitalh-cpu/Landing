import { en } from "@/dictionaries/en";
import { es } from "@/dictionaries/es";
import { pt } from "@/dictionaries/pt";
import { fr } from "@/dictionaries/fr";
import { it } from "@/dictionaries/it";
import { de } from "@/dictionaries/de";
import { ja } from "@/dictionaries/ja";
import { zh } from "@/dictionaries/zh";
import { ar } from "@/dictionaries/ar";

export const dictionaries: Record<string, any> = {
  en,
  es,
  pt,
  fr,
  it,
  de,
  ja,
  zh,
  ar,
};

export const getDictionary = (locale: string) =>
  dictionaries[locale] || dictionaries.en;
