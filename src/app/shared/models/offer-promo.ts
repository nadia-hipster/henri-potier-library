import {Offer} from './offer';

export class OfferPromo {
    offer: Offer;
    promo: number;

    constructor(offer: Offer, promo: number) {
        this.offer = offer;
        this.promo = promo;
        // if (fields) {
        //     Object.assign(this, fields);
        // }
    }

}