import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPickUpLocationComponent } from './edit-pick-up-location.component';

describe('EditPickUpLocationComponent', () => {
  let component: EditPickUpLocationComponent;
  let fixture: ComponentFixture<EditPickUpLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPickUpLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPickUpLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
