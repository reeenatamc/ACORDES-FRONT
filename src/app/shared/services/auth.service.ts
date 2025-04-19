import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Esto garantiza que el servicio esté disponible a nivel global
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/login/'; // URL de tu API en Django

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }
}
