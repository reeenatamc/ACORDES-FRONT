import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/user.model';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = { // Inicialización del objeto user
    username: '',
    password: '',
    email: '',   // Asegúrate de inicializar los valores con los datos correctos
    name: '',
    last_name: '',
    phone: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    // Verifica que los campos obligatorios estén llenos antes de hacer el registro
    if (this.user.username && this.user.password) {
      this.authService.register(this.user).subscribe({
        next: (response) => {
          console.log('User registered:', response);
          this.router.navigate(['/login']);  // Redirige a la página de login
        },
        error: (err) => {
          console.error('Error registering:', err);
        }
      });
    } else {
      console.error('Username and password are required!');
    }
  }

}
