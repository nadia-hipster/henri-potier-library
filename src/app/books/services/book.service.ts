import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from 'src/app/shared/models/book';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    readonly baseUrl = '/api';

    constructor(private httpClient: HttpClient) {
    }

    getBooks(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(`${this.baseUrl}`)
            .pipe(
                map((result: any) => result ? result : [])
            );
    }
}
