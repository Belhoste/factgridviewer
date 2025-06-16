import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PQMJ5DTB.js";

// src/app/services/set-language.service.ts
var _SetLanguageService = class _SetLanguageService {
  constructor() {
  }
  /** Utility: get the value for a field in the preferred language, with fallback */
  getLangValue(obj, lang, fallbackOrder = ["en", "fr", "de", "es", "zh", "zh-hans", "zh-hant", "it", "hu"]) {
    if (!obj)
      return void 0;
    if (lang === "zh") {
      if (obj["zh"])
        return obj["zh"];
      if (obj["zh-cn"])
        return obj["zh-cn"];
      if (obj["zh-hans"])
        return obj["zh-hans"];
      if (obj["zh-hant"])
        return obj["zh-hant"];
    }
    if (lang === "zh-hans") {
      if (obj["zh-hans"])
        return obj["zh-hans"];
      if (obj["zh"])
        return obj["zh"];
      if (obj["zh-hant"])
        return obj["zh-hant"];
    }
    if (lang === "zh-hant") {
      if (obj["zh-hant"])
        return obj["zh-hant"];
      if (obj["zh"])
        return obj["zh"];
      if (obj["zh-hans"])
        return obj["zh-hans"];
    }
    if (obj[lang])
      return obj[lang];
    for (const code of fallbackOrder) {
      if (obj[code])
        return obj[code];
    }
    const keys = Object.keys(obj);
    return keys.length > 0 ? obj[keys[0]] : void 0;
  }
  /** Utility: get aliases as array of strings for the preferred language */
  getAliases(obj, lang, fallbackOrder = ["en", "fr", "de", "es", "it", "hu", "zh"]) {
    const aliasesObj = obj && obj[lang];
    return Array.isArray(aliasesObj) ? aliasesObj.map((a) => a.value) : [];
  }
  /** Returns an array of items with id, label, description, aliases, claims, sitelinks, datatype */
  item(res, lang) {
    if (!Array.isArray(res))
      return [];
    return res.map((item) => {
      const labelObj = this.getLangValue(item.labels, lang);
      const descObj = this.getLangValue(item.descriptions, lang);
      const aliases = this.getAliases(item.aliases, lang);
      const label = labelObj?.value ?? void 0;
      const description = descObj?.value ?? void 0;
      const result = {
        id: item.id,
        label,
        claims: item.claims ?? {},
        sitelinks: item.sitelinks,
        datatype: item.datatype
      };
      if (description)
        result.description = description;
      if (aliases.length > 0)
        result.aliases = aliases;
      return result;
    });
  }
  /** Returns an array of items with id, label, description, aliases, externalLink */
  item2(res, lang) {
    if (!Array.isArray(res))
      return [];
    return res.map((item) => {
      const labelObj = this.getLangValue(item.labels, lang);
      const descObj = this.getLangValue(item.descriptions, lang);
      const aliases = this.getAliases(item.aliases, lang);
      const label = labelObj?.value ?? void 0;
      const description = descObj?.value ?? void 0;
      let externalLink;
      if (item.datatype === "external-id" && item.claims?.P236?.[0]?.mainsnak?.datavalue?.value) {
        externalLink = item.claims.P236[0].mainsnak.datavalue.value;
      }
      const result = {
        id: item.id,
        label,
        externalLink
      };
      if (description)
        result.description = description;
      if (aliases.length > 0)
        result.aliases = aliases;
      return result;
    });
  }
};
_SetLanguageService.\u0275fac = function SetLanguageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SetLanguageService)();
};
_SetLanguageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SetLanguageService, factory: _SetLanguageService.\u0275fac, providedIn: "root" });
var SetLanguageService = _SetLanguageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetLanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SetLanguageService
};
//# sourceMappingURL=chunk-G6T4JQVM.js.map
