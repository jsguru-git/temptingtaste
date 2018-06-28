import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainCategoriesComponent } from './add-main-categories.component';

describe('AddMainCategoriesComponent', () => {
  let component: AddMainCategoriesComponent;
  let fixture: ComponentFixture<AddMainCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMainCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMainCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
