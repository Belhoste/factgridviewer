import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetLanguageService {

  constructor() { }

  lang: string;

  item(res, lang) {  //create an array of elements with id, label, descriptions and aliases in the selected language for the searched items
    let arr = [];
    let aliases = [];
    for (let i = 0; i < res.length; i++) { 
      let propertiesLang=this.changeLang(lang,res[i]);
      aliases = this.aliasPush(propertiesLang[4]);    
      if (propertiesLang[0] !== undefined) {
        if (propertiesLang[2] === undefined && propertiesLang[4] === undefined) { arr.push({ id: res[i].id, label: propertiesLang[1], claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype }) }
        else if (propertiesLang[2] === undefined && propertiesLang[4] !== undefined) { arr.push({ id: res[i].id, label: propertiesLang[1], aliases: aliases, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype }) }
        else if (propertiesLang[0] === undefined && propertiesLang[2] !== undefined) { arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3], claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype }) }
        else if (propertiesLang[0] !== undefined && propertiesLang[2] !== undefined) { arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3], aliases: aliases, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype })}
       }	  
      else {
      if (res[i].label === undefined) {break}
      else if (res[i].descriptions.en === undefined && res[i].aliases.en === undefined) { arr.push({ id: res[i].id, label: res[i].labels.en.value, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype}) }
      else if (res[i].descriptions.en === undefined && res[i].aliases.en !== undefined) {
        arr.push({ id: res[i].id, label: res[i].labels.en.value, aliases: aliases, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype })
      }
      else if (res[i].aliases.en !== undefined && res[i].descriptions.en !== undefined) {
        arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value, aliases: aliases, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype }) 
      }
      else arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value, claims: res[i].claims, sitelinks: res[i].sitelinks, datatype: res[i].datatype })
      }
  //   if (res[i].datatype !==undefined) { arr.push({ datatype: res[i].datatype}) }
    }
  
return arr
  }

aliasPush = function aliasPush(a){
  let c = [];
  if (a !==undefined) 
 { 
  //a = Object.values(a);
  for (let j=0;j<a.length;j++){ 
    c.push(a[j].value);
  }
}
return c
} 

item2(res,lang) {//create an array of items with id, label and description in the selected language for the properties and items in the statements
  let arr = []; 
  if (res === undefined){ res = []};
  
  for (let i = 0; i < res.length; i++) {
    let aliases = [];
    let propertiesLang=this.changeLang(lang,res[i]);
    aliases = this.aliasPush(propertiesLang[4]);
    let externalLinkValue: string;
    if(res[i].datatype = "external-id") { if (res[i].claims.P236 !== undefined) {
     externalLinkValue = res[i].claims.P236[0].mainsnak.datavalue.value  } }

   if (propertiesLang[0] !== undefined && propertiesLang[2] ===undefined && propertiesLang[4] ===undefined) {arr.push({ id: res[i].id, label: propertiesLang[1], externalLink: externalLinkValue  })}
   else if (propertiesLang[0] !== undefined && propertiesLang[2] !==undefined && propertiesLang[4] !==undefined) {arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3], aliases: aliases, externalLink: externalLinkValue })} 
   else if (propertiesLang[0] !== undefined && propertiesLang[2] !==undefined && propertiesLang[4] ===undefined) {arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3], externalLink: externalLinkValue })}
   else if (propertiesLang[0] !== undefined && propertiesLang[2] ===undefined && propertiesLang[4] !==undefined) {arr.push({ id: res[i].id, label: propertiesLang[1], aliases: aliases, externalLink: externalLinkValue })}
   else if (propertiesLang[0] === undefined && res[i].descriptions.en ===undefined && res[i].aliases.en ===undefined) {arr.push({ id: res[i].id, label: res[i].labels.en.value, externalLink: externalLinkValue })}
   else if (propertiesLang[0] === undefined && res[i].descriptions.en !== undefined && res[i].aliases.en !==undefined) { arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value, aliases: aliases, externalLink: externalLinkValue })}	 
   else if (propertiesLang[0] === undefined && res[i].descriptions.en ===undefined && res[i].aliases.en !==undefined) {arr.push({ id: res[i].id, label: res[i].labels.en.value, aliases: aliases, externalLink: externalLinkValue })}
   else if (propertiesLang[0] === undefined && res[i].descriptions.en !== undefined && res[i].aliases.en ===undefined) { arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value, externalLink: externalLinkValue })}	
  };
  
  return arr
 }

changeLang(lang,res) {
  let labelLang
  let labelValue
  let descriptionLang
  let descriptionValue
  let aliasesLang
  let aliasesValue
  if (res.labels.en !== undefined) {
  labelLang = res.labels.en;
  labelValue= res.labels.en.value; }
  else {
    if (res.labels.fr !== undefined ) {
      labelLang = res.labels.fr;
      labelValue = res.labels.fr.value;
    } else {
      if (res.labels.de !== undefined) {
        labelLang = res.labels.de;
        labelValue = res.labels.de.value;
      } else {
        labelLang="undefined";
        labelValue="undefined"
      }
    }
  }


   if (res.descriptions.en !== undefined) {
       descriptionLang = res.descriptions.en; 
       descriptionValue = res.descriptions.en.value;}
  if (res.aliases.en !== undefined) {
      aliasesLang = res.aliases.en
      aliasesValue = res.aliases.en[0].value;}
    if (lang === 'fr') {
      aliasesLang = undefined;
      if (res.labels.fr !== undefined) {
        labelLang = res.labels.fr;
        labelValue = res.labels.fr.value;}
      if (res.descriptions.fr !== undefined) {
        descriptionLang = res.descriptions.fr;
        descriptionValue = res.descriptions.fr.value;}
      if (res.aliases.fr !== undefined) {
        aliasesLang = res.aliases.fr;
        aliasesValue = res.aliases.fr[0].value;}
    }
    else if (lang === 'de') {
      aliasesLang = undefined;
      if (res.labels.de !== undefined) {
        labelLang = res.labels.de;
        labelValue = res.labels.de.value; 
      if (res.descriptions.de !== undefined) {
        descriptionLang = res.descriptions.de;
        descriptionValue = res.descriptions.de.value; }
      if (res.aliases.de !== undefined) {
        aliasesLang = res.aliases.de;
        aliasesValue = res.aliases.de[0].value;}
     }
   }
   if (lang === 'es') {
    aliasesLang = undefined;
    if (res.labels.es !== undefined) {
      labelLang = res.labels.es;
      labelValue = res.labels.es.value;}
    if (res.descriptions.es !== undefined) {
      descriptionLang = res.descriptions.es;
      descriptionValue = res.descriptions.es.value;}
    if (res.aliases.es !== undefined) {
      aliasesLang = res.aliases.es;
      aliasesValue = res.aliases.es[0].value;}
  }

      if (lang === 'it') {
    aliasesLang = undefined;
    if (res.labels.it !== undefined) {
      labelLang = res.labels.it;
      labelValue = res.labels.it.value;}
    if (res.descriptions.it !== undefined) {
      descriptionLang = res.descriptions.it;
      descriptionValue = res.descriptions.it.value;}
    if (res.aliases.it !== undefined) {
      aliasesLang = res.aliases.it;
      aliasesValue = res.aliases.it[0].value;}
  }
    if (lang === 'hu') {
    aliasesLang = undefined;
    if (res.labels.hu !== undefined) {
      labelLang = res.labels.hu;
      labelValue = res.labels.hu.value;}
    if (res.descriptions.hu !== undefined) {
      descriptionLang = res.descriptions.hu;
      descriptionValue = res.descriptions.hu.value;}
    if (res.aliases.hu !== undefined) {
      aliasesLang = res.aliases.hu;
      aliasesValue = res.aliases.hu[0].value;}
  }
    return [labelLang,labelValue,descriptionLang,descriptionValue,aliasesLang,aliasesValue] 
  }
}
