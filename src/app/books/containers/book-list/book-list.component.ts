import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from 'src/app/shared/models/book';
import {MessageService} from '../../../shared/services/message.service';
import {BookService} from '../../services/book.service';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

    searchText: string;
    books: Book[];
    searchSubscription: any;

    constructor(private bookService: BookService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.getBooks();
        this.searchSubscription = this.messageService.accessMessageSearch().subscribe(
            (searchItem: string) => {
                this.searchText = searchItem;
            }
        );
    }

    private getBooks() {
        this.bookService.getBooks()
            .subscribe((book1: Book[]) => {
                this.books = book1;
            });
    }

    ngOnDestroy() {
        this.searchSubscription.unsubscribe();
    }

}
