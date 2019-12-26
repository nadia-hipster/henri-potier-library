import {Component, EventEmitter, Output} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {MessageService} from '../../services/message.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    searchText: string;
    faSearch = faSearch;

    @Output()
    searchChange = new EventEmitter<string>();

    constructor(private msgService: MessageService) {
    }

    search() {
        this.searchChange.emit(this.searchText);
        this.msgService.sendMessageSearch(this.searchText);
    }

}
