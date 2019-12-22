import {OfferI} from '../interfaces/offer-i';

export class Offer implements OfferI {
    type = '';
    value = 0;
    sliceValue = 0;

    constructor(fields?: Partial<Offer>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}