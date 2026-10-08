export interface Aluno {
  id: string;
  nome: string;
  email: string;
  curso: string;
  matricula: string;
  avatar: string;
}

export interface Professor {
  id: string;
  nome: string;
  email: string;
  departamento: string;
  avatar: string;
}

export interface ConteudoAula {
  id: string;
  tipo: 'slides' | 'pdf' | 'video' | 'exercicio';
  titulo: string;
  url?: string;
}

export interface ModuloAula {
  id: string;
  titulo: string;
  concluido: boolean;
  conteudos: ConteudoAula[];
}

export interface Disciplina {
  codigo: string;
  nome: string;
  professorId: string;
  professorNome: string;
  progresso: number;
  status: 'ativa' | 'concluida';
  cor: string;
  modulos: ModuloAula[];
}

export interface Comentario {
  id: string;
  autor: string;
  avatar: string;
  disciplinaCodigo: string;
  disciplinaNome: string;
  turma?: string;
  moduloNome: string;
  texto: string;
  dataHora: string;
  tipo: 'duvida' | 'comentario' | 'grupo';
}

export interface EventoCalendario {
  id: string;
  titulo: string;
  data: string; // Formato 'YYYY-MM-DD'
  tipo: 'prazo' | 'prova' | 'reuniao' | 'aula';
  perfil: 'aluno' | 'professor' | 'ambos';
}