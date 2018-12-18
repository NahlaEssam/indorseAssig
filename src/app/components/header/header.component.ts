import { Component, OnInit } from '@angular/core';
import { Header } from '../../shared/models/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerItems: Header[] = [{
    title: 'Movies',
    url: '/movies'
  }, {
    title: 'Actors',
    url: '/actors'
  }];
  constructor() { }

  ngOnInit() {
  }

}
