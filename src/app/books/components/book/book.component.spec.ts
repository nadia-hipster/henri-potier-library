import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Book} from '../../../shared/models/book';

import {BookComponent} from './book.component';

describe('BookComponent', () => {
    let component: BookComponent;
    let fixture: ComponentFixture<BookComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BookComponent
            ],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                NgbModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should open modal to add book to cart', () => {
        component.addToCart(new Book(), 'content');
        const spy = spyOn(component, 'open');
        fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
        expect(spy).toHaveBeenCalled();
    });
});
