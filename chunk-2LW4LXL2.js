import {
  ɵɵdefineInjectable
} from "./chunk-BY5FKXJT.js";

// src/app/services/array-to-csv.service.ts
var ArrayToCsvService = class _ArrayToCsvService {
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
  static {
    this.\u0275fac = function ArrayToCsvService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ArrayToCsvService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ArrayToCsvService, factory: _ArrayToCsvService.\u0275fac, providedIn: "root" });
  }
};

export {
  ArrayToCsvService
};
//# sourceMappingURL=chunk-2LW4LXL2.js.map
