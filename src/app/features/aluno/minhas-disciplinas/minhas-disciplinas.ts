import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Obrigatório para o routerLink funcionar

interface DisciplinaItem {
  codigo: string;
  nome: string;
  professor: string;
  progresso: number;
  status: 'ativa' | 'concluida';
  cor: string;
}

@Component({
  selector: 'app-minha-disciplinas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './minhas-disciplinas.html'
})
export class MinhasDisciplinas {
  // Filtro atual: 'ativas' (não vencidas), 'concluidas' (vencidas), ou 'todas'
  filtroAtual: 'todas' | 'ativas' | 'concluidas' = 'ativas';

  // Lista de disciplinas do curso baseada nas trilhas
  disciplinas: DisciplinaItem[] = [
    { codigo: 'DS110', nome: 'Projeto de Algoritmos', professor: 'Prof. Razer Montaño', progresso: 100, status: 'concluida', cor: 'bg-indigo-600' },
    { codigo: 'DS130', nome: 'Estruturas de Dados', professor: 'Prof. Andreia de Jesus', progresso: 100, status: 'concluida', cor: 'bg-indigo-800' },
    { codigo: 'DS123', nome: 'LP Orientada a Objetos I', professor: 'Prof. Carlos Silva', progresso: 85, status: 'ativa', cor: 'bg-blue-600' },
    { codigo: 'DS122', nome: 'Desenvolvimento Web I', professor: 'Prof. Razer Montaño', progresso: 72, status: 'ativa', cor: 'bg-blue-700' },
    { codigo: 'DS320', nome: 'Banco de Dados I', professor: 'Prof. Marcos Souza', progresso: 90, status: 'ativa', cor: 'bg-sky-600' },
    { codigo: 'DS212', nome: 'Engenharia de Requisitos', professor: 'Prof. Ana Paula', progresso: 60, status: 'ativa', cor: 'bg-teal-600' },
    { codigo: 'DS030', nome: 'Sistemas Operacionais', professor: 'Prof. Roberto Carlos', progresso: 78, status: 'ativa', cor: 'bg-cyan-700' },
    { codigo: 'DS650', nome: 'Gestão de Empresas', professor: 'Prof. Paulo Eduardo', progresso: 44, status: 'ativa', cor: 'bg-slate-700' },
    { codigo: 'DS011', nome: 'Introdução à Arquitetura de Computadores', professor: 'Prof. Carlos Eduardo', progresso: 100, status: 'concluida', cor: 'bg-gray-600' }
  ];

  // Getter que retorna a lista filtrada com base na escolha do usuário
  get disciplinasFiltradas() {
    if (this.filtroAtual === 'ativas') {
      return this.disciplinas.filter(d => d.status === 'ativa');
    } else if (this.filtroAtual === 'concluidas') {
      return this.disciplinas.filter(d => d.status === 'concluida');
    }
    return this.disciplinas; // 'todas'
  }

  alterarFiltro(tipo: 'todas' | 'ativas' | 'concluidas') {
    this.filtroAtual = tipo;
  }
}