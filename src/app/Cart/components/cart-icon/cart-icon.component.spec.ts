import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {CartIconComponent} from './cart-icon.component';

describe('CartIconComponent', () => {
    let component: CartIconComponent;
    let fixture: ComponentFixture<CartIconComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CartIconComponent
            ],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CartIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
