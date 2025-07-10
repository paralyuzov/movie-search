import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, finalize } from 'rxjs';
import { Movie, MovieDetails, MovieResponse } from '../models/Movies';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private BASE_URL = `http://www.omdbapi.com/?apikey=${environment.omdbApiKey}&`;
  private movies = new BehaviorSubject<Movie[] | null>(null);
  private error = new BehaviorSubject<string | null>(null);
  private loading = new BehaviorSubject<boolean>(false);
  private currentMovie = new BehaviorSubject<MovieDetails | null>(null);
  public readonly movies$ = this.movies.asObservable();
  public readonly error$ = this.error.asObservable();
  public readonly loading$ = this.loading.asObservable();
  public readonly currentMovie$ = this.currentMovie.asObservable();

  constructor(private http: HttpClient) {}

  getMovies(movieName: string) {
    return this.http
      .get<MovieResponse>(`${this.BASE_URL}s=${movieName}`)
      .pipe(map((response) => response.Search || []));
  }

  getCurrentMovie(imdbID: string) {
    return this.http.get<MovieDetails>(
      `${this.BASE_URL}i=${imdbID}`
    );
  }

  loadMovies(movieName: string) {
    this.loading.next(true);
    this.error.next(null);

    this.getMovies(movieName)
      .pipe(
        finalize(() => {
          this.loading.next(false);
          console.log('Request finished');
        })
      )
      .subscribe({
        next: (movies) => {
          this.movies.next(movies);
          console.log(movies);
        },
        error: (error) => {
          this.error.next('Failed to load movies');
          console.error('Error loading movies:', error);
        },
      });
  }

  loadCurrentMovie(imdbID: string) {
    this.loading.next(true);
    this.error.next(null);
    this.getCurrentMovie(imdbID)
      .pipe(
        finalize(() => {
          this.loading.next(false);
          console.log('Current movie request finished');
        })
      )
      .subscribe({
        next: (movieDetails) => {
          this.currentMovie.next(movieDetails);
          console.log('Current movie loaded successfully');
        },
        error: (error) => {
          this.error.next('Failed to load current movie');
          console.error('Error loading current movie:', error);
        },
      });
  }
}
