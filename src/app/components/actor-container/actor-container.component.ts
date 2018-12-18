import { Component, OnInit } from '@angular/core';
import { ActorResponse } from '../../shared/models/actor';
import { ActorService } from 'src/app/shared/services/actor/actor.service';
import { ErrorService } from 'src/app/shared/services/error/error.service';
@Component({
  selector: 'app-actor-container',
  templateUrl: './actor-container.component.html',
  styleUrls: ['./actor-container.component.scss']
})
export class ActorContainerComponent implements OnInit {

  page = 1;
  actors: ActorResponse;
  trending = false;
  enableShowMore = true;
  append = true;
  searchText = '';
  constructor(public actorService: ActorService , public errorService: ErrorService) {
    this.search();
  }

  ngOnInit() {
  }

  searchTextChange(searchText: string) {
    this.page = 1;
    this.append = false;
    this.searchText = searchText;
    this.search();
  }

  search() {
    const searchText = this.searchText;
    if (searchText) {
      this.actorService.searchActors(this.page, searchText).subscribe(res => {
        this.successCallback(res);
      }, error => {
        this.errorCallback(error);
      });
    } else {

      this.actorService.getPopularActors(this.page).subscribe(res => {
        this.successCallback(res);
      }, error => {
        this.errorCallback(error);
      });


    }
  }

  showMore() {
    this.page += 1;
    this.append = true;
    this.search();
  }

  successCallback(res: ActorResponse) {
    if (this.append && this.actors) {
      this.actors.results = this.actors.results.concat(res.results);
    } else {
      this.actors = res;
    }

    if (this.trending || res.total_pages <= this.page) {
      this.enableShowMore = false;
    } else {
      this.enableShowMore = true;
    }
  }

  errorCallback(error: any) {
    this.errorService.error.emit(error);
  }


}
