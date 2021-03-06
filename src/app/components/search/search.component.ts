import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  _searchText: '';
  @Output() searchText: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder: string;
  constructor() { }

  ngOnInit() {
  }

  search(event: any) {
    this.searchText.emit(this._searchText);
  }
}
