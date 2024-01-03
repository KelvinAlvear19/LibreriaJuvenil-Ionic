import { TestBed } from '@angular/core/testing';

import { LibroPruebaService } from './libro-prueba.service';

describe('LibroPruebaService', () => {
  let service: LibroPruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroPruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
