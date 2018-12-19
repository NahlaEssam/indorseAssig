import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorService } from 'src/app/shared/services/error/error.service';
import { ActorService } from 'src/app/shared/services/actor/actor.service';
import { ActorDetails, ActorImages, ActorMovieCredit } from '../../shared/models/actor';
import { ActivatedRoute } from '@angular/router';
import { Observable, zip } from 'rxjs';

@Component({
  selector: 'app-detailed-actor',
  templateUrl: './detailed-actor.component.html',
  styleUrls: ['./detailed-actor.component.scss']
})
export class DetailedActorComponent implements OnInit, OnDestroy {

  actorId: number;
  actor: ActorDetails;
  images: ActorImages;
  actorMoviesCredit: ActorMovieCredit;
  private sub: any;
  constructor(public actorService: ActorService, public errorService: ErrorService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.actorId = +params['id'];
      if (this.actorId !== undefined) {
        this.getActor();
      }
    });


  }

  ngOnInit() {
  }

  getActor() {
    // this.actorService.getActor(this.actorId).subscribe(res => {
    //   this.actor = res;
    // }, error => {
    //   this.errorService.error.emit(error);
    // });

    zip(this.actorService.getActor(this.actorId),
      this.actorService.getActorImages(this.actorId),
      this.actorService.getActorMovieCredit(this.actorId))
      .subscribe((value: any) => {
        if (value && value.length !== 0) {
          this.actor = value[0];
          this.images = value[1];
          this.actorMoviesCredit = value[2];
        }
      }, error => {
        this.errorService.error.emit(error);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
