import { TestBed } from '@angular/core/testing';

import { CartpiService } from './cartpi.service';

describe('CartpiService', () => {
  let service: CartpiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartpiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
