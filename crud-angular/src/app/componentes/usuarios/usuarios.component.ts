import { CadastrarUsuarioComponent } from './../cadastrar-usuario/cadastrar-usuario.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { EditarDialogComponent } from 'src/app/shared/components/editar-dialog/editar-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ExcluirDialogComponent } from 'src/app/shared/components/excluir-dialog/excluir-dialog.component';

import { Usuarios } from '../model/usuarios';
import {
  ExibirCartoesUsuarioComponent,
} from './../../shared/components/exibir-cartoes-usuario/exibir-cartoes-usuario.component';
import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent {
  usuarios$: Observable<Usuarios[]>;

  loading = false;

  displayedColumns: string[] = [
    '_id',
    'nomeUsuario',
    'emailUsuario',
    'cartoesUsuario',
    'editar',
    'excluir',
  ];

  constructor(
    private usuarioService: UsuarioService,
    public dialog: MatDialog
  ) {
    this.usuarios$ = this.usuarioService.list().pipe(
      catchError((error) => {
        this.openDialogError('Erro ao carregar cartões');

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
    const dialogRef = this.dialog.open(CadastrarUsuarioComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  

  }

  onVerCartoes() {
    console.log('Sucesso ao chamar o método - onVerCartoes()');
    const dialogRef = this.dialog.open(ExibirCartoesUsuarioComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onEditar(): void {
    console.log('Sucesso ao chamar o método - onEditar()');
    const dialogRef = this.dialog.open(EditarDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onExcluir(): void {
    console.log('Sucesso ao chamar o método - onExcluir()');
    const dialogRef = this.dialog.open(ExcluirDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSolicitarCartao(): void {
    console.log('Sucesso ao chamar o método - onSolicitarCartao()');
  }
}
