import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorComponent } from './add-vendor.component';

describe('AddVendorComponent', () => {
  let component: AddVendorComponent;
  let fixture: ComponentFixture<AddVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
