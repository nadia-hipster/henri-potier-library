import {Component, Input, OnInit} from '@angular/core';
import {Book} from 'src/app/shared/models/book';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  @Input()
  searchText: string;

  books: Book[];

  ngOnInit() {
    this.getBooks();
  }

  private getBooks() {
    this.bookService.getBooks()
      .subscribe((book1: Book[]) => {
        console.log(book1);
        this.books = book1;

        console.log(this.books);
      });
  }

}
