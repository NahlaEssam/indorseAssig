import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieContainerComponent } from './components/movie-container/movie-container.component';
import { DetailedMovieComponent } from './components/detailed-movie/detailed-movie.component';
import { ActorContainerComponent } from './components/actor-container/actor-container.component';
import { DetailedActorComponent } from './components/detailed-actor/detailed-actor.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieContainerComponent },
  { path: 'actors', component: ActorContainerComponent },
  { path: 'actor/:id', component: DetailedActorComponent },
  { path: 'movie/:id', component: DetailedMovieComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
