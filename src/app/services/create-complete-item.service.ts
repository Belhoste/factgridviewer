import { Injectable } from '@angular/core';
import { CreateItemToDisplayService } from './create-item-to-display.service';
import { ItemInfoService } from './item-info.service';
import { SetLanguageService } from './set-language.service';
import { SelectedLangService } from '../selected-lang.service';


@Injectable({
  providedIn: 'root'
})
export class CreateCompleteItemService {   

 // selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang']; //initialization of the storage of the selected language (english)

  constructor(private createItem:CreateItemToDisplayService, private itemInfo:ItemInfoService, private setLanguage:SetLanguageService, private lang:SelectedLangService ) { }

  createCompleteItem(res){
 
    let u = this.createItem.createItemToDisplay(res= this.setLanguage.item(res, this.lang.selectedLang)[0], this.lang.selectedLang);
    this.itemInfo.infoListBuilding(res);
  

  return u
}

}
