import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosService } from '../../../core/services/dados';
import { Comentario } from '../../../shared/models/comentario.model';

@Component({
  selector: 'app-dashboard-aluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-aluno.html'
})
export class DashboardAluno implements OnInit {
  comentariosRecentes: Comentario[] = [];

  constructor(private dadosService: DadosService) {}

  ngOnInit() {
    this.comentariosRecentes = this.dadosService.getComentarios();
  }

  disciplinas = [
    { codigo: 'DS140', nome: 'Desenvolvimento WEB II', professor: 'Prof. Razer Montaño', progresso: 72, cor: 'bg-blue-600' },
    { codigo: 'DS150', nome: 'Gestão empresas', professor: 'Prof. Paulo Eduardo', progresso: 44, cor: 'bg-purple-500' },
    { codigo: 'DS143', nome: 'Estrutura de dados II', professor: 'Prof. Andreia de Jesus', progresso: 64, cor: 'bg-indigo-800' }
  ];
}