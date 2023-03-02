import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/internal/operators/delay';
import { first } from 'rxjs/internal/operators/first';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/operators';

import { Cartoes } from './../model/cartoes';

@Injectable({
  providedIn: 'root',
})
export class CartoesService {
  //path da API
  private readonly arquivoJson = '/assets/cartoes.json';
  private readonly API = 'http://localhost:8080/api/cartao';
  private readonly apiById = 'http://localhost:8080/api/cartao/:id';

  constructor(private httpClient: HttpClient) {}


  list() {
    return this.httpClient.get<Cartoes[]>(this.API).pipe(
      first(),
      delay(2000),
      tap((cartoes) => console.log(cartoes))
    );
  }
  listarById(_id: string): Observable<number> {
    return this.httpClient.get<Cartoes[]>(this.apiById).pipe(
      first(),
      delay(2000),
      map((cartoes) => cartoes.filter(c => c._id === _id).length),
      tap((cartoes) => console.log(cartoes))
    );
  }

  save(record: Cartoes){
    return this.httpClient.post<Cartoes>(this.API, record).pipe(
      first(),
    );
  }

  deletarByid(id: any): void{
    // console.log("deletando pelo id: " + JSON.stringify(id)
    // )
    // this.httpClient.delete<Cartoes>(this.API+`/${id}`).subscribe(

    // );

    this.httpClient.delete(this.API+`/${id.id}`)
        .subscribe();


  }
}
