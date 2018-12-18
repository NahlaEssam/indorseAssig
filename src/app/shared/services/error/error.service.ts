import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  error: EventEmitter<any> = new EventEmitter();
  constructor() { }

}
