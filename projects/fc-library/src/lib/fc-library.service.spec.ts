import { TestBed } from '@angular/core/testing';

import { FcLibraryService } from './fc-library.service';

describe('FcLibraryService', () => {
  let service: FcLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
