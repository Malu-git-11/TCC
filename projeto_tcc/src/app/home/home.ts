import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDZdVNXrPZR4BjAWaaePkkYyGkivl_1o_8",
  authDomain: "tcc-mapeamento.firebaseapp.com",
  projectId: "tcc-mapeamento",
  storageBucket: "tcc-mapeamento.firebasestorage.app",
  messagingSenderId: "523192941421",
  appId: "1:523192941421:web:558335e3abc335d4453864",
  measurementId: "G-4N89CQH5ZW"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FormsModule()] // Habilita ngModel
})
export class HomeComponent {

  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  // Login
  login() {
    if (!this.email || !this.senha) {
      alert('Preencha e-mail e senha!');
      return;
    }

    signInWithEmailAndPassword(auth, this.email, this.senha)
      .then(() => {
        alert('Logado com sucesso!');
        this.router.navigate(['/menu']);
      })
      .catch((error) => {
        alert('Erro ao logar: ' + error.message);
      });
  }

  // Cadastro
  cadastrar() {
    if (!this.email || !this.senha) {
      alert('Preencha e-mail e senha!');
      return;
    }

    createUserWithEmailAndPassword(auth, this.email, this.senha)
      .then(() => {
        alert('Usuário criado com sucesso!');
        this.router.navigate(['/menu']);
      })
      .catch((error) => {
        alert('Erro ao cadastrar: ' + error.message);
      });
  }
}