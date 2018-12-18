import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesResponse } from '../../models/movie';
import { BASE } from '../baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  BaseUrl = 'https://reqres.in/api';
  constructor(private http: HttpClient) { }

  getPopularMovies(page: number): Observable<MoviesResponse> {
    const url = BASE.constructUrl(`movie/popular`, `page=${page}`);
    return this.http.get<MoviesResponse>(url);
  }

  getTrendingMovies(): Observable<MoviesResponse> {
    const url = BASE.constructUrl(`trending/movie/day`, '');
    return this.http.get<MoviesResponse>(url);
  }

  getMovie(movieId: number): Observable<MoviesResponse> {
    const url = BASE.constructUrl(`movie/${movieId}`, '');
    return this.http.get<MoviesResponse>(url);
  }

  searchMovies(page: number, searchText: string): Observable<MoviesResponse> {
    const url = BASE.constructUrl(`search/movie`, `page=${page}&query=${searchText}`);
    return this.http.get<MoviesResponse>(url);
  }

}
