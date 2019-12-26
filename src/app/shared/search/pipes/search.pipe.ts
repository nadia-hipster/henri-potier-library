import {Pipe, PipeTransform} from '@angular/core';
import {Book} from '../../models/book';

@Pipe({
    name: 'search',
    pure: false // Permet de pouvoir mettre à jour la liste des items du cart et de le ssupprimer.
})
export class SearchPipe implements PipeTransform {
    transform(list: Book[], filterText: string): any {
        return list ? list.filter(
            (item: Book) => JSON.stringify(item).search(new RegExp(filterText, 'i')) > -1
        ) : [];
    }
}
