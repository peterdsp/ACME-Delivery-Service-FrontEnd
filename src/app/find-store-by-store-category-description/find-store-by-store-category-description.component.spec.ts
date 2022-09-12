import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStoreByStoreCategoryDescriptionComponent } from './find-store-by-store-category-description.component';

describe('FindStoreByStoreCategoryDescriptionComponent', () => {
  let component: FindStoreByStoreCategoryDescriptionComponent;
  let fixture: ComponentFixture<FindStoreByStoreCategoryDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindStoreByStoreCategoryDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindStoreByStoreCategoryDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
