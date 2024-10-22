import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { DisplayComponent} from './display/display.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './display/map/map.component';
import { ParisSearchComponent } from './paris-search/paris-search.component'

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
}

const routes: Routes = [

  { path: '', component:SearchComponent},
/*  { path: 'item/:id',
    component: DisplayComponent,  
    children: [
      { path: ':lat/:lng/:z', component:MapComponent}
   ]
  }*/
  { path: 'item/:id', loadComponent: () => import('./display/display.component').then(mod => mod.DisplayComponent),
  children: [{ path: ':lat/:lng/:z', component:MapComponent}
  ]
  },
  { path: 'paris', loadComponent: () => import('./paris-search/paris-search.component').then(mod => mod.ParisSearchComponent) },
  { path: 'harmonia_universalis', loadComponent: () => import('./harmonia-universalis/harmonia-universalis.component').then(mod => mod.HarmoniaUniversalisComponent) },
  { path: 'advanced_search', loadComponent: () => import('./search/advanced-search/advanced-search.component').then(mod => mod.AdvancedSearchComponent) }

]

export const Routing = RouterModule.forRoot(routes, routingConfiguration);


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
}
)
export class AppRoutingModule { }
