import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navigation',
  imports: [ButtonModule,RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  router = inject(Router)

  navigate() {
    this.router.navigate(['/watch-list']);
  }
}
