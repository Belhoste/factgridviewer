import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ItemSelectComponent } from './item-select/item-select.component';
import { DisplayComponent } from './display/display.component';
import { JoinPipe } from './join.pipe';
import { CommaJoinPipe } from './comma-join.pipe';
import { CustomDatePipe } from './custom-date.pipe';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ChangeUndefinedItemPipe } from './change-undefined-item.pipe';
import { MapComponent } from './display/map/map.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BackListIdPipe } from './back-list-id.pipe';



//import { Display2Component } from './display2/display2.component';
//import { ItemService } from './item.service';

@NgModule({

  declarations: [
    AppComponent,
    DisplayComponent,
    ItemSelectComponent,
    JoinPipe,
    CommaJoinPipe,
    CustomDatePipe,
    ChangeUndefinedItemPipe,
    MapComponent,
    BackListIdPipe,
  //  Display2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    FlexLayoutModule,
    MatTooltipModule,
    MatDividerModule,
    MatSidenavModule,
    TranslateModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    registerLocaleData(localeEn, 'en'); 
    registerLocaleData(localeFr, 'fr');
    registerLocaleData(localeDe, 'de');
  }

 }
