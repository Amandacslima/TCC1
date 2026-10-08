import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calendario } from '../../../shared/components/calendario/calendario'; // Importa o mesmo componente base

@Component({
  selector: 'app-calendario-professor',
  standalone: true,
  imports: [CommonModule, Calendario], // Declara nos imports
  template: `
    <div class="p-10 max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-[#0B1F3A] mb-6">Agenda Docente (Professor)</h2>
      
      <!-- Chamando o mesmo componente base, mas passando os eventos do professor -->
      <app-calendario [eventos]="eventosProfessor"></app-calendario>
    </div>
  `
})
export class CalendarioProfessor {
  eventosProfessor = [
    { titulo: 'Reunião de Colegiado TADS', data: '2026-10-10', tipo: 'reuniao' },
    { titulo: 'Prazo final para lançamento de notas', data: '2026-10-30', tipo: 'prazo' }
  ];
}