// service to change the rendering of some statements with a qualifier "role of object"

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleOfObjectRenderingService {

  constructor() { }
  
  label:string;
  id:string;
  datatype:string;
  mainsnak:any;
  u:any;
  R1:any[];
  R2:any[];
  R3:any[];
  R4: any[];

  transformProperties(re) {
    this.roleOfObject(re);
    this.transformP248(re);
  }


  roleOfObject(re) {
    // List of supported roles
    const roleConfig = [
      { id: "Q468366" }, // Married name
      { id: "Q266694" }, // Birth name
      { id: "Q28006" },  // Name variant
      { id: "Q10387" }   // Replacement name
      // Add more roles here if needed
    ];

    // Initialize arrays for each role
    for (const { id } of roleConfig) {
      if (!Array.isArray(re.claims[id])) {
        re.claims[id] = [];
      }
    }

    // Process claims for target properties
    for (const prop of ["P247", "P208"]) {
      const claimsArray = re.claims[prop];
      if (!Array.isArray(claimsArray)) continue;

      for (let i = 0; i < claimsArray.length; i++) {
        const snak = claimsArray[i];
        let processed = false;

        if (snak.qualifiers2) {
          for (const qualif2 of snak.qualifiers2) {
            if (qualif2.id === "P820" && Array.isArray(qualif2.display)) {
              for (const role of qualif2.display) {
                // Only process supported roles
                if (roleConfig.some(r => r.id === role.id)) {
                  // Set property metadata (label/description) if not already set
                  if (!re.claims[role.id].id) re.claims[role.id].id = role.id;
                  if (!re.claims[role.id].label) re.claims[role.id].label = role.label;
                  if (!re.claims[role.id].description) re.claims[role.id].description = role.description;

                  // Add value to the role property
                  re.claims[role.id].push({
                    mainsnak: {
                      property: role.id,
                      datatype: snak.mainsnak.datatype,
                      label: snak.mainsnak.label,
                      description: snak.mainsnak.description,
                      datavalue: {
                        value: { id: snak.mainsnak.datavalue?.value?.id }
                      }
                    },
                    id: role.id,
                    label: role.label,
                    description: role.description
                  });
                  processed = true;
                }
              }
              // All P820 qualifiers processed
              qualif2.display = [];
            }
          }
          // Remove P820 qualifier from qualifiers2 and qualifiers
          snak.qualifiers2 = snak.qualifiers2.filter(q => q.id !== "P820");
          if (snak.qualifiers && snak.qualifiers["P820"]) {
            delete snak.qualifiers["P820"];
          }
          // Remove statement if no more qualifiers
          const hasQualifiers =
            (snak.qualifiers && Object.keys(snak.qualifiers).length > 0) ||
            (snak.qualifiers2 && snak.qualifiers2.length > 0);
          if (!hasQualifiers && processed) {
            claimsArray.splice(i, 1);
            i--;
          }
        }
      }
    }
  }



  private transformP248(re) {
    for (const prop in re.claims) {
      if (prop !== "P248") continue;
      const statements = re.claims[prop];
      const values: { label: string, id: string, order: number, extra: string }[] = [];
      for (const statement of statements) {
        let label = statement.mainsnak.label || statement.mainsnak.datavalue?.value || "";
        let id = statement.mainsnak.datavalue?.value?.id;
        let url = id ? `https://www.wikidata.org/wiki/${id}` : null;
        let order = Number.MAX_SAFE_INTEGER;
        let extra = "";

        // Cherche P499 (ordre)
        if (statement.qualifiers && statement.qualifiers["P499"] && statement.qualifiers["P499"][0]?.datavalue?.value) {
          order = parseInt(statement.qualifiers["P499"][0].datavalue.value.amount, 10);
        }

        // Cherche autres qualifiers (ex: P820)
        for (const qid in statement.qualifiers) {
          if (qid !== "P499") {
            const q = statement.qualifiers[qid][0];
            if (q?.datavalue?.value) {
              extra += ` (${q.datavalue.value})`;
            }
          }
        }

        values.push({ label, id, order, extra });
      }

      // Trie par ordre, puis place les sans ordre à la fin
      values.sort((a, b) => a.order - b.order);

      // Stocke le tableau aligné dans claims
      re.claims.P248_aligned = values;

      // Nettoyage des qualifiers utilisés
  /*    for (const statement of statements) {
        if (statement.qualifiers) {
          delete statement.qualifiers["P499"];
          delete statement.qualifiers["P820"];
        }
        if (statement.qualifiers2) {
          statement.qualifiers2 = statement.qualifiers2.filter(q => q.id !== "P499" && q.id !== "P820");
        }
      } */
    }
  }
  

}
    



