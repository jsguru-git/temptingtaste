import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestimonialsComponent } from './view-testimonials.component';

describe('ViewTestimonialsComponent', () => {
  let component: ViewTestimonialsComponent;
  let fixture: ComponentFixture<ViewTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
