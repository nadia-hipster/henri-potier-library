import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BookItem} from '../../../shared/models/book-item';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

    @Input()
    item: BookItem;

    @Output()
    deleteChange = new EventEmitter<BookItem>();

    constructor() {
    }

    deleteItem() {
        this.deleteChange.emit(this.item);
    }
}
