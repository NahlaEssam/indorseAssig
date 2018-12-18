import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/shared/services/error/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  error = undefined;
  constructor(public errorService: ErrorService) { }

  ngOnInit() {
    this.errorService.error.subscribe(res => {
      this.error = res;
      setTimeout(() => {
        this.error = undefined;
      }, 3000);
    });

  }

}
