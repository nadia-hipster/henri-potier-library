import {Component, OnInit} from '@angular/core';
import {Book} from '../../../shared/models/book';
import {BookItem} from '../../../shared/models/book-item';
import {OfferPromo} from '../../../shared/models/offer-promo';
import {CartService} from '../../services/cart.service';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
    items: Book[] = [];
    bestOffer: OfferPromo;
    totalPrice: number;
    bookItems: BookItem[] = [];

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        // this.items
        //     ._groupBy(x => x.isbn)
        //     .flatMap(group => group.toArray())
        //     .map(g => {
        //         return {
        //             name: g[0].title,
        //             // qty: _.sumBy(g, 'qty'), // using lodash to sum quantity
        //             // price: _.sumBy(g, 'price'), // using lodash to sum price
        //         };
        //     })
        //     .toArray()
        //     .do(sum => console.log('sum:', sum)) // just for debug
        // ;


        this.bookItems = [];
        this.items = this.cartService.getItems();
        // const isbnSet: Set<Book> = new Set<Book>(this.items.map(item => item.isbn
        // ));

        const result = Array.from(this.items.reduce((m, t) => m.set(t.isbn, t), new Map()).values());

        console.log('ok', result);

        // console.log('isbnSet', isbnSet.entries());
        result.forEach(item => {
            const count = this.items.reduce((acc, cur) => cur.isbn === item.isbn ? ++acc : acc, 0);

            console.log('count', count);

            const bookItem: BookItem = new BookItem(item);
            bookItem.occurence = count;
            bookItem.totalPrice = count * item.price;
            this.bookItems.push(bookItem);

            console.log('dd', bookItem);
        });


        console.log('bookitmes', this.bookItems);


        this.totalPrice = this.cartService.getTotalPrice(this.items);

        this.cartService.getOffers()
            .subscribe((offers: any) => {
                this.bestOffer = this.cartService.calculateBestOffer(offers.offers, this.totalPrice);
                console.log(this.bestOffer);
            });
    }

}
