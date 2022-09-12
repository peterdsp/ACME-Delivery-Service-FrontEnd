import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTopStoreProductsComponent } from './report-top-store-products.component';

describe('ReportTopStoreProductsComponent', () => {
  let component: ReportTopStoreProductsComponent;
  let fixture: ComponentFixture<ReportTopStoreProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTopStoreProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTopStoreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
