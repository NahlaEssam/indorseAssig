import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieDetails, MovieCredit, MovieKeywords, MovieVideos } from '../../shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import { ErrorService } from 'src/app/shared/services/error/error.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, zip } from 'rxjs';


@Component({
  selector: 'app-detailed-movie',
  templateUrl: './detailed-movie.component.html',
  styleUrls: ['./detailed-movie.component.scss']
})
export class DetailedMovieComponent implements OnInit, OnDestroy {

  movieId: number;
  movie: MovieDetails;
  credit: MovieCredit;
  keywords: MovieKeywords;
  videos: MovieVideos;
  private sub: any;
  constructor(public movieService: MovieService, public errorService: ErrorService, private route: ActivatedRoute) {
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
    zip(this.movieService.getMovie(this.movieId),
      this.movieService.getMovieCredit(this.movieId),
      this.movieService.getMovieKeyword(this.movieId),
      this.movieService.getMovieVideos(this.movieId))
      .subscribe((value: any) => {
        if (value && value.length !== 0) {
          this.movie = value[0];
          this.credit = value[1];
          this.keywords = value[2];
          this.videos = value[3];
        }
      }, error => {
        this.errorService.error.emit(error);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
