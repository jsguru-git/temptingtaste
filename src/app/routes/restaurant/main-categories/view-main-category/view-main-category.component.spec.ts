import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMainCategoryComponent } from './view-main-category.component';

describe('ViewMainCategoryComponent', () => {
  let component: ViewMainCategoryComponent;
  let fixture: ComponentFixture<ViewMainCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMainCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
