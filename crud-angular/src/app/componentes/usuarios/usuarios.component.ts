import { UsuarioService } from './../services/usuario.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { EditarDialogComponent } from 'src/app/shared/components/editar-dialog/editar-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ExcluirDialogComponent } from 'src/app/shared/components/excluir-dialog/excluir-dialog.component';
import { Cartoes } from '../model/cartoes';
import { CartoesService } from '../services/cartoes.service';
import { Usuarios } from '../model/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
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

  onCriarUsuario(){

  }

  onVerCartoes(){
    
  }

  onEditar(): void {
    console.log('Sucesso ao chamar o método - onEditar()');
    const dialogRef = this.dialog.open(EditarDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onExcluir(): void {
    console.log('Sucesso ao chamar o método - onExcluir()');
    const dialogRef = this.dialog.open(ExcluirDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSolicitarCartao(): void {
    console.log('Sucesso ao chamar o método - onSolicitarCartao()');
  }


}
