import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBookingComponent } from './table-booking.component';

describe('TableBookingComponent', () => {
  let component: TableBookingComponent;
  let fixture: ComponentFixture<TableBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
