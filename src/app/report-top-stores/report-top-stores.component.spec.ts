import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTopStoresComponent } from './report-top-stores.component';

describe('ReportTopStoresComponent', () => {
  let component: ReportTopStoresComponent;
  let fixture: ComponentFixture<ReportTopStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTopStoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTopStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
