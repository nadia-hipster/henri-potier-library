import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {Book} from 'src/app/shared/models/book';
import {CartService} from '../../../Cart/services/cart.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

    @Input()
    book: Book;

    constructor(config: NgbModalConfig,
                private modalService: NgbModal,
                private cartService: CartService) {
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }

    ngOnInit() {
    }

    open(content) {
        this.modalService.open(content);
    }

    addToCart(book, modalToOpen) {
        // Add item to cart service
        this.cartService.addToCart(book);

        // Open cart confirmation modal
        this.open(modalToOpen);
    }
}
