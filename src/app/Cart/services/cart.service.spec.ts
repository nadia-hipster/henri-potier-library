import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {Book} from '../../shared/models/book';

import {CartService} from './cart.service';

describe('CartService', () => {
    let httpMock: HttpTestingController;
    let cartService: CartService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                CartService
            ]
        });

        httpMock = TestBed.get(HttpTestingController);
        cartService = TestBed.get(CartService);
    });

    it('should be created', () => {
        const service: CartService = TestBed.get(CartService);
        expect(service).toBeTruthy();
    });


    it('should add item to cart', () => {
        const service: CartService = TestBed.get(CartService);

        const book = new Book();
        book.isbn = 'isbn-test-1';
        book.title = 'title-test-1';
        book.price = 30;
        book.synopsis = ['synopsis du livre test-1'];

        service.addToCart(book);
        const items: Book[] = service.getItems();

        expect(items).toBeTruthy();
        expect(items.length).toBeGreaterThan(0);
    });


});
