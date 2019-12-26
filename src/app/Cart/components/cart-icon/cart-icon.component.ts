import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {MessageService} from '../../../shared/services/message.service';
import {CartService} from '../../services/cart.service';

@Component({
    selector: 'app-cart-icon',
    templateUrl: './cart-icon.component.html',
    styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit, OnDestroy {
    readonly faCart = faShoppingCart;

    @Input()
    cartNbrItem: number;
    subscription: any;

    constructor(private cartService: CartService,
                private msgService: MessageService) {
    }

    ngOnInit() {
        const items = this.cartService.getItems();
        this.cartNbrItem = items ? items.length : null;

        this.subscription = this.msgService.accessMessage().subscribe(
            (nbrItems: number) => {
                this.cartNbrItem = nbrItems;
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
