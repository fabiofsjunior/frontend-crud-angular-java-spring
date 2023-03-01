import { TestBed } from '@angular/core/testing';

import { CadastrarCartaoService } from './cadastrar-cartao.service';

describe('CadastrarCartaoService', () => {
  let service: CadastrarCartaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarCartaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
