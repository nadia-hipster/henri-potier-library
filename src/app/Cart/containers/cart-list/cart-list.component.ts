import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Book} from '../../../shared/models/book';
import {BookItem} from '../../../shared/models/book-item';
import {OfferPromo} from '../../../shared/models/offer-promo';
import {MessageService} from '../../../shared/services/message.service';
import {CartService} from '../../services/cart.service';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
    @Input()
    searchText: string;

    items: Book[] = [];
    bestOffer: OfferPromo;
    totalPrice: number;
    itemsGroupedByIsbn: BookItem[] = [];

    searchSubscription: any;

    constructor(private cartService: CartService,
                private modalService: NgbModal,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.itemsGroupedByIsbn = [];
        this.items = this.cartService.getItems();

        if (this.items) {
            // Group books by isbn
            const result = Array.from(this.items.reduce((m, t) => m.set(t.isbn, t), new Map()).values());

            // Create new list to show in cart
            result.forEach(item => {
                const count = this.items.reduce((acc, cur) => cur.isbn === item.isbn ? ++acc : acc, 0);
                const bookItem: BookItem = new BookItem(item);
                bookItem.nbr = count;
                bookItem.totalPrice = count * item.price;
                this.itemsGroupedByIsbn.push(bookItem);
            });

            // Total price
            this.totalPrice = this.cartService.getTotalPrice(this.items);

            // Commercials offers
            this.cartService.getOffers()
                .subscribe((offers: any) => {
                    this.bestOffer = this.cartService.calculateBestOffer(offers.offers, this.totalPrice);
                });
        }

        this.searchSubscription = this.messageService.accessMessageSearch().subscribe(
            (searchItem: string) => {
                this.searchText = searchItem;
            }
        );
    }

    clearCart() {
        this.cartService.clearCart();
        this.itemsGroupedByIsbn = [];
    }

    open(content) {
        this.modalService.open(content);
    }

    deleteChange(bookItem: BookItem) {
        this.itemsGroupedByIsbn.splice(this.itemsGroupedByIsbn.indexOf(bookItem), 1);
        this.cartService.deleteItem(bookItem.isbn);
        this.messageService.sendMessageSearch(this.searchText);
    }

    ngOnDestroy() {
        this.searchSubscription.unsubscribe();
    }


}
