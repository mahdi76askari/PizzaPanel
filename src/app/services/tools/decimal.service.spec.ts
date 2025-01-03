/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DecimalService } from './decimal.service';

describe('Service: Decimal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecimalService]
    });
  });

  it('should ...', inject([DecimalService], (service: DecimalService) => {
    expect(service).toBeTruthy();
  }));
});
