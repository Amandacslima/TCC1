import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-aluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-aluno.html'
})
export class DashboardAluno {
  // Mock de dados para simular as disciplinas do protótipo
  disciplinas = [
    { codigo: 'DS140', nome: 'Desenvolvimento WEB II', professor: 'Prof. Razer Montaño', progresso: 72, cor: 'bg-blue-600' },
    { codigo: 'DS150', nome: 'Gestão empresas', professor: 'Prof. Paulo Eduardo', progresso: 44, cor: 'bg-purple-500' },
    { codigo: 'DS143', nome: 'Estrutura de dados II', professor: 'Prof. Andreia de Jesus', progresso: 64, cor: 'bg-indigo-800' }
  ];
}