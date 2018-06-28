import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVendorComponent } from './edit-vendor.component';

describe('EditVendorComponent', () => {
  let component: EditVendorComponent;
  let fixture: ComponentFixture<EditVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
