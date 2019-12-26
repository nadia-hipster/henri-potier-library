import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchPipe} from '../../../shared/search/pipes/search.pipe';

import {BookListComponent} from './book-list.component';

describe('BookListComponent', () => {
    let component: BookListComponent;
    let fixture: ComponentFixture<BookListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BookListComponent,
                SearchPipe
            ],
            imports: [
                HttpClientTestingModule
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
