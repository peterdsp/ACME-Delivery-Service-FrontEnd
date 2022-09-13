import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoresPageComponent } from './top-stores-page.component';

describe('TopStoresPageComponent', () => {
  let component: TopStoresPageComponent;
  let fixture: ComponentFixture<TopStoresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopStoresPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopStoresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
