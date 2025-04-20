import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';


@Component({
  selector: 'app-web-player',
  standalone: true,
  imports: [],
  templateUrl: './web-player.component.html',
  styleUrl: './web-player.component.css'
})
export class WebPlayerComponent implements OnInit, OnDestroy {
  isPlaying = false;
  progress = 0;
  currentTrackIndex = 0;
  audio = new Audio();
  tracks: any[] = [];
  currentUser: any;
  progressInterval: any;
  userSongs: any[] = []; // Almacena las canciones del usuario

  constructor(private authService: AuthService, private apiService: ApiService) { }

  ngOnInit() {
    this.loadUserSongs();  // Cargar canciones al iniciar el componente
    this.loadCurrentUser();  // Cargar los datos del usuario
  }

  loadCurrentUser() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
    }
  }
  loadUserSongs(): void {
    this.apiService.getUserSongs().subscribe({
      next: (songs) => {
        console.log('Canciones del usuario:', songs);
        this.userSongs = songs;
      },
      error: (err) => {
        console.error('Error al obtener canciones del usuario:', err);
      }
    });
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.audio.play();
      // Inicia el intervalo para actualizar el progreso
      this.startProgressUpdate();
    } else {
      this.audio.pause();
      // Detiene el intervalo cuando se pausa la canción
      this.stopProgressUpdate();
    }
  }

  loadTrack(index: number) {
    const track = this.tracks[index];
    const audioFileUrl = track.audio_file;
    console.log('URL del archivo de audio:', audioFileUrl);

    if (!audioFileUrl) {
      console.error('La URL del archivo de audio no es válida');
      return;
    }

    this.audio.src = audioFileUrl;
    this.audio.load();
    this.audio.onloadedmetadata = () => {
      console.log('Audio cargado correctamente');
      this.progress = 0; // Reinicia el progreso al cargar una nueva canción
    };
  }

  ngOnDestroy() {
    this.audio.pause();
    this.stopProgressUpdate(); // Asegúrate de detener el intervalo al destruir el componente
  }

  // Método para actualizar el progreso de la canción
  startProgressUpdate() {
    this.progressInterval = setInterval(() => {
      if (this.audio.duration) {
        this.progress = (this.audio.currentTime / this.audio.duration) * 100;
      }
    }, 500); // Actualiza cada segundo
  }

  // Método para detener el intervalo de actualización del progreso
  stopProgressUpdate() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  onProgressChange(event: any) {
    const value = event.target.value; // Obtiene el valor actual del control deslizante
    this.progress = value;

    // Actualiza el tiempo de reproducción del audio según el valor del control deslizante
    const duration = this.audio.duration;
    const currentTime = (value / 100) * duration;
    this.audio.currentTime = currentTime;
  }

  previousTrack() {
    if (this.currentTrackIndex > 0) {
      this.currentTrackIndex--;
      this.loadTrack(this.currentTrackIndex);
    }
  }

  nextTrack() {
    if (this.currentTrackIndex < this.tracks.length - 1) {
      this.currentTrackIndex++;
      this.loadTrack(this.currentTrackIndex);
    }
  }
}
