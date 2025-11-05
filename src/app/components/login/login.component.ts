import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="login-wrapper">
    <div class="login-card">
      <h1>TravelX</h1>
      <p class="subtitle">Connectez-vous pour planifier votre prochaine aventure</p>

      <div *ngIf="errorMessage" class="error-message">{{ errorMessage }}</div>

      <div class="input-group">
        <span class="icon">📧</span>
        <input type="email" [(ngModel)]="email" required placeholder="Email">
      </div>

      <div class="input-group">
        <span class="icon">🔒</span>
        <input type="password" [(ngModel)]="password" required placeholder="Mot de passe">
      </div>

      <button (click)="login()">Se connecter</button>
      <a href="#" class="forgot-password">Mot de passe oublié ?</a>
    </div>
  </div>
  `,
  styles: [`
    /* Wrapper avec image voyage */
    .login-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80') no-repeat center center/cover;
      font-family: 'Poppins', sans-serif;
    }

    .login-card {
      background-color: rgba(255,255,255,0.95);
      padding: 50px 40px;
      border-radius: 20px;
      width: 400px;
      box-shadow: 0 15px 40px rgba(0,0,0,0.3);
      text-align: center;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 5px;
      color: #2c3e50;
      font-weight: 700;
    }

    .subtitle {
      font-size: 14px;
      color: #34495e;
      margin-bottom: 30px;
    }

    .input-group {
      position: relative;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      background-color: #f0f4f8;
      border-radius: 50px;
      padding: 0 15px;
    }

    .input-group .icon {
      margin-right: 10px;
      font-size: 18px;
      color: #6c63ff;
    }

    .input-group input {
      border: none;
      outline: none;
      padding: 15px 10px;
      flex: 1;
      font-size: 14px;
      border-radius: 50px;
      background: transparent;
    }

    .input-group input::placeholder {
      color: #aaa;
    }

    button {
      width: 100%;
      padding: 14px;
      border: none;
      border-radius: 50px;
      background: linear-gradient(90deg, #6c63ff, #ffb347);
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.3s;
    }

    button:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(108,99,255,0.5);
    }

    .forgot-password {
      display: block;
      margin-top: 15px;
      font-size: 13px;
      color: #6c63ff;
      text-decoration: none;
    }

    .forgot-password:hover {
      text-decoration: underline;
    }

    .error-message {
      color: #e74c3c;
      font-size: 14px;
      margin-bottom: 15px;
    }

    @media (max-width: 450px) {
      .login-card {
        width: 90%;
        padding: 40px 20px;
      }
    }
  `]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {
    console.log('Email:', this.email, 'Password:', this.password);
    // Appel au backend pour authentification
  }
}
