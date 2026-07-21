import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AsyncPipe, NgIf],
  template: `
    <app-header></app-header>
    <div *ngIf="loadingService.isLoading$ | async" style="text-align:center;padding:.5rem;background:#e8eaf6">
      <div class="spinner" style="display:inline-block"></div>
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(public loadingService: LoadingService) {}
}
