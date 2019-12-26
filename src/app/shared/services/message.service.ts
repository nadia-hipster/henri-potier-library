import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private subjectCart = new Subject();
    private subjectSearch = new Subject();

    constructor() {
    }

    sendMessageCart(msg) {
        // it is used to publish data
        this.subjectCart.next(msg);
    }

    accessMessage() {
        // asObservable helps us to prevent the
        // leaks of Observable from outside of the subject
        return this.subjectCart.asObservable();
    }


    sendMessageSearch(msg) {
        this.subjectSearch.next(msg);
    }

    accessMessageSearch() {
        return this.subjectSearch.asObservable();
    }
}
