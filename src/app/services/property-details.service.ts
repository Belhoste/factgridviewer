import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsService {

  constructor() { }

  addClaimPropertyDetails(properties, re, itemProperties) { // add labels, descriptions and aliases to the properties in the mainsnaks
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < properties.length; j++) {     
        if (itemProperties[i] === properties[j].id) {
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
    return re
  }

  addQualifierPropertyDetails(properties, re, itemProperties) {  //add labels, definitions and aliases of properties in the qualifiers/* 
    let qualifierPropertyArray = [];
    for (let i = 0; i < itemProperties.length; i++) {
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

  addQualifier2PropertyDetails(properties, re, itemProperties) {  //add id, labels, definitions and aliases of properties to the new array qualifiers2/* 
    let qualifier2PropertyArray = [];
    let qualifier2: any[] = [];
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].qualifiers !== undefined) {
          re.claims[itemProperties[i]][j].qualifiers2 = [];
          qualifier2PropertyArray = re.claims[itemProperties[i]][j]["qualifiers-order"];
          for (let k = 0; k < qualifier2PropertyArray.length; k++) {
            qualifier2[k] = { id: undefined, label: undefined, description: undefined, aliases: undefined, value: { id: undefined, time: undefined, string: undefined, label: undefined, description: undefined, aliases: undefined } };
            for (let l = 0; l < properties.length; l++) {
              if (re.claims[itemProperties[i]][j]["qualifiers-order"][k] !== properties[l].id) { continue }
              qualifier2[k].id = properties[l].id;
              qualifier2[k].label = properties[l].label
              if (properties[l].description !== undefined)
                qualifier2[k].description = properties[l].description;
              if (properties[l].aliases !== undefined)
                qualifier2[k].aliases = properties[l].aliases;
              if (properties[l].externalLink !== undefined)
                qualifier2[k].externalLink = properties[l].externalLink;

              re.claims[itemProperties[i]][j].qualifiers2.push(qualifier2[k])
            }
          }
        }
      }
    }
    return re
  }

  addReferencePropertyDetails(properties, re, itemProperties) {  //add labels, definitions and aliases of properties in the references
    for (let i = 0; i < itemProperties.length; i++) {
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
    return re
  }

  addReference2PropertyDetails(properties, re, itemProperties) {  //add labels, definitions and aliases of properties to the new array references2
    let references2PropertyArray = [];// à verifier si c'est correct; peut-être plusieurs arrays de propriétés
    let references2: any[] = [];
    for (let i = 0; i < itemProperties.length; i++) {
      for (let j = 0; j < re.claims[itemProperties[i]].length; j++) {
        if (re.claims[itemProperties[i]][j].references === undefined) { continue }
        re.claims[itemProperties[i]][j].references2 = [];
        for (let k = 0; k < re.claims[itemProperties[i]][j].references.length; k++) {  //boucle sur les references relatives au claim itemProperties[i][j]
          re.claims[itemProperties[i]][j].references2[k] = [];
          references2[k] = [];
          let props = re.claims[itemProperties[i]][j].references[k]["snaks-order"];
          for (let r = 0; r < props.length; r++) {
            let reference = re.claims[itemProperties[i]][j].references[k].snaks[props[r]][0]; //ici on sélectionne l'array des propriétés relatives aux références ci-dessus
            references2[k][r] = { datatype: undefined, id: undefined, label: undefined, description: undefined, aliases: undefined };   //ici on définit l'objet item reference                                                
            references2[k][r].datatype = reference.datatype;
            references2[k][r].id = reference.property;
            references2[k][r].label = reference.label;
            if (reference.description !== undefined)
              references2[k][r].description = reference.description;
            if (reference.aliases !== undefined)
              references2[k][r].aliases = reference.aliases;
            if (reference.externalLink !== undefined)
              references2[k][r].externalLink = reference.externalLink;
            re.claims[itemProperties[i]][j].references2[k].push(references2[k][r]); //ici je peuple references2 avec les l items
          }
        }
      }
    }
    return re
  }
}
