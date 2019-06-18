import { TestBed } from '@angular/core/testing';

import { CalcCurrencyService } from './calc-currency.service';

describe('CalcCurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcCurrencyService = TestBed.get(CalcCurrencyService);
    expect(service).toBeTruthy();
  });
});
