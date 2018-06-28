import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestimonialsComponent } from './add-testimonials.component';

describe('AddTestimonialsComponent', () => {
  let component: AddTestimonialsComponent;
  let fixture: ComponentFixture<AddTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
