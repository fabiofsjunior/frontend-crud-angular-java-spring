import { Observable } from 'rxjs/internal/Observable';
import { Cartoes } from './../model/cartoes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { first } from 'rxjs/internal/operators/first';
import { delay } from 'rxjs/internal/operators/delay';

@Injectable({
  providedIn: 'root',
})
export class CartoesService {
  //path da API
  private readonly arquivoJson = '/assets/cartoes.json';
  private readonly API = 'http://localhost:8080/cartao';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Cartoes[]>(this.API).pipe(
      first(),
      delay(5000),
      tap(cartoes => console.log(cartoes))
    );
  }
}
