import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAllStoresComponent } from './list-of-all-stores.component';

describe('ListOfAllStoresComponent', () => {
  let component: ListOfAllStoresComponent;
  let fixture: ComponentFixture<ListOfAllStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfAllStoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfAllStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
