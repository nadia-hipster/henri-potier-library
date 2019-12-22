import {Pipe, PipeTransform} from '@angular/core';
import {Book} from '../../../shared/models/book';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: Book[], filterText: string): any {
    return list ? list.filter((item: Book) => JSON.stringify(item).search(new RegExp(filterText, 'i')) > -1
    ) : [];
  }

}
