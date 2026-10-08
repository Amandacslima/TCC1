import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calendario } from '../../../shared/components/calendario/calendario'; // Ajuste o caminho conforme sua pasta

@Component({
  selector: 'app-calendario-aluno',
  standalone: true,
  imports: [CommonModule, Calendario], // Aqui deve estar a classe Calendario, não a rota
  template: `
    <div class="p-10 max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-[#0B1F3A] mb-6">Calendário do Aluno</h2>
      
      <!-- Agora o Angular reconhecerá a propriedade [eventos] porque ela foi declarada com @Input() no componente base -->
      <app-calendario [eventos]="eventosAluno"></app-calendario>
    </div>
  `
})
export class CalendarioAluno {
  eventosAluno = [
    { titulo: 'Entrega Trab. Web II', data: '2026-10-15', tipo: 'prazo' },
    { titulo: 'Prova de Banco de Dados', data: '2026-10-22', tipo: 'prova' }
  ];
}