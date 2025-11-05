import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { UserService, User } from '../../services/user.service';

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
  user!: User;

  constructor(private fb: FormBuilder, private userService: UserService) {}

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
    this.userService.getCurrentUser().subscribe({
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
    this.userService.updateUser(updatedUser).subscribe({
      next: (data) => {
        alert('Profil mis à jour ');
        this.user = data;
        this.userForm.patchValue(data);
      },
      error: (err) => console.error('Erreur maj user:', err)
    });
  }
}
