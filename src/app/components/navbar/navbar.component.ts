import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public opciones:any = [
    { path: '/home', name: 'Home'},
    { path: '/depositos', name: 'Depositos'},
    { path: '/prestamos', name: 'Prestamos'},
    { path: '/giros', name: 'Giros'},
    { path: '/cta-corriente', name: 'Cuenta corriente'},
  ];

  public title: string = "Angular Bco";

}
