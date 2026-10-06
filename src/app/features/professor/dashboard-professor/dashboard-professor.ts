import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-professor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-professor.html'
})
export class DashboardProfessor {
  turmas = [
    { codigo: 'DS140', nome: 'Desenvolvimento WEB II', alunos: 35, pendencias: 12, cor: 'bg-blue-600' },
    { codigo: 'DS150', nome: 'Gestão de Empresas', alunos: 42, pendencias: 0, cor: 'bg-purple-500' }
  ];
}