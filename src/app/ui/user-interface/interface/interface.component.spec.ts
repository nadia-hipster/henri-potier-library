import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InterfaceComponent} from './interface.component';

describe('InterfaceComponent', () => {
    let component: InterfaceComponent;
    let fixture: ComponentFixture<InterfaceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InterfaceComponent],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InterfaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
