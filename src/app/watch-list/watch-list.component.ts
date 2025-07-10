import { Component, inject, OnInit } from '@angular/core';
import { WatchListService } from './watch-list.service';
import { MovieDetails } from '../models/Movies';
import { AsyncPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch-list',
  imports: [AsyncPipe,CardModule,ButtonModule],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css',
})
export class WatchListComponent implements OnInit {
  watchListService = inject(WatchListService);
  router = inject(Router);
  watchList$ = this.watchListService.watchList$;
  loading$ = this.watchListService.loading$;
  error$ = this.watchListService.error$;

  ngOnInit(): void {
    this.watchListService.loadWatchList();
  }

  addMovie(movie:MovieDetails) {
    this.watchListService.addToWatchList(movie);
  }

  goBack() {
    this.router.navigate(['/movies']);
  }

  removeFromWatchList(movie: MovieDetails) {
    this.watchListService.removeFromWatchList(movie);
  }

}
