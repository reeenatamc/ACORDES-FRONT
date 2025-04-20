import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from '../../interfaces/user.model';

@Injectable({
  providedIn: 'root' // Esto garantiza que el servicio esté disponible a nivel global
})
export class AuthService {
  // URL base de tu API en Django
  private apiUrl = 'http://127.0.0.1:8000'; // Asegúrate de que esta URL sea la correcta

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/token/`, user);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/users/`, user);
  }

  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/token/refresh/`, { refresh: refreshToken });
  }

  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

}
