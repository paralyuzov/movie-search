import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { ToastComponent } from "./toast/toast.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-search';
}
