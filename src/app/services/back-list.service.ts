import { Injectable, inject } from '@angular/core';
import { RequestService } from './request.service'  ;
import { BackListDetailsService} from './back-list-details.service'
import { SelectedLangService } from '../selected-lang.service';

@Injectable({
  providedIn: 'root'
})
export class BackListService {
  private requestService = inject(RequestService);
  private backListDetails = inject(BackListDetailsService);
  private langService = inject(SelectedLangService);

  linkedItems: any[]; // backList

  backList(item) {
    const lang = this.langService.selectedLang;
    return this.requestService.getBackList(item, lang);
  }
}
