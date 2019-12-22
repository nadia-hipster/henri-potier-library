import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BooksModule} from '../books/books.module';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {NavComponent} from './components/nav/nav.component';
import {ToolbarComponent} from './components/toolbar/toolbar/toolbar.component';
import {InterfaceComponent} from './user-interface/interface/interface.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavComponent, InterfaceComponent, ToolbarComponent],
  exports: [InterfaceComponent, FooterComponent, HeaderComponent, ToolbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forRoot([]),
    BooksModule
  ]
})
export class UiModule {
}
