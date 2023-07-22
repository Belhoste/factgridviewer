import { Injectable } from '@angular/core';
import { CreateItemToDisplayService } from './create-item-to-display.service';
import { ItemInfoService } from './item-info.service';
import { SetLanguageService } from './set-language.service';



@Injectable({
  providedIn: 'root'
})
export class CreateCompleteItemService {

  selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang']; //initialization of the storage of the selected language (english)

  constructor(private createItem:CreateItemToDisplayService, private itemInfo:ItemInfoService, private setLanguage:SetLanguageService) { }

  createCompleteItem(res){ 
  
    let u = this.createItem.createItemToDisplay(res= this.setLanguage.item(res, this.selectedLang)[0], this.selectedLang);
    this.itemInfo.infoListBuilding(res);
  

  return u
}

}
