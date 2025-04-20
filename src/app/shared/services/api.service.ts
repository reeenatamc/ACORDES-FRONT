import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Definir la URL base de la API directamente
  private apiUrl = 'http://localhost:8000/api/';  // Cambia esta URL si tu servidor está en otro puerto o dominio

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Obtener lista de usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}users/`);
  }

  // Obtener lista de canciones
  getSongs(): Observable<any> {
    return this.http.get(`${this.apiUrl}songs/`);
  }

  // Obtener favoritos de un usuario
  getFavorites(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}favorites/?user=${userId}`);
  }

  // Crear un nuevo usuario
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}users/`, userData);
  }

  // Crear una nueva canción
  createSong(songData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}songs/`, songData);
  }

  // Crear un favorito
  addFavorite(favoriteData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}favorites/`, favoriteData);
  }

  // Crear una reseña
  createReview(reviewData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}reviews/`, reviewData);
  }

  getUserSongs(): Observable<any> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('Token no encontrado');
    }
  
    return this.http.get(`${this.apiUrl}user-songs/`, {headers: {
      Authorization: `Bearer ${token}`  // Envía el token en la cabecera
    } });
  }
  
}
