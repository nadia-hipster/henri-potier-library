import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../ui.module';
import { InterfaceComponent } from './interface/interface.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BooksModule } from 'src/app/books/books.module';
import { BookListComponent } from 'src/app/books/containers/book-list/book-list.component';


@NgModule({
  declarations: [InterfaceComponent, BookListComponent],
  exports: [InterfaceComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BooksModule,
    UiModule

  ]
})
export class UserInterfaceModule { }
