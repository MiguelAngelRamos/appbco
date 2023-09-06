import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { CuentaCorrienteComponent } from './pages/cuenta-corriente/cuenta-corriente.component';
import { GirosComponent } from './pages/giros/giros.component';

 //* http://localhost:4200/home
 //* http://localhost:4200/depositos

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'depositos', component: DepositoComponent },
  { path: 'prestamos', component: PrestamosComponent },
  { path: 'cta-corriente', component: CuentaCorrienteComponent },
  { path: 'giros', component: GirosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
