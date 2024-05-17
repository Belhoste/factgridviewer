import { Injectable } from '@angular/core';
import { CreateItemToDisplayService } from './create-item-to-display.service';
import { ItemInfoService } from './item-info.service';
import { SetLanguageService } from './set-language.service';
import { SelectedLangService } from '../selected-lang.service';
import { ItemSparqlService } from './item-sparql.service';
import { map, takeWhile, tap, switchMap, take } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateCompleteItemService {

  constructor(private createItem: CreateItemToDisplayService, private itemInfo: ItemInfoService, private itemSparql: ItemSparqlService, private setLanguage: SetLanguageService, private lang: SelectedLangService) { }

  completeItem(res) { 
 
    let u = this.createItem.createItemToDisplay(res = this.setLanguage.item(res, this.lang.selectedLang)[0], this.lang.selectedLang);
  
    this.itemInfo.infoListBuilding(res);

    this.itemSparql.itemSparql(res);  

  return u
  }

     

 

  


}
