import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class Login {
  isLoginMode = true;
  email = '';
  senha = '';
  erro = '';

  constructor(private router: Router) {}

  alternarModo() {
    this.isLoginMode = !this.isLoginMode;
    this.erro = ''; // Limpa os erros ao trocar de tela
  }

  entrar() {
    // Lógica provisória para o protótipo
    if (this.senha === '1234') {
      // Se tiver "professor" no email, vai para a área do professor
      if (this.email.toLowerCase().includes('professor')) {
        this.router.navigate(['/professor']);
      } else {
        // Qualquer outro email com senha 1234 vai para a área do aluno
        this.router.navigate(['/aluno']);
      }
    } else {
      this.erro = 'Senha incorreta. Use 1234 para acessar o protótipo.';
    }
  }
}