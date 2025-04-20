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
import { LoaderComponent } from "../../loader/loader.component";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CommonModule, HttpClientModule, FormsModule, ParticlesBackgroundComponent, LoaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User = {
    username: '',
    password: ''
  };
  isLoading = false;
  constructor(private authService: AuthService, private router: Router) { }

  // login(): void {
  //   this.isLoading = true;
  //   this.authService.login(this.user).subscribe({
  //     next: (response) => {
  //       console.log('Login successful:', response);
  //       this.authService.setToken(response.access);  // Guarda el token de acceso
  
  //       // Verifica el token que se guarda
  //       console.log('Access Token:', response.access);
  
  //       // Obtener los datos del usuario después de iniciar sesión
  //       this.authService.getCurrentUser().subscribe({
  //         next: (user) => {
  //           localStorage.setItem('currentUser', JSON.stringify(user));
            
  //              // ocultamos el spinner
  //           this.router.navigate(['/home']);
  //           this.isLoading = false;

  //         },
  //         error: (err) => {
  //           console.error('Error al obtener datos del usuario:', err);
  //         }
  //       });
  //     },
  //     error: (err) => {
  //       console.error('Error logging in:', err);
  //     }
  //   });
  // }
  login(): void {
    this.isLoading = true;
    this.authService.login(this.user).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.authService.setToken(response.access);  // Guarda el token de acceso
        console.log('Access Token:', response.access);
  
        this.authService.getCurrentUser().subscribe({
          next: (user) => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            this.router.navigate(['/home']).then(() => {
              this.isLoading = false;  // 🔁 El loader se apaga solo cuando Angular termina de navegar
            });
          },
          error: (err) => {
            console.error('Error al obtener datos del usuario:', err);
            this.isLoading = false;
          }
        });
      },
      error: (err) => {
        console.error('Error logging in:', err);
        this.isLoading = false; // 🔴 También aquí
      }
    });
  }
  
}

