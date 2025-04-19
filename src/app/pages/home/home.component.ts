import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPlayerComponent } from "../../components/web-player/web-player/web-player.component";


@Component({
  selector: 'app-home',
  imports: [CommonModule, WebPlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  musicItems = ['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5', 'Track 6', 'Track 7'];
  currentIndex = 0;

  get visibleItems(): string[] {
    const visible: string[] = [];
    for (let i = 0; i < 5; i++) {
      const index = (this.currentIndex + i) % this.musicItems.length;
      visible.push(this.musicItems[index]);
    }
    return visible;
  }

  getBoxClass(index: number): string {
    return `box-${index}`; // Puedes mapear estilos según posición aquí
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.musicItems.length) % this.musicItems.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.musicItems.length;
  }


}
