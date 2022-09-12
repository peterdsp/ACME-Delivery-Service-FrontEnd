import { TestBed } from '@angular/core/testing';

import { ReportTopStoresService } from './report-top-stores.service';

describe('ReportTopStoresService', () => {
  let service: ReportTopStoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportTopStoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
