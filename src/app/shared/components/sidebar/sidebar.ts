import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.html'
})
export class Sidebar {
  constructor(public router: Router) {}

  isProfessor(): boolean {
    return this.router.url.includes('/professor');
  }
}