import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import {TablaComponent} from './componentes/tabla/tabla.component'
import {LoginComponent} from './componentes/login/login.component'

import {RegistroComponent} from './componentes/registro/registro.component'

const routes: Routes = [
  {path: 'graficas', component: GraficasComponent},
  {path: 'tabla', component: TablaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
