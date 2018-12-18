import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { MovieContainerComponent } from './components/movie-container/movie-container.component';
import { MovieComponent } from './components/movie/movie.component';
import { DetailedMovieComponent } from './components/detailed-movie/detailed-movie.component';
import { ActorContainerComponent } from './components/actor-container/actor-container.component';
import { DetailedActorComponent } from './components/detailed-actor/detailed-actor.component';
import { ActorComponent } from './components/actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MovieContainerComponent,
    MovieComponent,
    DetailedMovieComponent,
    ActorContainerComponent,
    DetailedActorComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
