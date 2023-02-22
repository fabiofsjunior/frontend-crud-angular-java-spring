import { Observable } from 'rxjs/internal/Observable';
import { Cartoes } from './../model/cartoes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartoesService {
  [x: string]: any;
  //path da API
  private readonly arquivoJson = '/assets/cartoes.json';
  private readonly API = 'http://localhost:8080/cartao';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Cartoes[]> {
    return this.httpClient.get<Cartoes[]>(this.arquivoJson)
  }
}
