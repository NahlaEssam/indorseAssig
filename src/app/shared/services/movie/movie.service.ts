import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesResponse, MovieDetails, MovieCredit, MovieKeywords, MovieVideos } from '../../models/movie';
import { BASE } from '../baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getPopularMovies(page: number): Observable<MoviesResponse> {
    const url = BASE.constructUrl(`movie/popular`, `page=${page}`);
    return this.http.get<MoviesResponse>(url);
  }

  getTrendingMovies(): Observable<MoviesResponse> {
    const url = BASE.constructUrl(`trending/movie/day`, '');
    return this.http.get<MoviesResponse>(url);
  }

  getMovie(movieId: number): Observable<MovieDetails> {
    const url = BASE.constructUrl(`movie/${movieId}`, '');
    return this.http.get<MovieDetails>(url);
  }

  searchMovies(page: number, searchText: string): Observable<MoviesResponse> {
    const url = BASE.constructUrl(`search/movie`, `page=${page}&query=${searchText}`);
    return this.http.get<MoviesResponse>(url);
  }

  getMovieCredit(movieId: number): Observable<MovieCredit> {
    const url = BASE.constructUrl(`movie/${movieId}/credits`, '');
    return this.http.get<MovieCredit>(url);
  }

  getMovieKeyword(movieId: number): Observable<MovieKeywords> {
    const url = BASE.constructUrl(`movie/${movieId}/keywords`, '');
    return this.http.get<MovieKeywords>(url);
  }

  getMovieVideos(movieId: number): Observable<MovieVideos> {
    const url = BASE.constructUrl(`movie/${movieId}/videos`, '');
    return this.http.get<MovieVideos>(url);
  }
}
