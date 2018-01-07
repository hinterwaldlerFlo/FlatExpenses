import { TestBed, inject } from '@angular/core/testing';

import { BalanceApiService } from './balance-api.service';

describe('BalanceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BalanceApiService]
    });
  });

  it('should be created', inject([BalanceApiService], (service: BalanceApiService) => {
    expect(service).toBeTruthy();
  }));
});
