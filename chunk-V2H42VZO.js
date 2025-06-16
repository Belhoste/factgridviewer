import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PQMJ5DTB.js";

// src/app/services/array-to-csv.service.ts
var _ArrayToCsvService = class _ArrayToCsvService {
  constructor() {
  }
  arrayToCsv(data) {
    return data.map(
      (row) => row.map(String).map((v) => v.replaceAll('"', '""')).join(",")
      // comma-separated
    ).join("\r\n");
  }
  downloadBlob(content, filename, contentType) {
    var blob = new Blob([content], { type: contentType });
    var url = URL.createObjectURL(blob);
    var pom = document.createElement("a");
    pom.href = url;
    pom.setAttribute("download", filename);
    pom.click();
  }
};
_ArrayToCsvService.\u0275fac = function ArrayToCsvService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ArrayToCsvService)();
};
_ArrayToCsvService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ArrayToCsvService, factory: _ArrayToCsvService.\u0275fac, providedIn: "root" });
var ArrayToCsvService = _ArrayToCsvService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArrayToCsvService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ArrayToCsvService
};
//# sourceMappingURL=chunk-V2H42VZO.js.map
