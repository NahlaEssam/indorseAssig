import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import { MoviesResponse } from '../../shared/models/movie';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent implements OnInit {

  constructor(public movieService: MovieService) {
  }

  ngOnInit() {
  }

}
