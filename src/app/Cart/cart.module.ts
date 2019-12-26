import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';
import {CartIconComponent} from './components/cart-icon/cart-icon.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {CartListComponent} from './containers/cart-list/cart-list.component';
import {PromoPipe} from './pipes/promo.pipe';


@NgModule({
    declarations: [PromoPipe, CartIconComponent, CartItemComponent, CartListComponent],
    exports: [
        PromoPipe,
        CartIconComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        HttpClientModule,
        SharedModule,
        RouterModule.forRoot([])
    ]
})
export class CartModule {
}
