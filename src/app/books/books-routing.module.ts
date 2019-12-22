import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartListComponent} from '../Cart/containers/cart-list/cart-list.component';
import { BookListComponent } from './containers/book-list/book-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BookListComponent,
    // children: [
    //   { path: 'detail', component: DetailPrestationComponent },
    //   { path: 'client', component: ClientDetailPrestationComponent },
    // ]
  // },
  // { path: 'add', component: PageAddPrestationComponent },
  // {
  //   path: 'edit/:id',
  //   component: PageEditPrestationComponent,
  //   resolve: { item: PrestationResolverService }
  },
  { path: 'cart', component: CartListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class BooksRoutingModule { }
