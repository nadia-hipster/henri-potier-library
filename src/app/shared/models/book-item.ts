import {Book} from './book';

export class BookItem extends Book{
    occurence: number;
    totalPrice: number;

    constructor(fields?: Partial<BookItem>) {
        super(fields);
        if (fields) {
            Object.assign(this, fields);
        }
    }
}