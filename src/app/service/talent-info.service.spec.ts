import { TestBed } from '@angular/core/testing';

import { TalentInfoService } from './talent-info.service';

describe('TalentInfoService', () => {
  let service: TalentInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
