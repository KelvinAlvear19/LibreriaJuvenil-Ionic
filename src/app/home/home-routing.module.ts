import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home.module';
import { HomePage } from './home.page';
import { LibroEditarComponent } from './libro-editar/libro-editar.component';
import { LibroFormComponent } from './libro-form/libro-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'libro-form',
    component: LibroFormComponent,
  },
  {
    path: ':id',
    component: LibroEditarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
