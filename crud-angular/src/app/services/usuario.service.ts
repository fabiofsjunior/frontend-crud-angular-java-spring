import { Usuarios } from '../model/usuarios';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly arquivoJson = '/assets/cartoes.json';
  private readonly API = 'http://localhost:8080/api/usuario';
  snackBar: any;

  constructor(private httpClient: HttpClient) {}

  ////GET
  list() {
    return this.httpClient.get<Usuarios[]>(this.API).pipe(
      first(),
      delay(2000),
      tap((usuarios) => console.log(usuarios))
    );
  }

  ////POST
  save(record: any) {
    return this.httpClient.post<Usuarios>(
      this.API + `/${record.idUsuario}`,
      record
    );
    this.refresh();
  }

  ////PUT
  alteraUsuario(record: Usuarios, id: number) {
    return (
      this.httpClient.put<Usuarios>(this.API + `/${id}`, record).subscribe(
        (result) => this.onSucess(),
        (error) => this.onError()
      ),
      this.refresh()
    );
  }

  onExcluirUsuarioById(id: any) {
    this.httpClient.delete(this.API + `/${id}`).subscribe();
    this.refresh();
  }

  refresh() {
    window.location.reload();
  }

  private onSucess() {
    return this.snackBar.open('SUCESSO NA SOLICITAÇÃO!', '', {
      duration: 5000,
    });
  }

  private onError() {
    return this.snackBar.open('ERROR NA SOLICITAÇÃO!', '', {
      duration: 5000,
    });
  }
}
