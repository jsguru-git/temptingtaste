import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpLocationComponent } from './pick-up-location.component';

describe('PickUpLocationComponent', () => {
  let component: PickUpLocationComponent;
  let fixture: ComponentFixture<PickUpLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
