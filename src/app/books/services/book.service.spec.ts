import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {BookService} from './book.service';

describe('BookService', () => {
    let httpMock: HttpTestingController;
    let bookService: BookService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                BookService
            ]
        });

        httpMock = TestBed.get(HttpTestingController);
        bookService = TestBed.get(BookService);
    });

    it('should be created', () => {
        const service: BookService = TestBed.get(BookService);
        expect(service).toBeTruthy();
    });

    it('should be created', () => {

        const mockBooks = [
            {isbn: 'isbn1', title: 'title1', price: 30, cover: null, synopsis: 'synopsis 1'},
            {isbn: 'isbn2', title: 'title2', price: 20, cover: null, synopsis: 'synopsis 2'}
        ];

        const service: BookService = TestBed.get(BookService);

        const mockReq = httpMock.expectOne(service.baseUrl);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.flush(mockBooks);

        httpMock.verify();
    });

});
