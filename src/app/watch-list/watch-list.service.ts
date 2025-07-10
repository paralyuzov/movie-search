import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieDetails } from '../models/Movies';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  private toastService = inject(ToastService);
  private watchList = new BehaviorSubject<MovieDetails[]>([]);
  private loading = new BehaviorSubject<boolean>(false);
  private error = new BehaviorSubject<string | null>(null);
  public readonly watchList$ = this.watchList.asObservable();
  public readonly loading$ = this.loading.asObservable();
  public readonly error$ = this.error.asObservable();

  constructor() {}

  addToWatchList(movie: MovieDetails) {
    this.loading.next(true);
    this.error.next(null);

    const currentList = this.watchList.getValue();

    if (!this.isInWatchList(movie)) {
      const updatedList = [...currentList, movie];
      this.watchList.next(updatedList);
      console.log('Movie added to watch list:', movie);
      localStorage.setItem('watchList', JSON.stringify(updatedList));
       this.toastService.showSuccess('Added to Watchlist', `"${movie.Title}" added successfully`);
    } else {
      this.error.next('Movie is already in watch list');
      this.toastService.showWarn('Already in Watchlist', `"${movie.Title}" is already in your watchlist`);
      console.warn('Movie is already in watch list:', movie);
    }

    this.loading.next(false);
  }

  removeFromWatchList(movie: MovieDetails) {
    this.loading.next(true);
    this.error.next(null);

    const currentList = this.watchList.getValue();
    const updatedList = currentList.filter((m) => m.imdbID !== movie.imdbID);

    if (updatedList.length < currentList.length) {
      this.watchList.next(updatedList);
      console.log('Movie removed from watch list:', movie);
      localStorage.setItem('watchList', JSON.stringify(updatedList));
      this.toastService.showSuccess('Removed from Watchlist', `"${movie.Title}" removed successfully`);
    } else {
      this.error.next('Movie not found in watch list');
      console.warn('Movie not found in watch list:', movie);
      this.toastService.showError('Remove Failed', 'Movie not found in watchlist');
    }

    this.loading.next(false);
  }

  isInWatchList(movie: MovieDetails): boolean {
    const currentList = this.watchList.getValue();
    return currentList?.some((m) => m.imdbID === movie.imdbID);
  }

  loadWatchList() {
    this.loading.next(true);
    this.error.next(null);

    const storedList = localStorage.getItem('watchList');
    if (storedList) {
      const parsedList: MovieDetails[] = JSON.parse(storedList);
      this.watchList.next(parsedList);
      console.log('Watch list loaded from local storage:', parsedList);
    } else {
      console.warn('No watch list found in local storage');
      this.watchList.next([]);
    }

    this.loading.next(false);
  }
}
