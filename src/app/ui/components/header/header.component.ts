import {Component, OnInit} from '@angular/core';
import {faBars, faTimes, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;
  faUser = faUser;
  faBars = faBars;
  faTimes = faTimes;
  open = true;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Bibiolthèque Henri Potier';
  }

}
