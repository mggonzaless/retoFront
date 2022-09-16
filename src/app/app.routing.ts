import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './principal/inicio/inicio.component'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}