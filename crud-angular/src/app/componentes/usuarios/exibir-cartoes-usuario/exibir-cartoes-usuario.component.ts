import { CadastrarCartaoDialogComponent } from '../../cartoes/cadastrar-cartao-dialog/cadastrar-cartao-dialog.component';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { Cartoes } from 'src/app/model/cartoes';
import { CartoesService } from 'src/app/services/cartoes.service';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ExcluirCartaoDialogComponent } from '../../cartoes/excluir-cartao-dialog/excluir-cartao-dialog.component';
import { Usuarios } from 'src/app/model/usuarios';

@Component({
  selector: 'app-exibir-cartoes-usuario',
  templateUrl: './exibir-cartoes-usuario.component.html',
  styleUrls: ['./exibir-cartoes-usuario.component.scss'],
})
export class ExibirCartoesUsuarioComponent {
  cartoes$: Observable<Cartoes[]>;

  // cartoesUsuario: Observable<Usuarios>;

  loading = false;

  displayedColumns: string[] = [
    'numeroCartao',
    'nomeCartao',
    'statusCartao',
    'tipoCartao',
    'excluir',
  ];

  constructor(
    private cartoesService: CartoesService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public dadosUsuario: any
  ) {
    this.cartoes$ = this.cartoesService.list().pipe(
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

  saveCartaoDialog(usuarioNomeId: any) {
    console.log('Chamando botão excluir, ExibirCartoes.ts' + usuarioNomeId);
    let idDoUsuarioString: string = JSON.stringify(usuarioNomeId);
    console.log(idDoUsuarioString +"Sucesso até aqui, veja no próximo dialogo!");
    const dialogRef = this.dialog.open(CadastrarCartaoDialogComponent, {
      data: { id: usuarioNomeId.id, nome: usuarioNomeId.nome },
    });


    dialogRef.afterClosed().subscribe((result) => {
      console.log(`se Confirmar ele deleta o ficheiro: ${result}`);
      if (result == true) {
        this.cartoesService.deletarByid(usuarioNomeId);
      }
    });
  }

  onExcluir(id: number) {
    console.log('Chamando botão excluir, ExibirCartoes.ts');
    const dialogRef = this.dialog.open(ExcluirCartaoDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`se Confirmar ele deleta o ficheiro: ${result}`);
      if (result == true) {
        this.cartoesService.deletarByid(id);
      }
    });
  }
}
