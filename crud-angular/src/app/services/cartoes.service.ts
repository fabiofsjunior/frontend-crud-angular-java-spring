import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/internal/operators/delay';
import { first } from 'rxjs/internal/operators/first';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/operators';

import { Cartoes } from '../model/cartoes';
import { Usuarios } from '../model/usuarios';

@Injectable({
  providedIn: 'root',
})
export class CartoesService {
  //path da API
  private readonly arquivoJson = '/assets/cartoes.json';
  private readonly API = 'http://localhost:8080/api/cartao';
  snackBar: any;

  constructor(private httpClient: HttpClient) {}

  ////GET
  list() {
    return this.httpClient.get<Cartoes[]>(this.API).pipe(
      first(),
      delay(2000),
      tap((cartoes) => console.log(cartoes))
    );
  }
  ////GET BYID
  listarById(_id: any) {
    return this.httpClient.get<Cartoes[]>(`${this.API}/${_id}`).pipe(
      first(),
      delay(2000),

    );
    this.refresh();
  }
  ////POST
  save(record: Cartoes) {
    return this.httpClient.post<Cartoes>(this.API, record).pipe(first());
    this.refresh();
  }
  //// POST BYID
  saveById(record: Cartoes) {
    return this.httpClient
      .post<Cartoes>(this.API + `/${record}`, record)
      .pipe(first());
    this.refresh();
  }

  //// PUT
  alterarStatusCartao(record: Cartoes, id: number) {
    return (
      this.httpClient.put<Cartoes>(this.API + `/${id}`, record).subscribe(
          (result) => this.onSucess(),
          (error) => this.onError()
        ),
        this.refresh()
    )
  }
  ///DELETE
  deletarByid(id: number): void {
    this.httpClient.delete<Cartoes>(this.API + `/${id}`).subscribe();
    this.list();
    this.refresh();
  }

  ///DELETE BY ID
  deletarCartaoByid(id: any): void {
    this.httpClient.delete<Cartoes>(this.API + `/${id.id}`).subscribe();
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }

  private onSucess() {
    return this.snackBar.open('SUCESSO NA SOLICITAÇÃO!', '', {
      duration: 5000,
    }),
    this.refresh()
  }

  private onError() {
    return this.snackBar.open('ERROR NA SOLICITAÇÃO!', '', {
      duration: 5000,
    });
  }
}
