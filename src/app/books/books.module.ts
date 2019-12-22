import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BooksRoutingModule} from './books-routing.module';
import {BookComponent} from './components/book/book.component';
import {SearchComponent} from './components/search/search.component';
import {BookListComponent} from './containers/book-list/book-list.component';
import { SearchPipe } from './components/search/search.pipe';


@NgModule({
  declarations: [BookComponent, BookListComponent, SearchComponent, SearchPipe],
  exports: [BookListComponent, SearchComponent, BookComponent, SearchPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    BooksRoutingModule,
    FormsModule,
    RouterModule
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BooksModule {
}
