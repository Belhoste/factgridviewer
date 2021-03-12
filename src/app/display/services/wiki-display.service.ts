import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiDisplayService {

  constructor() { }

  setWikiDisplay(item, wikis){

  if (item[0].sitelinks.commonswiki !==undefined){
    wikis.push(item[0].sitelinks.commonswiki);
  }
  if (item[0].sitelinks.enwiki !==undefined){
    wikis.push(item[0].sitelinks.enwiki);
  }
  if (item[0].sitelinks.dewiki !==undefined){
    wikis.push(item[0].sitelinks.dewiki);
  }
  if (item[0].sitelinks.frwiki !==undefined){
    wikis.push(item[0].sitelinks.frwiki); 
  }
  if (item[0].sitelinks.wikidatawiki !==undefined){
      wikis.push(item[0].sitelinks.wikidatawiki); 
      }
  if (item[0].sitelinks.enwikisource !==undefined){
     wikis.push(item[0].sitelinks.enwikisource); 
      }
  if (item[0].sitelinks.dewikisource !==undefined){
        wikis.push(item[0].sitelinks.dewikisource); 
      }
  if (item[0].sitelinks.frwikisource !==undefined){
        wikis.push(item[0].sitelinks.frwikisource); 
      }
  return wikis
    }
}
