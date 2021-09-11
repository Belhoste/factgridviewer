import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { DisplayComponent} from './display/display.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './display/map/map.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { EssaiComponent } from './essai/essai.component';

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
}

const routes: Routes = [

  { path: '', component:SearchComponent},
  { path: 'item/:id',
    component: DisplayComponent,  
    children: [
      { path: ':lat/:lng', component:MapComponent}
   //   { path: ':sparql', component:SparqlComponent, outlet:"'sparql"}
   ] 
  },
  { path: 'advanced_search',    //component for advanced search 
     component: AdvancedSearchComponent},
  { path: 'essai',  component: EssaiComponent   }

]

export const Routing = RouterModule.forRoot(routes, routingConfiguration);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}
)
export class AppRoutingModule { }
