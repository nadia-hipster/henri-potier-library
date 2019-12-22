import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';

import {UiModule} from './ui/ui.module';
import { CartListComponent } from './Cart/containers/cart-list/cart-list.component';
import { CartItemComponent } from './Cart/components/cart-item/cart-item.component';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [/*{
    provide: LOCALE_ID,
    useValue: 'fr' // 'de' for Germany, 'fr' for France ...
   }*/],
  bootstrap: [AppComponent]
})
export class AppModule {
}

