import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorContainerComponent } from './actor-container.component';

describe('ActorContainerComponent', () => {
  let component: ActorContainerComponent;
  let fixture: ComponentFixture<ActorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
