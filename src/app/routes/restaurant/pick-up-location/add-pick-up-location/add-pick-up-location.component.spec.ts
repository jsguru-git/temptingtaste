import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPickUpLocationComponent } from './add-pick-up-location.component';

describe('AddPickUpLocationComponent', () => {
  let component: AddPickUpLocationComponent;
  let fixture: ComponentFixture<AddPickUpLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPickUpLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPickUpLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
