import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalLinksDisplayService {  // external links

  constructor() { }

  setExternalLinksDisplay(item, externalLinks) {
    if (item[0].claims.P146 !== undefined) {  //Online information
      item[1].splice(item[1].indexOf("P146"), 1);
      item[0].claims.P146.url = item[0].claims.P146[0].mainsnak.datavalue.value;
      externalLinks.push(item[0].claims.P146)
    };

    if (item[0].claims.P378 !== undefined) { //id viaf
      item[1].splice(item[1].indexOf("P378"), 1);
      item[0].claims.P378.url = "https://viaf.org/viaf/" + item[0].claims.P378[0].mainsnak.datavalue.value;
      externalLinks.push(item[0].claims.P378)
    };

    if (item[0].claims.P76 !== undefined) { // id GND
      item[1].splice(item[1].indexOf("P76"), 1);
      item[0].claims.P76.url = "https://d-nb.info/gnd/" + item[0].claims.P76[0].mainsnak.datavalue.value;
      externalLinks.push(item[0].claims.P76)
    };

    if (item[0].claims.P500 !== undefined) { // id Data BnF
      item[1].splice(item[1].indexOf("P500"), 1);
      item[0].claims.P500.url = "https://data.bnf.fr/en/" + item[0].claims.P500[0].mainsnak.datavalue.value;
      externalLinks.push(item[0].claims.P500)
    };

    if (item[0].claims.P346 !== undefined) { // id PPN
      item[1].splice(item[1].indexOf("P346"), 1);
      item[0].claims.P346.url = "https://kxp.k10plus.de/DB=2.1/PPNSET?PPN=" + item[0].claims.P346[0].mainsnak.datavalue.value;
      externalLinks.push(item[0].claims.P346)
    };

    if (item[0].claims.P367 !== undefined) { // id BnF
      item[1].splice(item[1].indexOf("P367"), 1);
      item[0].claims.P367.url = "https://catalogue.bnf.fr/ark:/12148/cb" + item[0].claims.P367[0].mainsnak.datavalue.value;
      externalLinks.push(item[0].claims.P367)
    };

    if (item[0].claims.P366 !== undefined) { //id IRef
      item[1].splice(item[1].indexOf("P366"), 1);
      item[0].claims.P366.url = "https://www.idref.fr/" + item[0].claims.P366[0].mainsnak.datavalue.value;
      externalLinks.push(item[0].claims.P366)
    };

    if (item[0].claims.P418 !== undefined) { // id Geonames
      item[1].splice(item[1].indexOf("P418"), 1);
      item[0].claims.P418.url = "https://www.geonames.org/" + item[0].claims.P418[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P418)
    };

    if (item[0].claims.P368 !== undefined) { // id VD16
      item[1].splice(item[1].indexOf("P368"), 1);
      item[0].claims.P368.url = 'https://opacplus.bib-bvb.de/TouchPoint_touchpoint/start.do?Query=1120%3D%22%5C%22VD16+$1%5C""&SearchProfile=Altbestand&Language=De'
        + item[0].claims.P368[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P368)
    };

    if (item[0].claims.P369 !== undefined) { //id VD17
      item[1].splice(item[1].indexOf("P369"), 1);
      item[0].claims.P369.url = 'https://kxp.k10plus.de/DB=1.28/CMD?ACT=SRCHA&IKT=8079&TRM=%27$1%27:'
        + item[0].claims.P369[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P369)
    };

    if (item[0].claims.P370 !== undefined) {//id VD18
      item[1].splice(item[1].indexOf("P370"), 1);
      item[0].claims.P370.url = 'https://kxp.k10plus.de/DB=1.65/CMD?ACT=SRCHA&IKT=8080&TRM=VD18' + item[0].claims.P370[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P370)
    };

    if (item[0].claims.P424 !== undefined) { //id Harmonia Universalis
      item[1].splice(item[1].indexOf("P424"), 1);
      item[0].claims.P424.url = 'https://harmoniauniversalis.univ-paris1.fr/#/personne/' + item[0].claims.P424[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P424)
    };

    if (item[0].claims.P533 !== undefined) { // id Amburger
      item[1].splice(item[1].indexOf("P533"), 1);
      item[0].claims.P533.url = 'https://amburger.ios-regensburg.de/index.php?id=' + item[0].claims.P533[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P533)
    };

    if (item[0].claims.P374 !== undefined) { // id Geni.com
      item[1].splice(item[1].indexOf("P374"), 1);
      item[0].claims.P374.url = 'https://www.geni.com/profile/index/' + item[0].claims.P374[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P374)
    };

    if (item[0].claims.P414 !== undefined) {  // INSEE municipality code
      item[1].splice(item[1].indexOf("P414"), 1);
      item[0].claims.P414.url = 'https://www.insee.fr/fr/statistiques/2011101?geo=COM-' + item[0].claims.P414[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P414)
    };

    if (item[0].claims.P502 !== undefined) {  // Complet Bible Genealogy ID
      item[1].splice(item[1].indexOf("P502"), 1);
      item[0].claims.P502.url = 'http://www.complete-bible-genealogy.com/names/' + item[0].claims.P502[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P502)
    };

    if (item[0].claims.P462 !== undefined) { // Catholic Hierarchy ID
      item[1].splice(item[1].indexOf("P462"), 1);
      item[0].claims.P462.url = 'http://www.catholic-hierarchy.org/diocese/' + item[0].claims.P462[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P462)
    };

    if (item[0].claims.P601 !== undefined) { // 	WIAG ID
      item[1].splice(item[1].indexOf("P601"), 1);
      item[0].claims.P601.url = 'https://wiag-vocab.adw-goe.de/id/' + item[0].claims.P601[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P601)
    };

    if (item[0].claims.P585 !== undefined) { // ESTC ID
      item[1].splice(item[1].indexOf("P585"), 1);
      item[0].claims.P585.url = 'http://estc.bl.uk/' + item[0].claims.P585[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P585)
    };

    if (item[0].claims.P549 !== undefined) { // YVNG ID
      item[1].splice(item[1].indexOf("P549"), 1);
      item[0].claims.P549.url = 'https://yvng.yadvashem.org/nameDetails.html?itemId=' + item[0].claims.P549[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P549);
    };

    if (item[0].claims.P594 !== undefined) { // WorldCat Identities ID
      item[1].splice(item[1].indexOf("P594"), 1);
      item[0].claims.P594.url = 'https://www.worldcat.org/identities/' + item[0].claims.P594[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P594);
    };

    if (item[0].claims.P595 !== undefined) { // OCLC control number
      item[1].splice(item[1].indexOf("P595"), 1);
      item[0].claims.P595.url = 'https://www.worldcat.org/oclc/' + item[0].claims.P595[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P595);
    };

    if (item[0].claims.P605 !== undefined) { // ISBN-10
      item[1].splice(item[1].indexOf("P605"), 1);
      item[0].claims.P605.url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + item[0].claims.P605[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P605);
    };

    if (item[0].claims.P606 !== undefined) { // ISBN-13
      item[1].splice(item[1].indexOf("P606"), 1);
      item[0].claims.P549.url = 'https://isbnsearch.org/isbn/' + item[0].claims.P606[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P606);
    };

    if (item[0].claims.P650 !== undefined) { // INE ID (Spain)
      item[1].splice(item[1].indexOf("P650"), 1);
      let province = item[0].claims.P650[0].mainsnak.datavalue.value.slice(0,2);
      let municipality = item[0].claims.P650[0].mainsnak.datavalue.value.slice(2,5);
      let parish = item[0].claims.P650[0].mainsnak.datavalue.value.slice(5,7);
      let es = item[0].claims.P650[0].mainsnak.datavalue.value.slice(7,9);
      item[0].claims.P650.url = 'https://www.ine.es/nomen2/inicio_a.do?accion=busquedaAvanzada&inicio=inicio_a&subaccion=&botonBusquedaAvanzada=Consultar+selecci%C3%B3n&numPag=0&ordenAnios=ASC&comunidad=00&entidad_amb=no&poblacion_amb=T&poblacion_op=%3D&poblacion_txt=&denominacion_op=like&denominacion_txt=&codProv='+province+'&codMuni='+municipality+'&codEC='+parish+'&codES='+es+'&codNUC=00'
      externalLinks.push(item[0].claims.P650);
    };

    if (item[0].claims.P651 !== undefined) { // INE ID (Portugal)
      item[1].splice(item[1].indexOf("P651"), 1);
      item[0].claims.P651.url = '/' + item[0].claims.P651[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P651);
    };

    if (item[0].claims.P655 !== undefined) { // RISM ID
      item[1].splice(item[1].indexOf("P655"), 1);
      item[0].claims.P655.url = 'https://opac.rism.info/search?id=' + item[0].claims.P655[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P655);
    };

    if (item[0].claims.P656 !== undefined) { // CTHS ID
      item[1].splice(item[1].indexOf("P656"), 1);
      item[0].claims.P656.url = 'https://cths.fr/an/savant.php?id=' + item[0].claims.P656[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P656);
    };

    if (item[0].claims.P678 !== undefined) { // CTHS ID Society
      item[1].splice(item[1].indexOf("P678"), 1);
      item[0].claims.P678.url = 'http://cths.fr/an/societe.php?id=' + item[0].claims.P678[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P678);
    };

    if (item[0].claims.P660 !== undefined) { // Vergue ID
      item[1].splice(item[1].indexOf("P660"), 1);
      console.log(item[0].claims.P660.length);
      item[0].claims.P660.url = 'http://vergue.com/post/' + item[0].claims.P660[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P660);
    };

    if (item[0].claims.P672 !== undefined) { // Google Knowledge Graph ID
      item[1].splice(item[1].indexOf("P672"), 1);
      item[0].claims.P672.url = 'https://g.co/kg' + item[0].claims.P672[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P672);
    };
 
    if (item[0].claims.P624 !== undefined) { // Getty Thesaurus of Geographic Names
      item[1].splice(item[1].indexOf("P624"), 1);
      item[0].claims.P624.url = 'https://www.getty.edu/vow/TGNFullDisplay?find=&place=&nation=&english=Y&subjectid=' + item[0].claims.P624[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P624);
    };

    if (item[0].claims.P635 !== undefined) { // Kalliope ID
      item[1].splice(item[1].indexOf("P635"), 1);
      item[0].claims.P635.url = 'http://kalliope-verbund.info/' + item[0].claims.P624[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P635);
    };

    if (item[0].claims.P652 !== undefined) { // Biblioteca Nacional de España ID
      item[1].splice(item[1].indexOf("P652"), 1);
      item[0].claims.P652.url = 'https://datos.bne.es/resource/' + item[0].claims.P652[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P652);
    };

    if (item[0].claims.P667 !== undefined) { // Frauen in Bewegung 1848–1938 ID
      item[1].splice(item[1].indexOf("P667"), 1);
      item[0].claims.P667.url = 'https://fraueninbewegung.onb.ac.at/node/' + item[0].claims.P667[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P667);
    };


    if (item[0].claims.P668 !== undefined) { // DNB-Info ID
      item[1].splice(item[1].indexOf("P668"), 1);
      item[0].claims.P668.url = 'https://d-nb.info/' + item[0].claims.P668[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P668);
    };
 
    if (item[0].claims.P671 !== undefined) { // Pleiades ID
      item[1].splice(item[1].indexOf("P671"), 1);
      item[0].claims.P671.url = 'https://pleiades.stoa.org/places/' + item[0].claims.P671[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P671);
    };
 
    if (item[0].claims.P689 !== undefined) { // Persons of Indian Studies ID
      item[1].splice(item[1].indexOf("P689"), 1);
      item[0].claims.P689.url = 'https://whowaswho-indology.info/' + item[0].claims.P689[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P689);
    };

    if (item[0].claims.P471 !== undefined) { // Klosterdatenbank ID
      item[1].splice(item[1].indexOf("P471"), 1);
      item[0].claims.P471.url = 'http://klosterdatenbank.germania-sacra.de/gsn/' + item[0].claims.P471[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P471);
    };

    if (item[0].claims.P476 !== undefined) { // PhiloBiblon ID
      item[1].splice(item[1].indexOf("P476"), 1);
      item[0].claims.P476.url = 'http://philobiblon/' + item[0].claims.P476[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P476);
    };
 
    if (item[0].claims.P692 !== undefined) { // CDLI ID
      item[1].splice(item[1].indexOf("P692"), 1);
      item[0].claims.P692.url = 'https://cdli.ucla.edu/search/archival_view.php?ObjectID/' + item[0].claims.P692[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P692);
    };

    if (item[0].claims.P699 !== undefined) { // Edvard Munch's correspondance person ID
      item[1].splice(item[1].indexOf("P699"), 1);
      item[0].claims.P699.url = 'https://www.emunch.no/person.xhtml?id=pe' + item[0].claims.P699[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P699);
    };
 
    if (item[0].claims.P707 !== undefined) { // Spanish Biograpical Dictionary ID
      item[1].splice(item[1].indexOf("P707"), 1);
      item[0].claims.P707.url = 'https://dbe.rah.es/biografias/' + item[0].claims.P707[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P707);
    };
 
    if (item[0].claims.P710 !== undefined) { // Art & Architecture Thesaurus ID
      item[1].splice(item[1].indexOf("P710"), 1);
      item[0].claims.P710.url = 'https://www.getty.edu/vow/AATFullDisplay?find=&logic=AND&note=&subjectid=/' + item[0].claims.P710[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P710);
    };
 
    if (item[0].claims.P712 !== undefined) { // ResearchGate profile ID
      item[1].splice(item[1].indexOf("P712"), 1);
      item[0].claims.P712.url = 'https://www.researchgate.net/profile/' + item[0].claims.P712[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P712);
    };
 
    if (item[0].claims.P541 !== undefined) { //Recording, online information
      item[1].splice(item[1].indexOf("P541"), 1);
      item[0].claims.P541.url = item[0].claims.P541[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P541)
    };
    if (item[0].claims.P773 !== undefined) { //19th-century French printers-lithographers
      item[1].splice(item[1].indexOf("P773"), 1);
      item[0].claims.P773.url = 'http://elec.enc.sorbonne.fr/imprimeurs/node/' + item[0].claims.P773[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P773);
    };
    if (item[0].claims.P782 !== undefined) { //GEPRIS-Historical ID (Person)
      item[1].splice(item[1].indexOf("P782"), 1);
      item[0].claims.P782.url = 'https://gepris-historisch.dfg.de/person/' + item[0].claims.P782[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P782);
    };
    if (item[0].claims.P791 !== undefined) { //RI ID
      item[1].splice(item[1].indexOf("P791"), 1);
      item[0].claims.P791.url = 'http://www.regesta-imperii.de/id/' + item[0].claims.P791[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P791);
    };
    if (item[0].claims.P794 !== undefined) { //Fruitbearing Society Member ID
      item[1].splice(item[1].indexOf("P794"), 1);
      item[0].claims.P794.url = 'http://dbs.hab.de/padmin/fruchtbringer/ausgabe.php?m4=allgemein&st3=&trunc3=%25&m2=name&st2=&trunc2=%25&m1=mitgliedsnr&st1=$1&trunc1=%25&submit=&m3=name' + item[0].claims.P794[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P794);
    };
    if (item[0].claims.P807 !== undefined) { //PRELIB place ID
      item[1].splice(item[1].indexOf("P807"), 1);
      item[0].claims.P807.url = 'https://mshb.huma-num.fr/prelib/ville/' + item[0].claims.P807[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P807);
    };
    if (item[0].claims.P809 !== undefined) { //PRELIB work ID
      item[1].splice(item[1].indexOf("P809"), 1);
      item[0].claims.P809.url = 'http://mshb.huma-num.fr/prelib/oeuvre/' + item[0].claims.P809[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P809);
    };
    if (item[0].claims.P810 !== undefined) { //PRELIB edition ID
      item[1].splice(item[1].indexOf("P810"), 1);
      item[0].claims.P810.url = 'https://mshb.huma-num.fr/prelib/edition/' + item[0].claims.P810[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P810);
    };
    if (item[0].claims.P811 !== undefined) { //PRELIB archival document ID
      item[1].splice(item[1].indexOf("P811"), 1);
      item[0].claims.P811.url = 'https://mshb.huma-num.fr/prelib/documentarchive/' + item[0].claims.P811[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P811);
    };
    if (item[0].claims.P812 !== undefined) { //PRELIB periodical ID
      item[1].splice(item[1].indexOf("P812"), 1);
      item[0].claims.P812.url = 'https://mshb.huma-num.fr/prelib/revue/' + item[0].claims.P812[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P812);
    };
   if (item[0].claims.P813 !== undefined) { //Sandrart.net person ID
      item[1].splice(item[1].indexOf("P813"), 1);
      item[0].claims.P813.url = 'http://ta.sandrart.net/en/person/view/' + item[0].claims.P813[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P813);
    };
    if (item[0].claims.P816 !== undefined) { //SSNE person ID
      item[1].splice(item[1].indexOf("P816"), 1);
      item[0].claims.P816.url = 'https://www.st-andrews.ac.uk/history/ssne/item.php?id=' + item[0].claims.P816[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P816);
    };
    if (item[0].claims.P821 !== undefined) { //ISNI-ID
      item[1].splice(item[1].indexOf("P821"), 1);
      item[0].claims.P821.url = 'https://isni.org/isni/' + item[0].claims.P821[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P821);
    };
    if (item[0].claims.P827 !== undefined) { //WorldCat Title ID
      item[1].splice(item[1].indexOf("P827"), 1);
      item[0].claims.P827.url = 'https://www.worldcat.org/title/' + item[0].claims.P827[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P827);
    };
    if (item[0].claims.P830 !== undefined) { //Niedersächsische Personen ID
      item[1].splice(item[1].indexOf("P830"), 1);
      item[0].claims.P830.url = 'https://www.niedersaechsische-bibliographie.de/DB=1.81/PPNSET?PPN=' + item[0].claims.P830[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P830);
    };
    if (item[0].claims.P837 !== undefined) { //museum-digital:hessen people-ID
      item[1].splice(item[1].indexOf("P837"), 1);
      item[0].claims.P837.url = 'https://hessen.museum-digital.de/people/' + item[0].claims.P837[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P837);
    };
    if (item[0].claims.P841 !== undefined) { //OpenStreetMap relation ID
      item[1].splice(item[1].indexOf("P841"), 1);
      item[0].claims.P841.url = 'https://hessen.museum-digital.de/people/' + item[0].claims.P841[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P841);
    };
    if (item[0].claims.P842 !== undefined) { //OpenStreetMap object
      item[1].splice(item[1].indexOf("P842"), 1);
      item[0].claims.P842.url = 'https://hessen.museum-digital.de/people/' + item[0].claims.P842[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P842);
    };
    if (item[0].claims.P844 !== undefined) { //Natural Law Database ID
      item[1].splice(item[1].indexOf("P844"), 1);
      item[0].claims.P844.url = 'https://hessen.museum-digital.de/people/' + item[0].claims.P844[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P844);
    };
   if (item[0].claims.P763 !== undefined) { //PRELIB person ID
      item[1].splice(item[1].indexOf("P763"), 1);
      item[0].claims.P763.url = 'http://mshb.huma-num.fr/prelib/personne/' + item[0].claims.P763[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P763);
    };
   if (item[0].claims.P764 !== undefined) { //PRELIB organization ID
      item[1].splice(item[1].indexOf("P764"), 1);
      item[0].claims.P764.url = 'http://mshb.huma-num.fr/prelib/collectif/' + item[0].claims.P764[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P764);
    };
   if (item[0].claims.P849 !== undefined) { //Database of Salon artists person ID
      item[1].splice(item[1].indexOf("P849"), 1);
      item[0].claims.P849.url = 'https://humanities-research.exeter.ac.uk/salonartists/artist/id/' + item[0].claims.P849[0].mainsnak.datavalue.value
      externalLinks.push(item[0].claims.P849);
    };
    return externalLinks
  };
}
