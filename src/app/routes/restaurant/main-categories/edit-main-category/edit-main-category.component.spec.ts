import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMainCategoryComponent } from './edit-main-category.component';

describe('EditMainCategoryComponent', () => {
  let component: EditMainCategoryComponent;
  let fixture: ComponentFixture<EditMainCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMainCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
