import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { GirosComponent } from './pages/giros/giros.component';
import { CuentaCorrienteComponent } from './pages/cuenta-corriente/cuenta-corriente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DepositoComponent,
    PrestamosComponent,
    GirosComponent,
    CuentaCorrienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
