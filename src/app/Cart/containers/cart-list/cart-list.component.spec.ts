import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchPipe} from '../../../shared/search/pipes/search.pipe';
import {PromoPipe} from '../../pipes/promo.pipe';

import {CartListComponent} from './cart-list.component';

describe('CartListComponent', () => {
    let component: CartListComponent;
    let fixture: ComponentFixture<CartListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CartListComponent,
                PromoPipe,
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
        fixture = TestBed.createComponent(CartListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
