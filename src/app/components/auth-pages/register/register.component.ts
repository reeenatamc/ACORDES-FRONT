import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/user.model';
import { FormsModule } from '@angular/forms';
import { ParticlesBackgroundComponent } from "../../particles-background/particles-background.component";
import { LoaderComponent } from "../../loader/loader.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ParticlesBackgroundComponent, LoaderComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = {
    username: '',
    password: '',
    email: '',
    name: '',
    last_name: '',
    phone: ''
  };
  isLoading = false;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;


  constructor(private authService: AuthService, private router: Router) { }


  register() {
    this.isLoading = true;
    const formData = new FormData();

    // Agregar campos del usuario al FormData
    formData.append('username', this.user.username || '');
    formData.append('password', this.user.password || '');
    formData.append('email', this.user.email || '');
    formData.append('name', this.user.name || '');
    formData.append('last_name', this.user.last_name || '');
    formData.append('phone', this.user.phone || '');

    // Agregar la imagen si está seleccionada
    if (this.selectedFile) {
      formData.append('pfp', this.selectedFile, this.selectedFile.name);
    }

    this.authService.register(formData).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/login']);
        }, 3000);
      },
      error: (err) => {
        console.error('Error registering:', err);
        this.isLoading = false;
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      // Opcional: mostrar vista previa
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
