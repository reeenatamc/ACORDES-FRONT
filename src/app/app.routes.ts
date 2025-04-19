import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth-pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './components/auth-pages/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent }, 
    {path: 'register', component: RegisterComponent},
];
