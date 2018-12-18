import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorService } from 'src/app/shared/services/error/error.service';
import { ActorService } from 'src/app/shared/services/actor/actor.service';
import { ActorDetails } from '../../shared/models/actor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-actor',
  templateUrl: './detailed-actor.component.html',
  styleUrls: ['./detailed-actor.component.scss']
})
export class DetailedActorComponent implements OnInit, OnDestroy {

  actorId: number;
  actor: ActorDetails;
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
    this.actorService.getActor(this.actorId).subscribe(res => {
      this.actor = res;
    }, error => {
      this.errorService.error.emit(error);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
