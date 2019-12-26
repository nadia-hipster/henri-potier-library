import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {UiModule} from './ui/ui.module';

registerLocaleData(localeFr, 'fr');

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        UiModule
    ],
    providers: [{
        provide: LOCALE_ID, useValue: 'fr'
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}


