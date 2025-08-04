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
   
    // Subscribe to trigger the asynchronous SPARQL enrichment on the item.
    // This ensures the 'sparql' property is populated in the background, independently of the main item display.
    this.itemSparql.itemSparql(firstItem).subscribe({
      error: err => console.error('Error while populating SPARQL data:', err)
    });


    let u = this.createItem.createItemToDisplay(firstItem, this.lang.selectedLang);

    this.itemInfo.infoListBuilding(res);

    return u;
  }


}
