import { Component, inject } from '@angular/core';
import { MoviesService } from '../../movies/movies.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe, CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { ProgressSpinner } from 'primeng/progressspinner';
import { Router } from '@angular/router';
import { WatchListService } from '../../watch-list/watch-list.service';
import { Movie } from '../../models/Movies';

@Component({
  selector: 'app-movie-list',
  imports: [
    CardModule,
    ButtonModule,
    CommonModule,
    AsyncPipe,
    InputTextModule,
    FloatLabel,
    ProgressSpinner,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  movieService = inject(MoviesService);
  watchListService = inject(WatchListService);
  router = inject(Router);
  movies$ = this.movieService.movies$;
  loading$ = this.movieService.loading$;
  error$ = this.movieService.error$;

  onSearch(searchTerm: string) {
    if (!searchTerm || searchTerm.trim() === '') {
      return;
    }
    this.movieService.loadMovies(searchTerm.trim());
  }

  viewDetails(imdbID: string) {
    this.router.navigate(['/movies', imdbID]);
  }

}
