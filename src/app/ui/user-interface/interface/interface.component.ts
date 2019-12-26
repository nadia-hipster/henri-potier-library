import {Component} from '@angular/core';

@Component({
    selector: 'app-interface',
    templateUrl: './interface.component.html',
    styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent {
    searchText: string;

    searchChange(searchText: string) {
        this.searchText = searchText;
    }

}
