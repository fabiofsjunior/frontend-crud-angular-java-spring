import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ExcluirCartaoDialogComponent } from 'src/app/componentes/cartoes/excluir-cartao-dialog/excluir-cartao-dialog.component';
import {
  ExcluirUsuarioDialogComponent,
} from 'src/app/componentes/usuarios/excluir-usuario-dialog/excluir-usuario-dialog.component';

import { Usuarios } from '../../model/usuarios';
import {
  EditarUsuarioDialogComponent,
} from './editar-usuario-dialog/editar-usuario-dialog.component';
import {
  ExibirCartoesUsuarioComponent,
} from './exibir-cartoes-usuario/exibir-cartoes-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent {
  usuarios$: Observable<Usuarios[]>;

  loading = false;

  displayedColumns: string[] = [
    'idUsuario',
    'nomeUsuario',
    'emailUsuario',
    'cartoesUsuario',
    'editar',
    'excluir',
  ];

  constructor(
    public route: ActivatedRoute,
    private usuarioService: UsuarioService,
    public dialog: MatDialog,
    public httpClient: HttpClient
  ) {
    this.usuarios$ = this.usuarioService.list().pipe(
      catchError((error) => {
        this.openDialogError(
          'Erro ao carregar Usuários, perca de comunicação com a Database'
        );

        return of([]);
      })
    );
  }

  openDialogError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onCriarUsuario() {
    console.log('Sucesso ao chamar o método - onCriarUsuario()');
    const dialogRef = this.dialog.open(CadastrarUsuarioComponent, {
      autoFocus: false,
      closeOnNavigation: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onVerCartoes(id: any) {
    console.log('Sucesso ao chamar o método - onVerCartoes()' + JSON.stringify(id));
    const dialogRef = this.dialog.open(ExibirCartoesUsuarioComponent, {
        data: { id: id.idUsuario },

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onEditar(): void {
    console.log('Sucesso ao chamar o método - onEditar()');
    const dialogRef = this.dialog.open(EditarUsuarioDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onExcluir(): void {
    console.log('Sucesso ao chamar o método - onExcluir()');
    const dialogRef = this.dialog.open(ExcluirCartaoDialogComponent);

    this.httpClient.delete<Usuarios>;

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onExcluirUsuario(id: string): void {

    const dialogRef = this.dialog.open(ExcluirUsuarioDialogComponent, {
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        console.log('Chamandoo - onExcluirUsuario() => USUARIOS.COMP.TS ' + id)
        console.log('Chamandoo - onExcluirUsuario() => USUARIOS.COMP.TS ' + id.toString())
        console.log('Chamandoo - onExcluirUsuario() => USUARIOS.COMP.TS ' + JSON.stringify(id)
        )
        this.usuarioService.onExcluirUsuarioById(id);
      }
    });
  }
}
