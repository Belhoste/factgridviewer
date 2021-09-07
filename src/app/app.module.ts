import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { JoinPipe } from './join.pipe';
import { CommaJoinPipe } from './comma-join.pipe';
import { ChangeUndefinedItemPipe } from './change-undefined-item.pipe';
import { MapComponent } from './display/map/map.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BackListIdPipe } from './back-list-id.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { ResearchFieldsComponent } from './research-fields/research-fields.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectFilterModule} from 'mat-select-filter';
import {MatSelectInfiniteScrollModule} from 'ng-mat-select-infinite-scroll';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({

  declarations: [
    AppComponent,
    DisplayComponent,
    JoinPipe,
    CommaJoinPipe,
    ChangeUndefinedItemPipe,
    MapComponent,
    BackListIdPipe,
    SearchComponent,
    AdvancedSearchComponent,
    ResearchFieldsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatDividerModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatSelectFilterModule,
    MatSelectInfiniteScrollModule,
    NgSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){

  }

 }
