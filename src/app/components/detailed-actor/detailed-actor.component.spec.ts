import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedActorComponent } from './detailed-actor.component';

describe('DetailedActorComponent', () => {
  let component: DetailedActorComponent;
  let fixture: ComponentFixture<DetailedActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
