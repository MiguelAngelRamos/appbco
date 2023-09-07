import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public title: string = 'Mi Cuenta de Banco';
  public headersTable: string[] = ["Saldo", "Estado"];
  public saldo: number = 0;
  public statusNow: string = "Status off";
  public status: boolean = false;


  public aumentarSaldo() {
    this.saldo = this.saldo + 1000;
    // this.saldo++;
  }
  public disminuirSaldo() {
    this.saldo = this.saldo - 1000;
    // this.saldo--;
  }

  public cambiarEstado() {

    this.status = !this.status;
    if(this.status) {
      //* se ejecuta esta parte "true"
      this.statusNow = 'Active';
    } else {
      this.statusNow = 'Disabled';
    }

    //* true o false
    //* !true => false
    //* !false => true

  }

}
