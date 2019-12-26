import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from '../../shared/models/book';
import {Offer} from '../../shared/models/offer';
import {OfferPromo} from '../../shared/models/offer-promo';
import {OfferType} from '../../shared/models/offer-type.enum';
import {MessageService} from '../../shared/services/message.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    readonly baseUrl = '/api';
    readonly key = 'items';

    items: Book[] = [];

    constructor(private httpClient: HttpClient,
                private msgService: MessageService) {
    }

    addToCart(item: Book) {
        this.items = JSON.parse(localStorage.getItem(this.key));

        if (!this.items) {
            this.items = [];
        }

        this.items.push(item);
        localStorage.setItem(this.key, JSON.stringify(this.items));

        // Send changes to cartIconComponent
        this.msgService.sendMessageCart(this.items.length);
    }

    getItems(): Book[] {
        this.items = JSON.parse(localStorage.getItem(this.key));
        return this.items;
    }

    deleteItem(isbn: string) {
        const deletedItems = this.items.filter(item => item.isbn === isbn);
        this.items = this.items.filter(item => !deletedItems.includes(item));
        localStorage.setItem(this.key, JSON.stringify(this.items));

        this.msgService.sendMessageCart(this.items.length);
    }

    clearCart() {
        this.items = [];
        localStorage.removeItem(this.key);

        this.msgService.sendMessageCart(this.items.length);
    }

    getTotalPrice(items: Book[]): number {
        return items.reduce((subtotal, item: Book) => subtotal + item.price, 0);
    }

    getOffers(): Observable<Offer[]> {
        this.items = JSON.parse(localStorage.getItem(this.key));
        const isbns = this.items.map((book: Book) => book.isbn).join(',');

        return this.httpClient.get<Offer[]>(`${this.baseUrl}/${isbns}/commercialOffers/`)
            .pipe(
                map((result: any) => result ? result : [])
            );
    }

    calculateBestOffer(offers: Offer[], totalPrice: number): OfferPromo {
        let bestOfferPromo = new OfferPromo(new Offer(), 0);
        let promo = 0;

        offers.forEach(offer => {
            switch (offer.type) {
                case OfferType.PERCENTAGE :
                    promo = this.percentage(totalPrice, offer.value);
                    break;
                case OfferType.MINUS :
                    promo = offer.value;
                    break;
                case OfferType.SLICE :
                    promo = this.slice(totalPrice, offer.sliceValue, offer.value);
                    break;
            }

            if (bestOfferPromo.promo < promo) {
                bestOfferPromo = new OfferPromo(offer, promo);
            }
        });
        return bestOfferPromo;
    }

    percentage(totalPrice: number, value: number): number {
        return (totalPrice * value) / 100;
    }

    slice(totalPrice: number, sliceValue: number, value: number): number {
        return Math.floor(totalPrice / sliceValue) * value;
    }

}
