import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetTimeService {


  constructor() { }

  setDate(time, lang) {

    let year = time.substring(0, 4);
    let month = time.substring(5, 7);
    let day = parseInt(time.substring(8, 10), 10);

    let firstPart = "";

    if (month === "01") {
      if (lang === "en") { month = "January " };
      if (lang === "de") { month = "Januar " };
      if (lang === "fr") { month = "janvier " };
      if (lang === "es ") { month = "enero " };
    };
    if (month === "02") {
      if (lang === "en") { month = "February " };
      if (lang === "de") { month = "Februar " };
      if (lang === "fr") { month = "février " };
      if (lang === "es") { month = "febrero " };
    };

    if (month === "03") {
      if (lang === "en") { month = "March " };
      if (lang === "de") { month = "März " };
      if (lang === "fr") { month = "mars " };
      if (lang === "es") { month = "marzo " };

    };
    if (month === "04") {
      if (lang === "en") { month = "April " };
      if (lang === "de") { month = "April " };
      if (lang === "fr") { month = "avril " };
      if (lang === "es") { month = "abril " };
    };

    if (month === "05") {
      if (lang === "en") { month = "May " };
      if (lang === "de") { month = "Mai " };
      if (lang === "fr") { month = "mai " };
      if (lang === "es") { month = "mayo " };
    };

    if (month === "06") {
      if (lang === "en") { month = "June " };
      if (lang === "de") { month = "Juni " };
      if (lang === "fr") { month = "juin " };
      if (lang === "es") { month = "junio " };
    };

    if (month === "07") {
      if (lang === "en") { month = "July " };
      if (lang === "de") { month = "Juli " };
      if (lang === "fr") { month = "juillet, " };
      if (lang === "es") { month = "julio " };
    }

    if (month === "08") {
      if (lang === "en") { month = "August " };
      if (lang === "de") { month = "August " };
      if (lang === "fr") { month = "août " };
      if (lang === "es") { month = "agosto " };
    };


    if (month === "09") {
      if (lang === "en") { month = "September " };
      if (lang === "de") { month = "September " };
      if (lang === "fr") { month = "septembre " };
      if (lang === "es") { month = "septiembre " };
    };

    if (month === "10") {
      if (lang === "en") { month = "October " };
      if (lang === "de") { month = "Oktober " };
      if (lang === "fr") { month = "octobre " };
      if (lang === "es") { month = "octubre " };
    };

    if (month === "11") {
      if (lang === "en") { month = "November " };
      if (lang === "de") { month = "November " };
      if (lang === "fr") { month = "novembre " };
      if (lang === "es") { month = "noviembre " };
    };

    if (month === "12") {
      if (lang === "en") { month = "December " };
      if (lang === "de") { month = "Dezember " };
      if (lang === "fr") { month = "décembre " };
      if (lang === "es") { month = "diciembre " };
    };

    if (lang === "en" || lang === "fr" || lang === "es") { firstPart = day + " " + month };
    if (lang === "de") { firstPart = day + ". " + month };

    if (day === 0) {
      month === "00" ? firstPart = "" : firstPart = month
    }

    time = firstPart + year;

    return time
  }
}


