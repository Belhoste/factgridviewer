import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetTimeService {

  constructor() { }

  private months: { [lang: string]: string[] } = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    fr: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    it: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
  };

  private daySuffix(day: string, lang: string): string {
    if (day === "00") return "";
    if (lang === "en") return day === "01" ? "1st" : String(Number(day));
    if (lang === "fr") return day === "01" ? "1er" : String(Number(day));
    return String(Number(day));
  }

  setDate(time: string, lang: string): string {
    if (!time) return "";

    const era = time.charAt(0);
    let date = time.substring(1);
    let year = date.substring(0, 4).replace(/^0+/, '') || "0";
    const monthNum = date.substring(5, 7);
    const dayNum = date.substring(8, 10);

    // Format day and month
    const day = this.daySuffix(dayNum, lang);
    const monthIdx = parseInt(monthNum, 10) - 1;
    const month = monthNum !== "00" && this.months[lang]?.[monthIdx] ? this.months[lang][monthIdx] : "";

    // Date string by language
    let firstPart = "";
    if (day && month) {
      if (lang === "de") firstPart = `${day}. ${month} `;
      else if (lang === "es") firstPart = `${day} de ${month} de `;
      else firstPart = `${day} ${month} `;
    } else if (month) {
      firstPart = `${month} `;
    }

    let result = `${firstPart}${year}`;

    // Era suffixes
    if (era === "-") {
      const suffixes = { en: "BCE", de: "v. d. Z.", fr: "AEC", es: "a.e.c.", it: "a. C." };
      result += " " + (suffixes[lang] || "BCE");
    } else if (era === "+" && Number(year) < 500) {
      const suffixes = { en: "CE", de: "n. d. Z.", fr: "EC", es: "e.c.", it: "CE" };
      result += " " + (suffixes[lang] || "CE");
    }

    return result.trim();
  }
}
