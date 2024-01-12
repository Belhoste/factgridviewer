import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { SparqlInterceptor } from './app/sparql-interceptor.service';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule, MatToolbarModule, MatSelectModule, MatInputModule, MatButtonModule, MatCardModule, MatListModule, MatDatepickerModule, MatMomentDateModule, MatGridListModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatTooltipModule, MatDividerModule, MatSidenavModule, MatProgressSpinnerModule, AppRoutingModule, RouterModule),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SparqlInterceptor,
            multi: true
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                display: {
                    dateInput: 'YYYY-MM-DD',
                },
            }
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        
    ]
})
  .catch(err => console.error(err));
