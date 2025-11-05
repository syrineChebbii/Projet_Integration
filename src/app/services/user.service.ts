import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  nom?: string;
  prenom?: string;
  sexe?: string;
  dateNaissance?: string;
  nationalite?: string;
  typePieceIdentite?: string;
  numeroPieceIdentite?: string;
  email?: string;
}

=======
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

>>>>>>> frontLogin
@Injectable({
  providedIn: 'root'
})
export class UserService {
<<<<<<< HEAD

  private apiUrl = 'http://localhost:8081/api/user';

  constructor(private http: HttpClient) {}

  // Récupération du token JWT stocké localement
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // ✅ Récupérer le profil de l’utilisateur connecté
  getCurrentUser(): Observable<User> {
    const headers = this.getAuthHeaders();
    if (!headers.get('Authorization')) {
      throw new Error('Utilisateur non authentifié (token manquant)');
    }
    return this.http.get<User>(`${this.apiUrl}/me`, { headers });
  }

  // ✅ Mettre à jour le profil utilisateur
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/update`, user, {
      headers: this.getAuthHeaders()
    });
=======
  private apiUrl = 'http://localhost:8080/api/users'; // adapte selon ton backend

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
>>>>>>> frontLogin
  }
}
