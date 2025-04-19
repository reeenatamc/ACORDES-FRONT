import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth-pages/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a la página de login por defecto
  { path: 'login', component: LoginComponent }, 
];
