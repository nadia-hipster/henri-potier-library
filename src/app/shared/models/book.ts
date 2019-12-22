import { BookI } from '../interfaces/book-i';

export class Book implements BookI {
    isbn = '';
    title = '';
    price = 0;
    cover = '';
    synopsis = [];

    constructor(fields?: Partial<Book>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}