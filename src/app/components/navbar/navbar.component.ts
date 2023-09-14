import { Component } from '@angular/core';
import { IOptsNavbar } from 'src/app/interfaces/IOptsNavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
//* Typescript es superset de javascript
  public opciones:IOptsNavbar[] = [
    { path: '/home', name: 'Home'},
    { path: '/depositos', name: 'Depositos'},
    { path: '/prestamos', name: 'Prestamos'},
    { path: '/giros', name: 'Giros'},
    { path: '/posts', name: 'Posts'},
    { path: '/photos', name: 'Fotos'}
  ];

  public title: string = "Angular Bco";

}
