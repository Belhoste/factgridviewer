import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiDisplayService {

  url = "";

  constructor() { }

  setWikiDisplay(item, wikis) {

    if (item[0].sitelinks.commonswiki !== undefined) {
      wikis.push(item[0].sitelinks.commonswiki);
    }
    if (item[0].sitelinks.enwiki !== undefined) {
      wikis.push(item[0].sitelinks.enwiki);
    }
    if (item[0].sitelinks.dewiki !== undefined) {
      wikis.push(item[0].sitelinks.dewiki);
    }
    if (item[0].sitelinks.frwiki !== undefined) {
      wikis.push(item[0].sitelinks.frwiki);
    }
    if (item[0].sitelinks.itwiki !== undefined) {
      wikis.push(item[0].sitelinks.itwiki);
    }
    if (item[0].sitelinks.nlwiki !== undefined) {
      wikis.push(item[0].sitelinks.nlwiki);
    }
    if (item[0].sitelinks.eswiki !== undefined) {
      wikis.push(item[0].sitelinks.eswiki);
    }
    if (item[0].sitelinks.wikidatawiki !== undefined) {
      wikis.push(item[0].sitelinks.wikidatawiki);
    }
    if (item[0].sitelinks.enwikisource !== undefined) {
      this.url = item[0].sitelinks.enwikisource.title.replace(/ /g, "_")+"_";
      this.url = "https://en.wikisource.org/wiki/" + this.url;
      item[0].sitelinks.enwikisource.url=this.url;
      wikis.push(item[0].sitelinks.enwikisource);
    }
    if (item[0].sitelinks.dewikisource !== undefined) {
      this.url = item[0].sitelinks.dewikisource.title.replace(/ /g, "_")+"_";
      this.url = "https://de.wikisource.org/wiki/" + this.url;
      item[0].sitelinks.dewikisource.url=this.url;
      wikis.push(item[0].sitelinks.dewikisource);
    }
    if (item[0].sitelinks.frwikisource !== undefined) {
      this.url = item[0].sitelinks.frwikisource.title.replace(/ /g, "_")+"_";
      this.url = "https://fr.wikisource.org/wiki/" + this.url;
      item[0].sitelinks.frwikisource.url=this.url;
      wikis.push(item[0].sitelinks.frwikisource);
    }
    return wikis
  }
}
