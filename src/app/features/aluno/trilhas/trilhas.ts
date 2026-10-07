import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Disciplina {
  codigo: string;
  nome: string;
  desbloqueada: boolean;
  tags?: string[];
}

interface SubCategoria {
  nome: string;
  disciplinas: Disciplina[];
}

interface CategoriaTrilha {
  nome: string;
  icone: string;
  cor: string;
  subcategorias: SubCategoria[];
}

@Component({
  selector: 'app-trilhas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trilhas.html'
})
export class Trilhas {
  curso = "TADS";

  categorias: CategoriaTrilha[] = [
    {
      nome: 'Fundamentos de Computação',
      icone: '🧠',
      cor: 'bg-indigo-900',
      subcategorias: [
        {
          nome: 'Introdução à Programação',
          disciplinas: [
            { codigo: 'DS110', nome: 'Projeto de Algoritmos e Prática de Programação', desbloqueada: true },
          ]
        },
        {
          nome: 'Matemática',
          disciplinas: [
            { codigo: 'DS613', nome: 'Matemática para Computação', desbloqueada: true },
            { codigo: 'DS614', nome: 'Lógica Matemática', desbloqueada: true },
            { codigo: 'DS611', nome: 'Estatística para Computação', desbloqueada: true }
          ]
        }
      ]
    },
    {
      nome: 'Desenvolvimento de Software',
      icone: '💻',
      cor: 'bg-blue-800',
      subcategorias: [
        {
          nome: 'Programação Intermediária',
          disciplinas: [
            { codigo: 'DS123', nome: 'Linguagem de Programação', desbloqueada: true },
            { codigo: 'DS123', nome: 'Linguagem de Programação Orientada a Objetos I', desbloqueada: true },
            { codigo: 'DS131', nome: 'Linguagem de Programação Orientada a Objetos II', desbloqueada: true }
          ]
        },
        {
          nome: 'Aplicações',
          disciplinas: [
            { codigo: 'DS122', nome: 'Desenvolvimento Web I', desbloqueada: true },
            { codigo: 'DS140', nome: 'Desenvolvimento Web II', desbloqueada: true },
            { codigo: 'DS151', nome: 'Desenvolvimento Mobile', desbloqueada: true },
            { codigo: 'DS152', nome: 'Desenvolvimente de Aplicações Corporativas', desbloqueada: true }
          ]
        },
        {
          nome: 'Design & UX/UI',
          disciplinas: [
            { codigo: 'DS250', nome: 'Interação Humano-Computador', desbloqueada: true }
          ]
        }
      ]
    },
    {
      nome: 'Dados & Banco de Dados',
      icone: '🗄️',
      cor: 'bg-sky-700',
      subcategorias: [
        {
          nome: 'Modelagem & SQL',
          disciplinas: [
            { codigo: 'DS320', nome: 'Banco de Dados I', desbloqueada: true }
          ]
        },
        {
          nome: 'SGBDs & Dados Avançados',
          disciplinas: [
            { codigo: 'DS330', nome: 'Banco de Dados II', desbloqueada: true },
            { codigo: 'DS340', nome: 'Banco de Dados III', desbloqueada: true }
          ]
        },
        {
          nome: 'Algoritmos e Estruturas de Dados',
          disciplinas: [
            { codigo: 'DS130', nome: 'Estruturas de Dados I', desbloqueada: true },
            { codigo: 'DS143', nome: 'Estruturas de Dados II', desbloqueada: true }
          ]
        }

      ]
    },
    {
      nome: 'Engenharia de Software',
      icone: '🏗️',
      cor: 'bg-teal-700',
      subcategorias: [
        {
          nome: 'Requisitos & Design de Software',
          disciplinas: [
            { codigo: 'DS212', nome: 'Engenharia de Requisitos', desbloqueada: true },
            { codigo: 'DS220', nome: 'Análise e Projeto de Sistemas I', desbloqueada: true },
            { codigo: 'DS230', nome: 'Análise e Projeto de Sistemas II', desbloqueada: true }
          ]
        },
        {
          nome: 'Planejamento de Software',
          disciplinas: [
            { codigo: 'DS240', nome: 'Engenharia de Software I', desbloqueada: true },
            { codigo: 'DS240', nome: 'Engenharia de Software II', desbloqueada: true }
          ]
        }
      ]
    },
    {
      nome: 'Infraestrutura & Redes',
      icone: '🌐',
      cor: 'bg-cyan-800',
      subcategorias: [
        {
          nome: 'Sistemas Base',
          disciplinas: [
            { codigo: 'DS010', nome: 'Administração de Sistemas', desbloqueada: true },
            { codigo: 'DS030', nome: 'Sistemas Operacionais', desbloqueada: true }
          ]
        },
        {
          nome: 'Conectividade',
          disciplinas: [
            { codigo: 'DS020', nome: 'Redes de Computadores', desbloqueada: true }
          ]
        }
      ]
    },
    {
      nome: 'Negócios & Gestão',
      icone: '📊',
      cor: 'bg-slate-800',
      subcategorias: [
        {
          nome: 'Administração',
          disciplinas: [
            { codigo: 'DS650', nome: 'Gestão de Empresas', desbloqueada: true },
            { codigo: 'DS662', nome: 'Ferramentas da Qualidade', desbloqueada: true },
            { codigo: 'DS662', nome: 'Empreendedorismo e Inovação', desbloqueada: true }
          ]
        },
        {
          nome: 'Gestão de Pessoas e Cultura',
          disciplinas: [
            { codigo: 'DS650', nome: 'Comportamento Organizacional', desbloqueada: true },
            { codigo: 'DS662', nome: 'Humanidades', desbloqueada: true }
          ]
        },
        {
          nome: 'Governança & Regulação',
          disciplinas: [
            { codigo: 'DS630', nome: 'Direito Aplicado', desbloqueada: true },
            { codigo: 'DS260', nome: 'Governança de TI', desbloqueada: true }
          ]
        }
      ]
    }
  ];
}