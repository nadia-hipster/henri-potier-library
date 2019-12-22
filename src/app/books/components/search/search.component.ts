import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText: string;

  @Output()
  searchChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  search() {
    this.searchChange.emit(this.searchText);
  }

}
