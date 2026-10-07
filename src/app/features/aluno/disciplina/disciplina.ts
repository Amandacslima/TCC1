import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-disciplina',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './disciplina.html'
})
export class Disciplina implements OnInit {
  codigoDisciplina: string | null = '';
  
  // Simulação de dados que seriam buscados de uma API ou base de dados pelo código
  disciplinaInfo: any = {
    nome: 'Carregando disciplina...',
    professor: 'Professores do Colegiado',
    progresso: 0,
    modulos: [
      { titulo: 'Módulo 1: Apresentação e Fundamentos', aulas: ['Aula 1: Introdução à Ementa', 'Aula 2: Conceitos Base'], concluido: true },
      { titulo: 'Módulo 2: Práticas e Implementação', aulas: ['Aula 3: Configuração do Ambiente', 'Aula 4: Primeiros Testes Práticos'], concluido: false },
      { titulo: 'Módulo 3: Projeto Prático Integrado', aulas: ['Aula 5: Desenvolvimento do Escopo', 'Aula 6: Entrega Final'], concluido: false }
    ]
  };

  // Base de dados simulada para preencher os dados conforme a sigla da URL
  private bancoDeDadosFingido: { [key: string]: any } = {
    'DS122': { nome: 'Desenvolvimento Web I', professor: 'Prof. Razer Montaño', progresso: 72 },
    'DS123': { nome: 'LP Orientada a Objetos I', professor: 'Prof. Carlos Silva', progresso: 85 },
    'DS320': { nome: 'Banco de Dados I', professor: 'Prof. Marcos Souza', progresso: 90 },
    'DS212': { nome: 'Engenharia de Requisitos', professor: 'Prof. Ana Paula', progresso: 60 }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Captura o :codigo enviado na URL
    this.codigoDisciplina = this.route.snapshot.paramMap.get('codigo');
    
    if (this.codigoDisciplina && this.bancoDeDadosFingido[this.codigoDisciplina]) {
      this.disciplinaInfo = {
        ...this.disciplinaInfo,
        ...this.bancoDeDadosFingido[this.codigoDisciplina]
      };
    } else {
      this.disciplinaInfo.nome = `Disciplina ${this.codigoDisciplina || 'Geral'}`;
    }
  }
}