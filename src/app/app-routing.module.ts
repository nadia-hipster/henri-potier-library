import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './books/containers/book-list/book-list.component';
import {CartListComponent} from './Cart/containers/cart-list/cart-list.component';

const appRoutes: Routes = [
        {
            path: '',
            redirectTo: 'books',
            pathMatch: 'full'
        },
        {
            path: 'books',
            component: BookListComponent
        },
        {
            path: 'cart',
            component: CartListComponent
        }
    ]
;

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        enableTracing: true
    })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
