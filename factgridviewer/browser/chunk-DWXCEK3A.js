import {
  ɵɵdefineInjectable
} from "./chunk-FLLM7YOM.js";

// src/app/services/set-language.service.ts
var SetLanguageService = class _SetLanguageService {
  constructor() {
    this.aliasPush = function aliasPush(a) {
      let c = [];
      if (a !== void 0) {
        for (let j = 0; j < a.length; j++) {
          c.push(a[j].value);
        }
      }
      return c;
    };
  }
  item(res, lang) {
    let arr = [];
    let aliases = [];
    for (let i = 0; i < res.length; i++) {
      let propertiesLang = this.changeLang(lang, res[i]);
      aliases = this.aliasPush(propertiesLang[4]);
      if (propertiesLang[0] !== void 0) {
        if (propertiesLang[2] === void 0 && propertiesLang[4] === void 0) {
          arr.push({ id: res[i].id, label: propertiesLang[1], claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype });
        } else if (propertiesLang[2] === void 0 && propertiesLang[4] !== void 0) {
          arr.push({ id: res[i].id, label: propertiesLang[1], aliases, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype });
        } else if (propertiesLang[0] === void 0 && propertiesLang[2] !== void 0) {
          arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3], claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype });
        } else if (propertiesLang[0] !== void 0 && propertiesLang[2] !== void 0) {
          arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3], aliases, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype });
        }
      } else {
        if (res[i].label === void 0) {
          break;
        } else if (res[i].descriptions.en === void 0 && res[i].aliases.en === void 0) {
          arr.push({ id: res[i].id, label: res[i].labels.en.value, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype });
        } else if (res[i].descriptions.en === void 0 && res[i].aliases.en !== void 0) {
          arr.push({ id: res[i].id, label: res[i].labels.en.value, aliases, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype });
        } else if (res[i].aliases.en !== void 0 && res[i].descriptions.en !== void 0) {
          arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value, aliases, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype });
        } else
          arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype });
      }
    }
    return arr;
  }
  item2(res, lang) {
    let arr = [];
    if (res === void 0) {
      res = [];
    }
    ;
    for (let i = 0; i < res.length; i++) {
      let aliases = [];
      let propertiesLang = this.changeLang(lang, res[i]);
      aliases = this.aliasPush(propertiesLang[4]);
      let externalLinkValue;
      if (res[i].datatype = "external-id") {
        if (res[i].claims.P236 !== void 0) {
          externalLinkValue = res[i].claims.P236[0].mainsnak.datavalue.value;
        }
      }
      if (propertiesLang[0] !== void 0 && propertiesLang[2] === void 0 && propertiesLang[4] === void 0) {
        arr.push({ id: res[i].id, label: propertiesLang[1], externalLink: externalLinkValue });
      } else if (propertiesLang[0] !== void 0 && propertiesLang[2] !== void 0 && propertiesLang[4] !== void 0) {
        arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3], aliases, externalLink: externalLinkValue });
      } else if (propertiesLang[0] !== void 0 && propertiesLang[2] !== void 0 && propertiesLang[4] === void 0) {
        arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3], externalLink: externalLinkValue });
      } else if (propertiesLang[0] !== void 0 && propertiesLang[2] === void 0 && propertiesLang[4] !== void 0) {
        arr.push({ id: res[i].id, label: propertiesLang[1], aliases, externalLink: externalLinkValue });
      } else if (propertiesLang[0] === void 0 && res[i].descriptions.en === void 0 && res[i].aliases.en === void 0) {
        arr.push({ id: res[i].id, label: res[i].labels.en.value, externalLink: externalLinkValue });
      } else if (propertiesLang[0] === void 0 && res[i].descriptions.en !== void 0 && res[i].aliases.en !== void 0) {
        arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value, aliases, externalLink: externalLinkValue });
      } else if (propertiesLang[0] === void 0 && res[i].descriptions.en === void 0 && res[i].aliases.en !== void 0) {
        arr.push({ id: res[i].id, label: res[i].labels.en.value, aliases, externalLink: externalLinkValue });
      } else if (propertiesLang[0] === void 0 && res[i].descriptions.en !== void 0 && res[i].aliases.en === void 0) {
        arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value, externalLink: externalLinkValue });
      }
    }
    ;
    return arr;
  }
  changeLang(lang, res) {
    let labelLang;
    let labelValue;
    let descriptionLang;
    let descriptionValue;
    let aliasesLang;
    let aliasesValue;
    if (res.labels.en !== void 0) {
      labelLang = res.labels.en;
      labelValue = res.labels.en.value;
    } else {
      if (res.labels.fr !== void 0) {
        labelLang = res.labels.fr;
        labelValue = res.labels.fr.value;
      } else {
        if (res.labels.de !== void 0) {
          labelLang = res.labels.de;
          labelValue = res.labels.de.value;
        } else {
          labelLang = "undefined";
          labelValue = "undefined";
        }
      }
    }
    if (res.descriptions.en !== void 0) {
      descriptionLang = res.descriptions.en;
      descriptionValue = res.descriptions.en.value;
    }
    if (res.aliases.en !== void 0) {
      aliasesLang = res.aliases.en;
      aliasesValue = res.aliases.en[0].value;
    }
    if (lang === "fr") {
      aliasesLang = void 0;
      if (res.labels.fr !== void 0) {
        labelLang = res.labels.fr;
        labelValue = res.labels.fr.value;
      }
      if (res.descriptions.fr !== void 0) {
        descriptionLang = res.descriptions.fr;
        descriptionValue = res.descriptions.fr.value;
      }
      if (res.aliases.fr !== void 0) {
        aliasesLang = res.aliases.fr;
        aliasesValue = res.aliases.fr[0].value;
      }
    } else if (lang === "de") {
      aliasesLang = void 0;
      if (res.labels.de !== void 0) {
        labelLang = res.labels.de;
        labelValue = res.labels.de.value;
        if (res.descriptions.de !== void 0) {
          descriptionLang = res.descriptions.de;
          descriptionValue = res.descriptions.de.value;
        }
        if (res.aliases.de !== void 0) {
          aliasesLang = res.aliases.de;
          aliasesValue = res.aliases.de[0].value;
        }
      }
    }
    if (lang === "es") {
      aliasesLang = void 0;
      if (res.labels.es !== void 0) {
        labelLang = res.labels.es;
        labelValue = res.labels.es.value;
      }
      if (res.descriptions.es !== void 0) {
        descriptionLang = res.descriptions.es;
        descriptionValue = res.descriptions.es.value;
      }
      if (res.aliases.es !== void 0) {
        aliasesLang = res.aliases.es;
        aliasesValue = res.aliases.es[0].value;
      }
    }
    if (lang === "it") {
      aliasesLang = void 0;
      if (res.labels.it !== void 0) {
        labelLang = res.labels.it;
        labelValue = res.labels.it.value;
      }
      if (res.descriptions.it !== void 0) {
        descriptionLang = res.descriptions.it;
        descriptionValue = res.descriptions.it.value;
      }
      if (res.aliases.it !== void 0) {
        aliasesLang = res.aliases.it;
        aliasesValue = res.aliases.it[0].value;
      }
    }
    if (lang === "hu") {
      aliasesLang = void 0;
      if (res.labels.hu !== void 0) {
        labelLang = res.labels.hu;
        labelValue = res.labels.hu.value;
      }
      if (res.descriptions.hu !== void 0) {
        descriptionLang = res.descriptions.hu;
        descriptionValue = res.descriptions.hu.value;
      }
      if (res.aliases.hu !== void 0) {
        aliasesLang = res.aliases.hu;
        aliasesValue = res.aliases.hu[0].value;
      }
    }
    return [labelLang, labelValue, descriptionLang, descriptionValue, aliasesLang, aliasesValue];
  }
  static {
    this.\u0275fac = function SetLanguageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetLanguageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SetLanguageService, factory: _SetLanguageService.\u0275fac, providedIn: "root" });
  }
};

export {
  SetLanguageService
};
//# sourceMappingURL=chunk-DWXCEK3A.js.map
