import { Component } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const body = { email: this.email }; // JSON
  
    this.http.post('http://localhost:8081/api/auth/forgot-password', body, { responseType: 'text' })
      .subscribe({
        next: (res) => this.message = res,
        error: (err) => this.message = 'Erreur lors de l’envoi de l’email.'
      });
  }
  
}
