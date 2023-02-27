import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/internal/operators/delay';
import { first } from 'rxjs/internal/operators/first';
import { tap } from 'rxjs/internal/operators/tap';

import { Cartoes } from './../model/cartoes';

@Injectable({
  providedIn: 'root',
})
export class CartoesService {
  //path da API
  private readonly arquivoJson = '/assets/cartoes.json';
  private readonly API = 'http://localhost:8080/api/cartao';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Cartoes[]> {
    return this.httpClient.get<Cartoes[]>(this.API);
  }

  list() {
    return this.httpClient.get<Cartoes[]>(this.arquivoJson).pipe(
      first(),
      delay(2000),
      tap((cartoes) => console.log(cartoes))
    );
  }

  save(record: Cartoes){
    return this.httpClient.post<Cartoes>(this.API, record).pipe(
      first(),
    );
  }
}
