import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  sliderItems = [
    { image: 'https://via.placeholder.com/300x200?text=Card+1', title: 'Card 1' },
    { image: 'https://via.placeholder.com/300x200?text=Card+2', title: 'Card 2' },
    { image: 'https://via.placeholder.com/300x200?text=Card+3', title: 'Card 3' },
    { image: 'https://via.placeholder.com/300x200?text=Card+4', title: 'Card 4' },
    { image: 'https://via.placeholder.com/300x200?text=Card+5', title: 'Card 5' },
    { image: 'https://via.placeholder.com/300x200?text=Card+6', title: 'Card 6' },
    { image: 'https://via.placeholder.com/300x200?text=Card+7', title: 'Card 7' },
    { image: 'https://via.placeholder.com/300x200?text=Card+8', title: 'Card 8' }
  ];

  currentIndex = 0; // Índice de la tarjeta actual

  // Función para mostrar las siguientes 3 tarjetas
  next(): void {
    if (this.currentIndex < this.sliderItems.length - 3) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Vuelve al principio (infinito)
    }
    this.updateSliderPosition();
  }

  // Función para mostrar las 3 tarjetas anteriores
  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.sliderItems.length - 3; // Vuelve al final (infinito)
    }
    this.updateSliderPosition();
  }

  // Actualiza la posición del slider según el índice actual
  updateSliderPosition(): void {
    const slider = document.querySelector('.slider') as HTMLElement;
    if (slider) {
      // Desplazamos el slider según el índice
      slider.style.transform = `translateX(-${this.currentIndex * 33.33}%)`;
    }
  }
}
