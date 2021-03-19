import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent} from './display/display.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component'


const routes: Routes = [
 // { path: '', component:AppComponent},
  { path: '', component:SearchComponent},
  { path: 'item/:id',
    component: DisplayComponent },
//  { path: 'sparql/:id',    //component for sparql todo
//     component: SparqlComponent    },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}
)
export class AppRoutingModule { }
