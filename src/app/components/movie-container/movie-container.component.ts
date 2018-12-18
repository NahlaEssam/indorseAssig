import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import { MoviesResponse } from '../../shared/models/movie';
import { ErrorService } from 'src/app/shared/services/error/error.service';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent implements OnInit {

  page = 1;
  movies: MoviesResponse;
  trending = false;
  enableShowMore = true;
  append = true;
  searchText = '';
  constructor(public movieService: MovieService, public errorService: ErrorService) {
    this.search();
  }

  ngOnInit() {
  }

  searchTextChange(searchText: string) {
    this.page = 1;
    this.append = false;
    this.searchText = searchText;
    this.search();
  }
  searchTypeChange() {
    this.page = 1;
    this.trending = !this.trending;
    this.append = false;
    this.search();
  }
  search() {
    const searchText = this.searchText;
    if (searchText) {
      this.movieService.searchMovies(this.page, searchText).subscribe(res => {
        this.successCallback(res);
      }, error => {
        this.errorCallback(error);
      });
    } else {
      if (this.trending) {
        this.movieService.getTrendingMovies().subscribe(res => {
          this.successCallback(res);

        }, error => {
          this.errorCallback(error);
        });
      } else {
        this.movieService.getPopularMovies(this.page).subscribe(res => {
          this.successCallback(res);
        }, error => {
          this.errorCallback(error);
        });
      }

    }
  }

  showMore() {
    this.page += 1;
    this.append = true;
    this.search();
  }

  successCallback(res: MoviesResponse) {

    if (this.append && this.movies) {
      this.movies.results = this.movies.results.concat(res.results);
    } else {
      this.movies = res;
    }

    if (this.trending || res.total_pages <= this.page) {
      this.enableShowMore = false;
    } else {
      this.enableShowMore = true;
    }
  }

  errorCallback(error: any) {
    this.errorService.error.emit(error);
  }

}
