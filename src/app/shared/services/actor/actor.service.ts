import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE } from '../baseUrl';
import { ActorDetails, ActorResponse, ActorImages, ActorMovieCredit} from '../../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  getPopularActors(page: number): Observable<ActorResponse> {
    const url = BASE.constructUrl(`person/popular`, `page=${page}`);
    return this.http.get<ActorResponse>(url);
  }

  getActor(personId: number): Observable<ActorDetails> {
    const url = BASE.constructUrl(`person/${personId}`, '');
    return this.http.get<ActorDetails>(url);
  }

  searchActors(page: number, searchText: string): Observable<ActorResponse> {
    const url = BASE.constructUrl(`search/person`, `page=${page}&query=${searchText}`);
    return this.http.get<ActorResponse>(url);
  }

  getActorImages(personId: number): Observable<ActorImages> {
    const url = BASE.constructUrl(`person/${personId}/images`, '');
    return this.http.get<ActorImages>(url);
  }

  getActorMovieCredit(personId: number): Observable<ActorMovieCredit> {
    const url = BASE.constructUrl(`person/${personId}/movie_credits`, '');
    return this.http.get<ActorMovieCredit>(url);
  }
}
