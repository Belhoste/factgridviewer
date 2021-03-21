import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { DisplayComponent} from './display/display.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component'
import { MapComponent } from './display/map/map.component';

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
}

const routes: Routes = [
 // { path: '', component:AppComponent},
  { path: '', component:SearchComponent},
  { path: 'item/:id',
    component: DisplayComponent,  
    children: [
      { path: ':lat/:lng', component:MapComponent}
   //   { path: ':sparql', component:SparqlComponent, outlet:"'sparql"}
   ] 
  },
//  { path: 'sparql/:id',    //component for sparql todo
//     component: SparqlComponent    },
]

export const Routing = RouterModule.forRoot(routes, routingConfiguration);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}
)
export class AppRoutingModule { }
