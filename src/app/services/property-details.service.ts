import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsService {

  constructor() { }

  addClaimPropertyDetails(properties, re, itemProperties) {
    for (let i = 0; i < itemProperties.length; i++) {
      // Vérifie que la propriété existe et est un tableau non vide
      if (!re.claims[itemProperties[i]] || !Array.isArray(re.claims[itemProperties[i]]) || re.claims[itemProperties[i]].length === 0) {
        continue;
      }
      for (let j = 0; j < properties.length; j++) {
        if (itemProperties[i] === properties[j].id) {
          re.claims[itemProperties[i]].id = properties[j].id;
          re.claims[itemProperties[i]].label = properties[j].label;
          if (properties[j].description !== undefined)
            re.claims[itemProperties[i]].description = properties[j].description;
          if (properties[j].aliases !== undefined)
            re.claims[itemProperties[i]].aliases = properties[j].aliases;
          if (properties[j].externalLink !== undefined)
            re.claims[itemProperties[i]].externalLink = properties[j].externalLink;
        }
      }
    }
    return re;
  }


  addQualifierPropertyDetails(properties, re, itemProperties) {
    let qualifierPropertyArray = [];
    for (let i = 0; i < itemProperties.length; i++) {
      // Vérifie que la propriété existe et est un tableau non vide
      if (!re.claims[itemProperties[i]] || !Array.isArray(re.claims[itemProperties[i]]) || re.claims[itemProperties[i]].length === 0) {
        continue;
      }
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].qualifiers === undefined) { continue }
        qualifierPropertyArray = Object.keys(re.claims[itemProperties[i]][j].qualifiers);
        let qualifiersArray = Object.values(re.claims[itemProperties[i]][j].qualifiers);
        for (let l = 0; l < properties.length; l++) {
          for (let k = 0; k < qualifierPropertyArray.length; k++) {
            let prop = qualifierPropertyArray[k]
            if (qualifiersArray[k][0].property === properties[l].id) {
              re.claims[itemProperties[i]][j].qualifiers[prop].label = properties[l].label;
              if (properties[l].description !== undefined)
                re.claims[itemProperties[i]][j].qualifiers[prop].description = properties[l].description;
              if (properties[l].aliases !== undefined)
                re.claims[itemProperties[i]][j].qualifiers[prop].aliases = properties[l].aliases;
              if (properties[l].externalLink !== undefined)
                re.claims[itemProperties[i]][j].qualifiers[prop].externalLink = properties[l].externalLink;
            }
          }
        }
      }
    }
    return [re, qualifierPropertyArray]
  }


  /**
  * Ajoute à chaque statement un tableau qualifiers2 enrichi avec les métadonnées
  * (id, label, description, aliases, externalLink) des propriétés de qualifiers,
  * en respectant l'ordre défini dans "qualifiers-order".
  *
  * @param properties      Liste des propriétés enrichies (avec label, description, etc.)
  * @param re              L'objet item à enrichir
  * @param itemProperties  Liste des propriétés à traiter (ex: ["P247", ...])
  * @returns               L'objet item enrichi
  */


  addQualifier2PropertyDetails(properties, re, itemProperties) {
    for (let i = 0; i < itemProperties.length; i++) {
      const prop = itemProperties[i];
      if (!re.claims[prop]) continue;

      for (let j = 0; j < re.claims[prop].length; j++) {
        const statement = re.claims[prop][j];
        if (!statement.qualifiers) continue;

        statement.qualifiers2 = [];
        const qualifierOrder = statement["qualifiers-order"];
        if (!Array.isArray(qualifierOrder)) continue;

        for (let k = 0; k < qualifierOrder.length; k++) {
          const qualifierId = qualifierOrder[k];
          const propertyMeta = properties.find(p => p.id === qualifierId);

          // Toujours créer un nouvel objet pour chaque qualifier2
          const qualifier2Obj = {
            id: propertyMeta ? propertyMeta.id : qualifierId,
            label: propertyMeta ? propertyMeta.label : qualifierId,
            description: propertyMeta ? propertyMeta.description : "",
            aliases: propertyMeta ? propertyMeta.aliases : [],
            externalLink: propertyMeta ? propertyMeta.externalLink : undefined,
            value: {
              id: undefined,
              time: undefined,
              string: undefined,
              label: undefined,
              description: undefined,
              aliases: undefined
            }
          };

          statement.qualifiers2.push(qualifier2Obj);
        }
      }
    }
    return re;
  }




  addReferencePropertyDetails(properties, re, itemProperties) {
    for (let i = 0; i < itemProperties.length; i++) {
      // Vérifie que la propriété existe et est un tableau non vide
      if (!re.claims[itemProperties[i]] || !Array.isArray(re.claims[itemProperties[i]]) || re.claims[itemProperties[i]].length === 0) {
        continue;
      }
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].references === undefined) { continue }
        for (let k = 0; k < re.claims[itemProperties[i]][j].references.length; k++) {
          let props = Object.keys(re.claims[itemProperties[i]][j].references[k].snaks);
          for (let l = 0; l < props.length; l++) {
            for (let m = 0; m < properties.length; m++) {
              if (props[l] === properties[m].id) {
                if (re.claims[itemProperties[i]][j].references[k].snaks[props[l]][0] !== undefined) {
                  re.claims[itemProperties[i]][j].references[k].snaks[props[l]][0].label = properties[m].label;
                  if (properties[m].description !== undefined)
                    re.claims[itemProperties[i]][j].references[k].snaks[props[l]][0].description = properties[m].description;
                  if (properties[m].aliases !== undefined)
                    re.claims[itemProperties[i]][j].references[k].snaks[props[l]][0].aliases = properties[m].aliases;
                  if (properties[m].externalLink !== undefined)
                    re.claims[itemProperties[i]][j].references[k].snaks[props[l]][0].externalLink = properties[m].externalLink;
                }
              }
            }
          }
        }
      }
    }
    return re;
  }

  addReference2PropertyDetails(properties, re, itemProperties) {
    let references2PropertyArray = [];
    let references2: any[] = [];
    for (let i = 0; i < itemProperties.length; i++) {
      // Vérifie que la propriété existe et est un tableau non vide
      if (!re.claims[itemProperties[i]] || !Array.isArray(re.claims[itemProperties[i]]) || re.claims[itemProperties[i]].length === 0) {
        continue;
      }
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].references === undefined) { continue }
        re.claims[itemProperties[i]][j].references2 = [];
        for (let k = 0; k < re.claims[itemProperties[i]][j].references.length; k++) {
          re.claims[itemProperties[i]][j].references2[k] = [];
          references2[k] = [];
          let props = re.claims[itemProperties[i]][j].references[k]["snaks-order"];
          for (let r = 0; r < props.length; r++) {
            let reference = re.claims[itemProperties[i]][j].references[k].snaks[props[r]][0];
            references2[k][r] = { datatype: undefined, id: undefined, label: undefined, description: undefined, aliases: undefined };
            references2[k][r].datatype = reference.datatype;
            references2[k][r].id = reference.property;
            references2[k][r].label = reference.label;
            if (reference.description !== undefined)
              references2[k][r].description = reference.description;
            if (reference.aliases !== undefined)
              references2[k][r].aliases = reference.aliases;
            if (reference.externalLink !== undefined)
              references2[k][r].externalLink = reference.externalLink;
            re.claims[itemProperties[i]][j].references2[k].push(references2[k][r]);
          }
        }
      }
    }
    return re;
  }

}
