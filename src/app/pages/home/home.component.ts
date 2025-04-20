import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPlayerComponent } from "../../components/web-player/web-player/web-player.component";
import { User } from '../../interfaces/user.model';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [CommonModule, WebPlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  currentUser: User | null = null;
  user: any;  // O crea una interfaz User si prefieres


  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(
      (user: User) => {
        this.user = user;
        console.log('Current User:', this.user); // Imprimir el usuario en la consola
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
