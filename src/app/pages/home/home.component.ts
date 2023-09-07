import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public title: string = 'Mi Cuenta de Banco';
  public headersTable: string[] = ["Saldo", "Estado"];
  public saldo: number = 10;
  public statusNow: string = "Status off";
  public status: boolean = false;


}
