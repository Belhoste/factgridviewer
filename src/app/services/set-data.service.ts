//service preparing data for display

import { Injectable, inject } from '@angular/core';
import { SetLanguageService } from './set-language.service';
import { SelectedLangService } from '../selected-lang.service';
import { RequestService } from './request.service';
import { switchMap, map, tap, takeWhile } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { CreateCompleteItemService } from './create-complete-item.service';
import { CreateItemToDisplayService } from './create-item-to-display.service';

@Injectable({
	providedIn: 'root'
})
export class SetDataService {
	private createItem = inject(CreateItemToDisplayService);
	private createCompleteItem = inject(CreateCompleteItemService);
	private setLanguage = inject(SetLanguageService);
	private request = inject(RequestService);
	private lang = inject(SelectedLangService);


sparqlResult = new Subject(); // In  case of BehaviorSubject I have to give an initial value

selectedLang: string = (localStorage['selectedLang']===undefined)? "en": localStorage['selectedLang']; //initialization of the storage of the selected language (english)
baseGetURL = 'https://database.factgrid.de//w/api.php?action=wbgetentities&ids=' ;
getUrlSuffix= '&format=json&origin=*' ; 
	
	itemToDisplay(id) {
		let labelLength: number = 0
		let url = this.baseGetURL + id + this.getUrlSuffix;
		let completeItem = this.request.getItem(url).pipe(
			map(res => Object.values(res.entities)),
			map(res => {
				// Réordonne qualifiers-order pour chaque claim de chaque propriété
				res.forEach((entity: any) => {
					if (entity.claims) {
						Object.values(entity.claims).forEach((claimArray: any[]) => {
							claimArray.forEach((claim: any) => {
								if (claim["qualifiers-order"]) {
									claim["qualifiers-order"] = this.reorderQualifiersOrder(claim["qualifiers-order"]);
								}
							});
						});
					}
				});

				return res;
			}),
			switchMap(res => this.createCompleteItem.completeItem(res)),
		);
		return completeItem;
	}


 sparqlAsk(sparql) {
		let u = "";
		let sparqlResult: Observable<any> | undefined;
		let selectedSparql = this.newSparqlAdress(sparql);
		sparqlResult = this.request.getAsk(selectedSparql);
		sparqlResult.subscribe(re => { u = re.boolean ; return u });
		return sparqlResult
	}
	 
	sparqlToDisplay(sparql) {
			let sparqlResult:Observable<any> | undefined;
			if(sparql.includes("item")){
		let selectedSparql = this.newSparqlAdress(sparql); //handle sparql queries 1. create the address 
		sparqlResult = this.request.getList(selectedSparql);
			//handle sparql queries 2. list ready to display  
	}
		return sparqlResult
	}

 sparqlToDownload(sparql){
		let selectedSparql = this.newSparqlAdress(sparql);//handle sparql queries 1. create the address
		this.request.downLoadList(selectedSparql);     //handle sparql queries 2. list ready to download  
	}

		newSparqlAdress(address:string) : string { 
		 
			const newPrefix = "https://database.factgrid.de/sparql?query=";
			let oldPrefix = "https://database.factgrid.de/query/#";
			if (address.includes('embed.html')){oldPrefix ="https://database.factgrid.de/query/embed.html#"};
			if (address !== undefined) address = address.replace(oldPrefix, newPrefix);
			return address
	}


	reorderQualifiersOrder(qualifiersOrder: string[]): string[] {
	const timePropsOrder = [
		"P290", "P77", "P49", "P45", "P1124", "P1126", "P06", "P412", "P", "P41", "P38", "P50", "P1123", "P1125", "P291", "P612"
	];
	let ordered: string[] = [];
	if (qualifiersOrder.includes("P47")) ordered.push("P47");
	for (const p of timePropsOrder) if (qualifiersOrder.includes(p) && !ordered.includes(p)) ordered.push(p);
	for (const p of qualifiersOrder) if (!ordered.includes(p)) ordered.push(p);
	return ordered;
}

	}
