import { Usuarios } from './../model/usuarios';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly arquivoJson = '/assets/cartoes.json';
  private readonly API = 'http://localhost:8080/api/usuario';


  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Usuarios[]>(this.API).pipe(
      first(),
      delay(2000),
      tap((usuarios) => console.log(usuarios))
    );
  }

  save(record: Usuarios){
    return this.httpClient.post<Usuarios>(this.API, record);
  }

  onExcluirUsuarioById(id: any){
    'Sucesso ao chamar o método - onExcluirUsuario() teste' + id

    this.httpClient.delete(this.API+`/${id}`).subscribe();


  }
}
