import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService, User } from '../../services/auth.service'; // ← ajouter User

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  userForm!: FormGroup;
  user!: User; // ← ajouter cette propriété

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      sexe: [''],
      nationalite: [''],
      dateNaissance: [''],
      typePieceIdentite: [''],
      numeroPieceIdentite: ['']
    });

    this.loadUser();
  }

  loadUser() {
    this.authService.getCurrentUser().subscribe({
      next: (data) => {
        this.user = data;
        this.userForm.patchValue(data);
      },
      error: (err) => {
        console.error('Erreur chargement user:', err);
        if (err.status === 401) {
          alert('Votre session a expiré. Veuillez vous reconnecter.');
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
      }
    });
  }

  onSave() {
    const updatedUser: User = this.userForm.value;
    this.authService.updateUser(updatedUser).subscribe({
      next: (data) => {
        alert('Profil mis à jour');
        this.user = data;
        this.userForm.patchValue(data);
      },
      error: (err) => console.error('Erreur maj user:', err)
    });
  }
}
