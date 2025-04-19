import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-web-player',
  standalone: true,
  imports: [],
  templateUrl: './web-player.component.html',
  styleUrl: './web-player.component.css'
})
export class WebPlayerComponent {
  isPlaying = false;
  progress = 0;

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    // Aquí puedes agregar la lógica de reproducción
  }

  previousTrack() {
    // Lógica para retroceder canción
  }

  nextTrack() {
    // Lógica para avanzar canción
  }

  onProgressChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.progress = parseInt(input.value, 10);
  }
  
}
