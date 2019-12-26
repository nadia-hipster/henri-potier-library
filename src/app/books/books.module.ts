import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {BookComponent} from './components/book/book.component';
import {BookListComponent} from './containers/book-list/book-list.component';


@NgModule({
    declarations: [BookComponent, BookListComponent],
    exports: [BookListComponent, BookComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        NgbModule,
        SharedModule,
        RouterModule
    ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BooksModule {
}
