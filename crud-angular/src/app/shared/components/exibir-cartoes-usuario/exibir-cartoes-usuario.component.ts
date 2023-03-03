import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { Cartoes } from 'src/app/componentes/model/cartoes';
import { CartoesService } from 'src/app/componentes/services/cartoes.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { ExcluirDialogComponent } from '../excluir-dialog/excluir-dialog.component';

@Component({
  selector: 'app-exibir-cartoes-usuario',
  templateUrl: './exibir-cartoes-usuario.component.html',
  styleUrls: ['./exibir-cartoes-usuario.component.scss'],
})
export class ExibirCartoesUsuarioComponent {
  cartoes$: Observable<Cartoes[]>;

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
    public dialog: MatDialog
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

  onExcluir(id: number) {
    console.log('Chamando botão excluir, ExibirCartoes.ts');
    const dialogRef = this.dialog.open(ExcluirDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`se Confirmar ele deleta o ficheiro: ${result}`);
      if (result == true) {
        this.cartoesService.deletarByid(id);
      }
    });
  }
}
