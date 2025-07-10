import { Routes } from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component'
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { WatchListComponent } from './watch-list/watch-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
  },
  {
    path:'watch-list',
    component:WatchListComponent
  }
];
