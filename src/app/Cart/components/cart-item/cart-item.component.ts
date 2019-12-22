import {Component, Input, OnInit} from '@angular/core';
import {BookItem} from '../../../shared/models/book-item';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

    @Input()
    item: BookItem;

    constructor() {
    }

    ngOnInit() {
    }
}
