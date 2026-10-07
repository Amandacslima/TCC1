export interface Comentario {
  id: string;
  autor: string;
  avatar: string;
  disciplinaCodigo: string;
  disciplinaNome: string;
  turma?: string; // Ex: 'Vespertino'
  moduloNome: string;
  texto: string;
  dataHora: string;
  tipo: 'duvida' | 'comentario' | 'grupo'; // 'grupo' para o pedido de formação de grupo
}

export interface ModuloAula {
  id: string;
  titulo: string;
  concluido: boolean;
  conteudos: {
    tipo: 'slides' | 'pdf' | 'video' | 'exercicio';
    titulo: string;
    url?: string;
  }[];
}