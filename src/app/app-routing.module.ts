import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, Router } from '@angular/router';
import { BookListComponent } from './books/containers/book-list/book-list.component';
import {CartListComponent} from './Cart/containers/cart-list/cart-list.component';

const appRoutes: Routes = [

  /*{ path: 'books', component: BookListComponent },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },*/

  { path: '', component: BookListComponent, pathMatch: 'full' },
  { path: 'cart', component: CartListComponent, pathMatch: 'full' }


  /* */
  // {
  //   path: 'books',
  //   loadChildren: './books/books.module#BooksModule',
  // },
  /*{
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
  },*/
  /* {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      }
    )
  ]
})
export class AppRoutingModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
