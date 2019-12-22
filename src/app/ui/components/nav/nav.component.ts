import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from 'src/app/shared/models/book';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  item$: Subject<Book>;
  constructor(
   // private ps: PrestationService
  ) { }

  ngOnInit() {
    //this.item$ = this.ps.item$;
  }

}
