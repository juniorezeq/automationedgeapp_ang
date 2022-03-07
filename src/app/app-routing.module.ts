import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './views/formulario/formulario.component';
import { HomeComponent } from './views/home/home.component';
import { DialogResultComponent } from './views/login-form/dialog-result/dialog-result.component';
import { LoginFormComponent } from './views/login-form/login-form.component';
import { ProgressoComponent } from './views/progresso/progresso.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'logado',
    component: FormularioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
