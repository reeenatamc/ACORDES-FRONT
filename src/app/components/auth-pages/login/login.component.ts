import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../../../interfaces/user.model';
import { ParticlesBackgroundComponent } from "../../particles-background/particles-background.component";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CommonModule, HttpClientModule, FormsModule, ParticlesBackgroundComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User = {
    username: '',
    password: ''
  };
  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.user).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.authService.setToken(response.access);  // Guarda el token de acceso
  
        // Verifica el token que se guarda
        console.log('Access Token:', response.access);
  
        // Obtener los datos del usuario después de iniciar sesión
        this.authService.getCurrentUser().subscribe({
          next: (user) => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigate(['/home']);
          },
          error: (err) => {
            console.error('Error al obtener datos del usuario:', err);
          }
        });
      },
      error: (err) => {
        console.error('Error logging in:', err);
      }
    });
  }
  
}

