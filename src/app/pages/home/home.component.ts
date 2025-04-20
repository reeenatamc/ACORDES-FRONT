import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPlayerComponent } from "../../components/web-player/web-player/web-player.component";
import { User } from '../../interfaces/user.model';
import { AuthService } from '../../shared/services/auth.service';
import { ApiService } from '../../shared/services/api.service'; // Asegúrate de importar ApiService
import { Router } from '@angular/router';
import { SliderComponent } from "../../components/slider/slider.component";



@Component({
  selector: 'app-home',
  imports: [CommonModule, WebPlayerComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  user: any = null;  // Variable para almacenar los datos del usuario
  userSongs: any[] = [];

  constructor(private router: Router, private authService: AuthService, private apiService: ApiService) {}

  ngOnInit(): void {
    // Verificar si el usuario está guardado en localStorage
    const currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
      this.user = JSON.parse(currentUser);
      console.log('Usuario cargado desde localStorage:', this.user);
    } else {
      console.log('No hay usuario en localStorage');
      // Redirigir a login si no hay usuario en localStorage
      this.router.navigate(['/login']);
    }

  }

  
}

