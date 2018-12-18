import { Component, OnInit , Input} from '@angular/core';
import { Actor } from '../../shared/models/actor';
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {
  @Input() actor: Actor;
  constructor() { }

  ngOnInit() {
  }

}
