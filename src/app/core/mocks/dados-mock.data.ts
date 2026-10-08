import { Disciplina, Comentario, EventoCalendario, Aluno, Professor } from '../../shared/models/sistema.models';

export const MOCK_ALUNO_ATUAL: Aluno = {
  id: 'a1',
  nome: 'Giovanna Dornelles Barichello',
  email: 'giovanna@escola.pr.gov.br',
  curso: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
  matricula: 'GRR20245178',
  avatar: 'GD'
};

export const MOCK_PROFESSORES: Professor[] = [
  { id: 'p1', nome: 'Prof. Razer Montaño', email: 'razer@ufpr.br', departamento: 'Informática', avatar: 'RM' },
  { id: 'p2', nome: 'Prof. Andreia de Jesus', email: 'andreia@ufpr.br', departamento: 'Informática', avatar: 'AJ' },
  { id: 'p3', nome: 'Prof. Marcos Souza', email: 'marcos@ufpr.br', departamento: 'Informática', avatar: 'MS' }
];

export const MOCK_DISCIPLINAS: Disciplina[] = [
  {
    codigo: 'DS110',
    nome: 'Projeto de Algoritmos',
    professorId: 'p1',
    professorNome: 'Prof. Razer Montaño',
    progresso: 100,
    status: 'concluida',
    cor: 'bg-indigo-600',
    modulos: [
      {
        id: 'mod-1',
        titulo: 'Módulo 1: Introdução à Complexidade',
        concluido: true,
        conteudos: [{ id: 'c1', tipo: 'slides', titulo: 'Notação Big-O (PDF)' }]
      }
    ]
  },
  {
    codigo: 'DS320',
    nome: 'Banco de Dados I',
    professorId: 'p3',
    professorNome: 'Prof. Marcos Souza',
    progresso: 90,
    status: 'ativa',
    cor: 'bg-sky-600',
    modulos: [
      {
        id: 'mod-2',
        titulo: 'Criação de Tabelas e DDL',
        concluido: false,
        conteudos: [
          { id: 'c2', tipo: 'pdf', titulo: 'Apostila Teórica - Comandos DDL' },
          { id: 'c3', tipo: 'exercicio', titulo: 'Lista de Exercícios Práticos 01' }
        ]
      }
    ]
  },
  {
    codigo: 'DS122',
    nome: 'Desenvolvimento Web I',
    professorId: 'p1',
    professorNome: 'Prof. Razer Montaño',
    progresso: 72,
    status: 'ativa',
    cor: 'bg-blue-700',
    modulos: [
      {
        id: 'mod-3',
        titulo: 'Flexbox e Grid Layout',
        concluido: true,
        conteudos: [{ id: 'c4', tipo: 'video', titulo: 'Aula Prática: CSS Moderno' }]
      }
    ]
  }
];

export const MOCK_COMENTARIOS: Comentario[] = [
  {
    id: 'com-1',
    autor: 'Giovanna Dornelles',
    avatar: 'GD',
    disciplinaCodigo: 'DS320',
    disciplinaNome: 'Banco de Dados I',
    turma: 'Vespertino',
    moduloNome: 'Criação de Tabelas e DDL',
    texto: 'Alguém consegue me passar a criação da tabela cliente? a minha deu o seguinte erro...',
    dataHora: '07/10/2026 15:36',
    tipo: 'duvida'
  },
  {
    id: 'com-2',
    autor: 'Carlos Eduardo',
    avatar: 'CE',
    disciplinaCodigo: 'DS122',
    disciplinaNome: 'Desenvolvimento Web I',
    turma: 'Noturno',
    moduloNome: 'Flexbox e Grid Layout',
    texto: 'Pessoal, estou procurando mais 2 integrantes para fecharmos o grupo do trabalho prático.',
    dataHora: '07/10/2026 14:10',
    tipo: 'grupo'
  }
];

export const MOCK_EVENTOS: EventoCalendario[] = [
  { id: 'ev-1', titulo: 'Entrega Trab. Web II', data: '2026-10-15', tipo: 'prazo', perfil: 'aluno' },
  { id: 'ev-2', titulo: 'Prova de Banco de Dados', data: '2026-10-22', tipo: 'prova', perfil: 'aluno' },
  { id: 'ev-3', titulo: 'Reunião de Colegiado TADS', data: '2026-10-10', tipo: 'reuniao', perfil: 'professor' },
  { id: 'ev-4', titulo: 'Prazo final para notas', data: '2026-10-30', tipo: 'prazo', perfil: 'professor' }
];