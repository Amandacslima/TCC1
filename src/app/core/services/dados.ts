import { Injectable } from '@angular/core';
import { Comentario, Disciplina } from '../../shared/models/sistema.models';
import { MOCK_DISCIPLINAS, MOCK_COMENTARIOS } from '../mocks/dados-mock.data';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private disciplinas: Disciplina[] = MOCK_DISCIPLINAS;
  private comentarios: Comentario[] = MOCK_COMENTARIOS;

  // Retorna todas as disciplinas
  getDisciplinas(): Disciplina[] {
    return this.disciplinas;
  }

  // Retorna uma disciplina específica pelo código
  getDisciplinaPorCodigo(codigo: string): Disciplina | undefined {
    return this.disciplinas.find(d => d.codigo === codigo);
  }

  // Comentários
  getComentarios(): Comentario[] {
    return this.comentarios;
  }

  adicionarComentario(comentario: Omit<Comentario, 'id' | 'dataHora'>) {
    const novo: Comentario = {
      ...comentario,
      id: String(Date.now()),
      dataHora: new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
    };
    this.comentarios.unshift(novo);
  }
}