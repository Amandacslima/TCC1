import { Injectable } from '@angular/core';
import { Comentario, ModuloAula } from '../../shared/models/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  
  // Lista inicial simulando comentários recentes já existentes no sistema
  private comentariosIniciais: Comentario[] = [
    {
      id: '1',
      autor: 'Giovanna Dornelles',
      avatar: 'GD',
      disciplinaCodigo: 'DS320',
      disciplinaNome: 'Banco de Dados I',
      turma: 'Vespertino',
      moduloNome: 'Criação de Tabelas e DDL',
      texto: 'Alguém consegue me passar a criação da tabela cliente? a minha deu o seguinte erro: erro 2222 etcetc...',
      dataHora: '07/10/2026 15:36',
      tipo: 'duvida'
    },
    {
      id: '2',
      autor: 'Carlos Eduardo',
      avatar: 'CE',
      disciplinaCodigo: 'DS122',
      disciplinaNome: 'Desenvolvimento Web I',
      turma: 'Noturno',
      moduloNome: 'Flexbox e Grid Layout',
      texto: 'Pessoal, estou procurando mais 2 integrantes para fecharmos o grupo do trabalho prático de Web I. Alguém topo?',
      dataHora: '07/10/2026 14:10',
      tipo: 'grupo'
    }
  ];

  // Retorna todos os comentários (usado no Dashboard)
  getComentarios() {
    return this.comentariosIniciais;
  }

  // Adiciona um novo comentário (usado na página da disciplina/módulo)
  adicionarComentario(comentario: Omit<Comentario, 'id' | 'dataHora'>) {
    const novo: Comentario = {
      ...comentario,
      id: String(Date.now()),
      dataHora: new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
    };
    this.comentariosIniciais.unshift(novo); // Insere no topo da lista
  }

  // Simulação de módulos por disciplina
  getModulosPorDisciplina(codigo: string): ModuloAula[] {
    return [
      {
        id: 'm1',
        titulo: 'Módulo 1: Apresentação e Fundamentos',
        concluido: true,
        conteudos: [
          { tipo: 'slides', titulo: 'Slides de Introdução (PDF/PPT)' },
          { tipo: 'video', titulo: 'Aula Gravada: Visão Geral' }
        ]
      },
      {
        id: 'm2',
        titulo: 'Criação de Tabelas e DDL',
        concluido: false,
        conteudos: [
          { tipo: 'pdf', titulo: 'Apostila Teórica - Comandos DDL' },
          { tipo: 'exercicio', titulo: 'Lista de Exercícios Práticos 01' }
        ]
      }
    ];
  }
}