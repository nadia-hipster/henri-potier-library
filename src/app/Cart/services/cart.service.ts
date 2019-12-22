import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from '../../shared/models/book';
import {Offer} from '../../shared/models/offer';
import {OfferPromo} from '../../shared/models/offer-promo';
import {OfferType} from '../../shared/models/offer-type.enum';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    readonly baseUrl = '/api';
    readonly key = 'items';

    items = [];

    constructor(private httpClient: HttpClient) {
    }

    addToCart(product) {
        this.items = JSON.parse(localStorage.getItem(this.key));

        if (!this.items) {
            this.items = [];
        }

        this.items.push(product);
        localStorage.setItem(this.key, JSON.stringify(this.items));
    }

    getItems() {
        this.items = JSON.parse(localStorage.getItem(this.key));
        return this.items;
    }

    clearCart() {
        this.items = [];
        localStorage.removeItem(this.key);
        return this.items;
    }

    getTotalPrice(items: Book[]): number {
        return items.reduce((subtotal, item: Book) => subtotal + item.price, 0);
    }

    getOffers(): Observable<Offer[]> {
        this.items = JSON.parse(localStorage.getItem(this.key));
        const isbns = this.items.map((book: Book) => book.isbn).join(',');


        console.log('isbn', isbns);

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

            // const priceWithPromoOffer = this.calculatePrice(totalPrice, promo);
            // if (priceWithPromo > priceWithPromoOffer) {
            //     priceWithPromo = priceWithPromoOffer;
            //     bestOffer = offer;
            // }
        });
        return bestOfferPromo;
    }

    calculatePrice(totalPrice: number, promo: number): number {
        return totalPrice - promo;
    }

    percentage(totalPrice: number, value: number): number {
        return (totalPrice * value) / 100;
    }

    slice(totalPrice: number, sliceValue: number, value: number): number {
        return Math.floor(totalPrice / sliceValue) * value;
    }

}
