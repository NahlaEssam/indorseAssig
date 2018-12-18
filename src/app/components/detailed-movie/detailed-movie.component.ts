import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieDetails } from '../../shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import { ErrorService } from 'src/app/shared/services/error/error.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-movie',
  templateUrl: './detailed-movie.component.html',
  styleUrls: ['./detailed-movie.component.scss']
})
export class DetailedMovieComponent implements OnInit, OnDestroy {

  movieId: number;
  movie: MovieDetails;
  private sub: any;
  constructor(public actorService: MovieService, public errorService: ErrorService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.movieId = +params['id'];
      if (this.movieId !== undefined) {
        this.getMovie();
      }
    });


  }

  ngOnInit() {
  }

  getMovie() {
    this.actorService.getMovie(this.movieId).subscribe(res => {
      this.movie = res;
    }, error => {
      this.errorService.error.emit(error);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
