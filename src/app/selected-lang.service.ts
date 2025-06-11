import { Injectable } from '@angular/core';
import { TRANSLATIONS } from './config/translations.config';

@Injectable({
  providedIn: 'root'
})
export class SelectedLangService {
  /**
   * Ordre de fallback des langues supportées.
   * Ajoutez ou retirez des codes selon vos besoins.
   */
  private fallbackOrder: string[] = ['en', 'fr', 'de', 'es', 'it', 'zh', 'hu'];

  /**
   * Langue sélectionnée :
   * - d'abord celle du localStorage si présente,
   * - sinon celle du navigateur si supportée,
   * - sinon la première du fallback (anglais).
   */
  selectedLang: string;

  constructor() {
    const storedLang = localStorage['selectedLang'];
    const browserLang = navigator.language?.split('-')[0]; // ex: 'fr' pour 'fr-FR'
    if (storedLang) {
      this.selectedLang = storedLang;
    } else if (browserLang && this.fallbackOrder.includes(browserLang)) {
      this.selectedLang = browserLang;
    } else {
      this.selectedLang = this.fallbackOrder[0];
    }
  }

  /**
   * Récupère la traduction pour une clé et la langue courante.
   * Utilise le fallback si la traduction n'existe pas dans la langue demandée.
   */
  getTranslation(key: string, lang?: string, fallbackOrder: string[] = this.fallbackOrder): string | undefined {
    const language = lang ?? this.selectedLang;
    const entry = TRANSLATIONS[key];
    if (!entry) return undefined;
    if (entry[language]) return entry[language];
    for (const code of fallbackOrder) {
      if (entry[code]) return entry[code];
    }
    // fallback: première langue disponible
    const keys = Object.keys(entry);
    return keys.length > 0 ? entry[keys[0]] : undefined;
  }

  /**
   * Permet de changer la langue courante et de la stocker.
   */
  setLang(lang: string) {
    if (this.fallbackOrder.includes(lang)) {
      this.selectedLang = lang;
      localStorage['selectedLang'] = lang;
    }
  }
}
