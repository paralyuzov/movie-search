import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { AsyncPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ProgressSpinner } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { MovieDetails } from '../../models/Movies';
import { WatchListService } from '../../watch-list/watch-list.service';

@Component({
  selector: 'app-movie-details',
  imports: [AsyncPipe, CardModule, ProgressSpinner, ButtonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private movieService = inject(MoviesService);
  private watchListService = inject(WatchListService);
  currentMovie$ = this.movieService.currentMovie$;
  loading$ = this.movieService.loading$;
  error$ = this.movieService.error$;
  movieId: string | null = null;

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
    console.log('Movie ID:', this.movieId);
    if (this.movieId) {
      this.movieService.loadCurrentMovie(this.movieId);
    }
  }

  goBack() {
    this.router.navigate(['/movies']);
  }

  addToWatchList(movie: MovieDetails) {
    this.watchListService.addToWatchList(movie);
  }
}
