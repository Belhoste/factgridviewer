import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ItemSelectComponent } from './item-select/item-select.component';
import { DisplayComponent } from './display/display.component';
import { JoinPipe } from './join.pipe';
import { CommaJoinPipe } from './comma-join.pipe';
//import { ItemService } from './item.service';

@NgModule({

  declarations: [
    AppComponent,
    DisplayComponent,
    ItemSelectComponent,
    JoinPipe,
    CommaJoinPipe
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
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
