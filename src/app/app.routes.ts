<<<<<<< HEAD
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './components/profil/profil.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' }
=======
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
>>>>>>> frontLogin
];
