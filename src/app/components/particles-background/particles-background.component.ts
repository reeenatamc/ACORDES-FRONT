import { Component } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-particles-background',
  imports: [],
  templateUrl: './particles-background.component.html',
  styleUrl: './particles-background.component.css'
})
export class ParticlesBackgroundComponent {
  constructor() { }

  ngOnInit(): void {
    this.initParticles();
    particlesJS.load('particles-js', 'particles.json', null);
  }

  initParticles(): void {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,  // Número de partículas
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#0D0630'  // Color de las partículas
        },
        shape: {
          type: 'circle'  // Forma de las partículas
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,  // Tamaño de las partículas
          random: true,
          anim: {
            enable: true,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,  // Distancia entre las partículas conectadas
          color: '#0D0630',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'  // Efecto cuando se pasa el mouse sobre las partículas
          },
          onclick: {
            enable: true,
            mode: 'push'  // Efecto al hacer clic
          }
        }
      }
    });
  }
}
