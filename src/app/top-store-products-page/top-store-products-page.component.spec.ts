import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoreProductsPageComponent } from './top-store-products-page.component';

describe('TopStoreProductsPageComponent', () => {
  let component: TopStoreProductsPageComponent;
  let fixture: ComponentFixture<TopStoreProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopStoreProductsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopStoreProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
