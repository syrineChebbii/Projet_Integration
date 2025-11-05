import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule,HttpClientModule]

})
export class RegisterComponent {

  nom: string = '';
  prenom: string ='';
  email: string = '';
  motDePasse: string = '';
  sexe: string= '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const body = { nom: this.nom, email: this.email, motDePasse: this.motDePasse };
    this.http.post('http://localhost:8081/api/auth/register', body)
      .subscribe({
        next: (res) => alert('Inscription réussie !'),
        error: (err) => alert('Erreur : ' + err.error)
      });
  }
}
