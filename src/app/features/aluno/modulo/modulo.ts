import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DadosService } from '../../../core/services/dados';
import { Comentario } from '../../../shared/models/comentario.model';

@Component({
  selector: 'app-modulo',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './modulo.html'
})
export class Modulo implements OnInit {
  codigoDisciplina: string | null = '';
  moduloId: string | null = '';
  
  disciplinaNome = 'Banco de Dados I'; // Exemplo dinâmico
  moduloNome = 'Criação de Tabelas e DDL'; // Exemplo dinâmico
  turma = 'Vespertino';

  // Conteúdos simulados do módulo
  conteudos = [
    { tipo: 'slides', titulo: 'Slides da Aula - Comandos DDL e Tipos de Dados (PDF)' },
    { tipo: 'video', titulo: 'Vídeo-aula Explicativa: Praticando no SGBD' },
    { tipo: 'exercicio', titulo: 'Lista de Exercícios Práticos 01 - Criação de Schema' }
  ];

  // Formulário do novo comentário
  novoTexto = '';
  novoTipo: 'duvida' | 'comentario' | 'grupo' = 'duvida';

  // Comentários filtrados deste módulo específico
  comentariosModulo: Comentario[] = [];

  constructor(private route: ActivatedRoute, private dadosService: DadosService) {}

  ngOnInit() {
    this.codigoDisciplina = this.route.snapshot.paramMap.get('codigo');
    this.moduloId = this.route.snapshot.paramMap.get('moduloId');
    
    // Carrega os comentários existentes no serviço
    this.carregarComentarios();
  }

  carregarComentarios() {
    // Filtra os comentários que pertencem a esta disciplina e módulo
    const todos = this.dadosService.getComentarios();
    this.comentariosModulo = todos.filter(c => c.moduloNome === this.moduloNome);
  }

  enviarComentario() {
    if (!this.novoTexto.trim()) return;

    this.dadosService.adicionarComentario({
      autor: 'Giovanna Dornelles',
      avatar: 'GD',
      disciplinaCodigo: this.codigoDisciplina || 'DS320',
      disciplinaNome: this.disciplinaNome,
      turma: this.turma,
      moduloNome: this.moduloNome,
      texto: this.novoTexto,
      tipo: this.novoTipo
    });

    this.novoTexto = '';
    this.novoTipo = 'duvida';
    this.carregarComentarios(); // Atualiza a lista local
  }
}