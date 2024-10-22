import { Injectable, inject } from '@angular/core';
import { RequestService } from './request.service';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListDetailsService {
  private request = inject(RequestService);


  list: any[] 
  object:any[] = [];

 /* setListDetails(sparql){	
    let observedList = this.request.getList(sparql).pipe(
    map(res => {
      let selectToDisplay:string[] = res.head.vars,
      itemData:any[] = res.results.bindings	 
      for (let i=0; i<itemData.length; i++){
        console.log(itemData.length);
        this.object[i] = new Object;
        console.log(Object.keys(itemData));//["0", "1"]
        console.log(Object.entries(itemData));
        console.log(Object.values(itemData));
        //[{item: {type: "uri", value: "Q144334"}, itemLabel: {xml:lang: "fr", type: "literal", value: "Godefroy Charles Henri de La Tour d'Auvergne"}},{item: {type: "uri", value: "Q100198"}, itemLabel: {xml:lang: "fr", type: "literal", value: "Henri Louis Marie de Rohan de Montbazon-Guéméné"}}]
        for (let j=0; j<selectToDisplay.length; j++){
            if(itemData[i][selectToDisplay[j]].type === "uri"){
            let selectItemToDisplay = selectToDisplay[j];   
             let v=itemData[i][selectToDisplay[j]].value;
             v=v.replace(	
              "https://database.factgrid.de/entity/", "")
              itemData[i][selectToDisplay[j]].value = v;
              }
              console.log(selectToDisplay.length);
               this.object[i][selectToDisplay[j]]=itemData[i][selectToDisplay[j]].value;
            }
            console.log(this.object[i]);
            this.list.push(this.object[i]);
            console.log(this.list);
          }
          
          return this.list
          
        }  
      )
    )
    observedList.subscribe(re => console.log(re));
    return observedList
  }
  */

 setListDetails(list){	
  list
  console.log(typeof(list))
   /*.pipe(
  map(res => { console.log(res) })
  )
   let keys:string[] = res.head.vars,
    itemData:any[] = res.results.bindings
    for (let i=0;i<itemData.length;i++){
      for (let j=0;j<keys.length;i++){
        if(itemData[i] ===undefined)  {continue }
           if(itemData[i][keys[j]] !==undefined){ 
              let u = itemData[i][keys[j]]
              if(u.type === "uri"){ 
              u.value.replace(	
               "https://database.factgrid.de/entity/", "")
             }        
            }
          }
        }
      }
  )  
)
observedList.subscribe(re => console.log(re));
return observedList
*/

}

}
