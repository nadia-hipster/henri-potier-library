import {Pipe, PipeTransform} from '@angular/core';
import {OfferPromo} from '../../shared/models/offer-promo';
import {OfferType} from '../../shared/models/offer-type.enum';

@Pipe({
    name: 'promo'
})
export class PromoPipe implements PipeTransform {
    transform(value: OfferPromo, ...args: any[]): any {
        let format = '';

        if (!value || !value.offer) {
            return value;
        }

        switch (value.offer.type) {
            case OfferType.PERCENTAGE :
                format = `-${value.offer.value}% sur le prix total des livres.`;
                break;
            case OfferType.MINUS :
                format = `-${value.offer.value}€ sur le prix total des livres.`;
                break;
            case OfferType.SLICE :
                format = `-${value.offer.value}€ par tranche d'achat de ${value.offer.sliceValue}€ sur le prix total des livres.`;
                break;
        }
        return format;
    }

}
