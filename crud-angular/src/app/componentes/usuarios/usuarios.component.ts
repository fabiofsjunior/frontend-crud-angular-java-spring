import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ExcluirCartaoDialogComponent } from 'src/app/componentes/cartoes/excluir-cartao-dialog/excluir-cartao-dialog.component';
import { ExcluirUsuarioDialogComponent } from 'src/app/componentes/usuarios/excluir-usuario-dialog/excluir-usuario-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Usuarios } from '../../model/usuarios';
import { UsuarioService } from '../../services/usuario.service';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuarioDialogComponent } from './editar-usuario-dialog/editar-usuario-dialog.component';
import { ExibirCartoesUsuarioComponent } from './exibir-cartoes-usuario/exibir-cartoes-usuario.component';

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
    private httpClient: HttpClient
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
    const dialogRef = this.dialog.open(CadastrarUsuarioComponent, {
      autoFocus: false,
      closeOnNavigation: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onVerCartoes(usuarioData: any) {
    console.log(
      'Chamando o método - onVerCartoes()' +
        JSON.stringify(
          usuarioData + 'Sucesso até o AQUI veja no prox dialogo>>'
        )
    );
    console.log("NOME "+usuarioData.nomeUsuario)
    console.log("ID "+usuarioData.idUsuario)

    
    const dialogRef = this.dialog.open(ExibirCartoesUsuarioComponent, {
      data: { id: usuarioData.idUsuario, nome: usuarioData.nomeUsuario },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onEditar(dados: any): void {
    const dialogRef = this.dialog.open(EditarUsuarioDialogComponent, {
      data: {
        id: dados.idUsuario,
        nome: dados.nomeUsuario,
        email: dados.emailUsuario,
        senha: dados.senhaUsuario,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onExcluir(): void {
    const dialogRef = this.dialog.open(ExcluirCartaoDialogComponent);

    this.httpClient.delete<Usuarios>;

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onExcluirUsuario(id: string): void {
    const dialogRef = this.dialog.open(ExcluirUsuarioDialogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.usuarioService.onExcluirUsuarioById(id);
      }
    });
  }
}
