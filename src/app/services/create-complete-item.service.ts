import { Injectable, inject } from '@angular/core';
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
  private createItem = inject(CreateItemToDisplayService);
  private itemInfo = inject(ItemInfoService);
  private itemSparql = inject(ItemSparqlService);
  private setLanguage = inject(SetLanguageService);
  private lang = inject(SelectedLangService);


  completeItem(res) {
  
    const itemArray = this.setLanguage.item(res, this.lang.selectedLang);
    const firstItem = itemArray[0];
   
    this.itemSparql.itemSparql(firstItem);

    let u = this.createItem.createItemToDisplay(firstItem, this.lang.selectedLang);

    u.subscribe(res => console.log(res));

    this.itemInfo.infoListBuilding(res);

    return u;
  }


}
