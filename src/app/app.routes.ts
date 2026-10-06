import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { MainLayout } from './shared/layouts/main-layout/main-layout';
import { DashboardAluno } from './features/aluno/dashboard-aluno/dashboard-aluno';
import { Disciplinas } from './features/aluno/disciplinas/disciplinas';
import { Trilhas } from './features/aluno/trilhas/trilhas';
import { Oportunidades } from './features/aluno/oportunidades/oportunidades';
import { Portfolio } from './features/aluno/portfolio/portfolio';
import { Calendario } from './features/aluno/calendario/calendario';

import { DashboardProfessor } from './features/professor/dashboard-professor/dashboard-professor';
import { GerenciarTurmas } from './features/professor/gerenciar-turmas/gerenciar-turmas';
import { Relatorios } from './features/professor/relatorios/relatorios'; // Novo import

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'aluno',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardAluno },
      { path: 'disciplinas', component: Disciplinas },
      { path: 'trilhas', component: Trilhas },
      { path: 'oportunidades', component: Oportunidades },
      { path: 'portfolio', component: Portfolio },
      { path: 'calendario', component: Calendario }
    ]
  },
  {
    path: 'professor',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardProfessor },
      { path: 'turmas', component: GerenciarTurmas },
      { path: 'relatorios', component: Relatorios } // Nova rota do professor
    ]
  },
  { path: '**', redirectTo: 'login' }
];