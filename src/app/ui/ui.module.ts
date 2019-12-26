import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BooksModule} from '../books/books.module';
import {CartModule} from '../Cart/cart.module';
import {SharedModule} from '../shared/shared.module';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {InterfaceComponent} from './user-interface/interface/interface.component';

@NgModule({
    declarations: [InterfaceComponent, HeaderComponent, ToolbarComponent, FooterComponent],
    exports: [InterfaceComponent],
    imports: [
        CommonModule,
        BooksModule,
        CartModule,
        FontAwesomeModule,
        NgbModule,
        SharedModule,
        RouterModule
    ]
})
export class UiModule {
}
