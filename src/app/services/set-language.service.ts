import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetLanguageService {

  constructor() { }

  lang: string;

  item(res,lang) { //create an array of elements with id, label, descriptions and aliases in the selected language for the searched items
    let arr = [];
    let aliases = [];
    for (let i = 0; i < res.length; i++) { 
      let propertiesLang=this.changeLang(lang,res[i]);
      aliases = this.aliasPush(propertiesLang[4]);    
      if (propertiesLang[0] !== undefined) {
        if (propertiesLang[2] === undefined && propertiesLang[4] ===undefined) { arr.push({ id: res[i].id, label: propertiesLang[1], claims: res[i].claims, sitelinks: res[i].sitelinks }) }
       else if (propertiesLang[2] ===undefined && propertiesLang[4] !==undefined ) { arr.push({ id: res[i].id, label: propertiesLang[1], aliases: aliases, claims: res[i].claims, sitelinks: res[i].sitelinks }) }
        else if (propertiesLang[0] ===undefined && propertiesLang[2] !==undefined ) { arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3], claims: res[i].claims, sitelinks: res[i].sitelinks }) }
        else if (propertiesLang[0] !==undefined && propertiesLang[2] !==undefined ) { arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3], aliases: aliases, claims: res[i].claims, sitelinks: res[i].sitelinks })}
       }	  
      else {
      if (res[i].label === undefined) {break}
      else if (res[i].descriptions.en=== undefined && res[i].aliases.en ===undefined) { arr.push({ id: res[i].id, label: res[i].labels.en.value, claims: res[i].claims, sitelinks: res[i].sitelinks }) }
      else if (res[i].descriptions.en ===undefined && res[i].aliases.en !==undefined ) { arr.push({ id: res[i].id, label: res[i].labels.en.value, aliases: aliases, claims: res[i].claims, sitelinks: res[i].sitelinks })
      }
     else if (res[i].aliases.en !==undefined && res[i].descriptions.en !==undefined ) { arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value, aliases: aliases, claims: res[i].claims, sitelinks: res[i].sitelinks }) 
      }
        else arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value, claims: res[i].claims, sitelinks: res[i].sitelinks })
      }		 
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
  for (let i = 0; i < res.length; i++) { 
    let aliases = [];
    let propertiesLang=this.changeLang(lang,res[i]);
    aliases = this.aliasPush(propertiesLang[4]);
   if (propertiesLang[0] !== undefined && propertiesLang[2] ===undefined && propertiesLang[4] ===undefined) {arr.push({ id: res[i].id, label: propertiesLang[1] })}
   else if (propertiesLang[0] !== undefined && propertiesLang[2] !==undefined && propertiesLang[4] !==undefined) {arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3], aliases: aliases })} 
   else if (propertiesLang[0] !== undefined && propertiesLang[2] !==undefined && propertiesLang[4] ===undefined) {arr.push({ id: res[i].id, label: propertiesLang[1], description: propertiesLang[3] })}
   else if (propertiesLang[0] !== undefined && propertiesLang[2] ===undefined && propertiesLang[4] !==undefined) {arr.push({ id: res[i].id, label: propertiesLang[1], aliases: aliases })}
   else if (propertiesLang[0] === undefined && res[i].descriptions.en ===undefined && res[i].aliases.en ===undefined) {arr.push({ id: res[i].id, label: res[i].labels.en.value })}
   else if (propertiesLang[0] === undefined && res[i].descriptions.en !== undefined && res[i].aliases.en !==undefined) { arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value, aliases: aliases })}	 
   else if (propertiesLang[0] === undefined && res[i].descriptions.en ===undefined && res[i].aliases.en !==undefined) {arr.push({ id: res[i].id, label: res[i].labels.en.value, aliases: aliases })}
   else if (propertiesLang[0] === undefined && res[i].descriptions.en !== undefined && res[i].aliases.en ===undefined) { arr.push({ id: res[i].id, label: res[i].labels.en.value, description: res[i].descriptions.en.value })}	 
  }
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
   if (res.descriptions.en !== undefined) {
       descriptionLang = res.descriptions.en; 
       descriptionValue = res.descriptions.en.value;}
  if (res.aliases.en !== undefined) {
      aliasesLang = res.aliases.en
      aliasesValue = res.aliases.en[0].value;}
    if (lang === 'fr') {
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
    return [labelLang,labelValue,descriptionLang, descriptionValue, aliasesLang, aliasesValue] 
  }
}