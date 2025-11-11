import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  token: string = '';
  newPassword: string = '';
  message: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
  }
  onSubmit() {
    // On crée un objet JSON à envoyer dans le corps de la requête
    const body = {
      token: this.token,
      newPassword: this.newPassword
    };

    this.http.post('http://localhost:8081/api/auth/reset-password', body, { responseType: 'text' })
      .subscribe({
        next: (res) => this.message = res, // message de succès
        error: (err) => this.message = 'Erreur lors de la réinitialisation.' // message d'erreur
      });
  }
  goToLogin() {
    this.router.navigate(['/login']); // navigation vers login
  }
}
